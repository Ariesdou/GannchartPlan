import angular from 'angular'

import moment from 'moment'

export default function ($scope, $timeout, $log, ganttUtils, GanttObjectModel, DemoService, ganttMouseOffset, ganttDebounce) {
  'ngInject'

  let objectModel
  let dataToRemove

  // angular-gantt options
  $scope.options = {
    mode: 'custom',
    scale: 'day',
    sortMode: undefined,
    sideMode: 'TreeTable',
    daily: false,
    maxHeight: false,
    width: false,
    zoom: 1,
    columns: ['id', 'link', 'skill'],
    treeTableColumns: ['id', 'link', 'skill'],
    columnsHeaders: {'id': 'ID', 'model.name': 'Course', 'link': 'Notes', 'skill': 'Level'},
    columnsClasses: {'id': 'gantt-column-id', 'model.name': 'gantt-column-name', 'link': 'gantt-column-link', 'skill': 'gantt-column-skill'},
    columnsContents: {
      'id': '{{row.model.id}}',
      'link': '<a ng-if="row.model.link" href="{{row.model.link}}" target="_blank">Link</a>',
      'skill': '{{row.model.skill}}'
    },
    treeHeaderContent: ' Course',
    autoExpand: 'none',
    taskOutOfRange: 'truncate',
    fromDate: moment(null),
    toDate: undefined,
    rowContent: '{{row.model.name}}',
    taskContent: '{{row.model.id}}',
    allowSideResizing: true,
    labelsEnabled: true,
    collapseAllParentTasks: true,
    // currentDate: 'line',
    // currentDateValue: new Date(2013, 9, 23, 11, 20, 0),
    draw: false,
    readOnly: true,
    groupDisplayMode: 'group',
    filterTask: '',
    filterRow: '',
    currentDateValue: new Date(2019, 12, 30, 8, 0, 0),
    // tooltips: 'Course ID: {{task.model.name}}</br>' +
    tooltips: 'Course: {{row.model.name}}</br>' +
      '<small>' +
      'Skill Level: {{row.model.skill}} </br>' +
      'Media Provider: {{row.model.media}} </br>' +
      'Duration: {{row.model.length}}</br>' +
      'Course Length: {{row.model.work}}</br>' +
      'Predecessors: {{row.model.predecessors}}' +
      '</small>',
    timeHeaders: ['month', 'week', 'day'],
    headersFormats: {
      'month': 'M',
      'week': 'w',
      'day': 'DDD'
    },
    timeFrames: {
      'day': {
        start: moment('8:00', 'HH:mm'),
        end: moment('18:00', 'HH:mm'),
        color: '#ACFFA3',
        working: true,
        default: true
      },
      'noon': {
        start: moment('12:00', 'HH:mm'),
        end: moment('12:00', 'HH:mm'),
        working: false,
        default: true
      },
      'closed': {
        working: false,
        default: true
      },
      'weekend': {
        working: false
      }
      // ,
      // 'holiday': {
      //   working: false,
      //   color: 'red',
      //   classes: ['gantt-timeframe-holiday']
      // }
    },
    dateFrames: {
      // 'weekend': {
      //   evaluator: function (date) {
      //     return date.isoWeekday() === 6 || date.isoWeekday() === 7
      //   },
      //   targets: ['weekend']
      // },
      '11-november': {
        evaluator: function (date) {
          return date.month() === 10 && date.date() === 11
        },
        targets: ['holiday']
      }
    },
    timeFramesWorkingMode: 'hidden',
    timeFramesNonWorkingMode: 'visible',
    columnMagnet: '15 minutes',
    timeFramesMagnet: true,
    dependencies: {
      enabled: true,
      conflictChecker: true
    },
    movable: {
      allowRowSwitching: function (task, targetRow) {
        return task.row.model.name !== 'Milestones' && targetRow.model.name !== 'Milestones'
      }
    },
    corner: {
      headersLabels: function (key) {
        return key.charAt(0).toUpperCase() + key.slice(1)
      },
      headersLabelsTemplates: '{{getLabel(header)}} <i class="fa fa-calendar"></i>'
    },
    targetDataAddRowIndex: undefined,
    api: function (api) {
      // API Object is used to control methods and events from angular-gantt.
      $scope.api = api

      api.core.on.ready($scope, function () {
        $scope.load()

        // api.data.on.change($scope, function () {
        //   $timeout(function () {
        //     $scope.api.tree.collapseAll()
        //   })
        // })

        api.tasks.on.rowChange($scope, function (task) {
          $scope.live.row = task.row.model
        })

        objectModel = new GanttObjectModel(api)
      })
    }
  }

  $scope.handleTaskIconClick = function (taskModel) {
    alert('Icon from ' + taskModel.name + ' task has been clicked.')
  }

  $scope.handleRowIconClick = function (rowModel) {
    alert('Icon from ' + rowModel.name + ' row has been clicked.')
  }

  $scope.expandAll = function () {
    $scope.api.tree.expandAll()
  }

  $scope.collapseAll = function () {
    $scope.api.tree.collapseAll()
  }

  $scope.$watch('options.sideMode', function (newValue, oldValue) {
    if (newValue !== oldValue) {
      $scope.api.side.setWidth(undefined)
      $timeout(function () {
        $scope.api.columns.refresh()
      })
    }
  })

  $scope.canAutoWidth = function (scale) {
    if (scale.match(/.*?hour.*?/) || scale.match(/.*?minute.*?/)) {
      return false
    }
    return true
  }

  $scope.getColumnWidth = function (widthEnabled, scale, zoom) {
    // if (!widthEnabled && $scope.canAutoWidth(scale)) {
    //   return undefined
    // }
    //
    // if (scale.match(/.*?week.*?/)) {
    //   return 150 * zoom
    // }
    //
    // if (scale.match(/.*?month.*?/)) {
    //   return 300 * zoom
    // }
    //
    // if (scale.match(/.*?quarter.*?/)) {
    //   return 500 * zoom
    // }
    //
    // if (scale.match(/.*?year.*?/)) {
    //   return 800 * zoom
    // }

    return 80 * zoom
  }

  // Reload data action
  $scope.load = function () {
    $scope.data = DemoService.getSampleData()
    dataToRemove = undefined

    $scope.timespans = DemoService.getSampleTimespans()
  }

  // $scope.reload = function () {
  //   $scope.load()
  // }
  //
  // // Remove data action
  // $scope.remove = function () {
  //   $scope.api.data.remove(dataToRemove)
  //   $scope.api.dependencies.refresh()
  // }
  //
  // // Clear data action
  // $scope.clear = function () {
  //   $scope.data = []
  // }
  //
  // // Visual two way binding.
  // $scope.live = {}
  //
  // let debounceValue = 1000
  //
  // let listenTaskJson = ganttDebounce(function (taskJson) {
  //   if (taskJson !== undefined) {
  //     let task = angular.fromJson(taskJson)
  //     objectModel.cleanTask(task)
  //     let model = $scope.live.task
  //     angular.merge(model, task)
  //   }
  // }, debounceValue)
  // $scope.$watch('live.taskJson', listenTaskJson)
  //
  // let listenRowJson = ganttDebounce(function (rowJson) {
  //   if (rowJson !== undefined) {
  //     let row = angular.fromJson(rowJson)
  //     objectModel.cleanRow(row)
  //     let tasks = row.tasks
  //
  //     delete row.tasks
  //     delete row.drawTask
  //
  //     let rowModel = $scope.live.row
  //
  //     angular.merge(rowModel, row)
  //
  //     let newTasks = {}
  //     let i
  //     let l
  //
  //     if (tasks !== undefined) {
  //       for (i = 0, l = tasks.length; i < l; i++) {
  //         objectModel.cleanTask(tasks[i])
  //       }
  //
  //       for (i = 0, l = tasks.length; i < l; i++) {
  //         newTasks[tasks[i].id] = tasks[i]
  //       }
  //
  //       if (rowModel.tasks === undefined) {
  //         rowModel.tasks = []
  //       }
  //       for (i = rowModel.tasks.length - 1; i >= 0; i--) {
  //         let existingTask = rowModel.tasks[i]
  //         let newTask = newTasks[existingTask.id]
  //         if (newTask === undefined) {
  //           rowModel.tasks.splice(i, 1)
  //         } else {
  //           objectModel.cleanTask(newTask)
  //           angular.merge(existingTask, newTask)
  //           delete newTasks[existingTask.id]
  //         }
  //       }
  //     } else {
  //       delete rowModel.tasks
  //     }
  //
  //     angular.forEach(newTasks, function (newTask) {
  //       rowModel.tasks.push(newTask)
  //     })
  //   }
  // }, debounceValue)
  // $scope.$watch('live.rowJson', listenRowJson)
  //
  // $scope.$watchCollection('live.task', function (task) {
  //   $timeout(function () {
  //     $scope.live.taskJson = angular.toJson(task, true)
  //     $scope.live.rowJson = angular.toJson($scope.live.row, true)
  //   })
  // })
  //
  // $scope.$watchCollection('live.row', function (row) {
  //   $timeout(function () {
  //     $scope.live.rowJson = angular.toJson(row, true)
  //     if (row !== undefined && row.tasks !== undefined && row.tasks.indexOf($scope.live.task) < 0) {
  //       $scope.live.task = row.tasks[0]
  //     }
  //   })
  //
  // })
  //
  // $scope.$watchCollection('live.row.tasks', function () {
  //   $timeout(function () {
  //     $scope.live.rowJson = angular.toJson($scope.live.row, true)
  //   })
  // })

  // $timeout(function () {
  //   $scope.api.tree.on.collapseAll()
  // }, 10)

}
