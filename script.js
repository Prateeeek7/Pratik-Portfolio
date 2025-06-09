// Enhanced Portfolio Data
const portfolioData = {
  personal: {
    name: "Pratik Kumar",
    title: "Full Stack Developer & UI/UX Designer",
    email: "pratik2002singh@gmail.com",
    phone: "+91-9109-787-343",
    location: "VIT, Vellore",
    bio: "I'm a passionate full-stack developer and designer with over 4 years of experience creating digital solutions that make a difference."
  },
  skills: {
    technical: [
      { name: "JavaScript", proficiency: 90 },
      { name: "React", proficiency: 85 },
      { name: "Node.js", proficiency: 80 },
      { name: "Python", proficiency: 75 },
      { name: "TypeScript", proficiency: 70 },
      { name: "MongoDB", proficiency: 75 },
      { name: "PostgreSQL", proficiency: 70 }
    ],
    design: [
      { name: "Figma", proficiency: 85 },
      { name: "Adobe Creative Suite", proficiency: 80 },
      { name: "UI/UX Design", proficiency: 85 },
      { name: "Prototyping", proficiency: 75 },
      { name: "Wireframing", proficiency: 80 }
    ],
    tools: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 70 },
      { name: "AWS", proficiency: 65 },
      { name: "Webpack", proficiency: 70 },
      { name: "Jest", proficiency: 75 }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Health-Care Website",
      category: "web",
      description: "Full-stack healthcare platform with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image: "HC",
      featured: true,
      links: {
        demo: "https://github.com/Prateeeek7/SWASTHIFY.git",
        github: "https://github.com/Prateeeek7/SWASTHIFY.git"
      }
    },
    {
      id: 2,
      title: "To-Do List App",
      category: "web",
      description: "A sleek dark-themed Todo List web app using vanilla HTML, CSS, and JavaScript. Features include animated confetti on task completion, live date & time, and persistent local storage.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      image: "TL",
      featured: true,
      links: {
        demo: "https://prateeeek7.github.io/To-Do-List/",
        github: "https://github.com/Prateeeek7/To-Do-List.git"
      }
    },
    {
      id: 3,
      title: "Hackathon Design",
      category: "design",
      description: "Designed complete brand identity for a hackathon project, including logo, UI theme, typography, and design system guidelines.",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
      image: "HD",
      featured: true,
      links: {
        demo: "https://www.canva.com/design/DAGgeMaRSs4/V0Xr8o2cO5q9XRwyPliBPA/view?utm_content=DAGgeMaRSs4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3683676a8a"
      }
    },
    {
      id: 4,
      title: "Helthcare App",
      category: "mobile",
      description: "UI/UX design for a modern Healthcare application with focus on security, usability, and accessibility.",
      technologies: ["Figma", "Sketch", "Principle", "InVision"],
      image: "HC",
      featured: false,
      links: {
        demo: "https://www.figma.com/design/FeJTkvwl5qASIdKdKjy0ft/Untitled?node-id=0-1&t=nQeR1rLFhVJEw9b3-1"
      }
    },
    {
      id: 5,
      title: "Professional Porfolio",
      category: "web",
      description: "Crafted a complete brand identity for a hackathon project—logo, color palette, typography, and UI/UX design system.",
      technologies: ["JavaScript", "Chart.js", "Weather API", "Leaflet"],
      image: "PD",
      featured: false,
      links: {
        demo: "https://github.com/Prateeeek7/Portfolio.git",
        github: "https://github.com/Prateeeek7/Portfolio.git"
      }
    },
    {
      id: 6,
      title: "Moodify UI/UX",
      category: "design",
      description: "Modern app design basded on your mood and location it makes your experiance worth.",
      technologies: ["Figma", "Sketch", "Principle", "InVision"],
      image: "MY",
      featured: false,
      links: {
        demo: "https://www.figma.com/design/XZkuVJVMdTm15N5T6nsmkN/Untitled?node-id=0-1&t=548PlpwXOmb1dGfD-1",
        
      }
    }
  ],
  timeline: [
    {
      id: 1,
      type: "education",
      title: "Bachelor of Technology in Electronics and Communication",
      subtitle: "Vellore Institute of Technology",
      date: "2024 - 2028",
      description: "Graduated with honors (CGPA: 9.2/10). Focused on software engineering, algorithms, and web development. Active member of the Computer Science Club and participated in multiple hackathons.",
      skills: ["Java", "Python", "Data Structures", "Algorithms", "Database Design"],
      icon: "🎓"
    },
    {
      id: 2,
      type: "experience",
      title: "UI/UX Designer Intern",
      subtitle: " Freelanscape, VIT-Incubated.",
      date: "2025 - Present",
      description: "Lead development of web applications design using Canva, Figma, and Adobe technologies. Mentored by junior developers and collaborate with design teams to create user-centered solutions.",
      skills: ["Canva", "Figma", "Adobe Phtotoshop", "Illstrator", "Team Leadership"],
      icon: "💼"
    },
    {
      id: 3,
      type: "experience",
      title: "Graphic Designer",
      subtitle: "CSI Club Studio",
      date: "2024 - Present",
      description: "Created user interfaces and experiences for mobile and web applications. Conducted user research and usability testing to improve product design and user satisfaction.",
      skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Prototyping"],
      icon: "🎨"
    },
    {
      id: 4,
      type: "education",
      title: "Web Development Bootcamp",
      subtitle: "Udemy Academy",
      date: "2024",
      description: "Intensive 12-week program covering full-stack web development. Built multiple projects using modern frameworks and best practices in software development.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Express.js"],
      icon: "💻"
    },
    {
      id: 5,
      type: "education",
      title: "AI Tool Expert",
      subtitle: "Udemy Academy",
      date: "2024",
      description: "Intensive 15-week program covering latest AI tools and MLM. Built multiple projects using modern AI Tools and best practices in software development.",
      skills: ["Promp Writting","ChatGPT", "Grok3", "Sora", "Deepseek", "Git"],
      icon: "🚀"
    }
  ]
};

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeToggle(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeToggle(newTheme);
}

function updateThemeToggle(theme) {
  const sunIcon = themeToggle?.querySelector('.sun-icon');
  const moonIcon = themeToggle?.querySelector('.moon-icon');
  
  if (sunIcon && moonIcon) {
    if (theme === 'dark') {
      sunIcon.style.opacity = '1';
      sunIcon.style.transform = 'rotate(0deg)';
      moonIcon.style.opacity = '0';
      moonIcon.style.transform = 'rotate(-180deg)';
    } else {
      sunIcon.style.opacity = '0';
      sunIcon.style.transform = 'rotate(180deg)';
      moonIcon.style.opacity = '1';
      moonIcon.style.transform = 'rotate(0deg)';
    }
  }
}

// Custom Cursor
function initCursor() {
  if (window.innerWidth > 768 && cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
      }, 100);
    });

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .hover-effect');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
      });
    });
  }
}

// Mobile Navigation
function initMobileNav() {
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Animate hamburger
      const bars = navToggle.querySelectorAll('.bar');
      bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
          if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (index === 1) bar.style.opacity = '0';
          if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          bar.style.transform = 'none';
          bar.style.opacity = '1';
        }
      });
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
          bar.style.transform = 'none';
          bar.style.opacity = '1';
        });
      });
    });
  }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Load Skills with animations
function loadSkills() {
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer) return;
  
  Object.keys(portfolioData.skills).forEach((category, categoryIndex) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category animate-on-scroll';
    categoryDiv.style.animationDelay = `${categoryIndex * 0.2}s`;
    
    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
    const icon = category === 'technical' ? '💻' : category === 'design' ? '🎨' : '🛠️';
    
    categoryDiv.innerHTML = `
      <h3>${icon} ${categoryTitle} Skills</h3>
      ${portfolioData.skills[category].map((skill, index) => `
        <div class="skill-item" style="animation-delay: ${(categoryIndex * 0.2) + (index * 0.1)}s">
          <div class="skill-name">
            <span>${skill.name}</span>
            <span>${skill.proficiency}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" data-width="${skill.proficiency}"></div>
          </div>
        </div>
      `).join('')}
    `;
    
    skillsContainer.appendChild(categoryDiv);
  });
  
  // Animate skill bars when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        progressBars.forEach((bar, index) => {
          const width = bar.getAttribute('data-width');
          setTimeout(() => {
            bar.style.width = width + '%';
          }, index * 200);
        });
      }
    });
  });
  
  observer.observe(skillsContainer);
}

// Load Timeline (Education & Experience)
function loadTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;
  
  portfolioData.timeline.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item animate-on-scroll';
    timelineItem.style.animationDelay = `${index * 0.2}s`;
    
    timelineItem.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${item.date}</div>
        <h4 class="timeline-title">${item.title}</h4>
        <div class="timeline-subtitle">${item.subtitle}</div>
        <p class="timeline-description">${item.description}</p>
        <div class="timeline-skills">
          ${item.skills.map(skill => `<span class="timeline-skill">${skill}</span>`).join('')}
        </div>
      </div>
      <div class="timeline-icon">${item.icon}</div>
    `;
    
    timeline.appendChild(timelineItem);
  });
}

// Load Projects with animations
function loadProjects(filter = 'all') {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;
  
  const filteredProjects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === filter);
  
  // Add fade out animation
  projectsGrid.style.opacity = '0';
  projectsGrid.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    projectsGrid.innerHTML = filteredProjects.map((project, index) => `
      <div class="project-card animate-on-scroll" style="animation-delay: ${index * 0.1}s">
        <div class="project-image">${project.image}</div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <span class="project-category">${project.category}</span>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            ${project.links.demo ? `<a href="${project.links.demo}" class="project-link primary" target="_blank" rel="noopener">View Demo</a>` : ''}
            ${project.links.github ? `<a href="${project.links.github}" class="project-link secondary" target="_blank" rel="noopener">GitHub</a>` : ''}
          </div>
        </div>
      </div>
    `).join('');
    
    // Fade in animation
    projectsGrid.style.opacity = '1';
    projectsGrid.style.transform = 'translateY(0)';
    
    // Re-observe new elements
    observeElements();
  }, 300);
}

// Project Filtering with animations
function initProjectFiltering() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Get filter value and load projects
      const filter = btn.getAttribute('data-filter');
      loadProjects(filter);
    });
  });
}

// Contact Form with enhanced animations
function initContactForm() {
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    if (!submitBtn) return;
    
    submitBtn.classList.add('loading');
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Success animation
    submitBtn.classList.remove('loading');
    submitBtn.style.background = '#10b981';
    submitBtn.innerHTML = '✓ Message Sent!';
    
    setTimeout(() => {
      submitBtn.style.background = '';
      submitBtn.innerHTML = '<span class="btn-text">Send Message</span><span class="btn-loading">Sending...</span>';
      contactForm.reset();
    }, 3000);
    
    console.log('Form submitted:', data);
  });
}

// Scroll animations
function observeElements() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

// Active navigation highlighting
function updateActiveNav() {
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// Parallax effect for hero section
function initParallax() {
  const hero = document.querySelector('.hero');
  const particles = document.querySelectorAll('.particle');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }
    
    particles.forEach((particle, index) => {
      const speed = 0.2 + (index * 0.1);
      particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Typing animation for hero title
function initTypingAnimation() {
  const typingElement = document.querySelector('.typing-animation');
  if (!typingElement) return;
  
  const text = typingElement.textContent;
  typingElement.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  setTimeout(typeWriter, 1000);
}

// Navbar background on scroll
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (window.scrollY > 50) {
      if (currentTheme === 'dark') {
        navbar.style.background = 'rgba(17, 24, 39, 0.98)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      }
      navbar.style.backdropFilter = 'blur(20px)';
    } else {
      if (currentTheme === 'dark') {
        navbar.style.background = 'rgba(17, 24, 39, 0.95)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      }
      navbar.style.backdropFilter = 'blur(10px)';
    }
  });
}

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize all functions
function init() {
  // Check if elements exist before initializing
  if (themeToggle) {
    initTheme();
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  if (navToggle && navMenu) {
    initMobileNav();
  }
  
  if (navLinks.length > 0) {
    initSmoothScrolling();
    updateActiveNav();
  }
  
  if (document.getElementById('skills-container')) {
    loadSkills();
  }
  
  if (document.getElementById('timeline')) {
    loadTimeline();
  }
  
  if (document.getElementById('projects-grid')) {
    loadProjects();
  }
  
  if (filterBtns.length > 0) {
    initProjectFiltering();
  }
  
  if (contactForm) {
    initContactForm();
  }
  
  if (cursor && cursorFollower) {
    initCursor();
  }
  
  // Initialize other features
  observeElements();
  initParallax();
  initTypingAnimation();
  initNavbarScroll();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navMenu) {
    navMenu.classList.remove('active');
    const bars = navToggle?.querySelectorAll('.bar');
    bars?.forEach(bar => {
      bar.style.transform = 'none';
      bar.style.opacity = '1';
    });
  }
});

// Add smooth scroll behavior for all anchor links
document.addEventListener('click', (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
});

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
  updateActiveNav();
  initParallax();
  initNavbarScroll();
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

  function showThankYou(e) {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const thankYou = document.getElementById('thank-you');

    // Simulate a short delay then show message
    setTimeout(() => {
      form.style.display = 'none';
      thankYou.style.display = 'block';
    }, 500);

    // Actually submit the form after showing feedback
    setTimeout(() => {
      form.submit();
    }, 1500);
  }