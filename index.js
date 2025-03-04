// JavaScript to trigger the slide-in animation
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    container.style.animation = "slideIn 1.5s ease-out forwards";
});

// Redirect to main.html when clicking on Sign In or Sign Up
// document.getElementById("signin-btn").addEventListener("click", function() {
  // window.location.href = "feedback.html";
//});

document.getElementById("signup-btn").addEventListener("click", function() {
    window.location.href = "form.html";
});
