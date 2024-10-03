// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

// Form Validation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let emailError = document.getElementById('emailError');
    let nameError = document.getElementById('nameError');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    // Email validation
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Name validation
    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    if (!valid) {
        event.preventDefault();
    }
});

// Dynamic Content Loading
const loadDataButton = document.getElementById('loadData');
const dynamicContent = document.getElementById('dynamicContent');

loadDataButton.addEventListener('click', () => {
    dynamicContent.innerHTML = "<p>New dynamic content has been loaded!</p>";
});
