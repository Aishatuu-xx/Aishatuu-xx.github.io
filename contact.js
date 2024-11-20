document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Reset error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.style.display = 'none';
    });

    let valid = true;

    // Validate Full Name
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (!message) {
        document.getElementById('messageError').style.display = 'block';
        valid = false;
    }

    // If valid, display success message or submit
    if (valid) {
        alert('Your message has been sent! Thank you for contacting us.');
        // Here, you can submit the form using AJAX or redirect
        // this.submit(); // Uncomment if you want to submit the form
    }
});
