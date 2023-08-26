const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dots = document.querySelector (".dots")
let selected = 0
const text = document.querySelector (".text")

const leftArrow = document.querySelector (".arrow_left")
leftArrow.addEventListener ("click", () => {
	console.log ("j'ai cliqué a gauche")
	selected --
	if (selected<0) {
		selected=3
	}
	document.querySelector (".dot_selected").classList.remove ("dot_selected")
	document.querySelector (".d"+selected).classList.add ("dot_selected")
	document.querySelector (".dot_selected").classList.remove ("dot_selected")
	document.querySelector (".d"+selected).classList.add ("dot_selected")
	document.querySelector (".banner-img").src= ("./assets/images/slideshow/"+slides[selected].image)
	text.innerHTML = slides[selected].tagLine
})

const rightArrow = document.querySelector (".arrow_right")
rightArrow.addEventListener ("click", () => {
	console.log ("j'ai cliqué a droite")
	selected ++
	if (selected>3) {
		selected=0
	}
	document.querySelector (".dot_selected").classList.remove ("dot_selected")
	document.querySelector (".d"+selected).classList.add ("dot_selected")
	document.querySelector (".banner-img").src= ("./assets/images/slideshow/"+slides[selected].image)
	text.innerHTML = slides[selected].tagLine
})

for (let i=0; i<slides.length; i++) {
	let nouvelleDiv = document.createElement ("div")
	dots.appendChild (nouvelleDiv)
	nouvelleDiv.classList.add ("dot")
	nouvelleDiv.classList.add ("d"+i)
	if (i==0) {
		nouvelleDiv.classList.add ("dot_selected")
	}
}
