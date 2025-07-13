// === Toggle mobile menu ===
document.getElementById("menu-toggle").addEventListener("click", () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  });
  
  // === Active nav link highlight on scroll ===
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");
  
    let currentSection = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active-link");
      }
    });
  });
  
  // === Scroll reveal effect ===
  const revealElements = document.querySelectorAll(".scroll-reveal");
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
  
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
  
      if (elementTop < triggerBottom) {
        el.classList.add("revealed");
      }
    });
  };
  
  // Run on scroll and on page load
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  
// === Toggle project details ===
document.querySelectorAll(".project-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.previousElementSibling;
    details.classList.toggle("hidden");
    button.textContent = details.classList.contains("hidden") ? "Show More" : "Show Less";
  });
});
