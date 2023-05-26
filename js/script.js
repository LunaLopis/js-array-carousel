
const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
];

// Retrieve elements and define variables that contain the images
const carousel = document.querySelector('.carousel');
const thumbs = document.querySelector('.thumbs-content');
// VARIABLES
let carouselContent = "";
let thumbsContent = "";


// increments and decrements to move between images
const prev = document.querySelector('.prev-button');
const next = document.querySelector('.next-button');

// Define the index of the active image in the array
let activecarousel = 0;

// To fill with HTML images, remove the active class from the HTML div because it is not dynamic
for (let i = 0; i < images.length; i++) {
    carouselContent += `<div class="carousel-image"> <img src="./${images[i]}" alt="image"> </div> `;
    thumbsContent += `<div class="thumb"> <img src="./${images[i]}" alt="image"> </div> `;
}

carousel.innerHTML = carouselContent;
thumbs.innerHTML = thumbsContent;

// Apply the active class to the element 
document.getElementsByClassName('carousel-image')[activecarousel].classList.add('active');
document.getElementsByClassName('thumb')[activecarousel].classList.add('active');

prev.addEventListener('click', function() {
    if (activecarousel === 0) {
        activecarousel = images.length - 1;
    } else {
        activecarousel--;
    }
    document.querySelector('.carousel-image.active').classList.remove('active');
    document.getElementsByClassName('carousel-image')[activecarousel].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activecarousel].classList.add('active');
});

next.addEventListener('click', function() {
    if (activecarousel === images.length - 1) {
        activecarousel = 0;
    } else {
        activecarousel++;
    }
    document.querySelector('.carousel-image.active').classList.remove('active');
    document.getElementsByClassName('carousel-image')[activecarousel].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activecarousel].classList.add('active');
});
