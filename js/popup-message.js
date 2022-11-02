'use strict';
const messagePopup = document.querySelector('.modal-message');
const messageOpenButton = document.querySelector('.message-button');
const messageCloseButton = messagePopup.querySelector('.modal-close');
const messageForm = messagePopup.querySelector('.message-form');
const messageWrapper = messagePopup.querySelector('.modal-wrapper');
const userName = messageForm.querySelector('[name="user-name"]');
const userEmail = messageForm.querySelector('[name="user-email"]');
const userMessage = messageForm.querySelector('[name="user-message"]');

const removePopup = () => {
  messagePopup.classList.remove(`modal-show`);
  messageWrapper.classList.remove(`modal-error`);
  messageCloseButton.removeEventListener(`click`, messageCloseClickHandler);
  window.removeEventListener(`keydown`, messageCloseKeyHandler);
  messageForm.removeEventListener(`submit`, formSubmitHandler);
}

const formSubmitHandler = function(evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    messageWrapper.classList.remove(`modal-error`);
    messageWrapper.offsetWidth;
    messageWrapper.classList.add(`modal-error`);
  } else {
    removePopup();
  }
}

const messageCloseClickHandler = function(evt) {
  evt.preventDefault();
  removePopup();
}

const messageCloseKeyHandler = function(evt) {
  if (evt.keyCode === 27) {
    removePopup();
  }
}

const messageOpenHandler = function(evt) {
  evt.preventDefault();
  messagePopup.classList.add(`modal-show`);
  userName.focus();
  messageCloseButton.addEventListener(`click`, messageCloseClickHandler);
  window.addEventListener(`keydown`, messageCloseKeyHandler);
  messageForm.addEventListener(`submit`, formSubmitHandler);
}

messageOpenButton.addEventListener(`click`, messageOpenHandler);
