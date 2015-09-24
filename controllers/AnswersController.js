askExpert.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);

  $scope.addAnswer = function() {
    $scope.question.answers[$scope.question.answers.length] = ({ answer: $scope.answerInput, rating: 0, upvote: 0, comments: [], approved: false });
    console.log($scope.question);
    $scope.answerInput = null;
  }

  $scope.approveAnswer = function() {
    $scope.question.answer.approved = true;
    $scope.question.answer.rating = $scope.ratingInput;
    console.log($scope.question.answer.rating);
  }

  $scope.addComment = function() {
    $scope.question.answer.comments[$scope.question.answer.comments.length] = $scope.commentInput;
    $scope.commentInput = null;
  }

});
