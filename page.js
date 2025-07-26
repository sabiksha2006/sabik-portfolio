function cha(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    sec.classList.remove('visible');
    sec.style.display = 'none';
  });

  const section = document.getElementById(id);
  section.style.display = section.getAttribute('data-display');
  
  // Force reflow to restart animation
  void section.offsetWidth;
  section.classList.add('visible');
}
