// script.js

window.onload = () => {
  document.querySelector('.loader').style.display = 'none';
}

function showPage(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function reviewSite() {
  document.getElementById('review-box').classList.toggle('show');
}

function submitReview() {
  alert('Thanks for your feedback!');
  document.getElementById('review-box').classList.remove('show');
}

// Background cursor interaction
const effect = document.getElementById('cursor-effect');
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  effect.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, rgba(0,0,0,0.04), transparent 70%)`;
});
