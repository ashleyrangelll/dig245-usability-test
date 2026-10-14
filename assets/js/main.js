document.querySelectorAll('.navbar .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navbarSupportedContent');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
    event.preventDefault
  });
});