document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".menu-toggle");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const menu = document.getElementById(button.getAttribute("aria-controls"));
      const open = menu.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    });
  });
});
