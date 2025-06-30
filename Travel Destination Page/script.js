// Add a little interactive animation to the attractions list

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach((li, idx) => {
        li.addEventListener('click', function() {
            li.classList.add('selected');
            setTimeout(() => li.classList.remove('selected'), 800);
        });
        // Animate in
        li.style.opacity = 0;
        li.style.transform = 'translateY(30px)';
        setTimeout(() => {
            li.style.transition = 'all 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
            li.style.opacity = 1;
            li.style.transform = 'translateY(0)';
        }, 200 + idx * 120);
    });

    // Map container animation
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        mapContainer.style.opacity = 0;
        mapContainer.style.transform = 'translateY(40px) scale(0.97)';
        setTimeout(() => {
            mapContainer.style.transition = 'all 1s cubic-bezier(.68,-0.55,.27,1.55)';
            mapContainer.style.opacity = 1;
            mapContainer.style.transform = 'translateY(0) scale(1)';
        }, 900);
        mapContainer.addEventListener('mouseenter', () => {
            mapContainer.style.boxShadow = '0 8px 32px #fda08599';
        });
        mapContainer.addEventListener('mouseleave', () => {
            mapContainer.style.boxShadow = '';
        });
    }
});

// Add a little effect for the image
window.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('img');
    if (img) {
        img.style.opacity = 0;
        img.style.transform = 'scale(0.95)';
        setTimeout(() => {
            img.style.transition = 'all 1.2s cubic-bezier(.68,-0.55,.27,1.55)';
            img.style.opacity = 1;
            img.style.transform = 'scale(1)';
        }, 300);
    }
});

// Add a style for selected list item
const style = document.createElement('style');
style.innerHTML = `
li.selected {
    background: #fffbe6 !important;
    color: #f76d6d !important;
    box-shadow: 0 0 0 4px #fda08533;
    transform: scale(1.08) !important;
}`;
document.head.appendChild(style);
