// Function to validate the registration form
function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Simple validation checks
    if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // If validation passes, submit the form
    document.querySelector("form").submit();
}

// Attach the validation function to the form submit event
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", validateForm);
});
