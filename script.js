const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

document.querySelectorAll(".project-card, .info-card, .contact-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.background = `
      radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08) 42%, rgba(255, 255, 255, 0.05) 100%)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "";
  });
});
