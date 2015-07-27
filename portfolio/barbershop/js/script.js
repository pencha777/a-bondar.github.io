var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".overlay");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name='login']");
var password = popup.querySelector("[name='password']");
var storage = localStorage.getItem("login");
var footer = document.querySelector(".footer-contacts");
var mapOpen = document.querySelector(".open-map");
var mapOpenFooter = footer.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var ie9 = document.querySelector(".ie9");

if (ie9) {

} else {
  // Открытие формы входа
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });

  // Закрытие формы входа по X
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
  });

  // Проверка формы на наличие логина\пароля
  form.addEventListener("submit", function(event) {
    if (!(login.value && password.value)) {
      event.preventDefault();
    } else {
      localStorage.setItem("login", login.value);
    }
  });

  // Закрытие формы входа по ESC
  window.addEventListener("keydown", function(event) {
    if(event.keyCode == 27) {
      if(popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("overlay-show");
      }
    }
  });

  //Открытие карты
  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
  });

  //Открытие карты в футере
  mapOpenFooter.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
  });

  //Закрытие карты по X
  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
  });

  //Закрытие карты по ESC
  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
      if (mapPopup.classList.contains("modal-content-show")) {
        mapPopup.classList.remove("modal-content-show");
        overlay.classList.remove("overlay-show");
      }
    }
  });
};
