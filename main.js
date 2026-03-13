const elements = document.querySelectorAll(".fade-in");

if (window.innerWidth < 768) {
  elements.forEach((el) => el.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 },
  );

  elements.forEach((el) => observer.observe(el));
}

// Tabs Modalidades
document.querySelectorAll("#modalidades .tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    // activar botón
    document
      .querySelectorAll("#modalidades .tab")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    // activar panel
    document
      .querySelectorAll("#modalidades .tab-panel")
      .forEach((p) => p.classList.remove("active"));
    document.querySelector(target).classList.add("active");
  });
});
