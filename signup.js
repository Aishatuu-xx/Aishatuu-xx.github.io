document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Reset error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.style.display = 'none';
    });

    let valid = true;

    // Validate Username
    const username = document.getElementById('username').value;
    if (!username) {
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }

    // If valid, display success message or submit
    if (valid) {
        alert('You have successfully signed up! Welcome to Tech School.');
        // Here, you can submit the form using AJAX or redirect
        // this.submit(); // Uncomment if you want to submit the form
    }
});
