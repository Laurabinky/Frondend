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


//Liken hartje
//hartje van het product 1e li button
var deButton = document.querySelector("main section:nth-of-type(2) ul:nth-of-type(2) button");

deButton.addEventListener("click", likeMe);

function likeMe(){
	deButton.classList.toggle("liked");
}

// //hartje van het product 2e li button
// var deButton = document.querySelector("main section:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(2) button");

// deButton.addEventListener("click", likeMe);

// function likeMe(){
// 	deButton.classList.toggle("liked");
// }

// //hartje van het product 3e li button
// var deButton = document.querySelector("main section:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(3) button");

// deButton.addEventListener("click", likeMe);

// function likeMe(){
// 	deButton.classList.toggle("liked");
// }