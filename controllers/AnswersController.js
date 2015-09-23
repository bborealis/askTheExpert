askExpert.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);

  $scope.addAnswer = function() {
    $scope.question.answer = ({ answer: $scope.answerInput, rating: 0, upvote: 0, comments: [] });
    console.log($scope.question.answer);
    $scope.answerInput = null;
  }
});
