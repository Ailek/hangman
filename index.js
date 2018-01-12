
var game = require('./game.js');
var inquirer = require('inquirer');
var word = require('./word.js');
var letter = require('./letter.js')
var choice;
exports.letter; 
exports.wordGuess;
exports.lives = 0; 
exports.chosenWord = game.chooseWord();
exports.requestInfo = function(){
	if(exports.lives >= 10){
		console.log("loser");
		exports.playAgain();
	}
	else{
		var questions = [
	{
		type: "list",
		name: "whatDo",
		message: "Your guess "+exports.lives+" out of 10. use caution when you guess.",
		choices:[
		"letter",
		"word"
		]
	}
	];

	inquirer.prompt(questions).then(function(answers){
		if(answers.whatDo == "letter"){
			var letterQ = [
			{
				type: "input",
				name: "letter",
				message: "choice made "+word.letterArr+"\nGuess: "
			}
			];

			inquirer.prompt(letterQ).then(function(answers){
				exports.letter = answers.letter;
				word.checker();
			})
		}
		else if(answers.whatDo == "word"){
			var wordQ = [
			{
				type: "input",
				name: "word",
				message: "guess the word?"
			}
			];
			inquirer.prompt(wordQ).then(function(answers){
				exports.wordGuess = answers.word;
				word.wordCheck();
			})
		}

		else{
			console.log("wrong . try again.");
			exports.requestInfo();
		}
	})
	}
	
};

exports.playAgain = function(){
	var questions = [
	{
		type: "list",
		name: "playAgain",
		message: "Would you like to play again?",
		choices:[
		"yes",
		"no"
		]
	}
	];

	inquirer.prompt(questions).then(function(answer){
		if(answer.playAgain == "yes"){
			exports.lives = 0; 
			exports.chosenWord = game.chooseWord();
			letter.guessArr = [];
			letter.wordArr = [];
			word.letterArr = [];
			letter.initDisplay();
			letter.displayWord();
			exports.requestInfo();
		}
		else{
			console.log("Good Game");
		}
	});
}
letter.initDisplay();
letter.displayWord();
exports.requestInfo();