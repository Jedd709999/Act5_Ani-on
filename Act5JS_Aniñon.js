document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for reaching out, ${name}! We will respond to you at ${email} shortly.`);
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
