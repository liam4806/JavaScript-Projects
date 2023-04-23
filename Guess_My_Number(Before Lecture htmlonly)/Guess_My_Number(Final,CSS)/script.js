'use strict';
/*Things to do:
1.Click again will reset the secretnumber. O 
2.Click check will make score lower O
3.Click should append all scores and display the Highscore of it. O
4.If the number is right, the message should change O
*/
/*
Things added 04/23/2023
Made a function for a message.
Add bumper for score to prevent it going lower than 0.
Add css change feature when we got a correct number
*/

let highscore=null
let x=0
let secretn = Math.trunc(Math.random()*20+1);
const resetfun= function() {   //reseting everything
	secretn = Math.trunc(Math.random()*20+1);
	document.querySelector('.message').textContent="Start guessing...";	
	document.querySelector('.score').textContent=20;
	document.querySelector('.number').textContent='?';
	document.querySelector('body').style.backgroundColor='';
	document.querySelector('.number').style.width = '';
	document.querySelector('.highscore').textContent=highscore;
	

}
function scoremessage(stri,scoree){   //made a function for repeating part of code
	document.querySelector('.message').textContent=stri;
	scoree-=1
	document.querySelector('.score').textContent=scoree;	
}
document.querySelector('.again').addEventListener('click',resetfun)
console.log(secretn)


document.querySelector('.check').addEventListener('click',function(){
	const guessnumber= Number(document.querySelector('.guess').value);
	let score=Number(document.querySelector('.score').textContent)
	if (score<2){ //Add a bumper for making score above 0
		document.querySelector('.message').textContent="You Lose Click 'Again'";
		document.querySelector('.score').textContent=0;
	}
	else if (!guessnumber){ //invalid input
		document.querySelector('.message').textContent="Invalid Input";
	}
	else if(guessnumber===secretn) { //when we got the correct number
		document.querySelector('.message').textContent="🎉Correct Number";
		document.querySelector('body').style.backgroundColor='#60b347';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.number').textContent=secretn;
		x=Number(document.querySelector('.score').textContent)
		if (highscore === null || highscore <x){  //Refresh Highest Score
			highscore= x
		}
	}
	else if(guessnumber<secretn){ //if guessn is higher
		scoremessage("Higher",score)  //use function for clean code
	}
	else if(guessnumber>secretn){ //if guessn is lower
		scoremessage("Lower",score)
	}

})

