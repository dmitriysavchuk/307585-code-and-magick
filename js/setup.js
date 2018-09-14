'use strict';

var WIZARDS_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// Функция генерации случайных данных
var getRandom = function (max) {
  return max[Math.floor(Math.random() * max.length)];
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var generateWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    var wizard = {};
    wizard.name = getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_LAST_NAMES);
    wizard.coatColor = getRandom(WIZARD_COAT_COLOR);
    wizard.eyesColor = getRandom(WIZARD_EYES_COLOR);

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
