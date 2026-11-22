const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile menu on button click
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Highlight the current page in the navigation bar
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const activeLink = document.querySelector(`.nav-links a[href="${currentPage}"]`);

if (activeLink) {
  activeLink.classList.add("active");
}