// 1. Animasi Tombol Saat Diklik
const animateButton = document.getElementById('animateButton');

animateButton.addEventListener('click', () => {
    animateButton.style.backgroundColor = '#28A745';
    animateButton.style.transform = 'scale(1.1)';

    setTimeout(() => {
        animateButton.style.backgroundColor = '#007BFF';
        animateButton.style.transform = 'scale(1)';
    }, 500);
});

// 2. Animasi Saat Hover
const hoverBox = document.getElementById('hoverBox');

hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.transform = 'rotate(15deg)';
    hoverBox.style.backgroundColor = '#DC3545';
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.transform = 'rotate(0deg)';
    hoverBox.style.backgroundColor = '#FFC107';
});

// 3. Animasi Scroll (Reveal Effect)
const revealSections = document.querySelectorAll('.reveal-section');

const checkScroll = () => {
    revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// 4. Animasi dengan GSAP (Jika GSAP digunakan)
// Pastikan Anda telah menambahkan script GSAP di <head>:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>

if (typeof gsap !== 'undefined') {
    gsap.from("#animateBox", {
        duration: 2,
        x: -200, // Bergerak dari kiri ke kanan
        opacity: 0, // Muncul dari transparan
        rotation: 360, // Berputar 360 derajat
        ease: "power2.out" // Efek easing
    });
}
