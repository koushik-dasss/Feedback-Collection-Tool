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
    // Check if the file is an image
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        photoPreview.innerHTML = `<img src="${event.target.result}" alt="Uploaded Photo">`;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid image file.');
      photoInput.value = ''; // Clear the input
    }
  }
});

// Submit Button Click Handling
document.querySelector('.submit-btn').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  // Validate if a rating is selected
  if (selectedRating === 0) {
    alert('Please select a rating before submitting.');
    return;
  }

  // Validate if a photo is uploaded (optional)
  const photoUploaded = photoPreview.innerHTML.trim() !== '';
  if (!photoUploaded) {
    const confirmSubmit = confirm('No photo uploaded. Are you sure you want to submit?');
    if (!confirmSubmit) {
      return;
    }
  }

  // Simulate form submission
  alert('Feedback submitted successfully!');
  console.log(`Rating: ${selectedRating}`);
  if (photoUploaded) {
    console.log('Photo uploaded successfully.');
  }

  // Redirect to something.html after successful submission
  window.location.href = 'dashboard.html'; 
});
