//
//
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const siteHeader = document.querySelector(".site-header");

// ---------------------------------
// Toggle Mobile Menu
const toggleActive = (e) => {
  primaryNav.classList.toggle("active");
};

navToggle.addEventListener("click", toggleActive);

// ---------------------------------
// change header bg on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    siteHeader.classList.add("on-scroll");
  } else {
    siteHeader.classList.remove("on-scroll");
  }
});
