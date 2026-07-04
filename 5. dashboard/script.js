//
//

const darkModeBtn = document.getElementById("dark-mode-toggle");
const navToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

navToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

darkModeBtn.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkModeBtn.checked);
});
