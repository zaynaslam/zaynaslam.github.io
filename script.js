// Navigation and interactive elements for futuristic portfolio

// Helper function for smooth transitions
const animateSection = (oldSection, newSection) => {
  // Hide old section
  oldSection.style.opacity = '0';
  
  setTimeout(() => {
    // Remove active class from all sections
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active-section');
    });
    
    // Add active class to new section
    oldSection.style.display = 'none';
    newSection.classList.add('active-section');
    newSection.style.opacity = '0';
    newSection.style.display = 'block';
    
    // Force reflow
    void newSection.offsetWidth;
    
    // Fade in new section
    newSection.style.opacity = '1';
  }, 300);
};

// Initialize the navigation
document.addEventListener('DOMContentLoaded', () => {
  // Set glitch effect attributes
  document.querySelectorAll('.cyber-glitch').forEach(heading => {
    heading.setAttribute('data-text', heading.textContent);
  });
  
  // Add click event listeners to navigation menu
  document.querySelectorAll('.nav-item, .pathway, .back-btn').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const currentSection = document.querySelector('.active-section');
      const targetSection = document.getElementById(targetId);
      
      if (targetSection && currentSection !== targetSection) {
        animateSection(currentSection, targetSection);
        
        // Add network connection animation between sections
        if (item.classList.contains('pathway')) {
          const pathwayNode = item.querySelector('.node');
          pathwayNode.classList.add('active-node');
          
          setTimeout(() => {
            pathwayNode.classList.remove('active-node');
          }, 800);
        }
      }
    });
  });
  
  // Add hover effect to the awards categories
  const categories = document.querySelectorAll('.category');
  categories.forEach(category => {
    category.addEventListener('mouseenter', () => {
      if (!category.classList.contains('featured')) {
        category.style.transform = 'scale(1.03)';
        category.style.boxShadow = '0 0 8px var(--light-green)';
      }
    });
    
    category.addEventListener('mouseleave', () => {
      if (!category.classList.contains('featured')) {
        category.style.transform = '';
        category.style.boxShadow = '';
      }
    });
  });
  
  // Add typewriter effect to terminal text
  const typewriterElements = document.querySelectorAll('.terminal-text');
  typewriterElements.forEach(terminal => {
    const lines = terminal.querySelectorAll('p:not(.blinking-cursor)');
    
    lines.forEach((line, index) => {
      const text = line.textContent;
      line.textContent = '';
      line.style.opacity = '0';
      
      setTimeout(() => {
        line.style.opacity = '1';
        let charIndex = 0;
        
        const typing = setInterval(() => {
          if (charIndex < text.length) {
            line.textContent += text.charAt(charIndex);
            charIndex++;
          } else {
            clearInterval(typing);
          }
        }, 30);
      }, index * 1000);
    });
  });
  
  // Add particle background effect
  createParticleBackground();
});

// Create particle background effect
function createParticleBackground() {
  const container = document.querySelector('.cyber-panel');
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Randomize particle properties
    const size = Math.random() * 3 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${posX}%;
      top: ${posY}%;
      animation: float ${duration}s ${delay}s infinite linear;
      background-color: rgba(0, 255, 157, ${Math.random() * 0.5 + 0.1});
      box-shadow: 0 0 ${size * 2}px rgba(0, 255, 157, 0.4);
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    `;
    
    container.appendChild(particle);
  }
}

// Add this style for the particles
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(10px, 10px);
    }
    50% {
      transform: translate(-5px, 20px);
    }
    75% {
      transform: translate(-15px, 5px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  
  .active-node {
    animation: node-pulse 0.8s ease;
  }
  
  @keyframes node-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); box-shadow: 0 0 20px var(--light-green); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(style);
