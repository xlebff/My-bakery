document.addEventListener('DOMContentLoaded', function() {
    // Переключение категорий меню
    const categoryBtns = document.querySelectorAll('.menu__category-btn');
    const categories = document.querySelectorAll('.menu__category');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем active у всех кнопок и категорий
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            categories.forEach(cat => cat.classList.remove('active'));
            
            // Добавляем active к выбранной кнопке и категории
            this.classList.add('active');
            const categoryId = this.getAttribute('data-category') + '-category';
            document.getElementById(categoryId).classList.add('active');
        });
    });
    
    // По умолчанию активируем первую категорию
    if (categoryBtns.length > 0) {
        categoryBtns[0].click();
    }
});