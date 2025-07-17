document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".sidebar .dropdown-toggle");

  dropdowns.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const parentLi = this.parentElement;
      parentLi.classList.toggle("open");
    });
  });

  // Optional: highlight active link
  const links = document.querySelectorAll(".sidebar a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});
