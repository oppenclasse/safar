document.addEventListener('DOMContentLoaded', function () {
    // Initialisation du Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Ajout d'une fonctionnalité de soumission de formulaire simple
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Formulaire soumis !');
    });
});
