function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

// Optional — make mobile touches super responsive:
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".btn__menu");
  const closeButton = document.querySelector(".btn__menu--close");

  if (menuButton && closeButton) {
    menuButton.addEventListener("touchstart", openMenu);
    closeButton.addEventListener("touchstart", closeMenu);
  }
});
