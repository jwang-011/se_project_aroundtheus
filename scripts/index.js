const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
  {
    name: "Isles of Man",
    link: "https://source.unsplash.com/lUb9ENbDFlA",
  },
  {
    name: "Volgograd",
    link: "https://source.unsplash.com/OejrcVZfl60",
  },
  {
    name: "Candyland",
    link: "https://source.unsplash.com/dnMLdR814aA",
  },
];

// Elements //

const profileEditBtn = document.querySelector("#js-profile-edit-button");
const profileEditModal = document.querySelector("#js-profile-edit-modal");
const profileEditCloseBtn = document.querySelector(
  "#js-edit-modal-close-button"
);
const profileEditSaveBtn = document.querySelector("#js-profile-edit-save");
const profileTitle = document.querySelector("#js-profile-title");
const profileSubtitle = document.querySelector("#js-profile-subtitle");
const profileTitleInput = document.querySelector("#js-profile-title-input");
const profileSubtitleInput = document.querySelector(
  "#js-profile-subtitle-input"
);

const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#js-card-template").content.firstElementChild;

// Functions //

function closePopup() {
  profileEditModal.classList.toggle("modal__opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardImageEl.setAttribute("src", data.link);
  cardImageEl.setAttribute("alt", data.name);
  cardTitleEl.textContent = data.name;
  return cardElement;
}

// Event Handlers //

function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
}

// Event Listeners  //

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.innerText;
  profileSubtitleInput.value = profileSubtitle.textContent;
  profileEditModal.classList.toggle("modal__opened");
});

profileEditCloseBtn.addEventListener("click", closePopup);

profileEditSaveBtn.addEventListener("click", handleProfileSubmit);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardListEl.prepend(cardElement);
});
