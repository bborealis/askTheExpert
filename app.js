var askExpert = angular.module('askExpert', ['ui.router']);

askExpert.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'QuestionsCtrl'
  });

  $stateProvider.state('home.answers', {
    url: "/:questionId",
    templateUrl: "partials/home.answers.html",
    controller: "AnswersCtrl"
  });
})
