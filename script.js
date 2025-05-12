// Theme toggle
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
  } else {
      document.documentElement.setAttribute("data-theme", "dark");
  }
}


// Image parallax effect
const heroImg = document.getElementById('hero-img');

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    heroImg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

// Highlight each letter in the name
const nameHeader = document.getElementById('name-header');
const nameText = nameHeader.textContent;
nameHeader.innerHTML = '';

[...nameText].forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.classList.add('name-letter');
    nameHeader.appendChild(span);
});

function toggleMenu() {
    const links = document.querySelectorAll("nav a:not(.icon)");
    links.forEach(link => link.classList.toggle("active"));
}
