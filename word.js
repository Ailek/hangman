var main = require("./main.js");
var letter = require("./letter.js");
exports.letterArr = [];
exports.checker = function(){
	var wordToCheck = main.chosenWord;
	exports.letterArr.push(main.letter);
	var detected = 0; 
	for(var i = 0; i < wordToCheck.length; i++){
		if(wordToCheck.charAt(i) == main.letter){
			letter.editArray(i, main.letter);
			detected++;
		}
	}
	letter.displayWord();
	if(detected == 0){
		main.lives++; 
	}
	main.requestInfo();

}; 

exports.wordCheck = function(){
	var guess = main.wordGuess;
	var word = main.chosenWord;
	var isNotEqual; 
	for(var k = 0; k<word.length; k++){
		if(guess[k] != word[k]){
			isNotEqual = false; 
		}
		else{
			isNotEqual = true; 
		}
	}

	if(isNotEqual == true){
		console.log("Correct!");
		main.playAgain();
	}
	else{
		console.log("Wrong");
		main.lives++;
		main.requestInfo();
	}
};