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
});