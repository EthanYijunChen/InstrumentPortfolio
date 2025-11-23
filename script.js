let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

function rotate() {
    const left = document.querySelector('.left');
    const center = document.querySelector('.center');
    const right = document.querySelector('.right');

    index = (index + 1) % images.length;

    left.src = `images/${images[(index - 1 + images.length) % images.length]}`;
    center.src = `images/${images[index]}`;
    right.src = `images/${images[(index + 1) % images.length]}`;

    left.className = 'side left';
    center.className = 'center';
    right.className = 'side right';
}

setInterval(rotate, 3000);
