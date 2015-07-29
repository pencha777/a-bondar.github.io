var btn = document.querySelector(".btn-search");
var search = document.querySelector(".search-form");
var dateIn = search.querySelector("[name='date-in']");

//Открытие формы поиска гостиниц
btn.addEventListener("click", function(event) {
  event.preventDefault();
  search.classList.add("search-form-show");
  dateIn.focus();
});

//Закрытие формы
window.addEventListener("keydown", function(event) {
  if(event.keyCode == 27) {
    if(search.classList.contains("search-form-show")) {
      search.classList.remove("search-form-show");
    }
  }
});
