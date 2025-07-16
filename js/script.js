// smooth scroll for nav anchors
document.querySelectorAll('.nav-link[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({behavior: 'smooth'});
  });
});
console.log('MC & WASN site loaded.');
