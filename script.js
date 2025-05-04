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

// Review Box Submission
function submitReview() {
    const textarea = document.querySelector('#review-box textarea');
    if (textarea.value.trim()) {
        alert("Thanks for your feedback!");
        textarea.value = "";
    } else {
        alert("Please enter something to submit.");
    }
}

// Optional: Ensure the first page is active on load if no other logic sets it.
document.addEventListener('DOMContentLoaded', () => {
    const firstPage = document.querySelector('.page');
    if (firstPage && !document.querySelector('.page.active')) {
        firstPage.classList.add('active');
    }
});
