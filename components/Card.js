export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }
  _setEventListeners() {
    this._cardImageElement.querySelector(".card__image");
    this._cardImageElement.addEventListener("click", () => {
      this._handleImageClick();
    });

    this._cardImageElement.querySelector(".card__delete-button");
    this._cardImageElement.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._cardImageElement.querySelector(".card__like-button");
    this._cardImageElement.addEventListener("click", () => {
      this._handleLikeButton();
    });
    return this._cardElement;
  }
}
