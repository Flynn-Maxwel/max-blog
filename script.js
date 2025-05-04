// Page Transition
const buttons = document.querySelectorAll('nav ul li button');
const pages = document.querySelectorAll('.page');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-page');
    
    pages.forEach(page => {
      page.classList.remove('active');
    });

    document.getElementById(target).classList.add('active');
  });
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
