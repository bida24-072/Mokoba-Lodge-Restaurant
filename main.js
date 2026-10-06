/* ============================================
   MOKOBA LODGE — Interactions
============================================ */

/* ============================================
   HOMEPAGE AUTO SLIDESHOW
============================================ */
function initHeroSlideshow() {
    const container = document.querySelector('.hero-slideshow');
    if (!container) return;

    const slides = container.querySelectorAll('.hero-slide');
    const dots = container.querySelectorAll('.hero-dot');
    const prevBtn = container.querySelector('.hero-prev');
    const nextBtn = container.querySelector('.hero-next');
    if (slides.length === 0) return;

    let current = 0;
    let interval;
    const SLIDE_DURATION = 6000;

    function goTo(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        current = index;
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }
    function start() { stop(); interval = setInterval(next, SLIDE_DURATION); }
    function stop() { if (interval) clearInterval(interval); }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { goTo(i); start(); });
    });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); start(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); start(); });

    container.addEventListener('mouseenter', stop);
    container.addEventListener('mouseleave', start);

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop(); else start();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { next(); start(); }
        if (e.key === 'ArrowLeft') { prev(); start(); }
    });

    start();
}

/* ============================================
   VIDEO BACKGROUND FALLBACK
   If the video fails to load, we keep the poster image
============================================ */
function initVideoBackgrounds() {
    const videos = document.querySelectorAll('.video-hero video');
    videos.forEach(video => {
        // Force play (some browsers block autoplay unless muted)
        video.muted = true;
        video.playsInline = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay failed — hide the video so poster shows
                video.style.display = 'none';
            });
        }
        // If the video errors out, hide it
        video.addEventListener('error', () => { video.style.display = 'none'; });
    });
}

/* ============================================
   BOOKING BAR (Homepage) — check availability
============================================ */
function checkAvailability(e) {
    e.preventDefault();
    const checkin = document.getElementById('checkin')?.value;
    const checkout = document.getElementById('checkout')?.value;
    if (!checkin || !checkout) {
        alert('Please select both check-in and check-out dates.');
        return;
    }
    if (new Date(checkin) >= new Date(checkout)) {
        alert('Check-out date must be after check-in date.');
        return;
    }
    window.location.href = 'book.html';
}

/* ============================================
   ACCOMMODATION / EXPERIENCES FILTER
============================================ */
function filterCards(category, btn) {
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const cards = document.querySelectorAll('[data-category]');
    cards.forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.style.display = match ? 'flex' : 'none';
    });
}

/* ============================================
   MENU TABS (Dining page)
============================================ */
function switchMenu(category, btn) {
    document.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.menu-category').forEach(c => c.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const target = document.getElementById('menu-' + category);
    if (target) target.classList.add('active');
}

/* ============================================
   FAQ ACCORDION
============================================ */
function toggleFaq(button) {
    const item = button.closest('.faq-item');
    if (!item) return;
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    // Open this one if it was closed
    if (!isOpen) item.classList.add('open');
}

/* ============================================
   FORMS — Booking, Contact, Dietary
============================================ */
function submitBooking(e) {
    e.preventDefault();
    const name = document.getElementById('book-name')?.value || 'Guest';
    alert(`Thank you, ${name}!\n\nYour booking request has been received. We will confirm availability via email within 24 hours.\n\n— Mokoba Lodge & Restaurant`);
    e.target.reset();
}

function submitContact(e) {
    e.preventDefault();
    alert(`Thank you for reaching out to Mokoba Lodge!\n\nWe'll get back to you within 24 hours.\n\nFor urgent enquiries, WhatsApp us: +267 71 234 567`);
    e.target.reset();
}

function submitActivity(e) {
    e.preventDefault();
    alert(`Your activity request has been received. We'll confirm availability shortly via WhatsApp.`);
    e.target.reset();
}

/* ============================================
   SMOOTH SCROLL FOR INTERNAL LINKS
============================================ */
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

/* ============================================
   SET MIN DATE ON BOOKING INPUTS
============================================ */
function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.min = today;
    });
}

/* ============================================
   INIT
============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
    initVideoBackgrounds();
    setMinDates();
});
