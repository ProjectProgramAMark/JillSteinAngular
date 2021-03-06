'use strict';

exports.__esModule = true;

var _index = require('./index');

var l = _interopRequireWildcard(_index);

var _i18n = require('../i18n');

var i18n = _interopRequireWildcard(_i18n);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Screen = function () {
  function Screen(name) {
    _classCallCheck(this, Screen);

    this.name = name;
  }

  Screen.prototype.backHandler = function backHandler() {
    return null;
  };

  Screen.prototype.escHandler = function escHandler() {
    return null;
  };

  Screen.prototype.submitButtonLabel = function submitButtonLabel(m) {
    return i18n.str(m, ["submitLabel"]);
  };

  Screen.prototype.submitHandler = function submitHandler() {
    return null;
  };

  Screen.prototype.renderAuxiliaryPane = function renderAuxiliaryPane() {
    return null;
  };

  Screen.prototype.renderTabs = function renderTabs() {
    return false;
  };

  Screen.prototype.renderTerms = function renderTerms() {
    return null;
  };

  return Screen;
}();

exports.default = Screen;
