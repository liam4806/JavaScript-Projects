'use strict';
/*Declaring selections*/
const score1= document.querySelector("#score--0");
const score2= document.querySelector("#score--1");
const curscore1=document.querySelector("#current--0");
const curscore2=document.querySelector("#current--1");
const rolld = document.querySelector(".btn--roll");
const newg = document.querySelector(".btn--new");
const hold = document.querySelector(".btn--hold");
const pl1 = document.querySelector(".player--0");
const pl2 = document.querySelector(".player--1");
let player=1;
let end=0;
/*Flag to determine the user and if the game is end or not*/
function reset(){
end=0;
player= 1;
score1.textContent=0;
score2.textContent=0;
curscore1.textContent=0;
curscore2.textContent=0;
pl2.classList.remove('player--active');
pl1.classList.add('player--active');
pl1.classList.remove('player--winner');
pl2.classList.remove('player--winner');
}
reset();
/*Resetting everything*/

rolld.addEventListener('click',function(){
	if(end ===0){ //To disable the button if the game is end.
	let secretn = Math.trunc(Math.random()*6+1); //Creating random number between 1~6
	let x='dice-'+String(secretn)+'.png';  //making a string for a Dice.png ex) dice-3.png
	document.getElementById("imgID").src = x; //changing dice img
	if (player===1){  //If player 1
		if(secretn === 1){
			curscore1.textContent = 0;
			player= 2;
			pl1.classList.remove('player--active');
			pl2.classList.add('player--active');
			/*If the dice number is 1, it resets the current score and switch to player 2*/
		}else{
			curscore1.textContent=Number(curscore1.textContent)+secretn;
			//Else, dice number will be added to current score.
		}
	}
	else if(player===2){
		if(secretn === 1){
			curscore2.textContent = 0;
			player= 1;
			pl2.classList.remove('player--active');
			pl1.classList.add('player--active');
		}else{
			curscore2.textContent=Number(curscore2.textContent)+secretn;
		}
	}
	}

})
hold.addEventListener('click',function(){
	if(end===0){ //Check if the game is end or not.
	if (player===1){
		score1.textContent=Number(score1.textContent)+Number(curscore1.textContent); //Add current score to total score when the user press hold.
		curscore1.textContent=0;  //resets the current score
		pl1.classList.remove('player--active'); 
		pl2.classList.add('player--active');  //switching players
		if(Number(score1.textContent)>= 100){
			pl1.classList.add('player--winner');
			end=1;
		} //If the score goes higher than 100, this player will win and change end=1 to indicate that the game is end, disabling all buttons.
		player =2;
	}else if (player ===2){
		score2.textContent=Number(score2.textContent)+Number(curscore2.textContent);
		curscore2.textContent=0;
		pl2.classList.remove('player--active');
		pl1.classList.add('player--active');
		if(Number(score2.textContent)>= 100){
			pl2.classList.add('player--winner');
			end=1;
		}
		player=1;
	}
	}

	
})
newg.addEventListener('click',reset) //reseting the game
