var toggleBtn = document.querySelector(".navbarToggleBtn");
var menu = document.querySelector(".navbarMenu");
var icons = document.querySelector(".navbarIcons");

toggleBtn.addEventListener('click',()=>
{
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});