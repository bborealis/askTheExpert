askExpert.factory('QuestionsFactory', function QuestionsFactory() {
  var factory ={};
  factory.questions = [];
  factory.addQuestion = function() {
    factory.questions.push({ text: factory.questionText, id: factory.questions.length + 1, answer: "" });
    factory.questionText = null;
  };
  factory.checkUnanswered = function() {
    for(var i = 0; i < factory.questions.length; i++) {
      if(factory.questions[i].answer == "") {
        return true;
      }
      return false;
    }
  };
    return factory;
});
