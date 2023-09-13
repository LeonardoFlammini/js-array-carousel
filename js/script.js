const imagesArray = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp"
]
const imagesContainer = document.querySelector('.images-lf');
const nextButton = document.querySelector('.bottom-lf');
const prevButton = document.querySelector('.up-lf');
const thumbNail = document.querySelector('.thumb-nail-lf');

let counterImg = 0;


imagesContainer.innerHTML = '';
thumbNail.innerHTML = '';

for(let i = 0; i < imagesArray.length; i++){
  const img = imagesArray[i];
  imagesContainer.innerHTML += `
  <img src="${img}" class="item d-none" alt="0${i + 1}" >
  `;
  thumbNail.innerHTML += `
  <div class="img-card-lf">
    <img src="${img}" alt="${i + 1}">
  </div>
  `;
}

const itemsCollection = document.getElementsByClassName('item');
const thumbCollection = document.getElementsByClassName('img-card-lf');

itemsCollection[counterImg].classList.remove('d-none');
thumbCollection[counterImg].classList.add('active-lf');

nextButton.addEventListener('click', nextImg);
prevButton.addEventListener('click', prevImg);

prevButton.classList.add('d-none');


function nextImg (){
  // console.log('next');
  prevButton.classList.remove('d-none');

  itemsCollection[counterImg].classList.add('d-none');
  thumbCollection[counterImg].classList.remove('active-lf');
  counterImg++;
  thumbCollection[counterImg].classList.add('active-lf');
  itemsCollection[counterImg].classList.remove('d-none');

  if(counterImg === itemsCollection.length - 1){
    nextButton.classList.add('d-none');
  }
}

function prevImg () {
  nextButton.classList.remove('d-none');

  itemsCollection[counterImg].classList.add('d-none');
  thumbCollection[counterImg].classList.remove('active-lf');
  counterImg--;
  itemsCollection[counterImg].classList.remove('d-none');
  thumbCollection[counterImg].classList.add('active-lf');

  if(counterImg === 0){
    prevButton.classList.add('d-none');
  }
}



