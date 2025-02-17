///////////////////////////////
// TAB SWITCHING LOGIC
///////////////////////////////
function showTab(tabId, linkElement) {
    // Hide all sections and reset opacity
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
      section.style.display = 'none';
      section.style.opacity = '0';
    });
  
    // Remove "active" class from all nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
  
    // Show the selected section
    const activeSection = document.getElementById(tabId);
    if (activeSection) {
      activeSection.style.display = 'block';
      setTimeout(() => {
        activeSection.style.opacity = '1';
      }, 10);
    }
  
    // Mark the clicked link as active
    if (linkElement) {
      linkElement.classList.add('active');
    }
  }
  
  ///////////////////////////////
  // TYPED.JS INITIALIZATION
  ///////////////////////////////
  document.addEventListener("DOMContentLoaded", function() {
    new Typed("#typed", {
      strings: [
        "Software Engineer",
        "ML Researcher",
        "Full Stack Developer",
      ],
      typeSpeed: 75,    // Typing speed
      backSpeed: 75,    // Backspace speed
      backDelay: 2000,  // Pause before backspacing
      loop: true        // Repeat forever
    });
  });
  
  ///////////////////////////////
  // PARTICLES.JS INITIALIZATION
  ///////////////////////////////
  particlesJS("particles-bg", {
    "particles": {
      "number": { "value": 50 },
      "size": { "value": 3 },
      "color": { "value": "#ffffff" },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff"
      },
      "move": {
        "speed": 1
      }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "repulse": { "distance": 100 },
        "push": { "particles_nb": 3 }
      }
    },
    "retina_detect": true
  });
  