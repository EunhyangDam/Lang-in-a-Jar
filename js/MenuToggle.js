const navToggle = document.querySelector(".nav-toggle");
navToggle.onclick = () => {
  navToggle.classList.toggle("active");
  document.querySelector("header").classList.toggle("active");
};
