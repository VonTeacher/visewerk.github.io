document.querySelectorAll("img").forEach((img) => {
  if (img.complete) {
    img.setAttribute("data-loaded", "true");
  } else {
    img.addEventListener("load", () => {
      img.setAttribute("data-loaded", "true");
    });
  }
});

const cards = document.querySelectorAll(".work-card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 120);
    }
  });
}, { threshold: 0.1 });
cards.forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".work-desc a").forEach(a => {
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });
});
