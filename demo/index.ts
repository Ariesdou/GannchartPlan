import gantt from '../src'
import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngStrap from 'angular-strap'

import demoController from './demo.controller'
import demoService from './demo.service'

import plugins from '../src/plugins'

require('bootstrap/dist/css/bootstrap.css')
require('font-awesome/css/font-awesome.css')
require('./demo.css')

const demoModule = 'gantt.demo'
angular
  .module(demoModule, [gantt, ngStrap, ngAnimate, plugins.bounds, plugins.corner,
    plugins.dependencies, plugins.groups, plugins.labels,
    plugins.movable, plugins.progress,
    plugins.sections,
    plugins.table, plugins.tooltips, plugins.tree])
  .service('DemoService', demoService)
  .controller('DemoCtrl', demoController)
  .config(['treeConfig','$compileProvider', function (treeConfig, $compileProvider) {
    $compileProvider.debugInfoEnabled(false) // Remove debug info (angularJS >= 1.3)
    treeConfig.defaultCollapsed = true
  }])

export default demoModule
