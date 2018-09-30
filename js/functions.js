//- Variables

let burger = document.querySelector('.nav-mobile-burger');

let close = document.querySelector ('.nav-mobile-close');

let navMobile = document.querySelector ('.nav-mobile');

let buns = document.querySelectorAll ('.bun');

//- Burger-Menu

close.addEventListener('click', (event) => {
    navMobile.classList.remove('visible');

});

burger.addEventListener('click', (event) => {
  navMobile.classList.toggle('visible');
  //buns.classList.toggle('animation');
  buns.forEach((element) => {
    element.classList.toggle('animation');

});

});