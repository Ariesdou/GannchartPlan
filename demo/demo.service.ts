export default function () {
  'ngInject'

  return {
    getSampleData: function () {
      return [
        // # CAD Training Plan
        {
          id: 1,
          name: 'CAD Training Plan',
          skill: '',
          media: '',
          link: '',
          work: '33.8 hrs',
          predecessors: '',
          length: '248 hrs',
          children: ['General CAD', 'Microstation', 'Autocad'],
          tasks: [
            {
              name: 'CAD Training Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2020, 1, 6, 10, 0, 0)
            }
          ]
        },
        // ## General CAD
        {
          id: 2,
          name: 'General CAD',
          skill: '',
          media: '',
          link: '',
          work: '4 hrs',
          predecessors: '',
          length: '40 hrs',
          children: ['BCA Submission Process', 'Bluebeam 101', 'SydBUG Presentation (Yammer)'],
          tasks: [
            {
              name: 'General CAD',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 7, 10, 0, 0)
            }]
        },
        {
          id: 3,
          name: 'BCA Submission Process',
          skill: 'Beginner',
          media: 'Arup: Powerpoint',
          link: '\\\\global.arup.com\\australasia\\SIN\\Group\\T&R\\Technical\\CAD\\01-CAD Drawing Issue\\BCA Submission Workflow.pptx',
          work: '2 hrs',
          predecessors: '',
          length: '20 hrs',
          tasks: [
            {
              id: 'BCA Submission Process',
              name: 'BCA Submission Process',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 3, 12, 0, 0),
              dependencies: [{to: 'Bluebeam 101'}]
            }]
        },
        {
          id: 4,
          name: 'Bluebeam 101',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/local/kalturaview/view.php?id=0_m063sgts&return=https%3A%2F%2Fmoodle.arup.com%2Flocal%2Fsearch%2Findex.php%3Fsearch%3Dbluebeam%23tab-content-kaltura',
          work: '1 hrs',
          predecessors: '3',
          length: '10 hrs',
          tasks: [
            {
              id: 'Bluebeam 101',
              name: 'Bluebeam 101',
              color: '#9FC5F8',
              from: new Date(2019, 12, 4, 8, 0, 0),
              to: new Date(2019, 12, 5, 10, 0, 0),
              dependencies: [{to: 'SydBUG Presentation (Yammer)'}]
            }]
        },
        {
          id: 5,
          name: 'SydBUG Presentation (Yammer)',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://youtu.be/pT42xhQv87Q',
          work: '1 hrs',
          predecessors: '4',
          length: '10 hrs',
          tasks: [
            {
              id: 'SydBUG Presentation (Yammer1)',
              name: 'SydBUG Presentation (Yammer)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 7, 10, 0, 0),
              dependencies: [{to: 'Basic Training?'}]
            },
            {
              id: 'SydBUG Presentation (Yammer2)',
              name: 'SydBUG Presentation (Yammer)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 7, 10, 0, 0),
              dependencies: [{to: 'InfraWorks 360 Introduction1'}]
            },
            {
              id: 'SydBUG Presentation (Yammer)',
              name: 'SydBUG Presentation (Yammer)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 7, 10, 0, 0),
              dependencies: [{to: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 1'}]
            }
          ]
        },
        // ## Microstation
        {
          id: 6,
          name: 'Microstation',
          skill: '',
          media: '',
          link: '',
          work: '20.8 hrs',
          predecessors: '',
          length: '208 hrs',
          children: ['Basic Training?', 'GCS with Microstation', 'Microstation Enhancements', 'Microstation CONNECT for Existing Users', 'Lecture on new capabilities for improved workfow', 'Macros & VBA in microstation', 'Batch process, Detailing, GUI, etc', 'Power Of Parametric Modelling Learning Path','Projectwise Edge'],
          tasks: [
            {
              id: 'Microstation',
              name: 'Microstation',
              color: '#9FC5F8',
              from: new Date(2019, 12, 8, 8, 0, 0),
              to: new Date(2020, 1, 6, 10, 0, 0)
            }]
        },
        {
          id: 7,
          name: 'Basic Training?',
          skill: 'Beginner',
          media: '',
          link: '',
          work: '0.8 hrs',
          predecessors: '5',
          length: '8 hrs',
          tasks: [
            {
              id: 'Basic Training?1',
              name: 'Basic Training?1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 8, 8, 0, 0),
              to: new Date(2019, 12, 8, 18, 0, 0),
              dependencies: [{to: 'Introduction to OpenRoads Designer Concepts and Capabilities'}]
            },
            {
              id: 'Basic Training?',
              name: 'Basic Training?',
              color: '#9FC5F8',
              from: new Date(2019, 12, 8, 8, 0, 0),
              to: new Date(2019, 12, 8, 18, 0, 0),
              dependencies: [{to: 'GCS with Microstation'}]
            }
          ]
        },
        {
          id: 8,
          name: 'GCS with Microstation',
          skill: 'Intermediate',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=109523',
          work: '2 hrs',
          predecessors: '7',
          length: '20 hrs',
          tasks: [
            {
              id: 'GCS with Microstation',
              name: 'GCS with Microstation',
              color: '#9FC5F8',
              from: new Date(2019, 12, 9, 8, 0, 0),
              to: new Date(2019, 12, 11, 12, 0, 0),
              dependencies: [{to: 'Microstation Enhancements'}]
            }]
        },
        {
          id: 9,
          name: 'Microstation Enhancements',
          skill: 'Intermediate',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=112252',
          work: '1 hrs',
          predecessors: '8',
          length: '10 hrs',
          tasks: [
            {
              id: 'Microstation Enhancements',
              name: 'Microstation Enhancements',
              color: '#9FC5F8',
              from: new Date(2019, 12, 12, 8, 0, 0),
              to: new Date(2019, 12, 13, 10, 0, 0),
              dependencies: [{to: 'Microstation CONNECT for Existing Users'}]
            }]
        },
        {
          id: 10,
          name: 'Microstation CONNECT for Existing Users',
          skill: 'Intermediate',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=109567',
          work: '8 hrs',
          predecessors: '9',
          length: '80 hrs',
          tasks: [
            {
              id: 'Microstation CONNECT for Existing Users',
              name: 'Microstation CONNECT for Existing Users',
              color: '#9FC5F8',
              from: new Date(2019, 12, 14, 8, 0, 0),
              to: new Date(2019, 12, 23, 18, 0, 0),
              dependencies: [{to: 'Lecture on new capabilities for improved workfow'}]
            }]
        },
        {
          id: 11,
          name: 'Lecture on new capabilities for improved workfow',
          skill: 'Intermediate',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=112252',
          work: '1 hrs',
          predecessors: '10',
          length: '10 hrs',
          tasks: [
            {
              id: 'Lecture on new capabilities for improved workfow',
              name: 'Lecture on new capabilities for improved workfow',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 25, 10, 0, 0),
              dependencies: [{to: 'Macros & VBA in microstation'}]
            }]
        },
        {
          id: 12,
          name: 'Macros & VBA in microstation',
          skill: 'Intermediate',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=108942',
          work: '2 hrs',
          predecessors: '11',
          length: '20 hrs',
          tasks: [
            {
              id: 'Macros & VBA in microstation',
              name: 'Macros & VBA in microstation',
              color: '#9FC5F8',
              from: new Date(2019, 12, 26, 8, 0, 0),
              to: new Date(2019, 12, 28, 12, 0, 0),
              dependencies: [{to: 'Batch process, Detailing, GUI, etc'}]
            }]
        },
        {
          id: 13,
          name: 'Batch process, Detailing, GUI, etc',
          skill: 'Intermediate',
          media: 'BentleyLearn',
          link: 'https://communities.bentley.com/products/microstation/w/microstation__wiki/3274/microstation',
          work: '3 hrs',
          predecessors: '12',
          length: '30 hrs',
          tasks: [
            {
              id: 'Batch process, Detailing, GUI, etc',
              name: 'Batch process, Detailing, GUI, etc',
              color: '#9FC5F8',
              from: new Date(2019, 12, 29, 8, 0, 0),
              to: new Date(2020, 1, 1, 16, 0, 0),
              dependencies: [{to: 'Power Of Parametric Modelling Learning Path'}]
            }]
        },
        {
          id: 14,
          name: 'Power Of Parametric Modelling Learning Path',
          skill: 'Intermediate',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=113048',
          work: '2 hrs',
          predecessors: '13',
          length: '20 hrs',
          tasks: [
            {
              id: 'Power Of Parametric Modelling Learning Path',
              name: 'Power Of Parametric Modelling Learning Path',
              color: '#9FC5F8',
              from: new Date(2020, 1, 2, 8, 0, 0),
              to: new Date(2020, 1, 4, 12, 0, 0),
              dependencies: [{to: 'Projectwise Edge'}]
            }]
        },
        {
          id: 15,
          name: 'Projectwise Edge',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathWithMasterCourseExpanded?lpId=110813&mcId=102441',
          work: '1 hrs',
          predecessors: '14',
          length: '10 hrs',
          tasks: [
            {
              id: 'Projectwise Edge',
              name: 'Projectwise Edge',
              color: '#9FC5F8',
              from: new Date(2020, 1, 5, 8, 0, 0),
              to: new Date(2020, 1, 6, 10, 0, 0)
              // dependencies: [{to: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 1'}]
            }]
        },
        // ## Autocad
        {
          id: 16,
          name: 'Autocad',
          skill: '',
          media: '',
          link: '',
          work: '9 hrs',
          predecessors: '',
          length: '90 hrs',
          children: ['TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 1', 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 2', 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 3', 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 4', 'Autocad CADTools', 'AutoCAD Webinar 1', 'AutoCAD Webinar 2', 'Autocad Lisp'],
          tasks: [
            {
              id: 'Autocad',
              name: 'Autocad',
              color: '#9FC5F8',
              from: new Date(2019, 12, 8, 8, 0, 0),
              to: new Date(2019, 12, 24, 12, 0, 0)
              // dependencies: [{from: 'SydBUG Presentation (Yammer)'}]
            }]
        },
        {
          id: 17,
          name: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 1',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/local/kalturaview/view.php?id=1_hmaeemii&return=https%3A%2F%2Fmoodle.arup.com%2Flocal%2Fsearch%2Findex.php%3Fsearch%3Dautocad%23tab-content-kaltura',
          work: '1 hrs',
          predecessors: '5',
          length: '10 hrs',
          tasks: [
            {
              id: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 11',
              name: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 11',
              color: '#9FC5F8',
              from: new Date(2019, 12, 8, 8, 0, 0),
              to: new Date(2019, 12, 9, 10, 0, 0),
              dependencies: [{to: 'Openroads ConceptStation Live Demo Recording'}]
            },
            {
              id: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 1',
              name: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 8, 8, 0, 0),
              to: new Date(2019, 12, 9, 10, 0, 0),
              dependencies: [{to: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 2'}]
            }
          ]
        },
        {
          id: 18,
          name: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 2',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/local/kalturaview/view.php?id=0_hw4jwtlh&return=https%3A%2F%2Fmoodle.arup.com%2Flocal%2Fsearch%2Findex.php%3Fsearch%3Dautocad%23tab-content-kaltura',
          work: '1 hrs',
          predecessors: '17',
          length: '10 hrs',
          tasks: [
            {
              id: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 2',
              name: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 2',
              color: '#9FC5F8',
              from: new Date(2019, 12, 10, 8, 0, 0),
              to: new Date(2019, 12, 11, 10, 0, 0),
              dependencies: [{to: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 3'}]
            }]
        },
        {
          id: 19,
          name: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 3',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/local/kalturaview/view.php?id=0_xv345jim&return=https%3A%2F%2Fmoodle.arup.com%2Flocal%2Fsearch%2Findex.php%3Fsearch%3Dautocad%23tab-content-kaltura',
          work: '1 hrs',
          predecessors: '18',
          length: '10 hrs',
          tasks: [
            {
              id: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 3',
              name: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 3',
              color: '#9FC5F8',
              from: new Date(2019, 12, 12, 8, 0, 0),
              to: new Date(2019, 12, 13, 10, 0, 0),
              dependencies: [{to: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 4'}]
            }]
        },
        {
          id: 20,
          name: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 4',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/local/kalturaview/view.php?id=0_rwo28qsx&return=https%3A%2F%2Fmoodle.arup.com%2Flocal%2Fsearch%2Findex.php%3Fsearch%3Dcad%23tab-content-kaltura',
          work: '1 hrs',
          predecessors: '19',
          length: '10 hrs',
          tasks: [
            {
              id: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 4',
              name: 'TOG: Autocad, Projectwise & Drawing Best Practices Forum Session 4',
              color: '#9FC5F8',
              from: new Date(2019, 12, 14, 8, 0, 0),
              to: new Date(2019, 12, 15, 10, 0, 0),
              dependencies: [{to: 'Autocad CADTools'}]
            }]
        },
        {
          id: 21,
          name: 'Autocad CADTools',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/local/kalturaview/view.php?id=0_ejjhn6mv&return=https%3A%2F%2Fmoodle.arup.com%2Flocal%2Fsearch%2Findex.php%3Fsearch%3Dcadtools%23tab-content-kaltura',
          work: '1 hrs',
          predecessors: '20',
          length: '10 hrs',
          tasks: [
            {
              id: 'Autocad CADTools',
              name: 'Autocad CADTools',
              color: '#9FC5F8',
              from: new Date(2019, 12, 16, 8, 0, 0),
              to: new Date(2019, 12, 17, 10, 0, 0),
              dependencies: [{to: 'AutoCAD Webinar 1'}]
            }]
        },
        {
          id: 22,
          name: 'AutoCAD Webinar 1',
          skill: 'Beginner',
          media: 'Autodesk',
          link: 'https://knowledge.autodesk.com/support/autocad/learn-explore/caas/video/youtube/watch-v-GXfwv5LCQQQ.html?st=webinar autocad',
          work: '1 hrs',
          predecessors: '21',
          length: '10 hrs',
          tasks: [
            {
              id: 'AutoCAD Webinar 1',
              name: 'AutoCAD Webinar 1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 18, 8, 0, 0),
              to: new Date(2019, 12, 19, 10, 0, 0),
              dependencies: [{to: 'AutoCAD Webinar 2'}]
            }]
        },
        {
          id: 23,
          name: 'AutoCAD Webinar 2',
          skill: 'Beginner',
          media: 'Autodesk',
          link: 'https://knowledge.autodesk.com/support/autocad/learn-explore/caas/video/youtube/watch-v-op6lyabR6N4.html?st=webinar autocad',
          work: '1 hrs',
          predecessors: '22',
          length: '10 hrs',
          tasks: [
            {
              id: 'AutoCAD Webinar 2',
              name: 'AutoCAD Webinar 2',
              color: '#9FC5F8',
              from: new Date(2019, 12, 20, 8, 0, 0),
              to: new Date(2019, 12, 21, 10, 0, 0),
              dependencies: [{to: 'Autocad Lisp'}]
            }]
        },
        {
          id: 24,
          name: 'Autocad Lisp',
          skill: 'Advanced',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/local/kalturaview/view.php?id=0_tekjq4pc&return=https%3A%2F%2Fmoodle.arup.com%2Flocal%2Fsearch%2Findex.php%3Fsearch%3Dcad%23tab-content-kaltura',
          work: '2 hrs',
          predecessors: '23',
          length: '20 hrs',
          tasks: [
            {
              id: 'Autocad Lisp',
              name: 'Autocad Lisp',
              color: '#9FC5F8',
              from: new Date(2019, 12, 22, 8, 0, 0),
              to: new Date(2019, 12, 24, 12, 0, 0)
            }]
        }
        // # Concept Design Training Plan
        ,{
          id: 25,
          name: 'Concept Design Training Plan',
          skill: '',
          media: '',
          link: '',
          work: '10.57 hrs',
          predecessors: '',
          length: '81.83 hrs',
          children: ['Autodesk Infraworks', 'OpenRoads Concept Station'],
          tasks: [
            {
              name: 'Concept Design Training Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 8, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 0, 0)
            }
          ]
        },
        // ## Autodesk Infraworks
        {
          id: 26,
          name: 'Autodesk Infraworks',
          skill: '',
          media: '',
          link: '',
          work: '8.18 hrs',
          predecessors: '',
          length: '81.83 hrs',
          children: ['InfraWorks 360 Introduction1', 'User Interface Tour', 'Create a Cloud Model', 'Working with Views', 'To connect to ArcGIS data (Import Data)', 'InfraWorks 2019 Essential Training', 'InfraWorks 360 Introduction2', 'Road Design', 'Bridge Design'],
          tasks: [
            {
              name: 'Autodesk Infraworks',
              color: '#9FC5F8',
              from: new Date(2019, 12, 8, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 0, 0)
            }]
        },
        {
          id: 27,
          name: 'InfraWorks 360 Introduction1',
          skill: 'Beginner',
          media: 'Autodesk',
          link: 'http://help.autodesk.com/view/INFMDR/ENU/?guid=IWWhatsNew_WhatsNewInAutodeskInfraWorks_html',
          work: '0.25 hrs',
          predecessors: '5',
          length: '2.5 hrs',
          tasks: [
            {
              id: 'InfraWorks 360 Introduction1',
              name: 'InfraWorks 360 Introduction',
              color: '#9FC5F8',
              from: new Date(2019, 12, 8, 8, 0, 0),
              to: new Date(2019, 12, 8, 10, 30, 0),
              dependencies: [{to: 'User Interface Tour'}]
            }]
        },
        {
          id: 28,
          name: 'User Interface Tour',
          skill: 'Beginner',
          media: 'Autodesk',
          link: 'http://help.autodesk.com/view/INFMDR/ENU/?guid=GUID-A13097BA-9CC1-4AC9-8DE8-77E2DE5DB136',
          work: '0.03 hrs',
          predecessors: '27',
          length: '0.33 hrs',
          tasks: [
            {
              id: 'User Interface Tour',
              name: 'User Interface Tour',
              color: '#9FC5F8',
              from: new Date(2019, 12, 9, 8, 0, 0),
              to: new Date(2019, 12, 9, 8, 33, 0),
              dependencies: [{to: 'Create a Cloud Model'}]
            }]
        },
        {
          id: 29,
          name: 'Create a Cloud Model',
          skill: 'Beginner',
          media: 'Autodesk',
          link: 'http://help.autodesk.com/view/INFMDR/ENU/?guid=GUID-9009E251-E9C8-4BA4-AC93-125987F03FB5',
          work: '0.03 hrs',
          predecessors: '28',
          length: '0.33 hrs',
          tasks: [
            {
              id: 'Create a Cloud Model',
              name: 'Create a Cloud Model',
              color: '#9FC5F8',
              from: new Date(2019, 12, 10, 8, 0, 0),
              to: new Date(2019, 12, 10, 8, 33, 0),
              dependencies: [{to: 'Working with Views'}]
            }]
        },
        {
          id: 30,
          name: 'Working with Views',
          skill: 'Beginner',
          media: 'Autodesk',
          link: 'http://help.autodesk.com/view/INFMDR/ENU/?guid=GUID-A1B62E70-D1D6-42A6-AF86-E761DF967EAF',
          work: '0.03 hrs',
          predecessors: '29',
          length: '0.33 hrs',
          tasks: [
            {
              id: 'Working with Views',
              name: 'Working with Views',
              color: '#9FC5F8',
              from: new Date(2019, 12, 11, 8, 0, 0),
              to: new Date(2019, 12, 11, 8, 33, 0),
              dependencies: [{to: 'To connect to ArcGIS data (Import Data)'}]
            }]
        },
        {
          id: 31,
          name: 'To connect to ArcGIS data (Import Data)',
          skill: 'Beginner',
          media: 'Autodesk',
          link: 'http://help.autodesk.com/view/INFMDR/ENU/?guid=GUID-25DC98D4-3F42-43AC-8097-370A1D911994',
          work: '0.03 hrs',
          predecessors: '30',
          length: '0.33 hrs',
          tasks: [
            {
              id: 'To connect to ArcGIS data (Import Data)',
              name: 'To connect to ArcGIS data (Import Data)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 12, 8, 0, 0),
              to: new Date(2019, 12, 12, 8, 33, 0),
              dependencies: [{to: 'InfraWorks 2019 Essential Training'}]
            }]
        },
        {
          id: 32,
          name: 'InfraWorks 2019 Essential Training',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=704133',
          work: '4.12 hrs',
          predecessors: '31',
          length: '41.17 hrs',
          tasks: [
            {
              id: 'InfraWorks 2019 Essential Training',
              name: 'InfraWorks 2019 Essential Training',
              color: '#9FC5F8',
              from: new Date(2019, 12, 13, 8, 0, 0),
              to: new Date(2019, 12, 18, 9, 17, 0),
              dependencies: [{to: 'InfraWorks 360 Introduction2'}]
            }]
        },
        {
          id: 33,
          name: 'InfraWorks 360 Introduction2',
          skill: 'Beginner',
          media: 'Youtube',
          link: 'https://www.youtube.com/watch?v=i48BCmH3svw',
          work: '0.5 hrs',
          predecessors: '32',
          length: '5 hrs',
          tasks: [
            {
              id: 'InfraWorks 360 Introduction2',
              name: 'InfraWorks 360 Introduction',
              color: '#9FC5F8',
              from: new Date(2019, 12, 19, 8, 0, 0),
              to: new Date(2019, 12, 19, 15, 0, 0),
              dependencies: [{to: 'Road Design in InfraWorks'}]
            }]
        },
        // ### Road Design
        {
          id: 34,
          name: 'Road Design',
          skill: '',
          media: '',
          link: '',
          work: '1.48 hrs',
          predecessors: '',
          length: '14.83 hrs',
          children: ['Road Design in InfraWorks', 'Tutorials for Roadway Design'],
          tasks: [
            {
              id: 'Road Design',
              name: 'Road Design',
              color: '#9FC5F8',
              from: new Date(2019, 12, 20, 8, 0, 0),
              to: new Date(2019, 12, 25, 8, 50, 0)
            }]
        },
        {
          id: 35,
          name: 'Road Design in InfraWorks',
          skill: 'Intermediate',
          media: 'Youtube',
          link: 'https://www.youtube.com/watch?v=CH27vARGcuM',
          work: '1 hrs',
          predecessors: '33',
          length: '10 hrs',
          tasks: [
            {
              id: 'Road Design in InfraWorks',
              name: 'Road Design in InfraWorks',
              color: '#9FC5F8',
              from: new Date(2019, 12, 20, 8, 0, 0),
              to: new Date(2019, 12, 21, 10, 0, 0),
              dependencies: [{to: 'Roads Tutorial 1: The Basics'}]
            }]
        },
        // #### Tutorials for Roadway Design
        {
          id: 36,
          name: 'Tutorials for Roadway Design',
          skill: '',
          media: '',
          link: 'http://help.autodesk.com/view/INFMDR/ENU/?guid=GUID-A4B111E6-2D30-4B32-9F38-1E11EF0638E2',
          work: '0.48 hrs',
          predecessors: '',
          length: '4.83 hrs',
          children: ['Roads Tutorial 1: The Basics', 'Roads Tutorial 2: Road Editing', 'Roads Tutorial 3: Intersections and Roundabouts', 'Roads Tutorial 4: Sight Analysis'],
          tasks: [
            {
              id: 'Tutorials for Roadway Design',
              name: 'Tutorials for Roadway Design',
              color: '#9FC5F8',
              from: new Date(2019, 12, 22, 8, 0, 0),
              to: new Date(2019, 12, 25, 8, 50, 0)
            }]
        },
        {
          id: 37,
          name: 'Roads Tutorial 1: The Basics',
          skill: 'Intermediate',
          media: 'Autodesk',
          link: 'http://help.autodesk.com/view/INFMDR/ENU/?guid=GUID-0B487289-B629-4ACE-A39E-7533CB4BF109',
          work: '0.13 hrs',
          predecessors: '35',
          length: '1.33 hrs',
          tasks: [
            {
              id: 'Roads Tutorial 1: The Basics',
              name: 'Roads Tutorial 1: The Basics',
              color: '#9FC5F8',
              from: new Date(2019, 12, 22, 8, 0, 0),
              to: new Date(2019, 12, 22, 9, 20, 0),
              dependencies: [{to: 'Roads Tutorial 2: Road Editing'}]
            }]
        },
        {
          id: 38,
          name: 'Roads Tutorial 2: Road Editing',
          skill: 'Intermediate',
          media: 'Autodesk',
          link: 'http://help.autodesk.com/view/INFMDR/ENU/?guid=GUID-65A93AD6-DBE0-48B2-B5C2-84C779160C52',
          work: '0.18 hrs',
          predecessors: '37',
          length: '1.83 hrs',
          tasks: [
            {
              id: 'Roads Tutorial 2: Road Editing',
              name: 'Roads Tutorial 2: Road Editing',
              color: '#9FC5F8',
              from: new Date(2019, 12, 23, 8, 0, 0),
              to: new Date(2019, 12, 23, 9, 50, 0),
              dependencies: [{to: 'Roads Tutorial 3: Intersections and Roundabouts'}]
            }]
        },
        {
          id: 39,
          name: 'Roads Tutorial 3: Intersections and Roundabouts',
          skill: 'Intermediate',
          media: 'Autodesk',
          link: 'http://help.autodesk.com/view/INFMDR/ENU/?guid=GUID-43F4AA90-FDF8-403B-9E01-E2A9DB439B20',
          work: '0.08 hrs',
          predecessors: '38',
          length: '0.83 hrs',
          tasks: [
            {
              id: 'Roads Tutorial 3: Intersections and Roundabouts',
              name: 'Roads Tutorial 3: Intersections and Roundabouts',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 24, 8, 50, 0),
              dependencies: [{to: 'Roads Tutorial 4: Sight Analysis'}]
            }]
        },
        {
          id: 40,
          name: 'Roads Tutorial 4: Sight Analysis',
          skill: 'Intermediate',
          media: 'Autodesk',
          link: 'http://help.autodesk.com/view/INFMDR/ENU/?guid=GUID-E61D8037-F981-4952-95C6-DA659FDE8EA3',
          work: '0.08 hrs',
          predecessors: '39',
          length: '0.83 hrs',
          tasks: [
            {
              id: 'Roads Tutorial 4: Sight Analysis',
              name: 'Roads Tutorial 4: Sight Analysis',
              color: '#9FC5F8',
              from: new Date(2019, 12, 25, 8, 0, 0),
              to: new Date(2019, 12, 25, 8, 50, 0),
              dependencies: [{to: 'Infraworks : Bridge Design'}]
            }]
        },
        // ### Bridge Design
        {
          id: 41,
          name: 'Bridge Design',
          skill: '',
          media: '',
          link: '',
          work: '1.7 hrs',
          predecessors: '',
          length: '17 hrs',
          children: ['Infraworks : Bridge Design'],
          tasks: [
            {
              id: 'Bridge Design',
              name: 'Bridge Design',
              color: '#9FC5F8',
              from: new Date(2019, 12, 26, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 0, 0)
            }]
        },
        {
          id: 42,
          name: 'Infraworks : Bridge Design',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=716052',
          work: '1.7 hrs',
          predecessors: '40',
          length: '17 hrs',
          tasks: [
            {
              id: 'Infraworks : Bridge Design',
              name: 'Infraworks : Bridge Design',
              color: '#9FC5F8',
              from: new Date(2019, 12, 26, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 0, 0)
              // dependencies: [{to: 'User Interface Tour'}]
            }]
        },
        // ## OpenRoads Concept Station
        {
          id: 43,
          name: 'OpenRoads Concept Station',
          skill: '',
          media: '',
          link: '',
          work: '2.38 hrs',
          predecessors: '',
          length: '23.83 hrs',
          children: ['Openroads ConceptStation Live Demo Recording', 'Introduction to Concept Station', 'Overview of OpenRoads ConceptStation', 'Road Layout (Learn how to layout roads and connectors such as intersections, roundabouts, and ramps.)', 'Laying out Bridge, Tunnels, Pavement Markings, and Road Furniture', 'Analyzing the Model (Analyze the model using cross sections, computing accurate bridge clearances, estimated costs)', 'Visualization', 'QuickStart - OpenRoads ConceptStation'],
          tasks: [
            {
              name: 'OpenRoads Concept Station',
              color: '#9FC5F8',
              from: new Date(2019, 12, 10, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 10, 0)
            }]
        },
        {
          id: 44,
          name: 'Openroads ConceptStation Live Demo Recording',
          skill: 'Beginner',
          media: 'Youtube',
          link: 'https://www.youtube.com/watch?v=SgydHQzxvCE',
          work: '0.5 hrs',
          predecessors: '17',
          length: '5 hrs',
          tasks: [
            {
              id: 'Openroads ConceptStation Live Demo Recording',
              name: 'Openroads ConceptStation Live Demo Recording',
              color: '#9FC5F8',
              from: new Date(2019, 12, 10, 8, 0, 0),
              to: new Date(2019, 12, 10, 15, 0, 0),
              dependencies: [{to: 'Introduction to Concept Station'}]
            }]
        },
        {
          id: 45,
          name: 'Introduction to Concept Station',
          skill: 'Beginner',
          media: 'Youtube',
          link: 'https://www.youtube.com/watch?v=1pQpL2EZFdo&list=PLnJUnxLwu_N5iY8jMCTvdxcFOpeHqmCJ3&index=2&t=0s',
          work: '0.17',
          predecessors: '44',
          length: '1.67 hrs',
          tasks: [
            {
              id: 'Introduction to Concept Station',
              name: 'Introduction to Concept Station',
              color: '#9FC5F8',
              from: new Date(2019, 12, 11, 8, 0, 0),
              to: new Date(2019, 12, 11, 9, 40, 0),
              dependencies: [{to: 'Overview of OpenRoads ConceptStation'}]
            }]
        },
        {
          id: 46,
          name: 'Overview of OpenRoads ConceptStation',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=111694&CourseId=122350&MediaID=5014632',
          work: '0.15 hrs',
          predecessors: '45',
          length: '1.5 hrs',
          tasks: [
            {
              id: 'Overview of OpenRoads ConceptStation',
              name: 'Overview of OpenRoads ConceptStation',
              color: '#9FC5F8',
              from: new Date(2019, 12, 12, 8, 0, 0),
              to: new Date(2019, 12, 12, 9, 30, 0),
              dependencies: [{to: 'Road Layout (Learn how to layout roads and connectors such as intersections, roundabouts, and ramps.)'}]
            }]
        },
        {
          id: 47,
          name: 'Road Layout (Learn how to layout roads and connectors such as intersections, roundabouts, and ramps.)',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=111694&CourseId=122349&MediaID=5014631',
          work: '0.2 hrs',
          predecessors: '46',
          length: '2 hrs',
          tasks: [
            {
              id: 'Road Layout (Learn how to layout roads and connectors such as intersections, roundabouts, and ramps.)',
              name: 'Road Layout (Learn how to layout roads and connectors such as intersections, roundabouts, and ramps.)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 13, 8, 0, 0),
              to: new Date(2019, 12, 13, 10, 0, 0),
              dependencies: [{to: 'Laying out Bridge, Tunnels, Pavement Markings, and Road Furniture'}]
            }]
        },
        {
          id: 48,
          name: 'Laying out Bridge, Tunnels, Pavement Markings, and Road Furniture',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=111694&CourseId=122348&MediaID=5014630',
          work: '0.1 hrs',
          predecessors: '47',
          length: '1 hrs',
          tasks: [
            {
              id: 'Laying out Bridge, Tunnels, Pavement Markings, and Road Furniture',
              name: 'Laying out Bridge, Tunnels, Pavement Markings, and Road Furniture',
              color: '#9FC5F8',
              from: new Date(2019, 12, 14, 8, 0, 0),
              to: new Date(2019, 12, 14, 9, 0, 0),
              dependencies: [{to: 'Analyzing the Model (Analyze the model using cross sections, computing accurate bridge clearances, estimated costs)'}]
            }]
        },
        {
          id: 49,
          name: 'Analyzing the Model (Analyze the model using cross sections, computing accurate bridge clearances, estimated costs)',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=111694&CourseId=122347&MediaID=5014629',
          work: '0.1 hrs',
          predecessors: '48',
          length: '1 hrs',
          tasks: [
            {
              id: 'Analyzing the Model (Analyze the model using cross sections, computing accurate bridge clearances, estimated costs)',
              name: 'Analyzing the Model (Analyze the model using cross sections, computing accurate bridge clearances, estimated costs)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 15, 8, 0, 0),
              to: new Date(2019, 12, 15, 9, 0, 0),
              dependencies: [{to: 'Visualization'}]
            }]
        },
        {
          id: 50,
          name: 'Visualization',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=111694&CourseId=122346&MediaID=5014628',
          work: '0.15 hrs',
          predecessors: '49',
          length: '1.5 hrs',
          tasks: [
            {
              id: 'Visualization',
              name: 'Visualization',
              color: '#9FC5F8',
              from: new Date(2019, 12, 16, 8, 0, 0),
              to: new Date(2019, 12, 16, 9, 30, 0),
              dependencies: [{to: 'Creating a Project File'}]
            }]
        },
        // ### QuickStart - OpenRoads ConceptStation
        {
          id: 51,
          name: 'QuickStart - OpenRoads ConceptStation',
          skill: '',
          media: '',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '1.02 hrs',
          predecessors: '',
          length: '10.17 hrs',
          children: ['Creating a Project File', 'Exercise 1 - Horizontal Geometry', 'Exercise 2 - Vertical Geometry', 'Exercise 2 - Bridge Structures', 'Exercise 2 - Cross Sections', 'Exercise 3 - Ramps', 'Exercise 4 - Ramp Connecting to a Bridge', 'Exercise 5 - Roundabouts', 'Exercise 6 - Furniture', 'Exercise 7 - Street Markings', 'Exercise 8 - Quantities and Cost Estimates', 'Exercise 9 - Templates'],
          tasks: [
            {
              id: 'QuickStart - OpenRoads ConceptStation',
              name: 'QuickStart - OpenRoads ConceptStation',
              color: '#9FC5F8',
              from: new Date(2019, 12, 17, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 10, 0)
            }]
        },
        {
          id: 52,
          name: 'Creating a Project File',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=110386&CourseId=126967&MediaID=5017437',
          work: '0.13 hrs',
          predecessors: '50',
          length: '1.33 hrs',
          tasks: [
            {
              id: 'Creating a Project File',
              name: 'Creating a Project File',
              color: '#9FC5F8',
              from: new Date(2019, 12, 17, 8, 0, 0),
              to: new Date(2019, 12, 17, 9, 20, 0),
              dependencies: [{to: 'Exercise 1 - Horizontal Geometry'}]
            }]
        },
        {
          id: 53,
          name: 'Exercise 1 - Horizontal Geometry',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.1 hrs',
          predecessors: '52',
          length: '1 hrs',
          tasks: [
            {
              id: 'Exercise 1 - Horizontal Geometry',
              name: 'Exercise 1 - Horizontal Geometry',
              color: '#9FC5F8',
              from: new Date(2019, 12, 18, 8, 0, 0),
              to: new Date(2019, 12, 18, 9, 0, 0),
              dependencies: [{to: 'Exercise 2 - Vertical Geometry'}]
            }]
        },
        {
          id: 54,
          name: 'Exercise 2 - Vertical Geometry',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.2 hrs',
          predecessors: '53',
          length: '2 hrs',
          tasks: [
            {
              id: 'Exercise 2 - Vertical Geometry',
              name: 'Exercise 2 - Vertical Geometry',
              color: '#9FC5F8',
              from: new Date(2019, 12, 19, 8, 0, 0),
              to: new Date(2019, 12, 19, 10, 0, 0),
              dependencies: [{to: 'Exercise 2 - Bridge Structures'}]
            }]
        },
        {
          id: 55,
          name: 'Exercise 2 - Bridge Structures',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.08 hrs',
          predecessors: '54',
          length: '0.83 hrs',
          tasks: [
            {
              id: 'Exercise 2 - Bridge Structures',
              name: 'Exercise 2 - Bridge Structures',
              color: '#9FC5F8',
              from: new Date(2019, 12, 20, 8, 0, 0),
              to: new Date(2019, 12, 20, 8, 50, 0),
              dependencies: [{to: 'Exercise 2 - Cross Sections'}]
            }]
        },
        {
          id: 56,
          name: 'Exercise 2 - Cross Sections',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.02 hrs',
          predecessors: '55',
          length: '0.17 hrs',
          tasks: [
            {
              id: 'Exercise 2 - Cross Sections',
              name: 'Exercise 2 - Cross Sections',
              color: '#9FC5F8',
              from: new Date(2019, 12, 21, 8, 0, 0),
              to: new Date(2019, 12, 21, 8, 10, 0),
              dependencies: [{to: 'Exercise 3 - Ramps'}]
            }]
        },
        {
          id: 57,
          name: 'Exercise 3 - Ramps',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.1 hrs',
          predecessors: '56',
          length: '1 hrs',
          tasks: [
            {
              id: 'Exercise 3 - Ramps',
              name: 'Exercise 3 - Ramps',
              color: '#9FC5F8',
              from: new Date(2019, 12, 22, 8, 0, 0),
              to: new Date(2019, 12, 22, 9, 0, 0),
              dependencies: [{to: 'Exercise 4 - Ramp Connecting to a Bridge'}]
            }]
        },
        {
          id: 58,
          name: 'Exercise 4 - Ramp Connecting to a Bridge',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.08 hrs',
          predecessors: '57',
          length: '0.83 hrs',
          tasks: [
            {
              id: 'Exercise 4 - Ramp Connecting to a Bridge',
              name: 'Exercise 4 - Ramp Connecting to a Bridge',
              color: '#9FC5F8',
              from: new Date(2019, 12, 23, 8, 0, 0),
              to: new Date(2019, 12, 23, 8, 50, 0),
              dependencies: [{to: 'Exercise 5 - Roundabouts'}]
            }]
        },
        {
          id: 59,
          name: 'Exercise 5 - Roundabouts',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.03 hrs',
          predecessors: '58',
          length: '0.33 hrs',
          tasks: [
            {
              id: 'Exercise 5 - Roundabouts',
              name: 'Exercise 5 - Roundabouts',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 24, 8, 20, 0),
              dependencies: [{to: 'Exercise 6 - Furniture'}]
            }]
        },
        {
          id: 60,
          name: 'Exercise 6 - Furniture',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.07 hrs',
          predecessors: '59',
          length: '0.67 hrs',
          tasks: [
            {
              id: 'Exercise 6 - Furniture',
              name: 'Exercise 6 - Furniture',
              color: '#9FC5F8',
              from: new Date(2019, 12, 25, 8, 0, 0),
              to: new Date(2019, 12, 25, 8, 40, 0),
              dependencies: [{to: 'Exercise 7 - Street Markings'}]
            }]
        },
        {
          id: 61,
          name: 'Exercise 7 - Street Markings',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.02 hrs',
          predecessors: '60',
          length: '0.17 hrs',
          tasks: [
            {
              id: 'Exercise 7 - Street Markings',
              name: 'Exercise 7 - Street Markings',
              color: '#9FC5F8',
              from: new Date(2019, 12, 26, 8, 0, 0),
              to: new Date(2019, 12, 26, 8, 10, 0),
              dependencies: [{to: 'Exercise 8 - Quantities and Cost Estimates'}]
            }]
        },
        {
          id: 62,
          name: 'Exercise 8 - Quantities and Cost Estimates',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.07 hrs',
          predecessors: '61',
          length: '0.67 hrs',
          tasks: [
            {
              id: 'Exercise 8 - Quantities and Cost Estimates',
              name: 'Exercise 8 - Quantities and Cost Estimates',
              color: '#9FC5F8',
              from: new Date(2019, 12, 27, 8, 0, 0),
              to: new Date(2019, 12, 27, 8, 40, 0),
              dependencies: [{to: 'Exercise 9 - Templates'}]
            }]
        },
        {
          id: 63,
          name: 'Exercise 9 - Templates',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=110386#',
          work: '0.12 hrs',
          predecessors: '62',
          length: '1.17 hrs',
          tasks: [
            {
              id: 'Exercise 9 - Templates',
              name: 'Exercise 9 - Templates',
              color: '#9FC5F8',
              from: new Date(2019, 12, 28, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 10, 0)
              // dependencies: [{to: 'User Interface Tour'}]
            }]
        }
        // # Geotechnical Digital Training Plan
        ,{
          id: 64,
          name: 'Geotechnical Digital Training Plan',
          skill: '',
          media: '',
          link: '',
          work: '28 hrs',
          predecessors: '',
          length: '280 hrs',
          children: ['Get Started with ArcGIS Pro (collab with Digital)', 'ArcGIS Pro', 'Geotechnical Data Visualisation and Interpretation: An alternative to excel', 'Generative Design for Plaxis', 'Python for Data Analysis and Visualisation', 'Python for Plaxis Generative Design/ Automation'],
          tasks: [
            {
              id: 'Geotechnical Digital Training Plan',
              name: 'Geotechnical Digital Training Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2020, 1, 8, 12, 0, 0)
            }]
        },
        {
          id: 65,
          name: 'Get Started with ArcGIS Pro (collab with Digital)',
          skill: 'Beginner',
          media: 'Esri',
          link: 'https://www.esri.com/training/catalog/57660c6ebb54adb30c945412/get-started-with-arcgis-pro/',
          work: '3 hrs',
          predecessors: '180',
          length: '30 hrs',
          tasks: [
            {
              id: 'Get Started with ArcGIS Pro (collab with Digital)',
              name: 'Get Started with ArcGIS Pro (collab with Digital)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2019, 12, 6, 16, 0, 0),
              dependencies: [{to: 'ArcGIS Pro'}]
            }]
        },
        {
          id: 66,
          name: 'ArcGIS Pro',
          skill: 'Beginner',
          media: 'Good Ideas Masterclass (Internal)',
          link: '',
          work: '1 hrs',
          predecessors: '65',
          length: '10 hrs',
          tasks: [
            {
              id: 'ArcGIS Pro',
              name: 'ArcGIS Pro',
              color: '#9FC5F8',
              from: new Date(2019, 12, 7, 8, 0, 0),
              to: new Date(2019, 12, 8, 10, 0, 0),
              dependencies: [{to: 'Geotechnical Data Visualisation and Interpretation: An alternative to excel'}]
            }]
        },
        {
          id: 67,
          name: 'Geotechnical Data Visualisation and Interpretation: An alternative to excel',
          skill: 'Beginner',
          media: 'Sharing Session',
          link: '',
          work: '0.5 hrs',
          predecessors: '66',
          length: '5 hrs',
          tasks: [
            {
              id: 'Geotechnical Data Visualisation and Interpretation: An alternative to excel',
              name: 'Geotechnical Data Visualisation and Interpretation: An alternative to excel',
              color: '#9FC5F8',
              from: new Date(2019, 12, 9, 8, 0, 0),
              to: new Date(2019, 12, 9, 15, 0, 0),
              dependencies: [{to: 'Generative Design for Plaxis'}]
            }]
        },
        {
          id: 68,
          name: 'Generative Design for Plaxis',
          skill: 'Beginner',
          media: 'Sharing Session',
          link: '',
          work: '0.5 hrs',
          predecessors: '67',
          length: '5 hrs',
          tasks: [
            {
              id: 'Generative Design for Plaxis',
              name: 'Generative Design for Plaxis',
              color: '#9FC5F8',
              from: new Date(2019, 12, 10, 8, 0, 0),
              to: new Date(2019, 12, 10, 15, 0, 0),
              dependencies: [{to: 'Python for Data Analysis and Visualisation'}]
            }]
        },
        {
          id: 69,
          name: 'Python for Data Analysis and Visualisation',
          skill: 'Intermediate',
          media: '',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=520233',
          work: '21 hrs',
          predecessors: '68',
          length: '210 hrs',
          tasks: [
            {
              id: 'Python for Data Analysis and Visualisation',
              name: 'Python for Data Analysis and Visualisation',
              color: '#9FC5F8',
              from: new Date(2019, 12, 11, 8, 0, 0),
              to: new Date(2020, 1, 5, 10, 0, 0),
              dependencies: [{to: 'Python for Plaxis Generative Design/ Automation'}]
            }]
        },
        {
          id: 70,
          name: 'Python for Plaxis Generative Design/ Automation',
          skill: 'Intermediate',
          media: 'Good Ideas Masterclass (Internal)',
          link: '',
          work: '2 hrs',
          predecessors: '69',
          length: '20 hrs',
          tasks: [
            {
              id: 'Python for Plaxis Generative Design/ Automation',
              name: 'Python for Plaxis Generative Design/ Automation',
              color: '#9FC5F8',
              from: new Date(2020, 1, 6, 8, 0, 0),
              to: new Date(2020, 1, 8, 12, 0, 0)
            }]
        }
        // # Project Systems Training Plan
        ,{
          id: 71,
          name: 'Project Systems Training Plan',
          skill: '',
          media: '',
          link: '',
          work: '46.2 hrs',
          predecessors: '',
          length: '1542.5 hrs',
          children: ['Sharepoint', 'Projectwise V8i', 'Projectwise Connect Edition', 'Microsoft Teams', 'Slack', 'Jira', 'Case Issue Tracker', 'Trello', 'Arupwise', 'Databases', 'KVMRT3 - Digital Project Collaboration Platform'],
          tasks: [
            {
              id: 'Project Systems Training Plan',
              name: 'Project Systems Training Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 30, 10, 30, 0)
            }]
        },
        // ## Sharepoint
        {
          id: 72,
          name: 'Sharepoint',
          skill: '',
          media: '',
          link: '',
          work: '15.5 hrs',
          predecessors: '',
          length: '1505 hrs',
          children: ['OneDrive for Business', 'SharePoint Online Essential Training: The Basics', 'Sharepoint Online Essential Training: Beyond the Basics', 'SharePoint Online for Team Members', 'SharePoint Online for Site Owners', 'SharePoint 2016 Essential Training'],
          tasks: [
            {
              id: 'Sharepoint',
              name: 'Sharepoint',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 23, 10, 0, 0)
            }]
        },
        {
          id: 73,
          name: 'OneDrive for Business',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/course/view.php?id=2413',
          work: '0.5 hrs',
          predecessors: '',
          length: '5 hrs',
          tasks: [
            {
              id: 'OneDrive for Business1',
              name: 'OneDrive for Business1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 1, 15, 0, 0),
              dependencies: [{to: 'SharePoint Online for Team Members'}]
            },
            {
              id: 'OneDrive for Business',
              name: 'OneDrive for Business',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 1, 15, 0, 0),
              dependencies: [{to: 'SharePoint Online Essential Training: The Basics'}]
            }
          ]
        },
        {
          id: 74,
          name: 'SharePoint Online Essential Training: The Basics',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=711798',
          work: '3 hrs',
          predecessors: '73',
          length: '30 hrs',
          tasks: [
            {
              id: 'SharePoint Online Essential Training: The Basics',
              name: 'SharePoint Online Essential Training: The Basics',
              color: '#9FC5F8',
              from: new Date(2019, 12, 2, 8, 0, 0),
              to: new Date(2019, 12, 5, 16, 0, 0),
              dependencies: [{to: 'Sharepoint Online Essential Training: Beyond the Basics'}]
            }]
        },
        {
          id: 75,
          name: 'Sharepoint Online Essential Training: Beyond the Basics',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=751312',
          work: '2 hrs',
          predecessors: '74',
          length: '20 hrs',
          tasks: [
            {
              id: 'Sharepoint Online Essential Training: Beyond the Basics',
              name: 'Sharepoint Online Essential Training: Beyond the Basics',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 8, 12, 0, 0),
              dependencies: [{to: 'SharePoint 2016 Essential Training'}]
            }]
        },
        {
          id: 76,
          name: 'SharePoint Online for Team Members',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/course/view.php?id=2037',
          work: '1 hrs',
          predecessors: '73',
          length: '10 hrs',
          tasks: [
            {
              id: 'SharePoint Online for Team Members',
              name: 'SharePoint Online for Team Members',
              color: '#9FC5F8',
              from: new Date(2019, 12, 2, 8, 0, 0),
              to: new Date(2019, 12, 3, 10, 0, 0)
              // dependencies: [{to: 'SharePoint Online for Site Owners'}]
            }]
        },
        {
          id: 77,
          name: 'SharePoint Online for Site Owners',
          skill: '',
          media: '',
          link: 'https://moodle.arup.com/course/view.php?id=2038',
          work: '0 hrs',
          predecessors: '',
          length: '8 hrs'
          // tasks: [
          //   {
          //     id: 'SharePoint Online for Site Owners',
          //     name: 'SharePoint Online for Site Owners',
          //     color: '#9FC5F8',
          //     from: new Date(2020, 1, 9, 8, 0, 0),
          //     to: new Date(2020, 1, 9, 18, 0, 0),
          //     dependencies: [{to: 'SharePoint 2016 Essential Training'}]
          //   }]
        },
        {
          id: 78,
          name: 'SharePoint 2016 Essential Training',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=466189',
          work: '9 hrs',
          predecessors: '75',
          length: '90 hrs',
          tasks: [
            {
              id: 'SharePoint 2016 Essential Training1',
              name: 'SharePoint 2016 Essential Training1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 12, 8, 0, 0),
              to: new Date(2019, 12, 23, 10, 0, 0),
              dependencies: [{to: 'Getting Started on Slack | Video Tutorials'}]
            },
            {
              id: 'SharePoint 2016 Essential Training',
              name: 'SharePoint 2016 Essential Training',
              color: '#9FC5F8',
              from: new Date(2019, 12, 12, 8, 0, 0),
              to: new Date(2019, 12, 23, 10, 0, 0),
              dependencies: [{to: 'Introduction to Microsoft Teams'}]
            }
          ]
        },
        // ## Projectwise V8i
        {
          id: 79,
          name: 'Projectwise V8i',
          skill: '',
          media: '',
          link: '',
          work: '3.5 hrs',
          predecessors: '',
          length: '35 hrs',
          children: ['The BNE TOG: ProjectWise Basics', 'Working with the ProjectWise Explorer Client', 'User Groups, Lists, and Access Control'],
          tasks: [
            {
              id: 'Projectwise V8i',
              name: 'Projectwise V8i',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 6, 11, 10, 0)
            }]
        },
        {
          id: 80,
          name: 'The BNE TOG: ProjectWise Basics',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/local/kalturaview/view.php?id=0_biwfziil',
          work: '1 hrs',
          predecessors: '',
          length: '10 hrs',
          tasks: [
            {
              id: 'The BNE TOG: ProjectWise Basics',
              name: 'The BNE TOG: ProjectWise Basics',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 2, 10, 0, 0),
              dependencies: [{to: 'Working with the ProjectWise Explorer Client'}]
            }]
        },
        {
          id: 81,
          name: 'Working with the ProjectWise Explorer Client',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=107074',
          work: '1.38 hrs',
          predecessors: '80',
          length: '13.83 hrs',
          tasks: [
            {
              id: 'Working with the ProjectWise Explorer Client1',
              name: 'Working with the ProjectWise Explorer Client1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2019, 12, 4, 15, 50, 0),
              dependencies: [{to: 'ArupWise'}]
            },
            {
              id: 'Working with the ProjectWise Explorer Client',
              name: 'Working with the ProjectWise Explorer Client',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2019, 12, 4, 15, 50, 0),
              dependencies: [{to: 'User Groups, Lists, and Access Control'}]
            }
          ]
        },
        {
          id: 82,
          name: 'User Groups, Lists, and Access Control',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=107074',
          work: '1.12 hrs',
          predecessors: '81',
          length: '11.17 hrs',
          tasks: [
            {
              id: 'User Groups, Lists, and Access Control1',
              name: 'User Groups, Lists, and Access Control1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 5, 8, 0, 0),
              to: new Date(2019, 12, 6, 11, 10, 0),
              dependencies: [{to: 'KVMRT3 - Digital Project Collaboration Platform'}]
            },
            {
              id: 'User Groups, Lists, and Access Control',
              name: 'User Groups, Lists, and Access Control',
              color: '#9FC5F8',
              from: new Date(2019, 12, 5, 8, 0, 0),
              to: new Date(2019, 12, 6, 11, 10, 0),
              dependencies: [{to: 'ProjectWise Explorer CONNECT Edition Basics Learning Path'}]
            }
          ]
        },
        // ## Projectwise Connect Edition
        {
          id: 83,
          name: 'Projectwise Connect Edition',
          skill: '',
          media: '',
          link: '',
          work: '',
          predecessors: '5.95 hrs',
          length: '59.5 hrs',
          children: ['ProjectWise Explorer CONNECT Edition Basics Learning Path'],
          tasks: [
            {
              id: 'Projectwise Connect Edition',
              name: 'Projectwise Connect Edition',
              color: '#9FC5F8',
              from: new Date(2019, 12, 7, 8, 0, 0),
              to: new Date(2019, 12, 14, 11, 30, 0)
            }]
        },
        {
          id: 84,
          name: 'ProjectWise Explorer CONNECT Edition Basics Learning Path',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/ViewLearningPathDetails?lpId=109439',
          work: '5.95 hrs',
          predecessors: '82',
          length: '59.5 hrs',
          tasks: [
            {
              id: 'ProjectWise Explorer CONNECT Edition Basics Learning Path',
              name: 'ProjectWise Explorer CONNECT Edition Basics Learning Path',
              color: '#9FC5F8',
              from: new Date(2019, 12, 7, 8, 0, 0),
              to: new Date(2019, 12, 14, 11, 30, 0)
            }]
        },
        // ## Microsoft Teams
        {
          id: 85,
          name: 'Microsoft Teams',
          skill: '',
          media: '',
          link: '',
          work: '3 hrs',
          predecessors: '',
          length: '30 hrs',
          children: ['Introduction to Microsoft Teams', 'Microsoft Teams Essential Training'],
          tasks: [
            {
              id: 'Microsoft Teams',
              name: 'Microsoft Teams',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 0, 0)
            }]
        },
        {
          id: 86,
          name: 'Introduction to Microsoft Teams',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/course/view.php?id=2424',
          work: '0.5 hrs',
          predecessors: '78',
          length: '5 hrs',
          tasks: [
            {
              id: 'Introduction to Microsoft Teams',
              name: 'Introduction to Microsoft Teams',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 24, 15, 0, 0),
              dependencies: [{to: 'Microsoft Teams Essential Training'}]
            }]
        },
        {
          id: 87,
          name: 'Microsoft Teams Essential Training',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=697704',
          work: '2.5 hrs',
          predecessors: '86',
          length: '25 hrs',
          tasks: [
            {
              id: 'Microsoft Teams Essential Training1',
              name: 'Microsoft Teams Essential Training1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 25, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 0, 0),
              dependencies: [{to: 'ArupWise'}]
            },
            {
              id: 'Microsoft Teams Essential Training',
              name: 'Microsoft Teams Essential Training',
              color: '#9FC5F8',
              from: new Date(2019, 12, 25, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 0, 0),
              dependencies: [{to: 'KVMRT3 - Digital Project Collaboration Platform'}]
            }
          ]
        },
        // ## Slack
        {
          id: 88,
          name: 'Slack',
          skill: '',
          media: '',
          link: '',
          work: '3 hrs',
          predecessors: '',
          length: '30 hrs',
          children: ['Getting Started on Slack | Video Tutorials', 'Learning Slack'],
          tasks: [
            {
              id: 'Slack',
              name: 'Slack',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 0, 0)
            }]
        },
        {
          id: 89,
          name: 'Getting Started on Slack | Video Tutorials',
          skill: 'Beginner',
          media: 'Youtube',
          link: 'https://www.youtube.com/playlist?list=PLWlXaxtQ7fUb1WqLJDqJFGQsAXU7CjoGz',
          work: '0.5 hrs',
          predecessors: '78',
          length: '5 hrs',
          tasks: [
            {
              id: 'Getting Started on Slack | Video Tutorials',
              name: 'Getting Started on Slack | Video Tutorials',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 24, 15, 0, 0),
              dependencies: [{to: 'Learning Slack'}]
            }]
        },
        {
          id: 90,
          name: 'Learning Slack',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=716044',
          work: '2.5 hrs',
          predecessors: '89',
          length: '25 hrs',
          tasks: [
            {
              id: 'Learning Slack',
              name: 'Learning Slack',
              color: '#9FC5F8',
              from: new Date(2019, 12, 25, 8, 0, 0),
              to: new Date(2019, 12, 28, 9, 0, 0),
              dependencies: [{to: 'KVMRT3 - Digital Project Collaboration Platform'}]
            }]
        },
        // ## Jira
        {
          id: 91,
          name: 'Jira',
          skill: '',
          media: '',
          link: '',
          work: '6 hrs',
          predecessors: '',
          length: '60 hrs',
          children: ['Jira Cloud for Beginners', 'Learning JIRA Software (2017)', 'JIRA Software: Basic Administration'],
          tasks: [
            {
              id: 'Jira',
              name: 'Jira',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 9, 9, 0, 0)
            }]
        },
        {
          id: 92,
          name: 'Jira Cloud for Beginners',
          skill: 'Beginner',
          media: 'Youtube',
          link: 'https://www.youtube.com/playlist?list=PLTfQ5lMxqu9puiQmlsq3-MQbDluNOGWzl',
          work: '2 hrs',
          predecessors: '',
          length: '20 hrs',
          tasks: [
            {
              id: 'Jira Cloud for Beginners',
              name: 'Jira Cloud for Beginners',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 3, 12, 0, 0),
              dependencies: [{to: 'Learning JIRA Software (2017)'}]
            }]
        },
        {
          id: 93,
          name: 'Learning JIRA Software (2017)',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=545920',
          work: '1.5 hrs',
          predecessors: '92',
          length: '15 hrs',
          tasks: [
            {
              id: 'Learning JIRA Software (2017)1',
              name: 'Learning JIRA Software (2017)1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 4, 8, 0, 0),
              to: new Date(2019, 12, 5, 17, 0, 0),
              dependencies: [{to: 'CASE Issue Tracker'}]
            },
            {
              id: 'Learning JIRA Software (2017)',
              name: 'Learning JIRA Software (2017)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 4, 8, 0, 0),
              to: new Date(2019, 12, 5, 17, 0, 0),
              dependencies: [{to: 'JIRA Software: Basic Administration'}]
            }
          ]
        },
        {
          id: 94,
          name: 'JIRA Software: Basic Administration',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=585265',
          work: '2.5 hrs',
          predecessors: '93',
          length: '25 hrs',
          tasks: [
            {
              id: 'JIRA Software: Basic Administration',
              name: 'JIRA Software: Basic Administration',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 9, 9, 0, 0),
              dependencies: [{to: 'KVMRT3 - Digital Project Collaboration Platform'}]
            }]
        },
        // ## Case Issue Tracker
        {
          id: 95,
          name: 'Case Issue Tracker',
          skill: '',
          media: '',
          link: '',
          work: '1 hrs',
          predecessors: '',
          length: '10 hrs',
          children: ['CASE Issue Tracker'],
          tasks: [
            {
              id: 'Case Issue Tracker',
              name: 'Case Issue Tracker',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 7, 10, 0, 0)
            }]
        },
        {
          id: 96,
          name: 'CASE Issue Tracker',
          skill: 'Beginner',
          media: 'Arup: Intranet',
          link: 'http://networks.intranet.arup.com/digital/bim/tools/case_issue_tracker/home.cfm',
          work: '1 hrs',
          predecessors: '93',
          length: '10 hrs',
          tasks: [
            {
              id: 'CASE Issue Tracker',
              name: 'CASE Issue Tracker',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 7, 10, 0, 0),
              dependencies: [{to: ''}]
            }]
        },
        // ## Trello
        {
          id: 97,
          name: 'Trello',
          skill: '',
          media: '',
          link: '',
          work: '2.5 hrs',
          predecessors: '',
          length: '25 hrs',
          children: ['Trello Essential Training'],
          tasks: [
            {
              id: 'Trello',
              name: 'Trello',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 4, 9, 0, 0)
            }]
        },
        {
          id: 98,
          name: 'Trello Essential Training',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=696319',
          work: '2.5 hrs',
          predecessors: '',
          length: '25 hrs',
          tasks: [
            {
              id: 'Trello Essential Training',
              name: 'Trello Essential Training',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 4, 9, 0, 0)
            }]
        },
        // ## Arupwise
        {
          id: 99,
          name: 'Arupwise',
          skill: '',
          media: '',
          link: '',
          work: '0.5 hrs',
          predecessors: '',
          length: '5 hrs',
          children: ['ArupWise'],
          tasks: [
            {
              id: 'Arupwise',
              name: 'Arupwise',
              color: '#9FC5F8',
              from: new Date(2019, 12, 29, 8, 0, 0),
              to: new Date(2019, 12, 29, 15, 0, 0)
            }]
        },
        {
          id: 100,
          name: 'ArupWise',
          skill: 'Advanced',
          media: 'Arup: Sharepoint',
          link: 'https://arup.sharepoint.com/teams/sintnrdigital/SitePages/ArupWise.aspx',
          work: '0.5 hrs',
          predecessors: '81,87,94',
          length: '5 hrs',
          tasks: [
            {
              id: 'ArupWise',
              name: 'ArupWise',
              color: '#9FC5F8',
              from: new Date(2019, 12, 29, 8, 0, 0),
              to: new Date(2019, 12, 29, 15, 0, 0),
              dependencies: [{to: 'KVMRT3 - Digital Project Collaboration Platform'}]
            }]
        },
        // ## Databases
        {
          id: 101,
          name: 'Databases',
          skill: '',
          media: '',
          link: '',
          work: '5 hrs',
          predecessors: '',
          length: '50 hrs',
          children: ['Database definition', 'MySQL Essential Training'],
          tasks: [
            {
              id: 'Databases',
              name: 'Databases',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 8, 10, 0, 0)
            }]
        },
        {
          id: 102,
          name: 'Database definition',
          skill: 'Advanced',
          media: 'Website',
          link: 'https://searchsqlserver.techtarget.com/definition/database',
          work: '0.5 hrs',
          predecessors: '',
          length: '5 hrs',
          tasks: [
            {
              id: 'Database definition',
              name: 'Database definition',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 1, 15, 0, 0),
              dependencies: [{to: 'MySQL Essential Training'}]
            }]
        },
        {
          id: 103,
          name: 'MySQL Essential Training',
          skill: 'Advanced',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=2807521',
          work: '4.5 hrs',
          predecessors: '102',
          length: '45 hrs',
          tasks: [
            {
              id: 'MySQL Essential Training',
              name: 'MySQL Essential Training',
              color: '#9FC5F8',
              from: new Date(2019, 12, 2, 8, 0, 0),
              to: new Date(2019, 12, 8, 10, 0, 0)
            }]
        },
        {
          id: 104,
          name: 'KVMRT3 - Digital Project Collaboration Platform',
          skill: 'Advanced',
          media: 'Arup: Arup Media',
          link: 'https://media.arup.com/media/KVMRT3+-+Digital+Project+Collaboration+Platform/0_tovl0jg6',
          work: '0.25 hrs',
          predecessors: '82,87,90,94,100',
          length: '2.5 hrs',
          tasks: [
            {
              id: 'KVMRT3 - Digital Project Collaboration Platform',
              name: 'KVMRT3 - Digital Project Collaboration Platform',
              color: '#9FC5F8',
              from: new Date(2019, 12, 30, 8, 0, 0),
              to: new Date(2019, 12, 30, 10, 30, 0)
            }]
        }
        // # Digital Surveying Training Plan
        ,{
          id: 105,
          name: 'Digital Surveying Training Plan',
          skill: '',
          media: '',
          link: '',
          work: '22.83 hrs',
          predecessors: '',
          length: '194.17 hrs',
          children: ['Site Surveying in the Digital Age', 'Introduction to 3D point Cloud Scanning', 'Flight Club: Drones and the Dawn of Personal Aerial Imaging', 'Basics of Airborne LiDAR', 'Matterport 3D Scanning and Visualization', 'ReCap Workflow for Reality Capture', 'Trimble Realworkz Official Channel', 'Reality Modelling –An introduction', 'Master Reality Capture with 3D Scanning'],
          tasks: [
            {
              id: 'Digital Surveying Training Plan',
              name: 'Digital Surveying Training Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 28, 14, 30, 0)
            }]
        },
        {
          id: 106,
          name: 'Site Surveying in the Digital Age',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/course/view.php?id=1679',
          work: '2 hrs',
          predecessors: '',
          length: '20 hrs',
          tasks: [
            {
              id: 'Site Surveying in the Digital Age1',
              name: 'Site Surveying in the Digital Age1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 3, 12, 0, 0),
              dependencies: [{to: 'Flight Club: Drones and the Dawn of Personal Aerial Imaging'}]
            },
            {
              id: 'Site Surveying in the Digital Age2',
              name: 'Site Surveying in the Digital Age2',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 3, 12, 0, 0),
              dependencies: [{to: 'Basics of Airborne LiDAR'}]
            },
            {
              id: 'Site Surveying in the Digital Age3',
              name: 'Site Surveying in the Digital Age3',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 3, 12, 0, 0),
              dependencies: [{to: 'Matterport 3D Scanning and Visualization'}]
            },
            {
              id: 'Site Surveying in the Digital Age',
              name: 'Site Surveying in the Digital Age',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 3, 12, 0, 0),
              dependencies: [{to: 'Introduction to 3D point Cloud Scanning'}]
            }
          ]
        },
        {
          id: 107,
          name: 'Introduction to 3D point Cloud Scanning',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/course/view.php?id=1718',
          work: '2 hrss',
          predecessors: '106',
          length: '20 hrs',
          tasks: [
            {
              id: 'Introduction to 3D point Cloud Scanning1',
              name: 'Introduction to 3D point Cloud Scanning1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 4, 8, 0, 0),
              to: new Date(2019, 12, 6, 12, 0, 0),
              dependencies: [{to: 'ReCap Workflow for Reality Capture'}]
            },
            {
              id: 'Introduction to 3D point Cloud Scanning2',
              name: 'Introduction to 3D point Cloud Scanning2',
              color: '#9FC5F8',
              from: new Date(2019, 12, 4, 8, 0, 0),
              to: new Date(2019, 12, 6, 12, 0, 0),
              dependencies: [{to: 'Trimble Realworkz Official Channel'}]
            },
            {
              id: 'Introduction to 3D point Cloud Scanning',
              name: 'Introduction to 3D point Cloud Scanning',
              color: '#9FC5F8',
              from: new Date(2019, 12, 4, 8, 0, 0),
              to: new Date(2019, 12, 6, 12, 0, 0),
              dependencies: [{to: 'Reality Modelling –An introduction'}]
            }
          ]
        },
        {
          id: 108,
          name: 'Flight Club: Drones and the Dawn of Personal Aerial Imaging',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=414967',
          work: '0.42',
          predecessors: '106',
          length: '4.17 hrs',
          tasks: [
            {
              id: 'Flight Club: Drones and the Dawn of Personal Aerial Imaging',
              name: 'Flight Club: Drones and the Dawn of Personal Aerial Imaging',
              color: '#9FC5F8',
              from: new Date(2019, 12, 4, 8, 0, 0),
              to: new Date(2019, 12, 4, 15, 10, 0)
            }]
        },
        {
          id: 109,
          name: 'Basics of Airborne LiDAR',
          skill: 'Beginner',
          media: 'Youtube',
          link: 'https://www.youtube.com/watch?v=GbJ9xPf0gwg',
          work: '0.37 hrs',
          predecessors: '106',
          length: '3.67 hrs',
          tasks: [
            {
              id: 'Basics of Airborne LiDAR',
              name: 'Basics of Airborne LiDAR',
              color: '#9FC5F8',
              from: new Date(2019, 12, 4, 8, 0, 0),
              to: new Date(2019, 12, 4, 11, 40, 0)
            }]
        },
        {
          id: 110,
          name: 'Matterport 3D Scanning and Visualization',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=728386-2',
          work: '2.13 hrs',
          predecessors: '106',
          length: '21.33 hrs',
          tasks: [
            {
              id: 'Matterport 3D Scanning and Visualization',
              name: 'Matterport 3D Scanning and Visualization',
              color: '#9FC5F8',
              from: new Date(2019, 12, 4, 8, 0, 0),
              to: new Date(2019, 12, 6, 15, 10, 0)
            }]
        },
        {
          id: 111,
          name: 'ReCap Workflow for Reality Capture',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=713381-2',
          work: '2.87 hrs',
          predecessors: '107',
          length: '28.67 hrs',
          tasks: [
            {
              id: 'ReCap Workflow for Reality Capture',
              name: 'ReCap Workflow for Reality Capture',
              color: '#9FC5F8',
              from: new Date(2019, 12, 7, 8, 0, 0),
              to: new Date(2019, 12, 10, 14, 40, 0),
              dependencies: [{to: '3D Scanning with a Camera'}]
            }]
        },
        {
          id: 112,
          name: 'Trimble Realworkz Official Channel',
          skill: 'Intermediate',
          media: 'Youtube',
          link: 'https://www.youtube.com/channel/UCHO9gCh2ZugrzS_vURV9ZIg',
          work: '0.25 hrs',
          predecessors: '107',
          length: '2.5 hrs',
          tasks: [
            {
              id: 'Trimble Realworkz Official Channel',
              name: 'Trimble Realworkz Official Channel',
              color: '#9FC5F8',
              from: new Date(2019, 12, 7, 8, 0, 0),
              to: new Date(2019, 12, 7, 10, 30, 0),
              dependencies: [{to: '3D Scanning with a Camera'}]
            }]
        },
        {
          id: 113,
          name: 'Reality Modelling –An introduction',
          skill: 'Beginner',
          media: 'Arup: Sharepoint',
          link: 'https://arup.sharepoint.com/:b:/r/sites/TnRDigital_39-200/Shared%20Documents/Survey/Bentley%20Presentation%20to%20Melbourne%20Rail%20Authorities/20180823%20Melbourne%20Rail%20Reality%20Modeling%20What%20and%20Why.pdf?csf=1&e=dELy4Z',
          work: '0.25',
          predecessors: '107',
          length: '2.5 hrs',
          tasks: [
            {
              id: 'Reality Modelling –An introduction',
              name: 'Reality Modelling –An introduction',
              color: '#9FC5F8',
              from: new Date(2019, 12, 7, 8, 0, 0),
              to: new Date(2019, 12, 7, 10, 30, 0)
            }]
        },
        // ## Master Reality Capture with 3D Scanning
        {
          id: 114,
          name: 'Master Reality Capture with 3D Scanning',
          skill: '',
          media: '',
          link: 'https://www.lynda.com/learning-paths/CAD/master-reality-capture-with-3d-scanning',
          work: '12.55 hrs',
          predecessors: '',
          length: '125.5 hrs',
          children: ['3D Scanning with a Camera', 'Learning Autodesk ReCap 360', 'Autodesk ReCap Pro: Processing Drone Images', 'Learning FARO: Laser Scanning', 'FARO Scene 3D Laser Scan Registration', 'Learning FARO PointSense Basic'],
          tasks: [
            {
              id: 'Master Reality Capture with 3D Scanning',
              name: 'Master Reality Capture with 3D Scanning',
              color: '#9FC5F8',
              from: new Date(2019, 12, 11, 8, 0, 0),
              to: new Date(2019, 12, 28, 14, 30, 0)
            }]
        },
        {
          id: 115,
          name: '3D Scanning with a Camera',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://www.lynda.com/ReCap-Pro-tutorials/3D-Scanning-Camera/612183-2.html',
          work: '1 hrs',
          predecessors: '111,112',
          length: '10 hrs',
          tasks: [
            {
              id: '3D Scanning with a Camera',
              name: '3D Scanning with a Camera',
              color: '#9FC5F8',
              from: new Date(2019, 12, 11, 8, 0, 0),
              to: new Date(2019, 12, 12, 10, 0, 0),
              dependencies: [{to: 'Learning Autodesk ReCap 360'}]
            }]
        },
        {
          id: 116,
          name: 'Learning Autodesk ReCap 360',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://www.lynda.com/ReCap-360-tutorials/Learning-Autodesk-ReCap-360/577357-2.html',
          work: '1.42 hrs',
          predecessors: '115',
          length: '14.17 hrs',
          tasks: [
            {
              id: 'Learning Autodesk ReCap 360',
              name: 'Learning Autodesk ReCap 360',
              color: '#9FC5F8',
              from: new Date(2019, 12, 13, 8, 0, 0),
              to: new Date(2019, 12, 14, 16, 10, 0),
              dependencies: [{to: 'Autodesk ReCap Pro: Processing Drone Images'}]
            }]
        },
        {
          id: 117,
          name: 'Autodesk ReCap Pro: Processing Drone Images',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://www.lynda.com/ReCap-Pro-tutorials/Autodesk-ReCap-Pro-Processing-Drone-Images/636113-2.html',
          work: '0.82 hrs',
          predecessors: '116',
          length: '8.17 hrs',
          tasks: [
            {
              id: 'Autodesk ReCap Pro: Processing Drone Images',
              name: 'Autodesk ReCap Pro: Processing Drone Images',
              color: '#9FC5F8',
              from: new Date(2019, 12, 15, 8, 0, 0),
              to: new Date(2019, 12, 15, 18, 0, 0),
              dependencies: [{to: 'Learning FARO: Laser Scanning'}]
            }]
        },
        {
          id: 118,
          name: 'Learning FARO: Laser Scanning',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://www.lynda.com/Scene-tutorials/Learning-FARO-Laser-Scanning/664815-2.html',
          work: '0.67',
          predecessors: '117',
          length: '6.67 hrs',
          tasks: [
            {
              id: 'Learning FARO: Laser Scanning',
              name: 'Learning FARO: Laser Scanning',
              color: '#9FC5F8',
              from: new Date(2019, 12, 16, 8, 0, 0),
              to: new Date(2019, 12, 16, 16, 40, 0),
              dependencies: [{to: 'FARO Scene 3D Laser Scan Registration'}]
            }]
        },
        {
          id: 119,
          name: 'FARO Scene 3D Laser Scan Registration',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://www.lynda.com/Scene-tutorials/FARO-Scene-3D-Laser-Scan-Registration/656798-2.html',
          work: '7.4 hrs',
          predecessors: '118',
          length: '74 hrs',
          tasks: [
            {
              id: 'FARO Scene 3D Laser Scan Registration',
              name: 'FARO Scene 3D Laser Scan Registration',
              color: '#9FC5F8',
              from: new Date(2019, 12, 17, 8, 0, 0),
              to: new Date(2019, 12, 26, 10, 0, 0),
              dependencies: [{to: 'Learning FARO PointSense Basic'}]
            }]
        },
        {
          id: 120,
          name: 'Learning FARO PointSense Basic',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://www.lynda.com/Scene-tutorials/FARO-Scene-3D-Laser-Scan-Registration/656798-2.html',
          work: '1.25 hrs',
          predecessors: '119',
          length: '12.5 hrs',
          tasks: [
            {
              id: 'Learning FARO PointSense Basic',
              name: 'Learning FARO PointSense Basic',
              color: '#9FC5F8',
              from: new Date(2019, 12, 27, 8, 0, 0),
              to: new Date(2019, 12, 28, 14, 30, 0)
            }]
        }
        // # Civil Infrastructure Training Plan
        ,{
          id: 121,
          name: 'Civil Infrastructure Training Plan',
          skill: '',
          media: '',
          link: '',
          work: '',
          predecessors: '43.93 hrs',
          length: '369.33 hrs',
          children: ['Openroads Designer', 'Openrail Designer', 'Subsurface Utilities'],
          tasks: [
            {
              id: 'Civil Infrastructure Training Plan',
              name: 'Civil Infrastructure Training Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 9, 8, 0, 0),
              to: new Date(2020, 2, 5, 10, 0, 0)
            }]
        },
        // ## Openroads Designer
        {
          id: 122,
          name: 'Openroads Designer',
          skill: '',
          media: '',
          link: '',
          work: '24.93 hrs',
          predecessors: '',
          length: '249.33 hrs',
          children: ['Introduction to OpenRoads Designer Concepts and Capabilities', 'QuickStart - Navigating the Interface', 'QuickStart for Terrain Display', 'QuickStart for OpenRoads Designer Geometry', 'QuickStart for OpenRoads Designer Corridor Modeling', 'QuickStart for OpenRoads Designer Drawing Production', 'Creating and Manipulating the Corridor', 'Defining Template Components and Constraints', 'Creating and Editing Centerline Geometry', 'Importing and Editing Survey Data', 'Using and Editing Terrain Models'],
          tasks: [
            {
              id: 'Openroads Designer',
              name: 'Openroads Designer',
              color: '#9FC5F8',
              from: new Date(2019, 12, 9, 8, 0, 0),
              to: new Date(2020, 1, 10, 16, 40, 0)
            }]
        },
        {
          id: 123,
          name: 'Introduction to OpenRoads Designer Concepts and Capabilities',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '7',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'Introduction to OpenRoads Designer Concepts and Capabilities',
              name: 'Introduction to OpenRoads Designer Concepts and Capabilities',
              color: '#9FC5F8',
              from: new Date(2019, 12, 9, 8, 0, 0),
              to: new Date(2019, 12, 11, 16, 40, 0),
              dependencies: [{to: 'QuickStart - Navigating the Interface'}]
            }]
        },
        {
          id: 124,
          name: 'QuickStart - Navigating the Interface',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '123',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'QuickStart - Navigating the Interface',
              name: 'QuickStart - Navigating the Interface',
              color: '#9FC5F8',
              from: new Date(2019, 12, 12, 8, 0, 0),
              to: new Date(2019, 12, 14, 16, 40, 0),
              dependencies: [{to: 'QuickStart for Terrain Display'}]
            }]
        },
        {
          id: 125,
          name: 'QuickStart for Terrain Display',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '124',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'QuickStart for Terrain Display',
              name: 'QuickStart for Terrain Display',
              color: '#9FC5F8',
              from: new Date(2019, 12, 15, 8, 0, 0),
              to: new Date(2019, 12, 17, 16, 40, 0),
              dependencies: [{to: 'QuickStart for OpenRoads Designer Geometry'}]
            }]
        },
        {
          id: 126,
          name: 'QuickStart for OpenRoads Designer Geometry',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '125',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'QuickStart for OpenRoads Designer Geometry',
              name: 'QuickStart for OpenRoads Designer Geometry',
              color: '#9FC5F8',
              from: new Date(2019, 12, 18, 8, 0, 0),
              to: new Date(2019, 12, 20, 16, 40, 0),
              dependencies: [{to: 'QuickStart for OpenRoads Designer Corridor Modeling'}]
            }]
        },
        {
          id: 127,
          name: 'QuickStart for OpenRoads Designer Corridor Modeling',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '126',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'QuickStart for OpenRoads Designer Corridor Modeling',
              name: 'QuickStart for OpenRoads Designer Corridor Modeling',
              color: '#9FC5F8',
              from: new Date(2019, 12, 21, 8, 0, 0),
              to: new Date(2019, 12, 23, 16, 40, 0),
              dependencies: [{to: 'QuickStart for OpenRoads Designer Drawing Production'}]
            }]
        },
        {
          id: 128,
          name: 'QuickStart for OpenRoads Designer Drawing Production',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '127',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'QuickStart for OpenRoads Designer Drawing Production',
              name: 'QuickStart for OpenRoads Designer Drawing Production',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 26, 16, 40, 0),
              dependencies: [{to: 'Creating and Manipulating the Corridor'}]
            }]
        },
        {
          id: 129,
          name: 'Creating and Manipulating the Corridor',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '128',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'Creating and Manipulating the Corridor',
              name: 'Creating and Manipulating the Corridor',
              color: '#9FC5F8',
              from: new Date(2019, 12, 27, 8, 0, 0),
              to: new Date(2019, 12, 29, 16, 40, 0),
              dependencies: [{to: 'Defining Template Components and Constraints'}]
            }]
        },
        {
          id: 130,
          name: 'Defining Template Components and Constraints',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '129',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'Defining Template Components and Constraints',
              name: 'Defining Template Components and Constraints',
              color: '#9FC5F8',
              from: new Date(2019, 12, 30, 8, 0, 0),
              to: new Date(2020, 1, 1, 16, 40, 0),
              dependencies: [{to: 'Creating and Editing Centerline Geometry'}]
            }]
        },
        {
          id: 131,
          name: 'Creating and Editing Centerline Geometry',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '130',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'Creating and Editing Centerline Geometry',
              name: 'Creating and Editing Centerline Geometry',
              color: '#9FC5F8',
              from: new Date(2020, 1, 2, 8, 0, 0),
              to: new Date(2020, 1, 4, 16, 40, 0),
              dependencies: [{to: 'Importing and Editing Survey Data'}]
            }]
        },
        {
          id: 132,
          name: 'Importing and Editing Survey Data',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '131',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'Importing and Editing Survey Data',
              name: 'Importing and Editing Survey Data',
              color: '#9FC5F8',
              from: new Date(2020, 1, 5, 8, 0, 0),
              to: new Date(2020, 1, 7, 16, 40, 0),
              dependencies: [{to: 'Using and Editing Terrain Models'}]
            }]
        },
        {
          id: 133,
          name: 'Using and Editing Terrain Models',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '2.27 hrs',
          predecessors: '132',
          length: '22.67 hrs',
          tasks: [
            {
              id: 'Using and Editing Terrain Models1',
              name: 'Using and Editing Terrain Models1',
              color: '#9FC5F8',
              from: new Date(2020, 1, 8, 8, 0, 0),
              to: new Date(2020, 1, 10, 16, 40, 0),
              dependencies: [{to: 'QuickStart - Evaluating Subsurface Utilities in OpenRoads Designer'}]
            },
            {
              id: 'Using and Editing Terrain Models',
              name: 'Using and Editing Terrain Models',
              color: '#9FC5F8',
              from: new Date(2020, 1, 8, 8, 0, 0),
              to: new Date(2020, 1, 10, 16, 40, 0),
              dependencies: [{to: 'Quickstart for OpenRail ConceptStation'}]
            }
          ]
        },
        // ## Openrail Designer
        {
          id: 134,
          name: 'Openrail Designer',
          skill: '',
          media: '',
          link: '',
          work: '7 hrs',
          predecessors: '',
          length: '70 hrs',
          children: ['Quickstart for OpenRail ConceptStation', 'Regression', 'Speed Table', 'Cant', 'Creating Rails', 'Creating Sleepers', 'Creating Plan and Profile Sheets'],
          tasks: [
            {
              id: 'Openrail Designer',
              name: 'Openrail Designer',
              color: '#9FC5F8',
              from: new Date(2020, 1, 11, 8, 0, 0),
              to: new Date(2020, 1, 24, 10, 0, 0)
            }]
        },
        {
          id: 135,
          name: 'Quickstart for OpenRail ConceptStation',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/Public/BrowseLearningPaths?CustomLP=False#',
          work: '1 hrs',
          predecessors: '133',
          length: '10 hrs',
          tasks: [
            {
              id: 'Quickstart for OpenRail ConceptStation',
              name: 'Quickstart for OpenRail ConceptStation',
              color: '#9FC5F8',
              from: new Date(2020, 1, 11, 8, 0, 0),
              to: new Date(2020, 1, 12, 10, 0, 0),
              dependencies: [{to: 'Regression'}]
            }]
        },
        {
          id: 136,
          name: 'Regression',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=112027&CourseId=122868&MediaID=5015092',
          work: '1 hrs',
          predecessors: '135',
          length: '10 hrs',
          tasks: [
            {
              id: 'Regression',
              name: 'Regression',
              color: '#9FC5F8',
              from: new Date(2020, 1, 13, 8, 0, 0),
              to: new Date(2020, 1, 14, 10, 0, 0),
              dependencies: [{to: 'Speed Table'}]
            }]
        },
        {
          id: 137,
          name: 'Speed Table',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=112027&CourseId=122867&MediaID=5015091',
          work: '1 hrs',
          predecessors: '136',
          length: '10 hrs',
          tasks: [
            {
              id: 'Speed Table',
              name: 'Speed Table',
              color: '#9FC5F8',
              from: new Date(2020, 1, 15, 8, 0, 0),
              to: new Date(2020, 1, 16, 10, 0, 0),
              dependencies: [{to: 'Cant'}]
            }]
        },
        {
          id: 138,
          name: 'Cant',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=112027&CourseId=122866&MediaID=5015090',
          work: '1 hrs',
          predecessors: '137',
          length: '10 hrs',
          tasks: [
            {
              id: 'Cant',
              name: 'Cant',
              color: '#9FC5F8',
              from: new Date(2020, 1, 17, 8, 0, 0),
              to: new Date(2020, 1, 18, 10, 0, 0),
              dependencies: [{to: 'Creating Rails'}]
            }]
        },
        {
          id: 139,
          name: 'Creating Rails',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=112027&CourseId=124380&MediaID=5015960',
          work: '1 hrs',
          predecessors: '138',
          length: '10 hrs',
          tasks: [
            {
              id: 'Creating Rails',
              name: 'Creating Rails',
              color: '#9FC5F8',
              from: new Date(2020, 1, 19, 8, 0, 0),
              to: new Date(2020, 1, 20, 10, 0, 0),
              dependencies: [{to: 'Creating Sleepers'}]
            }]
        },
        {
          id: 140,
          name: 'Creating Sleepers',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=112027&CourseId=124381&MediaID=5015961',
          work: '1 hrs',
          predecessors: '139',
          length: '10 hrs',
          tasks: [
            {
              id: 'Creating Sleepers',
              name: 'Creating Sleepers',
              color: '#9FC5F8',
              from: new Date(2020, 1, 21, 8, 0, 0),
              to: new Date(2020, 1, 22, 10, 0, 0),
              dependencies: [{to: 'Creating Plan and Profile Sheets'}]
            }]
        },
        {
          id: 141,
          name: 'Creating Plan and Profile Sheets',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: 'https://learn.bentley.com/app/VideoPlayer/LinkToIndividualCourse?LearningPathID=112027&CourseId=122764&MediaID=5014996',
          work: '1 hrs',
          predecessors: '140',
          length: '10 hrs',
          tasks: [
            {
              id: 'Creating Plan and Profile Sheets',
              name: 'Creating Plan and Profile Sheets',
              color: '#9FC5F8',
              from: new Date(2020, 1, 23, 8, 0, 0),
              to: new Date(2020, 1, 24, 10, 0, 0)
            }]
        },
        // ## Subsurface Utilities
        {
          id: 142,
          name: 'Subsurface Utilities',
          skill: '',
          media: '',
          link: '',
          work: '12 hrs',
          predecessors: '',
          length: '120 hrs',
          children: ['QuickStart - Evaluating Subsurface Utilities in OpenRoads Designer', 'QuickStart for Terrain Display2', 'Detecting and Managing Utility Conflicts CONNECT Edition', 'QuickStart - Laying out a Drainage Network in OpenRoads Designer', 'Hydraulic Analysis and Design in OpenRoads Designer', 'Creating Utilities from Graphics in OpenRoads Designer', 'What Happens When You Place a Pipe', 'What Happens When You Place an Inlet', 'What Happens When you Hit Compute', 'Dynamic Analysis - SWMM CONNECT Edition', 'Ponds - A Physical and Hydraulic Introduction', 'Managing Multiple Scenarios CONNECT Edition'],
          tasks: [
            {
              id: 'Subsurface Utilities',
              name: 'Subsurface Utilities',
              color: '#9FC5F8',
              from: new Date(2020, 1, 11, 8, 0, 0),
              to: new Date(2020, 2, 5, 10, 0, 0)
            }]
        },
        {
          id: 143,
          name: 'QuickStart - Evaluating Subsurface Utilities in OpenRoads Designer',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hr',
          predecessors: '133',
          length: '10 hrs',
          tasks: [
            {
              id: 'QuickStart - Evaluating Subsurface Utilities in OpenRoads Designer',
              name: 'QuickStart - Evaluating Subsurface Utilities in OpenRoads Designer',
              color: '#9FC5F8',
              from: new Date(2020, 1, 11, 8, 0, 0),
              to: new Date(2020, 1, 12, 10, 0, 0),
              dependencies: [{to: 'QuickStart for Terrain Display2'}]
            }]
        },
        {
          id: 144,
          name: 'QuickStart for Terrain Display2',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hr',
          predecessors: '143',
          length: '10 hrs',
          tasks: [
            {
              id: 'QuickStart for Terrain Display2',
              name: 'QuickStart for Terrain Display2',
              color: '#9FC5F8',
              from: new Date(2020, 1, 13, 8, 0, 0),
              to: new Date(2020, 1, 14, 10, 0, 0),
              dependencies: [{to: 'Detecting and Managing Utility Conflicts CONNECT Edition'}]
            }]
        },
        {
          id: 145,
          name: 'Detecting and Managing Utility Conflicts CONNECT Edition',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hrs',
          predecessors: '144',
          length: '10 hrs',
          tasks: [
            {
              id: 'Detecting and Managing Utility Conflicts CONNECT Edition',
              name: 'Detecting and Managing Utility Conflicts CONNECT Edition',
              color: '#9FC5F8',
              from: new Date(2020, 1, 15, 8, 0, 0),
              to: new Date(2020, 1, 16, 10, 0, 0),
              dependencies: [{to: 'QuickStart - Laying out a Drainage Network in OpenRoads Designer'}]
            }]
        },
        {
          id: 146,
          name: 'QuickStart - Laying out a Drainage Network in OpenRoads Designer',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hrs',
          predecessors: '145',
          length: '10 hrs',
          tasks: [
            {
              id: 'QuickStart - Laying out a Drainage Network in OpenRoads Designer',
              name: 'QuickStart - Laying out a Drainage Network in OpenRoads Designer',
              color: '#9FC5F8',
              from: new Date(2020, 1, 17, 8, 0, 0),
              to: new Date(2020, 1, 18, 10, 0, 0),
              dependencies: [{to: 'Hydraulic Analysis and Design in OpenRoads Designer'}]
            }]
        },
        {
          id: 147,
          name: 'Hydraulic Analysis and Design in OpenRoads Designer',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hrs',
          predecessors: '146',
          length: '10 hrs',
          tasks: [
            {
              id: 'Hydraulic Analysis and Design in OpenRoads Designer',
              name: 'Hydraulic Analysis and Design in OpenRoads Designer',
              color: '#9FC5F8',
              from: new Date(2020, 1, 19, 8, 0, 0),
              to: new Date(2020, 1, 20, 10, 0, 0),
              dependencies: [{to: 'Creating Utilities from Graphics in OpenRoads Designer'}]
            }]
        },
        {
          id: 148,
          name: 'Creating Utilities from Graphics in OpenRoads Designer',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hrs',
          predecessors: '147',
          length: '10 hrs',
          tasks: [
            {
              id: 'Creating Utilities from Graphics in OpenRoads Designer',
              name: 'Creating Utilities from Graphics in OpenRoads Designer',
              color: '#9FC5F8',
              from: new Date(2020, 1, 21, 8, 0, 0),
              to: new Date(2020, 1, 22, 10, 0, 0),
              dependencies: [{to: 'What Happens When You Place a Pipe'}]
            }]
        },
        {
          id: 149,
          name: 'What Happens When You Place a Pipe',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hrs',
          predecessors: '148',
          length: '10 hrs',
          tasks: [
            {
              id: 'What Happens When You Place a Pipe',
              name: 'What Happens When You Place a Pipe',
              color: '#9FC5F8',
              from: new Date(2020, 1, 23, 8, 0, 0),
              to: new Date(2020, 1, 24, 10, 0, 0),
              dependencies: [{to: 'What Happens When You Place an Inlet'}]
            }]
        },
        {
          id: 150,
          name: 'What Happens When You Place an Inlet',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hrs',
          predecessors: '',
          length: '10 hrs',
          tasks: [
            {
              id: 'What Happens When You Place an Inlet',
              name: 'What Happens When You Place an Inlet',
              color: '#9FC5F8',
              from: new Date(2020, 1, 25, 8, 0, 0),
              to: new Date(2020, 1, 26, 10, 0, 0),
              dependencies: [{to: 'What Happens When you Hit Compute'}]
            }]
        },
        {
          id: 151,
          name: 'What Happens When you Hit Compute',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hrs',
          predecessors: '150',
          length: '10 hrs',
          tasks: [
            {
              id: 'What Happens When you Hit Compute',
              name: 'What Happens When you Hit Compute',
              color: '#9FC5F8',
              from: new Date(2020, 1, 27, 8, 0, 0),
              to: new Date(2020, 1, 28, 10, 0, 0),
              dependencies: [{to: 'Dynamic Analysis - SWMM CONNECT Edition'}]
            }]
        },
        {
          id: 152,
          name: 'Dynamic Analysis - SWMM CONNECT Edition',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hrs',
          predecessors: '151',
          length: '10 hrs',
          tasks: [
            {
              id: 'Dynamic Analysis - SWMM CONNECT Edition',
              name: 'Dynamic Analysis - SWMM CONNECT Edition',
              color: '#9FC5F8',
              from: new Date(2020, 1, 29, 8, 0, 0),
              to: new Date(2020, 2, 1, 10, 0, 0),
              dependencies: [{to: 'Ponds - A Physical and Hydraulic Introduction'}]
            }]
        },
        {
          id: 153,
          name: 'Ponds - A Physical and Hydraulic Introduction',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hrs',
          predecessors: '152',
          length: '10 hrs',
          tasks: [
            {
              id: 'Ponds - A Physical and Hydraulic Introduction',
              name: 'Ponds - A Physical and Hydraulic Introduction',
              color: '#9FC5F8',
              from: new Date(2020, 2, 2, 8, 0, 0),
              to: new Date(2020, 2, 3, 10, 0, 0),
              dependencies: [{to: 'Managing Multiple Scenarios CONNECT Edition'}]
            }]
        },
        {
          id: 154,
          name: 'Managing Multiple Scenarios CONNECT Edition',
          skill: 'Beginner',
          media: 'BentleyLearn',
          link: '',
          work: '1 hrs',
          predecessors: '153',
          length: '10 hrs',
          tasks: [
            {
              id: 'Managing Multiple Scenarios CONNECT Edition',
              name: 'Managing Multiple Scenarios CONNECT Edition',
              color: '#9FC5F8',
              from: new Date(2020, 2, 4, 8, 0, 0),
              to: new Date(2020, 2, 5, 10, 30, 0)
            }]
        }
        // # BIM Training Plan
        ,{
          id: 155,
          name: 'BIM Training Plan',
          skill: '',
          media: '',
          link: '',
          work: '69.78 hrs',
          predecessors: '',
          length: '577.83 hrs',
          children: ['General', 'Become a BIM Coordinator'],
          tasks: [
            {
              id: 'BIM Training Plan',
              name: 'BIM Training Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2020, 2, 17, 17, 30, 0)
            }]
        },
        // ## General
        {
          id: 156,
          name: 'General',
          skill: '',
          media: '',
          link: '',
          work: '29.6 hrs',
          predecessors: '',
          length: '296 hrs',
          children: ['BIM Foundations', 'Introduction to BIM Processes (AUSBIMITP)', 'BIM for Leaders (AUSBIMLDR)', 'BIM for Project Managers Masterclass', 'Creating a BIM Execution Plan', 'How to write an effective BIM Execution Plan (AUSBIMEP)', 'How to work in the Common Data Environment (AUSBIMCDE)', 'How to run a productive Virtual Design Review (AUSBIMVDR)', 'How to complete a BIM Design Data Review (AUSBIMDDR)'],
          tasks: [
            {
              id: 'General',
              name: 'General',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2020, 1, 9, 12, 0, 0)
            }]
        },
        {
          id: 157,
          name: 'BIM Foundations',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=681092-2',
          work: '1.5 hrs',
          predecessors: '',
          length: '15 hrs',
          tasks: [
            {
              id: 'BIM Foundations',
              name: 'BIM Foundations',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 2, 17, 0, 0),
              dependencies: [{to: 'Introduction to BIM Processes (AUSBIMITP)'}]
            }]
        },
        {
          id: 158,
          name: 'Introduction to BIM Processes (AUSBIMITP)',
          skill: 'Beginner',
          media: 'Arup: Moodle (Classroom)',
          link: 'https://moodle.arup.com/course/view.php?id=1111',
          work: '3 hrs',
          predecessors: '157',
          length: '30 hrs',
          tasks: [
            {
              id: 'Introduction to BIM Processes (AUSBIMITP)',
              name: 'Introduction to BIM Processes (AUSBIMITP)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2019, 12, 6, 16, 30, 0),
              dependencies: [{to: 'BIM for Leaders (AUSBIMLDR)'}]
            }]
        },
        {
          id: 159,
          name: 'BIM for Leaders (AUSBIMLDR)',
          skill: 'Beginner',
          media: 'Arup: Moodle (Classroom)',
          link: 'https://moodle.arup.com/course/view.php?id=699',
          work: '4 hrs',
          predecessors: '158',
          length: '40 hrs',
          tasks: [
            {
              id: 'BIM for Leaders (AUSBIMLDR)',
              name: 'BIM for Leaders (AUSBIMLDR)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 7, 8, 0, 0),
              to: new Date(2019, 12, 11, 18, 0, 0),
              dependencies: [{to: 'BIM for Project Managers Masterclass'}]
            }]
        },
        {
          id: 160,
          name: 'BIM for Project Managers Masterclass',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/course/view.php?id=872',
          work: '8 hrs',
          predecessors: '159',
          length: '80 hrs',
          tasks: [
            {
              id: 'BIM for Project Managers Masterclass',
              name: 'BIM for Project Managers Masterclass',
              color: '#9FC5F8',
              from: new Date(2019, 12, 12, 8, 0, 0),
              to: new Date(2019, 12, 21, 18, 0, 0),
              dependencies: [{to: 'Creating a BIM Execution Plan'}]
            }]
        },
        {
          id: 161,
          name: 'Creating a BIM Execution Plan',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=577360-2',
          work: '1.1 hrs',
          predecessors: '160',
          length: '11 hrs',
          tasks: [
            {
              id: 'Creating a BIM Execution Plan1',
              name: 'Creating a BIM Execution Plan1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 22, 8, 0, 0),
              to: new Date(2019, 12, 23, 11, 0, 0),
              dependencies: [{to: 'BIM Manager: Managing BIM 360'}]
            },
            {
              id: 'Creating a BIM Execution Plan',
              name: 'Creating a BIM Execution Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 22, 8, 0, 0),
              to: new Date(2019, 12, 23, 11, 0, 0),
              dependencies: [{to: 'How to write an effective BIM Execution Plan (AUSBIMEP)'}]
            }
          ]
        },
        {
          id: 162,
          name: 'How to write an effective BIM Execution Plan (AUSBIMEP)',
          skill: 'Intermediate',
          media: 'Arup: Moodle (Classroom)',
          link: 'https://moodle.arup.com/course/view.php?id=1113',
          work: '3.5 hrs',
          predecessors: '161',
          length: '35 hrs',
          tasks: [
            {
              id: 'How to write an effective BIM Execution Plan (AUSBIMEP)',
              name: 'How to write an effective BIM Execution Plan (AUSBIMEP)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 28, 11, 0, 0),
              dependencies: [{to: 'How to work in the Common Data Environment (AUSBIMCDE)'}]
            }]
        },
        {
          id: 163,
          name: 'How to work in the Common Data Environment (AUSBIMCDE)',
          skill: 'Intermediate',
          media: 'Arup: Moodle (Classroom)',
          link: 'https://moodle.arup.com/course/view.php?id=1110',
          work: '3.5 hrs',
          predecessors: '162',
          length: '35 hrs',
          tasks: [
            {
              id: 'How to work in the Common Data Environment (AUSBIMCDE)',
              name: 'How to work in the Common Data Environment (AUSBIMCDE)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 29, 8, 0, 0),
              to: new Date(2020, 1, 1, 18, 0, 0),
              dependencies: [{to: 'How to run a productive Virtual Design Review (AUSBIMVDR)'}]
            }]
        },
        {
          id: 164,
          name: 'How to run a productive Virtual Design Review (AUSBIMVDR)',
          skill: 'Intermediate',
          media: 'Arup: Moodle (Classroom)',
          link: 'https://moodle.arup.com/course/view.php?id=1114',
          work: '3 hrs',
          predecessors: '163',
          length: '30 hrs',
          tasks: [
            {
              id: 'How to run a productive Virtual Design Review (AUSBIMVDR)',
              name: 'How to run a productive Virtual Design Review (AUSBIMVDR)',
              color: '#9FC5F8',
              from: new Date(2020, 1, 2, 8, 0, 0),
              to: new Date(2020, 1, 6, 16, 0, 0),
              dependencies: [{to: 'How to complete a BIM Design Data Review (AUSBIMDDR)'}]
            }]
        },
        {
          id: 165,
          name: 'How to complete a BIM Design Data Review (AUSBIMDDR)',
          skill: 'Intermediate',
          media: 'Arup: Moodle (Classroom)',
          link: 'https://moodle.arup.com/course/view.php?id=1112',
          work: '2 hrs',
          predecessors: '164',
          length: '20 hrs',
          tasks: [
            {
              id: 'How to complete a BIM Design Data Review (AUSBIMDDR)',
              name: 'How to complete a BIM Design Data Review (AUSBIMDDR)',
              color: '#9FC5F8',
              from: new Date(2020, 1, 7, 8, 0, 0),
              to: new Date(2020, 1, 9, 12, 0, 0)
            }]
        },
        // ## Become a BIM Coordinator
        {
          id: 166,
          name: 'Become a BIM Coordinator',
          skill: '',
          media: '',
          link: 'https://www.lynda.com/learning-paths/CAD/become-a-bim-coordinator',
          work: '40.18 hrs',
          predecessors: '',
          length: '401.83 hrs',
          children: ['BIM Manager: Managing BIM 360', 'BIM Manager: Managing CAD Standards', 'Learning BIM 360 Glue Classic', 'BIM Manager: Managing Revit', 'Revit 2018: Essential Training for Architecture (Imperial)', 'Revit 2018: Essential Training for MEP (Imperial)', 'Revit 2018: Essential Training for Structure', 'Revit Schedules', 'Navisworks 2017 Essential Training', 'Synchro Essential Training', 'Dynamo: Revit Workflow', 'Dynamo 1.x Essential Training'],
          tasks: [
            {
              id: 'Become a BIM Coordinator',
              name: 'Become a BIM Coordinator',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2020, 2, 17, 17, 30, 0)
            }]
        },
        {
          id: 167,
          name: 'BIM Manager: Managing BIM 360',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=495324-2',
          work: '0.6 hrs',
          predecessors: '161',
          length: '6 hrs',
          tasks: [
            {
              id: 'BIM Manager: Managing BIM 360',
              name: 'BIM Manager: Managing BIM 360',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 24, 16, 0, 0),
              dependencies: [{to: 'BIM Manager: Managing CAD Standards'}]
            }]
        },
        {
          id: 168,
          name: 'BIM Manager: Managing CAD Standards',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=577360-2',
          work: '0.93 hrs',
          predecessors: '167',
          length: '9.33 hrs',
          tasks: [
            {
              id: 'BIM Manager: Managing CAD Standards',
              name: 'BIM Manager: Managing CAD Standards',
              color: '#9FC5F8',
              from: new Date(2019, 12, 25, 8, 0, 0),
              to: new Date(2019, 12, 26, 9, 20, 0),
              dependencies: [{to: 'Learning BIM 360 Glue Classic'}]
            }]
        },
        {
          id: 169,
          name: 'Learning BIM 360 Glue Classic',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=386387-2',
          work: '2.72 hrs',
          predecessors: '168',
          length: '27.17 hrs',
          tasks: [
            {
              id: 'Learning BIM 360 Glue Classic',
              name: 'Learning BIM 360 Glue Classic',
              color: '#9FC5F8',
              from: new Date(2019, 12, 27, 8, 0, 0),
              to: new Date(2019, 12, 30, 11, 10, 0),
              dependencies: [{to: 'BIM Manager: Managing Revit'}]
            }]
        },
        {
          id: 170,
          name: 'BIM Manager: Managing Revit',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=495326-2',
          work: '2.68 hrs',
          predecessors: '169',
          length: '26.83 hrs',
          tasks: [
            {
              id: 'BIM Manager: Managing Revit',
              name: 'BIM Manager: Managing Revit',
              color: '#9FC5F8',
              from: new Date(2019, 12, 31, 8, 0, 0),
              to: new Date(2020, 1, 3, 10, 50, 0),
              dependencies: [{to: 'Revit 2018: Essential Training for Architecture (Imperial)'}]
            }]
        },
        {
          id: 171,
          name: 'Revit 2018: Essential Training for Architecture (Imperial)',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=580642-2',
          work: '11.65 hrs',
          predecessors: '170',
          length: '116.5 hrs',
          tasks: [
            {
              id: 'Revit 2018: Essential Training for Architecture (Imperial)',
              name: 'Revit 2018: Essential Training for Architecture (Imperial)',
              color: '#9FC5F8',
              from: new Date(2020, 1, 4, 8, 0, 0),
              to: new Date(2020, 1, 18, 14, 30, 0),
              dependencies: [{to: 'Revit 2018: Essential Training for MEP (Imperial)'}]
            }]
        },
        {
          id: 172,
          name: 'Revit 2018: Essential Training for MEP (Imperial)',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=578064-2',
          work: '3.87 hrs',
          predecessors: '171',
          length: '38.67 hrs',
          tasks: [
            {
              id: 'Revit 2018: Essential Training for MEP (Imperial)',
              name: 'Revit 2018: Essential Training for MEP (Imperial)',
              color: '#9FC5F8',
              from: new Date(2020, 1, 19, 8, 0, 0),
              to: new Date(2020, 1, 23, 16, 40, 0),
              dependencies: [{to: 'Revit 2018: Essential Training for Structure'}]
            }]
        },
        {
          id: 173,
          name: 'Revit 2018: Essential Training for Structure',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=578065-2',
          work: '5.93 hrs',
          predecessors: '172',
          length: '59.33 hrs',
          tasks: [
            {
              id: 'Revit 2018: Essential Training for Structure',
              name: 'Revit 2018: Essential Training for Structure',
              color: '#9FC5F8',
              from: new Date(2020, 1, 24, 8, 0, 0),
              to: new Date(2020, 1, 29, 11, 10, 0),
              dependencies: [{to: 'Revit Schedules'}]
            }]
        },
        {
          id: 174,
          name: 'Revit Schedules',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=609000-2',
          work: '1.58 hrs',
          predecessors: '173',
          length: '15.83 hrs',
          tasks: [
            {
              id: 'Revit Schedules',
              name: 'Revit Schedules',
              color: '#9FC5F8',
              from: new Date(2020, 2, 1, 8, 0, 0),
              to: new Date(2020, 2, 2, 17, 50, 0),
              dependencies: [{to: 'Navisworks 2017 Essential Training'}]
            }]
        },
        {
          id: 175,
          name: 'Navisworks 2017 Essential Training',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=5016710-2',
          work: '3.37 hrs',
          predecessors: '174',
          length: '33.67 hrs',
          tasks: [
            {
              id: 'Navisworks 2017 Essential Training',
              name: 'Navisworks 2017 Essential Training',
              color: '#9FC5F8',
              from: new Date(2020, 2, 3, 8, 0, 0),
              to: new Date(2020, 2, 7, 9, 40, 0),
              dependencies: [{to: 'Synchro Essential Training'}]
            }]
        },
        {
          id: 176,
          name: 'Synchro Essential Training',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=503881-2',
          work: '2.22 hrs',
          predecessors: '175',
          length: '22.17 hrs',
          tasks: [
            {
              id: 'Synchro Essential Training',
              name: 'Synchro Essential Training',
              color: '#9FC5F8',
              from: new Date(2020, 2, 8, 8, 0, 0),
              to: new Date(2020, 2, 10, 16, 10, 0),
              dependencies: [{to: 'Dynamo: Revit Workflow'}]
            }]
        },
        {
          id: 177,
          name: 'Dynamo: Revit Workflow',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=494383-2',
          work: '1.48 hrs',
          predecessors: '176',
          length: '14.83 hrs',
          tasks: [
            {
              id: 'Dynamo: Revit Workflow',
              name: 'Dynamo: Revit Workflow',
              color: '#9FC5F8',
              from: new Date(2020, 2, 11, 8, 0, 0),
              to: new Date(2020, 2, 12, 16, 50, 0),
              dependencies: [{to: 'Dynamo 1.x Essential Training'}]
            }]
        },
        {
          id: 178,
          name: 'Dynamo 1.x Essential Training',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=455724-2',
          work: '3.15 hrs',
          predecessors: '177',
          length: '31.5 hrs',
          tasks: [
            {
              id: 'Dynamo 1.x Essential Training',
              name: 'Dynamo 1.x Essential Training',
              color: '#9FC5F8',
              from: new Date(2020, 2, 13, 8, 0, 0),
              to: new Date(2020, 2, 17, 17, 30, 0)
            }]
        }
        // # Parametric Design and Automation Training Plan
        ,{
          id: 179,
          name: 'Parametric Design and Automation Training Plan',
          skill: '',
          media: '',
          link: '',
          work: '111 hrs',
          predecessors: '',
          length: '515 hrs',
          children: ['WorkFlow Mapping (Moodle)', 'Digital Teams and Workflows: A Primer for Development', 'Rhino 5 Essential Training', 'Learning Grasshopper', 'Grasshopper Essential training', 'Grasshopper Rhino Python Scripting', 'Dynamo Fundamentals (Discipline Agnostic)', 'Dynamo Essential Training', 'Dynamo: Practical', 'Become a Programmer', 'Become a Python Developer', 'Become a C# Developer', 'Structural Engineering Specific'],
          tasks: [
            {
              id: 'Parametric Design and Automation Training Plan',
              name: 'Parametric Design and Automation Training Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2020, 2, 11, 16, 0, 0)
            }]
        },
        {
          id: 180,
          name: 'WorkFlow Mapping (Moodle)',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/course/view.php?id=2171',
          work: '1.5 hrs',
          predecessors: '',
          length: '15 hrs',
          tasks: [
            {
              id: 'WorkFlow Mapping (Moodle)1',
              name: 'WorkFlow Mapping (Moodle)1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 2, 17, 0, 0),
              dependencies: [{to: 'Get Started with ArcGIS Pro (collab with Digital)'}]
            },
            {
              id: 'WorkFlow Mapping (Moodle)',
              name: 'WorkFlow Mapping (Moodle)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 2, 17, 0, 0),
              dependencies: [{to: 'Digital Teams and Workflows: A Primer for Development'}]
            }]
        },
        {
          id: 181,
          name: 'Digital Teams and Workflows: A Primer for Development',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/course/view.php?id=2234',
          work: '2 hrs',
          predecessors: '180',
          length: '20 hrs',
          tasks: [
            {
              id: 'Digital Teams and Workflows: A Primer for Development1',
              name: 'Digital Teams and Workflows: A Primer for Development1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2019, 12, 5, 12, 30, 0),
              dependencies: [{to: 'Dynamo Fundamentals (Discipline Agnostic)'}]
            },
            {
              id: 'Digital Teams and Workflows: A Primer for Development2',
              name: 'Digital Teams and Workflows: A Primer for Development2',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2019, 12, 5, 12, 30, 0),
              dependencies: [{to: 'Become a Programmer'}]
            },
            {
              id: 'Digital Teams and Workflows: A Primer for Development3',
              name: 'Digital Teams and Workflows: A Primer for Development3',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2019, 12, 5, 12, 30, 0),
              dependencies: [{to: 'Structural Engineering Digital Workflows'}]
            },
            {
              id: 'Digital Teams and Workflows: A Primer for Development',
              name: 'Digital Teams and Workflows: A Primer for Development',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2019, 12, 5, 12, 30, 0),
              dependencies: [{to: 'Rhino 5 Essential Training'}]
            }
          ]
        },
        {
          id: 182,
          name: 'Rhino 5 Essential Training',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=133324-2',
          work: '7 hrs',
          predecessors: '181',
          length: '70 hrs',
          tasks: [
            {
              id: 'Rhino 5 Essential Training',
              name: 'Rhino 5 Essential Training',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 14, 16, 0, 0),
              dependencies: [{to: 'Learning Grasshopper'}]
            }]
        },
        {
          id: 183,
          name: 'Learning Grasshopper',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=174491-2',
          work: '4 hrs',
          predecessors: '182',
          length: '40 hrs',
          tasks: [
            {
              id: 'Learning Grasshopper',
              name: 'Learning Grasshopper',
              color: '#9FC5F8',
              from: new Date(2019, 12, 15, 8, 0, 0),
              to: new Date(2019, 12, 19, 18, 0, 0),
              dependencies: [{to: 'Grasshopper Essential training'}]
            }]
        },
        {
          id: 184,
          name: 'Grasshopper Essential training',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=599608-2',
          work: '6.5 hrs',
          predecessors: '183',
          length: '65 hrs',
          tasks: [
            {
              id: 'Grasshopper Essential training',
              name: 'Grasshopper Essential training',
              color: '#9FC5F8',
              from: new Date(2019, 12, 20, 8, 0, 0),
              to: new Date(2019, 12, 29, 9, 0, 0),
              dependencies: [{to: 'Grasshopper Rhino Python Scripting'}]
            }]
        },
        {
          id: 185,
          name: 'Grasshopper Rhino Python Scripting',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=728385-2',
          work: '5 hrs',
          predecessors: '184',
          length: '50 hrs',
          tasks: [
            {
              id: 'Grasshopper Rhino Python Scripting1',
              name: 'Grasshopper Rhino Python Scripting1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 30, 8, 0, 0),
              to: new Date(2020, 1, 6, 10, 0, 0),
              dependencies: [{to: 'Karamba 3D Tutorials'}]
            },
            {
              id: 'Grasshopper Rhino Python Scripting',
              name: 'Grasshopper Rhino Python Scripting',
              color: '#9FC5F8',
              from: new Date(2019, 12, 30, 8, 0, 0),
              to: new Date(2020, 1, 6, 10, 0, 0),
              dependencies: [{to: 'Geometry Gym'}]
            }
          ]
        },
        {
          id: 186,
          name: 'Dynamo Fundamentals (Discipline Agnostic)',
          skill: 'Beginner',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/course/view.php?id=2447',
          work: '5 hrs',
          predecessors: '181',
          length: '50 hrs',
          tasks: [
            {
              id: 'Dynamo Fundamentals (Discipline Agnostic)',
              name: 'Dynamo Fundamentals (Discipline Agnostic)',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 11, 10, 0, 0),
              dependencies: [{to: 'Dynamo Essential Training'}]
            }]
        },
        {
          id: 187,
          name: 'Dynamo Essential Training',
          skill: 'Beginner',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=455724-2',
          work: '3 hrs',
          predecessors: '186',
          length: '30 hrs',
          tasks: [
            {
              id: 'Dynamo Essential Training',
              name: 'Dynamo Essential Training',
              color: '#9FC5F8',
              from: new Date(2019, 12, 12, 8, 0, 0),
              to: new Date(2019, 12, 15, 16, 0, 0),
              dependencies: [{to: 'Dynamo: Practical'}]
            }]
        },
        {
          id: 188,
          name: 'Dynamo: Practical',
          skill: 'Intermediate',
          media: 'Lynda: Course',
          link: 'https://moodle.arup.com/local/lynda/launch.php?lyndacourseid=677101-2',
          work: '3 hrs',
          predecessors: '187',
          length: '30 hrs',
          tasks: [
            {
              id: 'Dynamo: Practical',
              name: 'Dynamo: Practical',
              color: '#9FC5F8',
              from: new Date(2019, 12, 16, 8, 0, 0),
              to: new Date(2019, 12, 19, 16, 30, 0)
            }]
        },
        {
          id: 189,
          name: 'Become a Programmer',
          skill: 'Intermediate',
          media: 'Lynda: Learning Path',
          link: 'https://www.lynda.com/learning-paths/Developer/become-a-programmer',
          work: '21 hrs',
          predecessors: '181',
          length: '210 hrs',
          tasks: [
            {
              id: 'Become a Programmer1',
              name: 'Become a Programmer1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2020, 1, 8, 10, 0, 0),
              dependencies: [{to: 'Become a Python Developer'}]
            },
            {
              id: 'Become a Programmer',
              name: 'Become a Programmer',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2020, 1, 8, 10, 0, 0),
              dependencies: [{to: 'Become a C# Developer'}]
            }
          ]
        },
        {
          id: 190,
          name: 'Become a Python Developer',
          skill: 'Advanced',
          media: 'Lynda: Learning Path',
          link: 'https://www.lynda.com/learning-paths/Developer/become-a-python-developer',
          work: '27 hrs',
          predecessors: '189',
          length: '270 hrs',
          tasks: [
            {
              id: 'Become a Python Developer',
              name: 'Become a Python Developer',
              color: '#9FC5F8',
              from: new Date(2020, 1, 9, 8, 0, 0),
              to: new Date(2020, 2, 11, 16, 30, 0)
            }]
        },
        {
          id: 191,
          name: 'Become a C# Developer',
          skill: 'Advanced',
          media: 'Lynda: Learning Path',
          link: 'https://www.lynda.com/learning-paths/Developer/become-a-c-developer',
          work: '20 hrs',
          predecessors: '189',
          length: '200 hrs',
          tasks: [
            {
              id: 'Become a C# Developer',
              name: 'Become a C# Developer',
              color: '#9FC5F8',
              from: new Date(2020, 1, 9, 8, 0, 0),
              to: new Date(2020, 2, 3, 18, 0, 0),
              dependencies: [{to: 'Unity tutorials - Interactive tutorial'}]
            }]
        },
        // ## Structural Engineering Specific
        {
          id: 192,
          name: 'Structural Engineering Specific',
          skill: '',
          media: '',
          link: '',
          work: '6 hrs',
          predecessors: '',
          length: '230 hrs',
          children: ['Structural Engineering Digital Workflows', 'Karamba 3D Tutorials', 'Geometry Gym'],
          tasks: [
            {
              id: 'Structural Engineering Specific',
              name: 'Structural Engineering Specific',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2020, 1, 7, 15, 0, 0)
            }]
        },
        {
          id: 193,
          name: 'Structural Engineering Digital Workflows',
          skill: 'Intermediate',
          media: 'Arup: Moodle',
          link: 'https://moodle.arup.com/course/view.php?id=2115',
          work: '5 hrs',
          predecessors: '181',
          length: '50 hrs',
          tasks: [
            {
              id: 'Structural Engineering Digital Workflows1',
              name: 'Structural Engineering Digital Workflows1',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 12, 10, 0, 0),
              dependencies: [{to: 'Karamba 3D Tutorials'}]
            },
            {
              id: 'Structural Engineering Digital Workflows',
              name: 'Structural Engineering Digital Workflows',
              color: '#9FC5F8',
              from: new Date(2019, 12, 6, 8, 0, 0),
              to: new Date(2019, 12, 12, 10, 0, 0),
              dependencies: [{to: 'Geometry Gym'}]
            }
          ]
        },
        {
          id: 194,
          name: 'Karamba 3D Tutorials',
          skill: 'Advanced',
          media: 'Website',
          link: 'https://www.karamba3d.com/tutorials/#contact',
          work: '0.5 hrs',
          predecessors: '193,185',
          length: '5 hrs',
          tasks: [
            {
              id: 'Karamba 3D Tutorials',
              name: 'Karamba 3D Tutorials',
              color: '#9FC5F8',
              from: new Date(2020, 1, 7, 8, 0, 0),
              to: new Date(2020, 1, 7, 15, 0, 0)
            }]
        },
        {
          id: 195,
          name: 'Geometry Gym',
          skill: 'Advanced',
          media: 'Website',
          link: 'https://geometrygym.wordpress.com/',
          work: '0.5 hrs',
          predecessors: '193,185',
          length: '5 hrs',
          tasks: [
            {
              id: 'Geometry Gym',
              name: 'Geometry Gym',
              color: '#9FC5F8',
              from: new Date(2020, 1, 7, 8, 0, 0),
              to: new Date(2020, 1, 7, 15, 30, 0)
            }]
        }
        // # Spatial & Data Engineering Training Plan
        ,{
          id: 196,
          name: 'Spatial & Data Engineering Training Plan',
          skill: '',
          media: '',
          link: '',
          work: '54.1 hrs',
          predecessors: '',
          length: '541 hrs',
          children: ['What is GIS?', 'Getting Started with GIS', 'Basics of Geographic Coordinate Systems', 'Get Started with ArcGIS Pro', 'The ArcGIS Book', 'Querying Data Using ArcGIS Pro', 'Using Raster Data for Site Selection', '3D Visualization Techniques Using ArcGIS', 'Preparing for Network Analysis', 'Creating and Sharing GIS Content Using ArcGIS Online', 'Modernize Your Field Workflows Using Collector for ArcGIS', 'Telling Stories with GIS Maps', '3-Minute Demo of FME Desktop', 'Getting Started with FME Desktop 2018', 'FME Customer Stories - Arup, Singapore', 'What is FME (Arup University)', 'FME Desktop 2018 Basic Course', 'Building Models for GIS Analysis Using ArcGIS', 'Python for Everyone', 'Python Scripting for Geoprocessing Workflows', 'Creating Web Applications Using Templates and Web AppBuilder for ArcGIS', 'ArcGIS Enterprise: An Introduction', 'Web GIS: Architectural Patterns and Practices', 'Introduction to the ArcGIS for Server REST API', 'Basics of JavaScript Web Apps', 'Introduction to Web AppBuilder for ArcGIS Developer Edition', 'Web AppBuilder for ArcGIS: Advanced Development Tools and Techniques'],
          tasks: [
            {
              id: 'Spatial & Data Engineering Training Plan',
              name: 'Spatial & Data Engineering Training Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2020, 2, 24, 10, 0, 0)
            }]
        },
        {
          id: 197,
          name: 'What is GIS?',
          skill: 'Beginner',
          media: 'Website',
          link: 'https://www.esri.com/en-us/what-is-gis/overview',
          work: '0.5 hrs',
          predecessors: '',
          length: '5 hrs',
          tasks: [
            {
              id: 'What is GIS?',
              name: 'What is GIS?',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 1, 15, 0, 0),
              dependencies: [{to: 'Getting Started with GIS'}]
            }]
        },
        {
          id: 198,
          name: 'Getting Started with GIS',
          skill: 'Beginner',
          media: 'Esri: Web Course (Free)',
          link: 'https://www.esri.com/training/catalog/57630434851d31e02a43ef28/getting-started-with-gis/',
          work: '3.5 hrs',
          predecessors: '197',
          length: '35 hrs',
          tasks: [
            {
              id: 'Getting Started with GIS',
              name: 'Getting Started with GIS',
              color: '#9FC5F8',
              from: new Date(2019, 12, 2, 8, 0, 0),
              to: new Date(2019, 12, 6, 11, 0, 0),
              dependencies: [{to: 'Basics of Geographic Coordinate Systems'}]
            }]
        },
        {
          id: 199,
          name: 'Basics of Geographic Coordinate Systems',
          skill: 'Beginner',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/57630435851d31e02a43efe7/basics-of-geographic-coordinate-systems/',
          work: '1.5 hrs',
          predecessors: '198',
          length: '15 hrs',
          tasks: [
            {
              id: 'Basics of Geographic Coordinate Systems',
              name: 'Basics of Geographic Coordinate Systems',
              color: '#9FC5F8',
              from: new Date(2019, 12, 7, 8, 0, 0),
              to: new Date(2019, 12, 8, 17, 0, 0),
              dependencies: [{to: 'Get Started with ArcGIS Pro'}]
            }]
        },
        {
          id: 200,
          name: 'Get Started with ArcGIS Pro',
          skill: 'Beginner',
          media: 'Esri: Web Course (Free)',
          link: 'https://www.esri.com/training/catalog/57660c6ebb54adb30c945412/get-started-with-arcgis-pro/',
          work: '3 hrs',
          predecessors: '199',
          length: '30 hrs',
          tasks: [
            {
              id: 'Get Started with ArcGIS Pro',
              name: 'Get Started with ArcGIS Pro',
              color: '#9FC5F8',
              from: new Date(2019, 12, 9, 8, 0, 0),
              to: new Date(2019, 12, 12, 16, 0, 0),
              dependencies: [{to: 'The ArcGIS Book'}]
            }]
        },
        {
          id: 201,
          name: 'The ArcGIS Book',
          skill: 'Beginner',
          media: 'Website',
          link: 'https://learn.arcgis.com/en/arcgis-book/',
          work: '0.25 hrs',
          predecessors: '200',
          length: '2.5 hrs',
          tasks: [
            {
              id: 'The ArcGIS Book',
              name: 'The ArcGIS Book',
              color: '#9FC5F8',
              from: new Date(2019, 12, 13, 8, 0, 0),
              to: new Date(2019, 12, 13, 10, 30, 0),
              dependencies: [{to: 'Querying Data Using ArcGIS Pro'}]
            }]
        },
        {
          id: 202,
          name: 'Querying Data Using ArcGIS Pro',
          skill: 'Intermediate',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/57630433851d31e02a43eeaa/querying-data-using-arcgis-pro/',
          work: '0.5 hrs',
          predecessors: '201',
          length: '5 hrs',
          tasks: [
            {
              id: 'Querying Data Using ArcGIS Pro',
              name: 'Querying Data Using ArcGIS Pro',
              color: '#9FC5F8',
              from: new Date(2019, 12, 14, 8, 0, 0),
              to: new Date(2019, 12, 14, 15, 0, 0),
              dependencies: [{to: 'Using Raster Data for Site Selection'}]
            }]
        },
        {
          id: 203,
          name: 'Using Raster Data for Site Selection',
          skill: 'Intermediate',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/57630436851d31e02a43f0dd/using-raster-data-for-site-selection/',
          work: '2.5 hrs',
          predecessors: '202',
          length: '25 hrs',
          tasks: [
            {
              id: 'Using Raster Data for Site Selection',
              name: 'Using Raster Data for Site Selection',
              color: '#9FC5F8',
              from: new Date(2019, 12, 15, 8, 0, 0),
              to: new Date(2019, 12, 19, 9, 0, 0),
              dependencies: [{to: '3D Visualization Techniques Using ArcGIS'}]
            }]
        },
        {
          id: 204,
          name: '3D Visualization Techniques Using ArcGIS',
          skill: 'Intermediate',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/57630437851d31e02a43f1f6/3d-visualization-techniques-using-arcgis/',
          work: '4 hrs',
          predecessors: '203',
          length: '40 hrs',
          tasks: [
            {
              id: '3D Visualization Techniques Using ArcGIS',
              name: '3D Visualization Techniques Using ArcGIS',
              color: '#9FC5F8',
              from: new Date(2019, 12, 20, 8, 0, 0),
              to: new Date(2019, 12, 24, 18, 0, 0),
              dependencies: [{to: 'Preparing for Network Analysis'}]
            }]
        },
        {
          id: 205,
          name: 'Preparing for Network Analysis',
          skill: 'Intermediate',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/57630434851d31e02a43ef58/preparing-for-network-analysis/',
          work: '1 hrs',
          predecessors: '204',
          length: '10 hrs',
          tasks: [
            {
              id: 'Preparing for Network Analysis',
              name: 'Preparing for Network Analysis',
              color: '#9FC5F8',
              from: new Date(2019, 12, 25, 8, 0, 0),
              to: new Date(2019, 12, 26, 10, 0, 0),
              dependencies: [{to: 'Creating and Sharing GIS Content Using ArcGIS Online'}]
            }]
        },
        {
          id: 206,
          name: 'Creating and Sharing GIS Content Using ArcGIS Online',
          skill: 'Intermediate',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/57630434851d31e02a43ef4d/creating-and-sharing-gis-content-using-arcgis-online/',
          work: '2.5 hrs',
          predecessors: '205',
          length: '25 hrs',
          tasks: [
            {
              id: 'Creating and Sharing GIS Content Using ArcGIS Online',
              name: 'Creating and Sharing GIS Content Using ArcGIS Online',
              color: '#9FC5F8',
              from: new Date(2019, 12, 27, 8, 0, 0),
              to: new Date(2019, 12, 30, 9, 0, 0),
              dependencies: [{to: 'Modernize Your Field Workflows Using Collector for ArcGIS'}]
            }]
        },
        {
          id: 207,
          name: 'Modernize Your Field Workflows Using Collector for ArcGIS',
          skill: 'Intermediate',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/5763042f851d31e02a43ede0/modernize-your-field-workflows-using-collector-for-arcgis/',
          work: '1 hrs',
          predecessors: '206',
          length: '10 hrs',
          tasks: [
            {
              id: 'Modernize Your Field Workflows Using Collector for ArcGIS',
              name: 'Modernize Your Field Workflows Using Collector for ArcGIS',
              color: '#9FC5F8',
              from: new Date(2019, 12, 31, 8, 0, 0),
              to: new Date(2020, 1, 3, 10, 0, 0),
              dependencies: [{to: 'Telling Stories with GIS Maps'}]
            }]
        },
        {
          id: 208,
          name: 'Telling Stories with GIS Maps',
          skill: 'Intermediate',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/57630436851d31e02a43f0e3/telling-stories-with-gis-maps/',
          work: '1 hrs',
          predecessors: '207',
          length: '10 hrs',
          tasks: [
            {
              id: 'Telling Stories with GIS Maps',
              name: 'Telling Stories with GIS Maps',
              color: '#9FC5F8',
              from: new Date(2020, 1, 4, 8, 0, 0),
              to: new Date(2020, 1, 5, 10, 0, 0),
              dependencies: [{to: '3-Minute Demo of FME Desktop'}]
            }]
        },
        {
          id: 209,
          name: '3-Minute Demo of FME Desktop',
          skill: 'Intermediate',
          media: 'Youtube',
          link: 'https://www.youtube.com/watch?v=c_BHxVF_kGA',
          work: '0.1 hrs',
          predecessors: '208',
          length: '1 hrs',
          tasks: [
            {
              id: '3-Minute Demo of FME Desktop',
              name: '3-Minute Demo of FME Desktop',
              color: '#9FC5F8',
              from: new Date(2020, 1, 6, 8, 0, 0),
              to: new Date(2020, 1, 6, 9, 30, 0),
              dependencies: [{to: 'Getting Started with FME Desktop 2018'}]
            }]
        },
        {
          id: 210,
          name: 'Getting Started with FME Desktop 2018',
          skill: 'Intermediate',
          media: 'Youtube',
          link: 'https://www.youtube.com/playlist?list=PLFxZDg3GNCguPKqew9ZvqCNZCZOoiwtC5',
          work: '0.5 hrs',
          predecessors: '209',
          length: '5 hrs',
          tasks: [
            {
              id: 'Getting Started with FME Desktop 2018',
              name: 'Getting Started with FME Desktop 2018',
              color: '#9FC5F8',
              from: new Date(2020, 1, 7, 8, 0, 0),
              to: new Date(2020, 1, 7, 15, 0, 0),
              dependencies: [{to: 'FME Customer Stories - Arup, Singapore'}]
            }]
        },
        {
          id: 211,
          name: 'FME Customer Stories - Arup, Singapore',
          skill: 'Intermediate',
          media: 'Website',
          link: 'https://www.safe.com/customers/arup/',
          work: '0.25 hrs',
          predecessors: '210',
          length: '2.5 hrs',
          tasks: [
            {
              id: 'FME Customer Stories - Arup, Singapore',
              name: 'FME Customer Stories - Arup, Singapore',
              color: '#9FC5F8',
              from: new Date(2020, 1, 8, 8, 0, 0),
              to: new Date(2020, 1, 8, 10, 30, 0),
              dependencies: [{to: 'What is FME (Arup University)'}]
            }]
        },
        {
          id: 212,
          name: 'What is FME (Arup University)',
          skill: 'Intermediate',
          media: 'Youtube',
          link: 'https://moodle.arup.com/local/kalturaview/view.php?id=1_71zyticj',
          work: '1 hrs',
          predecessors: '211',
          length: '10 hrs',
          tasks: [
            {
              id: 'What is FME (Arup University)',
              name: 'What is FME (Arup University)',
              color: '#9FC5F8',
              from: new Date(2020, 1, 9, 8, 0, 0),
              to: new Date(2020, 1, 10, 10, 0, 0),
              dependencies: [{to: 'FME Desktop 2018 Basic Course'}]
            }]
        },
        {
          id: 213,
          name: 'FME Desktop 2018 Basic Course',
          skill: 'Intermediate',
          media: 'Esri: Web Course (Free)',
          link: 'https://www.safe.com/training/recorded/fme-desktop-2018-basic-course/',
          work: '10 hrs',
          predecessors: '212',
          length: '100 hrs',
          tasks: [
            {
              id: 'FME Desktop 2018 Basic Course',
              name: 'FME Desktop 2018 Basic Course',
              color: '#9FC5F8',
              from: new Date(2020, 1, 11, 8, 0, 0),
              to: new Date(2020, 1, 23, 12, 0, 0),
              dependencies: [{to: 'Building Models for GIS Analysis Using ArcGIS'}]
            }]
        },
        {
          id: 214,
          name: 'Building Models for GIS Analysis Using ArcGIS',
          skill: 'Advanced',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/57630437851d31e02a43f219/building-models-for-gis-analysis-using-arcgis/',
          work: '4 hrs',
          predecessors: '213',
          length: '40 hrs',
          tasks: [
            {
              id: 'Building Models for GIS Analysis Using ArcGIS',
              name: 'Building Models for GIS Analysis Using ArcGIS',
              color: '#9FC5F8',
              from: new Date(2020, 1, 24, 8, 0, 0),
              to: new Date(2020, 1, 28, 28, 0, 0),
              dependencies: [{to: 'Python for Everyone'}]
            }]
        },
        {
          id: 215,
          name: 'Python for Everyone',
          skill: 'Advanced',
          media: 'Esri: Web Course (Free)',
          link: 'https://www.esri.com/training/catalog/57630436851d31e02a43f13c/python-for-everyone/',
          work: '3.5 hrs',
          predecessors: '214',
          length: '35 hrs',
          tasks: [
            {
              id: 'Python for Everyone',
              name: 'Python for Everyone',
              color: '#9FC5F8',
              from: new Date(2020, 2, 1, 8, 0, 0),
              to: new Date(2020, 2, 4, 11, 0, 0),
              dependencies: [{to: 'Python Scripting for Geoprocessing Workflows'}]
            }]
        },
        {
          id: 216,
          name: 'Python Scripting for Geoprocessing Workflows',
          skill: 'Advanced',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/5763042c851d31e02a43ed84/python-scripting-for-geoprocessing-workflows/',
          work: '3.5 hrs',
          predecessors: '215',
          length: '35 hrs',
          tasks: [
            {
              id: 'Python Scripting for Geoprocessing Workflows',
              name: 'Python Scripting for Geoprocessing Workflows',
              color: '#9FC5F8',
              from: new Date(2020, 2, 5, 8, 0, 0),
              to: new Date(2020, 2, 7, 11, 0, 0),
              dependencies: [{to: 'Creating Web Applications Using Templates and Web AppBuilder for ArcGIS'}]
            }]
        },
        {
          id: 217,
          name: 'Creating Web Applications Using Templates and Web AppBuilder for ArcGIS',
          skill: 'Advanced',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/57630433851d31e02a43eee6/creating-web-applications-using-templates-and-web-appbuilder-for-arcgis/',
          work: '2 hrs',
          predecessors: '216',
          length: '20 hrs',
          tasks: [
            {
              id: 'Creating Web Applications Using Templates and Web AppBuilder for ArcGIS',
              name: 'Creating Web Applications Using Templates and Web AppBuilder for ArcGIS',
              color: '#9FC5F8',
              from: new Date(2020, 2, 8, 8, 0, 0),
              to: new Date(2020, 2, 10, 16, 0, 0),
              dependencies: [{to: 'ArcGIS Enterprise: An Introduction'}]
            }]
        },
        {
          id: 218,
          name: 'ArcGIS Enterprise: An Introduction',
          skill: 'Advanced',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/58e5902cca1300063995a0b7/arcgis-enterprise%3A-an-introduction/',
          work: '1 hrs',
          predecessors: '217',
          length: '10 hrs',
          tasks: [
            {
              id: 'ArcGIS Enterprise: An Introduction',
              name: 'ArcGIS Enterprise: An Introduction',
              color: '#9FC5F8',
              from: new Date(2020, 2, 11, 8, 0, 0),
              to: new Date(2020, 2, 12, 10, 0, 0),
              dependencies: [{to: 'Web GIS: Architectural Patterns and Practices'}]
            }]
        },
        {
          id: 219,
          name: 'Web GIS: Architectural Patterns and Practices',
          skill: 'Advanced',
          media: 'Esri: Web Course (Free)',
          link: 'https://www.esri.com/training/catalog/581273834b993f3a0d5f893e/web-gis%3A-architectural-patterns-and-practices/',
          work: '1 hrs',
          predecessors: '218',
          length: '10 hrs',
          tasks: [
            {
              id: 'Web GIS: Architectural Patterns and Practices',
              name: 'Web GIS: Architectural Patterns and Practices',
              color: '#9FC5F8',
              from: new Date(2020, 2, 13, 8, 0, 0),
              to: new Date(2020, 2, 15, 10, 0, 0),
              dependencies: [{to: 'Introduction to the ArcGIS for Server REST API'}]
            }]
        },
        {
          id: 220,
          name: 'Introduction to the ArcGIS for Server REST API',
          skill: 'Advanced',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/57630436851d31e02a43f16a/introduction-to-the-arcgis-for-server-rest-api/',
          work: '3 hrs',
          predecessors: '219',
          length: '30 hrs',
          tasks: [
            {
              id: 'Introduction to the ArcGIS for Server REST API',
              name: 'Introduction to the ArcGIS for Server REST API',
              color: '#9FC5F8',
              from: new Date(2020, 2, 16, 8, 0, 0),
              to: new Date(2020, 2, 19, 16, 0, 0),
              dependencies: [{to: 'Basics of JavaScript Web Apps'}]
            }]
        },
        {
          id: 221,
          name: 'Basics of JavaScript Web Apps',
          skill: 'Advanced',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/580fc1dea4a46d172b116049/basics-of-javascript-web-apps/',
          work: '1.5 hrs',
          predecessors: '220',
          length: '15 hrs',
          tasks: [
            {
              id: 'Basics of JavaScript Web Apps',
              name: 'Basics of JavaScript Web Apps',
              color: '#9FC5F8',
              from: new Date(2020, 2, 20, 8, 0, 0),
              to: new Date(2020, 2, 21, 17, 0, 0),
              dependencies: [{to: 'Introduction to Web AppBuilder for ArcGIS Developer Edition'}]
            }]
        },
        {
          id: 222,
          name: 'Introduction to Web AppBuilder for ArcGIS Developer Edition',
          skill: 'Advanced',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/599314386a53461c0bc8f538/introduction-to-web-appbuilder-for-arcgis-developer-edition/',
          work: '0.5 hrs',
          predecessors: '221',
          length: '5 hrs',
          tasks: [
            {
              id: 'Introduction to Web AppBuilder for ArcGIS Developer Edition',
              name: 'Introduction to Web AppBuilder for ArcGIS Developer Edition',
              color: '#9FC5F8',
              from: new Date(2020, 2, 22, 8, 0, 0),
              to: new Date(2020, 2, 22, 15, 0, 0),
              dependencies: [{to: 'Web AppBuilder for ArcGIS: Advanced Development Tools and Techniques'}]
            }]
        },
        {
          id: 223,
          name: 'Web AppBuilder for ArcGIS: Advanced Development Tools and Techniques',
          skill: 'Advanced',
          media: 'Esri: Web Course (Requires Maintenance)',
          link: 'https://www.esri.com/training/catalog/58e58ddf5eb6ed6439e8a969/web-appbuilder-for-arcgis%3A-advanced-development-tools-and-techniques/',
          work: '1 hrs',
          predecessors: '222',
          length: '10 hrs',
          tasks: [
            {
              id: 'Web AppBuilder for ArcGIS: Advanced Development Tools and Techniques',
              name: 'Web AppBuilder for ArcGIS: Advanced Development Tools and Techniques',
              color: '#9FC5F8',
              from: new Date(2020, 2, 23, 8, 0, 0),
              to: new Date(2020, 2, 24, 10, 0, 0)
            }]
        }
        // // # Visualisation Training Plan
        ,{
          id: 224,
          name: 'Visualisation Training Plan',
          skill: '',
          media: '',
          link: '',
          work: '62 hrs',
          predecessors: '',
          length: '755 hrs',
          children: ['What really is the difference between AR / MR / VR / XR?', 'What are Virtual and Augmented Realities?', 'Virtual Reality', 'Augmented Reality'],
          tasks: [
            {
              id: 'Visualisation Training Plan',
              name: 'Visualisation Training Plan',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2020, 3, 15, 16, 0, 0)
            }]
        },
        {
          id: 225,
          name: 'What really is the difference between AR / MR / VR / XR?',
          skill: 'Beginner',
          media: 'website',
          link: 'https://medium.com/@northof41/what-really-is-the-difference-between-ar-mr-vr-xr-35bed1da1a4e',
          work: '0.5 hrs',
          predecessors: '',
          length: '5 hrs',
          tasks: [
            {
              id: 'What really is the difference between AR / MR / VR / XR?',
              name: 'What really is the difference between AR / MR / VR / XR?',
              color: '#9FC5F8',
              from: new Date(2019, 12, 1, 8, 0, 0),
              to: new Date(2019, 12, 1, 15, 0, 0),
              dependencies: [{to: 'What are Virtual and Augmented Realities?'}]
            }]
        },
        {
          id: 226,
          name: 'What are Virtual and Augmented Realities?',
          skill: 'Beginner',
          media: 'youtube',
          link: 'https://www.youtube.com/watch?v=f9MwaH6oGEY',
          work: '0.5 hrs',
          predecessors: '225',
          length: '5 hrs',
          tasks: [
            {
              id: 'What are Virtual and Augmented Realities1?',
              name: 'What are Virtual and Augmented Realities1?',
              color: '#9FC5F8',
              from: new Date(2019, 12, 2, 8, 0, 0),
              to: new Date(2019, 12, 2, 15, 0, 0),
              dependencies: [{to: 'Unity tutorials - Interactive tutorial'}]
            },
            {
              id: 'What are Virtual and Augmented Realities?',
              name: 'What are Virtual and Augmented Realities?',
              color: '#9FC5F8',
              from: new Date(2019, 12, 2, 8, 0, 0),
              to: new Date(2019, 12, 2, 15, 0, 0),
              dependencies: [{to: 'Best VR headsets 2019'}]
            }
          ]
        },
        // ## Virtual Reality
        {
          id: 227,
          name: 'Virtual Reality',
          skill: '',
          media: '',
          link: '',
          work: '30 hrs',
          predecessors: '',
          length: '300 hrs',
          children: ['Best VR headsets 2019', 'HTC Vive - Setup Guide', 'Fuzor Basics', 'Fuzor Design', 'Fuzor Construction - Basics', 'Fuzor Engineering', 'Fuzor HoloLens Tutorials', 'Fuzor Construction - Advanced', 'Fuzor Collaboration and Coordination'],
          tasks: [
            {
              id: 'Virtual Reality',
              name: 'Virtual Reality',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2020, 1, 12, 12, 0, 0)
            }]
        },
        {
          id: 228,
          name: 'Best VR headsets 2019',
          skill: 'Beginner',
          media: 'website',
          link: 'https://sea.pcmag.com/consumer-electronics-reviews-ratings-comparisons/10991/the-best-vr-virtual-reality-headsets',
          work: '0.5 hrs',
          predecessors: '226',
          length: '5 hrs',
          tasks: [
            {
              id: 'Best VR headsets 2019',
              name: 'Best VR headsets 2019',
              color: '#9FC5F8',
              from: new Date(2019, 12, 3, 8, 0, 0),
              to: new Date(2019, 12, 3, 15, 0, 0),
              dependencies: [{to: 'HTC Vive - Setup Guide'}]
            }]
        },
        {
          id: 229,
          name: 'HTC Vive - Setup Guide',
          skill: 'Beginner',
          media: 'youtube',
          link: 'https://www.youtube.com/watch?v=VLNu3-7QL_w',
          work: '0.5 hrs',
          predecessors: '228',
          length: '5 hrs',
          tasks: [
            {
              id: 'HTC Vive - Setup Guide',
              name: 'HTC Vive - Setup Guide',
              color: '#9FC5F8',
              from: new Date(2019, 12, 4, 8, 0, 0),
              to: new Date(2019, 12, 4, 15, 0, 0),
              dependencies: [{to: 'Fuzor Basics'}]
            }]
        },
        {
          id: 230,
          name: 'Fuzor Basics',
          skill: 'Beginner',
          media: 'youtube',
          link: 'https://www.kalloctech.com/tutorials.jsp',
          work: '3 hrs',
          predecessors: '229',
          length: '30 hrs',
          tasks: [
            {
              id: 'Fuzor Basics',
              name: 'Fuzor Basics',
              color: '#9FC5F8',
              from: new Date(2019, 12, 5, 8, 0, 0),
              to: new Date(2019, 12, 8, 16, 0, 0),
              dependencies: [{to: 'Fuzor Design'}]
            }]
        },
        {
          id: 231,
          name: 'Fuzor Design',
          skill: 'Beginner',
          media: 'youtube',
          link: 'https://www.kalloctech.com/tutorials.jsp',
          work: '2 hrs',
          predecessors: '230',
          length: '20 hrs',
          tasks: [
            {
              id: 'Fuzor Design',
              name: 'Fuzor Design',
              color: '#9FC5F8',
              from: new Date(2019, 12, 9, 8, 0, 0),
              to: new Date(2019, 12, 11, 12, 0, 0),
              dependencies: [{to: 'Fuzor Construction - Basics'}]
            }]
        },
        {
          id: 232,
          name: 'Fuzor Construction - Basics',
          skill: 'Beginner',
          media: 'youtube',
          link: 'https://www.kalloctech.com/tutorials.jsp',
          work: '6 hrs',
          predecessors: '231',
          length: '60 hrs',
          tasks: [
            {
              id: 'Fuzor Construction - Basics',
              name: 'Fuzor Construction - Basics',
              color: '#9FC5F8',
              from: new Date(2019, 12, 12, 8, 0, 0),
              to: new Date(2019, 12, 19, 12, 0, 0),
              dependencies: [{to: 'Fuzor Engineering'}]
            }]
        },
        {
          id: 233,
          name: 'Fuzor Engineering',
          skill: 'Beginner',
          media: 'youtube',
          link: 'https://www.kalloctech.com/tutorials.jsp',
          work: '3 hrs',
          predecessors: '232',
          length: '30 hrs',
          tasks: [
            {
              id: 'Fuzor Engineering',
              name: 'Fuzor Engineering',
              color: '#9FC5F8',
              from: new Date(2019, 12, 20, 8, 0, 0),
              to: new Date(2019, 12, 23, 16, 0, 0),
              dependencies: [{to: 'Fuzor HoloLens Tutorials'}]
            }]
        },
        {
          id: 234,
          name: 'Fuzor HoloLens Tutorials',
          skill: 'Beginner',
          media: 'youtube',
          link: 'https://www.kalloctech.com/tutorials.jsp',
          work: '3 hrs',
          predecessors: '233',
          length: '30 hrs',
          tasks: [
            {
              id: 'Fuzor HoloLens Tutorials',
              name: 'Fuzor HoloLens Tutorials',
              color: '#9FC5F8',
              from: new Date(2019, 12, 24, 8, 0, 0),
              to: new Date(2019, 12, 27, 16, 0, 0),
              dependencies: [{to: 'Fuzor Construction - Advanced'}]
            }]
        },
        {
          id: 235,
          name: 'Fuzor Construction - Advanced',
          skill: 'Advanced',
          media: 'youtube',
          link: 'https://www.kalloctech.com/tutorials.jsp',
          work: '6 hrs',
          predecessors: '234',
          length: '60 hrs',
          tasks: [
            {
              id: 'Fuzor Construction - Advanced',
              name: 'Fuzor Construction - Advanced',
              color: '#9FC5F8',
              from: new Date(2019, 12, 28, 8, 0, 0),
              to: new Date(2020, 1, 4, 12, 0, 0),
              dependencies: [{to: 'Fuzor Collaboration and Coordination'}]
            }]
        },
        {
          id: 236,
          name: 'Fuzor Collaboration and Coordination',
          skill: 'Advanced',
          media: 'youtube',
          link: 'https://www.kalloctech.com/tutorials.jsp',
          work: '6 hrs',
          predecessors: '235',
          length: '60 hrs',
          tasks: [
            {
              id: 'Fuzor Collaboration and Coordination',
              name: 'Fuzor Collaboration and Coordination',
              color: '#9FC5F8',
              from: new Date(2020, 1, 5, 8, 0, 0),
              to: new Date(2020, 1, 12, 12, 0, 0)
            }]
        },
        // ## Augmented Reality
        {
          id: 237,
          name: 'Augmented Reality',
          skill: '',
          media: '',
          link: '',
          work: '31 hrs',
          predecessors: '',
          length: '310 hrs',
          children: ['Unity tutorials - Interactive tutorial', 'Unity tutorials - - Roll-a-ball tutorial', 'Unity tutorials - 2D Game Kit', 'Unity tutorials - 3D Game Kit', 'Getting Started with Vuforia Engine in Unity', 'About AR Foundation'],
          tasks: [
            {
              id: 'Augmented Reality',
              name: 'Augmented Reality',
              color: '#9FC5F8',
              from: new Date(2020, 2, 4, 8, 0, 0),
              to: new Date(2020, 3, 15, 16, 0, 0)
            }]
        },
        {
          id: 238,
          name: 'Unity tutorials - Interactive tutorial',
          skill: 'Intermediate',
          media: 'Unity',
          link: 'https://unity3d.com/learn/tutorials',
          work: '2.5 hrs',
          predecessors: '191,226',
          length: '25 hrs',
          tasks: [
            {
              id: 'Unity tutorials - Interactive tutorial',
              name: 'Unity tutorials - Interactive tutorial',
              color: '#9FC5F8',
              from: new Date(2020, 2, 4, 8, 0, 0),
              to: new Date(2020, 2, 7, 9, 0, 0),
              dependencies: [{to: 'Unity tutorials - - Roll-a-ball tutorial'}]
            }]
        },
        {
          id: 239,
          name: 'Unity tutorials - - Roll-a-ball tutorial',
          skill: 'Intermediate',
          media: 'Unity',
          link: 'https://unity3d.com/learn/tutorials',
          work: '2.5 hrs',
          predecessors: '238',
          length: '25 hrs',
          tasks: [
            {
              id: 'Unity tutorials - - Roll-a-ball tutorial',
              name: 'Unity tutorials - - Roll-a-ball tutorial',
              color: '#9FC5F8',
              from: new Date(2020, 2, 8, 8, 0, 0),
              to: new Date(2020, 2, 11, 9, 0, 0),
              dependencies: [{to: 'Unity tutorials - 2D Game Kit'}]
            }]
        },
        {
          id: 240,
          name: 'Unity tutorials - 2D Game Kit',
          skill: 'Intermediate',
          media: 'Unity',
          link: 'https://unity3d.com/learn/tutorials',
          work: '10 hrs',
          predecessors: '239',
          length: '100 hrs',
          tasks: [
            {
              id: 'Unity tutorials - 2D Game Kit',
              name: 'Unity tutorials - 2D Game Kit',
              color: '#9FC5F8',
              from: new Date(2020, 2, 12, 8, 0, 0),
              to: new Date(2020, 2, 24, 12, 0, 0),
              dependencies: [{to: 'Unity tutorials - 3D Game Kit'}]
            }]
        },
        {
          id: 241,
          name: 'Unity tutorials - 3D Game Kit',
          skill: 'Intermediate',
          media: 'Unity',
          link: 'https://unity3d.com/learn/tutorials',
          work: '10 hrs',
          predecessors: '240',
          length: '100 hrs',
          tasks: [
            {
              id: 'Unity tutorials - 3D Game Kit',
              name: 'Unity tutorials - 3D Game Kit',
              color: '#9FC5F8',
              from: new Date(2020, 2, 25, 8, 0, 0),
              to: new Date(2020, 3, 6, 12, 0, 0),
              dependencies: [{to: 'Getting Started with Vuforia Engine in Unity'}]
            }]
        },
        {
          id: 242,
          name: 'Getting Started with Vuforia Engine in Unity',
          skill: 'Advanced',
          media: 'website',
          link: 'https://library.vuforia.com/articles/Training/getting-started-with-vuforia-in-unity.html',
          work: '3 hrs',
          predecessors: '241',
          length: '30 hrs',
          tasks: [
            {
              id: 'Getting Started with Vuforia Engine in Unity',
              name: 'Getting Started with Vuforia Engine in Unity',
              color: '#9FC5F8',
              from: new Date(2020, 3, 7, 8, 0, 0),
              to: new Date(2020, 3, 10, 16, 0, 0),
              dependencies: [{to: 'About AR Foundation'}]
            }]
        },
        {
          id: 243,
          name: 'About AR Foundation',
          skill: 'Advanced',
          media: 'website',
          link: 'https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@1.0/manual/index.html',
          work: '3 hrs',
          predecessors: '242',
          length: '30 hrs',
          tasks: [
            {
              id: 'About AR Foundation',
              name: 'About AR Foundation',
              color: '#9FC5F8',
              from: new Date(2020, 3, 11, 8, 0, 0),
              to: new Date(2020, 3, 15, 16, 0, 0)
            }]
        }
      ]
    },
    getSampleTimespans: function () {
      return [
        {
          from: new Date(2013, 9, 21, 8, 0, 0),
          to: new Date(2013, 9, 25, 15, 0, 0),
          name: 'Sprint 1 Timespan'
          // priority: undefined,
          // classes: [],
          // data: undefined
        }
      ]
    }
  }
}
