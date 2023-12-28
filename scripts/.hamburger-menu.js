document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const menuList = document.getElementById('menu__list');
  
    hamburgerIcon.addEventListener('click', function () {
      menuList.classList.toggle('show');
    });
  });