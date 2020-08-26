let modal = document.querySelector(".modal");
let previews = document.querySelectorAll(".galerry img");
let original = document.querySelector(".full-img");
let caption = document.querySelector(".caption");

previews.forEach((preview) => {
	preview.addEventListener('click', () => {
		modal.classList.add("open");
		original.classList.add("open");

		let originalSrc = preview.getAttribute("data-original");
		original.src = `./${originalSrc}`;
		let altText = preview.alt;
		caption.textContent = altText;
	});
}); 

modal.addEventListener("click", (e) => {
	if (e.target.classList.contains("modal")) {
		modal.classList.remove("open");
		original.classList.remove("open");
	};
});