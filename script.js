document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
  
    const observerOptions = {
      threshold: 0.1 // يظهر العنصر عندما يظهر 10% منه على الشاشة
    };
  
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("active");
          observer.unobserve(el); // إزالة المراقبة بعد التفعيل (أفضل للأداء)
        }
      });
    }, observerOptions);
  
    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  });
  