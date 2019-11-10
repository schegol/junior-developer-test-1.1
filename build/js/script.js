var mobileSearchButton = document.querySelector('.header-search__mobile-search');
var searchInput = document.querySelector('.header-search__input');
var searchForm = document.querySelector('.header-search');

mobileSearchButton.addEventListener('click', function (e) {
  e.preventDefault();
  searchInput.classList.add('header-search__input--mobile-open');
  searchInput.focus();
  searchInput.addEventListener('blur', function (e) {
    searchInput.classList.remove('header-search__input--mobile-open');
  });
});

var mobileMenuToggle = document.getElementById('mobileMenuToggle');
var productsMenu = document.querySelector('.products-menu');
var mobileMenuClose = document.querySelector('.products-menu__heading-button');

mobileMenuToggle.addEventListener('click', function (e) {
  e.preventDefault();
  productsMenu.classList.add('products-menu--mobile-open');
});

mobileMenuClose.addEventListener('click', function (e) {
  e.preventDefault();
  productsMenu.classList.remove('products-menu--mobile-open');
});

var parentLinks = document.querySelectorAll('.products-menu__link--parent');

[].forEach.call(parentLinks, function (link) {
  var productsSubmenu = link.nextSibling;;
  var mobileCategoryClose = productsSubmenu.querySelector('.products-menu__heading-button--sub');

  link.addEventListener('click', function (e) {
    e.preventDefault();
    productsSubmenu.classList.add('products-menu__submenu-wrapper--mobile-open');
  });

  mobileCategoryClose.addEventListener('click', function (e) {
    e.preventDefault();
    productsSubmenu.classList.remove('products-menu__submenu-wrapper--mobile-open');
  });
});
