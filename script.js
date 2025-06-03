// About Me Progress Bar Animation
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const bar = entry.target;
      const targetWidth = bar.getAttribute("data-width");

      if (entry.isIntersecting) {
        // Animate to full width
        bar.style.width = targetWidth;
      } else {
        // Reset to 0 when out of view
        bar.style.width = "0";
      }
    });
  }, {
    threshold: 0.3 // Trigger when about 30% is visible
  });

  bars.forEach(bar => {
    // Ensure bars start at 0 width
    bar.style.width = "0";
    observer.observe(bar);
  });
});