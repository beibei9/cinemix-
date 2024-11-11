document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    const ratingMessage = document.getElementById("rating-message");

    stars.forEach(star => {
        star.addEventListener("click", function() {
            const ratingValue = this.getAttribute("data-value");

            console.log(`Star ${ratingValue} clicked`);

            stars.forEach(s => s.classList.remove("selected"));
            for (let i = 0; i < ratingValue; i++) {
                stars[i].classList.add("selected");
            }

            ratingMessage.textContent = `You rated this movie ${ratingValue} stars.`;
        });
    });

    const dynamicText = document.getElementById("dynamic-text");
    const changeTextButton = document.getElementById("change-text-button");
    
    changeTextButton.addEventListener("click", function() {
    dynamicText.textContent = "Thank you for your feedback! Your rating has been recorded.";
});
});
