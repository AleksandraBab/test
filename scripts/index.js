let openButton = document.querySelector('.header__btn_yes');
let refuseButton = document.querySelector('.header__btn_no');
let closeButton = document.querySelector('.popup__btn-close');
let submitButton = document.querySelector('.popup__btn-sub');
let popup = document.querySelector('.popup');
let popupYes = document.querySelector('.popup-yes');
let popupNo = document.querySelector('.popup-no');

let subscribeButton = document.querySelector('.popup__btn-sub');
let formElement = document.querySelector('.popup__form');
let emailInput = formElement.querySelector('.popup__email');
let formRefuseElement = document.querySelector('.popup__btns');


function popupOpen() {
  popup.classList.toggle('popup_opened');
}

function popupClose() {
  popup.classList.toggle('popup_opened');
}

function popupYesClose() {
  popupYes.classList.toggle('popup-yes_opened');
  popupClose()
}

function popupNoClose() {
  popupNo.classList.toggle('popup-no_opened');
  popupClose()
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  popupYes.classList.toggle('popup-yes_opened');
  emailInput.value = '';
}

function formRefuseSubmitHandler(evt) {
  evt.preventDefault();

  popupNo.classList.toggle('popup-no_opened');
}


openButton.addEventListener('click', popupOpen);
refuseButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);

formElement.addEventListener('submit', formSubmitHandler);
formRefuseElement.addEventListener('submit', formRefuseSubmitHandler);

popupYes.addEventListener('click', popupYesClose);
popupNo.addEventListener('click', popupNoClose);


let more = document.querySelectorAll('.speakers__btn-showmore');
let gradient = document.querySelector('.speakers__gradient');

for (let i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    let showPerClick = 4;

    let hidden = this.parentNode.querySelectorAll('li.speaker_hidden');
    for (let i = 0; i < showPerClick; i++) {
      if (!hidden[i]) {
        return this.outerHTML = "",
        gradient.outerHTML = "";
      }

      hidden[i].classList.remove('speaker_hidden');
    }
  });
}
