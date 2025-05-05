// Navigation and interactive elements for futuristic portfolio

// Enhance section transitions with smoother animations
const animateSection = (oldSection, newSection) => {
  // Add artistic transition
  oldSection.style.opacity = '0';
  oldSection.style.transform = 'scale(0.98) translateY(10px)';
  
  setTimeout(() => {
    // Remove active class from all sections
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active-section');
    });
    
    // Add active class to new section
    oldSection.style.display = 'none';
    newSection.classList.add('active-section');
    newSection.style.opacity = '0';
    newSection.style.transform = 'scale(0.98) translateY(10px)';
    newSection.style.display = 'block';
    
    // Force reflow
    void newSection.offsetWidth;
    
    // Fade and slide in new section
    newSection.style.opacity = '1';
    newSection.style.transform = 'scale(1) translateY(0)';
  }, 400);
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
  
  // Add subtle parallax effects to the background
  document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.cyber-panel');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const moveX = (mouseX - 0.5) * 20;
    const moveY = (mouseY - 0.5) * 20;
    
    document.querySelectorAll('.particle').forEach((particle, index) => {
      const depth = Math.random() * 0.5 + 0.5; // Random depth between 0.5 and 1
      particle.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
    });
    
    container.style.backgroundPosition = `${moveX * 0.05}px ${moveY * 0.05}px`;
  });
  
  // Add artistic animations to award items
  const awardItems = document.querySelectorAll('.award-item');
  awardItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      item.style.transition = 'all 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 100 * index);
  });
  
  // Enhanced hover effects for categories
  const categories = document.querySelectorAll('.category');
  categories.forEach(category => {
    if (!category.classList.contains('featured')) {
      category.addEventListener('mouseenter', () => {
        category.style.transform = 'scale(1.03) translateY(-5px)';
        category.style.boxShadow = '0 10px 25px rgba(0, 255, 157, 0.2)';
        category.style.borderColor = 'var(--light-green)';
      });
      
      category.addEventListener('mouseleave', () => {
        category.style.transform = '';
        category.style.boxShadow = '';
        category.style.borderColor = 'rgba(0,255,157,0.3)';
      });
    }
  });
  
  // Add subtle animations to the main header elements
  const headerElements = document.querySelectorAll('.header *');
  headerElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      element.style.transition = 'all 0.5s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 * index);
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
  
  // Enhanced pathway effects
  const pathways = document.querySelectorAll('.pathway');
  
  pathways.forEach(pathway => {
    // Create particle effects for each pathway
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('span');
      particle.classList.add('pathway-particle');
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      
      pathway.appendChild(particle);
    }
    
    // 3D effect on hover
    pathway.addEventListener('mousemove', (e) => {
      const rect = pathway.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = (y - centerY) / 15;
      const angleY = (centerX - x) / 15;
      
      pathway.style.transform = `translateY(-10px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    pathway.addEventListener('mouseleave', () => {
      pathway.style.transform = '';
      setTimeout(() => {
        pathway.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      }, 100);
    });
    
    // Click effect
    pathway.addEventListener('click', () => {
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      pathway.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 800);
    });
  });

  // Add interactive publication hover effects
  const publicationItems = document.querySelectorAll('.publication-item');
  publicationItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-10px)';
      item.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 255, 157, 0.3)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
      item.style.boxShadow = '';
    });
  });
});

// Enhanced About section with interactive elements

document.addEventListener('DOMContentLoaded', () => {
  // Initialize skill bars animation
  setTimeout(() => {
    document.querySelectorAll('.skill-fill').forEach(skill => {
      const width = skill.style.width;
      skill.style.width = '0';
      
      setTimeout(() => {
        skill.style.width = width;
      }, 300);
    });
  }, 1000);
  
  // Create interactive backdrop particles
  const heroBackdrop = document.querySelector('.hero-backdrop');
  
  if (heroBackdrop) {
    for (let i = 0; i < 50; i++) {
      createParticle(heroBackdrop);
    }
    
    // Add parallax effect to hero backdrop
    document.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
      
      heroBackdrop.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }
  
  // Interactive glitch effect on avatar hover
  const profileAvatar = document.querySelector('.profile-avatar');
  const nameElement = document.querySelector('#about .cyber-glitch');
  
  if (profileAvatar && nameElement) {
    profileAvatar.addEventListener('mouseenter', () => {
      nameElement.classList.add('active-glitch');
      
      // Add pulse effect to avatar
      profileAvatar.querySelector('.avatar-ring').style.boxShadow = '0 0 30px var(--light-green)';
    });
    
    profileAvatar.addEventListener('mouseleave', () => {
      nameElement.classList.remove('active-glitch');
      profileAvatar.querySelector('.avatar-ring').style.boxShadow = '';
    });
  }
});

// Create floating particles for hero backdrop
function createParticle(parent) {
  const particle = document.createElement('div');
  particle.className = 'hero-particle';
  
  // Randomize particle properties
  const size = Math.random() * 4 + 2;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const opacity = Math.random() * 0.5 + 0.1;
  const animDuration = Math.random() * 20 + 10;
  const animDelay = Math.random() * 10;
  
  // Apply styles
  particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    background-color: rgba(0, 255, 157, ${opacity});
    border-radius: 50%;
    left: ${posX}%;
    top: ${posY}%;
    box-shadow: 0 0 ${size * 2}px rgba(0, 255, 157, 0.5);
    animation: float-particle ${animDuration}s ${animDelay}s infinite linear;
    pointer-events: none;
    z-index: 0;
  `;
  
  parent.appendChild(particle);
  return particle;
}

// Add custom animation styles
const customStyles = document.createElement('style');
customStyles.textContent = `
  @keyframes float-particle {
    0%, 100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(30px, -20px);
    }
    50% {
      transform: translate(-20px, -40px);
    }
    75% {
      transform: translate(-30px, 20px);
    }
  }
  
  .active-glitch {
    animation: text-glitch 0.5s infinite;
  }
  
  @keyframes text-glitch {
    0%, 100% { 
      text-shadow: 0 0 5px var(--light-green), 0 0 10px rgba(0, 255, 157, 0.5);
      transform: translateX(0);
    }
    25% {
      text-shadow: -2px 0 5px #ff00ff, 2px 0 5px #00ffff;
      transform: translateX(-2px);
    }
    50% {
      text-shadow: 2px 0 5px #ff00ff, -2px 0 5px #00ffff;
      transform: translateX(2px);
    }
    75% {
      text-shadow: -2px 0 5px #00ffff, 2px 0 5px #ff00ff;
      transform: translateX(-1px);
    }
  }
`;
document.head.appendChild(customStyles);

// Add styles for the enhanced particle and ripple effects
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
  .pathway-particle {
    position: absolute;
    background-color: rgba(0, 255, 157, 0.6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
    animation: float-particle 3s infinite linear;
  }
  
  @keyframes float-particle {
    0% { transform: translateY(0) translateX(0); opacity: 0.1; }
    25% { transform: translateY(-10px) translateX(10px); opacity: 0.4; }
    50% { transform: translateY(-20px) translateX(-5px); opacity: 0.2; }
    75% { transform: translateY(-10px) translateX(-10px); opacity: 0.4; }
    100% { transform: translateY(0) translateX(0); opacity: 0.1; }
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 255, 157, 0.4);
    transform: scale(0);
    animation: ripple-effect 0.8s linear;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: 0;
    pointer-events: none;
  }
  
  @keyframes ripple-effect {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }
  
  .publication-item {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
document.head.appendChild(enhancedStyles);

// Add this style for the smoother transitions
const styleTransitions = document.createElement('style');
styleTransitions.textContent = `
  .section {
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  
  .edu-item, .exp-item {
    transition: all 0.3s ease;
  }
  
  .edu-item:hover, .exp-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 255, 157, 0.2);
  }
`;
document.head.appendChild(styleTransitions);

// Enhanced interactive elements

document.addEventListener('DOMContentLoaded', () => {
  // Interactive name glitch effect
  const nameElement = document.querySelector('.interactive-glitch');
  if (nameElement) {
    // Set data-text attribute for the glitch effect
    nameElement.setAttribute('data-text', nameElement.textContent);
    
    nameElement.addEventListener('click', function() {
      this.classList.add('active');
      
      // Add temporary intense glitch effect
      this.style.animation = 'intense-glitch 0.5s forwards';
      
      // Reset after animation completes
      setTimeout(() => {
        this.classList.remove('active');
        this.style.animation = '';
      }, 500);
    });
  }
  
  // Remove or hide profile avatar/circle as requested
  const profileAvatar = document.querySelector('.profile-avatar');
  if (profileAvatar) {
    profileAvatar.style.display = 'none';
  }
  
  // Enhanced publications interaction
  const publications = document.querySelectorAll('.publication-item');
  publications.forEach(pub => {
    pub.addEventListener('mouseenter', () => {
      // Create subtle particle effects around publication items
      for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.classList.add('pub-particle');
        
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Position randomly along the left border
        particle.style.left = '0';
        particle.style.top = `${Math.random() * 100}%`;
        
        // Add animation
        particle.style.animation = `pub-particle-move ${Math.random() * 2 + 1}s forwards ease-out`;
        
        pub.appendChild(particle);
        
        // Clean up particles
        setTimeout(() => {
          if (particle && particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 3000);
      }
    });
  });
  
  // Dynamic pathway selection effect
  const pathwayContainers = document.querySelectorAll('.pathways-container');
  
  pathwayContainers.forEach(container => {
    container.addEventListener('mousemove', (e) => {
      const paths = container.querySelectorAll('.pathway');
      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      
      paths.forEach(path => {
        const pathRect = path.getBoundingClientRect();
        const pathCenterX = (pathRect.left + pathRect.right) / 2 - containerRect.left;
        
        // Calculate distance from mouse to pathway center (horizontal only)
        const distance = Math.abs(mouseX - pathCenterX);
        const maxDistance = containerRect.width / 2;
        
        // Calculate scale based on proximity (closer = larger)
        const scale = Math.max(1, 1.1 - (distance / maxDistance) * 0.2);
        const brightness = 100 + (1 - distance / maxDistance) * 40;
        
        // Apply transformation
        path.style.transform = `scale(${scale})`;
        path.style.filter = `brightness(${brightness}%)`;
      });
    });
    
    // Reset on mouse leave
    container.addEventListener('mouseleave', () => {
      const paths = container.querySelectorAll('.pathway');
      paths.forEach(path => {
        path.style.transform = '';
        path.style.filter = '';
      });
    });
  });
});

// Add styles for publication particles
const pubParticleStyles = document.createElement('style');
pubParticleStyles.textContent = `
  .pub-particle {
    position: absolute;
    background-color: var(--light-green);
    border-radius: 50%;
    z-index: 3;
    pointer-events: none;
  }
  
  @keyframes pub-particle-move {
    0% { 
      transform: translateX(0) translateY(0);
      opacity: 0.8; 
    }
    100% { 
      transform: translateX(100px) translateY(${Math.random() > 0.5 ? '-' : ''}${Math.random() * 50}px);
      opacity: 0; 
    }
  }
  
  @keyframes intense-glitch {
    0%, 100% { 
      text-shadow: 0 0 5px var(--light-green), 0 0 10px var(--light-green);
      transform: translateX(0); 
    }
    10%, 30%, 50%, 70%, 90% {
      text-shadow: -2px 0 5px #ff00ff, 2px 0 5px #00ffff;
      transform: translateX(-3px) skewX(10deg);
    }
    20%, 40%, 60%, 80% {
      text-shadow: 2px 0 5px #00ffff, -2px 0 5px #ff00ff;
      transform: translateX(3px) skewX(-10deg);
    }
  }
`;
document.head.appendChild(pubParticleStyles);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create particle background
  createParticleBackground();
  
  // Move pathway icons to center of nodes
  moveIconsToNodes();
  
  // Add school logos to education section
  setupSchoolLogos();
  
  // Initialize the remaining elements and animations
  initInteractiveElements();
});

// Move pathway icons to the center nodes
function moveIconsToNodes() {
  const pathways = document.querySelectorAll('.neo-pathway');
  
  pathways.forEach(pathway => {
    const pathIcon = pathway.querySelector('.path-icon i');
    const node = pathway.querySelector('.node');
    
    if (pathIcon && node) {
      // Create a new element for the icon inside the node
      const nodeIcon = document.createElement('i');
      nodeIcon.className = pathIcon.className;
      node.appendChild(nodeIcon);
      
      // Hide the original path-icon
      const pathIconContainer = pathway.querySelector('.path-icon');
      if (pathIconContainer) {
        pathIconContainer.style.display = 'none';
      }
    }
  });
}

// Set up school logos in education section
function setupSchoolLogos() {
  // Create education header with logos if not already present
  const eduItems = document.querySelectorAll('.edu-item');
  
  eduItems.forEach((item, index) => {
    const title = item.querySelector('h3');
    if (!item.querySelector('.edu-header') && title) {
      // Get the original content
      const content = item.innerHTML;
      
      // Clear the item
      item.innerHTML = '';
      
      // Create header with logo
      const header = document.createElement('div');
      header.className = 'edu-header';
      
      // Create logo container
      const logo = document.createElement('div');
      logo.className = 'school-logo';
      
      // Add the appropriate logo based on index
      const img = document.createElement('img');
      if (index === 0) { // CMU
        img.src = 'cmu-logo-transparent.png';
        logo.classList.add('cmu');
      } else if (index === 1) { // Aitchison
        img.src = 'aitchison-logo-transparent.png';
        logo.classList.add('aitchison');
      }
      logo.appendChild(img);
      
      // Create info container
      const info = document.createElement('div');
      info.className = 'edu-info';
      info.innerHTML = content;
      
      // Append logo and info to header
      header.appendChild(logo);
      header.appendChild(info);
      
      // Append header to item
      item.appendChild(header);
    }
  });
  
  // Add animation to logos
  const logos = document.querySelectorAll('.school-logo');
  logos.forEach(logo => {
    logo.style.animation = 'pulse 3s infinite';
  });
}

// Initialize interactive elements
function initInteractiveElements() {
  // Add hover effects to education items
  const eduItems = document.querySelectorAll('.edu-item');
  eduItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const logo = item.querySelector('.school-logo');
      if (logo) {
        logo.style.boxShadow = '0 0 20px var(--light-green)';
        logo.style.borderColor = 'var(--highlight-green)';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      const logo = item.querySelector('.school-logo');
      if (logo) {
        logo.style.boxShadow = '';
        logo.style.borderColor = '';
      }
    });
  });
  
  // Add node pulse effect on hover
  const nodes = document.querySelectorAll('.node');
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const icon = node.querySelector('i');
      if (icon) {
        icon.style.transform = 'scale(1.3)';
        icon.style.color = 'var(--highlight-green)';
      }
    });
    
    node.addEventListener('mouseleave', () => {
      const icon = node.querySelector('i');
      if (icon) {
        icon.style.transform = '';
        icon.style.color = '';
      }
    });
  });
  
  // Add animation to publication links
  const pubLinks = document.querySelectorAll('.publication-item h3 a');
  pubLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      // Create glowing dot effect
      for (let i = 0; i < 3; i++) {
        createGlowingDot(link);
      }
    });
  });
}

// Create glowing dot effect for links
function createGlowingDot(element) {
  const dot = document.createElement('div');
  dot.className = 'glow-dot';
  
  const rect = element.getBoundingClientRect();
  const parentRect = element.offsetParent.getBoundingClientRect();
  
  // Position dot relative to link
  dot.style.left = `${Math.random() * rect.width + (rect.left - parentRect.left)}px`;
  dot.style.top = `${Math.random() * rect.height + (rect.top - parentRect.top)}px`;
  
  // Add styles
  dot.style.position = 'absolute';
  dot.style.width = '4px';
  dot.style.height = '4px';
  dot.style.borderRadius = '50%';
  dot.style.backgroundColor = 'var(--light-green)';
  dot.style.boxShadow = '0 0 8px var(--light-green)';
  dot.style.zIndex = '2';
  dot.style.pointerEvents = 'none';
  
  // Add animation
  dot.style.animation = `glow-float ${Math.random() * 1 + 1}s forwards ease-out`;
  
  // Add to parent
  element.parentNode.style.position = 'relative';
  element.parentNode.appendChild(dot);
  
  // Remove after animation
  setTimeout(() => {
    if (dot.parentNode) {
      dot.parentNode.removeChild(dot);
    }
  }, 2000);
}

// Add glow dot animation
const glowDotStyle = document.createElement('style');
glowDotStyle.textContent = `
  @keyframes glow-float {
    0% { 
      opacity: 0.8;
      transform: translate(0, 0); 
    }
    100% { 
      opacity: 0;
      transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * -30 - 10}px); 
    }
  }
`;
document.head.appendChild(glowDotStyle);

// Create image error handler to fallback if logos don't load
document.addEventListener('DOMContentLoaded', () => {
  const logoImages = document.querySelectorAll('.school-logo img');
  logoImages.forEach(img => {
    img.addEventListener('error', () => {
      // If image fails to load, replace with text
      const parent = img.parentNode;
      const schoolName = parent.classList.contains('cmu') ? 'CMU' : 'AC';
      
      parent.innerHTML = `<span style="font-size: 18px; color: var(--light-green);">${schoolName}</span>`;
    });
  });
});

// Enhanced interactive name effect with continuous animation
document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.querySelector('.interactive-glitch');
  
  if (nameElement) {
    // Set data-text attribute for the glow effect
    nameElement.setAttribute('data-text', nameElement.textContent);
    
    // Create floating letter effect (runs automatically)
    createFloatingLetterEffect(nameElement);
    
    // Add continuous particle effect
    setInterval(() => {
      createNameParticles(nameElement);
    }, 800);
    
    // Click effect (separate from continuous animation)
    nameElement.addEventListener('click', () => {
      // Create strong pulse wave
      createStrongPulseEffect(nameElement);
      
      // Create intense particle burst
      createIntenseParticleBurst(nameElement);
      
      // Add temporary intense glow
      nameElement.style.textShadow = '0 0 25px var(--light-green), 0 0 40px var(--light-green)';
      
      // Reset shadow after animation
      setTimeout(() => {
        nameElement.style.textShadow = '';
      }, 800);
    });
  }
  
  // Add Contact Me link
  addContactLink();
});

// Create floating letter effect for automatic animation with space between names
function createFloatingLetterEffect(element) {
  // Get the text content and ensure proper spacing
  const text = "ZAYN ASLAM"; // Ensuring space between names
  
  // Clear the element
  element.textContent = '';
  element.style.position = 'relative'; // Required for mouse interaction
  
  // Create spans for each letter with independent animation
  for (let i = 0; i < text.length; i++) {
    const letter = document.createElement('span');
    letter.textContent = text[i];
    letter.style.display = 'inline-block';
    
    if (text[i] !== ' ') { // Don't animate space
      letter.style.animation = `float-letter ${1 + Math.random() * 2}s ease-in-out infinite`;
      letter.style.animationDelay = `${Math.random() * 2}s`;
      letter.classList.add('interactive-letter');
      
      // Store original position for mouse interaction
      letter.dataset.originalX = 0;
      letter.dataset.originalY = 0;
    } else {
      letter.style.width = '0.5em'; // Add appropriate space width
    }
    
    // Add to the name element
    element.appendChild(letter);
  }
  
  // Add mouse movement listener to enable letter repelling
  element.addEventListener('mousemove', handleMouseRepel);
  element.addEventListener('mouseleave', resetLetterPositions);
}

// Function to handle mouse repel effect
function handleMouseRepel(e) {
  const container = e.currentTarget;
  const letters = container.querySelectorAll('.interactive-letter');
  const rect = container.getBoundingClientRect();
  
  // Get mouse position relative to container
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  
  letters.forEach(letter => {
    const letterRect = letter.getBoundingClientRect();
    const letterCenterX = letterRect.left - rect.left + letterRect.width / 2;
    const letterCenterY = letterRect.top - rect.top + letterRect.height / 2;
    
    // Calculate distance between mouse and letter center
    const distanceX = mouseX - letterCenterX;
    const distanceY = mouseY - letterCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // Repel force inversely proportional to distance (with a max range)
    const maxRange = 100;
    const repelStrength = 30;
    
    if (distance < maxRange) {
      const force = repelStrength * (1 - distance / maxRange);
      const angleX = -distanceX / distance;
      const angleY = -distanceY / distance;
      
      // Apply transformation
      letter.style.transform = `translate(${force * angleX}px, ${force * angleY}px)`;
      letter.style.transition = 'transform 0.1s ease-out';
    } else {
      // Outside range, reset position with transition
      letter.style.transform = '';
      letter.style.transition = 'transform 0.5s ease-out';
    }
  });
}

// Reset letter positions when mouse leaves
function resetLetterPositions(e) {
  const letters = e.currentTarget.querySelectorAll('.interactive-letter');
  
  letters.forEach(letter => {
    letter.style.transform = '';
    letter.style.transition = 'transform 0.5s ease-out';
  });
}

// Add styles for interactive letters
const letterInteractionStyles = document.createElement('style');
letterInteractionStyles.textContent = `
  .interactive-letter {
    position: relative;
    display: inline-block;
    transition: transform 0.5s ease-out;
    cursor: default;
  }
  
  .interactive-glitch {
    white-space: nowrap;
    padding: 10px;
  }
`;
document.head.appendChild(letterInteractionStyles);

// Enhanced Contact section with interactive elements

document.addEventListener('DOMContentLoaded', () => {
  // Add animated background effect to contact section
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    for (let i = 0; i < 20; i++) {
      createParticle(contactSection);
    }
    
    // Subtle zoom and fade in for the contact section
    contactSection.style.opacity = '0';
    contactSection.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
      contactSection.style.transition = 'opacity 1s ease, transform 1s ease';
      contactSection.style.opacity = '1';
      contactSection.style.transform = 'scale(1)';
    }, 300);
  }
  
  // Interactive form inputs
  const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentNode.classList.add('active');
    });
    
    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentNode.classList.remove('active');
      }
    });
  });
  
  // Add glowing effect to social icons on hover
  const socialIcons = document.querySelectorAll('.social-link i');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.2)';
      icon.style.color = 'var(--light-green)';
      icon.style.textShadow = '0 0 10px var(--light-green)';
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = '';
      icon.style.color = '';
      icon.style.textShadow = '';
    });
  });
});

// Enhance CMU logo to fill space better
document.addEventListener('DOMContentLoaded', () => {
  const cmuLogo = document.querySelector('.school-logo.cmu img');
  if (cmuLogo) {
    // Make the CMU logo fill the space better
    cmuLogo.style.width = '95%';
    cmuLogo.style.height = '95%';
    cmuLogo.style.objectFit = 'contain';
    cmuLogo.style.padding = '2px';
    cmuLogo.style.transform = 'scale(1.1)';
    
    // Add a subtle glow effect
    cmuLogo.style.filter = 'brightness(1.05) drop-shadow(0 0 3px rgba(0, 255, 157, 0.4))';
    
    // Add a slight zoom on hover
    cmuLogo.parentElement.addEventListener('mouseenter', () => {
      cmuLogo.style.transform = 'scale(1.15)';
      cmuLogo.style.transition = 'transform 0.3s ease';
    });
    
    cmuLogo.parentElement.addEventListener('mouseleave', () => {
      cmuLogo.style.transform = 'scale(1.1)';
    });
  }
});

// Add styles for enhanced logo display
const logoEnhancementStyles = document.createElement('style');
logoEnhancementStyles.textContent = `
  .school-logo.cmu {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(15, 77, 50, 0.15);
    overflow: visible;
    border-radius: 8px;
  }
  
  .school-logo.cmu img {
    transition: all 0.3s ease;
  }
`;
document.head.appendChild(logoEnhancementStyles);
