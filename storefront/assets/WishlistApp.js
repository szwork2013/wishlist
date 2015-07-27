/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/@vtex.wishlist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _storefront = __webpack_require__(6);
	
	var _storefront2 = _interopRequireDefault(_storefront);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _componentsHeader = __webpack_require__(7);
	
	var _componentsHeader2 = _interopRequireDefault(_componentsHeader);
	
	var _componentsFooter = __webpack_require__(2);
	
	var _componentsFooter2 = _interopRequireDefault(_componentsFooter);
	
	var _componentsWishlist = __webpack_require__(11);
	
	var _componentsWishlist2 = _interopRequireDefault(_componentsWishlist);
	
	var _componentsCatalog = __webpack_require__(33);
	
	var _componentsCatalog2 = _interopRequireDefault(_componentsCatalog);
	
	var WishlistApp = _react2['default'].createClass({
	  displayName: 'WishlistApp',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(_componentsHeader2['default'], null),
	      _react2['default'].createElement(_componentsWishlist2['default'], null),
	      _react2['default'].createElement(_componentsFooter2['default'], null),
	      _react2['default'].createElement(_componentsCatalog2['default'], null)
	    );
	  }
	});
	
	_storefront2['default']['export']('WishlistPage@vtex.wishlist', WishlistApp);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _footerBuy = __webpack_require__(4);
	
	var _footerBuy2 = _interopRequireDefault(_footerBuy);
	
	var _footerSend = __webpack_require__(5);
	
	var _footerSend2 = _interopRequireDefault(_footerSend);
	
	var Footer = _react2['default'].createClass({
	  displayName: 'Footer',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'nav',
	      { className: "col-xs-12 navbar navbar-default" },
	      _react2['default'].createElement(
	        'div',
	        { className: "container-fluid row center-block" },
	        _react2['default'].createElement(_footerSend2['default'], null),
	        _react2['default'].createElement(_footerBuy2['default'], null)
	      )
	    );
	  }
	});
	
	exports['default'] = Footer;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Buy = _react2['default'].createClass({
	  displayName: 'Buy',
	
	  handleClick: function handleClick() {
	    console.log('vai compra nada não');
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: "col-xs-4 navbar-form navbar-right row container-fluid" },
	      _react2['default'].createElement(
	        'button',
	        { type: "button",
	          className: "btn btn-success",
	          onClick: this.handleClick },
	        'Comprar essa lista'
	      )
	    );
	  }
	});
	
	exports['default'] = Buy;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Buy = _react2['default'].createClass({
	  displayName: 'Buy',
	
	  handleClick: function handleClick() {
	    console.log('vai enviar nada não');
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: "col-xs-4 navbar-form navbar-left row container-fluid" },
	      _react2['default'].createElement(
	        'button',
	        { type: "button",
	          className: "btn btn-info",
	          onClick: this.handleClick },
	        'Enviar essa lista'
	      )
	    );
	  }
	});
	
	exports['default'] = Buy;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = storefront;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _headerMenu = __webpack_require__(8);
	
	var _headerMenu2 = _interopRequireDefault(_headerMenu);
	
	var _headerBrand = __webpack_require__(9);
	
	var _headerBrand2 = _interopRequireDefault(_headerBrand);
	
	var _headerBuy = __webpack_require__(10);
	
	var _headerBuy2 = _interopRequireDefault(_headerBuy);
	
	var Header = _react2['default'].createClass({
	  displayName: 'Header',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'nav',
	      { className: "col-md-12 navbar navbar-default" },
	      _react2['default'].createElement(
	        'div',
	        { className: "container-fluid row" },
	        _react2['default'].createElement(_headerMenu2['default'], null),
	        _react2['default'].createElement(_headerBrand2['default'], null),
	        _react2['default'].createElement(_headerBuy2['default'], null)
	      )
	    );
	  }
	});
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Menu = _react2['default'].createClass({
	  displayName: 'Menu',
	
	  handleClick: function handleClick() {
	    console.log('não tem menu ainda');
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: "col-xs-4 navbar-form row container-fluid" },
	      _react2['default'].createElement('button', {
	        className: "glyphicon glyphicon-menu-hamburger btn btn-default",
	        onClick: this.handleClick })
	    );
	  }
	});
	
	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Brand = _react2["default"].createClass({
	  displayName: "Brand",
	
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "col-xs-4 " },
	      _react2["default"].createElement(
	        "p",
	        { className: "text-center navbar-brand" },
	        "Logo"
	      )
	    );
	  }
	});
	
	exports["default"] = Brand;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Buy = _react2['default'].createClass({
	  displayName: 'Buy',
	
	  handleClick: function handleClick() {
	    console.log('vai compra nada não');
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: "col-xs-4 navbar-form navbar-right row container-fluid" },
	      _react2['default'].createElement(
	        'button',
	        { type: "button",
	          className: "btn btn-success",
	          onClick: this.handleClick },
	        'Comprar essa lista'
	      )
	    );
	  }
	});
	
	exports['default'] = Buy;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _storesWishlistStore = __webpack_require__(12);
	
	var _storesWishlistStore2 = _interopRequireDefault(_storesWishlistStore);
	
	var _componentsWishlistItemWishlistItem = __webpack_require__(27);
	
	var _componentsWishlistItemWishlistItem2 = _interopRequireDefault(_componentsWishlistItemWishlistItem);
	
	var Wishlist = _react2['default'].createClass({
	  displayName: 'Wishlist',
	
	  getInitialState: function getInitialState() {
	    return {
	      skuList: _storesWishlistStore2['default'].getState().skus
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    _storesWishlistStore2['default'].listen(this.onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    _storesWishlistStore2['default'].listen(this.onChange);
	  },
	
	  onChange: function onChange(state) {
	    this.setState({ skuList: state.skus });
	  },
	
	  render: function render() {
	    console.log(this.state.skuList);
	
	    return _react2['default'].createElement(
	      'ul',
	      null,
	      this.state.skuList.map(function (sku, index) {
	        return _react2['default'].createElement(
	          'li',
	          { key: index },
	          _react2['default'].createElement(_componentsWishlistItemWishlistItem2['default'], { sku: sku })
	        );
	      })
	    );
	  }
	});
	exports['default'] = Wishlist;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _flux = __webpack_require__(13);
	
	var _flux2 = _interopRequireDefault(_flux);
	
	var _actionsWishlistActions = __webpack_require__(26);
	
	var _actionsWishlistActions2 = _interopRequireDefault(_actionsWishlistActions);
	
	var WishlistStore = (function () {
	  function WishlistStore() {
	    _classCallCheck(this, WishlistStore);
	
	    //guarda os sku
	    this.skus = [];
	
	    this.bindListeners({
	      handleAddSku: _actionsWishlistActions2['default'].ADD_SKU
	    });
	  }
	
	  _createClass(WishlistStore, [{
	    key: 'handleAddSku',
	    value: function handleAddSku(sku) {
	      if (this.skus.indexOf(sku) < 0) {
	        this.skus.push(sku);
	      }
	    }
	  }]);
	
	  return WishlistStore;
	})();
	
	exports['default'] = _flux2['default'].createStore(WishlistStore, 'WishlistStore');
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _alt = __webpack_require__(14);
	
	var _alt2 = _interopRequireDefault(_alt);
	
	var flux = new _alt2['default']();
	
	exports['default'] = flux;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*global window*/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _bind = Function.prototype.bind;
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _flux = __webpack_require__(21);
	
	var _utilsStateFunctions = __webpack_require__(24);
	
	var StateFunctions = _interopRequireWildcard(_utilsStateFunctions);
	
	var _utilsFunctions = __webpack_require__(17);
	
	var fn = _interopRequireWildcard(_utilsFunctions);
	
	var _store = __webpack_require__(15);
	
	var store = _interopRequireWildcard(_store);
	
	var _utilsAltUtils = __webpack_require__(16);
	
	var utils = _interopRequireWildcard(_utilsAltUtils);
	
	var _actions = __webpack_require__(25);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var Alt = (function () {
	  function Alt() {
	    var config = arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Alt);
	
	    this.config = config;
	    this.serialize = config.serialize || JSON.stringify;
	    this.deserialize = config.deserialize || JSON.parse;
	    this.dispatcher = config.dispatcher || new _flux.Dispatcher();
	    this.batchingFunction = config.batchingFunction || function (callback) {
	      return callback();
	    };
	    this.actions = { global: {} };
	    this.stores = {};
	    this.storeTransforms = config.storeTransforms || [];
	    this.trapAsync = false;
	    this._actionsRegistry = {};
	    this._initSnapshot = {};
	    this._lastSnapshot = {};
	  }
	
	  _createClass(Alt, [{
	    key: 'dispatch',
	    value: function dispatch(action, data, details) {
	      var _this = this;
	
	      this.batchingFunction(function () {
	        var id = Math.random().toString(18).substr(2, 16);
	        return _this.dispatcher.dispatch({
	          id: id,
	          action: action,
	          data: data,
	          details: details
	        });
	      });
	    }
	  }, {
	    key: 'createUnsavedStore',
	    value: function createUnsavedStore(StoreModel) {
	      var key = StoreModel.displayName || '';
	      store.createStoreConfig(this.config, StoreModel);
	      var Store = store.transformStore(this.storeTransforms, StoreModel);
	
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      return fn.isFunction(Store) ? store.createStoreFromClass.apply(store, [this, Store, key].concat(args)) : store.createStoreFromObject(this, Store, key);
	    }
	  }, {
	    key: 'createStore',
	    value: function createStore(StoreModel, iden) {
	      var key = iden || StoreModel.displayName || StoreModel.name || '';
	      store.createStoreConfig(this.config, StoreModel);
	      var Store = store.transformStore(this.storeTransforms, StoreModel);
	
	      if (this.stores[key] || !key) {
	        if (this.stores[key]) {
	          utils.warn('A store named ' + key + ' already exists, double check your store ' + 'names or pass in your own custom identifier for each store');
	        } else {
	          utils.warn('Store name was not specified');
	        }
	
	        key = utils.uid(this.stores, key);
	      }
	
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      var storeInstance = fn.isFunction(Store) ? store.createStoreFromClass.apply(store, [this, Store, key].concat(args)) : store.createStoreFromObject(this, Store, key);
	
	      this.stores[key] = storeInstance;
	      StateFunctions.saveInitialSnapshot(this, key);
	
	      return storeInstance;
	    }
	  }, {
	    key: 'generateActions',
	    value: function generateActions() {
	      var actions = { name: 'global' };
	
	      for (var _len3 = arguments.length, actionNames = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        actionNames[_key3] = arguments[_key3];
	      }
	
	      return this.createActions(actionNames.reduce(function (obj, action) {
	        obj[action] = utils.dispatchIdentity;
	        return obj;
	      }, actions));
	    }
	  }, {
	    key: 'createAction',
	    value: function createAction(name, implementation, obj) {
	      return (0, _actions2['default'])(this, 'global', name, implementation, obj);
	    }
	  }, {
	    key: 'createActions',
	    value: function createActions(ActionsClass) {
	      var _arguments2 = arguments,
	          _this2 = this;
	
	      var exportObj = arguments[1] === undefined ? {} : arguments[1];
	
	      var actions = {};
	      var key = utils.uid(this._actionsRegistry, ActionsClass.displayName || ActionsClass.name || 'Unknown');
	
	      if (fn.isFunction(ActionsClass)) {
	        var _len4, argsForConstructor, _key4;
	
	        (function () {
	          fn.assign(actions, utils.getInternalMethods(ActionsClass, true));
	
	          var ActionsGenerator = (function (_ActionsClass) {
	            function ActionsGenerator() {
	              _classCallCheck(this, ActionsGenerator);
	
	              for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	                args[_key5] = arguments[_key5];
	              }
	
	              _get(Object.getPrototypeOf(ActionsGenerator.prototype), 'constructor', this).apply(this, args);
	            }
	
	            _inherits(ActionsGenerator, _ActionsClass);
	
	            _createClass(ActionsGenerator, [{
	              key: 'generateActions',
	              value: function generateActions() {
	                for (var _len6 = arguments.length, actionNames = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	                  actionNames[_key6] = arguments[_key6];
	                }
	
	                actionNames.forEach(function (actionName) {
	                  actions[actionName] = utils.dispatchIdentity;
	                });
	              }
	            }]);
	
	            return ActionsGenerator;
	          })(ActionsClass);
	
	          for (_len4 = _arguments2.length, argsForConstructor = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	            argsForConstructor[_key4 - 2] = _arguments2[_key4];
	          }
	
	          fn.assign(actions, new (_bind.apply(ActionsGenerator, [null].concat(_toConsumableArray(argsForConstructor))))());
	        })();
	      } else {
	        fn.assign(actions, ActionsClass);
	      }
	
	      this.actions[key] = this.actions[key] || {};
	
	      fn.eachObject(function (actionName, action) {
	        if (!fn.isFunction(action)) {
	          return;
	        }
	
	        // create the action
	        exportObj[actionName] = (0, _actions2['default'])(_this2, key, actionName, action, exportObj);
	
	        // generate a constant
	        var constant = utils.formatAsConstant(actionName);
	        exportObj[constant] = exportObj[actionName].id;
	      }, [actions]);
	      return exportObj;
	    }
	  }, {
	    key: 'takeSnapshot',
	    value: function takeSnapshot() {
	      for (var _len7 = arguments.length, storeNames = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        storeNames[_key7] = arguments[_key7];
	      }
	
	      var state = StateFunctions.snapshot(this, storeNames);
	      fn.assign(this._lastSnapshot, state);
	      return this.serialize(state);
	    }
	  }, {
	    key: 'rollback',
	    value: function rollback() {
	      StateFunctions.setAppState(this, this.serialize(this._lastSnapshot), function (storeInst) {
	        storeInst.lifecycle('rollback');
	        storeInst.emitChange();
	      });
	    }
	  }, {
	    key: 'recycle',
	    value: function recycle() {
	      for (var _len8 = arguments.length, storeNames = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        storeNames[_key8] = arguments[_key8];
	      }
	
	      var initialSnapshot = storeNames.length ? StateFunctions.filterSnapshots(this, this._initSnapshot, storeNames) : this._initSnapshot;
	
	      StateFunctions.setAppState(this, this.serialize(initialSnapshot), function (storeInst) {
	        storeInst.lifecycle('init');
	        storeInst.emitChange();
	      });
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      var state = this.serialize(StateFunctions.snapshot(this));
	      this.recycle();
	      return state;
	    }
	  }, {
	    key: 'bootstrap',
	    value: function bootstrap(data) {
	      StateFunctions.setAppState(this, data, function (storeInst) {
	        storeInst.lifecycle('bootstrap');
	        storeInst.emitChange();
	      });
	    }
	  }, {
	    key: 'prepare',
	    value: function prepare(storeInst, payload) {
	      var data = {};
	      if (!storeInst.displayName) {
	        throw new ReferenceError('Store provided does not have a name');
	      }
	      data[storeInst.displayName] = payload;
	      return this.serialize(data);
	    }
	  }, {
	    key: 'addActions',
	
	    // Instance type methods for injecting alt into your application as context
	
	    value: function addActions(name, ActionsClass) {
	      for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
	        args[_key9 - 2] = arguments[_key9];
	      }
	
	      this.actions[name] = Array.isArray(ActionsClass) ? this.generateActions.apply(this, ActionsClass) : this.createActions.apply(this, [ActionsClass].concat(args));
	    }
	  }, {
	    key: 'addStore',
	    value: function addStore(name, StoreModel) {
	      for (var _len10 = arguments.length, args = Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
	        args[_key10 - 2] = arguments[_key10];
	      }
	
	      this.createStore.apply(this, [StoreModel, name].concat(args));
	    }
	  }, {
	    key: 'getActions',
	    value: function getActions(name) {
	      return this.actions[name];
	    }
	  }, {
	    key: 'getStore',
	    value: function getStore(name) {
	      return this.stores[name];
	    }
	  }], [{
	    key: 'debug',
	    value: function debug(name, alt) {
	      var key = 'alt.js.org';
	      if (typeof window !== 'undefined') {
	        window[key] = window[key] || [];
	        window[key].push({ name: name, alt: alt });
	      }
	      return alt;
	    }
	  }]);
	
	  return Alt;
	})();
	
	exports['default'] = Alt;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _bind = Function.prototype.bind;
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports.createStoreConfig = createStoreConfig;
	exports.transformStore = transformStore;
	exports.createStoreFromObject = createStoreFromObject;
	exports.createStoreFromClass = createStoreFromClass;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _utilsAltUtils = __webpack_require__(16);
	
	var utils = _interopRequireWildcard(_utilsAltUtils);
	
	var _utilsFunctions = __webpack_require__(17);
	
	var fn = _interopRequireWildcard(_utilsFunctions);
	
	var _AltStore = __webpack_require__(18);
	
	var _AltStore2 = _interopRequireDefault(_AltStore);
	
	var _StoreMixin = __webpack_require__(20);
	
	var _StoreMixin2 = _interopRequireDefault(_StoreMixin);
	
	function doSetState(store, storeInstance, state) {
	  if (!state) {
	    return;
	  }
	
	  var config = storeInstance.StoreModel.config;
	
	  var nextState = fn.isFunction(state) ? state(storeInstance.state) : state;
	
	  storeInstance.state = config.setState.call(store, storeInstance.state, nextState);
	
	  if (!store.alt.dispatcher.isDispatching()) {
	    store.emitChange();
	  }
	}
	
	function createPrototype(proto, alt, key, extras) {
	  proto.boundListeners = [];
	  proto.lifecycleEvents = {};
	  proto.actionListeners = {};
	  proto.publicMethods = {};
	  proto.handlesOwnErrors = false;
	
	  return fn.assign(proto, _StoreMixin2['default'], {
	    displayName: key,
	    alt: alt,
	    dispatcher: alt.dispatcher,
	    preventDefault: function preventDefault() {
	      this.getInstance().preventDefault = true;
	    }
	  }, extras);
	}
	
	function createStoreConfig(globalConfig, StoreModel) {
	  StoreModel.config = fn.assign({
	    getState: function getState(state) {
	      return fn.assign({}, state);
	    },
	    setState: fn.assign
	  }, globalConfig, StoreModel.config);
	}
	
	function transformStore(transforms, StoreModel) {
	  return transforms.reduce(function (Store, transform) {
	    return transform(Store);
	  }, StoreModel);
	}
	
	function createStoreFromObject(alt, StoreModel, key) {
	  var storeInstance = undefined;
	
	  var StoreProto = createPrototype({}, alt, key, fn.assign({
	    getInstance: function getInstance() {
	      return storeInstance;
	    },
	    setState: function setState(nextState) {
	      doSetState(this, storeInstance, nextState);
	    }
	  }, StoreModel));
	
	  // bind the store listeners
	  /* istanbul ignore else */
	  if (StoreProto.bindListeners) {
	    _StoreMixin2['default'].bindListeners.call(StoreProto, StoreProto.bindListeners);
	  }
	  /* istanbul ignore else */
	  if (StoreProto.observe) {
	    _StoreMixin2['default'].bindListeners.call(StoreProto, StoreProto.observe(alt));
	  }
	
	  // bind the lifecycle events
	  /* istanbul ignore else */
	  if (StoreProto.lifecycle) {
	    fn.eachObject(function (eventName, event) {
	      _StoreMixin2['default'].on.call(StoreProto, eventName, event);
	    }, [StoreProto.lifecycle]);
	  }
	
	  // create the instance and fn.assign the public methods to the instance
	  storeInstance = fn.assign(new _AltStore2['default'](alt, StoreProto, StoreProto.state || {}, StoreModel), StoreProto.publicMethods, { displayName: key });
	
	  return storeInstance;
	}
	
	function createStoreFromClass(alt, StoreModel, key) {
	  var storeInstance = undefined;
	  var config = StoreModel.config;
	
	  // Creating a class here so we don't overload the provided store's
	  // prototype with the mixin behaviour and I'm extending from StoreModel
	  // so we can inherit any extensions from the provided store.
	
	  var Store = (function (_StoreModel) {
	    function Store() {
	      _classCallCheck(this, Store);
	
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      _get(Object.getPrototypeOf(Store.prototype), 'constructor', this).apply(this, args);
	    }
	
	    _inherits(Store, _StoreModel);
	
	    return Store;
	  })(StoreModel);
	
	  createPrototype(Store.prototype, alt, key, {
	    getInstance: function getInstance() {
	      return storeInstance;
	    },
	    setState: function setState(nextState) {
	      doSetState(this, storeInstance, nextState);
	    }
	  });
	
	  for (var _len = arguments.length, argsForClass = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    argsForClass[_key - 3] = arguments[_key];
	  }
	
	  var store = new (_bind.apply(Store, [null].concat(argsForClass)))();
	
	  if (config.bindListeners) store.bindListeners(config.bindListeners);
	  if (config.datasource) store.registerAsync(config.datasource);
	
	  storeInstance = fn.assign(new _AltStore2['default'](alt, store, typeof store.state === 'object' ? store.state : null, StoreModel), utils.getInternalMethods(StoreModel), config.publicMethods, { displayName: key });
	
	  return storeInstance;
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	/*eslint-disable*/
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getInternalMethods = getInternalMethods;
	exports.warn = warn;
	exports.uid = uid;
	exports.formatAsConstant = formatAsConstant;
	exports.dispatchIdentity = dispatchIdentity;
	var builtIns = Object.getOwnPropertyNames(NoopClass);
	var builtInProto = Object.getOwnPropertyNames(NoopClass.prototype);
	/*eslint-enable*/
	
	function getInternalMethods(Obj, isProto) {
	  var excluded = isProto ? builtInProto : builtIns;
	  var obj = isProto ? Obj.prototype : Obj;
	  return Object.getOwnPropertyNames(obj).reduce(function (value, m) {
	    if (excluded.indexOf(m) !== -1) {
	      return value;
	    }
	
	    value[m] = obj[m];
	    return value;
	  }, {});
	}
	
	function warn(msg) {
	  /* istanbul ignore else */
	  if (typeof console !== 'undefined') {
	    console.warn(new ReferenceError(msg));
	  }
	}
	
	function uid(container, name) {
	  var count = 0;
	  var key = name;
	  while (Object.hasOwnProperty.call(container, key)) {
	    key = name + String(++count);
	  }
	  return key;
	}
	
	function formatAsConstant(name) {
	  return name.replace(/[a-z]([A-Z])/g, function (i) {
	    return i[0] + '_' + i[1].toLowerCase();
	  }).toUpperCase();
	}
	
	function dispatchIdentity(x) {
	  for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    a[_key - 1] = arguments[_key];
	  }
	
	  this.dispatch(a.length ? [x].concat(a) : x);
	}
	
	/* istanbul ignore next */
	function NoopClass() {}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.isPromise = isPromise;
	exports.eachObject = eachObject;
	exports.assign = assign;
	var isFunction = function isFunction(x) {
	  return typeof x === 'function';
	};
	
	exports.isFunction = isFunction;
	
	function isPromise(obj) {
	  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}
	
	function eachObject(f, o) {
	  o.forEach(function (from) {
	    Object.keys(Object(from)).forEach(function (key) {
	      f(key, from[key]);
	    });
	  });
	}
	
	function assign(target) {
	  for (var _len = arguments.length, source = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    source[_key - 1] = arguments[_key];
	  }
	
	  eachObject(function (key, value) {
	    return target[key] = value;
	  }, source);
	  return target;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utilsFunctions = __webpack_require__(17);
	
	var fn = _interopRequireWildcard(_utilsFunctions);
	
	var _transmitter = __webpack_require__(19);
	
	var _transmitter2 = _interopRequireDefault(_transmitter);
	
	var AltStore = (function () {
	  function AltStore(alt, model, state, StoreModel) {
	    var _this = this;
	
	    _classCallCheck(this, AltStore);
	
	    var lifecycleEvents = model.lifecycleEvents;
	    this.transmitter = (0, _transmitter2['default'])();
	    this.lifecycle = function (event, x) {
	      if (lifecycleEvents[event]) lifecycleEvents[event].push(x);
	    };
	    this.state = state || model;
	
	    this.preventDefault = false;
	    this.displayName = model.displayName;
	    this.boundListeners = model.boundListeners;
	    this.StoreModel = StoreModel;
	
	    var output = model.output || function (x) {
	      return x;
	    };
	
	    this.emitChange = function () {
	      return _this.transmitter.push(output(_this.state));
	    };
	
	    var handleDispatch = function handleDispatch(f, payload) {
	      try {
	        return f();
	      } catch (e) {
	        if (model.handlesOwnErrors) {
	          _this.lifecycle('error', {
	            error: e,
	            payload: payload,
	            state: _this.state
	          });
	          return false;
	        } else {
	          throw e;
	        }
	      }
	    };
	
	    fn.assign(this, model.publicMethods);
	
	    // Register dispatcher
	    this.dispatchToken = alt.dispatcher.register(function (payload) {
	      _this.preventDefault = false;
	
	      _this.lifecycle('beforeEach', {
	        payload: payload,
	        state: _this.state
	      });
	
	      var actionHandler = model.actionListeners[payload.action] || model.otherwise;
	
	      if (actionHandler) {
	        var result = handleDispatch(function () {
	          return actionHandler.call(model, payload.data, payload.action);
	        }, payload);
	
	        if (result !== false && !_this.preventDefault) _this.emitChange();
	      }
	
	      if (model.reduce) {
	        handleDispatch(function () {
	          model.setState(model.reduce(_this.state, payload));
	        }, payload);
	
	        if (!_this.preventDefault) _this.emitChange();
	      }
	
	      _this.lifecycle('afterEach', {
	        payload: payload,
	        state: _this.state
	      });
	    });
	
	    this.lifecycle('init');
	  }
	
	  _createClass(AltStore, [{
	    key: 'listen',
	    value: function listen(cb) {
	      var _this2 = this;
	
	      this.transmitter.subscribe(cb);
	      return function () {
	        return _this2.unlisten(cb);
	      };
	    }
	  }, {
	    key: 'unlisten',
	    value: function unlisten(cb) {
	      this.lifecycle('unlisten');
	      this.transmitter.unsubscribe(cb);
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.StoreModel.config.getState.call(this, this.state);
	    }
	  }]);
	
	  return AltStore;
	})();
	
	exports['default'] = AltStore;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	function transmitter() {
	  var subscriptions = [];
	
	  var unsubscribe = function unsubscribe(onChange) {
	    var id = subscriptions.indexOf(onChange);
	    if (id >= 0) subscriptions.splice(id, 1);
	  };
	
	  var subscribe = function subscribe(onChange) {
	    subscriptions.push(onChange);
	    var dispose = function dispose() {
	      return unsubscribe(onChange);
	    };
	    return { dispose: dispose };
	  };
	
	  var push = function push(value) {
	    subscriptions.forEach(function (subscription) {
	      return subscription(value);
	    });
	  };
	
	  return { subscribe: subscribe, push: push, unsubscribe: unsubscribe };
	}
	
	module.exports = transmitter;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _transmitter = __webpack_require__(19);
	
	var _transmitter2 = _interopRequireDefault(_transmitter);
	
	var _utilsFunctions = __webpack_require__(17);
	
	var fn = _interopRequireWildcard(_utilsFunctions);
	
	var StoreMixin = {
	  waitFor: function waitFor() {
	    for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
	      sources[_key] = arguments[_key];
	    }
	
	    if (!sources.length) {
	      throw new ReferenceError('Dispatch tokens not provided');
	    }
	
	    var sourcesArray = sources;
	    if (sources.length === 1) {
	      sourcesArray = Array.isArray(sources[0]) ? sources[0] : sources;
	    }
	
	    var tokens = sourcesArray.map(function (source) {
	      return source.dispatchToken || source;
	    });
	
	    this.dispatcher.waitFor(tokens);
	  },
	
	  exportAsync: function exportAsync(asyncMethods) {
	    this.registerAsync(asyncMethods);
	  },
	
	  registerAsync: function registerAsync(asyncDef) {
	    var _this = this;
	
	    var loadCounter = 0;
	
	    var asyncMethods = fn.isFunction(asyncDef) ? asyncDef(this.alt) : asyncDef;
	
	    var toExport = Object.keys(asyncMethods).reduce(function (publicMethods, methodName) {
	      var desc = asyncMethods[methodName];
	      var spec = fn.isFunction(desc) ? desc(_this) : desc;
	
	      var validHandlers = ['success', 'error', 'loading'];
	      validHandlers.forEach(function (handler) {
	        if (spec[handler] && !spec[handler].id) {
	          throw new Error(handler + ' handler must be an action function');
	        }
	      });
	
	      publicMethods[methodName] = function () {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }
	
	        var state = _this.getInstance().getState();
	        var value = spec.local && spec.local.apply(spec, [state].concat(args));
	        var shouldFetch = spec.shouldFetch ? spec.shouldFetch.apply(spec, [state].concat(args)) : value == null;
	        var intercept = spec.interceptResponse || function (x) {
	          return x;
	        };
	
	        var makeActionHandler = function makeActionHandler(action, isError) {
	          return function (x) {
	            var fire = function fire() {
	              loadCounter -= 1;
	              action(intercept(x, action, args));
	              if (isError) throw x;
	            };
	            return _this.alt.trapAsync ? function () {
	              return fire();
	            } : fire();
	          };
	        };
	
	        // if we don't have it in cache then fetch it
	        if (shouldFetch) {
	          loadCounter += 1;
	          /* istanbul ignore else */
	          if (spec.loading) spec.loading(intercept(null, spec.loading, args));
	          return spec.remote.apply(spec, [state].concat(args)).then(makeActionHandler(spec.success), makeActionHandler(spec.error, 1));
	        } else {
	          // otherwise emit the change now
	          _this.emitChange();
	        }
	      };
	
	      return publicMethods;
	    }, {});
	
	    this.exportPublicMethods(toExport);
	    this.exportPublicMethods({
	      isLoading: function isLoading() {
	        return loadCounter > 0;
	      }
	    });
	  },
	
	  exportPublicMethods: function exportPublicMethods(methods) {
	    var _this2 = this;
	
	    fn.eachObject(function (methodName, value) {
	      if (!fn.isFunction(value)) {
	        throw new TypeError('exportPublicMethods expects a function');
	      }
	
	      _this2.publicMethods[methodName] = value;
	    }, [methods]);
	  },
	
	  emitChange: function emitChange() {
	    this.getInstance().emitChange();
	  },
	
	  on: function on(lifecycleEvent, handler) {
	    if (lifecycleEvent === 'error') this.handlesOwnErrors = true;
	    var bus = this.lifecycleEvents[lifecycleEvent] || (0, _transmitter2['default'])();
	    this.lifecycleEvents[lifecycleEvent] = bus;
	    return bus.subscribe(handler.bind(this));
	  },
	
	  bindAction: function bindAction(symbol, handler) {
	    if (!symbol) {
	      throw new ReferenceError('Invalid action reference passed in');
	    }
	    if (!fn.isFunction(handler)) {
	      throw new TypeError('bindAction expects a function');
	    }
	
	    if (handler.length > 1) {
	      throw new TypeError('Action handler in store ' + this.displayName + ' for ' + ((symbol.id || symbol).toString() + ' was defined with ') + 'two parameters. Only a single parameter is passed through the ' + 'dispatcher, did you mean to pass in an Object instead?');
	    }
	
	    // You can pass in the constant or the function itself
	    var key = symbol.id ? symbol.id : symbol;
	    this.actionListeners[key] = handler.bind(this);
	    this.boundListeners.push(key);
	  },
	
	  bindActions: function bindActions(actions) {
	    var _this3 = this;
	
	    fn.eachObject(function (action, symbol) {
	      var matchFirstCharacter = /./;
	      var assumedEventHandler = action.replace(matchFirstCharacter, function (x) {
	        return 'on' + x[0].toUpperCase();
	      });
	      var handler = null;
	
	      if (_this3[action] && _this3[assumedEventHandler]) {
	        // If you have both action and onAction
	        throw new ReferenceError('You have multiple action handlers bound to an action: ' + (action + ' and ' + assumedEventHandler));
	      } else if (_this3[action]) {
	        // action
	        handler = _this3[action];
	      } else if (_this3[assumedEventHandler]) {
	        // onAction
	        handler = _this3[assumedEventHandler];
	      }
	
	      if (handler) {
	        _this3.bindAction(symbol, handler);
	      }
	    }, [actions]);
	  },
	
	  bindListeners: function bindListeners(obj) {
	    var _this4 = this;
	
	    fn.eachObject(function (methodName, symbol) {
	      var listener = _this4[methodName];
	
	      if (!listener) {
	        throw new ReferenceError(methodName + ' defined but does not exist in ' + _this4.displayName);
	      }
	
	      if (Array.isArray(symbol)) {
	        symbol.forEach(function (action) {
	          _this4.bindAction(action, listener);
	        });
	      } else {
	        _this4.bindAction(symbol, listener);
	      }
	    }, [obj]);
	  }
	};
	
	exports['default'] = StoreMixin;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	module.exports.Dispatcher = __webpack_require__(22)


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * @typechecks
	 */
	
	"use strict";
	
	var invariant = __webpack_require__(23);
	
	var _lastID = 1;
	var _prefix = 'ID_';
	
	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *
	 *         case 'city-update':
	 *           FlightPriceStore.price =
	 *             FlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */
	
	  function Dispatcher() {
	    this.$Dispatcher_callbacks = {};
	    this.$Dispatcher_isPending = {};
	    this.$Dispatcher_isHandled = {};
	    this.$Dispatcher_isDispatching = false;
	    this.$Dispatcher_pendingPayload = null;
	  }
	
	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   *
	   * @param {function} callback
	   * @return {string}
	   */
	  Dispatcher.prototype.register=function(callback) {
	    var id = _prefix + _lastID++;
	    this.$Dispatcher_callbacks[id] = callback;
	    return id;
	  };
	
	  /**
	   * Removes a callback based on its token.
	   *
	   * @param {string} id
	   */
	  Dispatcher.prototype.unregister=function(id) {
	    invariant(
	      this.$Dispatcher_callbacks[id],
	      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
	      id
	    );
	    delete this.$Dispatcher_callbacks[id];
	  };
	
	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   *
	   * @param {array<string>} ids
	   */
	  Dispatcher.prototype.waitFor=function(ids) {
	    invariant(
	      this.$Dispatcher_isDispatching,
	      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
	    );
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this.$Dispatcher_isPending[id]) {
	        invariant(
	          this.$Dispatcher_isHandled[id],
	          'Dispatcher.waitFor(...): Circular dependency detected while ' +
	          'waiting for `%s`.',
	          id
	        );
	        continue;
	      }
	      invariant(
	        this.$Dispatcher_callbacks[id],
	        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
	        id
	      );
	      this.$Dispatcher_invokeCallback(id);
	    }
	  };
	
	  /**
	   * Dispatches a payload to all registered callbacks.
	   *
	   * @param {object} payload
	   */
	  Dispatcher.prototype.dispatch=function(payload) {
	    invariant(
	      !this.$Dispatcher_isDispatching,
	      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
	    );
	    this.$Dispatcher_startDispatching(payload);
	    try {
	      for (var id in this.$Dispatcher_callbacks) {
	        if (this.$Dispatcher_isPending[id]) {
	          continue;
	        }
	        this.$Dispatcher_invokeCallback(id);
	      }
	    } finally {
	      this.$Dispatcher_stopDispatching();
	    }
	  };
	
	  /**
	   * Is this Dispatcher currently dispatching.
	   *
	   * @return {boolean}
	   */
	  Dispatcher.prototype.isDispatching=function() {
	    return this.$Dispatcher_isDispatching;
	  };
	
	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @param {string} id
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
	    this.$Dispatcher_isPending[id] = true;
	    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
	    this.$Dispatcher_isHandled[id] = true;
	  };
	
	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @param {object} payload
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
	    for (var id in this.$Dispatcher_callbacks) {
	      this.$Dispatcher_isPending[id] = false;
	      this.$Dispatcher_isHandled[id] = false;
	    }
	    this.$Dispatcher_pendingPayload = payload;
	    this.$Dispatcher_isDispatching = true;
	  };
	
	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
	    this.$Dispatcher_pendingPayload = null;
	    this.$Dispatcher_isDispatching = false;
	  };
	
	
	module.exports = Dispatcher;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.setAppState = setAppState;
	exports.snapshot = snapshot;
	exports.saveInitialSnapshot = saveInitialSnapshot;
	exports.filterSnapshots = filterSnapshots;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _utilsFunctions = __webpack_require__(17);
	
	var fn = _interopRequireWildcard(_utilsFunctions);
	
	function setAppState(instance, data, onStore) {
	  var obj = instance.deserialize(data);
	  fn.eachObject(function (key, value) {
	    var store = instance.stores[key];
	    if (store) {
	      (function () {
	        var config = store.StoreModel.config;
	
	        var state = store.state;
	        if (config.onDeserialize) obj[key] = config.onDeserialize(value) || value;
	        fn.eachObject(function (k) {
	          return delete state[k];
	        }, [state]);
	        fn.assign(state, obj[key]);
	        onStore(store);
	      })();
	    }
	  }, [obj]);
	}
	
	function snapshot(instance) {
	  var storeNames = arguments[1] === undefined ? [] : arguments[1];
	
	  var stores = storeNames.length ? storeNames : Object.keys(instance.stores);
	  return stores.reduce(function (obj, storeHandle) {
	    var storeName = storeHandle.displayName || storeHandle;
	    var store = instance.stores[storeName];
	    var config = store.StoreModel.config;
	
	    store.lifecycle('snapshot');
	    var customSnapshot = config.onSerialize && config.onSerialize(store.state);
	    obj[storeName] = customSnapshot ? customSnapshot : store.getState();
	    return obj;
	  }, {});
	}
	
	function saveInitialSnapshot(instance, key) {
	  var state = instance.deserialize(instance.serialize(instance.stores[key].state));
	  instance._initSnapshot[key] = state;
	  instance._lastSnapshot[key] = state;
	}
	
	function filterSnapshots(instance, state, stores) {
	  return stores.reduce(function (obj, store) {
	    var storeName = store.displayName || store;
	    if (!state[storeName]) {
	      throw new ReferenceError(storeName + ' is not a valid store');
	    }
	    obj[storeName] = state[storeName];
	    return obj;
	  }, {});
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports['default'] = makeAction;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _utilsFunctions = __webpack_require__(17);
	
	var fn = _interopRequireWildcard(_utilsFunctions);
	
	var _utilsAltUtils = __webpack_require__(16);
	
	var utils = _interopRequireWildcard(_utilsAltUtils);
	
	var AltAction = (function () {
	  function AltAction(alt, id, action, actions, actionDetails) {
	    _classCallCheck(this, AltAction);
	
	    this.id = id;
	    this._dispatch = action.bind(this);
	    this.actions = actions;
	    this.actionDetails = actionDetails;
	    this.alt = alt;
	  }
	
	  _createClass(AltAction, [{
	    key: 'dispatch',
	    value: function dispatch(data) {
	      this.dispatched = true;
	      this.alt.dispatch(this.id, data, this.actionDetails);
	    }
	  }]);
	
	  return AltAction;
	})();
	
	function makeAction(alt, namespace, name, implementation, obj) {
	  var id = utils.uid(alt._actionsRegistry, namespace + '.' + name);
	  alt._actionsRegistry[id] = 1;
	
	  var data = { id: id, namespace: namespace, name: name };
	
	  // Wrap the action so we can provide a dispatch method
	  var newAction = new AltAction(alt, id, implementation, obj, data);
	
	  var dispatch = function dispatch(payload) {
	    return alt.dispatch(id, payload, data);
	  };
	
	  // the action itself
	  var action = function action() {
	    newAction.dispatched = false;
	    var result = newAction._dispatch.apply(newAction, arguments);
	    // async functions that return promises should not be dispatched
	    if (!newAction.dispatched && result !== undefined && !fn.isPromise(result)) {
	      if (fn.isFunction(result)) {
	        result(dispatch);
	      } else {
	        dispatch(result);
	      }
	    }
	    return result;
	  };
	  action.defer = function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    setTimeout(function () {
	      newAction._dispatch.apply(null, args);
	    });
	  };
	  action.id = id;
	  action.data = data;
	
	  // ensure each reference is unique in the namespace
	  var container = alt.actions[namespace];
	  var namespaceId = utils.uid(container, name);
	  container[namespaceId] = action;
	
	  return action;
	}
	
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _flux = __webpack_require__(13);
	
	var _flux2 = _interopRequireDefault(_flux);
	
	var WishlistActions = (function () {
	  function WishlistActions() {
	    _classCallCheck(this, WishlistActions);
	  }
	
	  _createClass(WishlistActions, [{
	    key: 'addSku',
	    value: function addSku(sku) {
	      this.dispatch(sku);
	    }
	  }]);
	
	  return WishlistActions;
	})();
	
	exports['default'] = _flux2['default'].createActions(WishlistActions);
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Picture = __webpack_require__(29);
	
	var _Picture2 = _interopRequireDefault(_Picture);
	
	var _Price = __webpack_require__(30);
	
	var _Price2 = _interopRequireDefault(_Price);
	
	var _AddCart = __webpack_require__(28);
	
	var _AddCart2 = _interopRequireDefault(_AddCart);
	
	var _Delete = __webpack_require__(31);
	
	var _Delete2 = _interopRequireDefault(_Delete);
	
	var _Description = __webpack_require__(32);
	
	var _Description2 = _interopRequireDefault(_Description);
	
	var WishlistItem = _react2['default'].createClass({
	  displayName: 'WishlistItem',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'nav',
	      { className: "col-md-12 navbar navbar-default" },
	      _react2['default'].createElement(
	        'div',
	        { className: "container-fluid row" },
	        _react2['default'].createElement(
	          'div',
	          { className: "col-xs-4 navbar-default" },
	          _react2['default'].createElement(_Picture2['default'], { sku: this.props.sku })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: "col-xs-4 navbar-default" },
	          _react2['default'].createElement(_Description2['default'], { sku: this.props.sku })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: "col-xs-4 navbar-deafult" },
	          _react2['default'].createElement(
	            'div',
	            { className: "col-xs-12" },
	            _react2['default'].createElement(
	              'div',
	              { className: "col-xs-6" },
	              _react2['default'].createElement(_Price2['default'], { sku: this.props.sku })
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: "col-xs-6" },
	              _react2['default'].createElement(_Delete2['default'], { sku: this.props.sku })
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: "col-xs-12" },
	            _react2['default'].createElement(_AddCart2['default'], { sku: this.props.sku })
	          )
	        )
	      )
	    );
	  }
	});
	
	exports['default'] = WishlistItem;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var AddCart = _react2['default'].createClass({
	  displayName: 'AddCart',
	
	  addClick: function addClick() {
	    console.log('Produto adicionado ao carrinho');
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: "col-xs-4 navbar-form navbar-right row container-fluid" },
	      _react2['default'].createElement(
	        'button',
	        { type: "button",
	          className: "glyphicon glyphicon-shopping-cart btn btn-success",
	          onClick: this.addClick },
	        'AddCart'
	      )
	    );
	  }
	});
	
	exports['default'] = AddCart;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stylesWishlistItemLess = __webpack_require__(35);
	
	// eslint-disable
	
	var _stylesWishlistItemLess2 = _interopRequireDefault(_stylesWishlistItemLess);
	
	var Picture = _react2['default'].createClass({
	  displayName: 'Picture',
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: "row container-fluid" },
	      _react2['default'].createElement('img', { src: "https://placekitten.com/g/200/300", className: "img-responsive img-rounded product__img center-block" })
	    );
	  }
	});
	
	exports['default'] = Picture;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Price = _react2["default"].createClass({
	  displayName: "Price",
	
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "col-xs-4 " },
	      _react2["default"].createElement(
	        "p",
	        { className: "text-center navbar-brand" },
	        "R$ ",
	        this.props.sku.price
	      )
	    );
	  }
	});
	exports["default"] = Price;
	module.exports = exports["default"];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Delete = _react2['default'].createClass({
	  displayName: 'Delete',
	
	  delClick: function delClick() {
	    console.log('Produto excluido');
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: "col-xs-4 navbar-form row container-fluid" },
	      _react2['default'].createElement(
	        'button',
	        { type: "button",
	          className: "btn btn-danger",
	          onClick: this.delClick },
	        'X'
	      )
	    );
	  }
	});
	
	exports['default'] = Delete;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Description = _react2["default"].createClass({
	  displayName: "Description",
	
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      null,
	      _react2["default"].createElement(
	        "p",
	        { className: "text-center navbar-form" },
	        this.props.sku.description
	      )
	    );
	  }
	});
	
	exports["default"] = Description;
	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _catalogSkuItem = __webpack_require__(34);
	
	var _catalogSkuItem2 = _interopRequireDefault(_catalogSkuItem);
	
	var Catalog = _react2['default'].createClass({
	  displayName: 'Catalog',
	
	  getInitialState: function getInitialState() {
	    return {
	      skus: [{ id: 1, description: 'Tenis Nike', category: 'calçado', price: 99.0 }, { id: 2, description: 'Camisa Polo', category: 'camisa', price: 80 }, { id: 3, description: 'Casaco Ecko', category: 'casaco', price: 247.90 }, { id: 4, description: 'Tenis Adidas', category: 'calçado', price: 270.0 }, { id: 5, description: 'Tenis Reebok', category: 'calçado', price: 130.0 }]
	    };
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'nav',
	      { className: "col-xs-12 navbar navbar-default" },
	      _react2['default'].createElement(
	        'div',
	        { className: "container-fluid row center-block" },
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'Catalogo Fake'
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: "center" },
	          this.state.skus.map(function (sku, index) {
	            return _react2['default'].createElement(_catalogSkuItem2['default'], { sku: sku, key: index });
	          })
	        )
	      )
	    );
	  }
	});
	
	exports['default'] = Catalog;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _actionsWishlistActions = __webpack_require__(26);
	
	var _actionsWishlistActions2 = _interopRequireDefault(_actionsWishlistActions);
	
	var SkuItem = _react2['default'].createClass({
	  displayName: 'SkuItem',
	
	  addSkuToWishlist: function addSkuToWishlist() {
	    _actionsWishlistActions2['default'].addSku(this.props.sku);
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: "col-xs-1 navbar-form" },
	      _react2['default'].createElement(
	        'p',
	        null,
	        this.props.sku.description
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'Categoria: ',
	        this.props.sku.category
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'R$ ',
	        this.props.sku.price
	      ),
	      _react2['default'].createElement('button', {
	        className: "glyphicon glyphicon-heart btn btn-default",
	        onClick: this.addSkuToWishlist })
	    );
	  }
	});
	
	exports['default'] = SkuItem;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/bellacorbo/Git/wishlist/node_modules/css-loader/index.js!/home/bellacorbo/Git/wishlist/node_modules/less-loader/index.js!/home/bellacorbo/Git/wishlist/src/styles/WishlistItem.less", function() {
			var newContent = require("!!/home/bellacorbo/Git/wishlist/node_modules/css-loader/index.js!/home/bellacorbo/Git/wishlist/node_modules/less-loader/index.js!/home/bellacorbo/Git/wishlist/src/styles/WishlistItem.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	exports.push([module.id, ".product__img {\n  height: 100px;\n  margin-top: 5px;\n}\n", ""]);

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ }
/******/ ]);
//# sourceMappingURL=WishlistApp.js.map