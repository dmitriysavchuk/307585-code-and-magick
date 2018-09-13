'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// Функция генерации случайных данных
var random = function getRandomInt(max) {
  return max[Math.floor(Math.random() * max.length)];
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [
  {
    name: random(WIZARD_NAMES) + ' ' + random(WIZARD_LAST_NAMES),
    coatColor: random(WIZARD_COAT_COLOR),
    eyesColor: random(WIZARD_EYES_COLOR)
  },
  {
    name: random(WIZARD_NAMES) + ' ' + random(WIZARD_LAST_NAMES),
    coatColor: random(WIZARD_COAT_COLOR),
    eyesColor: random(WIZARD_EYES_COLOR)
  },
  {
    name: random(WIZARD_NAMES) + ' ' + random(WIZARD_LAST_NAMES),
    coatColor: random(WIZARD_COAT_COLOR),
    eyesColor: random(WIZARD_EYES_COLOR)
  },
  {
    name: random(WIZARD_NAMES) + ' ' + random(WIZARD_LAST_NAMES),
    coatColor: random(WIZARD_COAT_COLOR),
    eyesColor: random(WIZARD_EYES_COLOR)
  }
];

// Функция заполнения блока DOM-элементами на основе массива
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
