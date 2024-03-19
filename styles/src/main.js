const addToCartBtn = document.querySelectorAll(".add-toCart_Btn");
const foodCards = document.querySelectorAll(".food-card");
const formCloseIcon = document.querySelector(".gg-arrow-left");
const mainComponent = document.querySelector(".main");

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
});

var bannerSwiper = new Swiper(".banner", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

const ratingStars = [
  "kitchenStar",
  "interiorStar",
  "serviceStar",
  "atmosphereStar",
];

ratingStars.forEach((ratingName) => {
  document
    .querySelectorAll(`.${ratingName}`)
    .forEach((element, index, parent) => {
      element.addEventListener("click", () => {
        parent.forEach((element, starIndex) => {
          if (starIndex <= index) {
            element.classList.remove("fa-regular");
            element.classList.add("fa-solid");
          } else {
            element.classList.remove("fa-solid");
            element.classList.add("fa-regular");
          }
        });
      });
    });
});

document.querySelector(".modal").addEventListener("click", (event) => {
  event.target.style.display = "none";
  document.querySelectorAll(".fa-star").forEach((eachStar) => {
    eachStar.classList.remove("fa-solid");
    eachStar.classList.add("fa-regular");
  });
});

document.querySelector(".feedback-inner").addEventListener("click", (event) => {
  event.stopPropagation();
});

document.querySelector(".feedbackBtn").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
});
