'use strict';

(function () {
  var POPUP_WIDTH = 420;
  var POPUP_HEIGTH = 270;
  var POPUP_POSITION_X = 100;
  var POPUP_POSITION_Y = 10;
  var OFFSET = 10;

  var DIAGRAM_HEIGHT = 150;
  var COLUMN_OFFSET = 50;
  var COLUMN_WIDTH = 40;


  // отрисовка popup-a на экран
  var viewCover = function (ctx, x, y, bg) {
    ctx.fillStyle = bg;
    ctx.fillRect(x, y, POPUP_WIDTH, POPUP_HEIGTH);
  };

  var getMaxElement = function (elements) {
    var max = elements[0];

    for (var i = 0; i < elements.length; i++) {
      if (elements[i] > max) {
        max = elements[i];
      }
    }

    return max;
  };

  window.renderStatistics = function (ctx, names, times) {
    viewCover(ctx, POPUP_POSITION_X + OFFSET, POPUP_POSITION_Y + OFFSET, 'rgba(0, 0, 0, 0.7)');
    viewCover(ctx, POPUP_POSITION_X, POPUP_POSITION_Y, 'white');

    ctx.font = 'normal 16px PT Mono';
    ctx.fillStyle = 'black';
    ctx.fillText('Ура, вы победили!', 230, 40);
    ctx.fillText('Список результатов:', 220, 60);


    for (var i = 0; i < names.length; i++) {

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
      }

      var gistagramHeight = (times[i] * DIAGRAM_HEIGHT) / getMaxElement(times);

      ctx.fillRect(155 + (COLUMN_OFFSET + COLUMN_WIDTH) * i, POPUP_HEIGTH - gistagramHeight - 30, COLUMN_WIDTH, gistagramHeight);

      ctx.fillStyle = 'black';
      ctx.fillText(names[i], 155 + (COLUMN_OFFSET + COLUMN_WIDTH) * i, POPUP_HEIGTH - 10);
      ctx.fillText(Math.round(times[i]), 155 + (COLUMN_OFFSET + COLUMN_WIDTH) * i, POPUP_HEIGTH - 40 - gistagramHeight);
    }
  };

})();
