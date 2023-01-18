let menuOpen = document.querySelector('.menu-toggle');
let menuWrapper = document.querySelector('.menu-wrapper');

menuOpen.removeEventListener
menuOpen.addEventListener('click',function() {
    //this.classList.toggle('bxs-grid');
    menuOpen.classList.toggle('bx-x');
    menuWrapper.classList.toggle('active');
});
