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


// Detailpagina hartjes
//hartje van het product
var deButton = document.querySelector("main section:nth-of-type(1) > button");

deButton.addEventListener("click", likeMe);

function likeMe() {
	deButton.classList.toggle("liked");
}

// hartje van extra producten
var deButton = document.querySelector("main section:nth-of-type(8) ul li button");

deButton.addEventListener("click", likeMe);

function likeMe() {
	deButton.classList.toggle("liked");
}