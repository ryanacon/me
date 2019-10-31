// pure javascript
// sticky nav
// When the user scrolls the page, execute myFunction
window.onscroll = function () { 
    
    myFunction() 
};

// Get the navbar
let navbar = document.getElementById("navbar");
let technology = document.getElementById("technology");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    var divOffset = offset(technology);
    console.log(divOffset.left)
    console.log(window.pageXOffset)
    offset(technology)
    if (window.pageYOffset > 0) {
        navbar.classList.add("sticky");
        navbar.classList.add("nav-color");
    }
   
    else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("nav-color");
    }
}

//   get position of element
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}