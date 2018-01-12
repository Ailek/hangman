 
var words = ["celine dion", "pink", "eminem"];
exports.chooseWord = function(){
	var randNum = Math.floor((Math.random()*words.length)+1);
	return words[randNum];
}

    