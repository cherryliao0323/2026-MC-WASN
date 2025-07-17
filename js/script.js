// 展開子選單功能
const submenuTriggers = document.querySelectorAll('.sidebar .menu > li > a');

submenuTriggers.forEach(trigger => {
  trigger.addEventListener('click', function (e) {
    const parentLi = this.parentElement;
    const submenu = parentLi.querySelector('ul.submenu');

    if (submenu) {
      e.preventDefault();
      const isOpen = parentLi.classList.contains('open');

      // 關閉其他展開項目
      document.querySelectorAll('.sidebar .menu > li').forEach(li => {
        li.classList.remove('open');
      });

      // 切換展開狀態
      if (!isOpen) {
        parentLi.classList.add('open');
      }
    }
  });
});
