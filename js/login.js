// Function to validate the login form
function validateLoginForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation checks
    if (!email || !password) {
        alert("Both fields are required.");
        return;
    }

    // If validation passes, submit the form
    document.querySelector("form").submit();
}

// Attach the validation function to the form submit event
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", validateLoginForm);
});
