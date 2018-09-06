'use strict';

var popupWidth = 420;
var popupHeight = 270;
var popupPositionX = 100;
var popupPositionY = 10;
var offset = 10;

var diagramHeight = 150;
var columnOffset = 50;
var columnWidth = 40;


// отрисовка popup-a на экран
var viewCover = function (ctx, x, y, BG) {
  ctx.fillStyle = BG;
  ctx.fillRect(x, y, popupWidth, popupHeight);
};

// Возвращает случайное число между 0 (включительно) и 1 (не включая 1)
var getRandom = function () {
  return Math.random();
};

var getMaxElement = function (myArray) {
  var max = myArray[0];

  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] > max) {
      max = myArray[i];
    }
  }

  return max;
};

window.renderStatistics = function (ctx, names, times) {
  viewCover(ctx, popupPositionX + offset, popupPositionY + offset, 'rgba(0, 0, 0, 0.7)');
  viewCover(ctx, popupPositionX, popupPositionY, 'white');

  ctx.font = 'normal 16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура, вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 220, 60);


  for (var i = 0; i < names.length; i++) {

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandom() + ')';
    }

    var gistagramHeight = (times[i] * diagramHeight) / getMaxElement(times);

    ctx.fillRect(155 + (columnOffset + columnWidth) * i, popupHeight - gistagramHeight - 30, columnWidth, gistagramHeight);

    ctx.fillStyle = 'black';
    ctx.fillText(names[i], 155 + (columnOffset + columnWidth) * i, popupHeight - 10);
    ctx.fillText(Math.round(times[i]), 155 + (columnOffset + columnWidth) * i, popupHeight - 40 - gistagramHeight);
  }
};
