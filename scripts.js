document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const content = document.getElementById('content');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            loadPage(this.dataset.page);
        });
    });

    function loadPage(page) {
        switch(page) {
            case 'home':
                content.innerHTML = '<h1>Home</h1><p>The amount of people that have viewed the website will show up in this tab, so will the amount of people who have purchased Future Client.</p>';
                break;
            case 'modules':
                content.innerHTML = '<h1>Modules</h1><p>Future Client\'s modules will show up in this tab.</p>';
                break;
            case 'configs':
                content.innerHTML = '<h1>Configs</h1><p>Configs for Future Client will show up in this tab.</p>';
                break;
            case 'settings':
                content.innerHTML = '<h1>Settings</h1><p>The abilitiy to change the theme from dark to white & more will show up in this tab when Future Client is ready for release/purchase.</p>';
                break;
            case 'logout':
                content.innerHTML = '<h1>Logout</h1><p>You have been logged out. (not rly)</p>';
                break;
            default:
                content.innerHTML = '<h1>Welcome!</h1><p>Click any tab to continue to the demo of Future Client.</p>';
                break;

        }
    }

    loadPage();
});