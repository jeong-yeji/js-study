const images = document.querySelectorAll('#container > img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
var current = 0;

function showImage(n) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[n].style.display = 'block';
}

function prevImage() {
    if (current > 0) {
        current--;
    } else {
        current = images.length - 1;
    }
    showImage(current);
}

function nextImage() {
    if (current < images.length - 1) {
        current++;
    } else {
        current = 0;
    }
    showImage(current);
}

showImage(current);
prev.onclick = prevImage;
next.onclick = nextImage;
