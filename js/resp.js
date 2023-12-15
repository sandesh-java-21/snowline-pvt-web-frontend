burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
  rightNav.classList.toggle("v-class-resp");
  navList.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});

const currentYear = new Date().getFullYear();

// Get the website URL
const websiteURL = "www.snowlinepvt.com";

// Construct the dynamic footer content
const dynamicFooterContent = `Copyright &copy; ${currentYear} - <a href="${websiteURL}">${websiteURL}</a>  - All rights reserved`;

// Update the content of the footer element
const footerElement = document.getElementById("dynamic-footer");
footerElement.innerHTML = dynamicFooterContent;
