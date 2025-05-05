"use strict";
// This is the main JavaScript file for the ESFAM project.
const body = document.body;

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
ctaSection.style.transition = "background-image 0.5s ease-in-out"; // Smooth transition for background image change
ctaSection.style.backgroundRepeat = "no-repeat"; // Prevent background image from repeating

const welcomeImages = [
  "mobile-images/image1.webp",
  "mobile-images/image2.webp",
  "mobile-images/image3.webp",
  "mobile-images/image4.webp",
];

const imagelocator = [
  document.querySelector(".image1"),
  document.querySelector(".image2"),
  document.querySelector(".image3"),
  document.querySelector(".image4"),
]; // Array of image locators

ctaSection.style.backgroundImage = `url(${welcomeImages[0]})`; // Set the initial background image

let currentImageIndex = 0; // Initialize the current image index

setInterval(() => {
  let nextImageIndex = (currentImageIndex + 1) % welcomeImages.length; // Calculate the next image index
  ctaSection.style.backgroundImage = `url(${welcomeImages[nextImageIndex]})`; // Change the background image
  currentImageIndex = nextImageIndex; // Update the current image index

  switch (currentImageIndex) {
    case 0:
      imagelocator[0].style.backgroundColor = "#357d52";
      imagelocator[1].style.backgroundColor = "#c8c8c8";
      imagelocator[2].style.backgroundColor = "#c8c8c8";
      imagelocator[3].style.backgroundColor = "#c8c8c8";
      break;
    case 1:
      imagelocator[0].style.backgroundColor = "#c8c8c8";
      imagelocator[1].style.backgroundColor = "#357d52";
      imagelocator[2].style.backgroundColor = "#c8c8c8";
      imagelocator[3].style.backgroundColor = "#c8c8c8";
      break;
    case 2:
      imagelocator[0].style.backgroundColor = "#c8c8c8";
      imagelocator[1].style.backgroundColor = "#c8c8c8";
      imagelocator[2].style.backgroundColor = "#357d52";
      imagelocator[3].style.backgroundColor = "#c8c8c8";
      break;
    case 3:
      imagelocator[0].style.backgroundColor = "#c8c8c8";
      imagelocator[1].style.backgroundColor = "#c8c8c8";
      imagelocator[2].style.backgroundColor = "#c8c8c8";
      imagelocator[3].style.backgroundColor = "#357d52";
      break;
  }
}, 10000);

// ENLARGING THE CATEGORY BOXES ON CLICK
const categoryBoxes = document.querySelectorAll(".category.box"); // Select all category boxes

// Add event listeners to each category box for hover effect
categoryBoxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.inlineSize = "100%"; // Enlarge the box on hover
    box.style.borderRadius = "0px"; // Remove border radius on hover
  });

  // Reset the box size on mouse out
  box.addEventListener("mouseout", () => {
    box.style.inlineSize = "300px"; // Reset the box size on mouse out
    box.style.borderRadius = "10px"; // Add border radius back on mouse out
  });
});

// DISPLAYING THE EXPLORE BUTTON WHEN THE CATEGORY BOXES ARE HOVERED
// Declaring the category boxes
const categoryBox = [
  document.querySelector(".category.box.fashion"),
  document.querySelector(".category.box.electronics"),
  document.querySelector(".category.box.edible"),
  document.querySelector(".category.box.services"),
];

// Declaring the explore buttons
const exploreBtn = [
  document.querySelector(".cta-button.category-button.fashion"),
  document.querySelector(".cta-button.category-button.electronics"),
  document.querySelector(".cta-button.category-button.edible"),
  document.querySelector(".cta-button.category-button.services"),
];

// Initially hide all explore buttons
exploreBtn.forEach((btn) => {
  btn.style.display = "none";
});

categoryBox.forEach((box, index) => {
  // Add event listener for mouseover to show the explore button
  box.addEventListener("mouseover", () => {
    exploreBtn[index].style.display = "block"; // Show the explore button on hover
  });

  // Add event listener for mouseout to hide the explore button
  box.addEventListener("mouseout", () => {
    exploreBtn[index].style.display = "none"; // Hide the explore button on mouse out
  });
});

// A SCROLL BACK TO TOP BUTTON
const scrollbtn = document.createElement("button");
scrollbtn.id = "scroll-btn"; // Set the ID for the button

scrollbtn.innerHTML = "&#8593;"; // Up arrow symbol
scrollbtn.style.display = "none"; // Initially hide the button
body.appendChild(scrollbtn); // Append the button to the body

// The button has been styled in the CSS file
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollbtn.style.display = "block"; // Show the button if scrolled down
  } else {
    scrollbtn.style.display = "none"; // Hide the button if at the top
  }
});

function scrollToTop() {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollbtn.addEventListener("click", scrollToTop); // Add click event listener to the button
