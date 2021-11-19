const acardionBtns = document.getElementsByClassName("questions__item-btn");

for (let i=0; i < acardionBtns.length; i++) {
  acardionBtns[i].addEventListener("click", function (e) {
    e.target.closest(".questions__item-btn").classList.toggle("questions__item-btn--active")
    e.target.closest(".questions__item-btn").nextElementSibling.classList.toggle("active");
  })
}

var element = document.querySelector('.info__number');
var maskOptions = {
  mask: '+{998}(00)000-00-00'
};
var mask = IMask(element, maskOptions);

var element = document.querySelector('.body__form input');
var maskOptions = {
  mask: '(00)000-00-00'
};
var mask = IMask(element, maskOptions);

var element = document.querySelector(".header__menu-mobil");
