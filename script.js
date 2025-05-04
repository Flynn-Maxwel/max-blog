/* style.css */

/* Reset & Basics */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background: #f8f8f8;
  color: #333;
  overflow-x: hidden;
  position: relative;
}

/* Header Styling */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #222;
}

nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}

nav ul li button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #333;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

nav ul li button:hover {
  color: #007bff;
}

/* Page Content */
.page {
  display: none;
  padding: 2rem 3rem;
  animation: fadeIn 0.6s ease forwards;
}

.page.active {
  display: block;
}

/* Forms */
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
}

form input, form textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

form button {
  padding: 0.8rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

form button:hover {
  background: #333;
}

/* Footer */
footer {
  text-align: center;
  padding: 2rem;
  background: #fff;
  border-top: 1px solid #eee;
  font-size: 0.9rem;
}

/* Loader */
.loader {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  font-size: 1.5rem;
}

/* Review Box */
#review-box {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  padding: 1rem;
  border-radius: 10px;
  display: none;
  z-index: 1500;
}

#review-box textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

#review-box button {
  background: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#review-box.show {
  display: block;
}

/* Cursor Effect */
#cursor-effect {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  background: radial-gradient(circle at center, rgba(0,0,0,0.03) 0%, transparent 80%);
  transition: background 0.3s ease;
  z-index: -1;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
