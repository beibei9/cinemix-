const toggle = document.getElementById("toggle");
let theme = window.localStorage.getItem("theme");

if (theme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "Light Mode"; 
} else {
    document.body.classList.add("light-mode");
    toggle.textContent = "Dark Mode";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        toggle.textContent = "Light Mode"; 
        window.localStorage.setItem("theme", "dark");
    } else {
        toggle.textContent = "Dark Mode";
        window.localStorage.setItem("theme", "light");
    }
});
