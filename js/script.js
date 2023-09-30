// Toggle class active untuk tanda titik 3 menu
const navbarNav = document.querySelector
    ('.navbar-nav');

//ketika tanda menu di klik
document.querySelector('#tanda-menu').onclick = () => {
    navbarNav.classList.toggle('active');

};

//klik diluar side bar untuk menghilangkan nav
const tanda = document.querySelector
    ('#tanda-menu');

document.addEventListener('click', function (e) {
    if (!tanda.contains(e.target) && !navbarNav.contains(e.target))
        navbarNav.classList.remove('active')

});