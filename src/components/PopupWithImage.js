import Popup from "../components/Popup.js";
// Will function as a child of Popup doing
// function handleImageClick(name, link) {
//   modalImageEl.src = link;
//   modalImageEl.alt = `Photo of ${name}`;
//   modalCaption.textContent = name;
//   imagePopup.open();
// }
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._imageElement = this._popupElement.querySelector(".modal__image");
        this._captionElement = this._popupElement.querySelector(".modal__caption");
    }
// data should be an object containing the name and link
    open(data) {
           // set the image's src and alt
        this._imageElement.src = data.link;
        this._imageElement.alt =   `Photo of ${data.name}`;
   // set the caption's textContent
        this._captionElement.textContent = data.name;

        super.open(); //calls open from Popup.
    }
}