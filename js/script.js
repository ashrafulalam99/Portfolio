const darkToggle = document.getElementById("dark-mode-toggle");

// Toggle dark mode and update icon when button is clicked
if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        darkToggle.textContent =
            document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
    });
}

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

// Show or hide navigation links
if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

const navItems = document.querySelectorAll(".nav-item");
const currentPage = window.location.pathname.split("/").pop();

// Highlight current page link and disable its click
navItems.forEach(item => {
    const linkPage = item.getAttribute("href");

    if (linkPage === currentPage) {
        item.classList.add("active");
        item.style.cursor = "default";

        item.addEventListener("click", e => e.preventDefault());
    }
});

const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

// Handle contact form submission with validation
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        formMsg.textContent = "";
        formMsg.className = "";

        if (!name || !email || !message) {
            showMsg("Please fill all required fields.", "error"); // Show error if required fields are empty
            return;
        }

        if (!validateEmail(email)) {
            showMsg("Enter a valid email address.", "error"); // Show error if email is invalid
            return;
        }

        showMsg("Message sent successfully!", "success"); // Show success message and reset form
        contactForm.reset();
    });
}

// Simple regex email validation
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Display a message in the form for confirmation
function showMsg(text, type) {
    formMsg.textContent = text;
    formMsg.classList.add(type);
}
