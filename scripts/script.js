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
