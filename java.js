//comments

/*    var b11 = document.getElementById("a1").innerHTML;
    var b12 = document.getElementById("a2").innerHTML;
	var b13 = document.getElementById("a3").innerHTML;
	var b21 = document.getElementById("b1").innerHTML;
	var b22 = document.getElementById("b2").innerHTML;
	var b23 = document.getElementById("b3").innerHTML;
	var b31 = document.getElementById("c1").innerHTML;
	var b32 = document.getElementById("c2").innerHTML;
	var b33 = document.getElementById("c3").innerHTML;*/


/*function ai() {
}*/
//setInterval(ai, 1000);






let xTurn = true;
let putXO = "X";
let moveCount = 0;
let resetGaming = false;
let kyaHai ;
let whatIsScore;
let score;

	 
let clickSound = new Audio();
clickSound.src = "SFX/penclick.mp3";	

let noClick = new Audio();
noClick.src = "SFX/click.mp3";

let music = new Audio();
music.src = "SFX/music.mp3";
//change turn
function changeTurn() {
	  moveCount++;
	checkWin();
	   let available = [];
//pushing and poping elements	
	for (let i = 1; i <=3; i++){
			if (document.getElementById("a" + i).innerHTML == "-") {
		available.push("a" + i);
			
			if (document.getElementById("a" + i).innerHTML != "-") {
		available.pop("\""+ "a" + i + "\"");
		}
	}
		
			if (document.getElementById("b" + i).innerHTML == "-") {
		available.push("b" + i);
			
			if (document.getElementById("b" + i).innerHTML != "-") {
		available.pop("\""+ "b" + i + "\"");
		}
	}
		
			if (document.getElementById("c" + i).innerHTML == "-") {
		available.push("c" + i);
			
			if (document.getElementById("c" + i).innerHTML != "-") {
		available.pop("\""+ "c" + i + "\"");
	  	   }
	    }
     }
	
	
	//selecting Random move
	move = Math.floor(Math.random()*available.length);
/*	available[move] = "O";*/
	//asignScore();
	//decideBestMove();
	/*	if (document.getElementById("a1").innerHTML != "X"
                        &&
		 document.getElementById("a1").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("c3").innerHTML
			            && 
	     document.getElementById("a1").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("a3").innerHTML != "X"
                        &&
		 document.getElementById("a3").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("c1").innerHTML
			            && 
	     document.getElementById("a3").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("a1").innerHTML != "X"
                        &&
		 document.getElementById("a1").innerHTML == document.getElementById("a2").innerHTML
					    &&
		 document.getElementById("a2").innerHTML == document.getElementById("a3").innerHTML
			            && 
	     document.getElementById("a1").innerHTML != "-"
	 
	                    ||
	 
	    document.getElementById("b1").innerHTML != "X"
                        &&
		 document.getElementById("b1").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("b3").innerHTML
			            && 
	     document.getElementById("b1").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("c1").innerHTML != "X"
                        &&
		 document.getElementById("c1").innerHTML == document.getElementById("c2").innerHTML
					    &&
		 document.getElementById("c2").innerHTML == document.getElementById("c3").innerHTML
			            && 
	     document.getElementById("c1").innerHTML != "-"
	 
	                    ||
	 
	    document.getElementById("a1").innerHTML != "X"
                        &&
		 document.getElementById("a1").innerHTML == document.getElementById("b1").innerHTML
					    &&
		 document.getElementById("b1").innerHTML == document.getElementById("c1").innerHTML
			            && 
	     document.getElementById("a1").innerHTML != "-"
	 
	                    ||
	 
	    document.getElementById("a2").innerHTML != "X"
                        &&
		 document.getElementById("a2").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("c2").innerHTML
			            && 
	     document.getElementById("a2").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("a3").innerHTML != "X"
                        &&
		 document.getElementById("a3").innerHTML == document.getElementById("b3").innerHTML
					    &&
		 document.getElementById("b3").innerHTML == document.getElementById("c3").innerHTML
			            && 
	     document.getElementById("a3").innerHTML != "-") {
		
		console.log("dhfjes");
		score = 1;
	} 	;
*/document.getElementById("result").innerHTML = available[move] + kyaHai + whatIsScore;
document.getElementById("result2").innerHTML = score + "If the game ends, please refersh your browser or there will so many bugs in the game";
	/*putStuff = "\""+ available[move] + "\"";*/
document.getElementById(available[move]).innerHTML = "O" ;

/*document.getElementById("result2").innerHTML = putStuff;*/
	
 };
//assigning score





/*
function decideBestMove() {
	asignScore();
}

function asignScore() {
	if (kyaHai == "win") {
   whatIsScore = 1;
		
};
};
*/

//check if there is a winner
 function checkWin() {//I know thats a lot of code, but I really dont know the right way of coding right now, maybe next time.
	 clickSound.play();
 if (    document.getElementById("a1").innerHTML != "O"
                        &&
		 document.getElementById("a1").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("c3").innerHTML
			            && 
	     document.getElementById("a1").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("a3").innerHTML != "O"
                        &&
		 document.getElementById("a3").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("c1").innerHTML
			            && 
	     document.getElementById("a3").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("a1").innerHTML != "O"
                        &&
		 document.getElementById("a1").innerHTML == document.getElementById("a2").innerHTML
					    &&
		 document.getElementById("a2").innerHTML == document.getElementById("a3").innerHTML
			            && 
	     document.getElementById("a1").innerHTML != "-"
	 
	                    ||
	 
	    document.getElementById("b1").innerHTML != "O"
                        &&
		 document.getElementById("b1").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("b3").innerHTML
			            && 
	     document.getElementById("b1").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("c1").innerHTML != "O"
                        &&
		 document.getElementById("c1").innerHTML == document.getElementById("c2").innerHTML
					    &&
		 document.getElementById("c2").innerHTML == document.getElementById("c3").innerHTML
			            && 
	     document.getElementById("c1").innerHTML != "-"
	 
	                    ||
	 
	    document.getElementById("a1").innerHTML != "O"
                        &&
		 document.getElementById("a1").innerHTML == document.getElementById("b1").innerHTML
					    &&
		 document.getElementById("b1").innerHTML == document.getElementById("c1").innerHTML
			            && 
	     document.getElementById("a1").innerHTML != "-"
	 
	                    ||
	 
	    document.getElementById("a2").innerHTML != "O"
                        &&
		 document.getElementById("a2").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("c2").innerHTML
			            && 
	     document.getElementById("a2").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("a3").innerHTML != "O"
                        &&
		 document.getElementById("a3").innerHTML == document.getElementById("b3").innerHTML
					    &&
		 document.getElementById("b3").innerHTML == document.getElementById("c3").innerHTML
			            && 
	     document.getElementById("a3").innerHTML != "-") {
	       kyaHai = "win";
	 document.getElementById("turnStatus").innerHTML = "You won" ;
	if (moveCount == 5
	        ||
		moveCount == 7){
		putXO = "O";
	} else {
		putXO = "X";
	};
	 alert("X" + " Wins The Game")
	 ;
	 resetGame();
	
 } else if (document.getElementById("a1").innerHTML != "X"
                        &&
		 document.getElementById("a1").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("c3").innerHTML
			            && 
	     document.getElementById("a1").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("a3").innerHTML != "X"
                        &&
		 document.getElementById("a3").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("c1").innerHTML
			            && 
	     document.getElementById("a3").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("a1").innerHTML != "X"
                        &&
		 document.getElementById("a1").innerHTML == document.getElementById("a2").innerHTML
					    &&
		 document.getElementById("a2").innerHTML == document.getElementById("a3").innerHTML
			            && 
	     document.getElementById("a1").innerHTML != "-"
	 
	                    ||
	 
	    document.getElementById("b1").innerHTML != "X"
                        &&
		 document.getElementById("b1").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("b3").innerHTML
			            && 
	     document.getElementById("b1").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("c1").innerHTML != "X"
                        &&
		 document.getElementById("c1").innerHTML == document.getElementById("c2").innerHTML
					    &&
		 document.getElementById("c2").innerHTML == document.getElementById("c3").innerHTML
			            && 
	     document.getElementById("c1").innerHTML != "-"
	 
	                    ||
	 
	    document.getElementById("a1").innerHTML != "X"
                        &&
		 document.getElementById("a1").innerHTML == document.getElementById("b1").innerHTML
					    &&
		 document.getElementById("b1").innerHTML == document.getElementById("c1").innerHTML
			            && 
	     document.getElementById("a1").innerHTML != "-"
	 
	                    ||
	 
	    document.getElementById("a2").innerHTML != "X"
                        &&
		 document.getElementById("a2").innerHTML == document.getElementById("b2").innerHTML
					    &&
		 document.getElementById("b2").innerHTML == document.getElementById("c2").innerHTML
			            && 
	     document.getElementById("a2").innerHTML != "-"
	 
	                    ||
	 
	     document.getElementById("a3").innerHTML != "X"
                        &&
		 document.getElementById("a3").innerHTML == document.getElementById("b3").innerHTML
					    &&
		 document.getElementById("b3").innerHTML == document.getElementById("c3").innerHTML
			            && 
	     document.getElementById("a3").innerHTML != "-") {
			 document.getElementById("turnStatus").innerHTML = "You won" ;
	if (moveCount == 5
	        ||
		moveCount == 7){
		putXO = "O";
	} else {
		putXO = "X";
	};
	 alert("O" + " Wins The Game")
	 ;
	 resetGame();
	
			}
	 else {
	/* document.getElementById("result").innerHTML = "Move count: "+ moveCount + xTurn + putXO + " " + "ResetGameStatus: " + resetGaming + "s Turn" + document.getElementById("a1").innerHTML;*/
	 if (moveCount == 8){
			   document.getElementById("turnStatus").innerHTML = "It's a TIE" ;
 
	 };
   };
 };
//button functions
    function a1() {
	  if (document.getElementById("a1").innerHTML == "-") {
		document.getElementById("a1").innerHTML = putXO;  
		changeTurn();
		  //ai();
		checkWin();
		  moveCount++;
		   } else {
			   noClick.play();
		   }
	}	
	function a2() {
	  if (document.getElementById("a2").innerHTML == "-") {
		document.getElementById("a2").innerHTML = putXO;  
		changeTurn();
		checkWin();
	  moveCount++;

	  } else {
			   noClick.play();
		   }
	}	
	function a3() {
	  if (document.getElementById("a3").innerHTML == "-") {
		document.getElementById("a3").innerHTML = putXO;  
		changeTurn();
		checkWin();
		  		  moveCount++;

	  } else {
			   noClick.play();
		   }
	}
	function b1() {
	  if (document.getElementById("b1").innerHTML == "-") {
		document.getElementById("b1").innerHTML = putXO;  
		changeTurn();
		checkWin();
		  		  moveCount++;

	  } else {
			   noClick.play();
		   }
	}	
	function b2() {
	  if (document.getElementById("b2").innerHTML == "-") {
		document.getElementById("b2").innerHTML = putXO;  
		changeTurn();
		checkWin();
		  		  moveCount++;

	  } else {
			   noClick.play();
		   }
	}	
	function b3() {
	  if (document.getElementById("b3").innerHTML == "-") {
		document.getElementById("b3").innerHTML = putXO;  
		changeTurn();
		checkWin();
		  		  moveCount++;

	  } else {
			   noClick.play();
		   }
	}	
	function c1() {
	  if (document.getElementById("c1").innerHTML == "-") {
		document.getElementById("c1").innerHTML = putXO;  
		changeTurn();
		checkWin();
		  		  moveCount++;

	  } else {
			   noClick.play();
		   }
	}	
	function c2() {
	  if (document.getElementById("c2").innerHTML == "-") {
		document.getElementById("c2").innerHTML = putXO;  
		changeTurn();
		checkWin();
		  		  moveCount++;

	  } else {
			   noClick.play();
		   }
	}
    function c3() {
	  if (document.getElementById("c3").innerHTML == "-") {
		document.getElementById("c3").innerHTML = putXO;  
		changeTurn();
		checkWin();
		  		  moveCount++;

	  } else {
			   noClick.play();
		   }
	};
//resets game autmatically
function resetGame() {
	moveCount = 0;
  for (let i = 1; i <= 3; i++){
	  document.getElementById("a" + i).innerHTML = "-"
  };
	  for (let i = 1; i <= 3; i++){
	  document.getElementById("b" + i).innerHTML = "-"
  };
	  for (let i = 1; i <= 3; i++){
	  document.getElementById("c" + i).innerHTML = "-"
  };

document.getElementById("turnStatus").innerHTML = "Last Game Won By: " + putXO + ". Now It's X's Turn"

};
//reset game manually
function resetBoard() {
		moveCount = 0;
  for (let i = 1; i <= 3; i++){
	  document.getElementById("a" + i).innerHTML = "-"
  };
	  for (let i = 1; i <= 3; i++){
	  document.getElementById("b" + i).innerHTML = "-"
  };
	  for (let i = 1; i <= 3; i++){
	  document.getElementById("c" + i).innerHTML = "-"
  };

document.getElementById("turnStatus").innerHTML = "It's X's Turn";

};

/*
function changeTitleColor() {
	music.play();
	color = ['white', 'red', 'blue', 'brown', 'green', 'lightgreen', 'orangered', 'yellow', 'pink', 'purple'  ]
	randomNum = Math.floor(Math.random()*color.length);
	randomColor = color[randomNum];
       document.getElementById("ticheading").style.color = randomColor;
       document.getElementById("turnStatus").style.color = randomColor;
       document.getElementById("result").style.color = randomColor;
       document.getElementById("result2").style.color = randomColor;
       document.getElementById("resetBoard").style.color = randomColor;
       document.getElementById("a1").style.color = randomColor;
       document.getElementById("a2").style.color = randomColor;
       document.getElementById("a3").style.color = randomColor;
       document.getElementById("b1").style.color = randomColor;
       document.getElementById("b2").style.color = randomColor;
       document.getElementById("b3").style.color = randomColor;
       document.getElementById("c1").style.color = randomColor;
       document.getElementById("c2").style.color = randomColor;
       document.getElementById("c3").style.color = randomColor;
       document.getElementById("ticheading").style.boxShadow = randomColor;
}


setInterval(changeTitleColor, 50)
*/





















