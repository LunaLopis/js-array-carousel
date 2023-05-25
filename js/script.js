
let images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',

  ];
  
  let carouselElement= document.querySelector('.carousel-image');
  let carouselContent= "";
  for (let i = 0; i < images.length; i++) {
    let currentImage= images[i];
    carouselContent+= `
    <div class="carousel-image">
    <img src="${currentImage}" />
    </div>
    `
  }

  carouselElement.innerHTML= carouselContent;
   let active_element= 0;
  let allImages= document.getElementsByClassName('carousel-image');
  allImages[active_element].classList.add('active');
  let prevButton= document.querySelector('.prev-Button');
  let nextButton= document.querySelector('.next-button');


  nextButton.addEventListener('click', function() {
    if(active_element< (images-length - 1)) {
        allImages[active_element].classList.remove('active');
        active_element++;
    }

    allImages[active_element].classList.add('active');
  })

  prevButton.addEventListener('click', function (){
    if(active_element >0) {
        allImages[active_element].classList.remove('active');
        active_element--;
        allImages[active_element].classList.add('active');
    }
  })




