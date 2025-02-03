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



const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot")
const prevBtn = document.querySelector(".arrow_left");
const nextBtn = document.querySelector(".arrow_right");


let = currentIndex = 0;


function showSlide (index) {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerText.innerHTML = slides[index].tagLine;

	dots.forEach((dot, i) => {
		dot.classList.toggle('dot_selected' , i===index);
	});
}


prevBtn.addEventListener("click", () => {
	currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length -1;
	showSlide(currentIndex);
});


nextBtn.addEventListener("click", () => {
	currentIndex = (currentIndex < slides.length -1) ? currentIndex + 1 : 0;
	showSlide(currentIndex);
});


dots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		currentIndex = index;
        showSlide(currentIndex);
	})
})

