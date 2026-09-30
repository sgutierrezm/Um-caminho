// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica del Menú Móvil (Hamburguesa)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (menuToggle && mainNavUl) {
        menuToggle.addEventListener('click', () => {
            // Alternar la clase 'active' para mostrar/ocultar el menú
            mainNavUl.classList.toggle('active');
        });
    }

    // Cerrar el menú al hacer clic en un enlace (para móviles)
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNavUl.classList.contains('active')) {
                mainNavUl.classList.remove('active');
            }
        });
    });

    // 2. Desplazamiento Suave (Smooth Scroll) para enlaces internos
    // Aunque CSS tiene 'scroll-behavior: smooth', agregamos soporte JS por compatibilidad
    // y para asegurar un comportamiento preciso con el header fijo (sticky).
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const headerHeight = document.querySelector('.site-header').offsetHeight;

    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});