const modal = document.querySelector(".modal");
const bodyStyle = document.body.style;
const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
document.querySelectorAll(".handout-preview").forEach((img) => {
  img.onclick = () => {
    bodyStyle.overflow = "hidden";
    bodyStyle.paddingRight = scrollBarWidth + "px";
    modal.classList.add("active");
    document.querySelector(".origin-image").src = img.getAttribute("src");
  };
});
document.querySelectorAll(".handout-button").forEach((button) => {
  button.onclick = () => {
    bodyStyle.overflow = "hidden";
    bodyStyle.paddingRight = scrollBarWidth + "px";
    modal.classList.add("active");
    document.querySelector(".origin-image").src =
      "img/" + button.getAttribute("data-src");
  };
});
modal.onclick = (elsa) => {
  if (elsa.target !== modal) {
    return;
  }
  bodyStyle.overflow = "auto";
  bodyStyle.paddingRight = "";
  modal.classList.remove("active");
};
