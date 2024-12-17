const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightboxContent.src = e.target.src;
        lightbox.style.display = 'flex';
    }
});

function closeLightbox() {
    lightbox.style.display = 'none';
}
