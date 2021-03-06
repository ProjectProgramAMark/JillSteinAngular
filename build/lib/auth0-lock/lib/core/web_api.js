'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _auth0Js = require('auth0-js');

var _auth0Js2 = _interopRequireDefault(_auth0Js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth0WebAPI = function () {
  function Auth0WebAPI() {
    _classCallCheck(this, Auth0WebAPI);

    this.clients = {};
    this.authOpts = {};
    this.authParams = {};
  }

  Auth0WebAPI.prototype.setupClient = function setupClient(lockID, clientID, domain, opts) {
    this.clients[lockID] = new _auth0Js2.default({
      clientID: clientID,
      domain: domain,
      sendSDKClientInfo: true,
      forceJSONP: false,
      callbackURL: opts.redirectUrl,
      responseMode: opts.responseMode,
      responseType: opts.responseType
    });

    this.authOpts[lockID] = {
      popup: !opts.redirect,
      popupOptions: opts.popupOptions,
      sso: opts.sso
    };
  };

  Auth0WebAPI.prototype.logIn = function logIn(lockID, options, authParams, cb) {
    // TODO: for passwordless only, try to clean in auth0.js
    // client._shouldRedirect = redirect || responseType === "code" || !!redirectUrl;
    var authOpts = this.authOpts[lockID];
    var f = loginCallback(!authOpts.popup, cb);
    var client = this.clients[lockID];
    client.login(_extends({}, options, authOpts, authParams), f);
  };

  Auth0WebAPI.prototype.signOut = function signOut(lockID, query) {
    this.clients[lockID].logout(query);
  };

  Auth0WebAPI.prototype.signUp = function signUp(lockID, options, cb) {
    var client = this.clients[lockID];
    var _authOpts$lockID = this.authOpts[lockID],
        popup = _authOpts$lockID.popup,
        sso = _authOpts$lockID.sso;
    var autoLogin = options.autoLogin;

    delete options.autoLogin;

    // TODO: investigate why can't we just delegate to auth0.js the
    // automatic login (error handling maybe?).

    // When needed, open popup for sso login immediately, otherwise it
    // may be blocked by the browser.
    var win = void 0;
    if (autoLogin && popup && sso) {
      win = client._buildPopupWindow({});
    }

    // Never allow automatic login and disable popup (since it is only
    // needed when auth0.js handles the automatic login).
    options.auto_login = false;
    options.popup = false;

    // Also, wrap callback in a function that closes the popup.
    var f = function f(error) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (error && win) {
        win.kill();
      }

      cb.apply(undefined, [error].concat(args));
    };

    client.signup(options, f);
  };

  Auth0WebAPI.prototype.resetPassword = function resetPassword(lockID, options, cb) {
    this.clients[lockID].changePassword(options, cb);
  };

  Auth0WebAPI.prototype.startPasswordless = function startPasswordless(lockID, options, cb) {
    var client = this.clients[lockID];
    client.startPasswordless(options, function (err) {
      return cb(normalizeError(err));
    });
  };

  Auth0WebAPI.prototype.parseHash = function parseHash(lockID) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    return this.clients[lockID].parseHash(decodeURIComponent(hash));
  };

  Auth0WebAPI.prototype.getProfile = function getProfile(lockID, token, callback) {
    return this.clients[lockID].getProfile(token, callback);
  };

  Auth0WebAPI.prototype.getSSOData = function getSSOData(lockID) {
    var _clients$lockID;

    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return (_clients$lockID = this.clients[lockID]).getSSOData.apply(_clients$lockID, args);
  };

  Auth0WebAPI.prototype.getUserCountry = function getUserCountry(lockID, cb) {
    return this.clients[lockID].getUserCountry(cb);
  };

  return Auth0WebAPI;
}();

exports.default = new Auth0WebAPI();


function normalizeError(error) {
  if (!error) {
    return error;
  }

  // TODO: clean this mess, the first checks are for social/popup,
  // then we have some stuff for passwordless and the latter is for
  // db.

  // TODO: the following checks were copied from https://github.com/auth0/lock/blob/0a5abf1957c9bb746b0710b274d0feed9b399958/index.js#L1263-L1288
  // Some of the checks are missing because I couldn't reproduce them and I'm
  // affraid they'll break existent functionality if add them.
  // We need a better errror handling story in auth0.js.

  if (error.status === "User closed the popup window") {
    // {
    //   status: "User closed the popup window",
    //   name: undefined,
    //   code: undefined,
    //   details: {
    //     description: "server error",
    //     code: undefined
    //   }
    // }
    return {
      code: "lock.popup_closed",
      error: "lock.popup_closed",
      description: "Popup window closed."
    };
  }

  if (error.code === "unauthorized") {

    // Custom rule error
    //
    // {
    //   "code": "unauthorized",
    //   "details": {
    //     "code": "unauthorized",
    //     "error_description": "user is blocked",
    //     "error": "unauthorized"
    //   },
    //   "name": "unauthorized",
    //   "status": 401
    // }

    // Default "user is blocked" rule error
    //
    // {
    //   "code": "unauthorized",
    //   "details": {
    //     "code": "unauthorized",
    //     "error_description": "user is blocked",
    //     "error": "unauthorized"
    //   },
    //   "name": "unauthorized",
    //   "status": 401
    // }

    // Social cancel permissions.
    //
    // {
    //   code: "unauthorized",
    //   details: {
    //     code: "unauthorized"
    //     error: "unauthorized"
    //     error_description: "access_denied"
    //   },
    //   name: "unauthorized"
    //   status: 401
    // }

    // Social cancel permissions or unknown error
    if (!error.details || !error.details.error_description || error.details.error_description === "access_denied") {

      return {
        code: "lock.unauthorized",
        error: "lock.unauthorized",
        description: error.details && error.details.error_description || "Permissions were not granted."
      };
    }

    // Special case for custom rule error
    if (error.details.error_description === "user is blocked") {
      return {
        code: "blocked_user",
        error: "blocked_user",
        description: error.details.error_description
      };
    }

    // Custom Rule error
    return {
      code: "rule_error",
      error: "rule_error",
      description: error.details.error_description
    };
  }

  var result = {
    error: error.details ? error.details.error : error.statusCode || error.error,
    description: error.details ? error.details.error_description : error.error_description || error.error
  };

  // result is used for passwordless and error for database.
  return result.error === undefined && result.description === undefined ? error : result;
}

function loginCallback(redirect, cb) {
  return redirect ? function (error) {
    return cb(normalizeError(error));
  } : function (error, result) {
    return cb(normalizeError(error), result);
  };
}
