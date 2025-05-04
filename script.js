// Page Transition using Event Delegation
const navList = document.querySelector('nav ul');
const pages = document.querySelectorAll('.page');

navList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const targetId = event.target.getAttribute('data-page');

        pages.forEach(page => {
            page.classList.remove('active');
        });

        document.getElementById(targetId).classList.add('active');
    }
});

// Cursor Background Movement
const cursorEffect = document.getElementById('cursor-effect');

document.addEventListener('mousemove', (e) => {
    cursorEffect.style.left = `${e.clientX}px`;
    cursorEffect.style.top = `${e.clientY}px`;
});

// Loader Fade Out (handled via CSS animation)

// Review Box Submission with Email
document.getElementById('review-submit-button').addEventListener('click', function() { // Changed to event listener
    const textarea = document.getElementById('review-text');
    const reviewText = textarea.value.trim();

    if (reviewText) {
        // Use a service like EmailJS (https://www.emailjs.com/) to send emails from the frontend
        // 1.  Sign up for EmailJS and get your User ID, Service ID, and Template ID.
        // 2.  Install EmailJS:  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
        // 3.  Initialize EmailJS (replace with your keys):
        emailjs.init('YOUR_USER_ID'); // Replace with your actual EmailJS user ID
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { // Replace with your Service ID and Template ID
            to_email: 'flynnmaxwel7@gmail.com',
            message: reviewText,
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Thanks for your feedback!  It has been sent to my email.");
            textarea.value = "";
        }, function(error) {
            console.log('FAILED...', error);
            alert("Sorry, there was an error sending your feedback. Please try again later.");
        });
    } else {
        alert("Please enter something to submit.");
    }
});

// Optional: Ensure the first page is active on load if no other logic sets it.
document.addEventListener('DOMContentLoaded', () => {
    const firstPage = document.querySelector('.page');
    if (firstPage && !document.querySelector('.page.active')) {
        firstPage.classList.add('active');
    }
});
