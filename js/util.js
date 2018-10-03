'use strict';

(function () {
  var KEY_ESC = 27;
  var KEY_ENTER = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === KEY_ESC) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === KEY_ENTER) {
        action();
      }
    }
  };
})();

