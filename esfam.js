"use strict";

const body = document.body;

// setTimeout(() => {
//   alert("Welcome to the ESFAM website! We hope you enjoy your stay. If you have any questions, feel free to reach out to us.");
// }, 10000);

const theme = document.querySelector("#theme");
// localStorage.setItem("theme", "light");
// document.body.style.backgroundColor = "#ffffff";
// document.body.style.color = "#000000";
document.body.style.transition = "background-color 0.25s, color 0.25s";
document.querySelector("header").style.transition =
  "background-color 0.25s, color 0.25s";

const themeMenu = document.querySelector("#theme-menu");
themeMenu.style.blockSize = "50px";

const themeLight = document.querySelector("#theme-light");
const themeDark = document.querySelector("#theme-dark");

// Check if the user has a preferred theme in localStorage

if (localStorage.getItem("theme") === "dark") {
  darkTheme();
} else if (localStorage.getItem("theme") === "light") {
  lightTheme();
}

// if (localStorage.getItem("theme") === "dark") {
//   localStorage.setItem("theme", "dark");
//   document.body.style.backgroundColor = "#000000";
//   document.body.style.color = "#ffffff";
//   document.querySelector("header").style.backgroundColor = "whitesmoke";
// } else if (localStorage.getItem("theme") === "light") {
//   localStorage.setItem("theme", "light");
//   document.body.style.backgroundColor = "#ffffff";
//   document.body.style.color = "#000000";
//   document.querySelector("header").style.backgroundColor = "#ffffff";
// }

// Change the theme of the website based on the user's preference
theme.addEventListener("click", () => {
  if (themeMenu.style.blockSize === "50px") {
    themeMenu.style.blockSize = "140px";
  } else {
    themeMenu.style.blockSize = "50px";
  }
});

function lightTheme() {
  localStorage.setItem("theme", "light");
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "#000000";
  document.querySelector("header").style.backgroundColor = "#ffffff";
}

function darkTheme() {
  localStorage.setItem("theme", "dark");
  document.body.style.backgroundColor = "#000000";
  document.body.style.color = "#ffffff";
  document.querySelector("header").style.backgroundColor = "whitesmoke";
}

themeLight.addEventListener("click", () => {
  lightTheme();
  themeMenu.style.blockSize = "50px";
});

themeDark.addEventListener("click", () => {
  darkTheme();
  themeMenu.style.blockSize = "50px";
});

// window.matchMedia("(prefers-color-scheme: dark)");
