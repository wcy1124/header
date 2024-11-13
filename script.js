document.addEventListener('DOMContentLoaded', function() {
    let list = document.querySelector('.list');

    let projectElement = document.querySelector('.project');
    let projectContent = document.querySelector('.project-content');
    let logoElement = document.querySelector('.logo');
    let logoContent = document.querySelector('.logo-content');
    let logoSort = document.querySelector('.logo-sort');

    let hamburger = document.querySelector('.hamburger-menu');
    let arrow = document.querySelector('.arrow');

    projectElement.addEventListener('click', function() {
        if (logoSort.classList.contains('active')) {
            logoSort.classList.remove('active');
            logoElement.classList.remove('active');
            logoContent.classList.remove('active');
        }

        projectElement.classList.toggle('active');
        projectContent.classList.toggle('active');
        hamburger.classList.toggle('active');
        arrow.classList.toggle('active');
    });

    logoElement.addEventListener('click', function() {
        if (projectContent.classList.contains('active')) {
            projectContent.classList.remove('active');
            projectElement.classList.remove('active');
            hamburger.classList.toggle('active');
            arrow.classList.toggle('active');
        }

        logoElement.classList.toggle('active');
        logoContent.classList.toggle('active');

        setTimeout(function() {
            logoSort.classList.toggle('active');
        }, 200);
    });

    hamburger.addEventListener('click', function() {
        list.classList.toggle('open');
        hamburger.classList.toggle('close');
    });

    arrow.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        arrow.classList.toggle('active');
        projectElement.classList.toggle('active');
        projectContent.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1000) {
            projectElement.classList.remove('active');
            projectContent.classList.remove('active');
            logoElement.classList.remove('active');
            logoContent.classList.remove('active');
            logoSort.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.classList.remove('close');
            arrow.classList.remove('active');
            list.classList.remove('open');
        }
    });
});