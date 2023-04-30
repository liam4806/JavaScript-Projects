'use strict';
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

rolld.addEventListener('click',function(){
	if(end ===0){
	let secretn = Math.trunc(Math.random()*6+1);
	let x='dice-'+String(secretn)+'.png';
	document.getElementById("imgID").src = x;
	if (player===1){
		if(secretn === 1){
			curscore1.textContent = 0;
			player= 2;
			pl1.classList.remove('player--active');
			pl2.classList.add('player--active');
		}else{
			curscore1.textContent=Number(curscore1.textContent)+secretn;
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
	if(end===0){
	if (player===1){
		score1.textContent=Number(score1.textContent)+Number(curscore1.textContent);
		curscore1.textContent=0;
		pl1.classList.remove('player--active');
		pl2.classList.add('player--active');
		if(Number(score1.textContent)>= 100){
			pl1.classList.add('player--winner');
			end=1;
		}
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
newg.addEventListener('click',reset)