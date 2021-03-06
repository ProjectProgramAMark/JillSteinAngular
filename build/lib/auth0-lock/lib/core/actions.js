'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setupLock = setupLock;
exports.handleAuthCallback = handleAuthCallback;
exports.openLock = openLock;
exports.closeLock = closeLock;
exports.removeLock = removeLock;
exports.updateLock = updateLock;
exports.pinLoadingPane = pinLoadingPane;
exports.unpinLoadingPane = unpinLoadingPane;
exports.validateAndSubmit = validateAndSubmit;
exports.logIn = logIn;
exports.logInSuccess = logInSuccess;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _web_api = require('./web_api');

var _web_api2 = _interopRequireDefault(_web_api);

var _index = require('../store/index');

var _remote_data = require('./remote_data');

var _index2 = require('./index');

var l = _interopRequireWildcard(_index2);

var _preload_utils = require('../utils/preload_utils');

var _container = require('../ui/box/container');

var _index3 = require('../field/index');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setupLock(id, clientID, domain, options, hookRunner, emitEventFn) {
  var m = (0, _remote_data.syncRemoteData)(l.setup(id, clientID, domain, options, hookRunner, emitEventFn));
  (0, _preload_utils.img)(l.ui.logo(m) || _container.defaultProps.logo);

  _web_api2.default.setupClient(id, clientID, domain, l.withAuthOptions(m, _extends({}, options, {
    popupOptions: l.ui.popupOptions(m)
  })));

  m = l.runHook(m, "didInitialize", options);

  (0, _index.swap)(_index.setEntity, "lock", id, m);
}

function handleAuthCallback() {
  var hash = global.location.hash;

  var ms = (0, _index.read)(_index.getCollection, "lock");
  var parsed = ms.filter(function (m) {
    return l.auth.redirect(m) && parseHash(m, hash);
  });

  if (parsed.size > 0) {
    global.location.hash = "";
  }
}

function parseHash(m, hash) {
  var parsedHash = _web_api2.default.parseHash(l.id(m), hash);
  l.emitHashParsedEvent(m, parsedHash);

  var error = void 0,
      result = void 0;

  if (parsedHash) {
    if (parsedHash.error) {
      error = parsedHash;
    } else if (!parsedHash.hasOwnProperty("error")) {
      // NOTE: if the url hash contains the string "error"
      // `parsedHash` will be the following object:
      // {error: undefined, error_description: undefined}
      // That is why we make the additional check for the error
      // property to ensure we actually have a result.
      result = parsedHash;
    }

    if (error) {
      l.emitAuthorizationErrorEvent(m, error);
    } else if (result) {
      l.emitAuthenticatedEvent(m, result);
    }
  }

  return !!(error || result);
}

function openLock(id, opts) {
  var m = (0, _index.read)(_index.getEntity, "lock", id);
  if (!m) {
    throw new Error("The Lock can't be opened again after it has been destroyed");
  }

  if (l.rendering(m)) {
    return false;
  }

  if (opts.flashMessage) {
    if (!opts.flashMessage.type || ['error', 'success'].indexOf(opts.flashMessage.type) === -1) {
      return l.emitUnrecoverableErrorEvent(m, "'flashMessage' must provide a valid type ['error','success']");
    }
    if (!opts.flashMessage.text) {
      return l.emitUnrecoverableErrorEvent(m, "'flashMessage' must provide a text");
    }
  }

  l.emitEvent(m, "show");

  (0, _index.swap)(_index.updateEntity, "lock", id, function (m) {
    m = l.overrideOptions(m, opts);
    m = l.filterConnections(m);
    m = l.runHook(m, "willShow", opts);
    return l.render(m);
  });

  return true;
}

function closeLock(id) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  // Do nothing when the Lock can't be closed, unless closing is forced.
  var m = (0, _index.read)(_index.getEntity, "lock", id);
  if (!l.ui.closable(m) && !force || !l.rendering(m)) {
    return;
  }

  l.emitEvent(m, "hide");

  // If it is a modal, stop rendering an reset after a second,
  // otherwise just reset.
  if (l.ui.appendContainer(m)) {
    (0, _index.swap)(_index.updateEntity, "lock", id, l.stopRendering);

    setTimeout(function () {
      (0, _index.swap)(_index.updateEntity, "lock", id, l.reset);
      m = (0, _index.read)(_index.getEntity, "lock", id);
      callback(m);
    }, 1000);
  } else {
    (0, _index.swap)(_index.updateEntity, "lock", id, l.reset);
    callback(m);
  }
}

function removeLock(id) {
  (0, _index.swap)(_index.updateEntity, "lock", id, l.stopRendering);
  (0, _index.swap)(_index.removeEntity, "lock", id);
}

function updateLock(id, f) {
  return (0, _index.swap)(_index.updateEntity, "lock", id, f);
}

function pinLoadingPane(id) {
  var lock = (0, _index.read)(_index.getEntity, "lock", id);
  if (!lock.get("isLoadingPanePinned")) {
    (0, _index.swap)(_index.updateEntity, "lock", id, function (m) {
      return m.set("isLoadingPanePinned", true);
    });
  }
}

function unpinLoadingPane(id) {
  (0, _index.swap)(_index.updateEntity, "lock", id, function (m) {
    return m.set("isLoadingPanePinned", false);
  });
}

function validateAndSubmit(id) {
  var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var f = arguments[2];

  (0, _index.swap)(_index.updateEntity, "lock", id, function (m) {
    var allFieldsValid = fields.reduce(function (r, x) {
      return r && (0, _index3.isFieldValid)(m, x);
    }, true);
    return allFieldsValid ? l.setSubmitting(m, true) : fields.reduce(function (r, x) {
      return (0, _index3.showInvalidField)(r, x);
    }, m);
  });

  var m = (0, _index.read)(_index.getEntity, "lock", id);
  if (l.submitting(m)) {
    f(m);
  }
}

function logIn(id, fields) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var logInErrorHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (_id, error, _fields, next) {
    return next();
  };


  validateAndSubmit(id, fields, function (m) {
    _web_api2.default.logIn(id, params, l.auth.params(m).toJS(), function (error, result) {
      if (error) {
        setTimeout(function () {
          return logInError(id, fields, error, logInErrorHandler);
        }, 250);
      } else {
        logInSuccess(id, result);
      }
    });
  });
}

function logInSuccess(id, result) {
  var m = (0, _index.read)(_index.getEntity, "lock", id);

  if (!l.ui.autoclose(m)) {
    (0, _index.swap)(_index.updateEntity, "lock", id, function (m) {
      m = l.setSubmitting(m, false);
      return l.setLoggedIn(m, true);
    });
    l.emitAuthenticatedEvent(m, result);
  } else {
    closeLock(id, false, function (m1) {
      return l.emitAuthenticatedEvent(m1, result);
    });
  }
}

function logInError(id, fields, error, localHandler) {
  localHandler(id, error, fields, function () {
    return process.nextTick(function () {
      var m = (0, _index.read)(_index.getEntity, "lock", id);
      var errorMessage = l.loginErrorMessage(m, error, loginType(fields));

      if (["blocked_user", "rule_error", "lock.unauthorized"].indexOf(error.code) > -1) {
        l.emitAuthorizationErrorEvent(m, error);
      }

      (0, _index.swap)(_index.updateEntity, "lock", id, l.setSubmitting, false, errorMessage);
    });
  });

  (0, _index.swap)(_index.updateEntity, "lock", id, l.setSubmitting, false);
}

function loginType(fields) {
  if (!fields) return;
  if (~fields.indexOf("vcode")) return "code";
  if (~fields.indexOf("username")) return "username";
  if (~fields.indexOf("email")) return "email";
}
