askExpert.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
  
  $scope.addAnswer = function() {
    $scope.question.answers.push({ answer: $scope.answerInput, rating: 0, upvote: 0, comments: [] });
    $scope.answerInput = null;
  }
});
