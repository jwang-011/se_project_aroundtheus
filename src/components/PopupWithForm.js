import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor( popupSelector, handleFormSubmit ) {
        super(popupSelector);
         // will handle new-card-popup
        // we want to ensure all values of popups to be cleared in the new image modal.
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector('.modal__form');
        this._inputList = this._formElement.querySelectorAll('.modal__input');
    }

    _getInputValues() {
        const inputValues = {};
        this._inputList.forEach((input)=> {
            inputValues[input.name] = input.value;
        });

        return inputValues;
    }

    setEventListeners() {
        super.setEventListeners();

        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();

      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }
    close() {
        this._formElement.reset();
        // this will reset the form but not close it if no super is called.
        super.close();
    }
}

// index.js sample

// const newCardPopup = new PopupWithForm('#new-card-popup', ()=> {});
// newCardPopup.close();