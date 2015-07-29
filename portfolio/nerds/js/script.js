var link = document.querySelector(".write-us-open");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".write-us-close");
var userName = popup.querySelector("[name='user-name']");
var userMail = popup.querySelector("[name='user-email']");
var userText = popup.querySelector("[name='user-text']");
var storageUserName = localStorage.getItem("userName");
var storageUserMail = localStorage.getItem("userMail");

//Открытие формы обратной связи
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("write-us-show");
  if (storageUserName && storageUserMail) { //проверка полей на наличие данных в localStorage
    userName.value = storageUserName;
    userMail.value = storageUserMail;
    userText.focus();
  } else if (storageUserName) {
    userName.value = storageUserName;
    userMail.focus();
  } else {
    userMail.value = storageUserMail;
    userName.focus();
  }
});

//Закрытие формы
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("write-us-show");
});

// Проверка формы на заполненность полей
popup.addEventListener("submit", function(event) {
  if(!(userName.value && userMail.value && userText.value)) {
    event.preventDefault();
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userMail", userMail.value);
  }
});

//Закрытие формы по ESC
window.addEventListener("keydown", function(event) {
  if(event.keyCode == 27) {
    if(popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
    }
  }
})
