'use strict';

var KEY_ESC = 27;
var KEY_ENTER = 13;
var WIZARDS_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var setupUserName = userDialog.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === KEY_ESC && document.activeElement !== setupUserName) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('click', onPopupEscPress);
};

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_ENTER) {
    openPopup();
  }
});

userDialogClose.addEventListener('click', function () {
  closePopup();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_ENTER) {
    closePopup();
  }
});

setupUserName.addEventListener('invalid', function () {
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('Имя не должно превышать 25 символов');
  } else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Обязательное поле');
  } else {
    setupUserName.setCustomValidity('');
  }
});

setupUserName.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// Функция генерации случайного цвета
var setRandomColor = function (wizardElement, color) {
  wizardElement.style.fill = color;
};

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var wizardCoatInput = document.querySelector('input[name=coat-color]');
var wizardEyesInput = document.querySelector('input[name=eyes-color]');
var fireballInput = document.querySelector('input[name=fireball-color]');

wizardCoat.addEventListener('click', function () {
  var randomColor = getRandom(WIZARD_COAT_COLORS);
  setRandomColor(wizardCoat, randomColor);
  wizardCoatInput.value = randomColor;
});

wizardEyes.addEventListener('click', function () {
  var randomColor = getRandom(WIZARD_EYES_COLORS);
  setRandomColor(wizardEyes, randomColor);
  wizardEyesInput.value = randomColor;
});

fireball.addEventListener('click', function () {
  var randomColor = getRandom(FIREBALL_COLORS);
  fireball.style.background = randomColor;
  fireballInput.value = randomColor;
});

// Функция генерации случайных данных
var getRandom = function (max) {
  return max[Math.floor(Math.random() * max.length)];
};

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var generateWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    var wizard = {};
    wizard.name = getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_LAST_NAMES);
    wizard.coatColor = getRandom(WIZARD_COAT_COLORS);
    wizard.eyesColor = getRandom(WIZARD_EYES_COLORS);

    wizards.push(wizard);
  }

  return wizards;
};

// Функция заполнения блока DOM-элементами на основе массива
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createWizardItem = function () {
  var wizards = generateWizards();

  var fragment = document.createDocumentFragment();
  wizards.forEach(function (element) {
    fragment.appendChild(renderWizard(element));
  });

  return fragment;
};

similarListElement.appendChild(createWizardItem());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
