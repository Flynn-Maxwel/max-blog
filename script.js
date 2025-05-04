// Page Transition using Event Delegation
const navList = document.querySelector('nav ul');
const pages = document.querySelectorAll('.page');

navList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const targetId = event.target.getAttribute('data-page');

        // Add a class for the transition
        pages.forEach(page => {
            page.classList.remove('active');
            page.classList.add('page-transition');
        });

        setTimeout(() => {
            document.getElementById(targetId).classList.add('active');
            document.getElementById(targetId).classList.remove('page-transition');
        }, 100);
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
document.getElementById('review-submit-button').addEventListener('click', function() {
    const textarea = document.getElementById('review-text');
    const reviewText = textarea.value.trim();

    if (reviewText) {
        emailjs.init('YOUR_USER_ID');
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
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
    con
st firstPage = document.querySelector('.page');
    if (firstPage && !document.querySelector('.page.active')) {
        firstPage.classList.add('active');
    }
});
