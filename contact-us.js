const contactBtn = document.getElementById("form-container"); 
const popup = document.getElementById("contactPopup");
const closeBtn = document.getElementById("closeBtn");
const errorMessages = document.getElementById("error-messages-popup");
const formSteps = document.querySelectorAll(".form-step");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const sendBtn = document.getElementById("sendBtn");
const clickSound = document.getElementById('click-sound'); 
let currentStep = 0;

function openPopup() {
    popup.style.width = "100%"; 
    popup.style.opacity = "0.97";
    popup.classList.add("show-form-overlay"); 
    popup.querySelector(".popup-content").classList.add("show-popup-content");  
    document.body.style.overflow = "hidden"; 
    clickSound.play().then(() => {
      console.log('Sound played successfully');
  }).catch(error => {
      console.error('Failed to play sound:', error);
  });
}

function closePopup() {
    popup.style.width = "0%"; 
    popup.style.opacity = "0.97";
    popup.classList.remove("show-form-overlay");  
    popup.querySelector(".popup-content").classList.remove("show-popup-content");  
    document.body.style.overflow = "auto"; 
}

function showStep(step) {
  formSteps.forEach((formStep, index) => {
      formStep.style.display = index === step ? 'block' : 'none';
  });

  errorMessages.innerHTML = "";
  backBtn.style.display = step === 0 ? 'none' : 'inline';
  nextBtn.style.display = step === formSteps.length - 1 ? 'none' : 'inline';
  sendBtn.style.display = step === formSteps.length - 1 ? 'inline' : 'none';
}


function validateStep(step) {
  let valid = true;
  errorMessages.innerHTML = "";
  if (step === 0) {
      const name = document.getElementById("name").value;
      if (name.trim() === "") {
          errorMessages.innerHTML += "<p>Name is required.</p>";
          valid = false;
      }
  }

  if (step === 1) {
      const message = document.getElementById("message").value;
      if (message.trim() === "") {
          errorMessages.innerHTML += "<p>Message is required.</p>";
          valid = false;
      }
  }

  return valid;
}

nextBtn.addEventListener("click", () => {
  console.log("Next button clicked");
  if (validateStep(currentStep)) {
      console.log("Validation successful");
      currentStep++;
      if (currentStep >= formSteps.length) {
          currentStep = formSteps.length - 1;
      }
      showStep(currentStep);
  } else {
      console.log("Validation failed");
  }
});


backBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

sendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateStep(currentStep)) {
      console.log("Form submitted");
      location.reload(); 
  }
  clickSound.play().then(() => {
    console.log('Sound played successfully');
}).catch(error => {
    console.error('Failed to play sound:', error);
});
});

contactBtn.onclick = openPopup;
closeBtn.onclick = closePopup;

window.onclick = function(event) {
    if (event.target == popup) {
        closePopup();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showStep(currentStep);
});
