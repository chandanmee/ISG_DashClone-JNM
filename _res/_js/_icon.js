function loadSVG(iconPath, targetElement) {
    fetch(iconPath)
        .then(response => response.text())
        .then(svgData => {
            // Inject SVG data into target element
            targetElement.innerHTML = svgData;
        });
}
  
  // Load the 'dashboard-light.svg' icon into elements with class 'ico-menuIcon'
//dashboard-light.svg
  document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-dashboard-light');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/dashboard-light.svg`, icon));
});


//bar-chart-light.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-barchart-light');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/bar-chart-light.svg`, icon));
});

//bar-chart.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-barchart');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/bar-chart.svg`, icon));
});
//calender-light.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-calender');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/calender-light.svg`, icon));
});


//chat.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-chat');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/chat-light.svg`, icon));
});

//kanban.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-view-kanban');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/view-kanban-light.svg`, icon));
});


//down.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-down-arrow');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/down.svg`, icon));
});

//up.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-up-arrow');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/up.svg`, icon));
});


//user.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-user');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/user.svg`, icon));
});

//user_light.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-user-light');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/user_light.svg`, icon));
});


//user_fill.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-user-fill');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/user_fill.svg`, icon));
});

//user_fill_light.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-user-fill-light');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/user_fill_light.svg`, icon));
});




//lock.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-lock-fill');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/lock-fill.svg`, icon));
});

//lock_light.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-lock-fill-light');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/lock_fill_light.svg`, icon));
});

//key.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-key-fill');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/key_fill.svg`, icon));
});

//key_light.svg
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.ico-key-fill-light');
    menuIcons.forEach(icon => loadSVG(`../_res/_icons/key_fill_light.svg`, icon));
});





