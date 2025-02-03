const displayInput = document.querySelector('.display-input');
const displayResult = document.querySelector('.display-result');
const buttons = document.querySelectorAll('button');

let input = "";

// Function to evaluate the expression
const calculate = (btnValue) => {
  if (btnValue === 'AC') {
    input = "";
    displayResult.value = "";
  } else if (btnValue === '⌫') { // Handle backspace
    input = input.slice(0, -1);
  } else if (btnValue === '=') {
    try {
      let expression = input.replace(/×/g, '*').replace(/÷/g, '/'); // Convert symbols
      displayResult.value = eval(expression);
    } catch {
      displayResult.value = "Error";
    }
  } else {
    input += btnValue;
  }

  displayInput.value = input;
};

// Attach event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    calculate(e.target.textContent);
  });
});

// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});