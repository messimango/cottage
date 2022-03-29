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


const recCon = document.querySelector(".rec-content");
const recButtons = document.querySelectorAll(".rec-button");
const recItems = document.querySelectorAll(".recItem");


recCon.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    recButtons.forEach(function (button) {
      button.classList.remove("btnactive");
    });
    e.target.classList.add("btnactive");

    recItems.forEach(function (item) {
      item.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});