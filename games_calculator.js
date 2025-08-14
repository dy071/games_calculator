//Ranked Games Calculator 

//function
function operationRanked(matchesWon, lostMatches){
	let rankedMatches = matchesWon - lostMatches;
	return rankedMatches;
}

let rankedMatches = operationRanked(54, 14);

//decisions

let classification = "";

	if(rankedMatches <= 10){
		classification = "Ferro";
	}
	else if(rankedMatches >= 11 && rankedMatches <= 20){
		classification = "Bronze";
	}
	else if(rankedMatches >= 21 && rankedMatches <= 50){
		classification = "Prata";
	}
	else if(rankedMatches >= 51 && rankedMatches <= 80){
		classification = "Ouro";
	}
	else if(rankedMatches >= 81 && rankedMatches <= 90){
		classification = "Diamante";
	}
	else if(rankedMatches >= 91 && rankedMatches <= 100){
		classification = "Lendário";
	}
	else if(rankedMatches >= 101){
		classification ="Imortal";
	}

	console.log("O Herói tem saldo de " + rankedMatches + " e está no nível de " + classification);

