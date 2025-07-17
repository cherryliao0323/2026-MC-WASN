document.addEventListener("DOMContentLoaded", function () {
  // 選擇所有具有 data-toggle 的下拉按鈕
  document.querySelectorAll('[data-toggle="collapse"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(link.dataset.target);
      if (target) {
        target.classList.toggle("show");
      }
    });
  });
});
