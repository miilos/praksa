// hamburger menu
const menuBtn = document.querySelector(".burger__container");
const menu = document.querySelector(".phone-menu");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

function toggleVisible() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
    menuBtn.style.position = "relative";
  } else {
    menu.classList.add("show-menu");
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
    menuBtn.style.position = "fixed";
  }
}

menuBtn.addEventListener("click", toggleVisible);
