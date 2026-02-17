const darkToggle = document.getElementById("dark-mode-toggle");

if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        darkToggle.textContent =
            document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
    });
}

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

const navItems = document.querySelectorAll(".nav-item");
const currentPage = window.location.pathname.split("/").pop();

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
            showMsg("Please fill all required fields.", "error");
            return;
        }

        if (!validateEmail(email)) {
            showMsg("Enter a valid email address.", "error");
            return;
        }

        showMsg("Message sent successfully!", "success");
        contactForm.reset();
    });
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMsg(text, type) {
    formMsg.textContent = text;
    formMsg.classList.add(type);
}
