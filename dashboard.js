 // Function to change the profile picture when a new image is selected
 function changeProfilePicture(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        // Corrected line: Use arrow function to preserve 'this' context
        reader.onload = () => { 
            document.getElementById('profilePic').src = reader.result;
        }
        reader.readAsDataURL(file);
    }
}

// jQuery for handling save changes functionality
$(document).ready(function() {
    // When the save changes button is clicked
    $('#saveChangesBtn').on('click', function() {
        // Show loading indicator
        $('#loadingIndicator').show();

        // Get the values from the form inputs
        const username = $('#username').val();
        const email = $('#email').val();
        const bio = $('#bio').val();
        const language = $('#languageSelect').val();

        // Simulate saving data (for example, using AJAX to save it)
        setTimeout(function() {
            // Update the profile info dynamically without reloading the page
            $('#usernameText').text(username);
            $('#emailText').text(email);
            $('#bioText').text(bio);

            // Hide loading indicator
            $('#loadingIndicator').hide();

            // Show success message
            alert('Profile updated successfully!');
        }, 2000); // Simulate a 2-second delay for saving the changes
    });

    // Handle the change password button (for future implementation)
    $('.change-password-btn').on('click', function() {
        alert('Change Password functionality will be implemented here!');
    });
});