import './menu-toggler-main.js'
// import { data } from './utilities-data.js';
// pets per page

const data = [
  {
    "name": "Jennifer",
    "img": "./assets/pets/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "./assets/pets/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "./assets/pets/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "./assets/pets/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "./assets/pets/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "./assets/pets/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "./assets/pets/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "./assets/pets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Charly is 8 years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]


let pageCardsNumber;
if (window.innerWidth >= 1280) {
  pageCardsNumber = 8;
} else if (window.innerWidth >= 767.9 && window.innerWidth <= 1280) {
  pageCardsNumber = 8;
} else if (window.innerWidth <= 767.9) {
  pageCardsNumber = 8;
}

let newData;
export const createNewData = function () {
  newData = []
for (let i = 0; i < data.length; i++) {
  newData.push(data[i])
}}

//

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) => {
  return array[getRandomPositiveInteger(0, array.length - 1)]
}

createNewData();
let getUniqueCardFromData = function() {
  let arrayIndex = getRandomArrayElement(newData);
  let deleteIndex = newData.indexOf(arrayIndex)

  newData.splice(deleteIndex, 1);
  return(arrayIndex)
}

const createCard = () => {
  let cardData = getUniqueCardFromData();

  return {
    name: cardData.name,
    img: cardData.img,
    type: cardData.type,
    breed: cardData.breed,
    description: cardData.description,
    age: cardData.age,
    inoculations: cardData.inoculations,
    diseases: cardData.diseases,
    parasites: cardData.parasites
    // url: '' + `Cards/${getPhotoId()}.jpg`,
    // description: '' + getRandomArrayElement(descriptionArray),
    // likes: '' + getRandomPositiveInteger(15, 200),
    // comments: getCommentsFunctionResult,
    // commentsNumber: getCommentsFunctionResult.length,
  }
  }
 

  const pagePetList = document.querySelector('.pets__list');
  let createCards = () => Array.from({length: pageCardsNumber}, createCard);

  const randomGeneratedCards = createCards();

  randomGeneratedCards.forEach((el) => {
  const randomCard = document.createElement('div')
  randomCard.classList.add('pet-card')
  randomCard.innerHTML = `
  <img src="${el.img}" alt="Picture of ${el.name}">
  <h3 class="our-friends__card-name">${el.name}</h3>
  <button class="button secondary-button">Learn more</button>
  `
  pagePetList.appendChild(randomCard)
});

const petCards = document.querySelectorAll('.pet-card');




// pop-up modal window for pets

const petPopup = document.querySelector('.pet-popup');

let popupCloseButton;

petCards.forEach((el, index) => {
  el.addEventListener('click', () => {
    petPopup.classList.add('active');
    document.body.classList.add('body__modal-open')
    document.body.classList.add('modal-open')
    
    
    petPopup.innerHTML = `
    <img class="pet-popup__img" src="${randomGeneratedCards[index].img}" alt="${index.name}">
              
            <div class="pet-popup__text-container">
              <h3 class="pet-popup__title">${randomGeneratedCards[index].name}</h3>
              <h4 class="pet-popup__subtitle">${randomGeneratedCards[index].breed}</h4>
              <p class="pet-popup__desctiption">${randomGeneratedCards[index].description}</p>
      
              <ul class="pet-popup__details">
                <li class="pet-popup__details-item">
                  <span class="details-item__title">Age:</span>
                  <span class="details-item__description">${randomGeneratedCards[index].age}</span>
                </li>
                <li class="pet-popup__details-item">
                  <span class="details-item__title">Inoculations:</span>
                  <span class="details-item__description">${randomGeneratedCards[index].inoculations}</span>
                </li>
                <li class="pet-popup__details-item">
                  <span class="details-item__title">Diseases:</span>
                  <span class="details-item__description">${randomGeneratedCards[index].diseases}</span>
                </li>
                <li class="pet-popup__details-item">
                  <span class="details-item__title">Parasites:</span>
                  <span class="details-item__description">${randomGeneratedCards[index].parasites}</span>
                </li>
              </ul>
            </div>
      
            <button class="pet-popup__close-button">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
                </svg>
                
            </button>
    `
    popupCloseButton = document.querySelector('.pet-popup__close-button');
    popupCloseButton.addEventListener('click', (e) => {
      petPopup.classList.remove('active')
      document.body.classList.remove('body__modal-open')
      document.body.classList.remove('modal-open')
  })

  })
  
})

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('inner-main') || evt.target.classList.contains('pets__list') || evt.target.classList.contains('wrapper')) {
    document.body.classList.remove('body__modal-open')
    document.body.classList.remove('modal-open')
    petPopup.classList.remove('active')
  }
  else return
})

// pagination
const firstPage = document.querySelector('.page-slider__super-prev')
const lastPage = document.querySelector('.page-slider__super-next')
const prevPage = document.querySelector('.page-slider__prev')
const nextPage = document.querySelector('.page-slider__next')
const currentPageButton = document.querySelector('.page-slider__page-number')

let currentPage = 1;

currentPageButton.textContent = currentPage;



nextPage.addEventListener('click', () => {
  currentPage++
  currentPageButton.textContent = currentPage;
  if (currentPage > 1) {
    firstPage.removeAttribute('disabled')
    prevPage.removeAttribute('disabled')
  }
  if (window.innerWidth >= 1280 && currentPage == 8) {
    nextPage.setAttribute('disabled', '')
    lastPage.setAttribute('disabled', '')
  } 
  if (window.innerWidth >= 767.9 && window.innerWidth <= 1280 && currentPage == 12) {
    nextPage.setAttribute('disabled', '')
    lastPage.setAttribute('disabled', '')
  } 
  if (window.innerWidth <= 767.9 && currentPage == 16) {
    currentPage = 16;
    nextPage.setAttribute('disabled', '')
    lastPage.setAttribute('disabled', '')
  }
  pagePetList.innerHTML = ''
  createNewData()
  const randomGeneratedCards = createCards();

  randomGeneratedCards.forEach((el) => {
  const randomCard = document.createElement('div')
  randomCard.classList.add('pet-card')
  randomCard.innerHTML = `
  <img src="${el.img}" alt="Picture of ${el.name}">
  <h3 class="our-friends__card-name">${el.name}</h3>
  <button class="button secondary-button">Learn more</button>
  `
  pagePetList.appendChild(randomCard)
})
})

lastPage.addEventListener('click', () => {

  if (window.innerWidth >= 1280) {
    currentPage = 8;
    nextPage.setAttribute('disabled', '')
    lastPage.setAttribute('disabled', '')
  } else if (window.innerWidth >= 767.9 && window.innerWidth <= 1280) {
    currentPage = 12;
    nextPage.setAttribute('disabled', '')
    lastPage.setAttribute('disabled', '')
  } else if (window.innerWidth <= 767.9) {
    currentPage = 16;
    nextPage.setAttribute('disabled', '')
    lastPage.setAttribute('disabled', '')
  }
  currentPageButton.textContent = currentPage;
  if (currentPage > 1) {
    firstPage.removeAttribute('disabled')
    prevPage.removeAttribute('disabled')
  }
  pagePetList.innerHTML = ''
  createNewData()
  const randomGeneratedCards = createCards();

  randomGeneratedCards.forEach((el) => {
  const randomCard = document.createElement('div')
  randomCard.classList.add('pet-card')
  randomCard.innerHTML = `
  <img src="${el.img}" alt="Picture of ${el.name}">
  <h3 class="our-friends__card-name">${el.name}</h3>
  <button class="button secondary-button">Learn more</button>
  `
  pagePetList.appendChild(randomCard)
})
})

prevPage.addEventListener('click', () => {
  currentPage--
  currentPageButton.textContent = currentPage;
  if (currentPage == 1) {
    firstPage.setAttribute('disabled', '')
    prevPage.setAttribute('disabled', '')
  }
  lastPage.removeAttribute('disabled')
  nextPage.removeAttribute('disabled')
  pagePetList.innerHTML = ''
  createNewData()
  const randomGeneratedCards = createCards();

  randomGeneratedCards.forEach((el) => {
  const randomCard = document.createElement('div')
  randomCard.classList.add('pet-card')
  randomCard.innerHTML = `
  <img src="${el.img}" alt="Picture of ${el.name}">
  <h3 class="our-friends__card-name">${el.name}</h3>
  <button class="button secondary-button">Learn more</button>
  `
  pagePetList.appendChild(randomCard)
})
})

firstPage.addEventListener('click', () => {
  currentPage = 1;
  currentPageButton.textContent = currentPage;
  firstPage.setAttribute('disabled', '')
  prevPage.setAttribute('disabled', '')
  lastPage.removeAttribute('disabled')
  nextPage.removeAttribute('disabled')

  pagePetList.innerHTML = ''
  createNewData()
  const randomGeneratedCards = createCards();

  randomGeneratedCards.forEach((el) => {
  const randomCard = document.createElement('div')
  randomCard.classList.add('pet-card')
  randomCard.innerHTML = `
  <img src="${el.img}" alt="Picture of ${el.name}">
  <h3 class="our-friends__card-name">${el.name}</h3>
  <button class="button secondary-button">Learn more</button>
  `
  pagePetList.appendChild(randomCard)
})
})