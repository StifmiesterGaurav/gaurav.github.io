// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "#f87171";
        return;
    }

    formMessage.textContent =
        "Thanks! Your message has been prepared successfully.";

    formMessage.style.color = "#38bdf8";

    contactForm.reset();
});
