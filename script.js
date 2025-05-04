console.log("Welcome to Max's Blog!");

// Optional: Scroll animation or interactivity
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Navigating to ${link.textContent}`);
    });
  });
});
