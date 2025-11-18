document.addEventListener('DOMContentLoaded', function () {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (!navbarCollapse) return;

  // On cible LES nav-link dans la navbar-collapse
  const navLinks = navbarCollapse.querySelectorAll('.nav-link, .dropdown-item');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Si c'est le toggle du dropdown (ou un lien qui ouvre un dropdown), ne pas fermer la navbar
      if (link.classList.contains('dropdown-toggle') || link.getAttribute('data-bs-toggle') === 'dropdown') {
        return;
      }

      // Pour tout autre lien (y compris .dropdown-item), on ferme la collapse proprement
      // Récupère l'instance existante ou en crée une sans toggler automatiquement
      const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse)
                              || new bootstrap.Collapse(navbarCollapse, { toggle: false });
      collapseInstance.hide();
    });
  });
});