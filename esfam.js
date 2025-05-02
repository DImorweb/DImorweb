"use strict";

const body = document.body;

const bgImages = [
  "url('images/image1.jpg')",
  "url('images/image2.jpg')",
  "url('images/image3.jpg')",
  "url('images/image4.jpg')",
];
const ctaSection = document.querySelector("#cta-section");
ctaSection.style.backgroundImage = bgImages[2];
ctaSection.style.backgroundSize = "cover";
ctaSection.style.backgroundPosition = "center";
ctaSection.style.backgroundRepeat = "no-repeat";
ctaSection.style.transition = "background-image 2s ease-in-out";

let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % bgImages.length;
  ctaSection.style.backgroundImage = bgImages[currentIndex];
}, 10000);

const scrollButton = document.createElement("button");
scrollButton.textContent = "↑";
scrollButton.style.position = "fixed";
scrollButton.style.bottom = "20px";
scrollButton.style.right = "20px";
scrollButton.style.padding = "10px 15px";
scrollButton.style.fontSize = "16px";
scrollButton.style.backgroundColor = "#357d52";
scrollButton.style.color = "#fff";
scrollButton.style.border = "none";
scrollButton.style.borderRadius = "5px";
scrollButton.style.cursor = "pointer";
scrollButton.style.display = "none";
scrollButton.style.zIndex = "1000";

body.appendChild(scrollButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
