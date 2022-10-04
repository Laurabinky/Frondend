// JavaScript Document
console.log("hi");

// Navigatie
// menu openen
var openButton = document.querySelector("header > button");

function menuOpenen() {
	var deNav = document.querySelector("header > nav");
	
	deNav.classList.add("openen");
}

openButton.addEventListener("click", menuOpenen);

// menu sluiten 
var sluitButton = document.querySelector("header nav button");

function menuSluiten() {
	var deNav = document.querySelector("header > nav");
	
	deNav.classList.remove("openen");
}

sluitButton.addEventListener("click", menuSluiten);



//nummer bij like
//Liken hartje
//hartje van het product 1e li button
var deButton = document.querySelectorAll("main section:nth-of-type(2) ul:nth-of-type(2) li button.like");

for(let i = 0; i< deButton.length; i++){
deButton[i].addEventListener("click", likeMe);
}

function likeMe(event){
	var deHartjes = event.target;
	var deLi = deHartjes.closest("li");
	deLi.classList.toggle("liked");

	var wishlist = document.querySelector("header > ul li a span");
	var aantalNu = wishlist.innerHTML;
	aantalNu = parseInt(aantalNu);
	var nieuwAantal;

	if(deLi.classList.contains("liked")){
		nieuwAantal= aantalNu + 1;
	}
	else{
		nieuwAantal = aantalNu - 1;
	}
	if(nieuwAantal== 0){
		wishlist.classList.add("empty");
	}
	else{
		wishlist.classList.remove("empty");
	}
	wishlist.innerHTML = nieuwAantal;
}

// //geluidje button klik
//klikgeluidje op de buttons
var audio = new Audio("audio/mouse-click.mp3");
var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

//Zoeken
// var form = document.querySelector("header > ul li");
// var buttonHeader = document.querySelector("header > ul li button");
// var input = document.querySelector("header > ul li input");

// form.addEventListener('click', ()=>{
// 	form.classList.toggle("active");
// 	input.focus();
// })