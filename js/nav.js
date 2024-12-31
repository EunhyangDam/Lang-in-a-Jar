// 섹션별 메뉴 추가
document.querySelectorAll("section.chapter").forEach((chapter) => {
  const chapterID = chapter.getAttribute("id");
  const newA = document.createElement("a");
  newA.href = "#" + chapterID;

  const chapterName = chapter.getAttribute("data-chap-name");
  const newSpanText = document.createElement("span");
  newSpanText.classList.add("nav-text");
  newSpanText.textContent = chapterName;

  const newSpanCircle = document.createElement("span");
  newSpanCircle.classList.add("circle");
  newA.appendChild(newSpanText);
  newA.appendChild(newSpanCircle);
  document.querySelector("nav").appendChild(newA);
});

// 반응형 메뉴 변경
const navToggle = document.querySelector(".nav-toggle");
navToggle.onclick = () => {
  navToggle.classList.toggle("active");
  document.querySelector("header").classList.toggle("active");
};

// 스크롤 스파이
let section = document.querySelectorAll("section.chapter");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
