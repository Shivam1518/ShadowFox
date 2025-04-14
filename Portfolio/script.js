document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display an alert (you can replace this with actual form handling)
    alert(`Thank you, ${name}! Your message has been sent.\nEmail: ${email}\nMessage: ${message}`);

    // Clear the form
    document.getElementById('contactForm').reset();
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = 'Switch to Dark Mode';
}

