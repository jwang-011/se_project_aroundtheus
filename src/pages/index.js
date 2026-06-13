import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {
  initialCards,
  validationSettings,
} from "../utils/constants.js";

// Elements //
const profileEditBtn = document.querySelector("#js-profile-edit-button");
// const profileEditModal = document.querySelector("#js-profile-edit-modal");
const profilePopup = new PopupWithForm("#js-profile-edit-modal", (data) => {
  userInfo.setUserInfo({
    title: data.title,
    subtitle: data.description,
  });

  profilePopup.close();
});
profilePopup.setEventListeners();

const userInfo = new UserInfo({
  titleSelector: "#js-profile-title",
  subtitleSelector: "#js-profile-subtitle",
});
// const profileTitle = document.querySelector("#js-profile-title");
// const profileSubtitle = document.querySelector("#js-profile-subtitle");
const profileTitleInput = document.querySelector("#js-profile-title-input");
const profileSubtitleInput = document.querySelector(
  "#js-profile-subtitle-input"
);
const profileEditForm = document.forms["profile-form"];

const addImageBtn = document.querySelector("#js-add-image-button");
const addImageModal = document.querySelector("#js-add-modal");
// Project 8: Since the Popup now controls functions of open/closing, we should change this to create a new object instead of finding the existing HTML.
// const addImagePopup = new Popup("#js-add-modal");
const addImagePopup = new PopupWithForm("#js-add-modal", (data) => {
  const cardElement = createCard({
    name: data.title,
    link: data.url,
  });

  cardSection.addItem(cardElement);
  addImagePopup.close();
});
addImagePopup.setEventListeners();

const imagePopup = new PopupWithImage("#js-image-modal");
imagePopup.setEventListeners();



const addImageTitle = addImageModal.querySelector("#js-place-title-input");
const addImageURL = addImageModal.querySelector("#js-add-URL-input");
const addImageForm = document.forms["place-form"];

// Project 8: The new PopupWithImage will call and add now. Removes this:
// const imageModal = document.querySelector("#js-image-modal");
// const cardListEl = document.querySelector(".cards__list");

// const modalImageEl = imageModal.querySelector(".modal__image");
// const modalCaption = imageModal.querySelector(".modal__caption");

// Functions //

// Project 8: We will be transferring these functions to the Popup.js & modifying them.
// function openPopup(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeModalOnEscape);
//   modal.addEventListener("mousedown", closeModalOnOverlayClick);
// }

// function closePopup(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeModalOnEscape);
//   modal.removeEventListener("mousedown", closeModalOnOverlayClick);
// }



// !~Project 7~! this function should no longer be used, as it is replaced by the Card class (Card.js)
// function getCardElement(data) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImageEl = cardElement.querySelector(".card__image");
//   const cardTitleEl = cardElement.querySelector(".card__title");
//   const likeButton = cardElement.querySelector(".card__like-button");
//   const cardDeleteBtn = cardElement.querySelector(".card__delete-button");


  //EVENT LISTENER FOR IMAGE
//Moved to PopupWithImage.js
// function handleImageClick(name, link) {
//   modalImageEl.src = link;
//   modalImageEl.alt = `Photo of ${name}`;
//   modalCaption.textContent = name;
//   imagePopup.open();
// }
//   cardImageEl.addEventListener("click", () => {
//     modalImageEl.src = data.link;
//     modalImageEl.alt = `Photo of ${data.name}`;
//     modalCaption.textContent = data.name;
//     openPopup(imageModal);
//   });

//   cardImageEl.setAttribute("src", data.link);
//   cardImageEl.setAttribute("alt", data.name);
//   cardTitleEl.textContent = data.name;

//   return cardElement;
// }

function createCard(data) {
//   ! Project 8 will update the createCard to use Section.
  const cardInstance = new Card(data, ".card-template", handleImageClick);
  return cardInstance.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (items) => {
      const cardElement = createCard(items);
      cardSection.addItem(cardElement);
    },
  },
  ".cards__list"
);

//   const cardInstance = new Card(data, ".card-template", handleImageClick);
//   return cardInstance.generateCard();
// }

// Project 8: The new Section.renderItems function will call and add now. Removes this.
// function renderCard(data) {
//   const cardElement = createCard(data);
//   cardListEl.prepend(cardElement);
// }

function openEditProfileModal() {
  const currentUserInfo = userInfo.getUserInfo();

  profileTitleInput.value = currentUserInfo.title;
  profileSubtitleInput.value = currentUserInfo.subtitle;

  profileFormValidator.resetValidation();
  profilePopup.open();
}
profileEditBtn.addEventListener("click", openEditProfileModal);

// Event Handlers //
function handleImageClick(name, link) {
  imagePopup.open({ name, link });
}

// Event Listeners  //

profileEditBtn.addEventListener("click", () => {
  profilePopup.open();
});

// Project 8: Moving this to Popup.js
// // Find all close buttons
// const closeButtons = document.querySelectorAll('.modal__close');

// closeButtons.forEach((button) => {
//   // Find the closest popup only once
//   const popup = button.closest('.modal');
//   // Set the listener
//   button.addEventListener('click', () => closePopup(popup));
// });

addImageBtn.addEventListener("click", () => {
  placeFormValidator.resetValidation();
  addImagePopup.open();
});

// Project 8: Rendering cards are now in the Section.js. Uses cardSection to call renderItems().
// initialCards.forEach(renderCard);
cardSection.renderItems();

// Project 8: We should move this to Popup.js as well.
// Project 6 
// const closeModalOnEscape = (evt) => {
//   if (evt.key === "Escape") {
//     const openModal = document.querySelector(".modal_opened");
//     closePopup(openModal);
// }
// }

// const closeModalOnOverlayClick = (evt) => {
// if (evt.target.classList.contains("modal_opened")) {
//   closePopup(evt.target);
// }
// }

// Project 7 uses validaton classes
const profileFormValidator = new FormValidator(validationSettings, profileEditForm);
profileFormValidator.enableValidation();

const placeFormValidator = new FormValidator(validationSettings, addImageForm);
placeFormValidator.enableValidation();


// Project 8: Opening Popup is changed, no longer uses openPopup.
// addImageBtn.addEventListener("click", () => {
//   placeFormValidator.resetValidation();
//   openPopup(addImageModal);
// });