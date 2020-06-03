const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const images = document.querySelector(".images");

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

let counter = 0;

function nextSlide(){
  images.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:300, easing:"ease-in"});
  if(counter === 11){
    counter = -1;
  }else{
    images.style.backgroundImage = `url(img/img-${counter}.jpg`;
  }
  counter++;
}

function prevSlide(){
images.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:300, easing:"ease-in"});
  if( counter ===0){
    counter = 11;
  }else{
    images.style.backgroundImage = `url(img/img-${counter}.jpg`;
  }
counter--;
}
