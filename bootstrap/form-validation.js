document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        let valid = true;

        // Name Validation
        const name = document.getElementById("name").value.trim();
        const nameError = document.getElementById("nameError");
        if (name === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            nameError.textContent = "Name must contain only letters.";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        // Email Validation
        const email = document.getElementById("mail").value.trim();
        const emailError = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Invalid email format.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        // Message Validation (Removed 10 Character Limit)
        const message = document.getElementById("msg").value.trim();
        const messageError = document.getElementById("messageError");
        if (message === "") {
            messageError.textContent = "Message cannot be empty.";
            valid = false;
        } else {
            messageError.textContent = "";
        }

        // Prevent form submission if validation fails
        if (!valid) {
            event.preventDefault();
        } else {
            // Show success alert
            alert("Form submitted successfully!");
        }
    });
});
