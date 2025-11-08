document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      // Remove active class from all buttons
      buttons.forEach(b => b.classList.remove('active'));
      // Hide all contents
      contents.forEach(c => c.style.display = 'none');

      // Activate this button
      btn.classList.add('active');
      // Show associated content
      const activeContent = document.getElementById(target);
      if (activeContent) {
        activeContent.style.display = 'block';
      }
    });
  });
});
