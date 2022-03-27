// toggle nav

const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".menu-items");


menuToggle.addEventListener("click", function () {
    menuItems.classList.toggle("show-links");
});


// check in date

const startDate = document.getElementById('start')

startDate.min = new Date().toLocaleDateString('en-ca');


// stick navbar

var navbar = document.querySelector(".nav-bar");

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 70) {
        navbar.classList.add('hover')
    } else {
        navbar.classList.remove('hover')
    }
    
})