document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name-input");
    const submitButton = document.getElementById("submit-button");
    const greeting = document.getElementById("greeting");
    const clickSound = document.getElementById('click-sound'); 

    function getGreeting() { 
        const hour = new Date().getHours(); 
        let greetingMessage; 
 
        switch (true) { 
            case (hour < 12): 
                greetingMessage = "Good Morning"; 
                break; 
            case (hour < 18): 
                greetingMessage = "Good Afternoon"; 
                break; 
            default: 
                greetingMessage = "Good Evening"; 
                break; 
        } 
 
        return greetingMessage; 
    }

    submitButton.addEventListener("click", function () {
        const userName = nameInput.value.trim();
        const greetingPrefix = getGreeting();
        clickSound.play().then(() => {
            console.log('Sound played successfully');
        }).catch(error => {
            console.error('Failed to play sound:', error);
        });
        
        if (userName) {
            greeting.textContent = `${greetingPrefix}, ${userName}!`;
            nameInput.value = ""; 
        } else {
            greeting.textContent = "Hello, Guest!"; 
        }
    });
});

