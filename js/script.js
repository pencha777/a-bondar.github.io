// вешаем на каждую ссылку обработчик

	$(".navigation__link").click(function(){

	  // удаляем у старого элемента, класс   activeClass

	  $(".navigation__link--active").removeClass("navigation__link--active");



	  // добавляем к ссылки по которой щёлкнули класс activeClass

	  $(this).addClass("navigation__link--active");

	});
