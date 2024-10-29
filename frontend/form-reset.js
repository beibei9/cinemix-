document.getElementById('reset-btn').addEventListener('click', function() {
    // Select all input fields within the form and reset their values
    document.querySelectorAll('#subscription-form input, #subscription-form select, #subscription-form textarea').forEach(input => {
        input.value = '';
    });
    document.getElementById('genre').selectedIndex = 0; // Set dropdown to the default option
});
