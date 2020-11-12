const menuBTN = document.querySelector('.m-menu');
console.log(menuBTN);
const menu = document.querySelector('.menu-sidebar');
console.log(menu);

menuBTN.addEventListener('click', function () {
  menu.classList.toggle('active');
});
