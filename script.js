document.addEventListener("DOMContentLoaded", () => {
    // Burger Menu Toggle
    const burger = document.getElementById('burger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.getElementById('navLinks');
  
    burger.addEventListener('click', () => {
      navbar.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  
    // Reveal Sections on Scroll
    const revealElements = document.querySelectorAll(".reveal");
  
    const observerOptions = {
      threshold: 0.1 // العنصر يظهر عندما يظهر 10% منه
    };
  
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("active");
          observer.unobserve(el); // تحسين الأداء
        }
      });
    }, observerOptions);
  
    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  });
  