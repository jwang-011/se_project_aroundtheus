class Card {
    constructor(data, cardSelector, handleImageClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick; 
    }
    // this method will get the card template in the html...
    _getTemplate() {
        const cardElement = document
          .querySelector(this._cardSelector)
          .content.querySelector(".card")
          .cloneNode(true);
    
        return cardElement;
      }
      
    generateCard() {
      this._element = this._getTemplate();
      this._cardImageElement = this._element.querySelector(".card__image");
      this._titleElement = this._element.querySelector(".card__title");
      this._likeButton = this._element.querySelector(".card__like-button");
      this._deleteButton = this._element.querySelector(".card__delete-button");
      this._cardImageElement.src = this._link;
      this._cardImageElement.alt = `Photo of ${this._name}`;
      this._titleElement.textContent = this._name;
    
      this._setEventListeners();

        return this._element; 
    }

    _setEventListeners() {
        this._likeButton.addEventListener("click", () => this._handleLikeClick());
        this._deleteButton.addEventListener("click", () => this._handleDeleteClick());
        this._cardImageElement.addEventListener("click", () => {
          this._handleImageClick(this._name, this._link);
        });
      }

    // Like / Delete private handlers
    _handleLikeClick() {
        this._likeButton.classList.toggle("card__like-button_active");
      }
    
    _handleDeleteClick() {
        this._element.remove();
      }
  }
export { Card };


