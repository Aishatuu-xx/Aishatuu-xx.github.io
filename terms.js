document.addEventListener("DOMContentLoaded", function() {
    const termItems = document.querySelectorAll('.term-item');

    termItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 300); // Delay for each item
    });
});
