/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
function time() {
  var clock = document.getElementById("clock");

  var time = new Date();

  clock.textContent = time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour12: false
  });
}

setInterval(time,2);
//when user is scrolling the page will
//execute function fixNavbar
window.onscroll = function () {
  fixNavbar()
}
// get navbar
var navbar = document.getElementById("navbar")

//get position of the navbar
var topOfNavbar = navbar.offsetTop;

function fixNavbar() {
  if(window.pageYOffset >= topOfNavbar){
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
