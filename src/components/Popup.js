export default class Popup {
    constructor( popupSelector ) {
        this._popupElement = document.querySelector(popupSelector);

        this._handleEscClose = (evt) => {
          if (evt.key === "Escape") {
          this.close();
    }
  };
}
    open() {
        //opens popup
        this._popupElement.classList.add("modal_opened");
        document.addEventListener("keydown", this._handleEscClose);
//         function openPopup(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeModalOnEscape);
//   modal.addEventListener("mousedown", closeModalOnOverlayClick); no longer uses the functions
}
    close() {
        //closes popup
        this._popupElement.classList.remove("modal_opened");
        document.removeEventListener("keydown", this._handleEscClose);
//         function closePopup(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeModalOnEscape);
//   modal.removeEventListener("mousedown", closeModalOnOverlayClick);
// }
    }
    setEventListeners() {
        //sets event listeners
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }
    });

    this._popupElement
    .querySelector(".modal__close")
    .addEventListener("click", () => {
      this.close();
    });
  }
}