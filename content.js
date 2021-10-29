const acardionBtns = document.getElementsByClassName("questions__item-btn");

for (let i=0; i < acardionBtns.length; i++) {
  acardionBtns[i].addEventListener("click", function (e) {
    e.target.closest(".questions__item-btn").classList.toggle("questions__item-btn--active")
    e.target.closest(".questions__item-btn").nextElementSibling.classList.toggle("active");
  })
}