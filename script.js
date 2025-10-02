// Mobile Menu Toggle
const btnMobileToggle = document.getElementById("btnMobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
const btnMobileClose = document.getElementById("btnMobileClose");
btnMobileToggle.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});
btnMobileClose.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
const mobileNavLinks = document.querySelectorAll("#mobileNavList a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// CV Modal Logic
const btnViewCV = document.getElementById("btnViewCV");
const cvModal = document.getElementById("cvModal");
const cvModalClose = document.getElementById("cvModalClose");

btnViewCV.addEventListener("click", () => {
  cvModal.style.display = "block";
});

cvModalClose.addEventListener("click", () => {
  cvModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === cvModal) {
    cvModal.style.display = "none";
  }
});

// ===========modal for contact==============
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const modalEl = document.getElementById("messageModal");
  const messageModal = new bootstrap.Modal(modalEl);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    messageModal.show();

    setTimeout(() => {
      messageModal.hide();
    }, 3000);
  });
});

