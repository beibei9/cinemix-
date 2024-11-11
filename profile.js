document.addEventListener("DOMContentLoaded", function () {
    // Load profile information from local storage
    loadProfile();

    // Toggle between display and edit modes
    window.toggleEdit = function() {
        const profileInfo = document.getElementById("profile-info");
        const editProfile = document.getElementById("edit-profile");
        profileInfo.style.display = profileInfo.style.display === "none" ? "block" : "none";
        editProfile.style.display = editProfile.style.display === "none" ? "block" : "none";
    };

    // Save updated profile information
    window.saveProfile = function() {
        const username = document.getElementById("edit-username").value;
        const email = document.getElementById("edit-email").value;
        const genre = document.getElementById("edit-genre").value;

        // Save updated data to local storage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("genre", genre);

        // Reload the profile display
        loadProfile();
        toggleEdit();
    };
});

// Load profile data into the display section
function loadProfile() {
    const username = localStorage.getItem("username") || "Guest";
    const email = localStorage.getItem("email") || "Not provided";
    const genre = localStorage.getItem("genre") || "Not selected";

    document.getElementById("display-username").textContent = username;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-genre").textContent = genre;

    document.getElementById("edit-username").value = username;
    document.getElementById("edit-email").value = email;
    document.getElementById("edit-genre").value = genre;
}
