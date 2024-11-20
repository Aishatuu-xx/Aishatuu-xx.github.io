document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
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

    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    if (!phone) {
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    }

    // Validate Course Selection
    const course = document.getElementById('course').value;
    if (!course) {
        document.getElementById('courseError').style.display = 'block';
        valid = false;
    }

    // If valid, submit the form or display a success message
    if (valid) {
        alert('Enrollment successful! Thank you for enrolling at Tech School.');
        // Here, you can submit the form using AJAX or redirect
        // this.submit(); // Uncomment if you want to submit the form
    }
});
