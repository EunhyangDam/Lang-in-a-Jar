let sections = document.querySelectorAll(".chapter");
let naviLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      naviLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector('header nav a[href*="' + id + '"]')
        .classList.add("active");
    }
  });
};
