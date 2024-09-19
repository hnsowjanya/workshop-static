// JavaScript for the "Learn More" button
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    alert('You clicked on Learn More!');
    // Smooth scroll to About section
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// JavaScript for form submission in the contact section
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    alert(`Thank you, ${name}! We have received your message: "${message}"`);
});
