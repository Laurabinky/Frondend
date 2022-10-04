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


// // Detailpagina hartjes
// //hartje van het product
// var deButton = document.querySelector("main section:nth-of-type(1) > button");

// deButton.addEventListener("click", likeMe);

// function likeMe(){
// 	deButton.classList.toggle("liked");
// }
// var button = document.querySelectorAll("main section:nth-of-type(1) button");

// button.addEventListener("click", addToFavorites);

// function addToFavorites(){
// 	var section = button.closest("section");

// 	button.classList.toggle("liked");
// }

//hartje van productenlijstje
var deButton = document.querySelectorAll("main section:nth-of-type(8) ul li button.like");

for(let i = 0; i< deButton.length; i++){
deButton[i].addEventListener("click", likeMe);
}

//Liken hartje
function likeMe(event){
	var deHartjes = event.target;
	var deLi = deHartjes.closest("li");
	deLi.classList.toggle("liked");
	
	//nummer bij like
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



//klikgeluidje op de buttons
var audio = new Audio("audio/mouse-click.mp3");
var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

//de buttons
var sliderButtons = document.querySelector("main section:nth-of-type(8) > nav button");

for(let i = 0; i< deButton.length; i++){
sliderButtons.addEventListener("click", buttonRood);
}

function buttonRood(event){
	var deCircels = event.target;
	var deNav = deCircels.closest("nav");
	deNav.classList.toggle("slide");
}