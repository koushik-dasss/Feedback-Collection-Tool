// Emoji Rating Functionality
const emojis = document.querySelectorAll('.emoji');
let selectedRating = 0;

emojis.forEach((emoji) => {
  emoji.addEventListener('click', () => {
    // Remove active class from all emojis
    emojis.forEach((e) => e.classList.remove('active'));

    // Add active class to the clicked emoji
    emoji.classList.add('active');

    // Get the rating value
    selectedRating = emoji.getAttribute('data-rating');
    console.log(`Selected Rating: ${selectedRating}`);
  });
});

// Photo Upload Functionality
const photoInput = document.getElementById('photo');
const photoPreview = document.getElementById('photoPreview');

photoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      photoPreview.innerHTML = `<img src="${event.target.result}" alt="Uploaded Photo">`;
    };
    reader.readAsDataURL(file);
  }
});

// Submit Button Click Handling
document.querySelector('.submit-btn').addEventListener('click', function () {
  alert('Feedback submitted successfully!');
  window.location.href = "dashboard.html"; // Redirect to dashboard.html
});
