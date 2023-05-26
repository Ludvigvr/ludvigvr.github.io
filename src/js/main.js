let current_slide = 0;
let ForwardButton;
let BackwardButton;
let Slides;

function mod(n, m) {
	return ((n % m) + m) % m;
}

let forward = (event) => {
	current_slide = mod(current_slide + 1, Slides.length);
	display();
};

let backward = (event) => {
	current_slide = mod(current_slide - 1, Slides.length);

	display();
};

let display = () => {
	for (let i = 0; i < Slides.length; i++) {
		const element = Slides[i];

		if (i == current_slide) {
			element.classList.add("show");
		} else {
			element.classList.remove("show");
		}
	}
};

onload = () => {
	ForwardButton = document.getElementById("forward");
	BackwardButton = document.getElementById("backward");

	Slides = document.getElementsByClassName("carou-img");

	ForwardButton.addEventListener("click", forward);
	BackwardButton.addEventListener("click", backward);
};
