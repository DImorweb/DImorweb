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
  navMenu.style.blockSize = "200px";
  menuBtn.style.transform = "rotate(90deg)"; // Rotate the menu button
}

function closeMenu() {
  // Close the navigation menu
  navMenu.style.blockSize = "0px";
  menuBtn.style.transform = "rotate(0deg)"; // Fix the menu button
}

// Add event listeners to the menu button and the navigation menu
menuBtn.addEventListener("click", function () {
  if (navMenu.style.blockSize === "200px") {
    closeMenu();
  } else {
    openMenu();
  }
});

// CTA SECTION IMAGE CHANGING EFFECT AND STYLING
const ctaSection = document.querySelector("#cta-section");

ctaSection.style.backgroundposition = "center"; // Center the background image
ctaSection.style.backgroundSize = "cover"; // Cover the entire section
ctaSection.style.transition = "background-image 0.25s ease-in-out"; // Smooth transition for background image change
ctaSection.style.backgroundRepeat = "no-repeat"; // Prevent background image from repeating

const welcomeImages = [
  "mobile-images/image1.webp",
  "mobile-images/image2.webp",
  "mobile-images/image3.webp",
  "mobile-images/image4.webp",
];

ctaSection.style.backgroundImage = `url(${welcomeImages[0]})`; // Set the initial background image

let currentImageIndex = 0; // Initialize the current image index

setInterval(() => {
  let nextImageIndex = (currentImageIndex + 1) % welcomeImages.length; // Calculate the next image index
  ctaSection.style.backgroundImage = `url(${welcomeImages[nextImageIndex]})`; // Change the background image
  currentImageIndex = nextImageIndex; // Update the current image index
}, 10000);
