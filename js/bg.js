const bgimg = document.querySelector(".session_card");
const bgImgSrc = bgimg.getAttribute("src");
document.body.style.backgroundImage = "url(../" + bgImgSrc + ")";
