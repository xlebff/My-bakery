document.addEventListener('DOMContentLoaded', function() {
    // Переключение вкладок
    const tabLinks = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаляем active у всех вкладок
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Добавляем active к выбранной вкладке
            const tabId = this.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
            
            // Обновляем активный пункт меню
            tabLinks.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // По умолчанию активируем первую вкладку
    if (tabLinks.length > 0) {
        tabLinks[0].click();
    }
});