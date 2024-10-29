function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const genre = document.getElementById("genre").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessages = document.getElementById("error-messages");
    errorMessages.innerHTML = ""; 

    let valid = true;

    if (username.trim() === "") {
        errorMessages.innerHTML += "<p>Username is required.</p>";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessages.innerHTML += "<p>Please enter a valid email address.</p>";
        valid = false;
    }

    if (genre === "") {
        errorMessages.innerHTML += "<p>Please select your favorite genre.</p>";
        valid = false;
    }

    if (password.length < 6) {
        errorMessages.innerHTML += "<p>Password must be at least 6 characters long.</p>";
        valid = false;
    }

    if (password !== confirmPassword) {
        errorMessages.innerHTML += "<p>Passwords do not match.</p>";
        valid = false;
    }

    return valid; 
}
