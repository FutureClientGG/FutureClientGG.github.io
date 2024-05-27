document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('activityChart').getContext('2d');
    const activityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: '# of Launches',
                    data: [12000, 15000, 14000, 13000, 9000, 7000, 2000, 0, 0, 0, 0, 0],
                    borderColor: '#7289da',
                    backgroundColor: 'rgba(114, 137, 218, 0.2)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: '# of Downloads',
                    data: [8000, 9000, 8500, 6000, 5000, 3000, 1000, 0, 0, 0, 0, 0],
                    borderColor: '#43b581',
                    backgroundColor: 'rgba(67, 181, 129, 0.2)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
