var typed = new Typed(".text", {
    strings:["Frontend Developer","Python Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// learnmore button 

document.getElementById("learn-more-button").addEventListener("click", function() {
    var contentDiv = document.getElementById("content");
    if (contentDiv.style.display === "none") {
        contentDiv.style.display = "block";
    } else {
        contentDiv.style.display = "none";
    }
});

// JavaScript for Dark/Light mode toggle
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
        // Dark mode
        body.classList.add("dark-mode");
    } else {
        // Light mode
        body.classList.remove("dark-mode");
    }
});


