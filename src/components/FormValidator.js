// New FormValidator will replace the validation script
class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        this._submitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
    }

    // Private method for errors
    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._settings.errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this._settings.errorClass);
    }

// const showInputError = (formElement, inputElement, errorMessage, options) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.add(options.inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(options.errorClass);
// };

// const hideInputError = (formElement, inputElement, options) => {
//     const errorElement = document.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.remove(options.inputErrorClass);
//     errorElement.classList.remove(options.errorClass);
//     errorElement.textContent = "";
// };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    // const checkInputValidity = (formElement, inputElement, options) => {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, inputElement, inputElement.validationMessage, options);
//     } else {
//         hideInputError(formElement, inputElement, options);
//     }
// };

// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => !inputElement.validity.valid);
// };

    // Toggle submit button state
    _toggleButtonState() {
        const isValid = this._inputList.every(input => input.validity.valid);
        if (isValid) {
            this._submitButton.classList.remove(this._settings.inactiveButtonClass);
            this._submitButton.disabled = false;
        } else {
            this._submitButton.classList.add(this._settings.inactiveButtonClass);
            this._submitButton.disabled = true;
        }
    }

    // const toggleButtonState = (inputList, buttonElement, options) => {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add(options.inactiveButtonClass);
//         buttonElement.disabled = true;
//     } else {
//         buttonElement.classList.remove(options.inactiveButtonClass);
//         buttonElement.disabled = false;
//     }
// };

    // Private method to set event listeners for inputs
    _setEventListeners() {
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    // Public method to enable validation
    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => evt.preventDefault());
        this._setEventListeners();
        this._toggleButtonState(); // Ensures button is initially disabled if fields are empty
    }

    // const enableValidation = (options) => {
//     const formList = Array.from(document.querySelectorAll(options.formSelector));
//     formList.forEach((formElement) => {
//         formElement.addEventListener("submit", (evt) => {
//             evt.preventDefault();
//         });
//         setEventListeners(formElement, options);
//     });
// };


    // New method for resetting validation
    resetValidation() {
        this._inputList.forEach(inputElement => {
            this._hideInputError(inputElement);
        });
        this._toggleButtonState();
    }
}



export { FormValidator };

// export { enableValidation };