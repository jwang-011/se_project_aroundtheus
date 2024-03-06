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
const profileEditCloseBtn = profileEditModal.querySelector(".modal__close");
const profileTitle = document.querySelector("#js-profile-title");
const profileSubtitle = document.querySelector("#js-profile-subtitle");
const profileTitleInput = document.querySelector("#js-profile-title-input");
const profileSubtitleInput = document.querySelector(
  "#js-profile-subtitle-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");

const addImageBtn = document.querySelector("#js-add-image-button");
const addImageModal = document.querySelector("#js-add-modal");
const addImageCloseBtn = addImageModal.querySelector(".modal__close");
const addImageTitle = addImageModal.querySelector("#js-place-title-input");
const addImageURL = addImageModal.querySelector("#js-add-URL-input");
const addImageForm = addImageModal.querySelector(".modal__form");

const imageModal = document.querySelector("#js-image-modal");
const imageCloseBtn = imageModal.querySelector(".modal__close");

const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#js-card-template").content.firstElementChild;

// Functions //

// function togglePopup(modal) {
//   modal.classList.toggle("modal_opened");
// }

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  const modalImageEl = imageModal.querySelector(".modal__image");
  const modalCaption = imageModal.querySelector(".modal__caption");

  //EVENT LISTENER FOR LIKE

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  //EVENT LISTENER FOR DELETE

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  //EVENT LISTENER FOR IMAGE

  cardImageEl.addEventListener("click", () => {
    modalImageEl.src = data.link;
    modalImageEl.alt = `Photo of ${data.name}`;
    modalCaption.textContent = data.name;
    openPopup(imageModal);
  });

  cardImageEl.setAttribute("src", data.link);
  cardImageEl.setAttribute("alt", data.name);
  cardTitleEl.textContent = data.name;

  return cardElement;
}

function renderCard() {
  const cardElement = getCardElement(data);
  cardListEl.prepend(cardElement);
}

function fillProfileForm() {
  profileTitleInput.value = profileTitle.innerText;
  profileSubtitleInput.value = profileSubtitle.textContent;
}

function openEditProfileModal() {
  fillProfileForm();
  openPopup(profileEditModal);
}

// Event Handlers //

function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closePopup(profileEditModal);
}

function handleImageSubmit(evt) {
  evt.preventDefault();
  const imageTitle = addImageTitle.value;
  const imageURL = addImageURL.value;
  renderCard({
    name: imageTitle,
    link: imageURL,
  });
  closePopup(addImageModal);
  evt.target.reset();
}

// Event Listeners  //

profileEditBtn.addEventListener("click", () => {
  openEditProfileModal();
});

profileEditCloseBtn.addEventListener("click", () =>
  closePopup(profileEditModal)
);
profileEditForm.addEventListener("submit", handleProfileSubmit);

addImageBtn.addEventListener("click", () => openPopup(addImageModal));

addImageCloseBtn.addEventListener("click", () => closePopup(addImageModal));
addImageForm.addEventListener("submit", handleImageSubmit);

imageCloseBtn.addEventListener("click", () => closePopup(imageModal));

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardListEl.prepend(cardElement);
});
