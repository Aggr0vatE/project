angular.module("project").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('aboutus', {
          url: '/aboutus',
          templateUrl: 'client/views/about.ng.html',
          controller: 'aboutCtrl'
      })
      .state('contactus',{
          url: '/contactus', 
          templateUrl: 'client/views/contact.ng.html',
          controller: 'contactCtrl'
      })
      .state('home', {
          url: '/home', 
          templateUrl: 'client/views/home.ng.html',
          controller: 'homeCtrl'
      })
      .state('services', {
          url: '/services',
          templateUrl: 'client/views/services.ng.html',
          controller: 'servicesCtrl'
      })

    $urlRouterProvider.otherwise("/home");
  }]);