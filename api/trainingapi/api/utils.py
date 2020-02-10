import xmltodict
import json
import re
from toposort import toposort_flatten
from datetime import datetime
from .models import Course

def get_time(time):
    """Converts string in the PT%%H%%M%%S format to %%h%%m"""

    return time.split('PT')[1].split('H')[0] + 'h' + \
            time.split('H')[1].split('M')[0] + 'm'

def top_sort(doc):

    course_dict = {}
    tobe_sorted = {}
    parent_level = None
    children = {}

    for task in doc['Project']['Tasks']['Task']:

        # remove unwanted tasks - sint&rde and journey start
        if not any([keyword in task['Name'].lower() 
                    for keyword in ['sint&rde', 'journey start']]):
            
            # extract wanted values          
            _id = int(task['ID'])
            uid = int(task['UID'])
            name = task['Name']
            
            work = get_time(task['Work'])
            
            if 'Notes' in task.keys():
                link = task['Notes']
            else:
                link = ''
            
            if 'ExtendedAttribute' in task.keys():
                if type(task['ExtendedAttribute']) == list:
                    skill = task['ExtendedAttribute'][1]['Value']
                    media = task['ExtendedAttribute'][0]['Value']
                else:
                    if task['ExtendedAttribute']['FieldID'] == '188743731':
                        media = task['ExtendedAttribute']['Value']
                        skill = ''
                    elif task['ExtendedAttribute']['FieldID'] == '188743734':
                        skill = task['ExtendedAttribute']['Value']
                        media = ''
            else:
                skill = ''
                media = ''
            
            if 'PredecessorLink' in task.keys():
                if type(task['PredecessorLink']) == list:
                    predecessor = [int(element['PredecessorUID'])
                                    for element in task['PredecessorLink']]
                else:
                    predecessor = [int(task['PredecessorLink']['PredecessorUID'])]
            else:
                predecessor = []
            
            if 63 in predecessor:
                predecessor.remove(63)
            if 0 in predecessor:
                predecessor.remove(0)
                
            length = get_time(task['Duration'])
            start = task['Start'].replace('T', ' ')
            end = task['Finish'].replace('T', ' ')

            start = datetime.strptime(start, '%Y-%m-%d %H:%M:%S')
            end = datetime.strptime(end, '%Y-%m-%d %H:%M:%S')

            # get level to determine child courses
            current_level = int(task['OutlineLevel'])
            children[uid] = []

            if parent_level == None:
                parent_level = int(task['OutlineLevel'])
                parent_uid = uid


            if current_level == parent_level + 1:
                # still the same parent
                children[parent_uid].append(uid)

            elif current_level == parent_level + 2:
                
                # one step inside
                parent_level = previous_level
                parent_uid = previous_uid
                children[parent_uid].append(uid)

            elif current_level <= parent_level:
                # reset to outer level
                parent_level = current_level
                parent_uid = uid


            previous_level = current_level
            previous_uid = uid

            course_dict[uid] = {
                                '_id': _id,
                                'name': name,
                                'skill': skill,
                                'media': media,
                                'link': link,
                                'work': work,
                                'predecessor': predecessor,
                                'length': length,
                                'start': start,
                                'end': end
            }

            if predecessor:
                tobe_sorted[uid] = {x for x in predecessor}

    return toposort_flatten(tobe_sorted), course_dict, children

def save_courses(order, course_dict, children):
    done = []
    for uid in order:
        course = Course(
            ms_uid = uid,
            ms_id = course_dict[uid]['_id'],
            name = course_dict[uid]['name'],
            work = course_dict[uid]['work'],
            link = course_dict[uid]['link'],
            skill = course_dict[uid]['skill'],
            media = course_dict[uid]['media'],
            length = course_dict[uid]['length'],
            start = course_dict[uid]['start'],
            end = course_dict[uid]['end']
        )
        course.save()
        for pred_uid in course_dict[uid]['predecessor']:
            print(pred_uid)
            predecessor = Course.objects.get(ms_uid=pred_uid)
            course.predecessor.add(predecessor)

        done.append(uid)
    
    for uid, course_dict in course_dict.items():
        if uid not in done:
            course = Course(
            ms_uid = uid,
            ms_id = course_dict['_id'],
            name = course_dict['name'],
            work = course_dict['work'],
            link = course_dict['link'],
            skill = course_dict['skill'],
            media = course_dict['media'],
            length = course_dict['length'],
            start = course_dict['start'],
            end = course_dict['end']
            )
            course.save()

    for parent_uid, child_list in children.items():
        parent = Course.objects.get(ms_uid=parent_uid)
        for child_uid in child_list:
            child = Course.objects.get(ms_uid=child_uid)
            parent.children.add(child)

def parse_xml(file):
    """
    Parses MS Project xml export and upserts in the db. 
    """

    #read file
    doc = xmltodict.parse(file)

    # topological sort
    order, course_dict, children = top_sort(doc)

    # parse and save
    save_courses(order, course_dict, children)


