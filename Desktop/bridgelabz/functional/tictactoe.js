var readline = require('readline-sync');

var win = 0, trails = 0;
var str = [];
var ct = [];

function initializeNullToSpace() {
	for (var i = 0; i < 9; i++) {
		str[i] = i + 1;
	}
}

function printGame() {

	console.log(str[0] + " | " + str[1] + " | " + str[2]);
	console.log("___________");
	console.log(str[3] + " | " + str[4] + " | " + str[5]);
	console.log("___________");
	console.log(str[6] + " | " + str[7] + " | " + str[8]);
	console.log();

}

function checkComputerWin() {
	if ((ct[0] == 1 && ct[1] == 1 && ct[2] == 1) || (ct[0] == 1 && ct[3] == 1 && ct[6] == 1) ||
		(ct[6] == 1 && ct[7] == 1 && ct[8] == 1) || (ct[8] == 1 && ct[5] == 1 && ct[2] == 1))
		win++;
	else if ((ct[0] == 1 && ct[4] == 1 && ct[8] == 1) || (ct[2] == 1 && ct[4] == 1 && ct[6] == 1) ||
		(ct[1] == 1 && ct[4] == 1 && ct[7] == 1) || (ct[3] == 1 && ct[4] == 1 && ct[5] == 1))
		win++;

}

function checkYouWin() {
	if ((ct[0] == 2 && ct[1] == 2 && ct[2] == 2) || (ct[0] == 2 && ct[3] == 2 && ct[6] == 2) ||
		(ct[6] == 2 && ct[7] == 2 && ct[8] == 2) || (ct[8] == 0 && ct[5] == 2 && ct[2] == 2))
		win++;
	else if ((ct[0] == 2 && ct[4] == 2 && ct[8] == 2) || (ct[2] == 2 && ct[4] == 2 && ct[6] == 2) ||
		(ct[1] == 2 && ct[4] == 2 && ct[7] == 2) || (ct[3] == 2 && ct[4] == 2 && ct[5] == 2))
		win++;

}

function main() {
	printGame();
	initializeNullToSpace();
	printGame();

	while (true) {
		console.log("all")
		while (true) {
			var c = Math.floor(Math.random()*9);
			c=parseInt(c);
			if (str[c] !="X"&&str[c] !=  "O") {
				trails++;
				console.log("computer entered the X at the position " + (c + 1));
				str[c] = "X";
				ct[c] = 1;
				break;
			}
			console.log("all 11")
		}
		printGame();
		checkComputerWin();

		if (win == 1) {
			console.log("You lost computer won!!!!!!");
			break;
		}
		if (trails == 9) {
			console.log("match drawn");
			break;
		}

		console.log("enter the O at the position where the at position not occupied");

		while (true) {
			console.log("hi");
			var n = readline.question("enter ");
			n = parseInt(n) - 1;
			if (str[n] !==("X" || "O")) {
				trails++;
				str[n] = "O";
				ct[n] = 2;
				break;
			}
			else {
				console.log("This place is already filled");
			}

			console.log("all 12")
		}
		printGame();
		checkYouWin();
		if (win == 1) {
			console.log("you won");
			break;
		}
	}


}

main();
