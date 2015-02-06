'use strict';

/**
 * @ngdoc overview
 * @name moviemeterApp
 * @description
 * # moviemeterApp
 *
 * Main module of the application.
 */
var app = angular.module('moviemeterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'mgcrea.ngStrap.datepicker',
    'mgcrea.ngStrap.tooltip'
  ]);
  app.config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state("default",{
          url:"/",
          views:{
            "normal":{
              templateUrl:"views/main.html",
              controller:"MainCtrl"
            }
          }
        })
        .state("default.list",{
          url:"movies?name&startyear&endyear",
          views:{
            'basic_list':{
              templateUrl:"views/list.html",
              controller:"ListCtrl"
            }
          }
        })
        .state("default.list.item",{
          url:"/:id",
          views:{
            'list_item_view':{
              templateUrl:"views/list_item.html",
              controller:'MovieCtrl'
          }
          }
        })
    }); 
