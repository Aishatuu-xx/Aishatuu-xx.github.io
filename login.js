document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Reset error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.style.display = 'none';
    });

    let valid = true;

    // Validate Username or Email
    const username = document.getElementById('username').value;
    if (!username) {
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    // If valid, display success message or submit
    if (valid) {
        alert('You have successfully logged in! Welcome back to Tech School.');
        // Here, you can submit the form using AJAX or redirect
        // this.submit(); // Uncomment if you want to submit the form
    }
});

// Password reset functionality
document.getElementById('resetPassword').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    alert('Password reset link has been sent to your email address.');
    // Here you can redirect to a password reset page or implement further logic
});
