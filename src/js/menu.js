document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelectorAll('.menu-list a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (menuToggle.checked) {
                menuToggle.checked = false;
            }
        });
    });

    // Lógica para o botão Voltar ao Topo
    const voltarAoTopoBtn = document.querySelector('.voltar-ao-topo');
    const contatoSection = document.querySelector('.contato');

    if (voltarAoTopoBtn && contatoSection) {
        window.addEventListener('scroll', function() {
            const contatoPosition = contatoSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (contatoPosition < windowHeight) {
                voltarAoTopoBtn.classList.add('visible');
            } else {
                voltarAoTopoBtn.classList.remove('visible');
            }
        });
    }
});