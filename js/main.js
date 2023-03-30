let text = document.querySelectorAll(".response__text");

text.forEach(function (e) {
	e.addEventListener("click", function (el) {
		if (this.classList.contains("hidden")) {
			this.classList.remove("hidden");
			this.classList.add("open");
		} else if (this.classList.contains("open")) {
			this.classList.remove("open");
			this.classList.add("hidden");
		};
	});
});






