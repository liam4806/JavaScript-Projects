'use strict';
/*Things to do:
This code is built by myself without watching a course yet. I just look what I need to achieve and put it on action.
This version is interacted with html only. Not CSS yet.
1.Click again will reset the secretnumber. O 
2.Click check will make score lower O
3.Display the Highscore O
4.If the number is right, the message should change O
5.Add lower/higher message to help user find out the number. O
*/

let highscore=null
let x=0
let secretn = Math.trunc(Math.random()*20+1);
const resetfun= function() {
	secretn = Math.trunc(Math.random()*20+1);
	document.querySelector('.message').textContent="Start guessing...";	
	document.querySelector('.score').textContent=20;
	document.querySelector('.highscore').textContent=highscore;
	console.log(secretn)
	
	//console.log(scorelist)
}

document.querySelector('.again').addEventListener('click',resetfun)
console.log(secretn)

document.querySelector('.check').addEventListener('click',function(){
	const guessnumber= Number(document.querySelector('.guess').value);
	if (!guessnumber){
		document.querySelector('.message').textContent="Invalid Input";
	}
	else if(guessnumber===secretn) {
		document.querySelector('.message').textContent="🎉Correct Number";
		x=Number(document.querySelector('.score').textContent)
		if (highscore === null || highscore <x){
			highscore= x
		}
	}
	else if(guessnumber<secretn){
		document.querySelector('.message').textContent="Higher!";
		let score=Number(document.querySelector('.score').textContent)-1
		document.querySelector('.score').textContent=score;
	}
	else if(guessnumber>secretn){
		document.querySelector('.message').textContent="Lower!";
		let score=Number(document.querySelector('.score').textContent)-1
		document.querySelector('.score').textContent=score;
	}

})

