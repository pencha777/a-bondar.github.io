var links = document.querySelectorAll(".navigation__link");

//каждой ссылке добавляем addEventListener
for (i = 0; i < links.length; i++) {
	links[i].addEventListener("click", function() {
		document.querySelector(".navigation__link--active").classList.remove("navigation__link--active"); //удаляем класс у активной ссылки
		this.classList.add("navigation__link--active"); //добавляем класс ссылке, на которую щелкнули
	})
};
