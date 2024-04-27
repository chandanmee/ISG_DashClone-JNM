// function toggleMenu(element) {
//     var subMenu = element.nextElementSibling; // Get the next sibling which is the submenu
//     var icon = element.querySelector('.fd-bar-chart'); // Get the icon element

//     if (subMenu.classList.contains('mm-show')) {
//         subMenu.classList.remove('mm-show');
//         subMenu.setAttribute('aria-expanded', 'false');
//         icon.style.transform = 'rotate(0deg)';
//     } else {
//         subMenu.classList.add('mm-show');
//         subMenu.setAttribute('aria-expanded', 'true');
//         icon.style.transform = 'rotate(180deg)';
//     }
// }


// Get all the li elements
document.addEventListener("DOMContentLoaded", function() {
var liElements = document.querySelectorAll('#sidebar-menu li');
// Loop through each li element
liElements.forEach(function(li) {
  // Add a click event listener to each li element
  li.addEventListener('click', function() {
    // Toggle the mm-active class
    li.classList.toggle('mm-active');
// Toggle the mm-show class in the ul tag inside the li
var ulElement = li.querySelector('ul');
if(ulElement){
    ulElement.classList.toggle('mm-show')
}
  });
});
});

// dropdown-event
document.addEventListener("DOMContentLoaded", function() {
var dropDownElements = document.querySelectorAll('#dropdown-event-2');
dropDownElements.forEach(function(btn){
btn.addEventListener('click', function(){
  var dropdownMenu = this.nextElementSibling;
  dropdownMenu.classList.toggle('d-none');
});
});
});

// sidebar-event-toggle
document.addEventListener("DOMContentLoaded", function(){
var sidebarBtn = document.querySelector('#vertical-menu-btn');
sidebarBtn.addEventListener('click',function(){
var toggleSidebar = document.querySelector('.sidebar-enable');
toggleSidebar .classList.toggle('vertical-collapsed');
});
});


// Scroll Control for sidebar Icons
document.addEventListener("DOMContentLoaded", function(){
const sidebarScrollSection = document.querySelector('#sidebar-menu');
function scrollBelow() {
  sidebarScrollSection.scrollBy(0, 100);
}
function scrollAbove() {
  sidebarScrollSection.scrollBy(0, -100);
}
});

// hide sidebar-nav-icons Belove and Above icons
document.addEventListener("DOMContentLoaded", function() {
  var ulElement = document.querySelector(".metismenu");
  var liElements = ulElement.querySelectorAll(".nav-list-item");
// Select the icon element for scrolling up
var upIcon = document.querySelector(".sidebar-nav-icons[href='#'][alt='sidebar-top']");

// Select the icon element for scrolling down
var downIcon = document.querySelector(".sidebar-nav-icons[href='#'][alt='sidebar-down']");

console.log(liElements.length);

  if (liElements.length <= 12) {
      upIcon.style.display = "none";
      downIcon.style.display = "none";
  }
});


// carousel 
let slideIndex = 0;
  const slides = document.querySelectorAll('.login-content-slide');
  const indicatorsContainer = document.querySelector('.indicator-container');

  // Create indicators
  slides.forEach((slide, index) => {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => {
      goToSlide(index);
    });
    indicatorsContainer.appendChild(indicator);
  });

  const indicators = document.querySelectorAll('.indicator');

  function showSlide(n) {
    slides.forEach((slide, index) => {
      if (index === n) {
        slide.style.left = '0';
      } else {
        slide.style.left = '100%';
      }
    });
    updateIndicators(n);
  }

  function goToSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
  }

  function updateIndicators(n) {
    indicators.forEach((indicator, index) => {
      if (index === n) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  function autoSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
    setTimeout(autoSlide, 5000); // Change slide every 5 seconds
  }

  showSlide(slideIndex); // Show initial slide
  autoSlide(); // Start auto slide