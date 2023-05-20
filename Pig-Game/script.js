'use strict';
const score0= document.querySelector("#score--0");
const score1= document.querySelector("#score--1");
const curscore0=document.querySelector("#current--0");
const curscore1=document.querySelector("#current--1");
const rolld = document.querySelector(".btn--roll");
const newg = document.querySelector(".btn--new");
const hold = document.querySelector(".btn--hold");
const pl0 = document.querySelector(".player--0");
const pl1 = document.querySelector(".player--1");
let player='0';
let end=0;

function reset(){
end=0;
player= '0';
score0.textContent=0;
score1.textContent=0;
curscore0.textContent=0;
curscore1.textContent=0;
document.querySelector("#imgID").classList.add('hidden');
pl1.classList.remove('player--active');
pl0.classList.add('player--active');
pl0.classList.remove('player--winner');
pl1.classList.remove('player--winner');
}

reset();

rolld.addEventListener('click',function(){
	if(end ===0){
	let secretn = Math.trunc(Math.random()*6+1);
	let x='dice-'+String(secretn)+'.png';
	document.getElementById("imgID").src = x;
	document.getElementById("imgID").classList.remove('hidden');
	if(secretn===1){
		document.querySelector("#current--"+player).textContent=0;
		document.querySelector(".player--"+player).classList.remove('player--active');
		player==='1' ? player='0' : player='1';
		document.querySelector(".player--"+player).classList.add('player--active');
	}else{
		document.querySelector("#current--"+player).textContent=Number(document.querySelector("#current--"+String(player)).textContent)+secretn;
	}}
})

hold.addEventListener('click',function(){
	if(end===0){
		let sc=document.querySelector("#score--"+player);
		let curs=document.querySelector("#current--"+player);
		sc.textContent=Number(sc.textContent)+Number(curs.textContent);
		curs.textContent=0;
		if(Number(sc.textContent)>=100){
			document.querySelector("#imgID").classList.add('hidden');
			document.querySelector(".player--"+player).classList.add('player--winner');
			end=1;
		}else{
			document.querySelector(".player--"+player).classList.remove('player--active');
			player==='1' ? player='0' : player='1';
			document.querySelector(".player--"+player).classList.add('player--active');
		}
	}})
newg.addEventListener('click',reset)
