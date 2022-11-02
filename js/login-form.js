'use strict';
const loginForm = document.querySelector('.login-form');
const loginButton = document.querySelector('.login-link');
const login = loginForm.querySelector('[name="email"]');
const password = loginForm.querySelector('[name="password"]');

let isLocalStorageSupport = true;
let storage = ``;

try {
  storage = localStorage.getItem(`login`);
} catch (err) {
  isLocalStorageSupport = false;
}

const removeLoginForm = () => {
  loginForm.classList.remove(`login-form-show`);
  loginForm.classList.remove(`modal-error`);
  window.removeEventListener(`keydown`, loginFormCloseKeyHandler);
  loginForm.removeEventListener(`submit`, loginFormSubmitHandler);
  loginForm.removeEventListener(`mouseleave`, removeLoginFormOnMouseleave);
}

const removeLoginFormOnMouseleave = () => {
  removeLoginForm();
}

const loginFormSubmitHandler = function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    loginForm.classList.remove(`modal-error`);
    loginForm.offsetWidth;
    loginForm.classList.add(`modal-error`);
  } else {
    if (isLocalStorageSupport) {
      localStorage.setItem(`login`, login.value);
    }
    removeLoginForm();
  }
}

const loginFormCloseKeyHandler = function(evt) {
  if (evt.keyCode === 27) {
    removeLoginForm();
  }
}

const loginFormOpenHandler = function(evt) {
  evt.preventDefault();
  loginForm.classList.add(`login-form-show`);

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }

  window.addEventListener(`keydown`, loginFormCloseKeyHandler);
  loginForm.addEventListener(`submit`, loginFormSubmitHandler);
  loginForm.addEventListener(`mouseleave`, removeLoginFormOnMouseleave);
}

loginButton.addEventListener(`click`, loginFormOpenHandler);
