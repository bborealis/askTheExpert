var askExpert = angular.module('askExpert', ['ui.router']);

askExpert.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "";
    templateUrl: "partials/home.html",
    controller: 'QuestionsCtrl'
  });
})
