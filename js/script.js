const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const carouselDOMElement = document.querySelector(".carousel");
const thumbnailDOMElement = document.querySelector(".thumbnail");

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

images.forEach((slide) => {
  const imgSrc = slide.image;
  const title = slide.title;
  const text = slide.text;
  const html = `
    <div class="slide">
              <img class="carousel-image" src="./${imgSrc}" alt="image" />
              <div class="slide-body">
                <h3 class="slide-title">${title}</h3>
                <p class="slide-sescription">
                  ${text}
                </p>
              </div>
            </div>
    `;

  const htmlthumb = `<img class="thumb" src="./${imgSrc}" alt="thumb" />`;

  carouselDOMElement.innerHTML += html;
  thumbnailDOMElement.innerHTML += htmlthumb;
});

const slidesDOMElements = document.querySelectorAll(".slide");

const thumbsDOMElements = document.querySelectorAll(".thumb");

let currentIndex = 0;

let currentSlide = slidesDOMElements[currentIndex];
let currentthumb = thumbsDOMElements[currentIndex];

currentSlide.classList.add("active");
currentthumb.classList.add("active");

setInterval(scrollSlideNext, 3000);

btnNext.addEventListener("click", scrollSlideNext);

btnPrev.addEventListener("click", scrollSlidePrev);

for (let i = 0; i < thumbsDOMElements.length; i++) {
  const thumb = thumbsDOMElements[i];

  thumb.addEventListener("click", () => {
    const activeSlideElement = slidesDOMElements[currentIndex];
    const activethumbElement = thumbsDOMElements[currentIndex];
    activeSlideElement.classList.remove("active");
    activethumbElement.classList.remove("active");

    currentIndex = i;

    const nextSlideElement = slidesDOMElements[currentIndex];
    const nextthumbElement = thumbsDOMElements[currentIndex];
    nextSlideElement.classList.add("active");
    nextthumbElement.classList.add("active");
  });
}

function scrollSlideNext() {
  const activeSlideElement = slidesDOMElements[currentIndex];
  const activethumbElement = thumbsDOMElements[currentIndex];
  activeSlideElement.classList.remove("active");
  activethumbElement.classList.remove("active");

  if (currentIndex === slidesDOMElements.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  const nextSlideElement = slidesDOMElements[currentIndex];
  const nextthumbElement = thumbsDOMElements[currentIndex];
  nextSlideElement.classList.add("active");
  nextthumbElement.classList.add("active");
}

function scrollSlidePrev() {
  const activeSlideElement = slidesDOMElements[currentIndex];
  const activethumbElement = thumbsDOMElements[currentIndex];
  activeSlideElement.classList.remove("active");
  activethumbElement.classList.remove("active");

  if (currentIndex === 0) {
    currentIndex = slidesDOMElements.length - 1;
  } else {
    currentIndex--;
  }

  const nextSlideElement = slidesDOMElements[currentIndex];
  const nextthumbElement = thumbsDOMElements[currentIndex];
  nextSlideElement.classList.add("active");
  nextthumbElement.classList.add("active");
}
