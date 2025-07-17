document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a.nav-link[href^='#']");
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
