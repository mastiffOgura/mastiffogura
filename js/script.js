// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.2)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// 動画のノイズオーバーレイを追加
document.addEventListener('DOMContentLoaded', function () {
    const heroVideo = document.querySelector('.hero-video');
    const overlay = document.createElement('div');
    overlay.className = 'noise-overlay';
    heroVideo.parentNode.insertBefore(overlay, heroVideo.nextSibling);
});