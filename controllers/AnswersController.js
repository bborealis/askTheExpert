askExpert.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);

  $scope.addAnswer = function() {
    $scope.question.answer = ({ answer: $scope.answerInput, rating: 0, upvote: 0, comments: [], approved: false });
    $scope.answerInput = null;
  }

  $scope.approveAnswer = function() {
    $scope.question.answer.approved = true;
    $scope.question.answer.rating = $scope.ratingInput;
    console.log($scope.question.answer.rating);
  }
});
