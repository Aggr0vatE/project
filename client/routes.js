angular.module("project").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('aboutus', {
      url: '/aboutus',
      templateUrl: 'client/views/about.html',
      })
      .state('contactus',{
          url: '/contactus', 
          templateUrl: 'client/views/contact.html',
      })
      .state('home', {
          url: '/home', 
          templateUrl: 'client/views/index.html',
      })
      .state('services', {
        url: '/services',
        templateUrl: 'client/views/services.html',
      })

    $urlRouterProvider.otherwise("/home");
  }]);