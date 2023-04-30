'use strict';
const button = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close-modal");
const overlay= document.querySelector(".overlay");

const closefun= function(){
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}

const openfun= function(){
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
}

for(let i=0; i<button.length; i++){
	button[i].addEventListener('click',openfun)
}
close.addEventListener('click',closefun)
overlay.addEventListener('click',closefun)

document.addEventListener('keydown',function(e){
	if(e["key"]==="Escape" && !modal.classList.contains("hidden")){
		closefun();
	   }
})