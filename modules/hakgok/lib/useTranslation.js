"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = useTranslation;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _context = require("./context");

var _utils = require("./utils");

function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function () {
    // delay ready if not yet initialized i18n instance
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        // due to emitter removing issue in i18next we need to delay remove
        setImmediate(function () {
          i18n.off('initialized', initialized);
        });
        cb();
      };

      i18n.on('initialized', initialized);
    }
  });
}

function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // assert we have the needed i18nInstance
  var i18nFromProps = props.i18n;
  var i18n = i18nFromProps || (0, _context.getI18n)();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need pass in an i18next instance by using i18nextReactModule');
    return [function (k) {
      return k;
    }, {}];
  }

  var i18nOptions = (0, _context.getDefaults)(); // prepare having a namespace

  var namespaces = ns || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation']; // report namespaces as used

  (0, _context.addUsedNamespaces)(namespaces); // are we ready? yes if all namespaces in first language are loaded already (either with data or empty objedt on failed load)

  var ready = i18n.isInitialized && namespaces.every(function (n) {
    var ret = i18n.hasResourceBundle(i18n.languages[0], n) || // we have the ns loaded for the favorite lng (chances are we do not have that lng so check for fallback or has tried to load that)
      !i18n.services.backendConnector.backend && i18n.hasResourceBundle(i18n.languages[i18n.languages.length - 1], n) || // we have no backend (translation via init) but fallbackLng
      i18n.services.backendConnector.backend && i18n.services.backendConnector.state["".concat(i18n.languages[0], "|").concat(n)] && i18n.services.backendConnector.state["".concat(i18n.languages[0], "|").concat(n)] !== 1 && (i18n.options && !i18n.options.fallbackLng || i18n.hasResourceBundle(i18n.languages[i18n.languages.length - 1], n)); // we have at least tried to load it and have a fallback if fallbackLng is set

    return ret;
  }); // set states

  var _useState = (0, _react.useState)({
    t: i18n.getFixedT(null, namespaces[0])
  }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    t = _useState2[0],
    setT = _useState2[1]; // seems we can't have functions as value -> wrap it in obj


  function resetT() {
    setT({
      t: i18n.getFixedT(null, namespaces[0])
    });
  }

  (0, _react.useEffect)(function () {
    // bind events to trigger change, like languageChanged
    if (i18nOptions.bindI18n && i18n) i18n.on(i18nOptions.bindI18n, resetT); // unbinding

    return function () {
      if (i18nOptions.bindI18n) {
        var p = i18nOptions.bindI18n.split(' ');
        p.forEach(function (f) {
          return i18n.off(f, resetT);
        });
      }
    };
  }); // return hook stuff if ready or
  // not yet loaded namespaces -> load them -> and trigger suspense

  if (ready) {
    return [t.t, i18n];
  }

  throw new Promise(function (resolve) {
    loadNamespaces(i18n, namespaces, function () {
      resetT();
      resolve();
    });
  });
}