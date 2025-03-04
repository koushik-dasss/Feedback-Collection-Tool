// Toggle Password Visibility
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  this.querySelector('.show-password').textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

// Form Submission Handling
document.querySelector('.login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const password = document.getElementById('password').value;

  if (username && email && telephone && password) {
      alert('Login successful!');
      window.location.href = "feedback.html"; // Redirect to feedback page
  } else {
      alert('Please fill in all fields.');
  }
});

// GSAP Animations
gsap.from('.left-section', {
  duration: 1.5,
  x: -100,
  opacity: 0,
  ease: 'power3.out',
});

gsap.from('.right-section', {
  duration: 1.5,
  x: 100,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.5,
});

gsap.from('.circle', {
  duration: 2,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: 'bounce.out',
  delay: 1,
});

// Submit Button Click Handling
document.querySelector('.submit-btn').addEventListener('click', function () {
  document.querySelector('.login-form').requestSubmit(); // Trigger form submission
});
