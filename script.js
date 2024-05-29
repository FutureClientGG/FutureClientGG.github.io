// script.js

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar ul li a[data-target]');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            sections.forEach(section => {
                section.classList.remove('active', 'fade-in');
                if (section.id === targetId) {
                    section.classList.add('active', 'fade-in');
                }
            });
        });
    });

    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    prev.addEventListener('click', function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    next.addEventListener('click', function() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    // Modal functionality
    const contactButton = document.getElementById('contact-button');
    const modal = document.getElementById('contact-modal');
    const closeModal = document.querySelector('.close');

    contactButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle contact form submission
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted successfully!');
        modal.style.display = 'none';
        // You can add AJAX form submission here
    });

    // Handle feedback form submission
    document.getElementById('feedback-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Feedback submitted successfully!');
        // You can add AJAX form submission here
    });
});
