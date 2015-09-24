askExpert.factory('QuestionsFactory', function QuestionsFactory() {
  var factory ={};
  factory.questions = [];

  factory.addQuestion = function() {
    factory.questions.push({ text: factory.questionText, id: factory.questions.length + 1, answers: [], answered: false });
    factory.questionText = null;
  };

  factory.checkUnanswered = function() {
    for(var i = 0; i < factory.questions.length; i++) {
      if(factory.questions[i].answers.length == 0) {
        return true;
      }
    }
    return false;
  };

  factory.checkAnswered = function() {
    for(var i = 0; i < factory.questions.length; i++) {
      if(factory.questions[i].answers.length > 0) {
        return true;
      }
    }
    return false;
  };

  factory.checkApprovedAnswer = function() {
    for(var i = 0; i < factory.questions.length; i++) {
      if(factory.questions[i].answers.length) {
        for(var j = 0; j < factory.questions[i].answers.length; j++) {
          if(factory.questions[i].answers[j].approved == true) {
          return true;
          }
        }
      }
    }
    return false;
  };
  return factory;
});
