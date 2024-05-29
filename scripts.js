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
});

// Handle form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    // You can add AJAX form submission here
});
