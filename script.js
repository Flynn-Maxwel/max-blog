// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Page Sections
const sections = {
  about: `<section><h2>About Me</h2><p>I’m Max – a UI/UX learner, AI dev, poet & creative soul.</p></section>`,
  blog: `<section><h2>Blog</h2><p>Where thoughts meet inspiration. Posts coming soon!</p></section>`,
  poems: `<section><h2>Poems</h2><p>Feelings, faith, and fire – in words. Stay tuned.</p></section>`,
  projects: `<section><h2>Projects</h2><p>AI, IoT, and magic in the making.</p></section>`,
  contact: `<section><h2>Contact</h2><p>Email me at flynnmax@example.com or DM @flynnmaxwel</p></section>`
};

function loadSection(name) {
  const content = document.getElementById('content');
  content.style.opacity = 0; // Start fading out
  setTimeout(() => {
    content.innerHTML = sections[name] || '<section><h2>Not Found</h2><p>This section doesn’t exist yet.</p></section>';
    content.style.opacity = 1; // Fade in
  }, 500); // Delay for fade-out effect
}

// Background cursor movement
const bg = document.getElementById("background");
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth * 100;
  const y = e.clientY / window.innerHeight * 100;
  bg.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,0,0,0.06), transparent 70%)`;
});
