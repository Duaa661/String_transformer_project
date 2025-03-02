// Example of form validation and animation for form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert('Message sent successfully');
        // Reset form fields
        document.getElementById('contactForm').reset();
    }
});

// Simple scroll animation for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#2c3e50';
    } else {
        header.style.backgroundColor = '#333';
    }
});
