"use strict";
// This is the main JavaScript file for the ESFAM project.

// Declaring the navigation menu and the menu button
const navMenu = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-button");

menuBtn.style.transition = "all 0.25s ease-in-out";

// Set the initial state of the navigation menu
navMenu.style.blockSize = "0px"; // Initially hide the navigation menu
navMenu.style.overflow = "hidden"; // Hide overflow to prevent content from showing when closed
navMenu.style.transition = "block-size 0.25s ease-in-out"; // Add transition for smooth opening/closing

function openMenu() {
  // Open the navigation menu
  navMenu.style.blockSize = "150px";
  menuBtn.style.transform = "rotate(90deg)"; // Rotate the menu button
}

function closeMenu() {
  // Close the navigation menu
  navMenu.style.blockSize = "0px";
  menuBtn.style.transform = "rotate(0deg)"; // Fix the menu button
}

// Add event listeners to the menu button and the navigation menu
menuBtn.addEventListener("click", function () {
  if (navMenu.style.blockSize === "150px") {
    closeMenu();
  } else {
    openMenu();
  }
});
