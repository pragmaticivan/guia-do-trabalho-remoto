/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonppageComponent"];
/******/ 	window["webpackJsonppageComponent"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		16: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentRenderer = exports.ComponentRegistry = exports.ComponentDataManager = exports.Component = undefined;

var _events = __webpack_require__(83);

Object.keys(_events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _events[key];
    }
  });
});

var _Component = __webpack_require__(116);

var _Component2 = _interopRequireDefault(_Component);

var _ComponentDataManager = __webpack_require__(81);

var _ComponentDataManager2 = _interopRequireDefault(_ComponentDataManager);

var _ComponentRegistry = __webpack_require__(117);

var _ComponentRegistry2 = _interopRequireDefault(_ComponentRegistry);

var _ComponentRenderer = __webpack_require__(82);

var _ComponentRenderer2 = _interopRequireDefault(_ComponentRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Component2.default;
exports.Component = _Component2.default;
exports.ComponentDataManager = _ComponentDataManager2.default;
exports.ComponentRegistry = _ComponentRegistry2.default;
exports.ComponentRenderer = _ComponentRenderer2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.validators = exports.SoyAop = exports.Soy = exports.Config = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

__webpack_require__(131);

var _metalComponent = __webpack_require__(0);

var _metal = __webpack_require__(2);

var _metalState = __webpack_require__(8);

var _html2incdom = __webpack_require__(113);

var _html2incdom2 = _interopRequireDefault(_html2incdom);

var _metalIncrementalDom = __webpack_require__(87);

var _metalIncrementalDom2 = _interopRequireDefault(_metalIncrementalDom);

var _SoyAop = __webpack_require__(132);

var _SoyAop2 = _interopRequireDefault(_SoyAop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// The injected data that will be passed to soy templates.
var ijData = {};

var Soy = function (_IncrementalDomRender) {
	_inherits(Soy, _IncrementalDomRender);

	function Soy() {
		_classCallCheck(this, Soy);

		return _possibleConstructorReturn(this, (Soy.__proto__ || Object.getPrototypeOf(Soy)).apply(this, arguments));
	}

	_createClass(Soy, [{
		key: 'getExtraDataConfig',

		/**
   * Adds the template params to the component's state, if they don't exist yet.
   * @param {!Component} component
   * @return {Object}
   */
		value: function getExtraDataConfig(component) {
			var elementTemplate = component.constructor.TEMPLATE;
			if (!(0, _metal.isFunction)(elementTemplate)) {
				return;
			}

			elementTemplate = _SoyAop2.default.getOriginalFn(elementTemplate);
			this.soyParamTypes_ = elementTemplate.types || {};

			var keys = elementTemplate.params || [];
			var configs = {};
			for (var i = 0; i < keys.length; i++) {
				if (!component[keys[i]]) {
					configs[keys[i]] = {};
				}
			}
			return configs;
		}

		/**
   * Copies the component's state to an object so it can be passed as it's
   * template call's data. The copying needs to be done because, if the component
   * itself is passed directly, some problems occur when soy tries to merge it
   * with other data, due to property getters and setters. This is safer.
   * Also calls the component's "prepareStateForRender" to let it change the
   * data passed to the template.
   * @param {!Component} component
   * @param {!Array<string>} params The params used by this template.
   * @return {!Object}
   * @protected
   */

	}, {
		key: 'buildTemplateData_',
		value: function buildTemplateData_(component, params) {
			var _this2 = this;

			var data = _metal.object.mixin({}, this.getConfig(component));
			component.getStateKeys().forEach(function (key) {
				var value = component[key];
				if (_this2.isHtmlParam_(component, key)) {
					value = soyRenderer_.toIncDom(value);
				}
				data[key] = value;
			});

			for (var i = 0; i < params.length; i++) {
				if (!data[params[i]] && (0, _metal.isFunction)(component[params[i]])) {
					data[params[i]] = component[params[i]].bind(component);
				}
			}

			if ((0, _metal.isFunction)(component.prepareStateForRender)) {
				return component.prepareStateForRender(data) || data;
			} else {
				return data;
			}
		}

		/**
   * Returns the requested template function. This function will be wrapped in
   * another though, just to defer the requirement of the template's module
   * being ready until the function is actually called.
   * @param {string} namespace The soy template's namespace.
   * @param {string} templateName The name of the template function.
   * @return {!function()}
   */

	}, {
		key: 'getTemplate',
		value: function getTemplate(namespace, templateName) {
			return function (opt_data, opt_ignored, opt_ijData) {
				if (!goog.loadedModules_[namespace]) {
					throw new Error('No template with namespace "' + namespace + '" has been loaded yet.');
				}
				return goog.loadedModules_[namespace][templateName](opt_data, opt_ignored, opt_ijData);
			};
		}

		/**
   * Handles an intercepted soy template call. If the call is for a component's
   * main template, then it will be replaced with a call that incremental dom
   * can use for both handling an instance of that component and rendering it.
   * @param {!function()} originalFn The original template function that was
   *     intercepted.
   * @param {Object} data The data the template was called with.
   * @protected
   */

	}, {
		key: 'handleInterceptedCall_',
		value: function handleInterceptedCall_(originalFn) {
			var opt_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var args = [originalFn.componentCtor, null, []];
			for (var key in opt_data) {
				args.push(key, opt_data[key]);
			}
			IncrementalDOM.elementVoid.apply(null, args);
		}

		/**
   * Checks if the given param type is html.
   * @param {!Component} component
   * @param {string} name
   * @protected
   */

	}, {
		key: 'isHtmlParam_',
		value: function isHtmlParam_(component, name) {
			var state = component.getDataManager().getStateInstance(component);
			if (state.getStateKeyConfig(name).isHtml) {
				return true;
			}

			var elementTemplate = _SoyAop2.default.getOriginalFn(component.constructor.TEMPLATE);
			var type = (elementTemplate.types || {})[name] || '';
			return type.split('|').indexOf('html') !== -1;
		}

		/**
   * Registers the given templates to be used by `Soy` for the specified
   * component constructor.
   * @param {!Function} componentCtor The constructor of the component that
   *     should use the given templates.
   * @param {!Object} templates Object containing soy template functions.
   * @param {string=} mainTemplate The name of the main template that should be
   *     used to render the component. Defaults to "render".
   */

	}, {
		key: 'register',
		value: function register(componentCtor, templates) {
			var mainTemplate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'render';

			componentCtor.RENDERER = soyRenderer_;
			componentCtor.TEMPLATE = _SoyAop2.default.getOriginalFn(templates[mainTemplate]);
			componentCtor.TEMPLATE.componentCtor = componentCtor;
			_SoyAop2.default.registerForInterception(templates, mainTemplate);
			_metalComponent.ComponentRegistry.register(componentCtor);
		}

		/**
   * Overrides the default method from `IncrementalDomRenderer` so the component's
   * soy template can be used for rendering.
   * @param {!Component} component
   * @param {!Object} data Data passed to the component when rendering it.
   * @override
   */

	}, {
		key: 'renderIncDom',
		value: function renderIncDom(component) {
			var elementTemplate = component.constructor.TEMPLATE;
			if ((0, _metal.isFunction)(elementTemplate) && !component.render) {
				elementTemplate = _SoyAop2.default.getOriginalFn(elementTemplate);
				_SoyAop2.default.startInterception(this.handleInterceptedCall_);
				var data = this.buildTemplateData_(component, elementTemplate.params || []);
				elementTemplate(data, null, ijData);
				_SoyAop2.default.stopInterception();
			} else {
				_get(Soy.prototype.__proto__ || Object.getPrototypeOf(Soy.prototype), 'renderIncDom', this).call(this, component);
			}
		}

		/**
   * Sets the injected data object that should be passed to templates.
   * @param {Object} data
   */

	}, {
		key: 'setInjectedData',
		value: function setInjectedData(data) {
			ijData = data || {};
		}

		/**
   * Overrides the original `IncrementalDomRenderer` method so that only
   * state keys used by the main template can cause updates.
   * @param {!Component} component
   * @param {Object} changes
   * @return {boolean}
   */

	}, {
		key: 'shouldUpdate',
		value: function shouldUpdate(component, changes) {
			var should = _get(Soy.prototype.__proto__ || Object.getPrototypeOf(Soy.prototype), 'shouldUpdate', this).call(this, component, changes);
			if (!should || component.shouldUpdate) {
				return should;
			}

			var fn = component.constructor.TEMPLATE;
			var params = fn ? _SoyAop2.default.getOriginalFn(fn).params : [];
			for (var i = 0; i < params.length; i++) {
				if (changes.props[params[i]]) {
					return true;
				}
			}
			return false;
		}

		/**
   * Converts the given incremental dom function into an html string.
   * @param {!function()} incDomFn
   * @return {string}
   */

	}, {
		key: 'toHtmlString',
		value: function toHtmlString(incDomFn) {
			var element = document.createElement('div');
			IncrementalDOM.patch(element, incDomFn);
			return element.innerHTML;
		}

		/**
   * Converts the given html string into an incremental dom function.
   * @param {string|{contentKind: string, content: string}} value
   * @return {!function()}
   */

	}, {
		key: 'toIncDom',
		value: function toIncDom(value) {
			if ((0, _metal.isObject)(value) && (0, _metal.isString)(value.content) && value.contentKind === 'HTML') {
				value = value.content;
			}
			if ((0, _metal.isString)(value)) {
				value = _html2incdom2.default.buildFn(value);
			}
			return value;
		}
	}]);

	return Soy;
}(_metalIncrementalDom2.default.constructor);

var soyRenderer_ = new Soy();
soyRenderer_.RENDERER_NAME = 'soy';

exports.default = soyRenderer_;
exports.Config = _metalState.Config;
exports.Soy = soyRenderer_;
exports.SoyAop = _SoyAop2.default;
exports.validators = _metalState.validators;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = exports.object = exports.Disposable = exports.async = exports.array = undefined;

var _core = __webpack_require__(94);

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

var _core2 = _interopRequireDefault(_core);

var _array = __webpack_require__(136);

var _array2 = _interopRequireDefault(_array);

var _async = __webpack_require__(137);

var _async2 = _interopRequireDefault(_async);

var _Disposable = __webpack_require__(139);

var _Disposable2 = _interopRequireDefault(_Disposable);

var _object = __webpack_require__(140);

var _object2 = _interopRequireDefault(_object);

var _string = __webpack_require__(141);

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.array = _array2.default;
exports.async = _async2.default;
exports.Disposable = _Disposable2.default;
exports.object = _object2.default;
exports.string = _string2.default;
exports.default = _core2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalEvalStyles = exports.globalEval = exports.features = exports.DomEventHandle = exports.DomEventEmitterProxy = exports.domData = undefined;

var _dom = __webpack_require__(77);

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dom[key];
    }
  });
});

var _dom2 = _interopRequireDefault(_dom);

var _domData = __webpack_require__(79);

var _domData2 = _interopRequireDefault(_domData);

var _DomEventEmitterProxy = __webpack_require__(120);

var _DomEventEmitterProxy2 = _interopRequireDefault(_DomEventEmitterProxy);

var _DomEventHandle = __webpack_require__(84);

var _DomEventHandle2 = _interopRequireDefault(_DomEventHandle);

var _features = __webpack_require__(85);

var _features2 = _interopRequireDefault(_features);

var _globalEval = __webpack_require__(123);

var _globalEval2 = _interopRequireDefault(_globalEval);

var _globalEvalStyles = __webpack_require__(124);

var _globalEvalStyles2 = _interopRequireDefault(_globalEvalStyles);

__webpack_require__(122);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.domData = _domData2.default;
exports.DomEventEmitterProxy = _DomEventEmitterProxy2.default;
exports.DomEventHandle = _DomEventHandle2.default;
exports.features = _features2.default;
exports.globalEval = _globalEval2.default;
exports.globalEvalStyles = _globalEvalStyles2.default;
exports.default = _dom2.default;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventHandler = exports.EventHandle = exports.EventEmitterProxy = exports.EventEmitter = undefined;

var _EventEmitter = __webpack_require__(125);

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _EventEmitterProxy = __webpack_require__(126);

var _EventEmitterProxy2 = _interopRequireDefault(_EventEmitterProxy);

var _EventHandle = __webpack_require__(86);

var _EventHandle2 = _interopRequireDefault(_EventHandle);

var _EventHandler = __webpack_require__(127);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _EventEmitter2.default;
exports.EventEmitter = _EventEmitter2.default;
exports.EventEmitterProxy = _EventEmitterProxy2.default;
exports.EventHandle = _EventHandle2.default;
exports.EventHandler = _EventHandler2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.State = exports.Config = exports.validators = undefined;

var _validators = __webpack_require__(93);

var _validators2 = _interopRequireDefault(_validators);

var _Config = __webpack_require__(133);

var _Config2 = _interopRequireDefault(_Config);

var _State = __webpack_require__(134);

var _State2 = _interopRequireDefault(_State);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _State2.default;
exports.validators = _validators2.default;
exports.Config = _Config2.default;
exports.State = _State2.default;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(1);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _metalToggler = __webpack_require__(135);

var _metalToggler2 = _interopRequireDefault(_metalToggler);

var _Sidebar = __webpack_require__(157);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
	_inherits(Sidebar, _Component);

	function Sidebar() {
		_classCallCheck(this, Sidebar);

		return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
	}

	_createClass(Sidebar, [{
		key: 'attached',
		value: function attached() {
			this._toggler = new _metalToggler2.default({
				content: '.sidebar-toggler-content',
				header: '.sidebar-header'
			});
		}
	}, {
		key: 'disposed',
		value: function disposed() {
			this._toggler.dispose();
		}
	}]);

	return Sidebar;
}(_metalComponent2.default);

;

_metalSoy2.default.register(Sidebar, _Sidebar2.default);

exports.default = Sidebar;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 76 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file exists just for backwards compatibility, making sure that old
// default imports for this file still work. It's best to use the named exports
// for each function instead though, since that allows bundlers like Rollup to
// reduce the bundle size by removing unused code.

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dom = undefined;

var _domNamed = __webpack_require__(121);

Object.keys(_domNamed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _domNamed[key];
    }
  });
});

var dom = _interopRequireWildcard(_domNamed);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = dom;
exports.dom = dom;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearData = clearData;
exports.getData = getData;
var RENDERER_DATA = '__METAL_IC_RENDERER_DATA__';

/**
 * Removes the incremental dom renderer data object for this component.
 * @param {!Component} component
 */
function clearData(component) {
  component[RENDERER_DATA] = null;
}

/**
 * Gets the incremental dom renderer data object for this component, creating
 * it if it doesn't exist yet.
 * @param {!Component} component
 * @return {!Object}
 */
function getData(component) {
  if (!component[RENDERER_DATA]) {
    component[RENDERER_DATA] = {};
  }
  return component[RENDERER_DATA];
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var METAL_DATA = '__metal_data__';

var domData = function () {
	function domData() {
		_classCallCheck(this, domData);
	}

	_createClass(domData, null, [{
		key: 'get',

		/**
   * Gets Metal.js's data for the given element.
   * @param {!Element} element
   * @param {string=} opt_name Optional property from the data to be returned.
   * @param {*} opt_initialVal Optinal value to the set the requested property
   *     to if it doesn't exist yet in the data.
   * @return {!Object}
   */
		value: function get(element, opt_name, opt_initialVal) {
			if (!element[METAL_DATA]) {
				element[METAL_DATA] = {};
			}
			if (!opt_name) {
				return element[METAL_DATA];
			}
			if (!element[METAL_DATA][opt_name] && opt_initialVal) {
				element[METAL_DATA][opt_name] = opt_initialVal;
			}
			return element[METAL_DATA][opt_name];
		}

		/**
   * Checks if the given element has data stored in it.
   * @param {!Element} element
   * @return {boolean}
   */

	}, {
		key: 'has',
		value: function has(element) {
			return !!element[METAL_DATA];
		}
	}]);

	return domData;
}();

exports.default = domData;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getOriginalFns = getOriginalFns;
exports.getOriginalFn = getOriginalFn;
exports.startInterception = startInterception;
exports.stopInterception = stopInterception;

__webpack_require__(91);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Gets the original incremental dom functions.
 * @return {!Object}
 */
function getOriginalFns() {
	return originalFns;
}

/**
 * Gets the original incremental dom function with the given name.
 * @param {string} name
 * @return {!Object}
 */
function getOriginalFn(name) {
	return originalFns[name];
}

/**
 * Starts intercepting calls to incremental dom, replacing them with the given
 * functions. Note that `elementVoid`, `elementOpenStart`, `elementOpenEnd`
 * and `attr` are the only ones that can't be intercepted, since they'll
 * automatically be converted into equivalent calls to `elementOpen` and
 * `elementClose`.
 * @param {!Object} fns Functions to be called instead of the original ones
 *     from incremental DOM. Should be given as a map from the function name
 *     to the function that should intercept it. All interceptors will receive
 *     the original function as the first argument, the actual arguments from
 *     from the original call following it.
 */
function startInterception(fns) {
	fns.attr = fnAttr;
	fns.elementOpenEnd = fnOpenEnd;
	fns.elementOpenStart = fnOpenStart;
	fns.elementVoid = fnVoid;
	fnStack.push(fns);
}

/**
 * Restores the original `elementOpen` function from incremental dom to the
 * implementation it used before the last call to `startInterception`.
 */
function stopInterception() {
	fnStack.pop();
}

var originalFns = {
	attr: IncrementalDOM.attr,
	attributes: IncrementalDOM.attributes[IncrementalDOM.symbols.default],
	elementClose: IncrementalDOM.elementClose,
	elementOpen: IncrementalDOM.elementOpen,
	elementOpenEnd: IncrementalDOM.elementOpenEnd,
	elementOpenStart: IncrementalDOM.elementOpenStart,
	elementVoid: IncrementalDOM.elementVoid,
	text: IncrementalDOM.text
};

var fnStack = [];

var collectedArgs = [];

function fnAttr(name, value) {
	collectedArgs.push(name, value);
}

function fnOpenStart(tag, key, statics) {
	collectedArgs = [tag, key, statics];
}

function fnOpenEnd() {
	var _IncrementalDOM;

	return (_IncrementalDOM = IncrementalDOM).elementOpen.apply(_IncrementalDOM, _toConsumableArray(collectedArgs));
}

function fnVoid() {
	IncrementalDOM.elementOpen.apply(null, arguments);
	return IncrementalDOM.elementClose.apply(null, arguments);
}

function getStack() {
	return fnStack.length > 0 ? fnStack[fnStack.length - 1] : null;
}

function buildHandleCall(name) {
	var data = {
		name: name
	};
	var fn = handleCall.bind(data);
	return fn;
}

function handleCall() {
	var name = this.name; // eslint-disable-line
	var stack = getStack();
	var fn = stack && stack[name] || originalFns[name];
	return fn.apply(null, arguments);
}

IncrementalDOM.attr = buildHandleCall('attr');
IncrementalDOM.elementClose = buildHandleCall('elementClose');
IncrementalDOM.elementOpen = buildHandleCall('elementOpen');
IncrementalDOM.elementOpenEnd = buildHandleCall('elementOpenEnd');
IncrementalDOM.elementOpenStart = buildHandleCall('elementOpenStart');
IncrementalDOM.elementVoid = buildHandleCall('elementVoid');
IncrementalDOM.text = buildHandleCall('text');

IncrementalDOM.attributes[IncrementalDOM.symbols.default] = buildHandleCall('attributes');

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _metalState = __webpack_require__(8);

var _metalState2 = _interopRequireDefault(_metalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BLACKLIST = {
	components: true,
	context: true,
	element: true,
	refs: true,
	state: true,
	stateKey: true,
	wasRendered: true
};
var DATA_MANAGER_DATA = '__DATA_MANAGER_DATA__';

var ComponentDataManager = function () {
	function ComponentDataManager() {
		_classCallCheck(this, ComponentDataManager);
	}

	_createClass(ComponentDataManager, [{
		key: 'createState_',

		/**
   * Creates the `State` instance that will handle the main component data.
   * @param {!Component} component
   * @param {!Object} data
   * @protected
   */
		value: function createState_(component, data) {
			var state = new _metalState2.default(component.getInitialConfig(), component, component);
			state.setKeysBlacklist(BLACKLIST);
			state.configState(_metal.object.mixin({}, data, _metalState2.default.getStateStatic(component.constructor)));
			this.getManagerData(component).state_ = state;
		}

		/**
   * Disposes of any data being used by the manager in this component.
   * @param {!Component} component
   */

	}, {
		key: 'dispose',
		value: function dispose(component) {
			var data = this.getManagerData(component);
			if (data.state_) {
				data.state_.dispose();
			}
			component[DATA_MANAGER_DATA] = null;
		}

		/**
   * Gets the data with the given name.
   * @param {!Component} component
   * @param {string} name
   * @return {*}
   */

	}, {
		key: 'get',
		value: function get(component, name) {
			return this.getManagerData(component).state_.get(name);
		}

		/**
   * Gets the manager data for the given component.
   * @param {!Component} component
   * @return {Object}
   */

	}, {
		key: 'getManagerData',
		value: function getManagerData(component) {
			return component[DATA_MANAGER_DATA];
		}

		/**
   * Gets the keys for state data that can be synced via `sync` functions.
   * @param {!Component} component
   * @return {!Array<string>}
   */

	}, {
		key: 'getSyncKeys',
		value: function getSyncKeys(component) {
			return this.getManagerData(component).state_.getStateKeys();
		}

		/**
   * Gets the keys for state data.
   * @param {!Component} component
   * @return {!Array<string>}
   */

	}, {
		key: 'getStateKeys',
		value: function getStateKeys(component) {
			return this.getManagerData(component).state_.getStateKeys();
		}

		/**
   * Gets the whole state data.
   * @param {!Component} component
   * @return {!Object}
   */

	}, {
		key: 'getState',
		value: function getState(component) {
			return this.getManagerData(component).state_.getState();
		}

		/**
   * Gets the `State` instance being used.
   * @param {!Component} component
   * @return {!Object}
   */

	}, {
		key: 'getStateInstance',
		value: function getStateInstance(component) {
			return this.getManagerData(component).state_;
		}

		/**
   * Updates all non internal data with the given values (or to the default
   * value if none is given).
   * @param {!Component} component
   * @param {!Object} data
   * @param {State=} opt_state
   */

	}, {
		key: 'replaceNonInternal',
		value: function replaceNonInternal(component, data, opt_state) {
			var state = opt_state || this.getManagerData(component).state_;
			var keys = state.getStateKeys();
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				if (!state.getStateKeyConfig(key).internal) {
					if (data.hasOwnProperty(key)) {
						state.set(key, data[key]);
					} else {
						state.setDefaultValue(key);
					}
				}
			}
		}

		/**
   * Sets the value of all the specified state keys.
   * @param {!Component} component
   * @param {!Object.<string,*>} values A map of state keys to the values they
   *   should be set to.
   * @param {function()=} opt_callback An optional function that will be run
   *   after the next batched update is triggered.
   */

	}, {
		key: 'setState',
		value: function setState(component, state, opt_callback) {
			this.getManagerData(component).state_.setState(state, opt_callback);
		}

		/**
   * Sets up the specified component's data.
   * @param {!Component} component
   * @param {!Object} data
   */

	}, {
		key: 'setUp',
		value: function setUp(component, data) {
			component[DATA_MANAGER_DATA] = {};
			this.createState_(component, data);
		}
	}]);

	return ComponentDataManager;
}();

exports.default = new ComponentDataManager();

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Base class that component renderers should extend from. It defines the
 * required methods all renderers should have.
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentRenderer = function () {
	function ComponentRenderer() {
		_classCallCheck(this, ComponentRenderer);
	}

	_createClass(ComponentRenderer, [{
		key: 'dispose',


		/**
   * Disposes of any data specific to the given component.
   * @param {!Component} component
   */
		value: function dispose() {}

		/**
   * Returns extra configuration for data that should be added to the manager.
   * Sub classes can override to return `State` config for properties that
   * should be added to the component.
   * @param {!Component} component
   * @return {Object}
   */

	}, {
		key: 'getExtraDataConfig',
		value: function getExtraDataConfig() {}

		/**
   * Renders the whole content (including its main element) and informs the
   * component about it. Should be overridden by sub classes.
   * @param {!Component} component
   */

	}, {
		key: 'render',
		value: function render(component) {
			if (!component.element) {
				component.element = document.createElement('div');
			}
			component.informRendered();
		}

		/**
   * Sets up this component to be used by this renderer. Sub classes should
   * override as needed for more behavior.
   * @param {!Component} component
   */

	}, {
		key: 'setUp',
		value: function setUp() {}

		/**
   * Updates the component's element html. This is automatically called when
   * the value of at least one of the component's state keys has changed.
   * Should be implemented by sub classes. Sub classes have to remember to call
   * "informRendered" on the component when any update rendering is done.
   * @param {!Component} component
   * @param {Object.<string, Object>} changes Object containing the names
   *     of all changed state keys, each mapped to an object with its new
   *     (newVal) and previous (prevVal) values.
   */

	}, {
		key: 'update',
		value: function update() {}
	}]);

	return ComponentRenderer;
}();

exports.default = new ComponentRenderer();

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addListenersFromObj = addListenersFromObj;
exports.getComponentFn = getComponentFn;

var _metal = __webpack_require__(2);

/**
 * Adds the listeners specified in the given object.
 * @param {!Component} component
 * @param {Object} events
 * @return {!Array<!EventHandle>} Handles from all subscribed events.
 */
function addListenersFromObj(component, events) {
	var eventNames = Object.keys(events || {});
	var handles = [];
	for (var i = 0; i < eventNames.length; i++) {
		var info = extractListenerInfo_(component, events[eventNames[i]]);
		if (info.fn) {
			var handle = void 0;
			if (info.selector) {
				handle = component.delegate(eventNames[i], info.selector, info.fn);
			} else {
				handle = component.on(eventNames[i], info.fn);
			}
			handles.push(handle);
		}
	}
	return handles;
}

/**
 * Extracts listener info from the given value.
 * @param {!Component} component
 * @param {!Component} component
 * @param {function()|string|{selector:string,fn:function()|string}} value
 * @return {!{selector:string,fn:function()}}
 * @protected
 */
function extractListenerInfo_(component, value) {
	var info = {
		fn: value
	};
	if ((0, _metal.isObject)(value) && !(0, _metal.isFunction)(value)) {
		info.selector = value.selector;
		info.fn = value.fn;
	}
	if ((0, _metal.isString)(info.fn)) {
		info.fn = getComponentFn(component, info.fn);
	}
	return info;
}

/**
 * Gets the listener function from its name. Throws an error if none exist.
 * @param {!Component} component
 * @param {string} fnName
 * @return {function()}
 */
function getComponentFn(component, fnName) {
	if ((0, _metal.isFunction)(component[fnName])) {
		return component[fnName].bind(component);
	} else {
		console.error('No function named ' + fnName + ' was found in the component\n\t\t\t"' + (0, _metal.getFunctionName)(component.constructor) + '". Make sure that you specify\n\t\t\tvalid function names when adding inline listeners');
	}
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalEvents = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is a special EventHandle, that is responsible for dom events, instead
 * of EventEmitter events.
 * @extends {EventHandle}
 */
var DomEventHandle = function (_EventHandle) {
	_inherits(DomEventHandle, _EventHandle);

	/**
  * The constructor for `DomEventHandle`.
  * @param {!EventEmitter} emitter Emitter the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  * @param {boolean} opt_capture Flag indicating if listener should be triggered
  *   during capture phase, instead of during the bubbling phase. Defaults to false.
  * @constructor
  */
	function DomEventHandle(emitter, event, listener, opt_capture) {
		_classCallCheck(this, DomEventHandle);

		var _this = _possibleConstructorReturn(this, (DomEventHandle.__proto__ || Object.getPrototypeOf(DomEventHandle)).call(this, emitter, event, listener));

		_this.capture_ = opt_capture;
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(DomEventHandle, [{
		key: 'removeListener',
		value: function removeListener() {
			this.emitter_.removeEventListener(this.event_, this.listener_, this.capture_);
		}
	}]);

	return DomEventHandle;
}(_metalEvents.EventHandle);

exports.default = DomEventHandle;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(77);

var _metal = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class with static methods responsible for doing browser feature checks.
 */
var features = function () {
	function features() {
		_classCallCheck(this, features);
	}

	_createClass(features, null, [{
		key: 'checkAnimationEventName',

		/**
   * Some browsers still supports prefixed animation events. This method can
   * be used to retrieve the current browser event name for both, animation
   * and transition.
   * @return {object}
   */
		value: function checkAnimationEventName() {
			if (features.animationEventName_ === undefined) {
				features.animationEventName_ = {
					animation: features.checkAnimationEventName_('animation'),
					transition: features.checkAnimationEventName_('transition')
				};
			}
			return features.animationEventName_;
		}

		/**
   * @protected
   * @param {string} type Type to test: animation, transition.
   * @return {string} Browser event name.
   */

	}, {
		key: 'checkAnimationEventName_',
		value: function checkAnimationEventName_(type) {
			var prefixes = ['Webkit', 'MS', 'O', ''];
			var typeTitleCase = _metal.string.replaceInterval(type, 0, 1, type.substring(0, 1).toUpperCase());
			var suffixes = [typeTitleCase + 'End', typeTitleCase + 'End', typeTitleCase + 'End', type + 'end'];
			for (var i = 0; i < prefixes.length; i++) {
				if (features.animationElement_.style[prefixes[i] + typeTitleCase] !== undefined) {
					return prefixes[i].toLowerCase() + suffixes[i];
				}
			}
			return type + 'end';
		}

		/**
   * Some browsers (like IE9) change the order of element attributes, when html
   * is rendered. This method can be used to check if this behavior happens on
   * the current browser.
   * @return {boolean}
   */

	}, {
		key: 'checkAttrOrderChange',
		value: function checkAttrOrderChange() {
			if (features.attrOrderChange_ === undefined) {
				var originalContent = '<div data-component="" data-ref=""></div>';
				var element = document.createElement('div');
				(0, _dom.append)(element, originalContent);
				features.attrOrderChange_ = originalContent !== element.innerHTML;
			}
			return features.attrOrderChange_;
		}
	}]);

	return features;
}();

features.animationElement_ = document.createElement('div');
features.animationEventName_ = undefined;
features.attrOrderChange_ = undefined;

exports.default = features;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * EventHandle utility. Holds information about an event subscription, and
 * allows removing them easily.
 * EventHandle is a Disposable, but it's important to note that the
 * EventEmitter that created it is not the one responsible for disposing it.
 * That responsibility is for the code that holds a reference to it.
 * @param {!EventEmitter} emitter Emitter the event was subscribed to.
 * @param {string} event The name of the event that was subscribed to.
 * @param {!Function} listener The listener subscribed to the event.
 * @constructor
 * @extends {Disposable}
 */
var EventHandle = function (_Disposable) {
	_inherits(EventHandle, _Disposable);

	function EventHandle(emitter, event, listener) {
		_classCallCheck(this, EventHandle);

		/**
   * The EventEmitter instance that the event was subscribed to.
   * @type {EventEmitter}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventHandle.__proto__ || Object.getPrototypeOf(EventHandle)).call(this));

		_this.emitter_ = emitter;

		/**
   * The name of the event that was subscribed to.
   * @type {string}
   * @protected
   */
		_this.event_ = event;

		/**
   * The listener subscribed to the event.
   * @type {Function}
   * @protected
   */
		_this.listener_ = listener;
		return _this;
	}

	/**
  * Disposes of this instance's object references.
  * @override
  */


	_createClass(EventHandle, [{
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.removeListener();
			this.emitter_ = null;
			this.listener_ = null;
		}

		/**
   * Removes the listener subscription from the emitter.
   */

	}, {
		key: 'removeListener',
		value: function removeListener() {
			if (!this.emitter_.isDisposed()) {
				this.emitter_.removeListener(this.event_, this.listener_);
			}
		}
	}]);

	return EventHandle;
}(_metal.Disposable);

exports.default = EventHandle;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(91);

var _changes = __webpack_require__(89);

var _data = __webpack_require__(78);

var _children = __webpack_require__(90);

var _patch2 = __webpack_require__(130);

var _render = __webpack_require__(92);

var _metalComponent = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IncrementalDomRenderer = function (_ComponentRenderer$co) {
	_inherits(IncrementalDomRenderer, _ComponentRenderer$co);

	function IncrementalDomRenderer() {
		_classCallCheck(this, IncrementalDomRenderer);

		return _possibleConstructorReturn(this, (IncrementalDomRenderer.__proto__ || Object.getPrototypeOf(IncrementalDomRenderer)).apply(this, arguments));
	}

	_createClass(IncrementalDomRenderer, [{
		key: 'buildShouldUpdateArgs',

		/**
   * Returns an array with the args that should be passed to the component's
   * `shouldUpdate` method. This can be overridden by sub classes to change
   * what the method should receive.
   * @param {Object} changes
   * @return {!Array}
   */
		value: function buildShouldUpdateArgs(changes) {
			return [changes.props];
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'dispose',
		value: function dispose(component) {
			var data = (0, _data.getData)(component);
			var ref = data.config.ref;
			var owner = data.owner;
			if (owner && owner.components && owner.components[ref] === component) {
				delete owner.components[ref];
			}

			if (data.childComponents) {
				for (var i = 0; i < data.childComponents.length; i++) {
					var child = data.childComponents[i];
					if (!child.isDisposed()) {
						child.element = null;
						child.dispose();
					}
				}
			}

			(0, _data.clearData)(component);
		}

		/**
   * Generates a key for the element currently being rendered in the given
   * component. By default, just returns the original key. Sub classes can
   * override this to change the behavior.
   * @param {!Component} component
   * @param {string} key
   * @return {?string}
   */

	}, {
		key: 'generateKey',
		value: function generateKey(component, key) {
			return key;
		}

		/**
   * Get the component's config data.
   * @param {!Component} component
   * @return {!Object}
   */

	}, {
		key: 'getConfig',
		value: function getConfig(component) {
			return (0, _data.getData)(component).config;
		}

		/**
   * Get the component's incremental dom renderer data.
   * @param {!Component} component
   * @return {!Object}
   */

	}, {
		key: 'getData',
		value: function getData(component) {
			return (0, _data.getData)(component);
		}

		/**
   * Gets the component that triggered the current patch operation.
   * @return {Component}
   */

	}, {
		key: 'getPatchingComponent',
		value: function getPatchingComponent() {
			return (0, _patch2.getPatchingComponent)();
		}

		/**
   * Handles a node having just been rendered. Sub classes should override this
   * for custom behavior.
   */

	}, {
		key: 'handleNodeRendered',
		value: function handleNodeRendered() {}

		/**
   * Checks if the given object is an incremental dom node.
   * @param {!Object} node
   * @return {boolean}
   */

	}, {
		key: 'isIncDomNode',
		value: function isIncDomNode(node) {
			return !!(0, _children.getOwner)(node);
		}

		/**
   * Calls incremental dom's patch function to render the component.
   * @param {!Component} component
   */

	}, {
		key: 'patch',
		value: function patch(component) {
			(0, _patch2.patch)(component);
		}

		/**
   * Renders the renderer's component for the first time, patching its element
   * through incremental dom function calls. If the first arg is a function
   * instead of a component instance, creates and renders this function, which
   * can either be a simple incremental dom function or a component constructor.
   * @param {!Component} component
   * @param {!Component|function()} component Can be a component instance, a
   *     simple incremental dom function or a component constructor.
   * @param {Object|Element=} opt_dataOrElement Optional config data for the
   *     function, or parent for the rendered content.
   * @param {Element=} opt_parent Optional parent for the rendered content.
   * @return {!Component} The rendered component's instance.
   */

	}, {
		key: 'render',
		value: function render(component, opt_dataOrElement, opt_parent) {
			if (component instanceof _metalComponent.Component) {
				this.patch(component);
			} else {
				return (0, _render.renderFunction)(this, component, opt_dataOrElement, opt_parent);
			}
		}

		/**
   * Renders the given child node via its owner renderer.
   * @param {!Object} child
   */

	}, {
		key: 'renderChild',
		value: function renderChild(child) {
			(0, _render.renderChild)(child);
		}

		/**
   * Calls functions from `IncrementalDOM` to build the component element's
   * content. Can be overriden by subclasses (for integration with template
   * engines for example).
   * @param {!Component} component
   */

	}, {
		key: 'renderIncDom',
		value: function renderIncDom(component) {
			if (component.render) {
				component.render();
			} else {
				IncrementalDOM.elementVoid('div');
			}
		}

		/**
   * Runs the incremental dom functions for rendering this component, without
   * calling `patch`. This function needs to be called inside a `patch`.
   * @param {!Component} component
   */

	}, {
		key: 'renderInsidePatch',
		value: function renderInsidePatch(component) {
			var shouldRender = !component.wasRendered || this.shouldUpdate(component, (0, _changes.getChanges)(component)) || IncrementalDOM.currentPointer() !== component.element;
			if (shouldRender) {
				(0, _render.render)(component);
			} else if (component.element) {
				this.skipRender();
			}
		}

		/**
   * Sets up this component to be used by this renderer.
   * @param {!Component} component
   */

	}, {
		key: 'setUp',
		value: function setUp(component) {
			component.context = {};
			component.components = {};
			component.refs = {};

			var data = (0, _data.getData)(component);
			data.config = component.getInitialConfig();
			(0, _changes.trackChanges)(component);
		}

		/**
   * Checks if the component should be updated with the current state changes.
   * @param {!Component} component
   * @param {Object} changes
   * @return {boolean}
   */

	}, {
		key: 'shouldUpdate',
		value: function shouldUpdate(component, changes) {
			if (!changes) {
				return false;
			}
			if (component.shouldUpdate) {
				return component.shouldUpdate.apply(component, _toConsumableArray(this.buildShouldUpdateArgs(changes)));
			}
			return true;
		}

		/**
   * Skips the next disposal of children components, by clearing the array as
   * if there were no children rendered the last time. This can be useful for
   * allowing components to be reused by other parent components in separate
   * render update cycles.
   * @param {!Component} component
   */

	}, {
		key: 'skipNextChildrenDisposal',
		value: function skipNextChildrenDisposal(component) {
			(0, _data.getData)(component).childComponents = null;
		}

		/**
   * Skips rendering the current node.
   */

	}, {
		key: 'skipRender',
		value: function skipRender() {
			IncrementalDOM.skipNode();
		}

		/**
   * Updates the renderer's component when state changes, patching its element
   * through incremental dom function calls.
   * @param {!Component} component
   */

	}, {
		key: 'update',
		value: function update(component) {
			if (this.shouldUpdate(component, (0, _changes.getChanges)(component))) {
				this.patch(component);
			}
		}
	}]);

	return IncrementalDomRenderer;
}(_metalComponent.ComponentRenderer.constructor);

var renderer = new IncrementalDomRenderer();

// Name of this renderer. Renderers should provide this as a way to identify
// them via a simple string (when calling enableCompatibilityMode to add
// support to old features for specific renderers for example).
renderer.RENDERER_NAME = 'incremental-dom';

exports.default = renderer;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Builds the component config object from its incremental dom call's
 * arguments.
 * @param {!Array} args
 * @return {!Object}
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.buildConfigFromCall = buildConfigFromCall;
exports.buildCallFromConfig = buildCallFromConfig;
function buildConfigFromCall(args) {
	var config = {};
	if (args[1]) {
		config.key = args[1];
	}
	var attrsArr = (args[2] || []).concat(args.slice(3));
	for (var i = 0; i < attrsArr.length; i += 2) {
		config[attrsArr[i]] = attrsArr[i + 1];
	}
	return config;
}

/**
 * Builds an incremental dom call array from the given tag and config object.
 * @param {string} tag
 * @param {!Object} config
 * @return {!Array}
 */
function buildCallFromConfig(tag, config) {
	var call = [tag, config.key, []];
	var keys = Object.keys(config);
	for (var i = 0; i < keys.length; i++) {
		if (keys[i] !== 'children' && keys[i] !== 'key') {
			call.push(keys[i], config[keys[i]]);
		}
	}
	return call;
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChanges = clearChanges;
exports.getChanges = getChanges;
exports.trackChanges = trackChanges;

var _data = __webpack_require__(78);

/**
 * Clears the changes tracked so far.
 * @param {!Object} data
 */
function clearChanges(data) {
  data.changes = null;
}

/**
 * Handles the `stateKeyChanged` event from a component. Stores change data.
 * @param {!Object} data
 * @param {!Object} eventData
 * @private
 */
function handleStateKeyChanged_(data, eventData) {
  data.changes = data.changes || {};
  var type = eventData.type || 'props';
  data.changes[type] = data.changes[type] || {};
  data.changes[type][eventData.key] = eventData;
}

/**
 * Returns an object with changes in the given component since the last time,
 * or null if there weren't any.
 * @param {!Component} component
 * @return {Object}
 */
function getChanges(component) {
  return (0, _data.getData)(component).changes;
}

/**
 * Starts tracking changes for the given component
 * @param {!Component} component
 */
function trackChanges(component) {
  var data = (0, _data.getData)(component);
  component.on('stateKeyChanged', handleStateKeyChanged_.bind(null, data));
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CHILD_OWNER = undefined;
exports.captureChildren = captureChildren;
exports.isChildTag = isChildTag;
exports.getOwner = getOwner;
exports.renderChildTree = renderChildTree;

var _callArgs = __webpack_require__(88);

var _metal = __webpack_require__(2);

var _incrementalDomAop = __webpack_require__(80);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Property identifying a specific object as a Metal.js child node, and
 * pointing to the component instance that created it.
 * @type {string}
 */
var CHILD_OWNER = exports.CHILD_OWNER = '__metalChildOwner';

/**
 * Captures all child elements from incremental dom calls.
 * @param {!Component} component The component that is capturing children.
 * @param {!function()} callback Function to be called when children have all
 *     been captured.
 * @param {Object} data Data to pass to the callback function when calling it.
 */
function captureChildren(component, callback, data) {
	owner_ = component;
	callback_ = callback;
	callbackData_ = data;
	tree_ = {
		props: {
			children: []
		}
	};
	tree_.config = tree_.props;
	currentParent_ = tree_;
	isCapturing_ = true;
	(0, _incrementalDomAop.startInterception)({
		elementClose: handleInterceptedCloseCall_,
		elementOpen: handleInterceptedOpenCall_,
		text: handleInterceptedTextCall_
	});
}

/**
 * Checks if the given tag was built from a component's children.
 * @param {*} tag
 * @return {boolean}
 */
function isChildTag(tag) {
	return (0, _metal.isDef)(tag.tag);
}

/**
 * Gets the node's original owner.
 * @param {!Object} node
 * @return {Component}
 */
function getOwner(node) {
	return node[CHILD_OWNER];
}

/**
 * Renders a children tree through incremental dom.
 * @param {!{args: Array, children: !Array, isText: ?boolean}}
 * @param {function()=} opt_skipNode Optional function that is called for
 *     each node to be rendered. If it returns true, the node will be skipped.
 * @protected
 */
function renderChildTree(tree, opt_skipNode) {
	if (isCapturing_) {
		// If capturing, just add the node directly to the captured tree.
		addChildToTree(tree);
		return;
	}

	if (opt_skipNode && opt_skipNode.call(null, tree)) {
		return;
	}

	if ((0, _metal.isDef)(tree.text)) {
		var args = tree.args ? tree.args : [];
		args[0] = tree.text;
		IncrementalDOM.text.apply(null, args);
	} else {
		var _args = (0, _callArgs.buildCallFromConfig)(tree.tag, tree.props);
		_args[0] = {
			tag: _args[0],
			owner: getOwner(tree)
		};
		IncrementalDOM.elementOpen.apply(null, _args);
		if (tree.props.children) {
			for (var i = 0; i < tree.props.children.length; i++) {
				renderChildTree(tree.props.children[i], opt_skipNode);
			}
		}
		IncrementalDOM.elementClose(tree.tag);
	}
}

var callbackData_ = void 0;
var callback_ = void 0;
var currentParent_ = void 0;
var isCapturing_ = false;
var owner_ = void 0;
var tree_ = void 0;

/**
 * Adds a child element to the tree.
 * @param {!Array} args The arguments passed to the incremental dom call.
 * @param {boolean=} opt_isText Optional flag indicating if the child is a
 *     text element.
 * @protected
 */
function addChildCallToTree_(args, opt_isText) {
	var child = _defineProperty({
		parent: currentParent_
	}, CHILD_OWNER, owner_);

	if (opt_isText) {
		child.text = args[0];
		if (args.length > 1) {
			child.args = args;
		}
	} else {
		child.tag = args[0];
		child.props = (0, _callArgs.buildConfigFromCall)(args);
		child.props.children = [];
		child.config = child.props;
	}

	addChildToTree(child);
	return child;
}

function addChildToTree(child) {
	currentParent_.props.children.push(child);
}

/**
 * Handles an intercepted call to the `elementClose` function from incremental
 * dom.
 * @protected
 */
function handleInterceptedCloseCall_() {
	if (currentParent_ === tree_) {
		(0, _incrementalDomAop.stopInterception)();
		isCapturing_ = false;
		var node = callback_.call(owner_, tree_, callbackData_);
		callback_ = null;
		callbackData_ = null;
		currentParent_ = null;
		owner_ = null;
		tree_ = null;
		return node;
	} else {
		currentParent_ = currentParent_.parent;
		return true;
	}
}

/**
 * Handles an intercepted call to the `elementOpen` function from incremental
 * dom.
 * @param {!function()} originalFn The original function before interception.
 * @protected
 */
function handleInterceptedOpenCall_() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	currentParent_ = addChildCallToTree_(args);
}

/**
 * Handles an intercepted call to the `text` function from incremental dom.
 * @param {!function()} originalFn The original function before interception.
 * @protected
 */
function handleInterceptedTextCall_() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	addChildCallToTree_(args, true);
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _incrementalDom = __webpack_require__(115);

var IncrementalDOM = _interopRequireWildcard(_incrementalDom);

var _incrementalDomString = __webpack_require__(114);

var IncrementalDOMString = _interopRequireWildcard(_incrementalDomString);

var _metal = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if ((0, _metal.isServerSide)()) {
	// Overrides global.IncrementalDOM virtual elements with incremental dom
	// string implementation for server side rendering. At the moment it does not
	// override for Node.js tests since tests are using jsdom to simulate the
	// browser.
	global.IncrementalDOM = IncrementalDOMString;
} else {
	var scope = typeof exports !== 'undefined' && typeof global !== 'undefined' ? global : window;

	scope.IncrementalDOM = IncrementalDOM;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getComponentBeingRendered = getComponentBeingRendered;
exports.isComponentTag_ = isComponentTag_;
exports.render = render;
exports.renderChild = renderChild;
exports.renderFunction = renderFunction;

var _attributes = __webpack_require__(129);

var _callArgs = __webpack_require__(88);

var _children = __webpack_require__(90);

var _changes = __webpack_require__(89);

var _metalDom = __webpack_require__(3);

var _data = __webpack_require__(78);

var _metal = __webpack_require__(2);

var _unused = __webpack_require__(128);

var _incrementalDomAop = __webpack_require__(80);

var _metalComponent = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderingComponents_ = [];
var emptyChildren_ = [];

/**
 * Adds the given css classes to the specified arguments for an incremental
 * dom call, merging with the existing value if there is one.
 * @param {string} elementClasses
 * @param {!Object} config
 * @private
 */
function addElementClasses_(elementClasses, config) {
	if (config.class) {
		config.class += ' ' + elementClasses;
		config.class = removeDuplicateClasses_(config.class);
	} else {
		config.class = elementClasses;
	}
}

/**
 * Builds the "children" array to be passed to the current component.
 * @param {!Array<!Object>} children
 * @return {!Array<!Object>}
 * @private
 */
function buildChildren_(children) {
	return children.length === 0 ? emptyChildren_ : children;
}

/**
 * Finishes the render operation, doing some cleaups.
 * @param {!Component} component
 * @private
 */
function cleanUpRender_(component) {
	(0, _incrementalDomAop.stopInterception)();
	if (!(0, _data.getData)(component).rootElementReached) {
		component.element = null;
	}
	component.informRendered();
	finishedRenderingComponent_();
}

/**
 * Removes the most recent component from the queue of rendering components.
 * @private
 */
function finishedRenderingComponent_() {
	renderingComponents_.pop();
	if (renderingComponents_.length === 0) {
		(0, _unused.disposeUnused)();
	}
}

/**
 * Generates a key for the next element to be rendered.
 * @param {!Component} component
 * @param {?string} key The key originally passed to the element.
 * @return {?string}
 * @private
 */
function generateKey_(component, key) {
	var data = (0, _data.getData)(component);
	if (!data.rootElementReached && data.config.key) {
		key = data.config.key;
	}
	return component.getRenderer().generateKey(component, key);
}

/**
 * Gets the child components stored in the given object.
 * @param {!Object} data
 * @return {!Array<!Component>}
 * @private
 */
function getChildComponents_(data) {
	data.childComponents = data.childComponents || [];
	return data.childComponents;
}

/**
 * Gets the component being currently rendered.
 * @return {Component}
 */
function getComponentBeingRendered() {
	return renderingComponents_[renderingComponents_.length - 1];
}

/**
 * Gets the data object that should be currently used. This object will either
 * come from the current element being rendered by incremental dom or from
 * the component instance being rendered (only when the current element is the
 * component's direct parent).
 * @return {!Object}
 * @private
 */
function getCurrentData() {
	var element = IncrementalDOM.currentElement();
	var comp = getComponentBeingRendered();
	var obj = (0, _data.getData)(comp);
	if (obj.rootElementReached && element !== comp.element.parentNode) {
		obj = _metalDom.domData.get(element);
	}
	obj.icComponentsData = obj.icComponentsData || {};
	return obj.icComponentsData;
}

/**
 * Returns the "ref" to be used for a component. Uses "key" as "ref" when
 * compatibility mode is on for the current renderer.
 * @param {!Component} owner
 * @param {!Object} config
 * @return {?string}
 * @private
 */
function getRef_(owner, config) {
	var compatData = (0, _metal.getCompatibilityModeData)();
	if (compatData) {
		var ownerRenderer = owner.getRenderer();
		var renderers = compatData.renderers;
		var useKey = !renderers || renderers.indexOf(ownerRenderer) !== -1 || renderers.indexOf(ownerRenderer.RENDERER_NAME) !== -1;
		if (useKey && config.key && !config.ref) {
			return config.key;
		}
	}
	return config.ref;
}

/**
 * Gets the sub component referenced by the given tag and config data,
 * creating it if it doesn't yet exist.
 * @param {string|!Function} tagOrCtor The tag name.
 * @param {!Object} config The config object for the sub component.
 * @param {!Component} owner
 * @return {!Component} The sub component.
 * @protected
 */
function getSubComponent_(tagOrCtor, config, owner) {
	var Ctor = tagOrCtor;
	if ((0, _metal.isString)(Ctor)) {
		Ctor = _metalComponent.ComponentRegistry.getConstructor(tagOrCtor);
	}

	var ref = getRef_(owner, config);
	var comp = void 0;
	if ((0, _metal.isDef)(ref)) {
		comp = match_(owner.components[ref], Ctor, config, owner);
		owner.components[ref] = comp;
		owner.refs[ref] = comp;
	} else {
		var data = getCurrentData();
		var key = config.key;
		if (!(0, _metal.isDef)(key)) {
			var type = (0, _metal.getUid)(Ctor, true);
			data.currCount = data.currCount || {};
			data.currCount[type] = data.currCount[type] || 0;
			key = '__METAL_IC__' + type + '_' + data.currCount[type]++;
		}
		comp = match_(data.prevComps ? data.prevComps[key] : null, Ctor, config, owner);
		data.currComps = data.currComps || {};
		data.currComps[key] = comp;
	}

	return comp;
}

/**
 * Handles the event of children having finished being captured.
 * @param {!Object} tree The captured children in tree format.
 * @private
 */
function handleChildrenCaptured_(tree, _ref) {
	var props = _ref.props,
	    tag = _ref.tag;

	props.children = buildChildren_(tree.props.children);
	return renderFromTag_(tag, props);
}

/**
 * Handles a child being rendered via `IncrementalDomChildren.render`. Skips
 * component nodes so that they can be rendered the correct way without
 * having to recapture both them and their children via incremental dom.
 * @param {!Object} node
 * @return {boolean}
 * @private
 */
function handleChildRender_(node) {
	if (node.tag && isComponentTag_(node.tag)) {
		node.props.children = buildChildren_(node.props.children);
		renderFromTag_(node.tag, node.props, (0, _children.getOwner)(node));
		return true;
	}
}

/**
 * Handles an intercepted call to the attributes default handler from
 * incremental dom.
 * @param {!Element} element
 * @param {string} name
 * @param {*} value
 * @private
 */
function handleInterceptedAttributesCall_(element, name, value) {
	(0, _attributes.applyAttribute)(getComponentBeingRendered(), element, name, value);
}

/**
 * Handles an intercepted call to the `elementOpen` function from incremental
 * dom.
 * @param {string} tag
 * @private
 */
function handleInterceptedOpenCall_(tag) {
	if (isComponentTag_(tag)) {
		return handleSubComponentCall_.apply(null, arguments);
	} else {
		return handleRegularCall_.apply(null, arguments);
	}
}

/**
 * Handles an intercepted call to the `elementOpen` function from incremental
 * dom, done for a regular element. Among other things, adds any inline
 * listeners found on the first render and makes sure that component root
 * elements are always reused.
 * @param {!Component} owner
 * @param {!Array} args
 * @return {!Element} The rendered element.
 * @private
 */
function handleRegularCall_() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var config = (0, _callArgs.buildConfigFromCall)(args);
	var tag = args[0];

	var comp = getComponentBeingRendered();
	var owner = comp;
	if ((0, _children.isChildTag)(tag)) {
		owner = tag.owner;
		tag = tag.tag;
	}
	config.key = generateKey_(comp, config.key);

	if (!(0, _data.getData)(comp).rootElementReached) {
		var elementClasses = comp.getDataManager().get(comp, 'elementClasses');
		if (elementClasses) {
			addElementClasses_(elementClasses, config);
		}
	}
	(0, _attributes.convertListenerNamesToFns)(comp, config);

	var call = (0, _callArgs.buildCallFromConfig)(tag, config);
	var node = (0, _incrementalDomAop.getOriginalFn)('elementOpen').apply(null, call);
	resetNodeData_(node);
	updateElementIfNotReached_(comp, node);

	if ((0, _metal.isDefAndNotNull)(config.ref)) {
		owner.refs[config.ref] = node;
	}
	owner.getRenderer().handleNodeRendered(node);

	return node;
}

/**
 * Handles an intercepted call to the `elementOpen` function from incremental
 * dom, done for a sub component element. Creates and updates the appropriate
 * sub component.
 * @private
 */
function handleSubComponentCall_() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	(0, _children.captureChildren)(getComponentBeingRendered(), handleChildrenCaptured_, {
		props: (0, _callArgs.buildConfigFromCall)(args),
		tag: args[0]
	});
}

/**
 * Checks if the given tag represents a metal component.
 * @param {string} tag
 * @return {boolean}
 * @private
 */
function isComponentTag_(tag) {
	return (0, _metal.isFunction)(tag) || (0, _metal.isString)(tag) && tag[0] === tag[0].toUpperCase();
}

/**
 * Checks if the given component can be a match for a constructor.
 * @param {!Component} comp
 * @param {!function()} Ctor
 * @param {!Component} owner
 * @return {boolean}
 * @private
 */
function isMatch_(comp, Ctor, owner) {
	if (!comp || comp.constructor !== Ctor || comp.isDisposed()) {
		return false;
	}
	return (0, _data.getData)(comp).owner === owner;
}

/**
 * Returns the given component if it matches the specified constructor
 * function. Otherwise, returns a new instance of the given constructor. On
 * both cases the component's state and config will be updated.
 * @param {Component} comp
 * @param {!function()} Ctor
 * @param {!Object} config
 * @param {!Component} owner
 * @return {!Component}
 * @private
 */
function match_(comp, Ctor, config, owner) {
	if (isMatch_(comp, Ctor, owner)) {
		comp.startSkipUpdates();
		comp.getDataManager().replaceNonInternal(comp, config);
		comp.stopSkipUpdates();
	} else {
		comp = new Ctor(config, false);
	}
	(0, _data.getData)(comp).config = config;
	return comp;
}

/**
 * Prepares the render operation, resetting the component's data and starting
 * the incremental dom interception.
 * @param {!Component} component
 * @private
 */
function prepareRender_(component) {
	renderingComponents_.push(component);

	var data = (0, _data.getData)(component);
	resetComponentsData_(data.icComponentsData);
	(0, _changes.clearChanges)(data);
	data.rootElementReached = false;
	component.refs = {};

	if (data.childComponents) {
		(0, _unused.schedule)(data.childComponents);
		data.childComponents = null;
	}

	(0, _incrementalDomAop.startInterception)({
		attributes: handleInterceptedAttributesCall_,
		elementOpen: handleInterceptedOpenCall_
	});
}

/**
 * Removes duplicate css classes from the given string.
 * @param {string} classString
 * @return {string}
 * @private
 */
function removeDuplicateClasses_(classString) {
	var classes = [];
	var all = classString.split(/\s+/);
	var used = {};
	for (var i = 0; i < all.length; i++) {
		if (!used[all[i]]) {
			used[all[i]] = true;
			classes.push(all[i]);
		}
	}
	return classes.join(' ');
}

/**
 * Renders the component with incremental dom function calls. This assumes that
 * an incremental dom `patch` is already running, and that this function has
 * been called inside it.
 * @param {!Component} component
 */
function render(component) {
	prepareRender_(component);
	component.getRenderer().renderIncDom(component);
	cleanUpRender_(component);
}

/**
 * Renders the given child node.
 * @param {!Object} child
 */
function renderChild(child) {
	(0, _children.renderChildTree)(child, handleChildRender_);
}

/**
 * Renders the contents for the given tag.
 * @param {!function()|string} tag
 * @param {!Object} config
 * @param {Component=} opt_owner
 * @private
 */
function renderFromTag_(tag, config, opt_owner) {
	if ((0, _metal.isString)(tag) || tag.prototype.getRenderer) {
		var comp = renderSubComponent_(tag, config, opt_owner);
		updateElementIfNotReached_(getComponentBeingRendered(), comp.element);
		return comp.element;
	} else {
		return tag(config);
	}
}

/**
 * Creates and renders the given function, which can either be a simple
 * incremental dom function or a component constructor.
 * @param {!IncrementalDomRenderer} renderer
 * @param {!function()} fnOrCtor Either a simple incremental dom function or a
 *     component constructor.
 * @param {Object|Element=} opt_dataOrElement Optional config data for the
 *     function or parent for the rendered content.
 * @param {Element=} opt_parent Optional parent for the rendered content.
 * @return {!Component} The rendered component's instance.
 */
function renderFunction(renderer, fnOrCtor, opt_dataOrElement, opt_parent) {
	if (!_metalComponent.Component.isComponentCtor(fnOrCtor)) {
		var fn = fnOrCtor;

		var TempComponent = function (_Component) {
			_inherits(TempComponent, _Component);

			function TempComponent() {
				_classCallCheck(this, TempComponent);

				return _possibleConstructorReturn(this, (TempComponent.__proto__ || Object.getPrototypeOf(TempComponent)).apply(this, arguments));
			}

			_createClass(TempComponent, [{
				key: 'created',
				value: function created() {
					var parent = getComponentBeingRendered();
					if (parent) {
						updateContext_(this, parent);
					}
				}
			}, {
				key: 'render',
				value: function render() {
					fn(this.getInitialConfig());
				}
			}]);

			return TempComponent;
		}(_metalComponent.Component);

		TempComponent.RENDERER = renderer;
		fnOrCtor = TempComponent;
	}
	return _metalComponent.Component.render(fnOrCtor, opt_dataOrElement, opt_parent);
}

/**
 * This updates the sub component that is represented by the given data.
 * The sub component is created, added to its parent and rendered. If it
 * had already been rendered before though, it will only have its state
 * updated instead.
 * @param {string|!function()} tagOrCtor The tag name or constructor function.
 * @param {!Object} config The config object for the sub component.
 * @param {ComponentRenderer=} opt_owner
 * @return {!Component} The updated sub component.
 * @private
 */
function renderSubComponent_(tagOrCtor, config, opt_owner) {
	var parent = getComponentBeingRendered();
	var owner = opt_owner || parent;
	var comp = getSubComponent_(tagOrCtor, config, owner);
	updateContext_(comp, parent);

	var data = (0, _data.getData)(comp);
	data.parent = parent;
	data.owner = owner;

	var parentData = (0, _data.getData)(parent);
	getChildComponents_(parentData).push(comp);
	if (!config.key && !parentData.rootElementReached) {
		config.key = parentData.config.key;
	}

	comp.getRenderer().renderInsidePatch(comp);
	if (!comp.wasRendered) {
		comp.renderComponent();
	}
	return comp;
}

/**
 * Resets the given incremental dom data object, preparing it for the next pass.
 * @param {Object} data
 * @private
 */
function resetComponentsData_(data) {
	if (data) {
		data.prevComps = data.currComps;
		data.currComps = null;
		data.currCount = null;
	}
}
/**
 * Resets all data stored in the given node.
 * @param {!Element} node
 * @private
 */
function resetNodeData_(node) {
	if (_metalDom.domData.has(node)) {
		resetComponentsData_(_metalDom.domData.get(node).icComponentsData);
	}
}

/**
 * Updates the given component's context according to the data from the
 * component that is currently being rendered.
 * @param {!Component} comp
 * @protected
 */
function updateContext_(comp, parent) {
	var context = comp.context;
	var childContext = parent.getChildContext ? parent.getChildContext() : null;
	_metal.object.mixin(context, parent.context, childContext);
	comp.context = context;
}

/**
 * Updates this renderer's component's element with the given values, unless
 * it has already been reached by an earlier call.
 * @param {!Component} component
 * @param {!Element} node
 * @private
 */
function updateElementIfNotReached_(component, node) {
	var data = (0, _data.getData)(component);
	if (!data.rootElementReached) {
		data.rootElementReached = true;
		if (component.element !== node) {
			component.element = node;
		}
	}
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _metal = __webpack_require__(2);

var ERROR_ARRAY_OF_TYPE = 'Expected an array of single type.';
var ERROR_OBJECT_OF_TYPE = 'Expected object of one type.';
var ERROR_ONE_OF = 'Expected one of given values.';
var ERROR_ONE_OF_TYPE = 'Expected one of given types.';
var ERROR_SHAPE_OF = 'Expected object with a specific shape.';

/**
 * Provides access to various type validators that will return an
 * instance of Error when validation fails. Note that all type validators
 * will also accept null or undefined values. To not accept these you should
 * instead make your state property required.
 */
var validators = {
	any: function any() {
		return function () {
			return true;
		};
	},
	array: buildTypeValidator('array'),
	bool: buildTypeValidator('boolean'),
	func: buildTypeValidator('function'),
	number: buildTypeValidator('number'),
	object: buildTypeValidator('object'),
	string: buildTypeValidator('string'),

	/**
  * Creates a validator that checks that the value it receives is an array
  * of items, and that all of the items pass the given validator.
  * @param {!function()} validator Validator to check each item against.
  * @return {!function()}
  */
	arrayOf: function arrayOf(validator) {
		return maybe(function (value, name, context) {
			var result = validators.array(value, name, context);
			if (isInvalid(result)) {
				return result;
			}
			return validateArrayItems(validator, value, name, context);
		});
	},

	/**
  * Creates a validator that checks if a value is an instance of a given class.
  * @param {!function()} expectedClass Class to check value against.
  * @return {!function()}
  */
	instanceOf: function instanceOf(expectedClass) {
		return maybe(function (value, name, context) {
			if (value instanceof expectedClass) {
				return true;
			}
			var msg = 'Expected instance of ' + expectedClass;
			return composeError(msg, name, context);
		});
	},

	/**
  * Creates a validator that checks that the value it receives is an object,
  * and that all values within that object pass the given validator.
  * @param {!function()} validator Validator to check each object value against.
  * @return {!function()}
  */
	objectOf: function objectOf(validator) {
		return maybe(function (value, name, context) {
			for (var key in value) {
				if (isInvalid(validator(value[key]))) {
					return composeError(ERROR_OBJECT_OF_TYPE, name, context);
				}
			}
			return true;
		});
	},

	/**
  * Creates a validator that checks if the received value matches one of the
  * given values.
  * @param {!Array} arrayOfValues Array of values to check equality against.
  * @return {!function()}
  */
	oneOf: function oneOf(arrayOfValues) {
		return maybe(function (value, name, context) {
			var result = validators.array(arrayOfValues, name, context);
			if (isInvalid(result)) {
				return result;
			}
			return arrayOfValues.indexOf(value) === -1 ? composeError(ERROR_ONE_OF, name, context) : true;
		});
	},

	/**
  * Creates a validator that checks if the received value matches one of the
  * given types.
  * @param {!Array} arrayOfTypeValidators Array of validators to check value
  *     against.
  * @return {!function()}
  */
	oneOfType: function oneOfType(arrayOfTypeValidators) {
		return maybe(function (value, name, context) {
			var result = validators.array(arrayOfTypeValidators, name, context);
			if (isInvalid(result)) {
				return result;
			}

			for (var i = 0; i < arrayOfTypeValidators.length; i++) {
				if (!isInvalid(arrayOfTypeValidators[i](value, name, context))) {
					return true;
				}
			}
			return composeError(ERROR_ONE_OF_TYPE, name, context);
		});
	},

	/**
  * Creates a validator that checks if the received value is an object, and
  * that its contents match the given shape.
  * @param {!Object} shape An object containing validators for each key.
  * @return {!function()}
  */
	shapeOf: function shapeOf(shape) {
		return maybe(function (value, name, context) {
			var result = validators.object(shape, name, context);
			if (isInvalid(result)) {
				return result;
			}

			for (var key in shape) {
				var validator = shape[key];
				var required = false;
				if (validator.config) {
					required = validator.config.required;
					validator = validator.config.validator;
				}
				if (required && !(0, _metal.isDefAndNotNull)(value[key]) || isInvalid(validator(value[key]))) {
					return composeError(ERROR_SHAPE_OF, name, context);
				}
			}
			return true;
		});
	}
};

/**
 * Creates a validator that checks against a specific primitive type.
 * @param {string} expectedType Type to check against.
 * @return {!function()} Function that runs the validator if called with
 *     arguments, or just returns it otherwise. This means that when using a
 *     type validator in `State` it may be just passed directly (like
 *     `validators.bool`), or called with no args (like `validators.bool()`).
 *     That's done to allow all validators to be used consistently, since some
 *     (like `arrayOf`) always require that you call the function before
 *     receiving the actual validator. Type validators don't need the call, but
 *     work if it's made anyway.
 */
function buildTypeValidator(expectedType) {
	var validatorFn = maybe(validateType.bind(null, expectedType));
	return function () {
		if (arguments.length === 0) {
			return validatorFn;
		} else {
			return validatorFn.apply(undefined, arguments);
		}
	};
}

/**
 * Composes a warning a warning message.
 * @param {string} error Error message to display to console.
 * @param {?string} name Name of state property that is giving the error.
 * @param {Object} context The property's owner.
 * @return {!Error}
 */
function composeError(error, name, context) {
	var compName = context ? (0, _metal.getFunctionName)(context.constructor) : null;
	var renderer = context && context.getRenderer && context.getRenderer();
	var parent = renderer && renderer.getParent && renderer.getParent();
	var parentName = parent ? (0, _metal.getFunctionName)(parent.constructor) : null;
	var location = parentName ? 'Check render method of \'' + parentName + '\'.' : '';
	return new Error('Warning: Invalid state passed to \'' + name + '\'. ' + (error + ' Passed to \'' + compName + '\'. ' + location));
}

/**
 * Returns the type of the given value.
 * @param {*} value Any value.
 * @return {string} Type of value.
 */
function getType(value) {
	return Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
}

/**
 * Checks if the given validator result says that the value is invalid.
 * @param {boolean|!Error} result
 * @return {boolean}
 */
function isInvalid(result) {
	return result instanceof Error;
}

/**
 * Wraps the given validator so that it also accepts null/undefined values.
 *   a validator that checks a value against a single type, null, or
 * undefined.
 * @param {!function()} typeValidator Validator to wrap.
 * @return {!function()} Wrapped validator.
 */
function maybe(typeValidator) {
	return function (value, name, context) {
		return (0, _metal.isDefAndNotNull)(value) ? typeValidator(value, name, context) : true;
	};
}

/**
 * Checks if all the items of the given array pass the given validator.
 * @param {!function()} validator
 * @param {*} value The array to validate items for.
 * @param {string} name The name of the array property being checked.
 * @param {!Object} context Owner of the array property being checked.
 * @return {!Error|boolean} `true` if the type matches, or an error otherwise.
 */
function validateArrayItems(validator, value, name, context) {
	for (var i = 0; i < value.length; i++) {
		if (isInvalid(validator(value[i], name, context))) {
			return composeError(ERROR_ARRAY_OF_TYPE, name, context);
		}
	}
	return true;
}

/**
 * Checks if the given value matches the expected type.
 * @param {string} expectedType String representing the expected type.
 * @param {*} value The value to match the type of.
 * @param {string} name The name of the property being checked.
 * @param {!Object} context Owner of the property being checked.
 * @return {!Error|boolean} `true` if the type matches, or an error otherwise.
 */
function validateType(expectedType, value, name, context) {
	var type = getType(value);
	if (type !== expectedType) {
		var msg = 'Expected type \'' + expectedType + '\', but received type \'' + type + '\'.';
		return composeError(msg, name, context);
	}
	return true;
}

exports.default = validators;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file exists just for backwards compatibility, making sure that old
// default imports for this file still work. It's best to use the named exports
// for each function instead though, since that allows bundlers like Rollup to
// reduce the bundle size by removing unused code.

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.core = undefined;

var _coreNamed = __webpack_require__(138);

Object.keys(_coreNamed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _coreNamed[key];
    }
  });
});

var core = _interopRequireWildcard(_coreNamed);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = core;
exports.core = core;

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _unescape = __webpack_require__(112);

var _unescape2 = _interopRequireDefault(_unescape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parser_;

var HTML2IncDom = function () {
	function HTML2IncDom() {
		_classCallCheck(this, HTML2IncDom);
	}

	_createClass(HTML2IncDom, null, [{
		key: 'buildFn',

		/**
   * Should convert the given html string to a function with calls to
   * incremental dom methods.
   * @param {string} html
   * @return {!function()} Function with incremental dom calls for building
   *     the given html string.
   */
		value: function buildFn(html) {
			return function () {
				return HTML2IncDom.run(html);
			};
		}

		/**
   * Gets the html parser being currently used.
   * @return {!function()}
   */

	}, {
		key: 'getParser',
		value: function getParser() {
			return parser_ || window.HTMLParser;
		}

		/**
   * Should convert the given html string to calls to incremental dom methods.
   * @param {string} html
   */

	}, {
		key: 'run',
		value: function run(html) {
			HTML2IncDom.getParser()(html, {
				start: function start(tag, attrs, unary) {
					var fn = unary ? IncrementalDOM.elementVoid : IncrementalDOM.elementOpen;
					var args = [tag, null, []];
					for (var i = 0; i < attrs.length; i++) {
						args.push(attrs[i].name, attrs[i].value);
					}
					fn.apply(null, args);
				},

				end: function end(tag) {
					IncrementalDOM.elementClose(tag);
				},

				chars: function chars(text) {
					IncrementalDOM.text(text, _unescape2.default);
				}
			});
		}

		/**
   * Changes the function that will be used to parse html strings. By default
   * this will use the `HTMLParser` function from
   * https://github.com/blowsie/Pure-JavaScript-HTML5-Parser. This will accept
   * any function that follows that same api, basically accepting the html
   * string and an object with `start`, `end` and `chars` functions to be called
   * during the parsing.
   * @param {!function(string, !Object} newParser
   */

	}, {
		key: 'setParser',
		value: function setParser(newParser) {
			parser_ = newParser;
		}
	}]);

	return HTML2IncDom;
}();

exports.default = HTML2IncDom;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* jshint ignore:start */

/*
 * HTML5 Parser By Sam Blowes
 *
 * Designed for HTML5 documents
 *
 * Original code by John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * ----------------------------------------------------------------------------
 * License
 * ----------------------------------------------------------------------------
 *
 * This code is triple licensed using Apache Software License 2.0,
 * Mozilla Public License or GNU Public License
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 *
 * The Original Code is Simple HTML Parser.
 *
 * The Initial Developer of the Original Code is Erik Arvidsson.
 * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
 * Reserved.
 *
 * ////////////////////////////////////////////////////////////////////////////
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 * @license
 */

/*
 *
 * ----------------------------------------------------------------------------
 * Usage
 * ----------------------------------------------------------------------------
 *
 * // Use like so:
 * HTMLParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * // or to get an XML string:
 * HTMLtoXML(htmlString);
 *
 * // or to get an XML DOM Document
 * HTMLtoDOM(htmlString);
 *
 * // or to inject into an existing document/DOM node
 * HTMLtoDOM(htmlString, document);
 * HTMLtoDOM(htmlString, document.body);
 *
 */

(function () {
	// Regular Expressions for parsing tags and attributes
	var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
	    endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
	    attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

	// Empty Elements - HTML 5
	var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");

	// Block Elements - HTML 5
	var block = makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

	// Inline Elements - HTML 5
	var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

	// Attributes that have their values filled in disabled="disabled"
	var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

	// Special Elements (can contain anything)
	var special = makeMap("script,style");

	var HTMLParser = window.HTMLParser = function (html, handler) {
		var index,
		    chars,
		    match,
		    stack = [],
		    last = html;
		stack.last = function () {
			return this[this.length - 1];
		};

		while (html) {
			chars = true;

			// Make sure we're not in a script or style element
			if (!stack.last() || !special[stack.last()]) {

				// Comment
				if (html.indexOf("<!--") == 0) {
					index = html.indexOf("-->");

					if (index >= 0) {
						if (handler.comment) handler.comment(html.substring(4, index));
						html = html.substring(index + 3);
						chars = false;
					}

					// end tag
				} else if (html.indexOf("</") == 0) {
						match = html.match(endTag);

						if (match) {
							html = html.substring(match[0].length);
							match[0].replace(endTag, parseEndTag);
							chars = false;
						}

						// start tag
					} else if (html.indexOf("<") == 0) {
							match = html.match(startTag);

							if (match) {
								html = html.substring(match[0].length);
								match[0].replace(startTag, parseStartTag);
								chars = false;
							}
						}

				if (chars) {
					index = html.indexOf("<");

					var text = index < 0 ? html : html.substring(0, index);
					html = index < 0 ? "" : html.substring(index);

					if (handler.chars) handler.chars(text);
				}
			} else {
				html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
					text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
					if (handler.chars) handler.chars(text);

					return "";
				});

				parseEndTag("", stack.last());
			}

			if (html == last) throw "Parse Error: " + html;
			last = html;
		}

		// Clean up any remaining tags
		parseEndTag();

		function parseStartTag(tag, tagName, rest, unary) {
			tagName = tagName.toLowerCase();

			if (block[tagName]) {
				// Close last tag if it's inline, except if it's a "span" (since people
				// usually add anything they want to spans, and browsers allow it).
				// Note: this exception for "span" was added manually (i.e. it's not
				// present in the original code).
				while (stack.last() && inline[stack.last()] && stack.last() !== 'span') {
					parseEndTag("", stack.last());
				}
			}

			if (closeSelf[tagName] && stack.last() == tagName) {
				parseEndTag("", tagName);
			}

			unary = empty[tagName] || !!unary;

			if (!unary) stack.push(tagName);

			if (handler.start) {
				var attrs = [];

				rest.replace(attr, function (match, name) {
					var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : "";

					attrs.push({
						name: name,
						value: value,
						escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
					});
				});

				if (handler.start) handler.start(tagName, attrs, unary);
			}
		}

		function parseEndTag(tag, tagName) {
			// If no tag name is provided, clean shop
			if (!tagName) var pos = 0;

			// Find the closest opened tag of the same type
			else for (var pos = stack.length - 1; pos >= 0; pos--) {
					if (stack[pos] == tagName) break;
				}if (pos >= 0) {
				// Close all the open elements, up the stack
				for (var i = stack.length - 1; i >= pos; i--) {
					if (handler.end) handler.end(stack[i]);
				} // Remove the open elements from the stack
				stack.length = pos;
			}
		}
	};

	function makeMap(str) {
		var obj = {},
		    items = str.split(",");
		for (var i = 0; i < items.length; i++) {
			obj[items[i]] = true;
		}return obj;
	}
}).call(undefined);

/* jshint ignore:end */

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Unescapes an HTML string using a DOM to resolve non-XML, non-numeric
 * entities. This function is XSS-safe and whitespace-preserving.
 * @private
 * @param {string} str The string to unescape.
 * @return {string} The unescaped {@code str} string.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function unescape(str) {
  /** @type {!Object<string, string>} */
  var seen = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"' };
  var div = document.createElement('div');

  // Match as many valid entity characters as possible. If the actual entity
  // happens to be shorter, it will still work as innerHTML will return the
  // trailing characters unchanged. Since the entity characters do not include
  // open angle bracket, there is no chance of XSS from the innerHTML use.
  // Since no whitespace is passed to innerHTML, whitespace is preserved.
  return str.replace(HTML_ENTITY_PATTERN_, function (s, entity) {
    // Check for cached entity.
    var value = seen[s];
    if (value) {
      return value;
    }
    // Check for numeric entity.
    if (entity.charAt(0) === '#') {
      // Prefix with 0 so that hex entities (e.g. &#x10) parse as hex numbers.
      var n = Number('0' + entity.substr(1));
      if (!isNaN(n)) {
        value = String.fromCharCode(n);
      }
    }
    // Fall back to innerHTML otherwise.
    if (!value) {
      // Append a non-entity character to avoid a bug in Webkit that parses
      // an invalid entity at the end of innerHTML text as the empty string.
      div.innerHTML = s + ' ';
      // Then remove the trailing character from the result.
      value = div.firstChild.nodeValue.slice(0, -1);
    }
    // Cache and return.
    seen[s] = value;
    return value;
  });
}

exports.default = unescape;

/**
 * Regular expression that matches an HTML entity.
 * @type {!RegExp}
 */

var HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(111);

var _HTML2IncDom = __webpack_require__(110);

var _HTML2IncDom2 = _interopRequireDefault(_HTML2IncDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _HTML2IncDom2.default;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.IncrementalDOM = global.IncrementalDOM || {})));
}(this, (function (exports) { 'use strict';

/**
 * An array used to store the strings generated by calls to
 * elementOpen, elementOpenStart, elementOpenEnd, elementEnd and elementVoid
 */
exports.buffer = [];

/** @type {?Object} */
exports.currentParent = null;

/**
 * Gets the current Element being patched.
 * @return {!Element}
 */
var currentElement = function currentElement() {
  return exports.currentParent;
};

/**
 * @return {Node} The Node that will be evaluated for the next instruction.
 */
var currentPointer = function currentPointer() {
  return {};
};

/**
 * Patches an Element with the the provided function. Exactly one top level
 * element call should be made corresponding to `node`.
 *
 * @param {?object} node The Element where the patch should start.
 * @param {!function(T)} fn A function containing open/close/etc. calls that
 *     describe the DOM. This should have at most one top level element call.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {void} Nothing.
 */
var patch = function patch(node, fn, data) {
  exports.currentParent = node;
  fn(data);
  exports.currentParent.innerHTML = exports.buffer.join('');
  exports.buffer = [];
  return exports.currentParent;
};

var patchOuter = patch;
var patchInner = patch;

/**
 * Declares a virtual Text at this point in the document.
 *
 * @param {string|number|boolean} value The value of the Text.
 * @param {...(function((string|number|boolean)):string)} var_args
 *     Functions to format the value which are called only when the value has
 *     changed.
 *
 * @return {void} Nothing.
 */
var text = function text(value, var_args) {
  var formatted = value;
  for (var i = 1; i < arguments.length; i += 1) {
    var fn = arguments[i];
    formatted = fn(formatted);
  }
  exports.buffer.push(formatted);
};

/** @const */
var symbols = {
  default: '__default'
};

/** @const */
var attributes = {};

/**
 * Calls the appropriate attribute mutator for this attribute.
 * @param {!Array.<string>} el Buffer to append element attributes.
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value.
 */
var updateAttribute = function updateAttribute(el, name, value) {
  var mutator = attributes[name] || attributes[symbols.default];
  mutator(el, name, value);
};

// Special generic mutator that's called for any attribute that does not
// have a specific mutator.
attributes[symbols.default] = function (el, name, value) {
  if (Array.isArray(el)) {
    el.push(' ' + name + '="' + value + '"');
  }
};

/**
 * Truncates an array, removing items up until length.
 * @param {!Array<*>} arr The array to truncate.
 * @param {number} length The new length of the array.
 */
var truncateArray = function truncateArray(arr, length) {
  while (arr.length > length) {
    arr.pop();
  }
};

/**
 * The offset in the virtual element declaration where the attributes are
 * specified.
 * @const
 */
var ATTRIBUTES_OFFSET = 3;

/**
 * Builds an array of arguments for use with elementOpenStart, attr and
 * elementOpenEnd.
 * @const {!Array<*>}
 */
var argsBuilder = [];

/**
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 *
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value.
 * @return {void} Nothing.
 */
var attr = function attr(name, value) {
  argsBuilder.push(name);
  argsBuilder.push(value);
};

/**
 * Closes an open virtual Element.
 *
 * @param {string} The Element's tag.
 * @return {void} Nothing.
 */
var elementClose = function elementClose(nameOrCtor) {
  if (typeof nameOrCtor === 'function') {
    new nameOrCtor();
    return;
  }
  exports.buffer.push('</' + nameOrCtor + '>');
};

/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 *
 * @param {string} The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {void} Nothing.
 */
var elementVoid = function elementVoid(nameOrCtor, key, statics, var_args) {
  elementOpen.apply(null, arguments);
  return elementClose(nameOrCtor);
};

/**
 * @param {!string} nameOrCtor The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args, Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {void} Nothing.
 */
var elementOpen = function elementOpen(nameOrCtor, key, statics, var_args) {
  if (typeof nameOrCtor === 'function') {
    new nameOrCtor();
    return exports.currentParent;
  }

  exports.buffer.push('<' + nameOrCtor);

  if (statics) {
    for (var _i = 0; _i < statics.length; _i += 2) {
      var name = /** @type {string} */statics[_i];
      var value = statics[_i + 1];
      updateAttribute(exports.buffer, name, value);
    }
  }

  var i = ATTRIBUTES_OFFSET;
  var j = 0;

  for (; i < arguments.length; i += 2, j += 2) {
    var _name = arguments[i];
    var _value = arguments[i + 1];
    updateAttribute(exports.buffer, _name, _value);
  }

  exports.buffer.push('>');

  return exports.currentParent;
};

/**
 * Closes an open tag started with elementOpenStart.
 *
 * @return {void} Nothing.
 */
var elementOpenEnd = function elementOpenEnd() {
  elementOpen.apply(null, argsBuilder);
  truncateArray(argsBuilder, 0);
};

/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {string} nameOrCtor The Element's tag or constructor.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @return {void} Nothing.
 */
var elementOpenStart = function elementOpenStart(nameOrCtor, key, statics) {
  argsBuilder[0] = nameOrCtor;
  argsBuilder[1] = key;
  argsBuilder[2] = statics;
};

/**
 * Returns the constructred DOM string at this point.
 * @param {function} fn
 * @return {string} The constructed DOM string.
 */
var renderToString = function renderToString(fn) {
  patch({}, fn);
  return currentElement().innerHTML;
};

exports.currentElement = currentElement;
exports.currentPointer = currentPointer;
exports.patch = patch;
exports.patchInner = patchInner;
exports.patchOuter = patchOuter;
exports.text = text;
exports.attr = attr;
exports.elementClose = elementClose;
exports.elementOpen = elementOpen;
exports.elementOpenEnd = elementOpenEnd;
exports.elementOpenStart = elementOpenStart;
exports.elementVoid = elementVoid;
exports.renderToString = renderToString;
exports.symbols = symbols;
exports.attributes = attributes;
exports.updateAttribute = updateAttribute;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/**
 * @license
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A cached reference to the hasOwnProperty function.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * A constructor function that will create blank objects.
 * @constructor
 */
function Blank() {}

Blank.prototype = Object.create(null);

/**
 * Used to prevent property collisions between our "map" and its prototype.
 * @param {!Object<string, *>} map The map to check.
 * @param {string} property The property to check.
 * @return {boolean} Whether map has property.
 */
var has = function (map, property) {
  return hasOwnProperty.call(map, property);
};

/**
 * Creates an map object without a prototype.
 * @return {!Object}
 */
var createMap = function () {
  return new Blank();
};

/**
 * Keeps track of information needed to perform diffs for a given DOM node.
 * @param {!string} nodeName
 * @param {?string=} key
 * @constructor
 */
function NodeData(nodeName, key) {
  /**
   * The attributes and their values.
   * @const {!Object<string, *>}
   */
  this.attrs = createMap();

  /**
   * An array of attribute name/value pairs, used for quickly diffing the
   * incomming attributes to see if the DOM node's attributes need to be
   * updated.
   * @const {Array<*>}
   */
  this.attrsArr = [];

  /**
   * The incoming attributes for this Node, before they are updated.
   * @const {!Object<string, *>}
   */
  this.newAttrs = createMap();

  /**
   * Whether or not the statics have been applied for the node yet.
   * {boolean}
   */
  this.staticsApplied = false;

  /**
   * The key used to identify this node, used to preserve DOM nodes when they
   * move within their parent.
   * @const
   */
  this.key = key;

  /**
   * Keeps track of children within this node by their key.
   * {!Object<string, !Element>}
   */
  this.keyMap = createMap();

  /**
   * Whether or not the keyMap is currently valid.
   * @type {boolean}
   */
  this.keyMapValid = true;

  /**
   * Whether or the associated node is, or contains, a focused Element.
   * @type {boolean}
   */
  this.focused = false;

  /**
   * The node name for this node.
   * @const {string}
   */
  this.nodeName = nodeName;

  /**
   * @type {?string}
   */
  this.text = null;
}

/**
 * Initializes a NodeData object for a Node.
 *
 * @param {Node} node The node to initialize data for.
 * @param {string} nodeName The node name of node.
 * @param {?string=} key The key that identifies the node.
 * @return {!NodeData} The newly initialized data object
 */
var initData = function (node, nodeName, key) {
  var data = new NodeData(nodeName, key);
  node['__incrementalDOMData'] = data;
  return data;
};

/**
 * Retrieves the NodeData object for a Node, creating it if necessary.
 *
 * @param {?Node} node The Node to retrieve the data for.
 * @return {!NodeData} The NodeData for this Node.
 */
var getData = function (node) {
  importNode(node);
  return node['__incrementalDOMData'];
};

/**
 * Imports node and its subtree, initializing caches.
 *
 * @param {?Node} node The Node to import.
 */
var importNode = function (node) {
  if (node['__incrementalDOMData']) {
    return;
  }

  var isElement = node instanceof Element;
  var nodeName = isElement ? node.localName : node.nodeName;
  var key = isElement ? node.getAttribute('key') : null;
  var data = initData(node, nodeName, key);

  if (key) {
    getData(node.parentNode).keyMap[key] = node;
  }

  if (isElement) {
    var attributes = node.attributes;
    var attrs = data.attrs;
    var newAttrs = data.newAttrs;
    var attrsArr = data.attrsArr;

    for (var i = 0; i < attributes.length; i += 1) {
      var attr = attributes[i];
      var name = attr.name;
      var value = attr.value;

      attrs[name] = value;
      newAttrs[name] = undefined;
      attrsArr.push(name);
      attrsArr.push(value);
    }
  }

  for (var child = node.firstChild; child; child = child.nextSibling) {
    importNode(child);
  }
};

/**
 * Gets the namespace to create an element (of a given tag) in.
 * @param {string} tag The tag to get the namespace for.
 * @param {?Node} parent
 * @return {?string} The namespace to create the tag in.
 */
var getNamespaceForTag = function (tag, parent) {
  if (tag === 'svg') {
    return 'http://www.w3.org/2000/svg';
  }

  if (getData(parent).nodeName === 'foreignObject') {
    return null;
  }

  return parent.namespaceURI;
};

/**
 * Creates an Element.
 * @param {Document} doc The document with which to create the Element.
 * @param {?Node} parent
 * @param {string} tag The tag for the Element.
 * @param {?string=} key A key to identify the Element.
 * @return {!Element}
 */
var createElement = function (doc, parent, tag, key) {
  var namespace = getNamespaceForTag(tag, parent);
  var el = undefined;

  if (namespace) {
    el = doc.createElementNS(namespace, tag);
  } else {
    el = doc.createElement(tag);
  }

  initData(el, tag, key);

  return el;
};

/**
 * Creates a Text Node.
 * @param {Document} doc The document with which to create the Element.
 * @return {!Text}
 */
var createText = function (doc) {
  var node = doc.createTextNode('');
  initData(node, '#text', null);
  return node;
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const */
var notifications = {
  /**
   * Called after patch has compleated with any Nodes that have been created
   * and added to the DOM.
   * @type {?function(Array<!Node>)}
   */
  nodesCreated: null,

  /**
   * Called after patch has compleated with any Nodes that have been removed
   * from the DOM.
   * Note it's an applications responsibility to handle any childNodes.
   * @type {?function(Array<!Node>)}
   */
  nodesDeleted: null
};

/**
 * Keeps track of the state of a patch.
 * @constructor
 */
function Context() {
  /**
   * @type {(Array<!Node>|undefined)}
   */
  this.created = notifications.nodesCreated && [];

  /**
   * @type {(Array<!Node>|undefined)}
   */
  this.deleted = notifications.nodesDeleted && [];
}

/**
 * @param {!Node} node
 */
Context.prototype.markCreated = function (node) {
  if (this.created) {
    this.created.push(node);
  }
};

/**
 * @param {!Node} node
 */
Context.prototype.markDeleted = function (node) {
  if (this.deleted) {
    this.deleted.push(node);
  }
};

/**
 * Notifies about nodes that were created during the patch opearation.
 */
Context.prototype.notifyChanges = function () {
  if (this.created && this.created.length > 0) {
    notifications.nodesCreated(this.created);
  }

  if (this.deleted && this.deleted.length > 0) {
    notifications.nodesDeleted(this.deleted);
  }
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
  * Keeps track whether or not we are in an attributes declaration (after
  * elementOpenStart, but before elementOpenEnd).
  * @type {boolean}
  */
var inAttributes = false;

/**
  * Keeps track whether or not we are in an element that should not have its
  * children cleared.
  * @type {boolean}
  */
var inSkip = false;

/**
 * Makes sure that there is a current patch context.
 * @param {string} functionName
 * @param {*} context
 */
var assertInPatch = function (functionName, context) {
  if (!context) {
    throw new Error('Cannot call ' + functionName + '() unless in patch.');
  }
};

/**
 * Makes sure that a patch closes every node that it opened.
 * @param {?Node} openElement
 * @param {!Node|!DocumentFragment} root
 */
var assertNoUnclosedTags = function (openElement, root) {
  if (openElement === root) {
    return;
  }

  var currentElement = openElement;
  var openTags = [];
  while (currentElement && currentElement !== root) {
    openTags.push(currentElement.nodeName.toLowerCase());
    currentElement = currentElement.parentNode;
  }

  throw new Error('One or more tags were not closed:\n' + openTags.join('\n'));
};

/**
 * Makes sure that the caller is not where attributes are expected.
 * @param {string} functionName
 */
var assertNotInAttributes = function (functionName) {
  if (inAttributes) {
    throw new Error(functionName + '() can not be called between ' + 'elementOpenStart() and elementOpenEnd().');
  }
};

/**
 * Makes sure that the caller is not inside an element that has declared skip.
 * @param {string} functionName
 */
var assertNotInSkip = function (functionName) {
  if (inSkip) {
    throw new Error(functionName + '() may not be called inside an element ' + 'that has called skip().');
  }
};

/**
 * Makes sure that the caller is where attributes are expected.
 * @param {string} functionName
 */
var assertInAttributes = function (functionName) {
  if (!inAttributes) {
    throw new Error(functionName + '() can only be called after calling ' + 'elementOpenStart().');
  }
};

/**
 * Makes sure the patch closes virtual attributes call
 */
var assertVirtualAttributesClosed = function () {
  if (inAttributes) {
    throw new Error('elementOpenEnd() must be called after calling ' + 'elementOpenStart().');
  }
};

/**
  * Makes sure that tags are correctly nested.
  * @param {string} nodeName
  * @param {string} tag
  */
var assertCloseMatchesOpenTag = function (nodeName, tag) {
  if (nodeName !== tag) {
    throw new Error('Received a call to close "' + tag + '" but "' + nodeName + '" was open.');
  }
};

/**
 * Makes sure that no children elements have been declared yet in the current
 * element.
 * @param {string} functionName
 * @param {?Node} previousNode
 */
var assertNoChildrenDeclaredYet = function (functionName, previousNode) {
  if (previousNode !== null) {
    throw new Error(functionName + '() must come before any child ' + 'declarations inside the current element.');
  }
};

/**
 * Checks that a call to patchOuter actually patched the element.
 * @param {?Node} startNode The value for the currentNode when the patch
 *     started.
 * @param {?Node} currentNode The currentNode when the patch finished.
 * @param {?Node} expectedNextNode The Node that is expected to follow the
 *    currentNode after the patch;
 * @param {?Node} expectedPrevNode The Node that is expected to preceed the
 *    currentNode after the patch.
 */
var assertPatchElementNoExtras = function (startNode, currentNode, expectedNextNode, expectedPrevNode) {
  var wasUpdated = currentNode.nextSibling === expectedNextNode && currentNode.previousSibling === expectedPrevNode;
  var wasChanged = currentNode.nextSibling === startNode.nextSibling && currentNode.previousSibling === expectedPrevNode;
  var wasRemoved = currentNode === startNode;

  if (!wasUpdated && !wasChanged && !wasRemoved) {
    throw new Error('There must be exactly one top level call corresponding ' + 'to the patched element.');
  }
};

/**
 * Updates the state of being in an attribute declaration.
 * @param {boolean} value
 * @return {boolean} the previous value.
 */
var setInAttributes = function (value) {
  var previous = inAttributes;
  inAttributes = value;
  return previous;
};

/**
 * Updates the state of being in a skip element.
 * @param {boolean} value
 * @return {boolean} the previous value.
 */
var setInSkip = function (value) {
  var previous = inSkip;
  inSkip = value;
  return previous;
};

/**
 * Copyright 2016 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param {!Node} node
 * @return {boolean} True if the node the root of a document, false otherwise.
 */
var isDocumentRoot = function (node) {
  // For ShadowRoots, check if they are a DocumentFragment instead of if they
  // are a ShadowRoot so that this can work in 'use strict' if ShadowRoots are
  // not supported.
  return node instanceof Document || node instanceof DocumentFragment;
};

/**
 * @param {!Node} node The node to start at, inclusive.
 * @param {?Node} root The root ancestor to get until, exclusive.
 * @return {!Array<!Node>} The ancestry of DOM nodes.
 */
var getAncestry = function (node, root) {
  var ancestry = [];
  var cur = node;

  while (cur !== root) {
    ancestry.push(cur);
    cur = cur.parentNode;
  }

  return ancestry;
};

/**
 * @param {!Node} node
 * @return {!Node} The root node of the DOM tree that contains node.
 */
var getRoot = function (node) {
  var cur = node;
  var prev = cur;

  while (cur) {
    prev = cur;
    cur = cur.parentNode;
  }

  return prev;
};

/**
 * @param {!Node} node The node to get the activeElement for.
 * @return {?Element} The activeElement in the Document or ShadowRoot
 *     corresponding to node, if present.
 */
var getActiveElement = function (node) {
  var root = getRoot(node);
  return isDocumentRoot(root) ? root.activeElement : null;
};

/**
 * Gets the path of nodes that contain the focused node in the same document as
 * a reference node, up until the root.
 * @param {!Node} node The reference node to get the activeElement for.
 * @param {?Node} root The root to get the focused path until.
 * @return {!Array<Node>}
 */
var getFocusedPath = function (node, root) {
  var activeElement = getActiveElement(node);

  if (!activeElement || !node.contains(activeElement)) {
    return [];
  }

  return getAncestry(activeElement, root);
};

/**
 * Like insertBefore, but instead instead of moving the desired node, instead
 * moves all the other nodes after.
 * @param {?Node} parentNode
 * @param {!Node} node
 * @param {?Node} referenceNode
 */
var moveBefore = function (parentNode, node, referenceNode) {
  var insertReferenceNode = node.nextSibling;
  var cur = referenceNode;

  while (cur !== node) {
    var next = cur.nextSibling;
    parentNode.insertBefore(cur, insertReferenceNode);
    cur = next;
  }
};

/** @type {?Context} */
var context = null;

/** @type {?Node} */
var currentNode = null;

/** @type {?Node} */
var currentParent = null;

/** @type {?Document} */
var doc = null;

/**
 * @param {!Array<Node>} focusPath The nodes to mark.
 * @param {boolean} focused Whether or not they are focused.
 */
var markFocused = function (focusPath, focused) {
  for (var i = 0; i < focusPath.length; i += 1) {
    getData(focusPath[i]).focused = focused;
  }
};

/**
 * Returns a patcher function that sets up and restores a patch context,
 * running the run function with the provided data.
 * @param {function((!Element|!DocumentFragment),!function(T),T=): ?Node} run
 * @return {function((!Element|!DocumentFragment),!function(T),T=): ?Node}
 * @template T
 */
var patchFactory = function (run) {
  /**
   * TODO(moz): These annotations won't be necessary once we switch to Closure
   * Compiler's new type inference. Remove these once the switch is done.
   *
   * @param {(!Element|!DocumentFragment)} node
   * @param {!function(T)} fn
   * @param {T=} data
   * @return {?Node} node
   * @template T
   */
  var f = function (node, fn, data) {
    var prevContext = context;
    var prevDoc = doc;
    var prevCurrentNode = currentNode;
    var prevCurrentParent = currentParent;
    var previousInAttributes = false;
    var previousInSkip = false;

    context = new Context();
    doc = node.ownerDocument;
    currentParent = node.parentNode;

    if (process.env.NODE_ENV !== 'production') {
      previousInAttributes = setInAttributes(false);
      previousInSkip = setInSkip(false);
    }

    var focusPath = getFocusedPath(node, currentParent);
    markFocused(focusPath, true);
    var retVal = run(node, fn, data);
    markFocused(focusPath, false);

    if (process.env.NODE_ENV !== 'production') {
      assertVirtualAttributesClosed();
      setInAttributes(previousInAttributes);
      setInSkip(previousInSkip);
    }

    context.notifyChanges();

    context = prevContext;
    doc = prevDoc;
    currentNode = prevCurrentNode;
    currentParent = prevCurrentParent;

    return retVal;
  };
  return f;
};

/**
 * Patches the document starting at node with the provided function. This
 * function may be called during an existing patch operation.
 * @param {!Element|!DocumentFragment} node The Element or Document
 *     to patch.
 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
 *     calls that describe the DOM.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {!Node} The patched node.
 * @template T
 */
var patchInner = patchFactory(function (node, fn, data) {
  currentNode = node;

  enterNode();
  fn(data);
  exitNode();

  if (process.env.NODE_ENV !== 'production') {
    assertNoUnclosedTags(currentNode, node);
  }

  return node;
});

/**
 * Patches an Element with the the provided function. Exactly one top level
 * element call should be made corresponding to `node`.
 * @param {!Element} node The Element where the patch should start.
 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
 *     calls that describe the DOM. This should have at most one top level
 *     element call.
 * @param {T=} data An argument passed to fn to represent DOM state.
 * @return {?Node} The node if it was updated, its replacedment or null if it
 *     was removed.
 * @template T
 */
var patchOuter = patchFactory(function (node, fn, data) {
  var startNode = /** @type {!Element} */{ nextSibling: node };
  var expectedNextNode = null;
  var expectedPrevNode = null;

  if (process.env.NODE_ENV !== 'production') {
    expectedNextNode = node.nextSibling;
    expectedPrevNode = node.previousSibling;
  }

  currentNode = startNode;
  fn(data);

  if (process.env.NODE_ENV !== 'production') {
    assertPatchElementNoExtras(startNode, currentNode, expectedNextNode, expectedPrevNode);
  }

  if (node !== currentNode && node.parentNode) {
    removeChild(currentParent, node, getData(currentParent).keyMap);
  }

  return startNode === currentNode ? null : currentNode;
});

/**
 * Checks whether or not the current node matches the specified nodeName and
 * key.
 *
 * @param {!Node} matchNode A node to match the data to.
 * @param {?string} nodeName The nodeName for this node.
 * @param {?string=} key An optional key that identifies a node.
 * @return {boolean} True if the node matches, false otherwise.
 */
var matches = function (matchNode, nodeName, key) {
  var data = getData(matchNode);

  // Key check is done using double equals as we want to treat a null key the
  // same as undefined. This should be okay as the only values allowed are
  // strings, null and undefined so the == semantics are not too weird.
  return nodeName === data.nodeName && key == data.key;
};

/**
 * Aligns the virtual Element definition with the actual DOM, moving the
 * corresponding DOM node to the correct location or creating it if necessary.
 * @param {string} nodeName For an Element, this should be a valid tag string.
 *     For a Text, this should be #text.
 * @param {?string=} key The key used to identify this element.
 */
var alignWithDOM = function (nodeName, key) {
  if (currentNode && matches(currentNode, nodeName, key)) {
    return;
  }

  var parentData = getData(currentParent);
  var currentNodeData = currentNode && getData(currentNode);
  var keyMap = parentData.keyMap;
  var node = undefined;

  // Check to see if the node has moved within the parent.
  if (key) {
    var keyNode = keyMap[key];
    if (keyNode) {
      if (matches(keyNode, nodeName, key)) {
        node = keyNode;
      } else if (keyNode === currentNode) {
        context.markDeleted(keyNode);
      } else {
        removeChild(currentParent, keyNode, keyMap);
      }
    }
  }

  // Create the node if it doesn't exist.
  if (!node) {
    if (nodeName === '#text') {
      node = createText(doc);
    } else {
      node = createElement(doc, currentParent, nodeName, key);
    }

    if (key) {
      keyMap[key] = node;
    }

    context.markCreated(node);
  }

  // Re-order the node into the right position, preserving focus if either
  // node or currentNode are focused by making sure that they are not detached
  // from the DOM.
  if (getData(node).focused) {
    // Move everything else before the node.
    moveBefore(currentParent, node, currentNode);
  } else if (currentNodeData && currentNodeData.key && !currentNodeData.focused) {
    // Remove the currentNode, which can always be added back since we hold a
    // reference through the keyMap. This prevents a large number of moves when
    // a keyed item is removed or moved backwards in the DOM.
    currentParent.replaceChild(node, currentNode);
    parentData.keyMapValid = false;
  } else {
    currentParent.insertBefore(node, currentNode);
  }

  currentNode = node;
};

/**
 * @param {?Node} node
 * @param {?Node} child
 * @param {?Object<string, !Element>} keyMap
 */
var removeChild = function (node, child, keyMap) {
  node.removeChild(child);
  context.markDeleted( /** @type {!Node}*/child);

  var key = getData(child).key;
  if (key) {
    delete keyMap[key];
  }
};

/**
 * Clears out any unvisited Nodes, as the corresponding virtual element
 * functions were never called for them.
 */
var clearUnvisitedDOM = function () {
  var node = currentParent;
  var data = getData(node);
  var keyMap = data.keyMap;
  var keyMapValid = data.keyMapValid;
  var child = node.lastChild;
  var key = undefined;

  if (child === currentNode && keyMapValid) {
    return;
  }

  while (child !== currentNode) {
    removeChild(node, child, keyMap);
    child = node.lastChild;
  }

  // Clean the keyMap, removing any unusued keys.
  if (!keyMapValid) {
    for (key in keyMap) {
      child = keyMap[key];
      if (child.parentNode !== node) {
        context.markDeleted(child);
        delete keyMap[key];
      }
    }

    data.keyMapValid = true;
  }
};

/**
 * Changes to the first child of the current node.
 */
var enterNode = function () {
  currentParent = currentNode;
  currentNode = null;
};

/**
 * @return {?Node} The next Node to be patched.
 */
var getNextNode = function () {
  if (currentNode) {
    return currentNode.nextSibling;
  } else {
    return currentParent.firstChild;
  }
};

/**
 * Changes to the next sibling of the current node.
 */
var nextNode = function () {
  currentNode = getNextNode();
};

/**
 * Changes to the parent of the current node, removing any unvisited children.
 */
var exitNode = function () {
  clearUnvisitedDOM();

  currentNode = currentParent;
  currentParent = currentParent.parentNode;
};

/**
 * Makes sure that the current node is an Element with a matching tagName and
 * key.
 *
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @return {!Element} The corresponding Element.
 */
var coreElementOpen = function (tag, key) {
  nextNode();
  alignWithDOM(tag, key);
  enterNode();
  return (/** @type {!Element} */currentParent
  );
};

/**
 * Closes the currently open Element, removing any unvisited children if
 * necessary.
 *
 * @return {!Element} The corresponding Element.
 */
var coreElementClose = function () {
  if (process.env.NODE_ENV !== 'production') {
    setInSkip(false);
  }

  exitNode();
  return (/** @type {!Element} */currentNode
  );
};

/**
 * Makes sure the current node is a Text node and creates a Text node if it is
 * not.
 *
 * @return {!Text} The corresponding Text Node.
 */
var coreText = function () {
  nextNode();
  alignWithDOM('#text', null);
  return (/** @type {!Text} */currentNode
  );
};

/**
 * Gets the current Element being patched.
 * @return {!Element}
 */
var currentElement = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertInPatch('currentElement', context);
    assertNotInAttributes('currentElement');
  }
  return (/** @type {!Element} */currentParent
  );
};

/**
 * @return {Node} The Node that will be evaluated for the next instruction.
 */
var currentPointer = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertInPatch('currentPointer', context);
    assertNotInAttributes('currentPointer');
  }
  return getNextNode();
};

/**
 * Skips the children in a subtree, allowing an Element to be closed without
 * clearing out the children.
 */
var skip = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertNoChildrenDeclaredYet('skip', currentNode);
    setInSkip(true);
  }
  currentNode = currentParent.lastChild;
};

/**
 * Skips the next Node to be patched, moving the pointer forward to the next
 * sibling of the current pointer.
 */
var skipNode = nextNode;

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const */
var symbols = {
  default: '__default'
};

/**
 * @param {string} name
 * @return {string|undefined} The namespace to use for the attribute.
 */
var getNamespace = function (name) {
  if (name.lastIndexOf('xml:', 0) === 0) {
    return 'http://www.w3.org/XML/1998/namespace';
  }

  if (name.lastIndexOf('xlink:', 0) === 0) {
    return 'http://www.w3.org/1999/xlink';
  }
};

/**
 * Applies an attribute or property to a given Element. If the value is null
 * or undefined, it is removed from the Element. Otherwise, the value is set
 * as an attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {?(boolean|number|string)=} value The attribute's value.
 */
var applyAttr = function (el, name, value) {
  if (value == null) {
    el.removeAttribute(name);
  } else {
    var attrNS = getNamespace(name);
    if (attrNS) {
      el.setAttributeNS(attrNS, name, value);
    } else {
      el.setAttribute(name, value);
    }
  }
};

/**
 * Applies a property to a given Element.
 * @param {!Element} el
 * @param {string} name The property's name.
 * @param {*} value The property's value.
 */
var applyProp = function (el, name, value) {
  el[name] = value;
};

/**
 * Applies a value to a style declaration. Supports CSS custom properties by
 * setting properties containing a dash using CSSStyleDeclaration.setProperty.
 * @param {CSSStyleDeclaration} style
 * @param {!string} prop
 * @param {*} value
 */
var setStyleValue = function (style, prop, value) {
  if (prop.indexOf('-') >= 0) {
    style.setProperty(prop, /** @type {string} */value);
  } else {
    style[prop] = value;
  }
};

/**
 * Applies a style to an Element. No vendor prefix expansion is done for
 * property names/values.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} style The style to set. Either a string of css or an object
 *     containing property-value pairs.
 */
var applyStyle = function (el, name, style) {
  if (typeof style === 'string') {
    el.style.cssText = style;
  } else {
    el.style.cssText = '';
    var elStyle = el.style;
    var obj = /** @type {!Object<string,string>} */style;

    for (var prop in obj) {
      if (has(obj, prop)) {
        setStyleValue(elStyle, prop, obj[prop]);
      }
    }
  }
};

/**
 * Updates a single attribute on an Element.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value. If the value is an object or
 *     function it is set on the Element, otherwise, it is set as an HTML
 *     attribute.
 */
var applyAttributeTyped = function (el, name, value) {
  var type = typeof value;

  if (type === 'object' || type === 'function') {
    applyProp(el, name, value);
  } else {
    applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
  }
};

/**
 * Calls the appropriate attribute mutator for this attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value.
 */
var updateAttribute = function (el, name, value) {
  var data = getData(el);
  var attrs = data.attrs;

  if (attrs[name] === value) {
    return;
  }

  var mutator = attributes[name] || attributes[symbols.default];
  mutator(el, name, value);

  attrs[name] = value;
};

/**
 * A publicly mutable object to provide custom mutators for attributes.
 * @const {!Object<string, function(!Element, string, *)>}
 */
var attributes = createMap();

// Special generic mutator that's called for any attribute that does not
// have a specific mutator.
attributes[symbols.default] = applyAttributeTyped;

attributes['style'] = applyStyle;

/**
 * The offset in the virtual element declaration where the attributes are
 * specified.
 * @const
 */
var ATTRIBUTES_OFFSET = 3;

/**
 * Builds an array of arguments for use with elementOpenStart, attr and
 * elementOpenEnd.
 * @const {Array<*>}
 */
var argsBuilder = [];

/**
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args, Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementOpen = function (tag, key, statics, var_args) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('elementOpen');
    assertNotInSkip('elementOpen');
  }

  var node = coreElementOpen(tag, key);
  var data = getData(node);

  if (!data.staticsApplied) {
    if (statics) {
      for (var _i = 0; _i < statics.length; _i += 2) {
        var name = /** @type {string} */statics[_i];
        var value = statics[_i + 1];
        updateAttribute(node, name, value);
      }
    }
    // Down the road, we may want to keep track of the statics array to use it
    // as an additional signal about whether a node matches or not. For now,
    // just use a marker so that we do not reapply statics.
    data.staticsApplied = true;
  }

  /*
   * Checks to see if one or more attributes have changed for a given Element.
   * When no attributes have changed, this is much faster than checking each
   * individual argument. When attributes have changed, the overhead of this is
   * minimal.
   */
  var attrsArr = data.attrsArr;
  var newAttrs = data.newAttrs;
  var isNew = !attrsArr.length;
  var i = ATTRIBUTES_OFFSET;
  var j = 0;

  for (; i < arguments.length; i += 2, j += 2) {
    var _attr = arguments[i];
    if (isNew) {
      attrsArr[j] = _attr;
      newAttrs[_attr] = undefined;
    } else if (attrsArr[j] !== _attr) {
      break;
    }

    var value = arguments[i + 1];
    if (isNew || attrsArr[j + 1] !== value) {
      attrsArr[j + 1] = value;
      updateAttribute(node, _attr, value);
    }
  }

  if (i < arguments.length || j < attrsArr.length) {
    for (; i < arguments.length; i += 1, j += 1) {
      attrsArr[j] = arguments[i];
    }

    if (j < attrsArr.length) {
      attrsArr.length = j;
    }

    /*
     * Actually perform the attribute update.
     */
    for (i = 0; i < attrsArr.length; i += 2) {
      var name = /** @type {string} */attrsArr[i];
      var value = attrsArr[i + 1];
      newAttrs[name] = value;
    }

    for (var _attr2 in newAttrs) {
      updateAttribute(node, _attr2, newAttrs[_attr2]);
      newAttrs[_attr2] = undefined;
    }
  }

  return node;
};

/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 */
var elementOpenStart = function (tag, key, statics) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('elementOpenStart');
    setInAttributes(true);
  }

  argsBuilder[0] = tag;
  argsBuilder[1] = key;
  argsBuilder[2] = statics;
};

/***
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 *
 * @param {string} name
 * @param {*} value
 */
var attr = function (name, value) {
  if (process.env.NODE_ENV !== 'production') {
    assertInAttributes('attr');
  }

  argsBuilder.push(name);
  argsBuilder.push(value);
};

/**
 * Closes an open tag started with elementOpenStart.
 * @return {!Element} The corresponding Element.
 */
var elementOpenEnd = function () {
  if (process.env.NODE_ENV !== 'production') {
    assertInAttributes('elementOpenEnd');
    setInAttributes(false);
  }

  var node = elementOpen.apply(null, argsBuilder);
  argsBuilder.length = 0;
  return node;
};

/**
 * Closes an open virtual Element.
 *
 * @param {string} tag The element's tag.
 * @return {!Element} The corresponding Element.
 */
var elementClose = function (tag) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('elementClose');
  }

  var node = coreElementClose();

  if (process.env.NODE_ENV !== 'production') {
    assertCloseMatchesOpenTag(getData(node).nodeName, tag);
  }

  return node;
};

/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementVoid = function (tag, key, statics, var_args) {
  elementOpen.apply(null, arguments);
  return elementClose(tag);
};

/**
 * Declares a virtual Text at this point in the document.
 *
 * @param {string|number|boolean} value The value of the Text.
 * @param {...(function((string|number|boolean)):string)} var_args
 *     Functions to format the value which are called only when the value has
 *     changed.
 * @return {!Text} The corresponding text node.
 */
var text = function (value, var_args) {
  if (process.env.NODE_ENV !== 'production') {
    assertNotInAttributes('text');
    assertNotInSkip('text');
  }

  var node = coreText();
  var data = getData(node);

  if (data.text !== value) {
    data.text = /** @type {string} */value;

    var formatted = value;
    for (var i = 1; i < arguments.length; i += 1) {
      /*
       * Call the formatter function directly to prevent leaking arguments.
       * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
       */
      var fn = arguments[i];
      formatted = fn(formatted);
    }

    node.data = formatted;
  }

  return node;
};

exports.patch = patchInner;
exports.patchInner = patchInner;
exports.patchOuter = patchOuter;
exports.currentElement = currentElement;
exports.currentPointer = currentPointer;
exports.skip = skip;
exports.skipNode = skipNode;
exports.elementVoid = elementVoid;
exports.elementOpenStart = elementOpenStart;
exports.elementOpenEnd = elementOpenEnd;
exports.elementOpen = elementOpen;
exports.elementClose = elementClose;
exports.text = text;
exports.attr = attr;
exports.symbols = symbols;
exports.attributes = attributes;
exports.applyAttr = applyAttr;
exports.applyProp = applyProp;
exports.notifications = notifications;
exports.importNode = importNode;

//# sourceMappingURL=incremental-dom-cjs.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _events = __webpack_require__(83);

var _metal = __webpack_require__(2);

var _sync = __webpack_require__(118);

var _metalDom = __webpack_require__(3);

var _ComponentDataManager = __webpack_require__(81);

var _ComponentDataManager2 = _interopRequireDefault(_ComponentDataManager);

var _ComponentRenderer = __webpack_require__(82);

var _ComponentRenderer2 = _interopRequireDefault(_ComponentRenderer);

var _metalEvents = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component collects common behaviors to be followed by UI components, such
 * as Lifecycle, CSS classes management, events encapsulation and support for
 * different types of rendering.
 * Rendering logic can be done by either:
 *     - Listening to the `render` event inside the `created` lifecycle function
 *       and adding the rendering logic to the listener.
 *     - Using an existing implementation of `ComponentRenderer` like `Soy`,
 *       and following its patterns.
 *     - Building your own implementation of a `ComponentRenderer`.
 * Specifying the renderer that will be used can be done by setting the RENDERER
 * static variable to the renderer's constructor function.
 *
 * Example:
 *
 * <code>
 * class CustomComponent extends Component {
 *   created() {
 *   }
 *
 *   rendered() {
 *   }
 *
 *   attached() {
 *   }
 *
 *   detached() {
 *   }
 *
 *   disposed() {
 *   }
 * }
 *
 * CustomComponent.RENDERER = MyRenderer;
 *
 * CustomComponent.STATE = {
 *   title: { value: 'Title' },
 *   fontSize: { value: '10px' }
 * };
 * </code>
 *
 * @extends {State}
 */
var Component = function (_EventEmitter) {
	_inherits(Component, _EventEmitter);

	/**
  * Constructor function for `Component`.
  * @param {Object=} opt_config An object with the initial values for this
  *     component's state.
  * @param {boolean|string|Element=} opt_parentElement The element where the
  *     component should be rendered. Can be given as a selector or an element.
  *     If `false` is passed, the component won't be rendered automatically
  *     after created.
  * @constructor
  */
	function Component(opt_config, opt_parentElement) {
		_classCallCheck(this, Component);

		/**
   * Instance of `DomEventEmitterProxy` which proxies events from the component's
   * element to the component itself.
   * @type {!DomEventEmitterProxy}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));

		_this.elementEventProxy_ = new _metalDom.DomEventEmitterProxy(null, _this, proxyBlackList_);

		/**
   * The `EventHandler` instance for events attached from the `events` state key.
   * @type {EventHandler}
   * @protected
   */
		_this.eventsStateKeyHandler_ = null;

		/**
   * Whether the element is in document.
   * @type {boolean}
   */
		_this.inDocument = false;

		/**
   * The initial config option passed to this constructor.
   * @type {!Object}
   * @protected
   */
		_this.initialConfig_ = opt_config || {};

		/**
   * Whether the element was rendered.
   * @type {boolean}
   */
		_this.wasRendered = false;

		/**
   * The component's element will be appended to the element this variable is
   * set to, unless the user specifies another parent when calling `render` or
   * `attach`.
   * @type {!Element}
   */
		_this.DEFAULT_ELEMENT_PARENT = document.body;

		_this.setShouldUseFacade(true);
		_this.element = _this.initialConfig_.element;

		_this.setUpRenderer_();
		_this.setUpDataManager_();
		_this.setUpSyncUpdates_();

		_this.on('stateChanged', _this.handleComponentStateChanged_);
		_this.on('eventsChanged', _this.onEventsChanged_);
		_this.addListenersFromObj_(_this.dataManager_.get(_this, 'events'));

		_this.created();
		_this.componentCreated_ = true;
		if (opt_parentElement !== false) {
			_this.renderComponent(opt_parentElement);
		}
		return _this;
	}

	/**
  * Getter logic for the element property.
  * @return {Element}
  */


	_createClass(Component, [{
		key: 'addListenersFromObj_',


		/**
   * Adds the listeners specified in the given object.
   * @param {!Object} obj
   * @protected
   */
		value: function addListenersFromObj_(obj) {
			var _eventsStateKeyHandle;

			if (!this.eventsStateKeyHandler_) {
				this.eventsStateKeyHandler_ = new _metalEvents.EventHandler();
			}
			var handles = (0, _events.addListenersFromObj)(this, obj);
			(_eventsStateKeyHandle = this.eventsStateKeyHandler_).add.apply(_eventsStateKeyHandle, _toConsumableArray(handles));
		}

		/**
   * Invokes the attached Lifecycle. When attached, the component element is
   * appended to the DOM and any other action to be performed must be
   * implemented in this method, such as, binding DOM events. A component can
   * be re-attached multiple times.
   * @param {(string|Element)=} opt_parentElement Optional parent element
   *     to render the component.
   * @param {(string|Element)=} opt_siblingElement Optional sibling element
   *     to render the component before it. Relevant when the component needs
   *     to be rendered before an existing element in the DOM.
   * @protected
   * @chainable
   */

	}, {
		key: 'attach',
		value: function attach(opt_parentElement, opt_siblingElement) {
			if (!this.inDocument) {
				this.attachElement(opt_parentElement, opt_siblingElement);
				this.inDocument = true;
				this.attachData_ = {
					parent: opt_parentElement,
					sibling: opt_siblingElement
				};
				this.emit('attached', this.attachData_);
				this.attached();
			}
			return this;
		}

		/**
   * Lifecycle. When attached, the component element is appended to the DOM
   * and any other action to be performed must be implemented in this method,
   * such as, binding DOM events. A component can be re-attached multiple
   * times, therefore the undo behavior for any action performed in this phase
   * must be implemented on the detach phase.
   */

	}, {
		key: 'attached',
		value: function attached() {}

		/**
   * Attaches the component element into the DOM.
   * @param {(string|Element)=} opt_parentElement Optional parent element
   *     to render the component.
   * @param {(string|Element)=} opt_siblingElement Optional sibling element
   *     to render the component before it. Relevant when the component needs
   *     to be rendered before an existing element in the DOM, e.g.
   *     `component.attach(null, existingElement)`.
   */

	}, {
		key: 'attachElement',
		value: function attachElement(opt_parentElement, opt_siblingElement) {
			var element = this.element;
			if (element && (opt_siblingElement || !element.parentNode)) {
				var parent = (0, _metalDom.toElement)(opt_parentElement) || this.DEFAULT_ELEMENT_PARENT;
				parent.insertBefore(element, (0, _metalDom.toElement)(opt_siblingElement));
			}
		}

		/**
   * Lifecycle. This is called when the component has just been created, before
   * it's rendered.
   */

	}, {
		key: 'created',
		value: function created() {}

		/**
   * Listens to a delegate event on the component's element.
   * @param {string} eventName The name of the event to listen to.
   * @param {string} selector The selector that matches the child elements that
   *   the event should be triggered for.
   * @param {!function(!Object)} callback Function to be called when the event is
   *   triggered. It will receive the normalized event object.
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'delegate',
		value: function delegate(eventName, selector, callback) {
			return this.on('delegate:' + eventName + ':' + selector, callback);
		}

		/**
   * Invokes the detached Lifecycle. When detached, the component element is
   * removed from the DOM and any other action to be performed must be
   * implemented in this method, such as, unbinding DOM events. A component
   * can be detached multiple times.
   * @chainable
   */

	}, {
		key: 'detach',
		value: function detach() {
			if (this.inDocument) {
				if (this.element && this.element.parentNode) {
					this.element.parentNode.removeChild(this.element);
				}
				this.inDocument = false;
				this.detached();
			}
			this.emit('detached');
			return this;
		}

		/**
   * Lifecycle. When detached, the component element is removed from the DOM
   * and any other action to be performed must be implemented in this method,
   * such as, unbinding DOM events. A component can be detached multiple
   * times, therefore the undo behavior for any action performed in this phase
   * must be implemented on the attach phase.
   */

	}, {
		key: 'detached',
		value: function detached() {}

		/**
   * Lifecycle. Called when the component is disposed. Should be overridden by
   * sub classes to dispose of any internal data or events.
   */

	}, {
		key: 'disposed',
		value: function disposed() {}

		/**
   * @inheritDoc
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.detach();
			this.disposed();

			this.elementEventProxy_.dispose();
			this.elementEventProxy_ = null;

			this.dataManager_.dispose(this);
			this.dataManager_ = null;

			this.renderer_.dispose(this);
			this.renderer_ = null;

			_get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'disposeInternal', this).call(this);
		}

		/**
   * Gets data about where this component was attached at.
   * @return {!Object}
   */

	}, {
		key: 'getAttachData',
		value: function getAttachData() {
			return this.attachData_;
		}

		/**
   * Gets the `ComponentDataManager` being used.
   * @return {!ComponentDataManager}
   */

	}, {
		key: 'getDataManager',
		value: function getDataManager() {
			return this.dataManager_;
		}

		/**
   * Gets the configuration object that was passed to this component's constructor.
   * @return {!Object}
   */

	}, {
		key: 'getInitialConfig',
		value: function getInitialConfig() {
			return this.initialConfig_;
		}

		/**
   * Gets state data for this component.
   * @return {!Object}
   */

	}, {
		key: 'getState',
		value: function getState() {
			return this.dataManager_.getState(this);
		}

		/**
   * Gets the keys for the state data.
   * @return {!Array<string>}
   */

	}, {
		key: 'getStateKeys',
		value: function getStateKeys() {
			return this.dataManager_.getStateKeys(this);
		}

		/**
   * Gets the `ComponentRenderer` instance being used.
   * @return {!ComponentRenderer}
   */

	}, {
		key: 'getRenderer',
		value: function getRenderer() {
			return this.renderer_;
		}

		/**
   * Handles a change in the component's element.
   * @param {Element} prevVal
   * @param {Element} newVal
   * @protected
   */

	}, {
		key: 'handleComponentElementChanged_',
		value: function handleComponentElementChanged_(prevVal, newVal) {
			this.elementEventProxy_.setOriginEmitter(newVal);
			if (this.componentCreated_) {
				this.emit('elementChanged', {
					prevVal: prevVal,
					newVal: newVal
				});
				if (newVal && this.wasRendered) {
					this.syncVisible(this.dataManager_.get(this, 'visible'));
				}
			}
		}

		/**
   * Handles state batch changes. Calls any existing `sync` functions that
   * match the changed state keys.
   * @param {Event} event
   * @protected
   */

	}, {
		key: 'handleComponentStateChanged_',
		value: function handleComponentStateChanged_(event) {
			if (!this.hasSyncUpdates()) {
				this.updateRenderer_(event);
			}
			(0, _sync.syncState)(this, event.changes);
			this.emit('stateSynced', event);
		}

		/**
   * Handles a `stateKeyChanged` event. This is only called for components that
   * have requested updates to happen synchronously.
   * @param {!{key: string, newVal: *, prevVal: *}} data
   * @protected
   */

	}, {
		key: 'handleComponentStateKeyChanged_',
		value: function handleComponentStateKeyChanged_(data) {
			this.updateRenderer_({
				changes: _defineProperty({}, data.key, data)
			});
		}

		/**
   * Checks if this component has sync updates enabled.
   * @return {boolean}
   */

	}, {
		key: 'hasSyncUpdates',
		value: function hasSyncUpdates() {
			return this.syncUpdates_;
		}

		/**
   * Informs that the component that the rendered has finished rendering it. The
   * renderer is the one responsible for calling this when appropriate. This
   * will emit events and run the appropriate lifecycle for the first render.
   */

	}, {
		key: 'informRendered',
		value: function informRendered() {
			var firstRender = !this.hasRendererRendered_;
			this.hasRendererRendered_ = true;
			this.rendered(firstRender);
			this.emit('rendered', firstRender);
		}

		/**
   * Checks if the given function is a component constructor.
   * @param {!function()} fn Any function
   * @return {boolean}
   */

	}, {
		key: 'mergeElementClasses_',


		/**
   * Merges two values for the ELEMENT_CLASSES property into a single one.
   * @param {string} class1
   * @param {string} class2
   * @return {string} The merged value.
   * @protected
   */
		value: function mergeElementClasses_(class1, class2) {
			return class1 ? class1 + ' ' + (class2 || '') : class2;
		}

		/**
   * Fired when the `events` state value is changed.
   * @param {!Object} event
   * @protected
   */

	}, {
		key: 'onEventsChanged_',
		value: function onEventsChanged_(event) {
			this.eventsStateKeyHandler_.removeAllListeners();
			this.addListenersFromObj_(event.newVal);
		}

		/**
   * Creates and renders a component for the given constructor function. This
   * will always make sure that the constructor runs without rendering the
   * component, having the `render` step happen only after it has finished.
   * @param {!function()} Ctor The component's constructor function.
   * @param {Object|Element=} opt_configOrElement Optional config data or parent
   *     for the component.
   * @param {Element=} opt_element Optional parent for the component.
   * @return {!Component} The rendered component's instance.
   */

	}, {
		key: 'renderComponent',


		/**
   * Renders the component into the DOM via its `ComponentRenderer`. Stores the
   * given parent element to be used when the renderer is done (`informRendered`).
   * @param {(string|Element|boolean)=} opt_parentElement Optional parent element
   *     to render the component. If set to `false`, the element won't be
   *     attached to any element after rendering. In this case, `attach` should
   *     be called manually later to actually attach it to the dom.
   */
		value: function renderComponent(opt_parentElement) {
			if (!this.hasRendererRendered_) {
				if (window.__METAL_DEV_TOOLS_HOOK__) {
					window.__METAL_DEV_TOOLS_HOOK__(this);
				}
				this.getRenderer().render(this);
			}
			this.emit('render');
			(0, _sync.syncState)(this);
			this.attach(opt_parentElement);
			this.wasRendered = true;
		}

		/**
   * Setter logic for the element property.
   * @param {?string|Element} val
   */

	}, {
		key: 'setState',


		/**
   * Sets the value of all the specified state keys.
   * @param {!Object.<string,*>} values A map of state keys to the values they
   *   should be set to.
   * @param {function()=} opt_callback An optional function that will be run
   *   after the next batched update is triggered.
   */
		value: function setState(state, opt_callback) {
			this.dataManager_.setState(this, state, opt_callback);
		}

		/**
   * Setter for the `elementClasses` data property. Appends given value with
   * the one specified in `ELEMENT_CLASSES`.
   * @param {string} val
   * @return {string}
   * @protected
   */

	}, {
		key: 'setterElementClassesFn_',
		value: function setterElementClassesFn_(val) {
			var elementClasses = (0, _metal.getStaticProperty)(this.constructor, 'ELEMENT_CLASSES', this.mergeElementClasses_);
			if (elementClasses) {
				val += ' ' + elementClasses;
			}
			return val.trim();
		}

		/**
   * Sets up the component's data manager.
   * @protected
   */

	}, {
		key: 'setUpDataManager_',
		value: function setUpDataManager_() {
			this.dataManager_ = (0, _metal.getStaticProperty)(this.constructor, 'DATA_MANAGER');
			this.dataManager_.setUp(this, _metal.object.mixin({}, this.renderer_.getExtraDataConfig(this), Component.DATA));
		}

		/**
   * Sets up the component's renderer.
   * @protected
   */

	}, {
		key: 'setUpRenderer_',
		value: function setUpRenderer_() {
			this.renderer_ = (0, _metal.getStaticProperty)(this.constructor, 'RENDERER');
			this.renderer_.setUp(this);
		}

		/**
   * Sets up the component to use sync updates when `SYNC_UPDATES` is `true`.
   * @protected
   */

	}, {
		key: 'setUpSyncUpdates_',
		value: function setUpSyncUpdates_() {
			this.syncUpdates_ = (0, _metal.getStaticProperty)(this.constructor, 'SYNC_UPDATES');
			if (this.hasSyncUpdates()) {
				this.on('stateKeyChanged', this.handleComponentStateKeyChanged_.bind(this));
			}
		}

		/**
   * Skips renderer updates until `stopSkipUpdates` is called.
   */

	}, {
		key: 'startSkipUpdates',
		value: function startSkipUpdates() {
			this.skipUpdates_ = true;
		}

		/**
   * Stops skipping renderer updates.
   */

	}, {
		key: 'stopSkipUpdates',
		value: function stopSkipUpdates() {
			this.skipUpdates_ = false;
		}

		/**
   * State synchronization logic for `visible` state key.
   * Updates the element's display value according to its visibility.
   * @param {boolean} newVal
   */

	}, {
		key: 'syncVisible',
		value: function syncVisible(newVal) {
			if (this.element) {
				this.element.style.display = newVal ? '' : 'none';
			}
		}

		/**
   * Lifecycle. Called whenever the component has just been rendered.
   * @param {boolean} firstRender Flag indicating if this was the component's
   *     first render.
   */

	}, {
		key: 'rendered',
		value: function rendered() {}

		/**
   * Calls "update" on the renderer, passing it the changed data.
   * @param {!{changes: !Object}} data
   * @protected
   */

	}, {
		key: 'updateRenderer_',
		value: function updateRenderer_(data) {
			if (!this.skipUpdates_ && this.hasRendererRendered_) {
				this.getRenderer().update(this, data);
			}
		}

		/**
   * Validator logic for the `events` state key.
   * @param {Object} val
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'validatorEventsFn_',
		value: function validatorEventsFn_(val) {
			return !(0, _metal.isDefAndNotNull)(val) || (0, _metal.isObject)(val);
		}
	}, {
		key: 'element',
		get: function get() {
			return this.elementValue_;
		},
		set: function set(val) {
			if (!(0, _metal.isElement)(val) && !(0, _metal.isString)(val) && (0, _metal.isDefAndNotNull)(val)) {
				return;
			}

			if (val) {
				val = (0, _metalDom.toElement)(val) || this.elementValue_;
			}

			if (this.elementValue_ !== val) {
				var prev = this.elementValue_;
				this.elementValue_ = val;
				this.handleComponentElementChanged_(prev, val);
			}
		}
	}], [{
		key: 'isComponentCtor',
		value: function isComponentCtor(fn) {
			return fn.prototype && fn.prototype[Component.COMPONENT_FLAG];
		}
	}, {
		key: 'render',
		value: function render(Ctor, opt_configOrElement, opt_element) {
			var config = opt_configOrElement;
			var element = opt_element;
			if ((0, _metal.isElement)(opt_configOrElement)) {
				config = null;
				element = opt_configOrElement;
			}
			var instance = new Ctor(config, false);
			instance.renderComponent(element);
			return instance;
		}

		/**
   * Creates and renders a component for the given constructor function as
   * string. This will always make sure that the constructor runs without
   * rendering the component, having the `render` step happen only after it
   * has finished.
   * @param {!function()} Ctor The component's constructor function.
   * @param {Object|Element=} opt_configOrElement Optional config data or
   *     parent for the component.
   * @return {!String} The rendered component's content as string.
   */

	}, {
		key: 'renderToString',
		value: function renderToString(Ctor, opt_config) {
			var rendererName = Ctor.RENDERER && Ctor.RENDERER.RENDERER_NAME;
			switch (rendererName) {
				case 'jsx':
				case 'soy':
				case 'incremental-dom':
					{
						if (typeof IncrementalDOM === 'undefined') {
							throw new Error('Error. Trying to render incremental dom ' + 'based component to string requires IncrementalDOM ' + 'implementation to be loaded.');
						}
						// Incremental dom patches for components or nested components are
						// isolated inside the component element. The following code intercepts
						// incremental dom patches and collect results into temporary stack in
						// order to successfully collect the final string of the outermost
						// component after all nested components stack rendered.
						var interceptedComponentStrings = [];
						var patch = IncrementalDOM.patch;
						var patchInterceptor = function patchInterceptor() {
							var currentElement = patch.apply(null, arguments);
							interceptedComponentStrings.push(currentElement.innerHTML);
							IncrementalDOM.patch = patch;
						};
						IncrementalDOM.patch = patchInterceptor;
						Component.render(Ctor, opt_config);
						return interceptedComponentStrings[0];
					}
				default:
					throw new Error('Error. Trying to render non incremental dom ' + 'based component to string.');
			}
		}
	}]);

	return Component;
}(_metalEvents.EventEmitter);

/**
 * Component data definition.
 * @type {Object}
 * @static
 */


Component.DATA = {
	/**
  * Objects describing children elements that were passed to be rendered inside
  * this component.
  * @type {!Array<!Object>}
  */
	children: {
		validator: Array.isArray,
		value: []
	},

	/**
  * CSS classes to be applied to the element.
  * @type {string}
  */
	elementClasses: {
		setter: 'setterElementClassesFn_',
		validator: _metal.isString,
		value: ''
	},

	/**
  * Listeners that should be attached to this component. Should be provided as
  * an object, where the keys are event names and the values are the listener
  * functions (or function names).
  * @type {Object<string, (function()|string|{selector: string, fn: function()|string})>}
  */
	events: {
		validator: 'validatorEventsFn_',
		value: null
	},

	/**
  * Indicates if the component is visible or not.
  * @type {boolean}
  */
	visible: {
		validator: _metal.isBoolean,
		value: true
	}
};

/**
 * Name of the flag used to identify component constructors via their prototype.
 * @type {string}
 */
Component.COMPONENT_FLAG = '__metal_component__';

/**
 * The `ComponentDataManager` class that should be used. This class will be
 * responsible for handling the component's data. Each component may have its
 * own implementation.
 * @type {!ComponentDataManager}
 */
Component.DATA_MANAGER = _ComponentDataManager2.default;

/**
 * CSS classes to be applied to the element.
 * @type {string}
 */
Component.ELEMENT_CLASSES = '';

/**
 * The `ComponentRenderer` that should be used. Components need to set this
 * to a subclass of `ComponentRenderer` that has the rendering logic, like
 * `SoyRenderer`.
 * @type {!ComponentRenderer}
 */
Component.RENDERER = _ComponentRenderer2.default;

/**
 * Flag indicating if component updates will happen synchronously. Updates are
 * done asynchronously by default, which allows changes to be batched and
 * applied together.
 * @type {boolean}
 */
Component.SYNC_UPDATES = false;

/**
 * Sets a prototype flag to easily determine if a given constructor is for
 * a component or not.
 */
Component.prototype[Component.COMPONENT_FLAG] = true;

var proxyBlackList_ = {
	eventsChanged: true,
	stateChanged: true,
	stateKeyChanged: true
};

exports.default = Component;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The component registry is used to register components, so they can
 * be accessible by name.
 * @type {Object}
 */
var ComponentRegistry = function () {
	function ComponentRegistry() {
		_classCallCheck(this, ComponentRegistry);
	}

	_createClass(ComponentRegistry, null, [{
		key: 'getConstructor',

		/**
   * Gets the constructor function for the given component name, or
   * undefined if it hasn't been registered yet.
   * @param {string} name The component's name.
   * @return {?function()}
   * @static
   */
		value: function getConstructor(name) {
			var constructorFn = ComponentRegistry.components_[name];
			if (!constructorFn) {
				console.error('There\'s no constructor registered for the component named ' + name + '.\n\t\t\t\tComponents need to be registered via ComponentRegistry.register.');
			}
			return constructorFn;
		}

		/**
   * Registers a component, so it can be found by its name.
   * @param {!Function} constructorFn The component's constructor function.
   * @param {string=} opt_name Name of the registered component. If none is given
   *   the name defined by the NAME static variable will be used instead. If that
   *   isn't set as well, the name of the constructor function will be used.
   * @static
   */

	}, {
		key: 'register',
		value: function register(constructorFn, opt_name) {
			var name = opt_name;
			if (!name) {
				if (constructorFn.hasOwnProperty('NAME')) {
					name = constructorFn.NAME;
				} else {
					name = (0, _metal.getFunctionName)(constructorFn);
				}
			}
			constructorFn.NAME = name;
			ComponentRegistry.components_[name] = constructorFn;
		}
	}]);

	return ComponentRegistry;
}();

/**
 * Holds all registered components, indexed by their names.
 * @type {!Object<string, function()>}
 * @protected
 * @static
 */


ComponentRegistry.components_ = {};

exports.default = ComponentRegistry;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.syncState = syncState;

var _metal = __webpack_require__(2);

var SYNC_FNS_KEY = '__METAL_SYNC_FNS__';

/**
 * Gets the `sync` methods for this component's state. Caches the results in
 * the component's constructor whenever possible, so that this doesn't need to
 * be calculated again. It's not possible to cache the results when at least
 * one sync method is defined in the instance itself instead of in its
 * prototype, as it may be bound to the instance (not reusable by others).
 * @param {!Component} component
 * @return {!Object}
 * @private
 */
function getSyncFns_(component) {
	var ctor = component.constructor;
	if (ctor.hasOwnProperty(SYNC_FNS_KEY)) {
		return ctor[SYNC_FNS_KEY];
	}

	var fns = {};
	var keys = component.getDataManager().getSyncKeys(component);
	var canCache = true;
	for (var i = 0; i < keys.length; i++) {
		var name = 'sync' + keys[i].charAt(0).toUpperCase() + keys[i].slice(1);
		var fn = component[name];
		if (fn) {
			fns[keys[i]] = fn;
			canCache = canCache && component.constructor.prototype[name];
		}
	}

	if (canCache) {
		ctor[SYNC_FNS_KEY] = fns;
	}
	return fns;
}

/**
 * Calls "sync" functions for the given component's state.
 * @param {!Component} component
 * @param {Object=} opt_changes When given, only the properties inside it will
 *     be synced. Otherwise all state properties will be synced.
 */
function syncState(component, opt_changes) {
	var syncFns = getSyncFns_(component);
	var keys = Object.keys(opt_changes || syncFns);
	for (var i = 0; i < keys.length; i++) {
		var fn = syncFns[keys[i]];
		if ((0, _metal.isFunction)(fn)) {
			var change = opt_changes && opt_changes[keys[i]];
			var manager = component.getDataManager();
			fn.call(component, change ? change.newVal : manager.get(component, keys[i]), change ? change.prevVal : undefined);
		}
	}
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _domData = __webpack_require__(79);

var _domData2 = _interopRequireDefault(_domData);

var _metalEvents = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is a special EventHandle, that is responsible for dom delegated events
 * (only the ones that receive a target element, not a selector string).
 * @extends {EventHandle}
 */
var DomDelegatedEventHandle = function (_EventHandle) {
	_inherits(DomDelegatedEventHandle, _EventHandle);

	/**
  * The constructor for `DomDelegatedEventHandle`.
  * @param {!Event} emitter Element the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  * @param {string=} opt_selector An optional selector used when delegating
  *     the event.
  * @constructor
  */
	function DomDelegatedEventHandle(emitter, event, listener, opt_selector) {
		_classCallCheck(this, DomDelegatedEventHandle);

		var _this = _possibleConstructorReturn(this, (DomDelegatedEventHandle.__proto__ || Object.getPrototypeOf(DomDelegatedEventHandle)).call(this, emitter, event, listener));

		_this.selector_ = opt_selector;
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(DomDelegatedEventHandle, [{
		key: 'removeListener',
		value: function removeListener() {
			var delegating = _domData2.default.get(this.emitter_, 'delegating', {});
			var listeners = _domData2.default.get(this.emitter_, 'listeners', {});
			var selector = this.selector_;
			var arr = (0, _metal.isString)(selector) ? delegating[this.event_].selectors : listeners;
			var key = (0, _metal.isString)(selector) ? selector : this.event_;

			_metal.array.remove(arr[key] || [], this.listener_);
			if (arr[key] && arr[key].length === 0) {
				delete arr[key];
			}
		}
	}]);

	return DomDelegatedEventHandle;
}(_metalEvents.EventHandle);

exports.default = DomDelegatedEventHandle;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dom = __webpack_require__(77);

var _metalEvents = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DomEventEmitterProxy utility. It extends `EventEmitterProxy` to also accept
 * dom elements as origin emitters.
 * @extends {EventEmitterProxy}
 */
var DomEventEmitterProxy = function (_EventEmitterProxy) {
	_inherits(DomEventEmitterProxy, _EventEmitterProxy);

	function DomEventEmitterProxy() {
		_classCallCheck(this, DomEventEmitterProxy);

		return _possibleConstructorReturn(this, (DomEventEmitterProxy.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy)).apply(this, arguments));
	}

	_createClass(DomEventEmitterProxy, [{
		key: 'addListener_',

		/**
   * Adds the given listener for the given event.
   * @param {string} event
   * @param {!function()} listener
   * @return {!EventHandle} The listened event's handle.
   * @protected
   * @override
   */
		value: function addListener_(event, listener) {
			if (this.originEmitter_.addEventListener) {
				if (this.isDelegateEvent_(event)) {
					var index = event.indexOf(':', 9);
					var eventName = event.substring(9, index);
					var selector = event.substring(index + 1);
					return (0, _dom.delegate)(this.originEmitter_, eventName, selector, listener);
				} else {
					return (0, _dom.on)(this.originEmitter_, event, listener);
				}
			} else {
				return _get(DomEventEmitterProxy.prototype.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy.prototype), 'addListener_', this).call(this, event, listener);
			}
		}

		/**
   * Checks if the given event is of the delegate type.
   * @param {string} event
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'isDelegateEvent_',
		value: function isDelegateEvent_(event) {
			return event.substr(0, 9) === 'delegate:';
		}

		/**
   * Checks if the given event is supported by the origin element.
   * @param {string} event
   * @protected
   */

	}, {
		key: 'isSupportedDomEvent_',
		value: function isSupportedDomEvent_(event) {
			if (!this.originEmitter_ || !this.originEmitter_.addEventListener) {
				return true;
			}
			return this.isDelegateEvent_(event) && event.indexOf(':', 9) !== -1 || (0, _dom.supportsEvent)(this.originEmitter_, event);
		}

		/**
   * Checks if the given event should be proxied.
   * @param {string} event
   * @return {boolean}
   * @protected
   * @override
   */

	}, {
		key: 'shouldProxyEvent_',
		value: function shouldProxyEvent_(event) {
			return _get(DomEventEmitterProxy.prototype.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy.prototype), 'shouldProxyEvent_', this).call(this, event) && this.isSupportedDomEvent_(event);
		}
	}]);

	return DomEventEmitterProxy;
}(_metalEvents.EventEmitterProxy);

exports.default = DomEventEmitterProxy;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.customEvents = undefined;
exports.addClasses = addClasses;
exports.closest = closest;
exports.append = append;
exports.buildFragment = buildFragment;
exports.contains = contains;
exports.delegate = delegate;
exports.enterDocument = enterDocument;
exports.exitDocument = exitDocument;
exports.hasClass = hasClass;
exports.isEmpty = isEmpty;
exports.match = match;
exports.next = next;
exports.on = on;
exports.once = once;
exports.parent = parent;
exports.registerCustomEvent = registerCustomEvent;
exports.removeChildren = removeChildren;
exports.removeClasses = removeClasses;
exports.replace = replace;
exports.supportsEvent = supportsEvent;
exports.toElement = toElement;
exports.toggleClasses = toggleClasses;
exports.triggerEvent = triggerEvent;

var _metal = __webpack_require__(2);

var _domData = __webpack_require__(79);

var _domData2 = _interopRequireDefault(_domData);

var _DomDelegatedEventHandle = __webpack_require__(119);

var _DomDelegatedEventHandle2 = _interopRequireDefault(_DomDelegatedEventHandle);

var _DomEventHandle = __webpack_require__(84);

var _DomEventHandle2 = _interopRequireDefault(_DomEventHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elementsByTag_ = {};
var supportCache_ = {};
var customEvents = exports.customEvents = {};

var LAST_CONTAINER = '__metal_last_container__';
var USE_CAPTURE = {
	blur: true,
	error: true,
	focus: true,
	invalid: true,
	load: true,
	scroll: true
};

/**
 * Adds the requested CSS classes to an element.
 * @param {!Element|!Nodelist} elements The element or elements to add CSS classes to.
 * @param {string} classes CSS classes to add.
 */
function addClasses(elements, classes) {
	if (!(0, _metal.isObject)(elements) || !(0, _metal.isString)(classes)) {
		return;
	}

	if (!elements.length) {
		elements = [elements];
	}

	for (var i = 0; i < elements.length; i++) {
		if ('classList' in elements[i]) {
			addClassesWithNative_(elements[i], classes);
		} else {
			addClassesWithoutNative_(elements[i], classes);
		}
	}
}

/**
 * Adds the requested CSS classes to an element using classList.
 * @param {!Element} element The element to add CSS classes to.
 * @param {string} classes CSS classes to add.
 * @private
 */
function addClassesWithNative_(element, classes) {
	classes.split(' ').forEach(function (className) {
		if (className) {
			element.classList.add(className);
		}
	});
}

/**
 * Adds the requested CSS classes to an element without using classList.
 * @param {!Element} element The element to add CSS classes to.
 * @param {string} classes CSS classes to add.
 * @private
 */
function addClassesWithoutNative_(element, classes) {
	var elementClassName = ' ' + element.className + ' ';
	var classesToAppend = '';

	classes = classes.split(' ');

	for (var i = 0; i < classes.length; i++) {
		var className = classes[i];

		if (elementClassName.indexOf(' ' + className + ' ') === -1) {
			classesToAppend += ' ' + className;
		}
	}

	if (classesToAppend) {
		element.className = element.className + classesToAppend;
	}
}

/**
 * Adds an event listener to the given element, to be triggered via delegate.
 * @param {!Element} element
 * @param {string} eventName
 * @param {!function()} listener
 * @private
 */
function addElementListener_(element, eventName, listener) {
	addToArr_(_domData2.default.get(element, 'listeners', {}), eventName, listener);
}

/**
 * Adds an event listener to the given element, to be triggered via delegate
 * selectors.
 * @param {!Element} element
 * @param {string} eventName
 * @param {string} selector
 * @param {!function()} listener
 * @private
 */
function addSelectorListener_(element, eventName, selector, listener) {
	var delegatingData = _domData2.default.get(element, 'delegating', {});
	addToArr_(delegatingData[eventName].selectors, selector, listener);
}

/**
 * Adds a value to an array inside an object, creating it first if it doesn't
 * yet exist.
 * @param {!Array} arr
 * @param {string} key
 * @param {*} value
 * @private
 */
function addToArr_(arr, key, value) {
	if (!arr[key]) {
		arr[key] = [];
	}
	arr[key].push(value);
}

/**
 * Attaches a delegate listener, unless there's already one attached.
 * @param {!Element} element
 * @param {string} eventName
 * @private
 */
function attachDelegateEvent_(element, eventName) {
	var delegatingData = _domData2.default.get(element, 'delegating', {});
	if (!delegatingData[eventName]) {
		delegatingData[eventName] = {
			handle: on(element, eventName, handleDelegateEvent_, !!USE_CAPTURE[eventName]),
			selectors: {}
		};
	}
}

/**
 * Gets the closest element up the tree from the given element (including
 * itself) that matches the specified selector, or null if none match.
 * @param {Element} element
 * @param {string} selector
 * @return {Element}
 */
function closest(element, selector) {
	while (element && !match(element, selector)) {
		element = element.parentNode;
	}
	return element;
}

/**
 * Appends a child node with text or other nodes to a parent node. If
 * child is a HTML string it will be automatically converted to a document
 * fragment before appending it to the parent.
 * @param {!Element} parent The node to append nodes to.
 * @param {!(Element|NodeList|string)} child The thing to append to the parent.
 * @return {!Element} The appended child.
 */
function append(parent, child) {
	if ((0, _metal.isString)(child)) {
		child = buildFragment(child);
	}
	if (child instanceof NodeList) {
		var childArr = Array.prototype.slice.call(child);
		for (var i = 0; i < childArr.length; i++) {
			parent.appendChild(childArr[i]);
		}
	} else {
		parent.appendChild(child);
	}
	return child;
}

/**
 * Helper for converting a HTML string into a document fragment.
 * @param {string} htmlString The HTML string to convert.
 * @return {!Element} The resulting document fragment.
 */
function buildFragment(htmlString) {
	var tempDiv = document.createElement('div');
	tempDiv.innerHTML = '<br>' + htmlString;
	tempDiv.removeChild(tempDiv.firstChild);

	var fragment = document.createDocumentFragment();
	while (tempDiv.firstChild) {
		fragment.appendChild(tempDiv.firstChild);
	}
	return fragment;
}

/**
 * Checks if the first element contains the second one.
 * @param {!Element} element1
 * @param {!Element} element2
 * @return {boolean}
 */
function contains(element1, element2) {
	if ((0, _metal.isDocument)(element1)) {
		// document.contains is not defined on IE9, so call it on documentElement instead.
		return element1.documentElement.contains(element2);
	} else {
		return element1.contains(element2);
	}
}

/**
 * Listens to the specified event on the given DOM element, but only calls the
 * given callback listener when it's triggered by elements that match the
 * given selector or target element.
 * @param {!Element} element The DOM element the event should be listened on.
 * @param {string} eventName The name of the event to listen to.
 * @param {!Element|string} selectorOrTarget Either an element or css selector
 *     that should match the event for the listener to be triggered.
 * @param {!function(!Object)} callback Function to be called when the event
 *     is triggered. It will receive the normalized event object.
 * @param {boolean=} opt_default Optional flag indicating if this is a default
 *     listener. That means that it would only be executed after all non
 *     default listeners, and only if the event isn't prevented via
 *     `preventDefault`.
 * @return {!EventHandle} Can be used to remove the listener.
 */
function delegate(element, eventName, selectorOrTarget, callback, opt_default) {
	var customConfig = customEvents[eventName];
	if (customConfig && customConfig.delegate) {
		eventName = customConfig.originalEvent;
		callback = customConfig.handler.bind(customConfig, callback);
	}

	if (opt_default) {
		// Wrap callback so we don't set property directly on it.
		callback = callback.bind();
		callback.defaultListener_ = true;
	}

	attachDelegateEvent_(element, eventName);
	if ((0, _metal.isString)(selectorOrTarget)) {
		addSelectorListener_(element, eventName, selectorOrTarget, callback);
	} else {
		addElementListener_(selectorOrTarget, eventName, callback);
	}

	return new _DomDelegatedEventHandle2.default((0, _metal.isString)(selectorOrTarget) ? element : selectorOrTarget, eventName, callback, (0, _metal.isString)(selectorOrTarget) ? selectorOrTarget : null);
}

/**
 * Verifies if the element is able to trigger the Click event,
 * simulating browsers behaviour, avoiding event listeners to be called by triggerEvent method.
 * @param {Element} node Element to be checked.
 * @param {string} eventName The event name.
 * @private
 */
function isAbleToInteractWith_(node, eventName, opt_eventObj) {
	if (opt_eventObj && eventName === 'click' && opt_eventObj.button === 2) {
		// Firefox triggers "click" events on the document for right clicks. This
		// causes our delegate logic to trigger it for regular elements too, which
		// shouldn't happen. Ignoring them here.
		return false;
	}

	var matchesSelector = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'FIELDSET'];
	if (eventName === 'click' && matchesSelector.indexOf(node.tagName) > -1) {
		return !(node.disabled || parent(node, 'fieldset[disabled]'));
	}
	return true;
}

/**
 * Inserts node in document as last element.
 * @param {Element} node Element to remove children from.
 */
function enterDocument(node) {
	node && append(document.body, node);
}

/**
 * Removes node from document.
 * @param {Element} node Element to remove children from.
 */
function exitDocument(node) {
	if (node && node.parentNode) {
		node.parentNode.removeChild(node);
	}
}

/**
 * This is called when an event is triggered by a delegate listener. All
 * matching listeners of this event type from `target` to `currentTarget` will
 * be triggered.
 * @param {!Event} event The event payload.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function handleDelegateEvent_(event) {
	normalizeDelegateEvent_(event);
	var ret = true;
	var container = event.currentTarget;
	var defFns = [];

	ret &= triggerDelegatedListeners_(container, event, defFns);
	ret &= triggerDefaultDelegatedListeners_(defFns, event);

	event.delegateTarget = null;
	event[LAST_CONTAINER] = container;
	return ret;
}

/**
 * Checks if the given element has the requested css class.
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 */
function hasClass(element, className) {
	if ('classList' in element) {
		return hasClassWithNative_(element, className);
	} else {
		return hasClassWithoutNative_(element, className);
	}
}

/**
 * Checks if the given element has the requested css class using classList.
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 * @private
 */
function hasClassWithNative_(element, className) {
	return element.classList.contains(className);
}

/**
 * Checks if the given element has the requested css class without using classList.
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 * @private
 */
function hasClassWithoutNative_(element, className) {
	return (' ' + element.className + ' ').indexOf(' ' + className + ' ') >= 0;
}

/**
 * Checks if the given element is empty or not.
 * @param {!Element} element
 * @return {boolean}
 */
function isEmpty(element) {
	return element.childNodes.length === 0;
}

/**
 * Check if an element matches a given selector.
 * @param {Element} element
 * @param {string} selector
 * @return {boolean}
 */
function match(element, selector) {
	if (!element || element.nodeType !== 1) {
		return false;
	}

	var p = Element.prototype;
	var m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;
	if (m) {
		return m.call(element, selector);
	}

	return matchFallback_(element, selector);
}

/**
 * Check if an element matches a given selector, using an internal implementation
 * instead of calling existing javascript functions.
 * @param {Element} element
 * @param {string} selector
 * @return {boolean}
 * @private
 */
function matchFallback_(element, selector) {
	var nodes = document.querySelectorAll(selector, element.parentNode);
	for (var i = 0; i < nodes.length; ++i) {
		if (nodes[i] === element) {
			return true;
		}
	}
	return false;
}

/**
 * Returns the next sibling of the given element that matches the specified
 * selector, or null if there is none.
 * @param {!Element} element
 * @param {?string} selector
 */
function next(element, selector) {
	do {
		element = element.nextSibling;
		if (element && match(element, selector)) {
			return element;
		}
	} while (element);
	return null;
}

/**
 * Normalizes the event payload for delegate listeners.
 * @param {!Event} event
 * @private
 */
function normalizeDelegateEvent_(event) {
	event.stopPropagation = stopPropagation_;
	event.stopImmediatePropagation = stopImmediatePropagation_;
}

/**
 * Listens to the specified event on the given DOM element. This function normalizes
 * DOM event payloads and functions so they'll work the same way on all supported
 * browsers.
 * @param {!Element|string} element The DOM element to listen to the event on, or
 *   a selector that should be delegated on the entire document.
 * @param {string} eventName The name of the event to listen to.
 * @param {!function(!Object)} callback Function to be called when the event is
 *   triggered. It will receive the normalized event object.
 * @param {boolean} opt_capture Flag indicating if listener should be triggered
 *   during capture phase, instead of during the bubbling phase. Defaults to false.
 * @return {!DomEventHandle} Can be used to remove the listener.
 */
function on(element, eventName, callback, opt_capture) {
	if ((0, _metal.isString)(element)) {
		return delegate(document, eventName, element, callback);
	}
	var customConfig = customEvents[eventName];
	if (customConfig && customConfig.event) {
		eventName = customConfig.originalEvent;
		callback = customConfig.handler.bind(customConfig, callback);
	}
	element.addEventListener(eventName, callback, opt_capture);
	return new _DomEventHandle2.default(element, eventName, callback, opt_capture);
}

/**
 * Listens to the specified event on the given DOM element once. This
 * function normalizes DOM event payloads and functions so they'll work the
 * same way on all supported browsers.
 * @param {!Element} element The DOM element to listen to the event on.
 * @param {string} eventName The name of the event to listen to.
 * @param {!function(!Object)} callback Function to be called when the event
 *   is triggered. It will receive the normalized event object.
 * @return {!DomEventHandle} Can be used to remove the listener.
 */
function once(element, eventName, callback) {
	var domEventHandle = on(element, eventName, function () {
		domEventHandle.removeListener();
		return callback.apply(this, arguments);
	});
	return domEventHandle;
}

/**
 * Gets the first parent from the given element that matches the specified
 * selector, or null if none match.
 * @param {!Element} element
 * @param {string} selector
 * @return {Element}
 */
function parent(element, selector) {
	return closest(element.parentNode, selector);
}

/**
 * Registers a custom event.
 * @param {string} eventName The name of the custom event.
 * @param {!Object} customConfig An object with information about how the event
 *   should be handled.
 */
function registerCustomEvent(eventName, customConfig) {
	customEvents[eventName] = customConfig;
}

/**
 * Removes all the child nodes on a DOM node.
 * @param {Element} node Element to remove children from.
 */
function removeChildren(node) {
	var child = void 0;
	while (child = node.firstChild) {
		node.removeChild(child);
	}
}

/**
 * Removes the requested CSS classes from an element.
 * @param {!Element|!NodeList} elements The element or elements to remove CSS classes from.
 * @param {string} classes CSS classes to remove.
 */
function removeClasses(elements, classes) {
	if (!(0, _metal.isObject)(elements) || !(0, _metal.isString)(classes)) {
		return;
	}

	if (!elements.length) {
		elements = [elements];
	}

	for (var i = 0; i < elements.length; i++) {
		if ('classList' in elements[i]) {
			removeClassesWithNative_(elements[i], classes);
		} else {
			removeClassesWithoutNative_(elements[i], classes);
		}
	}
}

/**
 * Removes the requested CSS classes from an element using classList.
 * @param {!Element} element The element to remove CSS classes from.
 * @param {string} classes CSS classes to remove.
 * @private
 */
function removeClassesWithNative_(element, classes) {
	classes.split(' ').forEach(function (className) {
		if (className) {
			element.classList.remove(className);
		}
	});
}

/**
 * Removes the requested CSS classes from an element without using classList.
 * @param {!Element} element The element to remove CSS classes from.
 * @param {string} classes CSS classes to remove.
 * @private
 */
function removeClassesWithoutNative_(element, classes) {
	var elementClassName = ' ' + element.className + ' ';

	classes = classes.split(' ');

	for (var i = 0; i < classes.length; i++) {
		elementClassName = elementClassName.replace(' ' + classes[i] + ' ', ' ');
	}

	element.className = elementClassName.trim();
}

/**
 * Replaces the first element with the second.
 * @param {Element} element1
 * @param {Element} element2
 */
function replace(element1, element2) {
	if (element1 && element2 && element1 !== element2 && element1.parentNode) {
		element1.parentNode.insertBefore(element2, element1);
		element1.parentNode.removeChild(element1);
	}
}

/**
 * The function that replaces `stopImmediatePropagation_` for events.
 * @private
 */
function stopImmediatePropagation_() {
	var event = this; // eslint-disable-line
	event.stopped = true;
	event.stoppedImmediate = true;
	Event.prototype.stopImmediatePropagation.call(event);
}

/**
 * The function that replaces `stopPropagation` for events.
 * @private
 */
function stopPropagation_() {
	var event = this; // eslint-disable-line
	event.stopped = true;
	Event.prototype.stopPropagation.call(event);
}

/**
 * Checks if the given element supports the given event type.
 * @param {!Element|string} element The DOM element or element tag name to check.
 * @param {string} eventName The name of the event to check.
 * @return {boolean}
 */
function supportsEvent(element, eventName) {
	if (customEvents[eventName]) {
		return true;
	}

	if ((0, _metal.isString)(element)) {
		if (!elementsByTag_[element]) {
			elementsByTag_[element] = document.createElement(element);
		}
		element = elementsByTag_[element];
	}

	var tag = element.tagName;
	if (!supportCache_[tag] || !supportCache_[tag].hasOwnProperty(eventName)) {
		supportCache_[tag] = supportCache_[tag] || {};
		supportCache_[tag][eventName] = 'on' + eventName in element;
	}
	return supportCache_[tag][eventName];
}

/**
 * This triggers all default matched delegated listeners of a given event type.
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 * @param {!Event} event
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerDefaultDelegatedListeners_(defFns, event) {
	var ret = true;

	for (var i = 0; i < defFns.length && !event.defaultPrevented; i++) {
		event.delegateTarget = defFns[i].element;
		ret &= defFns[i].fn(event);
	}

	return ret;
}

/**
 * This triggers all matched delegated listeners of a given event type when its
 * delegated target is able to interact.
 * @param {!Element} container
 * @param {!Event} event
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerDelegatedListeners_(container, event, defaultFns) {
	var ret = true;
	var currElement = event.target;
	var limit = container.parentNode;

	while (currElement && currElement !== limit && !event.stopped) {
		if (isAbleToInteractWith_(currElement, event.type, event)) {
			event.delegateTarget = currElement;
			ret &= triggerElementListeners_(currElement, event, defaultFns);
			ret &= triggerSelectorListeners_(container, currElement, event, defaultFns);
		}
		currElement = currElement.parentNode;
	}

	return ret;
}

/**
 * Converts the given argument to a DOM element. Strings are assumed to
 * be selectors, and so a matched element will be returned. If the arg
 * is already a DOM element it will be the return value.
 * @param {string|Element|Document} selectorOrElement
 * @return {Element} The converted element, or null if none was found.
 */
function toElement(selectorOrElement) {
	if ((0, _metal.isElement)(selectorOrElement) || (0, _metal.isDocument)(selectorOrElement) || (0, _metal.isDocumentFragment)(selectorOrElement)) {
		return selectorOrElement;
	} else if ((0, _metal.isString)(selectorOrElement)) {
		if (selectorOrElement[0] === '#' && selectorOrElement.indexOf(' ') === -1) {
			return document.getElementById(selectorOrElement.substr(1));
		} else {
			return document.querySelector(selectorOrElement);
		}
	} else {
		return null;
	}
}

/**
 * Adds or removes one or more classes from an element. If any of the classes
 * is present, it will be removed from the element, or added otherwise.
 * @param {!Element} element The element which classes will be toggled.
 * @param {string} classes The classes which have to added or removed from the element.
 */
function toggleClasses(element, classes) {
	if (!(0, _metal.isObject)(element) || !(0, _metal.isString)(classes)) {
		return;
	}

	if ('classList' in element) {
		toggleClassesWithNative_(element, classes);
	} else {
		toggleClassesWithoutNative_(element, classes);
	}
}

/**
 * Adds or removes one or more classes from an element using classList.
 * If any of the classes is present, it will be removed from the element,
 * or added otherwise.
 * @param {!Element} element The element which classes will be toggled.
 * @param {string} classes The classes which have to added or removed from the element.
 * @private
 */
function toggleClassesWithNative_(element, classes) {
	classes.split(' ').forEach(function (className) {
		element.classList.toggle(className);
	});
}

/**
 * Adds or removes one or more classes from an element without using classList.
 * If any of the classes is present, it will be removed from the element,
 * or added otherwise.
 * @param {!Element} element The element which classes will be toggled.
 * @param {string} classes The classes which have to added or removed from the element.
 * @private
 */
function toggleClassesWithoutNative_(element, classes) {
	var elementClassName = ' ' + element.className + ' ';

	classes = classes.split(' ');

	for (var i = 0; i < classes.length; i++) {
		var className = ' ' + classes[i] + ' ';
		var classIndex = elementClassName.indexOf(className);

		if (classIndex === -1) {
			elementClassName = '' + elementClassName + classes[i] + ' ';
		} else {
			var before = elementClassName.substring(0, classIndex);
			var after = elementClassName.substring(classIndex + className.length);
			elementClassName = before + ' ' + after;
		}
	}

	element.className = elementClassName.trim();
}

/**
 * Triggers all listeners for the given event type that are stored in the
 * specified element.
 * @param {!Element} element
 * @param {!Event} event
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerElementListeners_(element, event, defaultFns) {
	var lastContainer = event[LAST_CONTAINER];
	if (!(0, _metal.isDef)(lastContainer) || !contains(lastContainer, element)) {
		var listeners = _domData2.default.get(element, 'listeners', {})[event.type];
		return triggerListeners_(listeners, event, element, defaultFns);
	}
	return true;
}

/**
 * Triggers the specified event on the given element.
 * NOTE: This should mostly be used for testing, not on real code.
 * @param {!Element} element The node that should trigger the event.
 * @param {string} eventName The name of the event to be triggred.
 * @param {Object=} opt_eventObj An object with data that should be on the
 *   triggered event's payload.
 */
function triggerEvent(element, eventName, opt_eventObj) {
	if (isAbleToInteractWith_(element, eventName, opt_eventObj)) {
		var eventObj = document.createEvent('HTMLEvents');
		eventObj.initEvent(eventName, true, true);
		_metal.object.mixin(eventObj, opt_eventObj);
		element.dispatchEvent(eventObj);
	}
}

/**
 * Triggers the given listeners array.
 * @param {Array<!function()>} listeners
 * @param {!Event} event
 * @param {!Element} element
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerListeners_(listeners, event, element, defaultFns) {
	var ret = true;
	listeners = listeners || [];
	for (var i = 0; i < listeners.length && !event.stoppedImmediate; i++) {
		if (listeners[i].defaultListener_) {
			defaultFns.push({
				element: element,
				fn: listeners[i]
			});
		} else {
			ret &= listeners[i](event);
		}
	}
	return ret;
}

/**
 * Triggers all selector listeners for the given event.
 * @param {!Element} container
 * @param {!Element} element
 * @param {!Event} event
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerSelectorListeners_(container, element, event, defaultFns) {
	var ret = true;
	var data = _domData2.default.get(container, 'delegating', {});
	var map = data[event.type].selectors;
	var selectors = Object.keys(map);
	for (var i = 0; i < selectors.length && !event.stoppedImmediate; i++) {
		if (match(element, selectors[i])) {
			var listeners = map[selectors[i]];
			ret &= triggerListeners_(listeners, event, element, defaultFns);
		}
	}
	return ret;
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dom = __webpack_require__(77);

var _features = __webpack_require__(85);

var _features2 = _interopRequireDefault(_features);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mouseEventMap = {
	mouseenter: 'mouseover',
	mouseleave: 'mouseout',
	pointerenter: 'pointerover',
	pointerleave: 'pointerout'
};
Object.keys(mouseEventMap).forEach(function (eventName) {
	(0, _dom.registerCustomEvent)(eventName, {
		delegate: true,
		handler: function handler(callback, event) {
			var related = event.relatedTarget;
			var target = event.delegateTarget;
			if (!related || related !== target && !(0, _dom.contains)(target, related)) {
				event.customType = eventName;
				return callback(event);
			}
		},
		originalEvent: mouseEventMap[eventName]
	});
});

var animationEventMap = {
	animation: 'animationend',
	transition: 'transitionend'
};
Object.keys(animationEventMap).forEach(function (eventType) {
	var eventName = animationEventMap[eventType];
	(0, _dom.registerCustomEvent)(eventName, {
		event: true,
		delegate: true,
		handler: function handler(callback, event) {
			event.customType = eventName;
			return callback(event);
		},
		originalEvent: _features2.default.checkAnimationEventName()[eventType]
	});
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _dom = __webpack_require__(77);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Utility functions for running javascript code in the global scope.
 */
var globalEval = function () {
	function globalEval() {
		_classCallCheck(this, globalEval);
	}

	_createClass(globalEval, null, [{
		key: 'run',

		/**
   * Evaluates the given string in the global scope.
   * @param {string} text
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} script
   */
		value: function run(text, opt_appendFn) {
			var script = document.createElement('script');
			script.text = text;
			if (opt_appendFn) {
				opt_appendFn(script);
			} else {
				document.head.appendChild(script);
			}
			(0, _dom.exitDocument)(script);
			return script;
		}

		/**
   * Evaluates the given javascript file in the global scope.
   * @param {string} src The file's path.
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} script
   */

	}, {
		key: 'runFile',
		value: function runFile(src, opt_callback, opt_appendFn) {
			var script = document.createElement('script');
			script.src = src;

			var callback = function callback() {
				(0, _dom.exitDocument)(script);
				opt_callback && opt_callback();
			};
			(0, _dom.once)(script, 'load', callback);
			(0, _dom.once)(script, 'error', callback);

			if (opt_appendFn) {
				opt_appendFn(script);
			} else {
				document.head.appendChild(script);
			}

			return script;
		}

		/**
   * Evaluates the code referenced by the given script element.
   * @param {!Element} script
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} script
   */

	}, {
		key: 'runScript',
		value: function runScript(script, opt_callback, opt_appendFn) {
			var callback = function callback() {
				opt_callback && opt_callback();
			};
			if (script.type && script.type !== 'text/javascript') {
				_metal.async.nextTick(callback);
				return;
			}
			(0, _dom.exitDocument)(script);
			if (script.src) {
				return globalEval.runFile(script.src, opt_callback, opt_appendFn);
			} else {
				_metal.async.nextTick(callback);
				return globalEval.run(script.text, opt_appendFn);
			}
		}

		/**
   * Evaluates any script tags present in the given element.
   * @param {!Element} element
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   */

	}, {
		key: 'runScriptsInElement',
		value: function runScriptsInElement(element, opt_callback, opt_appendFn) {
			var scripts = element.querySelectorAll('script');
			if (scripts.length) {
				globalEval.runScriptsInOrder(scripts, 0, opt_callback, opt_appendFn);
			} else if (opt_callback) {
				_metal.async.nextTick(opt_callback);
			}
		}

		/**
   * Runs the given scripts elements in the order that they appear.
   * @param {!NodeList} scripts
   * @param {number} index
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   */

	}, {
		key: 'runScriptsInOrder',
		value: function runScriptsInOrder(scripts, index, opt_callback, opt_appendFn) {
			globalEval.runScript(scripts.item(index), function () {
				if (index < scripts.length - 1) {
					globalEval.runScriptsInOrder(scripts, index + 1, opt_callback, opt_appendFn);
				} else if (opt_callback) {
					_metal.async.nextTick(opt_callback);
				}
			}, opt_appendFn);
		}
	}]);

	return globalEval;
}();

exports.default = globalEval;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _dom = __webpack_require__(77);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Utility functions for running styles.
 */
var globalEvalStyles = function () {
	function globalEvalStyles() {
		_classCallCheck(this, globalEvalStyles);
	}

	_createClass(globalEvalStyles, null, [{
		key: 'run',

		/**
   * Evaluates the given style.
   * @param {string} text
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} style
   */
		value: function run(text, opt_appendFn) {
			var style = document.createElement('style');
			style.innerHTML = text;
			if (opt_appendFn) {
				opt_appendFn(style);
			} else {
				document.head.appendChild(style);
			}
			return style;
		}

		/**
   * Evaluates the given style file.
   * @param {string} href The file's path.
   * @param {function()=} opt_callback Optional function to be called
   *   when the styles has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} style
   */

	}, {
		key: 'runFile',
		value: function runFile(href, opt_callback, opt_appendFn) {
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = href;
			globalEvalStyles.runStyle(link, opt_callback, opt_appendFn);
			return link;
		}

		/**
   * Evaluates the code referenced by the given style/link element.
   * @param {!Element} style
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   *  @return {Element} style
   */

	}, {
		key: 'runStyle',
		value: function runStyle(style, opt_callback, opt_appendFn) {
			var callback = function callback() {
				opt_callback && opt_callback();
			};
			if (style.rel && style.rel !== 'stylesheet') {
				_metal.async.nextTick(callback);
				return;
			}

			if (style.tagName === 'STYLE') {
				_metal.async.nextTick(callback);
			} else {
				(0, _dom.once)(style, 'load', callback);
				(0, _dom.once)(style, 'error', callback);
			}

			if (opt_appendFn) {
				opt_appendFn(style);
			} else {
				document.head.appendChild(style);
			}

			return style;
		}

		/**
   * Evaluates any style present in the given element.
   * @param {!Element} element
   * @param {function()=} opt_callback Optional function to be called when the
   *   style has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   */

	}, {
		key: 'runStylesInElement',
		value: function runStylesInElement(element, opt_callback, opt_appendFn) {
			var styles = element.querySelectorAll('style,link');
			if (styles.length === 0 && opt_callback) {
				_metal.async.nextTick(opt_callback);
				return;
			}

			var loadCount = 0;
			var callback = function callback() {
				if (opt_callback && ++loadCount === styles.length) {
					_metal.async.nextTick(opt_callback);
				}
			};
			for (var i = 0; i < styles.length; i++) {
				globalEvalStyles.runStyle(styles[i], callback, opt_appendFn);
			}
		}
	}]);

	return globalEvalStyles;
}();

exports.default = globalEvalStyles;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _EventHandle = __webpack_require__(86);

var _EventHandle2 = _interopRequireDefault(_EventHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var singleArray_ = [0];

/**
 * EventEmitter utility.
 * @constructor
 * @extends {Disposable}
 */

var EventEmitter = function (_Disposable) {
	_inherits(EventEmitter, _Disposable);

	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		/**
   * Holds event listeners scoped by event type.
   * @type {Object<string, !Array<!function()>>}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventEmitter.__proto__ || Object.getPrototypeOf(EventEmitter)).call(this));

		_this.events_ = null;

		/**
   * Handlers that are triggered when an event is listened to.
   * @type {Array}
   */
		_this.listenerHandlers_ = null;

		/**
   * Configuration option which determines if an event facade should be sent
   * as a param of listeners when emitting events. If set to true, the facade
   * will be passed as the first argument of the listener.
   * @type {boolean}
   * @protected
   */
		_this.shouldUseFacade_ = false;
		return _this;
	}

	/**
  * Adds a handler to given holder variable. If the holder doesn't have a
  * value yet, it will receive the handler directly. If the holder is an array,
  * the value will just be added to it. Otherwise, the holder will be set to a
  * new array containing its previous value plus the new handler.
  * @param {*} holder
  * @param {!function()|Object} handler
  * @return {*} The holder's new value.
  * @protected
  */


	_createClass(EventEmitter, [{
		key: 'addHandler_',
		value: function addHandler_(holder, handler) {
			if (!holder) {
				holder = handler;
			} else {
				if (!Array.isArray(holder)) {
					holder = [holder];
				}
				holder.push(handler);
			}
			return holder;
		}

		/**
   * Adds a listener to the end of the listeners array for the specified events.
   * @param {!(Array|string)} event
   * @param {!Function} listener
   * @param {boolean} opt_default Flag indicating if this listener is a default
   *   action for this event. Default actions are run last, and only if no previous
   *   listener call `preventDefault()` on the received event facade.
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'addListener',
		value: function addListener(event, listener, opt_default) {
			this.validateListener_(listener);

			var events = this.toEventsArray_(event);
			for (var i = 0; i < events.length; i++) {
				this.addSingleListener_(events[i], listener, opt_default);
			}

			return new _EventHandle2.default(this, event, listener);
		}

		/**
   * Adds a listener to the end of the listeners array for a single event.
   * @param {string} event
   * @param {!Function} listener
   * @param {boolean} opt_default Flag indicating if this listener is a default
   *   action for this event. Default actions are run last, and only if no previous
   *   listener call `preventDefault()` on the received event facade.
   * @return {!EventHandle} Can be used to remove the listener.
   * @param {Function=} opt_origin The original function that was added as a
   *   listener, if there is any.
   * @protected
   */

	}, {
		key: 'addSingleListener_',
		value: function addSingleListener_(event, listener, opt_default, opt_origin) {
			this.runListenerHandlers_(event);
			if (opt_default || opt_origin) {
				listener = {
					default: opt_default,
					fn: listener,
					origin: opt_origin
				};
			}
			this.events_ = this.events_ || {};
			this.events_[event] = this.addHandler_(this.events_[event], listener);
		}

		/**
   * Builds facade for the given event.
   * @param {string} event
   * @return {Object}
   * @protected
   */

	}, {
		key: 'buildFacade_',
		value: function buildFacade_(event) {
			if (this.getShouldUseFacade()) {
				var facade = {
					preventDefault: function preventDefault() {
						facade.preventedDefault = true;
					},
					target: this,
					type: event
				};
				return facade;
			}
		}

		/**
   * Disposes of this instance's object references.
   * @override
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.events_ = null;
		}

		/**
   * Execute each of the listeners in order with the supplied arguments.
   * @param {string} event
   * @param {*} opt_args [arg1], [arg2], [...]
   * @return {boolean} Returns true if event had listeners, false otherwise.
   */

	}, {
		key: 'emit',
		value: function emit(event) {
			var listeners = this.getRawListeners_(event);
			if (listeners.length === 0) {
				return false;
			}

			var args = _metal.array.slice(arguments, 1);
			this.runListeners_(listeners, args, this.buildFacade_(event));
			return true;
		}

		/**
   * Gets the listener objects for the given event, if there are any.
   * @param {string} event
   * @return {!Array}
   * @protected
   */

	}, {
		key: 'getRawListeners_',
		value: function getRawListeners_(event) {
			var directListeners = toArray(this.events_ && this.events_[event]);
			return directListeners.concat(toArray(this.events_ && this.events_['*']));
		}

		/**
   * Gets the configuration option which determines if an event facade should
   * be sent as a param of listeners when emitting events. If set to true, the
   * facade will be passed as the first argument of the listener.
   * @return {boolean}
   */

	}, {
		key: 'getShouldUseFacade',
		value: function getShouldUseFacade() {
			return this.shouldUseFacade_;
		}

		/**
   * Returns an array of listeners for the specified event.
   * @param {string} event
   * @return {Array} Array of listeners.
   */

	}, {
		key: 'listeners',
		value: function listeners(event) {
			return this.getRawListeners_(event).map(function (listener) {
				return listener.fn ? listener.fn : listener;
			});
		}

		/**
   * Adds a listener that will be invoked a fixed number of times for the
   * events. After each event is triggered the specified amount of times, the
   * listener is removed for it.
   * @param {!(Array|string)} event
   * @param {number} amount The amount of times this event should be listened
   * to.
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'many',
		value: function many(event, amount, listener) {
			var events = this.toEventsArray_(event);
			for (var i = 0; i < events.length; i++) {
				this.many_(events[i], amount, listener);
			}

			return new _EventHandle2.default(this, event, listener);
		}

		/**
   * Adds a listener that will be invoked a fixed number of times for a single
   * event. After the event is triggered the specified amount of times, the
   * listener is removed.
   * @param {string} event
   * @param {number} amount The amount of times this event should be listened
   * to.
   * @param {!Function} listener
   * @protected
   */

	}, {
		key: 'many_',
		value: function many_(event, amount, listener) {
			var self = this;

			if (amount <= 0) {
				return;
			}

			function handlerInternal() {
				if (--amount === 0) {
					self.removeListener(event, handlerInternal);
				}
				listener.apply(self, arguments);
			}

			self.addSingleListener_(event, handlerInternal, false, listener);
		}

		/**
   * Checks if a listener object matches the given listener function. To match,
   * it needs to either point to that listener or have it as its origin.
   * @param {!Object} listenerObj
   * @param {!Function} listener
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'matchesListener_',
		value: function matchesListener_(listenerObj, listener) {
			var fn = listenerObj.fn || listenerObj;
			return fn === listener || listenerObj.origin && listenerObj.origin === listener;
		}

		/**
   * Removes a listener for the specified events.
   * Caution: changes array indices in the listener array behind the listener.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'off',
		value: function off(event, listener) {
			this.validateListener_(listener);
			if (!this.events_) {
				return this;
			}

			var events = this.toEventsArray_(event);
			for (var i = 0; i < events.length; i++) {
				this.events_[events[i]] = this.removeMatchingListenerObjs_(toArray(this.events_[events[i]]), listener);
			}

			return this;
		}

		/**
   * Adds a listener to the end of the listeners array for the specified events.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'on',
		value: function on() {
			return this.addListener.apply(this, arguments);
		}

		/**
   * Adds handler that gets triggered when an event is listened to on this
   * instance.
   * @param {!function()}
   */

	}, {
		key: 'onListener',
		value: function onListener(handler) {
			this.listenerHandlers_ = this.addHandler_(this.listenerHandlers_, handler);
		}

		/**
   * Adds a one time listener for the events. This listener is invoked only the
   * next time each event is fired, after which it is removed.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'once',
		value: function once(events, listener) {
			return this.many(events, 1, listener);
		}

		/**
   * Removes all listeners, or those of the specified events. It's not a good
   * idea to remove listeners that were added elsewhere in the code,
   * especially when it's on an emitter that you didn't create.
   * @param {(Array|string)=} opt_events
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'removeAllListeners',
		value: function removeAllListeners(opt_events) {
			if (this.events_) {
				if (opt_events) {
					var events = this.toEventsArray_(opt_events);
					for (var i = 0; i < events.length; i++) {
						this.events_[events[i]] = null;
					}
				} else {
					this.events_ = null;
				}
			}
			return this;
		}

		/**
   * Removes all listener objects from the given array that match the given
   * listener function.
   * @param {Array.<Object>} listenerObjs
   * @param {!Function} listener
   * @return {Array.<Object>|Object} The new listeners array for this event.
   * @protected
   */

	}, {
		key: 'removeMatchingListenerObjs_',
		value: function removeMatchingListenerObjs_(listenerObjs, listener) {
			var finalListeners = [];
			for (var i = 0; i < listenerObjs.length; i++) {
				if (!this.matchesListener_(listenerObjs[i], listener)) {
					finalListeners.push(listenerObjs[i]);
				}
			}
			return finalListeners.length > 0 ? finalListeners : null;
		}

		/**
   * Removes a listener for the specified events.
   * Caution: changes array indices in the listener array behind the listener.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'removeListener',
		value: function removeListener() {
			return this.off.apply(this, arguments);
		}

		/**
   * Runs the handlers when an event is listened to.
   * @param {string} event
   * @protected
   */

	}, {
		key: 'runListenerHandlers_',
		value: function runListenerHandlers_(event) {
			var handlers = this.listenerHandlers_;
			if (handlers) {
				handlers = toArray(handlers);
				for (var i = 0; i < handlers.length; i++) {
					handlers[i](event);
				}
			}
		}

		/**
   * Runs the given listeners.
   * @param {!Array} listeners
   * @param {!Array} args
   * @param (Object) facade
   * @protected
   */

	}, {
		key: 'runListeners_',
		value: function runListeners_(listeners, args, facade) {
			if (facade) {
				args.push(facade);
			}

			var defaultListeners = [];
			for (var i = 0; i < listeners.length; i++) {
				var listener = listeners[i].fn || listeners[i];
				if (listeners[i].default) {
					defaultListeners.push(listener);
				} else {
					listener.apply(this, args);
				}
			}
			if (!facade || !facade.preventedDefault) {
				for (var j = 0; j < defaultListeners.length; j++) {
					defaultListeners[j].apply(this, args);
				}
			}
		}

		/**
   * Sets the configuration option which determines if an event facade should
   * be sent as a param of listeners when emitting events. If set to true, the
   * facade will be passed as the first argument of the listener.
   * @param {boolean} shouldUseFacade
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'setShouldUseFacade',
		value: function setShouldUseFacade(shouldUseFacade) {
			this.shouldUseFacade_ = shouldUseFacade;
			return this;
		}

		/**
   * Converts the parameter to an array if only one event is given. Reuses the
   * same array each time this conversion is done, to avoid using more memory
   * than necessary.
   * @param  {!(Array|string)} events
   * @return {!Array}
   * @protected
   */

	}, {
		key: 'toEventsArray_',
		value: function toEventsArray_(events) {
			if ((0, _metal.isString)(events)) {
				singleArray_[0] = events;
				events = singleArray_;
			}
			return events;
		}

		/**
   * Checks if the given listener is valid, throwing an exception when it's not.
   * @param  {*} listener
   * @protected
   */

	}, {
		key: 'validateListener_',
		value: function validateListener_(listener) {
			if (!(0, _metal.isFunction)(listener)) {
				throw new TypeError('Listener must be a function');
			}
		}
	}]);

	return EventEmitter;
}(_metal.Disposable);

function toArray(val) {
	val = val || [];
	return Array.isArray(val) ? val : [val];
}

exports.default = EventEmitter;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * EventEmitterProxy utility. It's responsible for linking two EventEmitter
 * instances together, emitting events from the first emitter through the
 * second one. That means that listening to a supported event on the target
 * emitter will mean listening to it on the origin emitter as well.
 * @param {EventEmitter} originEmitter Events originated on this emitter
 *   will be fired for the target emitter's listeners as well.
 * @param {EventEmitter} targetEmitter Event listeners attached to this emitter
 *   will also be triggered when the event is fired by the origin emitter.
 * @param {Object} opt_blacklist Optional blacklist of events that should not be
 *   proxied.
 * @constructor
 * @extends {Disposable}
 */
var EventEmitterProxy = function (_Disposable) {
	_inherits(EventEmitterProxy, _Disposable);

	function EventEmitterProxy(originEmitter, targetEmitter, opt_blacklist, opt_whitelist) {
		_classCallCheck(this, EventEmitterProxy);

		/**
   * Map of events that should not be proxied.
   * @type {Object}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventEmitterProxy.__proto__ || Object.getPrototypeOf(EventEmitterProxy)).call(this));

		_this.blacklist_ = opt_blacklist;

		/**
   * The origin emitter. This emitter's events will be proxied through the
   * target emitter.
   * @type {EventEmitter}
   * @protected
   */
		_this.originEmitter_ = originEmitter;

		/**
   * A list of events that are pending to be listened by an actual origin
   * emitter. Events are stored here when the origin doesn't exist, so they
   * can be set on a new origin when one is set.
   * @type {Array}
   * @protected
   */
		_this.pendingEvents_ = null;

		/**
   * Holds a map of events from the origin emitter that are already being proxied.
   * @type {Object<string, !EventHandle>}
   * @protected
   */
		_this.proxiedEvents_ = null;

		/**
   * The target emitter. This emitter will emit all events that come from
   * the origin emitter.
   * @type {EventEmitter}
   * @protected
   */
		_this.targetEmitter_ = targetEmitter;

		/**
   * Map of events that should be proxied. If whitelist is set blacklist is ignored.
   * @type {Object}
   * @protected
   */
		_this.whitelist_ = opt_whitelist;

		_this.startProxy_();
		return _this;
	}

	/**
  * Adds the given listener for the given event.
  * @param {string} event
  * @param {!function()} listener
  * @return {!EventHandle} The listened event's handle.
  * @protected
  */


	_createClass(EventEmitterProxy, [{
		key: 'addListener_',
		value: function addListener_(event, listener) {
			return this.originEmitter_.on(event, listener);
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.removeListeners_();
			this.proxiedEvents_ = null;
			this.originEmitter_ = null;
			this.targetEmitter_ = null;
		}

		/**
   * Emits the specified event type on the target emitter.
   * @protected
   */

	}, {
		key: 'emitOnTarget_',
		value: function emitOnTarget_() {
			this.targetEmitter_.emit.apply(this.targetEmitter_, arguments);
		}

		/**
   * Proxies the given event from the origin to the target emitter.
   * @param {string} event
   */

	}, {
		key: 'proxyEvent',
		value: function proxyEvent(event) {
			if (this.shouldProxyEvent_(event)) {
				this.tryToAddListener_(event);
			}
		}

		/**
   * Removes the proxy listener for all events.
   * @protected
   */

	}, {
		key: 'removeListeners_',
		value: function removeListeners_() {
			if (this.proxiedEvents_) {
				var events = Object.keys(this.proxiedEvents_);
				for (var i = 0; i < events.length; i++) {
					this.proxiedEvents_[events[i]].removeListener();
				}
				this.proxiedEvents_ = null;
			}
			this.pendingEvents_ = null;
		}

		/**
   * Changes the origin emitter. This automatically detaches any events that
   * were already being proxied from the previous emitter, and starts proxying
   * them on the new emitter instead.
   * @param {!EventEmitter} originEmitter
   */

	}, {
		key: 'setOriginEmitter',
		value: function setOriginEmitter(originEmitter) {
			var _this2 = this;

			var events = this.originEmitter_ && this.proxiedEvents_ ? Object.keys(this.proxiedEvents_) : this.pendingEvents_;
			this.originEmitter_ = originEmitter;
			if (events) {
				this.removeListeners_();
				events.forEach(function (event) {
					return _this2.proxyEvent(event);
				});
			}
		}

		/**
   * Checks if the given event should be proxied.
   * @param {string} event
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'shouldProxyEvent_',
		value: function shouldProxyEvent_(event) {
			if (this.whitelist_ && !this.whitelist_[event]) {
				return false;
			}
			if (this.blacklist_ && this.blacklist_[event]) {
				return false;
			}
			return !this.proxiedEvents_ || !this.proxiedEvents_[event];
		}

		/**
   * Starts proxying all events from the origin to the target emitter.
   * @protected
   */

	}, {
		key: 'startProxy_',
		value: function startProxy_() {
			this.targetEmitter_.onListener(this.proxyEvent.bind(this));
		}

		/**
   * Adds a listener to the origin emitter, if it exists. Otherwise, stores
   * the pending listener so it can be used on a future origin emitter.
   * @param {string} event
   * @protected
   */

	}, {
		key: 'tryToAddListener_',
		value: function tryToAddListener_(event) {
			if (this.originEmitter_) {
				this.proxiedEvents_ = this.proxiedEvents_ || {};
				this.proxiedEvents_[event] = this.addListener_(event, this.emitOnTarget_.bind(this, event));
			} else {
				this.pendingEvents_ = this.pendingEvents_ || [];
				this.pendingEvents_.push(event);
			}
		}
	}]);

	return EventEmitterProxy;
}(_metal.Disposable);

exports.default = EventEmitterProxy;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * EventHandler utility. It's useful for easily removing a group of
 * listeners from different EventEmitter instances.
 * @constructor
 * @extends {Disposable}
 */
var EventHandler = function (_Disposable) {
	_inherits(EventHandler, _Disposable);

	function EventHandler() {
		_classCallCheck(this, EventHandler);

		/**
   * An array that holds the added event handles, so the listeners can be
   * removed later.
   * @type {Array.<EventHandle>}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventHandler.__proto__ || Object.getPrototypeOf(EventHandler)).call(this));

		_this.eventHandles_ = [];
		return _this;
	}

	/**
  * Adds event handles to be removed later through the `removeAllListeners`
  * method.
  * @param {...(!EventHandle)} var_args
  */


	_createClass(EventHandler, [{
		key: 'add',
		value: function add() {
			for (var i = 0; i < arguments.length; i++) {
				this.eventHandles_.push(arguments[i]);
			}
		}

		/**
   * Disposes of this instance's object references.
   * @override
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.eventHandles_ = null;
		}

		/**
   * Removes all listeners that have been added through the `add` method.
   */

	}, {
		key: 'removeAllListeners',
		value: function removeAllListeners() {
			for (var i = 0; i < this.eventHandles_.length; i++) {
				this.eventHandles_[i].removeListener();
			}

			this.eventHandles_ = [];
		}
	}]);

	return EventHandler;
}(_metal.Disposable);

exports.default = EventHandler;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.disposeUnused = disposeUnused;
exports.schedule = schedule;

var _data = __webpack_require__(78);

var comps_ = [];
var disposing_ = false;

/**
 * Disposes all sub components that were not rerendered since the last
 * time this function was scheduled.
 */
function disposeUnused() {
	if (disposing_) {
		return;
	}
	disposing_ = true;

	for (var i = 0; i < comps_.length; i++) {
		var comp = comps_[i];
		if (!comp.isDisposed() && !(0, _data.getData)(comp).parent) {
			// Don't let disposing cause the element to be removed, since it may
			// be currently being reused by another component.
			comp.element = null;
			comp.dispose();
		}
	}
	comps_ = [];
	disposing_ = false;
}

/**
 * Schedules the given components to be checked and disposed if not used
 * anymore when `disposeUnused` is called.
 * @param {!Array<!Component>} comps
 */
function schedule(comps) {
	for (var i = 0; i < comps.length; i++) {
		if (!comps[i].isDisposed()) {
			(0, _data.getData)(comps[i]).parent = null;
			comps_.push(comps[i]);
		}
	}
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyAttribute = applyAttribute;
exports.convertListenerNamesToFns = convertListenerNamesToFns;

var _metal = __webpack_require__(2);

var _metalDom = __webpack_require__(3);

var _metalComponent = __webpack_require__(0);

var _incrementalDomAop = __webpack_require__(80);

var HANDLE_SUFFIX = '__handle__';
var LISTENER_REGEX = /^(?:on([A-Z].+))|(?:data-on(.+))$/;

/**
 * Applies an attribute to a specified element owned by the given component.
 * @param {!Component} component
 * @param {!Element} element
 * @param {string} name
 * @param {*} value
 */
function applyAttribute(component, element, name, value) {
  var eventName = getEventFromListenerAttr_(name);
  if (eventName) {
    attachEvent_(component, element, name, eventName, value);
    return;
  }

  value = fixCheckedAttr_(name, value);
  setValueAttrAsProperty_(element, name, value);

  if ((0, _metal.isBoolean)(value)) {
    setBooleanAttr_(element, name, value);
  } else {
    (0, _incrementalDomAop.getOriginalFn)('attributes')(element, name, value);
  }
}

/**
 * Listens to the specified event, attached via incremental dom calls.
 * @param {!Component} component
 * @param {!Element} element
 * @param {string} attr
 * @param {string} eventName
 * @param {function()} fn
 * @private
 */
function attachEvent_(component, element, attr, eventName, fn) {
  if ((0, _metal.isServerSide)()) {
    return;
  }
  var handleKey = eventName + HANDLE_SUFFIX;
  if (element[handleKey]) {
    element[handleKey].removeListener();
    element[handleKey] = null;
  }
  if (fn) {
    element[attr] = fn;
    element[handleKey] = (0, _metalDom.delegate)(document, eventName, element, fn);
  }
}

/**
 * Converts all event listener attributes given as function names to actual
 * function references. It's important to do this before calling the real
 * incremental dom `elementOpen` function, otherwise if a component passes
 * the same function name that an element was already using for another
 * component, that event won't be reattached as incremental dom will think that
 * the value hasn't changed. Passing the function references as the value will
 * guarantee that different functions will cause events to be reattached,
 * regardless of their original names.
 * @param {!Component} component
 * @param {!Object} config
 */
function convertListenerNamesToFns(component, config) {
  var keys = Object.keys(config);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    config[key] = convertListenerNameToFn_(component, key, config[key]);
  }
}

/**
 * Converts the given attribute's value to a function reference, if it's
 * currently a listener name. It also register the listener name for
 * further usage.
 * @param {!Component} component
 * @param {string} name
 * @param {*} value
 * @return {*}
 * @private
 */
function convertListenerNameToFn_(component, name, value) {
  if ((0, _metal.isString)(value)) {
    var eventName = getEventFromListenerAttr_(name);
    if (eventName) {
      var fn = (0, _metalComponent.getComponentFn)(component, value);
      if (fn) {
        return fn;
      }
    }
  }
  return value;
}

/**
 * Changes the value of the `checked` attribute to be a boolean.
 * NOTE: This is a temporary fix to account for incremental dom setting
 * "checked" as an attribute only, which can cause bugs since that won't
 * necessarily check/uncheck the element it's set on. See
 * https://github.com/google/incremental-dom/issues/198 for more details.
 * @param {string} name
 * @param {*} value
 * @return {*}
 * @private
 */
function fixCheckedAttr_(name, value) {
  if (name === 'checked') {
    value = (0, _metal.isDefAndNotNull)(value) && value !== false;
  }
  return value;
}

/**
 * Returns the event name if the given attribute is a listener (matching the
 * `LISTENER_REGEX` regex), or null if it isn't.
 * @param {string} attr
 * @return {?string}
 * @private
 */
function getEventFromListenerAttr_(attr) {
  var matches = LISTENER_REGEX.exec(attr);
  var eventName = matches ? matches[1] ? matches[1] : matches[2] : null;
  return eventName ? eventName.toLowerCase() : null;
}

/**
 * Sets boolean attributes manually. This is done because incremental dom sets
 * boolean values as string data attributes by default, which is counter
 * intuitive. This changes the behavior to use the actual boolean value.
 * @param {!Element} element
 * @param {string} name
 * @param {*} value
 * @private
 */
function setBooleanAttr_(element, name, value) {
  if ((0, _metal.isServerSide)()) {
    return;
  }
  element[name] = value;
  if (value) {
    element.setAttribute(name, '');
  } else {
    element.removeAttribute(name);
  }
}

/**
 * Sets the value of the `value` attribute directly in the element.
 * NOTE: This is a temporary fix to account for incremental dom setting "value"
 * as an attribute only, which can cause bugs since that won't necessarily
 * update the input's content it's set on. See
 * https://github.com/google/incremental-dom/issues/239 for more details. We
 * only do this if the new value is different though, as otherwise the browser
 * will automatically move the typing cursor to the end of the field.
 * @param {!Element} element
 * @param {string} name
 * @param {*} value
 * @private
 */
function setValueAttrAsProperty_(element, name, value) {
  if ((0, _metal.isServerSide)()) {
    return;
  }
  if (name === 'value' && element.value !== value) {
    element[name] = value;
  }
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPatchingComponent = getPatchingComponent;
exports.patch = patch;

var _metalDom = __webpack_require__(3);

var _data = __webpack_require__(78);

var _render = __webpack_require__(92);

var patchingComponents_ = [];

/**
 * Guarantees that the component's element has a parent. That's necessary
 * when calling incremental dom's `patchOuter` for now, as otherwise it will
 * throw an error if the element needs to be replaced.
 * @return {Element} The parent, in case it was added.
 * @private
 */
function buildParentIfNecessary_(element) {
	if (!element || !element.parentNode) {
		var parent = document.createElement('div');
		if (element) {
			(0, _metalDom.append)(parent, element);
		}
		return parent;
	}
}

/**
 * Calls incremental dom's patch function.
 * @param {!Component} component The component to patch.
 * @param {!Element} element The element the component should be patched on.
 * @param {boolean=} opt_outer Flag indicating if `patchOuter` should be used
 *     instead of `patch`.
 * @private
 */
function callPatch_(component, element, opt_outer) {
	patchingComponents_.push(component);

	var data = (0, _data.getData)(component);
	if (!data.render) {
		// Store reference to avoid binds on every patch.
		data.render = _render.render.bind(null, component);
	}

	var patchFn = opt_outer ? IncrementalDOM.patchOuter : IncrementalDOM.patch;
	patchFn(element, data.render);

	patchingComponents_.pop();
}

/**
 * Gets the component that triggered the current patch operation.
 * @return {Component}
 */
function getPatchingComponent() {
	return patchingComponents_[patchingComponents_.length - 1];
}

/**
 * Patches the component with incremental dom function calls.
 * @param {!Component} component
 */
function patch(component) {
	if (!tryPatchEmptyWithParent_(component)) {
		if (!tryPatchWithNoParent_(component)) {
			var element = component.element;
			callPatch_(component, element, true);
		}
	}
}

/**
 * Checks if the component has no content but was rendered from another
 * component. If so, we'll need to patch this parent to make sure that any new
 * content will be added in the right position.
 * @param {!Component} component
 * @return {?boolean} True if the patch happened. Nothing otherwise.
 * @private
 */
function tryPatchEmptyWithParent_(component) {
	var data = (0, _data.getData)(component);
	if (!component.element && data.parent) {
		data.parent.getRenderer().patch(data.parent);
		return true;
	}
}

/**
 * Checks if the component's element exists and has a parent. If that's not the
 * case, a temporary parent will be created and passed to the `patch` function,
 * since incremental dom requires it. Once the patch is done the temporary
 * parent is removed and the component's content is reattached to the correct
 * final position.
 * @param {!Component} component
 * @return {?boolean} True if the patch happened. Nothing otherwise.
 * @private
 */
function tryPatchWithNoParent_(component) {
	var tempParent = buildParentIfNecessary_(component.element);
	if (tempParent) {
		callPatch_(component, tempParent);
		(0, _metalDom.exitDocument)(component.element);
		if (component.element && component.inDocument) {
			var attach = component.getAttachData();
			component.attachElement(attach.parent, attach.sibling);
		}
		return true;
	}
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(87);

(function () {
  this.CLOSURE_NO_DEPS = true;
  this.goog = this.goog || {};

  // Copyright 2006 The Closure Library Authors. All Rights Reserved.
  //
  // Licensed under the Apache License, Version 2.0 (the "License");
  // you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at
  //
  //      http://www.apache.org/licenses/LICENSE-2.0
  //
  // Unless required by applicable law or agreed to in writing, software
  // distributed under the License is distributed on an "AS-IS" BASIS,
  // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // See the License for the specific language governing permissions and
  // limitations under the License.

  /**
   * @fileoverview Bootstrap for the Google JS Library (Closure).
   *
   * In uncompiled mode base.js will write out Closure's deps file, unless the
   * global <code>CLOSURE_NO_DEPS</code> is set to true.  This allows projects to
   * include their own deps file(s) from different locations.
   *
   * @author arv@google.com (Erik Arvidsson)
   *
   * @provideGoog
   */

  /**
   * @define {boolean} Overridden to true by the compiler when
   *     --process_closure_primitives is specified.
   */
  var COMPILED = false;

  /**
   * Base namespace for the Closure library.  Checks to see goog is already
   * defined in the current scope before assigning to prevent clobbering if
   * base.js is loaded more than once.
   *
   * @const
   */
  var goog = this.goog || {};

  /**
   * Reference to the global context.  In most cases this will be 'window'.
   */
  goog.global = this;

  /**
   * A hook for overriding the define values in uncompiled mode.
   *
   * In uncompiled mode, {@code CLOSURE_UNCOMPILED_DEFINES} may be defined before
   * loading base.js.  If a key is defined in {@code CLOSURE_UNCOMPILED_DEFINES},
   * {@code goog.define} will use the value instead of the default value.  This
   * allows flags to be overwritten without compilation (this is normally
   * accomplished with the compiler's "define" flag).
   *
   * Example:
   * <pre>
   *   var CLOSURE_UNCOMPILED_DEFINES = {'goog.DEBUG': false};
   * </pre>
   *
   * @type {Object<string, (string|number|boolean)>|undefined}
   */
  goog.global.CLOSURE_UNCOMPILED_DEFINES;

  /**
   * A hook for overriding the define values in uncompiled or compiled mode,
   * like CLOSURE_UNCOMPILED_DEFINES but effective in compiled code.  In
   * uncompiled code CLOSURE_UNCOMPILED_DEFINES takes precedence.
   *
   * Also unlike CLOSURE_UNCOMPILED_DEFINES the values must be number, boolean or
   * string literals or the compiler will emit an error.
   *
   * While any @define value may be set, only those set with goog.define will be
   * effective for uncompiled code.
   *
   * Example:
   * <pre>
   *   var CLOSURE_DEFINES = {'goog.DEBUG': false} ;
   * </pre>
   *
   * @type {Object<string, (string|number|boolean)>|undefined}
   */
  goog.global.CLOSURE_DEFINES;

  /**
   * Returns true if the specified value is not undefined.
   * WARNING: Do not use this to test if an object has a property. Use the in
   * operator instead.
   *
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is defined.
   */
  goog.isDef = function (val) {
    // void 0 always evaluates to undefined and hence we do not need to depend on
    // the definition of the global variable named 'undefined'.
    return val !== void 0;
  };

  /**
   * Builds an object structure for the provided namespace path, ensuring that
   * names that already exist are not overwritten. For example:
   * "a.b.c" -> a = {};a.b={};a.b.c={};
   * Used by goog.provide and goog.exportSymbol.
   * @param {string} name name of the object that this file defines.
   * @param {*=} opt_object the object to expose at the end of the path.
   * @param {Object=} opt_objectToExportTo The object to add the path to; default
   *     is |goog.global|.
   * @private
   */
  goog.exportPath_ = function (name, opt_object, opt_objectToExportTo) {
    var parts = name.split('.');
    var cur = opt_objectToExportTo || goog.global;

    // Internet Explorer exhibits strange behavior when throwing errors from
    // methods externed in this manner.  See the testExportSymbolExceptions in
    // base_test.html for an example.
    if (!(parts[0] in cur) && cur.execScript) {
      cur.execScript('var ' + parts[0]);
    }

    // Certain browsers cannot parse code in the form for((a in b); c;);
    // This pattern is produced by the JSCompiler when it collapses the
    // statement above into the conditional loop below. To prevent this from
    // happening, use a for-loop and reserve the init logic as below.

    // Parentheses added to eliminate strict JS warning in Firefox.
    for (var part; parts.length && (part = parts.shift());) {
      if (!parts.length && goog.isDef(opt_object)) {
        // last part and we have an object; use it
        cur[part] = opt_object;
      } else if (cur[part]) {
        cur = cur[part];
      } else {
        cur = cur[part] = {};
      }
    }
  };

  /**
   * Defines a named value. In uncompiled mode, the value is retrieved from
   * CLOSURE_DEFINES or CLOSURE_UNCOMPILED_DEFINES if the object is defined and
   * has the property specified, and otherwise used the defined defaultValue.
   * When compiled the default can be overridden using the compiler
   * options or the value set in the CLOSURE_DEFINES object.
   *
   * @param {string} name The distinguished name to provide.
   * @param {string|number|boolean} defaultValue
   */
  goog.define = function (name, defaultValue) {
    var value = defaultValue;
    if (!COMPILED) {
      if (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, name)) {
        value = goog.global.CLOSURE_UNCOMPILED_DEFINES[name];
      } else if (goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, name)) {
        value = goog.global.CLOSURE_DEFINES[name];
      }
    }
    goog.exportPath_(name, value);
  };

  /**
   * @define {boolean} DEBUG is provided as a convenience so that debugging code
   * that should not be included in a production js_binary can be easily stripped
   * by specifying --define goog.DEBUG=false to the JSCompiler. For example, most
   * toString() methods should be declared inside an "if (goog.DEBUG)" conditional
   * because they are generally used for debugging purposes and it is difficult
   * for the JSCompiler to statically determine whether they are used.
   */
  goog.define('goog.DEBUG', true);

  /**
   * @define {string} LOCALE defines the locale being used for compilation. It is
   * used to select locale specific data to be compiled in js binary. BUILD rule
   * can specify this value by "--define goog.LOCALE=<locale_name>" as JSCompiler
   * option.
   *
   * Take into account that the locale code format is important. You should use
   * the canonical Unicode format with hyphen as a delimiter. Language must be
   * lowercase, Language Script - Capitalized, Region - UPPERCASE.
   * There are few examples: pt-BR, en, en-US, sr-Latin-BO, zh-Hans-CN.
   *
   * See more info about locale codes here:
   * http://www.unicode.org/reports/tr35/#Unicode_Language_and_Locale_Identifiers
   *
   * For language codes you should use values defined by ISO 693-1. See it here
   * http://www.w3.org/WAI/ER/IG/ert/iso639.htm. There is only one exception from
   * this rule: the Hebrew language. For legacy reasons the old code (iw) should
   * be used instead of the new code (he), see http://wiki/Main/IIISynonyms.
   */
  goog.define('goog.LOCALE', 'en'); // default to en


  /**
   * @define {boolean} Whether this code is running on trusted sites.
   *
   * On untrusted sites, several native functions can be defined or overridden by
   * external libraries like Prototype, Datejs, and JQuery and setting this flag
   * to false forces closure to use its own implementations when possible.
   *
   * If your JavaScript can be loaded by a third party site and you are wary about
   * relying on non-standard implementations, specify
   * "--define goog.TRUSTED_SITE=false" to the JSCompiler.
   */
  goog.define('goog.TRUSTED_SITE', true);

  /**
   * @define {boolean} Whether a project is expected to be running in strict mode.
   *
   * This define can be used to trigger alternate implementations compatible with
   * running in EcmaScript Strict mode or warn about unavailable functionality.
   * @see https://goo.gl/g5EoHI
   *
   */
  goog.define('goog.STRICT_MODE_COMPATIBLE', false);

  /**
   * @define {boolean} Whether code that calls {@link goog.setTestOnly} should
   *     be disallowed in the compilation unit.
   */
  goog.define('goog.DISALLOW_TEST_ONLY_CODE', COMPILED && !goog.DEBUG);

  /**
   * @define {boolean} Whether to use a Chrome app CSP-compliant method for
   *     loading scripts via goog.require. @see appendScriptSrcNode_.
   */
  goog.define('goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING', false);

  /**
   * Defines a namespace in Closure.
   *
   * A namespace may only be defined once in a codebase. It may be defined using
   * goog.provide() or goog.module().
   *
   * The presence of one or more goog.provide() calls in a file indicates
   * that the file defines the given objects/namespaces.
   * Provided symbols must not be null or undefined.
   *
   * In addition, goog.provide() creates the object stubs for a namespace
   * (for example, goog.provide("goog.foo.bar") will create the object
   * goog.foo.bar if it does not already exist).
   *
   * Build tools also scan for provide/require/module statements
   * to discern dependencies, build dependency files (see deps.js), etc.
   *
   * @see goog.require
   * @see goog.module
   * @param {string} name Namespace provided by this file in the form
   *     "goog.package.part".
   */
  goog.provide = function (name) {
    if (!COMPILED) {
      // Ensure that the same namespace isn't provided twice.
      // A goog.module/goog.provide maps a goog.require to a specific file
      if (goog.isProvided_(name)) {
        throw Error('Namespace "' + name + '" already declared.');
      }
    }

    goog.constructNamespace_(name);
  };

  /**
   * @param {string} name Namespace provided by this file in the form
   *     "goog.package.part".
   * @param {Object=} opt_obj The object to embed in the namespace.
   * @private
   */
  goog.constructNamespace_ = function (name, opt_obj) {
    if (!COMPILED) {
      delete goog.implicitNamespaces_[name];

      var namespace = name;
      while (namespace = namespace.substring(0, namespace.lastIndexOf('.'))) {
        if (goog.getObjectByName(namespace)) {
          break;
        }
        goog.implicitNamespaces_[namespace] = true;
      }
    }

    goog.exportPath_(name, opt_obj);
  };

  /**
   * Module identifier validation regexp.
   * Note: This is a conservative check, it is very possible to be more lenient,
   *   the primary exclusion here is "/" and "\" and a leading ".", these
   *   restrictions are intended to leave the door open for using goog.require
   *   with relative file paths rather than module identifiers.
   * @private
   */
  goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;

  /**
   * Defines a module in Closure.
   *
   * Marks that this file must be loaded as a module and claims the namespace.
   *
   * A namespace may only be defined once in a codebase. It may be defined using
   * goog.provide() or goog.module().
   *
   * goog.module() has three requirements:
   * - goog.module may not be used in the same file as goog.provide.
   * - goog.module must be the first statement in the file.
   * - only one goog.module is allowed per file.
   *
   * When a goog.module annotated file is loaded, it is enclosed in
   * a strict function closure. This means that:
   * - any variables declared in a goog.module file are private to the file
   * (not global), though the compiler is expected to inline the module.
   * - The code must obey all the rules of "strict" JavaScript.
   * - the file will be marked as "use strict"
   *
   * NOTE: unlike goog.provide, goog.module does not declare any symbols by
   * itself. If declared symbols are desired, use
   * goog.module.declareLegacyNamespace().
   *
   *
   * See the public goog.module proposal: http://goo.gl/Va1hin
   *
   * @param {string} name Namespace provided by this file in the form
   *     "goog.package.part", is expected but not required.
   */
  goog.module = function (name) {
    if (!goog.isString(name) || !name || name.search(goog.VALID_MODULE_RE_) == -1) {
      throw Error('Invalid module identifier');
    }
    if (!goog.isInModuleLoader_()) {
      throw Error('Module ' + name + ' has been loaded incorrectly.');
    }
    if (goog.moduleLoaderState_.moduleName) {
      throw Error('goog.module may only be called once per module.');
    }

    // Store the module name for the loader.
    goog.moduleLoaderState_.moduleName = name;
    if (!COMPILED) {
      // Ensure that the same namespace isn't provided twice.
      // A goog.module/goog.provide maps a goog.require to a specific file
      if (goog.isProvided_(name)) {
        throw Error('Namespace "' + name + '" already declared.');
      }
      delete goog.implicitNamespaces_[name];
    }
  };

  /**
   * @param {string} name The module identifier.
   * @return {?} The module exports for an already loaded module or null.
   *
   * Note: This is not an alternative to goog.require, it does not
   * indicate a hard dependency, instead it is used to indicate
   * an optional dependency or to access the exports of a module
   * that has already been loaded.
   * @suppress {missingProvide}
   */
  goog.module.get = function (name) {
    return goog.module.getInternal_(name);
  };

  /**
   * @param {string} name The module identifier.
   * @return {?} The module exports for an already loaded module or null.
   * @private
   */
  goog.module.getInternal_ = function (name) {
    if (!COMPILED) {
      if (goog.isProvided_(name)) {
        // goog.require only return a value with-in goog.module files.
        return name in goog.loadedModules_ ? goog.loadedModules_[name] : goog.getObjectByName(name);
      } else {
        return null;
      }
    }
  };

  /**
   * @private {?{moduleName: (string|undefined), declareLegacyNamespace:boolean}}
   */
  goog.moduleLoaderState_ = null;

  /**
   * @private
   * @return {boolean} Whether a goog.module is currently being initialized.
   */
  goog.isInModuleLoader_ = function () {
    return goog.moduleLoaderState_ != null;
  };

  /**
   * Provide the module's exports as a globally accessible object under the
   * module's declared name.  This is intended to ease migration to goog.module
   * for files that have existing usages.
   * @suppress {missingProvide}
   */
  goog.module.declareLegacyNamespace = function () {
    if (!COMPILED && !goog.isInModuleLoader_()) {
      throw new Error('goog.module.declareLegacyNamespace must be called from ' + 'within a goog.module');
    }
    if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
      throw Error('goog.module must be called prior to ' + 'goog.module.declareLegacyNamespace.');
    }
    goog.moduleLoaderState_.declareLegacyNamespace = true;
  };

  /**
   * Marks that the current file should only be used for testing, and never for
   * live code in production.
   *
   * In the case of unit tests, the message may optionally be an exact namespace
   * for the test (e.g. 'goog.stringTest'). The linter will then ignore the extra
   * provide (if not explicitly defined in the code).
   *
   * @param {string=} opt_message Optional message to add to the error that's
   *     raised when used in production code.
   */
  goog.setTestOnly = function (opt_message) {
    if (goog.DISALLOW_TEST_ONLY_CODE) {
      opt_message = opt_message || '';
      throw Error('Importing test-only code into non-debug environment' + (opt_message ? ': ' + opt_message : '.'));
    }
  };

  if (!COMPILED) {
    /**
     * Check if the given name has been goog.provided. This will return false for
     * names that are available only as implicit namespaces.
     * @param {string} name name of the object to look for.
     * @return {boolean} Whether the name has been provided.
     * @private
     */
    goog.isProvided_ = function (name) {
      return name in goog.loadedModules_ || !goog.implicitNamespaces_[name] && goog.isDefAndNotNull(goog.getObjectByName(name));
    };

    /**
     * Namespaces implicitly defined by goog.provide. For example,
     * goog.provide('goog.events.Event') implicitly declares that 'goog' and
     * 'goog.events' must be namespaces.
     *
     * @type {!Object<string, (boolean|undefined)>}
     * @private
     */
    goog.implicitNamespaces_ = { 'goog.module': true };

    // NOTE: We add goog.module as an implicit namespace as goog.module is defined
    // here and because the existing module package has not been moved yet out of
    // the goog.module namespace. This satisifies both the debug loader and
    // ahead-of-time dependency management.
  }

  /**
   * Returns an object based on its fully qualified external name.  The object
   * is not found if null or undefined.  If you are using a compilation pass that
   * renames property names beware that using this function will not find renamed
   * properties.
   *
   * @param {string} name The fully qualified name.
   * @param {Object=} opt_obj The object within which to look; default is
   *     |goog.global|.
   * @return {?} The value (object or primitive) or, if not found, null.
   */
  goog.getObjectByName = function (name, opt_obj) {
    var parts = name.split('.');
    var cur = opt_obj || goog.global;
    for (var part; part = parts.shift();) {
      if (goog.isDefAndNotNull(cur[part])) {
        cur = cur[part];
      } else {
        return null;
      }
    }
    return cur;
  };

  /**
   * Globalizes a whole namespace, such as goog or goog.lang.
   *
   * @param {!Object} obj The namespace to globalize.
   * @param {Object=} opt_global The object to add the properties to.
   * @deprecated Properties may be explicitly exported to the global scope, but
   *     this should no longer be done in bulk.
   */
  goog.globalize = function (obj, opt_global) {
    var global = opt_global || goog.global;
    for (var x in obj) {
      global[x] = obj[x];
    }
  };

  /**
   * Adds a dependency from a file to the files it requires.
   * @param {string} relPath The path to the js file.
   * @param {!Array<string>} provides An array of strings with
   *     the names of the objects this file provides.
   * @param {!Array<string>} requires An array of strings with
   *     the names of the objects this file requires.
   * @param {boolean|!Object<string>=} opt_loadFlags Parameters indicating
   *     how the file must be loaded.  The boolean 'true' is equivalent
   *     to {'module': 'goog'} for backwards-compatibility.  Valid properties
   *     and values include {'module': 'goog'} and {'lang': 'es6'}.
   */
  goog.addDependency = function (relPath, provides, requires, opt_loadFlags) {
    if (goog.DEPENDENCIES_ENABLED) {
      var provide, require;
      var path = relPath.replace(/\\/g, '/');
      var deps = goog.dependencies_;
      if (!opt_loadFlags || typeof opt_loadFlags === 'boolean') {
        opt_loadFlags = opt_loadFlags ? { 'module': 'goog' } : {};
      }
      for (var i = 0; provide = provides[i]; i++) {
        deps.nameToPath[provide] = path;
        deps.pathIsModule[path] = opt_loadFlags['module'] == 'goog';
      }
      for (var j = 0; require = requires[j]; j++) {
        if (!(path in deps.requires)) {
          deps.requires[path] = {};
        }
        deps.requires[path][require] = true;
      }
    }
  };

  // NOTE(nnaze): The debug DOM loader was included in base.js as an original way
  // to do "debug-mode" development.  The dependency system can sometimes be
  // confusing, as can the debug DOM loader's asynchronous nature.
  //
  // With the DOM loader, a call to goog.require() is not blocking -- the script
  // will not load until some point after the current script.  If a namespace is
  // needed at runtime, it needs to be defined in a previous script, or loaded via
  // require() with its registered dependencies.
  //
  // User-defined namespaces may need their own deps file. For a reference on
  // creating a deps file, see:
  // Externally: https://developers.google.com/closure/library/docs/depswriter
  //
  // Because of legacy clients, the DOM loader can't be easily removed from
  // base.js.  Work is being done to make it disableable or replaceable for
  // different environments (DOM-less JavaScript interpreters like Rhino or V8,
  // for example). See bootstrap/ for more information.


  /**
   * @define {boolean} Whether to enable the debug loader.
   *
   * If enabled, a call to goog.require() will attempt to load the namespace by
   * appending a script tag to the DOM (if the namespace has been registered).
   *
   * If disabled, goog.require() will simply assert that the namespace has been
   * provided (and depend on the fact that some outside tool correctly ordered
   * the script).
   */
  goog.define('goog.ENABLE_DEBUG_LOADER', true);

  /**
   * @param {string} msg
   * @private
   */
  goog.logToConsole_ = function (msg) {
    if (goog.global.console) {
      goog.global.console['error'](msg);
    }
  };

  /**
   * Implements a system for the dynamic resolution of dependencies that works in
   * parallel with the BUILD system. Note that all calls to goog.require will be
   * stripped by the JSCompiler when the --process_closure_primitives option is
   * used.
   * @see goog.provide
   * @param {string} name Namespace to include (as was given in goog.provide()) in
   *     the form "goog.package.part".
   * @return {?} If called within a goog.module file, the associated namespace or
   *     module otherwise null.
   */
  goog.require = function (name) {
    // If the object already exists we do not need do do anything.
    if (!COMPILED) {
      if (goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_) {
        goog.maybeProcessDeferredDep_(name);
      }

      if (goog.isProvided_(name)) {
        if (goog.isInModuleLoader_()) {
          return goog.module.getInternal_(name);
        } else {
          return null;
        }
      }

      if (goog.ENABLE_DEBUG_LOADER) {
        var path = goog.getPathFromDeps_(name);
        if (path) {
          goog.writeScripts_(path);
          return null;
        }
      }

      var errorMessage = 'goog.require could not find: ' + name;
      goog.logToConsole_(errorMessage);

      throw Error(errorMessage);
    }
  };

  /**
   * Path for included scripts.
   * @type {string}
   */
  goog.basePath = '';

  /**
   * A hook for overriding the base path.
   * @type {string|undefined}
   */
  goog.global.CLOSURE_BASE_PATH;

  /**
   * Whether to write out Closure's deps file. By default, the deps are written.
   * @type {boolean|undefined}
   */
  goog.global.CLOSURE_NO_DEPS;

  /**
   * A function to import a single script. This is meant to be overridden when
   * Closure is being run in non-HTML contexts, such as web workers. It's defined
   * in the global scope so that it can be set before base.js is loaded, which
   * allows deps.js to be imported properly.
   *
   * The function is passed the script source, which is a relative URI. It should
   * return true if the script was imported, false otherwise.
   * @type {(function(string): boolean)|undefined}
   */
  goog.global.CLOSURE_IMPORT_SCRIPT;

  /**
   * Null function used for default values of callbacks, etc.
   * @return {void} Nothing.
   */
  goog.nullFunction = function () {};

  /**
   * When defining a class Foo with an abstract method bar(), you can do:
   * Foo.prototype.bar = goog.abstractMethod
   *
   * Now if a subclass of Foo fails to override bar(), an error will be thrown
   * when bar() is invoked.
   *
   * Note: This does not take the name of the function to override as an argument
   * because that would make it more difficult to obfuscate our JavaScript code.
   *
   * @type {!Function}
   * @throws {Error} when invoked to indicate the method should be overridden.
   */
  goog.abstractMethod = function () {
    throw Error('unimplemented abstract method');
  };

  /**
   * Adds a {@code getInstance} static method that always returns the same
   * instance object.
   * @param {!Function} ctor The constructor for the class to add the static
   *     method to.
   */
  goog.addSingletonGetter = function (ctor) {
    ctor.getInstance = function () {
      if (ctor.instance_) {
        return ctor.instance_;
      }
      if (goog.DEBUG) {
        // NOTE: JSCompiler can't optimize away Array#push.
        goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = ctor;
      }
      return ctor.instance_ = new ctor();
    };
  };

  /**
   * All singleton classes that have been instantiated, for testing. Don't read
   * it directly, use the {@code goog.testing.singleton} module. The compiler
   * removes this variable if unused.
   * @type {!Array<!Function>}
   * @private
   */
  goog.instantiatedSingletons_ = [];

  /**
   * @define {boolean} Whether to load goog.modules using {@code eval} when using
   * the debug loader.  This provides a better debugging experience as the
   * source is unmodified and can be edited using Chrome Workspaces or similar.
   * However in some environments the use of {@code eval} is banned
   * so we provide an alternative.
   */
  goog.define('goog.LOAD_MODULE_USING_EVAL', true);

  /**
   * @define {boolean} Whether the exports of goog.modules should be sealed when
   * possible.
   */
  goog.define('goog.SEAL_MODULE_EXPORTS', goog.DEBUG);

  /**
   * The registry of initialized modules:
   * the module identifier to module exports map.
   * @private @const {!Object<string, ?>}
   */
  goog.loadedModules_ = {};

  /**
   * True if goog.dependencies_ is available.
   * @const {boolean}
   */
  goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;

  if (goog.DEPENDENCIES_ENABLED) {
    /**
     * This object is used to keep track of dependencies and other data that is
     * used for loading scripts.
     * @private
     * @type {{
     *   pathIsModule: !Object<string, boolean>,
     *   nameToPath: !Object<string, string>,
     *   requires: !Object<string, !Object<string, boolean>>,
     *   visited: !Object<string, boolean>,
     *   written: !Object<string, boolean>,
     *   deferred: !Object<string, string>
     * }}
     */
    goog.dependencies_ = {
      pathIsModule: {}, // 1 to 1

      nameToPath: {}, // 1 to 1

      requires: {}, // 1 to many

      // Used when resolving dependencies to prevent us from visiting file twice.
      visited: {},

      written: {}, // Used to keep track of script files we have written.

      deferred: {} // Used to track deferred module evaluations in old IEs
    };

    /**
     * Tries to detect whether is in the context of an HTML document.
     * @return {boolean} True if it looks like HTML document.
     * @private
     */
    goog.inHtmlDocument_ = function () {
      /** @type {Document} */
      var doc = goog.global.document;
      return doc != null && 'write' in doc; // XULDocument misses write.
    };

    /**
     * Tries to detect the base path of base.js script that bootstraps Closure.
     * @private
     */
    goog.findBasePath_ = function () {
      if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) {
        goog.basePath = goog.global.CLOSURE_BASE_PATH;
        return;
      } else if (!goog.inHtmlDocument_()) {
        return;
      }
      /** @type {Document} */
      var doc = goog.global.document;
      var scripts = doc.getElementsByTagName('SCRIPT');
      // Search backwards since the current script is in almost all cases the one
      // that has base.js.
      for (var i = scripts.length - 1; i >= 0; --i) {
        var script = /** @type {!HTMLScriptElement} */scripts[i];
        var src = script.src;
        var qmark = src.lastIndexOf('?');
        var l = qmark == -1 ? src.length : qmark;
        if (src.substr(l - 7, 7) == 'base.js') {
          goog.basePath = src.substr(0, l - 7);
          return;
        }
      }
    };

    /**
     * Imports a script if, and only if, that script hasn't already been imported.
     * (Must be called at execution time)
     * @param {string} src Script source.
     * @param {string=} opt_sourceText The optionally source text to evaluate
     * @private
     */
    goog.importScript_ = function (src, opt_sourceText) {
      var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
      if (importScript(src, opt_sourceText)) {
        goog.dependencies_.written[src] = true;
      }
    };

    /** @const @private {boolean} */
    goog.IS_OLD_IE_ = !!(!goog.global.atob && goog.global.document && goog.global.document.all);

    /**
     * Given a URL initiate retrieval and execution of the module.
     * @param {string} src Script source URL.
     * @private
     */
    goog.importModule_ = function (src) {
      // In an attempt to keep browsers from timing out loading scripts using
      // synchronous XHRs, put each load in its own script block.
      var bootstrap = 'goog.retrieveAndExecModule_("' + src + '");';

      if (goog.importScript_('', bootstrap)) {
        goog.dependencies_.written[src] = true;
      }
    };

    /** @private {!Array<string>} */
    goog.queuedModules_ = [];

    /**
     * Return an appropriate module text. Suitable to insert into
     * a script tag (that is unescaped).
     * @param {string} srcUrl
     * @param {string} scriptText
     * @return {string}
     * @private
     */
    goog.wrapModule_ = function (srcUrl, scriptText) {
      if (!goog.LOAD_MODULE_USING_EVAL || !goog.isDef(goog.global.JSON)) {
        return '' + 'goog.loadModule(function(exports) {' + '"use strict";' + scriptText + '\n' + // terminate any trailing single line comment.
        ';return exports' + '});' + '\n//# sourceURL=' + srcUrl + '\n';
      } else {
        return '' + 'goog.loadModule(' + goog.global.JSON.stringify(scriptText + '\n//# sourceURL=' + srcUrl + '\n') + ');';
      }
    };

    // On IE9 and earlier, it is necessary to handle
    // deferred module loads. In later browsers, the
    // code to be evaluated is simply inserted as a script
    // block in the correct order. To eval deferred
    // code at the right time, we piggy back on goog.require to call
    // goog.maybeProcessDeferredDep_.
    //
    // The goog.requires are used both to bootstrap
    // the loading process (when no deps are available) and
    // declare that they should be available.
    //
    // Here we eval the sources, if all the deps are available
    // either already eval'd or goog.require'd.  This will
    // be the case when all the dependencies have already
    // been loaded, and the dependent module is loaded.
    //
    // But this alone isn't sufficient because it is also
    // necessary to handle the case where there is no root
    // that is not deferred.  For that there we register for an event
    // and trigger goog.loadQueuedModules_ handle any remaining deferred
    // evaluations.

    /**
     * Handle any remaining deferred goog.module evals.
     * @private
     */
    goog.loadQueuedModules_ = function () {
      var count = goog.queuedModules_.length;
      if (count > 0) {
        var queue = goog.queuedModules_;
        goog.queuedModules_ = [];
        for (var i = 0; i < count; i++) {
          var path = queue[i];
          goog.maybeProcessDeferredPath_(path);
        }
      }
    };

    /**
     * Eval the named module if its dependencies are
     * available.
     * @param {string} name The module to load.
     * @private
     */
    goog.maybeProcessDeferredDep_ = function (name) {
      if (goog.isDeferredModule_(name) && goog.allDepsAreAvailable_(name)) {
        var path = goog.getPathFromDeps_(name);
        goog.maybeProcessDeferredPath_(goog.basePath + path);
      }
    };

    /**
     * @param {string} name The module to check.
     * @return {boolean} Whether the name represents a
     *     module whose evaluation has been deferred.
     * @private
     */
    goog.isDeferredModule_ = function (name) {
      var path = goog.getPathFromDeps_(name);
      if (path && goog.dependencies_.pathIsModule[path]) {
        var abspath = goog.basePath + path;
        return abspath in goog.dependencies_.deferred;
      }
      return false;
    };

    /**
     * @param {string} name The module to check.
     * @return {boolean} Whether the name represents a
     *     module whose declared dependencies have all been loaded
     *     (eval'd or a deferred module load)
     * @private
     */
    goog.allDepsAreAvailable_ = function (name) {
      var path = goog.getPathFromDeps_(name);
      if (path && path in goog.dependencies_.requires) {
        for (var requireName in goog.dependencies_.requires[path]) {
          if (!goog.isProvided_(requireName) && !goog.isDeferredModule_(requireName)) {
            return false;
          }
        }
      }
      return true;
    };

    /**
     * @param {string} abspath
     * @private
     */
    goog.maybeProcessDeferredPath_ = function (abspath) {
      if (abspath in goog.dependencies_.deferred) {
        var src = goog.dependencies_.deferred[abspath];
        delete goog.dependencies_.deferred[abspath];
        goog.globalEval(src);
      }
    };

    /**
     * Load a goog.module from the provided URL.  This is not a general purpose
     * code loader and does not support late loading code, that is it should only
     * be used during page load. This method exists to support unit tests and
     * "debug" loaders that would otherwise have inserted script tags. Under the
     * hood this needs to use a synchronous XHR and is not recommeneded for
     * production code.
     *
     * The module's goog.requires must have already been satisified; an exception
     * will be thrown if this is not the case. This assumption is that no
     * "deps.js" file exists, so there is no way to discover and locate the
     * module-to-be-loaded's dependencies and no attempt is made to do so.
     *
     * There should only be one attempt to load a module.  If
     * "goog.loadModuleFromUrl" is called for an already loaded module, an
     * exception will be throw.
     *
     * @param {string} url The URL from which to attempt to load the goog.module.
     */
    goog.loadModuleFromUrl = function (url) {
      // Because this executes synchronously, we don't need to do any additional
      // bookkeeping. When "goog.loadModule" the namespace will be marked as
      // having been provided which is sufficient.
      goog.retrieveAndExecModule_(url);
    };

    /**
     * @param {function(?):?|string} moduleDef The module definition.
     */
    goog.loadModule = function (moduleDef) {
      // NOTE: we allow function definitions to be either in the from
      // of a string to eval (which keeps the original source intact) or
      // in a eval forbidden environment (CSP) we allow a function definition
      // which in its body must call {@code goog.module}, and return the exports
      // of the module.
      var previousState = goog.moduleLoaderState_;
      try {
        goog.moduleLoaderState_ = {
          moduleName: undefined,
          declareLegacyNamespace: false
        };
        var exports;
        if (goog.isFunction(moduleDef)) {
          exports = moduleDef.call(goog.global, {});
        } else if (goog.isString(moduleDef)) {
          exports = goog.loadModuleFromSource_.call(goog.global, moduleDef);
        } else {
          throw Error('Invalid module definition');
        }

        var moduleName = goog.moduleLoaderState_.moduleName;
        if (!goog.isString(moduleName) || !moduleName) {
          throw Error('Invalid module name \"' + moduleName + '\"');
        }

        // Don't seal legacy namespaces as they may be uses as a parent of
        // another namespace
        if (goog.moduleLoaderState_.declareLegacyNamespace) {
          goog.constructNamespace_(moduleName, exports);
        } else if (goog.SEAL_MODULE_EXPORTS && Object.seal) {
          Object.seal(exports);
        }

        goog.loadedModules_[moduleName] = exports;
      } finally {
        goog.moduleLoaderState_ = previousState;
      }
    };

    /**
     * @private @const {function(string):?}
     *
     * The new type inference warns because this function has no formal
     * parameters, but its jsdoc says that it takes one argument.
     * (The argument is used via arguments[0], but NTI does not detect this.)
     * @suppress {newCheckTypes}
     */
    goog.loadModuleFromSource_ = function () {
      // NOTE: we avoid declaring parameters or local variables here to avoid
      // masking globals or leaking values into the module definition.
      'use strict';

      var exports = {};
      eval(arguments[0]);
      return exports;
    };

    /**
     * Writes a new script pointing to {@code src} directly into the DOM.
     *
     * NOTE: This method is not CSP-compliant. @see goog.appendScriptSrcNode_ for
     * the fallback mechanism.
     *
     * @param {string} src The script URL.
     * @private
     */
    goog.writeScriptSrcNode_ = function (src) {
      goog.global.document.write('<script type="text/javascript" src="' + src + '"></' + 'script>');
    };

    /**
     * Appends a new script node to the DOM using a CSP-compliant mechanism. This
     * method exists as a fallback for document.write (which is not allowed in a
     * strict CSP context, e.g., Chrome apps).
     *
     * NOTE: This method is not analogous to using document.write to insert a
     * <script> tag; specifically, the user agent will execute a script added by
     * document.write immediately after the current script block finishes
     * executing, whereas the DOM-appended script node will not be executed until
     * the entire document is parsed and executed. That is to say, this script is
     * added to the end of the script execution queue.
     *
     * The page must not attempt to call goog.required entities until after the
     * document has loaded, e.g., in or after the window.onload callback.
     *
     * @param {string} src The script URL.
     * @private
     */
    goog.appendScriptSrcNode_ = function (src) {
      /** @type {Document} */
      var doc = goog.global.document;
      var scriptEl =
      /** @type {HTMLScriptElement} */doc.createElement('script');
      scriptEl.type = 'text/javascript';
      scriptEl.src = src;
      scriptEl.defer = false;
      scriptEl.async = false;
      doc.head.appendChild(scriptEl);
    };

    /**
     * The default implementation of the import function. Writes a script tag to
     * import the script.
     *
     * @param {string} src The script url.
     * @param {string=} opt_sourceText The optionally source text to evaluate
     * @return {boolean} True if the script was imported, false otherwise.
     * @private
     */
    goog.writeScriptTag_ = function (src, opt_sourceText) {
      if (goog.inHtmlDocument_()) {
        /** @type {!HTMLDocument} */
        var doc = goog.global.document;

        // If the user tries to require a new symbol after document load,
        // something has gone terribly wrong. Doing a document.write would
        // wipe out the page. This does not apply to the CSP-compliant method
        // of writing script tags.
        if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && doc.readyState == 'complete') {
          // Certain test frameworks load base.js multiple times, which tries
          // to write deps.js each time. If that happens, just fail silently.
          // These frameworks wipe the page between each load of base.js, so this
          // is OK.
          var isDeps = /\bdeps.js$/.test(src);
          if (isDeps) {
            return false;
          } else {
            throw Error('Cannot write "' + src + '" after document load');
          }
        }

        var isOldIE = goog.IS_OLD_IE_;

        if (opt_sourceText === undefined) {
          if (!isOldIE) {
            if (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
              goog.appendScriptSrcNode_(src);
            } else {
              goog.writeScriptSrcNode_(src);
            }
          } else {
            var state = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ";
            doc.write('<script type="text/javascript" src="' + src + '"' + state + '></' + 'script>');
          }
        } else {
          doc.write('<script type="text/javascript">' + opt_sourceText + '</' + 'script>');
        }
        return true;
      } else {
        return false;
      }
    };

    /** @private {number} */
    goog.lastNonModuleScriptIndex_ = 0;

    /**
     * A readystatechange handler for legacy IE
     * @param {!HTMLScriptElement} script
     * @param {number} scriptIndex
     * @return {boolean}
     * @private
     */
    goog.onScriptLoad_ = function (script, scriptIndex) {
      // for now load the modules when we reach the last script,
      // later allow more inter-mingling.
      if (script.readyState == 'complete' && goog.lastNonModuleScriptIndex_ == scriptIndex) {
        goog.loadQueuedModules_();
      }
      return true;
    };

    /**
     * Resolves dependencies based on the dependencies added using addDependency
     * and calls importScript_ in the correct order.
     * @param {string} pathToLoad The path from which to start discovering
     *     dependencies.
     * @private
     */
    goog.writeScripts_ = function (pathToLoad) {
      /** @type {!Array<string>} The scripts we need to write this time. */
      var scripts = [];
      var seenScript = {};
      var deps = goog.dependencies_;

      /** @param {string} path */
      function visitNode(path) {
        if (path in deps.written) {
          return;
        }

        // We have already visited this one. We can get here if we have cyclic
        // dependencies.
        if (path in deps.visited) {
          return;
        }

        deps.visited[path] = true;

        if (path in deps.requires) {
          for (var requireName in deps.requires[path]) {
            // If the required name is defined, we assume that it was already
            // bootstrapped by other means.
            if (!goog.isProvided_(requireName)) {
              if (requireName in deps.nameToPath) {
                visitNode(deps.nameToPath[requireName]);
              } else {
                throw Error('Undefined nameToPath for ' + requireName);
              }
            }
          }
        }

        if (!(path in seenScript)) {
          seenScript[path] = true;
          scripts.push(path);
        }
      }

      visitNode(pathToLoad);

      // record that we are going to load all these scripts.
      for (var i = 0; i < scripts.length; i++) {
        var path = scripts[i];
        goog.dependencies_.written[path] = true;
      }

      // If a module is loaded synchronously then we need to
      // clear the current inModuleLoader value, and restore it when we are
      // done loading the current "requires".
      var moduleState = goog.moduleLoaderState_;
      goog.moduleLoaderState_ = null;

      for (var i = 0; i < scripts.length; i++) {
        var path = scripts[i];
        if (path) {
          if (!deps.pathIsModule[path]) {
            goog.importScript_(goog.basePath + path);
          } else {
            goog.importModule_(goog.basePath + path);
          }
        } else {
          goog.moduleLoaderState_ = moduleState;
          throw Error('Undefined script input');
        }
      }

      // restore the current "module loading state"
      goog.moduleLoaderState_ = moduleState;
    };

    /**
     * Looks at the dependency rules and tries to determine the script file that
     * fulfills a particular rule.
     * @param {string} rule In the form goog.namespace.Class or project.script.
     * @return {?string} Url corresponding to the rule, or null.
     * @private
     */
    goog.getPathFromDeps_ = function (rule) {
      if (rule in goog.dependencies_.nameToPath) {
        return goog.dependencies_.nameToPath[rule];
      } else {
        return null;
      }
    };

    goog.findBasePath_();

    // Allow projects to manage the deps files themselves.
    if (!goog.global.CLOSURE_NO_DEPS) {
      goog.importScript_(goog.basePath + 'deps.js');
    }
  }

  /**
   * Normalize a file path by removing redundant ".." and extraneous "." file
   * path components.
   * @param {string} path
   * @return {string}
   * @private
   */
  goog.normalizePath_ = function (path) {
    var components = path.split('/');
    var i = 0;
    while (i < components.length) {
      if (components[i] == '.') {
        components.splice(i, 1);
      } else if (i && components[i] == '..' && components[i - 1] && components[i - 1] != '..') {
        components.splice(--i, 2);
      } else {
        i++;
      }
    }
    return components.join('/');
  };

  /**
   * Loads file by synchronous XHR. Should not be used in production environments.
   * @param {string} src Source URL.
   * @return {string} File contents.
   * @private
   */
  goog.loadFileSync_ = function (src) {
    if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
      return goog.global.CLOSURE_LOAD_FILE_SYNC(src);
    } else {
      /** @type {XMLHttpRequest} */
      var xhr = new goog.global['XMLHttpRequest']();
      xhr.open('get', src, false);
      xhr.send();
      return xhr.responseText;
    }
  };

  /**
   * Retrieve and execute a module.
   * @param {string} src Script source URL.
   * @private
   */
  goog.retrieveAndExecModule_ = function (src) {
    if (!COMPILED) {
      // The full but non-canonicalized URL for later use.
      var originalPath = src;
      // Canonicalize the path, removing any /./ or /../ since Chrome's debugging
      // console doesn't auto-canonicalize XHR loads as it does <script> srcs.
      src = goog.normalizePath_(src);

      var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;

      var scriptText = goog.loadFileSync_(src);

      if (scriptText != null) {
        var execModuleScript = goog.wrapModule_(src, scriptText);
        var isOldIE = goog.IS_OLD_IE_;
        if (isOldIE) {
          goog.dependencies_.deferred[originalPath] = execModuleScript;
          goog.queuedModules_.push(originalPath);
        } else {
          importScript(src, execModuleScript);
        }
      } else {
        throw new Error('load of ' + src + 'failed');
      }
    }
  };

  //==============================================================================
  // Language Enhancements
  //==============================================================================


  /**
   * This is a "fixed" version of the typeof operator.  It differs from the typeof
   * operator in such a way that null returns 'null' and arrays return 'array'.
   * @param {?} value The value to get the type of.
   * @return {string} The name of the type.
   */
  goog.typeOf = function (value) {
    var s = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    if (s == 'object') {
      if (value) {
        // Check these first, so we can avoid calling Object.prototype.toString if
        // possible.
        //
        // IE improperly marshals typeof across execution contexts, but a
        // cross-context object will still return false for "instanceof Object".
        if (value instanceof Array) {
          return 'array';
        } else if (value instanceof Object) {
          return s;
        }

        // HACK: In order to use an Object prototype method on the arbitrary
        //   value, the compiler requires the value be cast to type Object,
        //   even though the ECMA spec explicitly allows it.
        var className = Object.prototype.toString.call(
        /** @type {!Object} */value);
        // In Firefox 3.6, attempting to access iframe window objects' length
        // property throws an NS_ERROR_FAILURE, so we need to special-case it
        // here.
        if (className == '[object Window]') {
          return 'object';
        }

        // We cannot always use constructor == Array or instanceof Array because
        // different frames have different Array objects. In IE6, if the iframe
        // where the array was created is destroyed, the array loses its
        // prototype. Then dereferencing val.splice here throws an exception, so
        // we can't use goog.isFunction. Calling typeof directly returns 'unknown'
        // so that will work. In this case, this function will return false and
        // most array functions will still work because the array is still
        // array-like (supports length and []) even though it has lost its
        // prototype.
        // Mark Miller noticed that Object.prototype.toString
        // allows access to the unforgeable [[Class]] property.
        //  15.2.4.2 Object.prototype.toString ( )
        //  When the toString method is called, the following steps are taken:
        //      1. Get the [[Class]] property of this object.
        //      2. Compute a string value by concatenating the three strings
        //         "[object ", Result(1), and "]".
        //      3. Return Result(2).
        // and this behavior survives the destruction of the execution context.
        if (className == '[object Array]' ||
        // In IE all non value types are wrapped as objects across window
        // boundaries (not iframe though) so we have to do object detection
        // for this edge case.
        typeof value.length == 'number' && typeof value.splice != 'undefined' && typeof value.propertyIsEnumerable != 'undefined' && !value.propertyIsEnumerable('splice')) {
          return 'array';
        }
        // HACK: There is still an array case that fails.
        //     function ArrayImpostor() {}
        //     ArrayImpostor.prototype = [];
        //     var impostor = new ArrayImpostor;
        // this can be fixed by getting rid of the fast path
        // (value instanceof Array) and solely relying on
        // (value && Object.prototype.toString.vall(value) === '[object Array]')
        // but that would require many more function calls and is not warranted
        // unless closure code is receiving objects from untrusted sources.

        // IE in cross-window calls does not correctly marshal the function type
        // (it appears just as an object) so we cannot use just typeof val ==
        // 'function'. However, if the object has a call property, it is a
        // function.
        if (className == '[object Function]' || typeof value.call != 'undefined' && typeof value.propertyIsEnumerable != 'undefined' && !value.propertyIsEnumerable('call')) {
          return 'function';
        }
      } else {
        return 'null';
      }
    } else if (s == 'function' && typeof value.call == 'undefined') {
      // In Safari typeof nodeList returns 'function', and on Firefox typeof
      // behaves similarly for HTML{Applet,Embed,Object}, Elements and RegExps. We
      // would like to return object for those and we can detect an invalid
      // function by making sure that the function object has a call method.
      return 'object';
    }
    return s;
  };

  /**
   * Returns true if the specified value is null.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is null.
   */
  goog.isNull = function (val) {
    return val === null;
  };

  /**
   * Returns true if the specified value is defined and not null.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is defined and not null.
   */
  goog.isDefAndNotNull = function (val) {
    // Note that undefined == null.
    return val != null;
  };

  /**
   * Returns true if the specified value is an array.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is an array.
   */
  goog.isArray = function (val) {
    return goog.typeOf(val) == 'array';
  };

  /**
   * Returns true if the object looks like an array. To qualify as array like
   * the value needs to be either a NodeList or an object with a Number length
   * property. As a special case, a function value is not array like, because its
   * length property is fixed to correspond to the number of expected arguments.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is an array.
   */
  goog.isArrayLike = function (val) {
    var type = goog.typeOf(val);
    // We do not use goog.isObject here in order to exclude function values.
    return type == 'array' || type == 'object' && typeof val.length == 'number';
  };

  /**
   * Returns true if the object looks like a Date. To qualify as Date-like the
   * value needs to be an object and have a getFullYear() function.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is a like a Date.
   */
  goog.isDateLike = function (val) {
    return goog.isObject(val) && typeof val.getFullYear == 'function';
  };

  /**
   * Returns true if the specified value is a string.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is a string.
   */
  goog.isString = function (val) {
    return typeof val == 'string';
  };

  /**
   * Returns true if the specified value is a boolean.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is boolean.
   */
  goog.isBoolean = function (val) {
    return typeof val == 'boolean';
  };

  /**
   * Returns true if the specified value is a number.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is a number.
   */
  goog.isNumber = function (val) {
    return typeof val == 'number';
  };

  /**
   * Returns true if the specified value is a function.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is a function.
   */
  goog.isFunction = function (val) {
    return goog.typeOf(val) == 'function';
  };

  /**
   * Returns true if the specified value is an object.  This includes arrays and
   * functions.
   * @param {?} val Variable to test.
   * @return {boolean} Whether variable is an object.
   */
  goog.isObject = function (val) {
    var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
    return type == 'object' && val != null || type == 'function';
    // return Object(val) === val also works, but is slower, especially if val is
    // not an object.
  };

  /**
   * Gets a unique ID for an object. This mutates the object so that further calls
   * with the same object as a parameter returns the same value. The unique ID is
   * guaranteed to be unique across the current session amongst objects that are
   * passed into {@code getUid}. There is no guarantee that the ID is unique or
   * consistent across sessions. It is unsafe to generate unique ID for function
   * prototypes.
   *
   * @param {Object} obj The object to get the unique ID for.
   * @return {number} The unique ID for the object.
   */
  goog.getUid = function (obj) {
    // TODO(arv): Make the type stricter, do not accept null.

    // In Opera window.hasOwnProperty exists but always returns false so we avoid
    // using it. As a consequence the unique ID generated for BaseClass.prototype
    // and SubClass.prototype will be the same.
    return obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_);
  };

  /**
   * Whether the given object is already assigned a unique ID.
   *
   * This does not modify the object.
   *
   * @param {!Object} obj The object to check.
   * @return {boolean} Whether there is an assigned unique id for the object.
   */
  goog.hasUid = function (obj) {
    return !!obj[goog.UID_PROPERTY_];
  };

  /**
   * Removes the unique ID from an object. This is useful if the object was
   * previously mutated using {@code goog.getUid} in which case the mutation is
   * undone.
   * @param {Object} obj The object to remove the unique ID field from.
   */
  goog.removeUid = function (obj) {
    // TODO(arv): Make the type stricter, do not accept null.

    // In IE, DOM nodes are not instances of Object and throw an exception if we
    // try to delete.  Instead we try to use removeAttribute.
    if (obj !== null && 'removeAttribute' in obj) {
      obj.removeAttribute(goog.UID_PROPERTY_);
    }
    /** @preserveTry */
    try {
      delete obj[goog.UID_PROPERTY_];
    } catch (ex) {}
  };

  /**
   * Name for unique ID property. Initialized in a way to help avoid collisions
   * with other closure JavaScript on the same page.
   * @type {string}
   * @private
   */
  goog.UID_PROPERTY_ = 'closure_uid_' + (Math.random() * 1e9 >>> 0);

  /**
   * Counter for UID.
   * @type {number}
   * @private
   */
  goog.uidCounter_ = 0;

  /**
   * Adds a hash code field to an object. The hash code is unique for the
   * given object.
   * @param {Object} obj The object to get the hash code for.
   * @return {number} The hash code for the object.
   * @deprecated Use goog.getUid instead.
   */
  goog.getHashCode = goog.getUid;

  /**
   * Removes the hash code field from an object.
   * @param {Object} obj The object to remove the field from.
   * @deprecated Use goog.removeUid instead.
   */
  goog.removeHashCode = goog.removeUid;

  /**
   * Clones a value. The input may be an Object, Array, or basic type. Objects and
   * arrays will be cloned recursively.
   *
   * WARNINGS:
   * <code>goog.cloneObject</code> does not detect reference loops. Objects that
   * refer to themselves will cause infinite recursion.
   *
   * <code>goog.cloneObject</code> is unaware of unique identifiers, and copies
   * UIDs created by <code>getUid</code> into cloned results.
   *
   * @param {*} obj The value to clone.
   * @return {*} A clone of the input value.
   * @deprecated goog.cloneObject is unsafe. Prefer the goog.object methods.
   */
  goog.cloneObject = function (obj) {
    var type = goog.typeOf(obj);
    if (type == 'object' || type == 'array') {
      if (obj.clone) {
        return obj.clone();
      }
      var clone = type == 'array' ? [] : {};
      for (var key in obj) {
        clone[key] = goog.cloneObject(obj[key]);
      }
      return clone;
    }

    return obj;
  };

  /**
   * A native implementation of goog.bind.
   * @param {Function} fn A function to partially apply.
   * @param {Object|undefined} selfObj Specifies the object which this should
   *     point to when the function is run.
   * @param {...*} var_args Additional arguments that are partially applied to the
   *     function.
   * @return {!Function} A partially-applied form of the function bind() was
   *     invoked as a method of.
   * @private
   * @suppress {deprecated} The compiler thinks that Function.prototype.bind is
   *     deprecated because some people have declared a pure-JS version.
   *     Only the pure-JS version is truly deprecated.
   */
  goog.bindNative_ = function (fn, selfObj, var_args) {
    return (/** @type {!Function} */fn.call.apply(fn.bind, arguments)
    );
  };

  /**
   * A pure-JS implementation of goog.bind.
   * @param {Function} fn A function to partially apply.
   * @param {Object|undefined} selfObj Specifies the object which this should
   *     point to when the function is run.
   * @param {...*} var_args Additional arguments that are partially applied to the
   *     function.
   * @return {!Function} A partially-applied form of the function bind() was
   *     invoked as a method of.
   * @private
   */
  goog.bindJs_ = function (fn, selfObj, var_args) {
    if (!fn) {
      throw new Error();
    }

    if (arguments.length > 2) {
      var boundArgs = Array.prototype.slice.call(arguments, 2);
      return function () {
        // Prepend the bound arguments to the current arguments.
        var newArgs = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(newArgs, boundArgs);
        return fn.apply(selfObj, newArgs);
      };
    } else {
      return function () {
        return fn.apply(selfObj, arguments);
      };
    }
  };

  /**
   * Partially applies this function to a particular 'this object' and zero or
   * more arguments. The result is a new function with some arguments of the first
   * function pre-filled and the value of this 'pre-specified'.
   *
   * Remaining arguments specified at call-time are appended to the pre-specified
   * ones.
   *
   * Also see: {@link #partial}.
   *
   * Usage:
   * <pre>var barMethBound = goog.bind(myFunction, myObj, 'arg1', 'arg2');
   * barMethBound('arg3', 'arg4');</pre>
   *
   * @param {?function(this:T, ...)} fn A function to partially apply.
   * @param {T} selfObj Specifies the object which this should point to when the
   *     function is run.
   * @param {...*} var_args Additional arguments that are partially applied to the
   *     function.
   * @return {!Function} A partially-applied form of the function goog.bind() was
   *     invoked as a method of.
   * @template T
   * @suppress {deprecated} See above.
   */
  goog.bind = function (fn, selfObj, var_args) {
    // TODO(nicksantos): narrow the type signature.
    if (Function.prototype.bind &&
    // NOTE(nicksantos): Somebody pulled base.js into the default Chrome
    // extension environment. This means that for Chrome extensions, they get
    // the implementation of Function.prototype.bind that calls goog.bind
    // instead of the native one. Even worse, we don't want to introduce a
    // circular dependency between goog.bind and Function.prototype.bind, so
    // we have to hack this to make sure it works correctly.
    Function.prototype.bind.toString().indexOf('native code') != -1) {
      goog.bind = goog.bindNative_;
    } else {
      goog.bind = goog.bindJs_;
    }
    return goog.bind.apply(null, arguments);
  };

  /**
   * Like goog.bind(), except that a 'this object' is not required. Useful when
   * the target function is already bound.
   *
   * Usage:
   * var g = goog.partial(f, arg1, arg2);
   * g(arg3, arg4);
   *
   * @param {Function} fn A function to partially apply.
   * @param {...*} var_args Additional arguments that are partially applied to fn.
   * @return {!Function} A partially-applied form of the function goog.partial()
   *     was invoked as a method of.
   */
  goog.partial = function (fn, var_args) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
      // Clone the array (with slice()) and append additional arguments
      // to the existing arguments.
      var newArgs = args.slice();
      newArgs.push.apply(newArgs, arguments);
      return fn.apply(this, newArgs);
    };
  };

  /**
   * Copies all the members of a source object to a target object. This method
   * does not work on all browsers for all objects that contain keys such as
   * toString or hasOwnProperty. Use goog.object.extend for this purpose.
   * @param {Object} target Target.
   * @param {Object} source Source.
   */
  goog.mixin = function (target, source) {
    for (var x in source) {
      target[x] = source[x];
    }

    // For IE7 or lower, the for-in-loop does not contain any properties that are
    // not enumerable on the prototype object (for example, isPrototypeOf from
    // Object.prototype) but also it will not include 'replace' on objects that
    // extend String and change 'replace' (not that it is common for anyone to
    // extend anything except Object).
  };

  /**
   * @return {number} An integer value representing the number of milliseconds
   *     between midnight, January 1, 1970 and the current time.
   */
  goog.now = goog.TRUSTED_SITE && Date.now || function () {
    // Unary plus operator converts its operand to a number which in
    // the case of
    // a date is done by calling getTime().
    return +new Date();
  };

  /**
   * Evals JavaScript in the global scope.  In IE this uses execScript, other
   * browsers use goog.global.eval. If goog.global.eval does not evaluate in the
   * global scope (for example, in Safari), appends a script tag instead.
   * Throws an exception if neither execScript or eval is defined.
   * @param {string} script JavaScript string.
   */
  goog.globalEval = function (script) {
    if (goog.global.execScript) {
      goog.global.execScript(script, 'JavaScript');
    } else if (goog.global.eval) {
      // Test to see if eval works
      if (goog.evalWorksForGlobals_ == null) {
        goog.global.eval('var _evalTest_ = 1;');
        if (typeof goog.global['_evalTest_'] != 'undefined') {
          try {
            delete goog.global['_evalTest_'];
          } catch (ignore) {
            // Microsoft edge fails the deletion above in strict mode.
          }
          goog.evalWorksForGlobals_ = true;
        } else {
          goog.evalWorksForGlobals_ = false;
        }
      }

      if (goog.evalWorksForGlobals_) {
        goog.global.eval(script);
      } else {
        /** @type {Document} */
        var doc = goog.global.document;
        var scriptElt =
        /** @type {!HTMLScriptElement} */doc.createElement('SCRIPT');
        scriptElt.type = 'text/javascript';
        scriptElt.defer = false;
        // Note(user): can't use .innerHTML since "t('<test>')" will fail and
        // .text doesn't work in Safari 2.  Therefore we append a text node.
        scriptElt.appendChild(doc.createTextNode(script));
        doc.body.appendChild(scriptElt);
        doc.body.removeChild(scriptElt);
      }
    } else {
      throw Error('goog.globalEval not available');
    }
  };

  /**
   * Indicates whether or not we can call 'eval' directly to eval code in the
   * global scope. Set to a Boolean by the first call to goog.globalEval (which
   * empirically tests whether eval works for globals). @see goog.globalEval
   * @type {?boolean}
   * @private
   */
  goog.evalWorksForGlobals_ = null;

  /**
   * Optional map of CSS class names to obfuscated names used with
   * goog.getCssName().
   * @private {!Object<string, string>|undefined}
   * @see goog.setCssNameMapping
   */
  goog.cssNameMapping_;

  /**
   * Optional obfuscation style for CSS class names. Should be set to either
   * 'BY_WHOLE' or 'BY_PART' if defined.
   * @type {string|undefined}
   * @private
   * @see goog.setCssNameMapping
   */
  goog.cssNameMappingStyle_;

  /**
   * Handles strings that are intended to be used as CSS class names.
   *
   * This function works in tandem with @see goog.setCssNameMapping.
   *
   * Without any mapping set, the arguments are simple joined with a hyphen and
   * passed through unaltered.
   *
   * When there is a mapping, there are two possible styles in which these
   * mappings are used. In the BY_PART style, each part (i.e. in between hyphens)
   * of the passed in css name is rewritten according to the map. In the BY_WHOLE
   * style, the full css name is looked up in the map directly. If a rewrite is
   * not specified by the map, the compiler will output a warning.
   *
   * When the mapping is passed to the compiler, it will replace calls to
   * goog.getCssName with the strings from the mapping, e.g.
   *     var x = goog.getCssName('foo');
   *     var y = goog.getCssName(this.baseClass, 'active');
   *  becomes:
   *     var x = 'foo';
   *     var y = this.baseClass + '-active';
   *
   * If one argument is passed it will be processed, if two are passed only the
   * modifier will be processed, as it is assumed the first argument was generated
   * as a result of calling goog.getCssName.
   *
   * @param {string} className The class name.
   * @param {string=} opt_modifier A modifier to be appended to the class name.
   * @return {string} The class name or the concatenation of the class name and
   *     the modifier.
   */
  goog.getCssName = function (className, opt_modifier) {
    var getMapping = function getMapping(cssName) {
      return goog.cssNameMapping_[cssName] || cssName;
    };

    var renameByParts = function renameByParts(cssName) {
      // Remap all the parts individually.
      var parts = cssName.split('-');
      var mapped = [];
      for (var i = 0; i < parts.length; i++) {
        mapped.push(getMapping(parts[i]));
      }
      return mapped.join('-');
    };

    var rename;
    if (goog.cssNameMapping_) {
      rename = goog.cssNameMappingStyle_ == 'BY_WHOLE' ? getMapping : renameByParts;
    } else {
      rename = function rename(a) {
        return a;
      };
    }

    if (opt_modifier) {
      return className + '-' + rename(opt_modifier);
    } else {
      return rename(className);
    }
  };

  /**
   * Sets the map to check when returning a value from goog.getCssName(). Example:
   * <pre>
   * goog.setCssNameMapping({
   *   "goog": "a",
   *   "disabled": "b",
   * });
   *
   * var x = goog.getCssName('goog');
   * // The following evaluates to: "a a-b".
   * goog.getCssName('goog') + ' ' + goog.getCssName(x, 'disabled')
   * </pre>
   * When declared as a map of string literals to string literals, the JSCompiler
   * will replace all calls to goog.getCssName() using the supplied map if the
   * --process_closure_primitives flag is set.
   *
   * @param {!Object} mapping A map of strings to strings where keys are possible
   *     arguments to goog.getCssName() and values are the corresponding values
   *     that should be returned.
   * @param {string=} opt_style The style of css name mapping. There are two valid
   *     options: 'BY_PART', and 'BY_WHOLE'.
   * @see goog.getCssName for a description.
   */
  goog.setCssNameMapping = function (mapping, opt_style) {
    goog.cssNameMapping_ = mapping;
    goog.cssNameMappingStyle_ = opt_style;
  };

  /**
   * To use CSS renaming in compiled mode, one of the input files should have a
   * call to goog.setCssNameMapping() with an object literal that the JSCompiler
   * can extract and use to replace all calls to goog.getCssName(). In uncompiled
   * mode, JavaScript code should be loaded before this base.js file that declares
   * a global variable, CLOSURE_CSS_NAME_MAPPING, which is used below. This is
   * to ensure that the mapping is loaded before any calls to goog.getCssName()
   * are made in uncompiled mode.
   *
   * A hook for overriding the CSS name mapping.
   * @type {!Object<string, string>|undefined}
   */
  goog.global.CLOSURE_CSS_NAME_MAPPING;

  if (!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING) {
    // This does not call goog.setCssNameMapping() because the JSCompiler
    // requires that goog.setCssNameMapping() be called with an object literal.
    goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING;
  }

  /**
   * Gets a localized message.
   *
   * This function is a compiler primitive. If you give the compiler a localized
   * message bundle, it will replace the string at compile-time with a localized
   * version, and expand goog.getMsg call to a concatenated string.
   *
   * Messages must be initialized in the form:
   * <code>
   * var MSG_NAME = goog.getMsg('Hello {$placeholder}', {'placeholder': 'world'});
   * </code>
   *
   * @param {string} str Translatable string, places holders in the form {$foo}.
   * @param {Object<string, string>=} opt_values Maps place holder name to value.
   * @return {string} message with placeholders filled.
   */
  goog.getMsg = function (str, opt_values) {
    if (opt_values) {
      str = str.replace(/\{\$([^}]+)}/g, function (match, key) {
        return opt_values != null && key in opt_values ? opt_values[key] : match;
      });
    }
    return str;
  };

  /**
   * Gets a localized message. If the message does not have a translation, gives a
   * fallback message.
   *
   * This is useful when introducing a new message that has not yet been
   * translated into all languages.
   *
   * This function is a compiler primitive. Must be used in the form:
   * <code>var x = goog.getMsgWithFallback(MSG_A, MSG_B);</code>
   * where MSG_A and MSG_B were initialized with goog.getMsg.
   *
   * @param {string} a The preferred message.
   * @param {string} b The fallback message.
   * @return {string} The best translated message.
   */
  goog.getMsgWithFallback = function (a, b) {
    return a;
  };

  /**
   * Exposes an unobfuscated global namespace path for the given object.
   * Note that fields of the exported object *will* be obfuscated, unless they are
   * exported in turn via this function or goog.exportProperty.
   *
   * Also handy for making public items that are defined in anonymous closures.
   *
   * ex. goog.exportSymbol('public.path.Foo', Foo);
   *
   * ex. goog.exportSymbol('public.path.Foo.staticFunction', Foo.staticFunction);
   *     public.path.Foo.staticFunction();
   *
   * ex. goog.exportSymbol('public.path.Foo.prototype.myMethod',
   *                       Foo.prototype.myMethod);
   *     new public.path.Foo().myMethod();
   *
   * @param {string} publicPath Unobfuscated name to export.
   * @param {*} object Object the name should point to.
   * @param {Object=} opt_objectToExportTo The object to add the path to; default
   *     is goog.global.
   */
  goog.exportSymbol = function (publicPath, object, opt_objectToExportTo) {
    goog.exportPath_(publicPath, object, opt_objectToExportTo);
  };

  /**
   * Exports a property unobfuscated into the object's namespace.
   * ex. goog.exportProperty(Foo, 'staticFunction', Foo.staticFunction);
   * ex. goog.exportProperty(Foo.prototype, 'myMethod', Foo.prototype.myMethod);
   * @param {Object} object Object whose static property is being exported.
   * @param {string} publicName Unobfuscated name to export.
   * @param {*} symbol Object the name should point to.
   */
  goog.exportProperty = function (object, publicName, symbol) {
    object[publicName] = symbol;
  };

  /**
   * Inherit the prototype methods from one constructor into another.
   *
   * Usage:
   * <pre>
   * function ParentClass(a, b) { }
   * ParentClass.prototype.foo = function(a) { };
   *
   * function ChildClass(a, b, c) {
   *   ChildClass.base(this, 'constructor', a, b);
   * }
   * goog.inherits(ChildClass, ParentClass);
   *
   * var child = new ChildClass('a', 'b', 'see');
   * child.foo(); // This works.
   * </pre>
   *
   * @param {!Function} childCtor Child class.
   * @param {!Function} parentCtor Parent class.
   */
  goog.inherits = function (childCtor, parentCtor) {
    /** @constructor */
    function tempCtor() {}
    tempCtor.prototype = parentCtor.prototype;
    childCtor.superClass_ = parentCtor.prototype;
    childCtor.prototype = new tempCtor();
    /** @override */
    childCtor.prototype.constructor = childCtor;

    /**
     * Calls superclass constructor/method.
     *
     * This function is only available if you use goog.inherits to
     * express inheritance relationships between classes.
     *
     * NOTE: This is a replacement for goog.base and for superClass_
     * property defined in childCtor.
     *
     * @param {!Object} me Should always be "this".
     * @param {string} methodName The method name to call. Calling
     *     superclass constructor can be done with the special string
     *     'constructor'.
     * @param {...*} var_args The arguments to pass to superclass
     *     method/constructor.
     * @return {*} The return value of the superclass method/constructor.
     */
    childCtor.base = function (me, methodName, var_args) {
      // Copying using loop to avoid deop due to passing arguments object to
      // function. This is faster in many JS engines as of late 2014.
      var args = new Array(arguments.length - 2);
      for (var i = 2; i < arguments.length; i++) {
        args[i - 2] = arguments[i];
      }
      return parentCtor.prototype[methodName].apply(me, args);
    };
  };

  /**
   * Call up to the superclass.
   *
   * If this is called from a constructor, then this calls the superclass
   * constructor with arguments 1-N.
   *
   * If this is called from a prototype method, then you must pass the name of the
   * method as the second argument to this function. If you do not, you will get a
   * runtime error. This calls the superclass' method with arguments 2-N.
   *
   * This function only works if you use goog.inherits to express inheritance
   * relationships between your classes.
   *
   * This function is a compiler primitive. At compile-time, the compiler will do
   * macro expansion to remove a lot of the extra overhead that this function
   * introduces. The compiler will also enforce a lot of the assumptions that this
   * function makes, and treat it as a compiler error if you break them.
   *
   * @param {!Object} me Should always be "this".
   * @param {*=} opt_methodName The method name if calling a super method.
   * @param {...*} var_args The rest of the arguments.
   * @return {*} The return value of the superclass method.
   * @suppress {es5Strict} This method can not be used in strict mode, but
   *     all Closure Library consumers must depend on this file.
   */
  goog.base = function (me, opt_methodName, var_args) {
    var caller = arguments.callee.caller;

    if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !caller) {
      throw Error('arguments.caller not defined.  goog.base() cannot be used ' + 'with strict mode code. See ' + 'http://www.ecma-international.org/ecma-262/5.1/#sec-C');
    }

    if (caller.superClass_) {
      // Copying using loop to avoid deop due to passing arguments object to
      // function. This is faster in many JS engines as of late 2014.
      var ctorArgs = new Array(arguments.length - 1);
      for (var i = 1; i < arguments.length; i++) {
        ctorArgs[i - 1] = arguments[i];
      }
      // This is a constructor. Call the superclass constructor.
      return caller.superClass_.constructor.apply(me, ctorArgs);
    }

    // Copying using loop to avoid deop due to passing arguments object to
    // function. This is faster in many JS engines as of late 2014.
    var args = new Array(arguments.length - 2);
    for (var i = 2; i < arguments.length; i++) {
      args[i - 2] = arguments[i];
    }
    var foundCaller = false;
    for (var ctor = me.constructor; ctor; ctor = ctor.superClass_ && ctor.superClass_.constructor) {
      if (ctor.prototype[opt_methodName] === caller) {
        foundCaller = true;
      } else if (foundCaller) {
        return ctor.prototype[opt_methodName].apply(me, args);
      }
    }

    // If we did not find the caller in the prototype chain, then one of two
    // things happened:
    // 1) The caller is an instance method.
    // 2) This method was not called by the right caller.
    if (me[opt_methodName] === caller) {
      return me.constructor.prototype[opt_methodName].apply(me, args);
    } else {
      throw Error('goog.base called from a method of one name ' + 'to a method of a different name');
    }
  };

  /**
   * Allow for aliasing within scope functions.  This function exists for
   * uncompiled code - in compiled code the calls will be inlined and the aliases
   * applied.  In uncompiled code the function is simply run since the aliases as
   * written are valid JavaScript.
   *
   *
   * @param {function()} fn Function to call.  This function can contain aliases
   *     to namespaces (e.g. "var dom = goog.dom") or classes
   *     (e.g. "var Timer = goog.Timer").
   */
  goog.scope = function (fn) {
    fn.call(goog.global);
  };

  /*
   * To support uncompiled, strict mode bundles that use eval to divide source
   * like so:
   *    eval('someSource;//# sourceUrl sourcefile.js');
   * We need to export the globally defined symbols "goog" and "COMPILED".
   * Exporting "goog" breaks the compiler optimizations, so we required that
   * be defined externally.
   * NOTE: We don't use goog.exportSymbol here because we don't want to trigger
   * extern generation when that compiler option is enabled.
   */
  if (!COMPILED) {
    goog.global['COMPILED'] = COMPILED;
  }

  goog.provide('goog.string');

  /**
   * Does simple python-style string substitution.
   * subs("foo%s hot%s", "bar", "dog") becomes "foobar hotdog".
   * @param {string} str The string containing the pattern.
   * @param {...*} var_args The items to substitute into the pattern.
   * @return {string} A copy of {@code str} in which each occurrence of
   *     {@code %s} has been replaced an argument from {@code var_args}.
   */
  goog.string.subs = function (str, var_args) {
    var splitParts = str.split('%s');
    var returnString = '';

    var subsArguments = Array.prototype.slice.call(arguments, 1);
    while (subsArguments.length &&
    // Replace up to the last split part. We are inserting in the
    // positions between split parts.
    splitParts.length > 1) {
      returnString += splitParts.shift() + subsArguments.shift();
    }

    return returnString + splitParts.join('%s'); // Join unused '%s'
  };

  /**
   * Regular expression that matches an ampersand, for use in escaping.
   * @const {!RegExp}
   * @private
   */
  goog.string.AMP_RE_ = /&/g;

  /**
   * Regular expression that matches a less than sign, for use in escaping.
   * @const {!RegExp}
   * @private
   */
  goog.string.LT_RE_ = /</g;

  /**
   * Regular expression that matches a greater than sign, for use in escaping.
   * @const {!RegExp}
   * @private
   */
  goog.string.GT_RE_ = />/g;

  /**
   * Regular expression that matches a double quote, for use in escaping.
   * @const {!RegExp}
   * @private
   */
  goog.string.QUOT_RE_ = /"/g;

  /**
   * Regular expression that matches a single quote, for use in escaping.
   * @const {!RegExp}
   * @private
   */
  goog.string.SINGLE_QUOTE_RE_ = /'/g;

  /**
   * Regular expression that matches null character, for use in escaping.
   * @const {!RegExp}
   * @private
   */
  goog.string.NULL_RE_ = /\x00/g;

  /**
   * Regular expression that matches a lowercase letter "e", for use in escaping.
   * @const {!RegExp}
   * @private
   */
  goog.string.E_RE_ = /e/g;

  /**
   * Regular expression that matches any character that needs to be escaped.
   * @const {!RegExp}
   * @private
   */
  goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;

  /**
   * Unescapes an HTML string.
   *
   * @param {string} str The string to unescape.
   * @return {string} An unescaped copy of {@code str}.
   */
  goog.string.unescapeEntities = function (str) {
    if (goog.string.contains(str, '&')) {
      // We are careful not to use a DOM if we do not have one or we explicitly
      // requested non-DOM html unescaping.
      if (!goog.string.FORCE_NON_DOM_HTML_UNESCAPING && 'document' in goog.global) {
        return goog.string.unescapeEntitiesUsingDom_(str);
      } else {
        // Fall back on pure XML entities
        return goog.string.unescapePureXmlEntities_(str);
      }
    }
    return str;
  };

  /**
   * Unescapes an HTML string using a DOM to resolve non-XML, non-numeric
   * entities. This function is XSS-safe and whitespace-preserving.
   * @private
   * @param {string} str The string to unescape.
   * @param {Document=} opt_document An optional document to use for creating
   *     elements. If this is not specified then the default window.document
   *     will be used.
   * @return {string} The unescaped {@code str} string.
   */
  goog.string.unescapeEntitiesUsingDom_ = function (str, opt_document) {
    /** @type {!Object<string, string>} */
    var seen = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"' };
    var div;
    if (opt_document) {
      div = opt_document.createElement('div');
    } else {
      div = goog.global.document.createElement('div');
    }
    // Match as many valid entity characters as possible. If the actual entity
    // happens to be shorter, it will still work as innerHTML will return the
    // trailing characters unchanged. Since the entity characters do not include
    // open angle bracket, there is no chance of XSS from the innerHTML use.
    // Since no whitespace is passed to innerHTML, whitespace is preserved.
    return str.replace(goog.string.HTML_ENTITY_PATTERN_, function (s, entity) {
      // Check for cached entity.
      var value = seen[s];
      if (value) {
        return value;
      }
      // Check for numeric entity.
      if (entity.charAt(0) == '#') {
        // Prefix with 0 so that hex entities (e.g. &#x10) parse as hex numbers.
        var n = Number('0' + entity.substr(1));
        if (!isNaN(n)) {
          value = String.fromCharCode(n);
        }
      }
      // Fall back to innerHTML otherwise.
      if (!value) {
        // Append a non-entity character to avoid a bug in Webkit that parses
        // an invalid entity at the end of innerHTML text as the empty string.
        div.innerHTML = s + ' ';
        // Then remove the trailing character from the result.
        value = div.firstChild.nodeValue.slice(0, -1);
      }
      // Cache and return.
      return seen[s] = value;
    });
  };

  /**
   * Unescapes XML entities.
   * @private
   * @param {string} str The string to unescape.
   * @return {string} An unescaped copy of {@code str}.
   */
  goog.string.unescapePureXmlEntities_ = function (str) {
    return str.replace(/&([^;]+);/g, function (s, entity) {
      switch (entity) {
        case 'amp':
          return '&';
        case 'lt':
          return '<';
        case 'gt':
          return '>';
        case 'quot':
          return '"';
        default:
          if (entity.charAt(0) == '#') {
            // Prefix with 0 so that hex entities (e.g. &#x10) parse as hex.
            var n = Number('0' + entity.substr(1));
            if (!isNaN(n)) {
              return String.fromCharCode(n);
            }
          }
          // For invalid entities we just return the entity
          return s;
      }
    });
  };

  /**
   * Regular expression that matches an HTML entity.
   * See also HTML5: Tokenization / Tokenizing character references.
   * @private
   * @type {!RegExp}
   */
  goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;

  /**
   * Determines whether a string contains a substring.
   * @param {string} str The string to search.
   * @param {string} subString The substring to search for.
   * @return {boolean} Whether {@code str} contains {@code subString}.
   */
  goog.string.contains = function (str, subString) {
    return str.indexOf(subString) != -1;
  };

  /**
   * Escapes double quote '"' and single quote '\'' characters in addition to
   * '&', '<', and '>' so that a string can be included in an HTML tag attribute
   * value within double or single quotes.
   *
   * It should be noted that > doesn't need to be escaped for the HTML or XML to
   * be valid, but it has been decided to escape it for consistency with other
   * implementations.
   *
   * With goog.string.DETECT_DOUBLE_ESCAPING, this function escapes also the
   * lowercase letter "e".
   *
   * NOTE(user):
   * HtmlEscape is often called during the generation of large blocks of HTML.
   * Using statics for the regular expressions and strings is an optimization
   * that can more than half the amount of time IE spends in this function for
   * large apps, since strings and regexes both contribute to GC allocations.
   *
   * Testing for the presence of a character before escaping increases the number
   * of function calls, but actually provides a speed increase for the average
   * case -- since the average case often doesn't require the escaping of all 4
   * characters and indexOf() is much cheaper than replace().
   * The worst case does suffer slightly from the additional calls, therefore the
   * opt_isLikelyToContainHtmlChars option has been included for situations
   * where all 4 HTML entities are very likely to be present and need escaping.
   *
   * Some benchmarks (times tended to fluctuate +-0.05ms):
   *                                     FireFox                     IE6
   * (no chars / average (mix of cases) / all 4 chars)
   * no checks                     0.13 / 0.22 / 0.22         0.23 / 0.53 / 0.80
   * indexOf                       0.08 / 0.17 / 0.26         0.22 / 0.54 / 0.84
   * indexOf + re test             0.07 / 0.17 / 0.28         0.19 / 0.50 / 0.85
   *
   * An additional advantage of checking if replace actually needs to be called
   * is a reduction in the number of object allocations, so as the size of the
   * application grows the difference between the various methods would increase.
   *
   * @param {string} str string to be escaped.
   * @param {boolean=} opt_isLikelyToContainHtmlChars Don't perform a check to see
   *     if the character needs replacing - use this option if you expect each of
   *     the characters to appear often. Leave false if you expect few html
   *     characters to occur in your strings, such as if you are escaping HTML.
   * @return {string} An escaped copy of {@code str}.
   */
  goog.string.htmlEscape = function (str, opt_isLikelyToContainHtmlChars) {

    if (opt_isLikelyToContainHtmlChars) {
      str = str.replace(goog.string.AMP_RE_, '&amp;').replace(goog.string.LT_RE_, '&lt;').replace(goog.string.GT_RE_, '&gt;').replace(goog.string.QUOT_RE_, '&quot;').replace(goog.string.SINGLE_QUOTE_RE_, '&#39;').replace(goog.string.NULL_RE_, '&#0;');
      if (goog.string.DETECT_DOUBLE_ESCAPING) {
        str = str.replace(goog.string.E_RE_, '&#101;');
      }
      return str;
    } else {
      // quick test helps in the case when there are no chars to replace, in
      // worst case this makes barely a difference to the time taken
      if (!goog.string.ALL_RE_.test(str)) return str;

      // str.indexOf is faster than regex.test in this case
      if (str.indexOf('&') != -1) {
        str = str.replace(goog.string.AMP_RE_, '&amp;');
      }
      if (str.indexOf('<') != -1) {
        str = str.replace(goog.string.LT_RE_, '&lt;');
      }
      if (str.indexOf('>') != -1) {
        str = str.replace(goog.string.GT_RE_, '&gt;');
      }
      if (str.indexOf('"') != -1) {
        str = str.replace(goog.string.QUOT_RE_, '&quot;');
      }
      if (str.indexOf('\'') != -1) {
        str = str.replace(goog.string.SINGLE_QUOTE_RE_, '&#39;');
      }
      if (str.indexOf('\x00') != -1) {
        str = str.replace(goog.string.NULL_RE_, '&#0;');
      }
      if (goog.string.DETECT_DOUBLE_ESCAPING && str.indexOf('e') != -1) {
        str = str.replace(goog.string.E_RE_, '&#101;');
      }
      return str;
    }
  };

  goog.debug = {};

  /**
   * Returns the type of a value. If a constructor is passed, and a suitable
   * string cannot be found, 'unknown type name' will be returned.
   *
   * <p>Forked rather than moved from {@link goog.asserts.getType_}
   * to avoid adding a dependency to goog.asserts.
   * @param {*} value A constructor, object, or primitive.
   * @return {string} The best display name for the value, or 'unknown type name'.
   */
  goog.debug.runtimeType = function (value) {
    if (value instanceof Function) {
      return value.displayName || value.name || 'unknown type name';
    } else if (value instanceof Object) {
      return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
    } else {
      return value === null ? 'null' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
    }
  };

  // Copyright 2009 The Closure Library Authors. All Rights Reserved.
  //
  // Licensed under the Apache License, Version 2.0 (the "License");
  // you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at
  //
  //      http://www.apache.org/licenses/LICENSE-2.0
  //
  // Unless required by applicable law or agreed to in writing, software
  // distributed under the License is distributed on an "AS-IS" BASIS,
  // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // See the License for the specific language governing permissions and
  // limitations under the License.

  /**
   * @fileoverview Provides a base class for custom Error objects such that the
   * stack is correctly maintained.
   *
   * You should never need to throw goog.debug.Error(msg) directly, Error(msg) is
   * sufficient.
   *
   */

  /**
   * Base class for custom error objects.
   * @param {*=} opt_msg The message associated with the error.
   * @constructor
   * @extends {Error}
   */
  goog.debug.Error = function (opt_msg) {

    // Attempt to ensure there is a stack trace.
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, goog.debug.Error);
    } else {
      var stack = new Error().stack;
      if (stack) {
        this.stack = stack;
      }
    }

    if (opt_msg) {
      this.message = String(opt_msg);
    }

    /**
     * Whether to report this error to the server. Setting this to false will
     * cause the error reporter to not report the error back to the server,
     * which can be useful if the client knows that the error has already been
     * logged on the server.
     * @type {boolean}
     */
    this.reportErrorToServer = true;
  };
  goog.inherits(goog.debug.Error, Error);

  /** @override */
  goog.debug.Error.prototype.name = 'CustomError';

  /**
   * @fileoverview Definition of goog.dom.NodeType.
   */

  goog.dom = {};

  /**
   * Constants for the nodeType attribute in the Node interface.
   *
   * These constants match those specified in the Node interface. These are
   * usually present on the Node object in recent browsers, but not in older
   * browsers (specifically, early IEs) and thus are given here.
   *
   * In some browsers (early IEs), these are not defined on the Node object,
   * so they are provided here.
   *
   * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
   * @enum {number}
   */
  goog.dom.NodeType = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA_SECTION: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12
  };

  // Copyright 2007 The Closure Library Authors. All Rights Reserved.
  //
  // Licensed under the Apache License, Version 2.0 (the "License");
  // you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at
  //
  //      http://www.apache.org/licenses/LICENSE-2.0
  //
  // Unless required by applicable law or agreed to in writing, software
  // distributed under the License is distributed on an "AS-IS" BASIS,
  // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // See the License for the specific language governing permissions and
  // limitations under the License.

  /**
   * @fileoverview Utility functions for supporting Bidi issues.
   */

  /**
   * Namespace for bidi supporting functions.
   */
  goog.provide('goog.i18n.bidi');
  goog.provide('goog.i18n.bidi.Dir');
  goog.provide('goog.i18n.bidi.DirectionalString');
  goog.provide('goog.i18n.bidi.Format');

  /**
   * @define {boolean} FORCE_RTL forces the {@link goog.i18n.bidi.IS_RTL} constant
   * to say that the current locale is a RTL locale.  This should only be used
   * if you want to override the default behavior for deciding whether the
   * current locale is RTL or not.
   *
   * {@see goog.i18n.bidi.IS_RTL}
   */
  goog.define('goog.i18n.bidi.FORCE_RTL', false);

  /**
   * Constant that defines whether or not the current locale is a RTL locale.
   * If {@link goog.i18n.bidi.FORCE_RTL} is not true, this constant will default
   * to check that {@link goog.LOCALE} is one of a few major RTL locales.
   *
   * <p>This is designed to be a maximally efficient compile-time constant. For
   * example, for the default goog.LOCALE, compiling
   * "if (goog.i18n.bidi.IS_RTL) alert('rtl') else {}" should produce no code. It
   * is this design consideration that limits the implementation to only
   * supporting a few major RTL locales, as opposed to the broader repertoire of
   * something like goog.i18n.bidi.isRtlLanguage.
   *
   * <p>Since this constant refers to the directionality of the locale, it is up
   * to the caller to determine if this constant should also be used for the
   * direction of the UI.
   *
   * {@see goog.LOCALE}
   *
   * @type {boolean}
   *
   * TODO(user): write a test that checks that this is a compile-time constant.
   */
  goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || (goog.LOCALE.substring(0, 2).toLowerCase() == 'ar' || goog.LOCALE.substring(0, 2).toLowerCase() == 'fa' || goog.LOCALE.substring(0, 2).toLowerCase() == 'he' || goog.LOCALE.substring(0, 2).toLowerCase() == 'iw' || goog.LOCALE.substring(0, 2).toLowerCase() == 'ps' || goog.LOCALE.substring(0, 2).toLowerCase() == 'sd' || goog.LOCALE.substring(0, 2).toLowerCase() == 'ug' || goog.LOCALE.substring(0, 2).toLowerCase() == 'ur' || goog.LOCALE.substring(0, 2).toLowerCase() == 'yi') && (goog.LOCALE.length == 2 || goog.LOCALE.substring(2, 3) == '-' || goog.LOCALE.substring(2, 3) == '_') || goog.LOCALE.length >= 3 && goog.LOCALE.substring(0, 3).toLowerCase() == 'ckb' && (goog.LOCALE.length == 3 || goog.LOCALE.substring(3, 4) == '-' || goog.LOCALE.substring(3, 4) == '_');

  /**
   * Unicode formatting characters and directionality string constants.
   * @enum {string}
   */
  goog.i18n.bidi.Format = {
    /** Unicode "Left-To-Right Embedding" (LRE) character. */
    LRE: '\u202A',
    /** Unicode "Right-To-Left Embedding" (RLE) character. */
    RLE: '\u202B',
    /** Unicode "Pop Directional Formatting" (PDF) character. */
    PDF: '\u202C',
    /** Unicode "Left-To-Right Mark" (LRM) character. */
    LRM: '\u200E',
    /** Unicode "Right-To-Left Mark" (RLM) character. */
    RLM: '\u200F'
  };

  /**
   * Directionality enum.
   * @enum {number}
   */
  goog.i18n.bidi.Dir = {
    /**
     * Left-to-right.
     */
    LTR: 1,

    /**
     * Right-to-left.
     */
    RTL: -1,

    /**
     * Neither left-to-right nor right-to-left.
     */
    NEUTRAL: 0
  };

  /**
   * 'right' string constant.
   * @type {string}
   */
  goog.i18n.bidi.RIGHT = 'right';

  /**
   * 'left' string constant.
   * @type {string}
   */
  goog.i18n.bidi.LEFT = 'left';

  /**
   * 'left' if locale is RTL, 'right' if not.
   * @type {string}
   */
  goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;

  /**
   * 'right' if locale is RTL, 'left' if not.
   * @type {string}
   */
  goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;

  /**
   * Convert a directionality given in various formats to a goog.i18n.bidi.Dir
   * constant. Useful for interaction with different standards of directionality
   * representation.
   *
   * @param {goog.i18n.bidi.Dir|number|boolean|null} givenDir Directionality given
   *     in one of the following formats:
   *     1. A goog.i18n.bidi.Dir constant.
   *     2. A number (positive = LTR, negative = RTL, 0 = neutral).
   *     3. A boolean (true = RTL, false = LTR).
   *     4. A null for unknown directionality.
   * @param {boolean=} opt_noNeutral Whether a givenDir of zero or
   *     goog.i18n.bidi.Dir.NEUTRAL should be treated as null, i.e. unknown, in
   *     order to preserve legacy behavior.
   * @return {?goog.i18n.bidi.Dir} A goog.i18n.bidi.Dir constant matching the
   *     given directionality. If given null, returns null (i.e. unknown).
   */
  goog.i18n.bidi.toDir = function (givenDir, opt_noNeutral) {
    if (typeof givenDir == 'number') {
      // This includes the non-null goog.i18n.bidi.Dir case.
      return givenDir > 0 ? goog.i18n.bidi.Dir.LTR : givenDir < 0 ? goog.i18n.bidi.Dir.RTL : opt_noNeutral ? null : goog.i18n.bidi.Dir.NEUTRAL;
    } else if (givenDir == null) {
      return null;
    } else {
      // Must be typeof givenDir == 'boolean'.
      return givenDir ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
    }
  };

  /**
   * A practical pattern to identify strong LTR characters. This pattern is not
   * theoretically correct according to the Unicode standard. It is simplified for
   * performance and small code size.
   * @type {string}
   * @private
   */
  goog.i18n.bidi.ltrChars_ = 'A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF' + '\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF';

  /**
   * A practical pattern to identify strong RTL character. This pattern is not
   * theoretically correct according to the Unicode standard. It is simplified
   * for performance and small code size.
   * @type {string}
   * @private
   */
  goog.i18n.bidi.rtlChars_ = '\u0591-\u06EF\u06FA-\u07FF\u200F\uFB1D-\uFDFF\uFE70-\uFEFC';

  /**
   * Simplified regular expression for an HTML tag (opening or closing) or an HTML
   * escape. We might want to skip over such expressions when estimating the text
   * directionality.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;

  /**
   * Returns the input text with spaces instead of HTML tags or HTML escapes, if
   * opt_isStripNeeded is true. Else returns the input as is.
   * Useful for text directionality estimation.
   * Note: the function should not be used in other contexts; it is not 100%
   * correct, but rather a good-enough implementation for directionality
   * estimation purposes.
   * @param {string} str The given string.
   * @param {boolean=} opt_isStripNeeded Whether to perform the stripping.
   *     Default: false (to retain consistency with calling functions).
   * @return {string} The given string cleaned of HTML tags / escapes.
   * @private
   */
  goog.i18n.bidi.stripHtmlIfNeeded_ = function (str, opt_isStripNeeded) {
    return opt_isStripNeeded ? str.replace(goog.i18n.bidi.htmlSkipReg_, '') : str;
  };

  /**
   * Regular expression to check for RTL characters.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.rtlCharReg_ = new RegExp('[' + goog.i18n.bidi.rtlChars_ + ']');

  /**
   * Regular expression to check for LTR characters.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.ltrCharReg_ = new RegExp('[' + goog.i18n.bidi.ltrChars_ + ']');

  /**
   * Test whether the given string has any RTL characters in it.
   * @param {string} str The given string that need to be tested.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether the string contains RTL characters.
   */
  goog.i18n.bidi.hasAnyRtl = function (str, opt_isHtml) {
    return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
  };

  /**
   * Test whether the given string has any RTL characters in it.
   * @param {string} str The given string that need to be tested.
   * @return {boolean} Whether the string contains RTL characters.
   * @deprecated Use hasAnyRtl.
   */
  goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;

  /**
   * Test whether the given string has any LTR characters in it.
   * @param {string} str The given string that need to be tested.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether the string contains LTR characters.
   */
  goog.i18n.bidi.hasAnyLtr = function (str, opt_isHtml) {
    return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
  };

  /**
   * Regular expression pattern to check if the first character in the string
   * is LTR.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.ltrRe_ = new RegExp('^[' + goog.i18n.bidi.ltrChars_ + ']');

  /**
   * Regular expression pattern to check if the first character in the string
   * is RTL.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.rtlRe_ = new RegExp('^[' + goog.i18n.bidi.rtlChars_ + ']');

  /**
   * Check if the first character in the string is RTL or not.
   * @param {string} str The given string that need to be tested.
   * @return {boolean} Whether the first character in str is an RTL char.
   */
  goog.i18n.bidi.isRtlChar = function (str) {
    return goog.i18n.bidi.rtlRe_.test(str);
  };

  /**
   * Check if the first character in the string is LTR or not.
   * @param {string} str The given string that need to be tested.
   * @return {boolean} Whether the first character in str is an LTR char.
   */
  goog.i18n.bidi.isLtrChar = function (str) {
    return goog.i18n.bidi.ltrRe_.test(str);
  };

  /**
   * Check if the first character in the string is neutral or not.
   * @param {string} str The given string that need to be tested.
   * @return {boolean} Whether the first character in str is a neutral char.
   */
  goog.i18n.bidi.isNeutralChar = function (str) {
    return !goog.i18n.bidi.isLtrChar(str) && !goog.i18n.bidi.isRtlChar(str);
  };

  /**
   * Regular expressions to check if a piece of text is of LTR directionality
   * on first character with strong directionality.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.ltrDirCheckRe_ = new RegExp('^[^' + goog.i18n.bidi.rtlChars_ + ']*[' + goog.i18n.bidi.ltrChars_ + ']');

  /**
   * Regular expressions to check if a piece of text is of RTL directionality
   * on first character with strong directionality.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.rtlDirCheckRe_ = new RegExp('^[^' + goog.i18n.bidi.ltrChars_ + ']*[' + goog.i18n.bidi.rtlChars_ + ']');

  /**
   * Check whether the first strongly directional character (if any) is RTL.
   * @param {string} str String being checked.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether RTL directionality is detected using the first
   *     strongly-directional character method.
   */
  goog.i18n.bidi.startsWithRtl = function (str, opt_isHtml) {
    return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
  };

  /**
   * Check whether the first strongly directional character (if any) is RTL.
   * @param {string} str String being checked.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether RTL directionality is detected using the first
   *     strongly-directional character method.
   * @deprecated Use startsWithRtl.
   */
  goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;

  /**
   * Check whether the first strongly directional character (if any) is LTR.
   * @param {string} str String being checked.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether LTR directionality is detected using the first
   *     strongly-directional character method.
   */
  goog.i18n.bidi.startsWithLtr = function (str, opt_isHtml) {
    return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
  };

  /**
   * Check whether the first strongly directional character (if any) is LTR.
   * @param {string} str String being checked.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether LTR directionality is detected using the first
   *     strongly-directional character method.
   * @deprecated Use startsWithLtr.
   */
  goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;

  /**
   * Regular expression to check if a string looks like something that must
   * always be LTR even in RTL text, e.g. a URL. When estimating the
   * directionality of text containing these, we treat these as weakly LTR,
   * like numbers.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;

  /**
   * Check whether the input string either contains no strongly directional
   * characters or looks like a url.
   * @param {string} str String being checked.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether neutral directionality is detected.
   */
  goog.i18n.bidi.isNeutralText = function (str, opt_isHtml) {
    str = goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml);
    return goog.i18n.bidi.isRequiredLtrRe_.test(str) || !goog.i18n.bidi.hasAnyLtr(str) && !goog.i18n.bidi.hasAnyRtl(str);
  };

  /**
   * Regular expressions to check if the last strongly-directional character in a
   * piece of text is LTR.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp('[' + goog.i18n.bidi.ltrChars_ + '][^' + goog.i18n.bidi.rtlChars_ + ']*$');

  /**
   * Regular expressions to check if the last strongly-directional character in a
   * piece of text is RTL.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp('[' + goog.i18n.bidi.rtlChars_ + '][^' + goog.i18n.bidi.ltrChars_ + ']*$');

  /**
   * Check if the exit directionality a piece of text is LTR, i.e. if the last
   * strongly-directional character in the string is LTR.
   * @param {string} str String being checked.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether LTR exit directionality was detected.
   */
  goog.i18n.bidi.endsWithLtr = function (str, opt_isHtml) {
    return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
  };

  /**
   * Check if the exit directionality a piece of text is LTR, i.e. if the last
   * strongly-directional character in the string is LTR.
   * @param {string} str String being checked.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether LTR exit directionality was detected.
   * @deprecated Use endsWithLtr.
   */
  goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;

  /**
   * Check if the exit directionality a piece of text is RTL, i.e. if the last
   * strongly-directional character in the string is RTL.
   * @param {string} str String being checked.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether RTL exit directionality was detected.
   */
  goog.i18n.bidi.endsWithRtl = function (str, opt_isHtml) {
    return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
  };

  /**
   * Check if the exit directionality a piece of text is RTL, i.e. if the last
   * strongly-directional character in the string is RTL.
   * @param {string} str String being checked.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether RTL exit directionality was detected.
   * @deprecated Use endsWithRtl.
   */
  goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;

  /**
   * A regular expression for matching right-to-left language codes.
   * See {@link #isRtlLanguage} for the design.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.rtlLocalesRe_ = new RegExp('^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|' + '.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))' + '(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)', 'i');

  /**
   * Check if a BCP 47 / III language code indicates an RTL language, i.e. either:
   * - a language code explicitly specifying one of the right-to-left scripts,
   *   e.g. "az-Arab", or<p>
   * - a language code specifying one of the languages normally written in a
   *   right-to-left script, e.g. "fa" (Farsi), except ones explicitly specifying
   *   Latin or Cyrillic script (which are the usual LTR alternatives).<p>
   * The list of right-to-left scripts appears in the 100-199 range in
   * http://www.unicode.org/iso15924/iso15924-num.html, of which Arabic and
   * Hebrew are by far the most widely used. We also recognize Thaana, N'Ko, and
   * Tifinagh, which also have significant modern usage. The rest (Syriac,
   * Samaritan, Mandaic, etc.) seem to have extremely limited or no modern usage
   * and are not recognized to save on code size.
   * The languages usually written in a right-to-left script are taken as those
   * with Suppress-Script: Hebr|Arab|Thaa|Nkoo|Tfng  in
   * http://www.iana.org/assignments/language-subtag-registry,
   * as well as Central (or Sorani) Kurdish (ckb), Sindhi (sd) and Uyghur (ug).
   * Other subtags of the language code, e.g. regions like EG (Egypt), are
   * ignored.
   * @param {string} lang BCP 47 (a.k.a III) language code.
   * @return {boolean} Whether the language code is an RTL language.
   */
  goog.i18n.bidi.isRtlLanguage = function (lang) {
    return goog.i18n.bidi.rtlLocalesRe_.test(lang);
  };

  /**
   * Regular expression for bracket guard replacement in text.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;

  /**
   * Apply bracket guard using LRM and RLM. This is to address the problem of
   * messy bracket display frequently happens in RTL layout.
   * This function works for plain text, not for HTML. In HTML, the opening
   * bracket might be in a different context than the closing bracket (such as
   * an attribute value).
   * @param {string} s The string that need to be processed.
   * @param {boolean=} opt_isRtlContext specifies default direction (usually
   *     direction of the UI).
   * @return {string} The processed string, with all bracket guarded.
   */
  goog.i18n.bidi.guardBracketInText = function (s, opt_isRtlContext) {
    var useRtl = opt_isRtlContext === undefined ? goog.i18n.bidi.hasAnyRtl(s) : opt_isRtlContext;
    var mark = useRtl ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
    return s.replace(goog.i18n.bidi.bracketGuardTextRe_, mark + '$&' + mark);
  };

  /**
   * Enforce the html snippet in RTL directionality regardless overall context.
   * If the html piece was enclosed by tag, dir will be applied to existing
   * tag, otherwise a span tag will be added as wrapper. For this reason, if
   * html snippet start with with tag, this tag must enclose the whole piece. If
   * the tag already has a dir specified, this new one will override existing
   * one in behavior (tested on FF and IE).
   * @param {string} html The string that need to be processed.
   * @return {string} The processed string, with directionality enforced to RTL.
   */
  goog.i18n.bidi.enforceRtlInHtml = function (html) {
    if (html.charAt(0) == '<') {
      return html.replace(/<\w+/, '$& dir=rtl');
    }
    // '\n' is important for FF so that it won't incorrectly merge span groups
    return '\n<span dir=rtl>' + html + '</span>';
  };

  /**
   * Enforce RTL on both end of the given text piece using unicode BiDi formatting
   * characters RLE and PDF.
   * @param {string} text The piece of text that need to be wrapped.
   * @return {string} The wrapped string after process.
   */
  goog.i18n.bidi.enforceRtlInText = function (text) {
    return goog.i18n.bidi.Format.RLE + text + goog.i18n.bidi.Format.PDF;
  };

  /**
   * Enforce the html snippet in RTL directionality regardless overall context.
   * If the html piece was enclosed by tag, dir will be applied to existing
   * tag, otherwise a span tag will be added as wrapper. For this reason, if
   * html snippet start with with tag, this tag must enclose the whole piece. If
   * the tag already has a dir specified, this new one will override existing
   * one in behavior (tested on FF and IE).
   * @param {string} html The string that need to be processed.
   * @return {string} The processed string, with directionality enforced to RTL.
   */
  goog.i18n.bidi.enforceLtrInHtml = function (html) {
    if (html.charAt(0) == '<') {
      return html.replace(/<\w+/, '$& dir=ltr');
    }
    // '\n' is important for FF so that it won't incorrectly merge span groups
    return '\n<span dir=ltr>' + html + '</span>';
  };

  /**
   * Enforce LTR on both end of the given text piece using unicode BiDi formatting
   * characters LRE and PDF.
   * @param {string} text The piece of text that need to be wrapped.
   * @return {string} The wrapped string after process.
   */
  goog.i18n.bidi.enforceLtrInText = function (text) {
    return goog.i18n.bidi.Format.LRE + text + goog.i18n.bidi.Format.PDF;
  };

  /**
   * Regular expression to find dimensions such as "padding: .3 0.4ex 5px 6;"
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;

  /**
   * Regular expression for left.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.leftRe_ = /left/gi;

  /**
   * Regular expression for right.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.rightRe_ = /right/gi;

  /**
   * Placeholder regular expression for swapping.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.tempRe_ = /%%%%/g;

  /**
   * Swap location parameters and 'left'/'right' in CSS specification. The
   * processed string will be suited for RTL layout. Though this function can
   * cover most cases, there are always exceptions. It is suggested to put
   * those exceptions in separate group of CSS string.
   * @param {string} cssStr CSS spefication string.
   * @return {string} Processed CSS specification string.
   */
  goog.i18n.bidi.mirrorCSS = function (cssStr) {
    return cssStr.
    // reverse dimensions
    replace(goog.i18n.bidi.dimensionsRe_, ':$1 $4 $3 $2').replace(goog.i18n.bidi.leftRe_, '%%%%'). // swap left and right
    replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
  };

  /**
   * Regular expression for hebrew double quote substitution, finding quote
   * directly after hebrew characters.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;

  /**
   * Regular expression for hebrew single quote substitution, finding quote
   * directly after hebrew characters.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;

  /**
   * Replace the double and single quote directly after a Hebrew character with
   * GERESH and GERSHAYIM. In such case, most likely that's user intention.
   * @param {string} str String that need to be processed.
   * @return {string} Processed string with double/single quote replaced.
   */
  goog.i18n.bidi.normalizeHebrewQuote = function (str) {
    return str.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, '$1\u05F4').replace(goog.i18n.bidi.singleQuoteSubstituteRe_, '$1\u05F3');
  };

  /**
   * Regular expression to split a string into "words" for directionality
   * estimation based on relative word counts.
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.wordSeparatorRe_ = /\s+/;

  /**
   * Regular expression to check if a string contains any numerals. Used to
   * differentiate between completely neutral strings and those containing
   * numbers, which are weakly LTR.
   *
   * Native Arabic digits (\u0660 - \u0669) are not included because although they
   * do flow left-to-right inside a number, this is the case even if the  overall
   * directionality is RTL, and a mathematical expression using these digits is
   * supposed to flow right-to-left overall, including unary plus and minus
   * appearing to the right of a number, and this does depend on the overall
   * directionality being RTL. The digits used in Farsi (\u06F0 - \u06F9), on the
   * other hand, are included, since Farsi math (including unary plus and minus)
   * does flow left-to-right.
   *
   * @type {RegExp}
   * @private
   */
  goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;

  /**
   * This constant controls threshold of RTL directionality.
   * @type {number}
   * @private
   */
  goog.i18n.bidi.rtlDetectionThreshold_ = 0.40;

  /**
   * Estimates the directionality of a string based on relative word counts.
   * If the number of RTL words is above a certain percentage of the total number
   * of strongly directional words, returns RTL.
   * Otherwise, if any words are strongly or weakly LTR, returns LTR.
   * Otherwise, returns UNKNOWN, which is used to mean "neutral".
   * Numbers are counted as weakly LTR.
   * @param {string} str The string to be checked.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {goog.i18n.bidi.Dir} Estimated overall directionality of {@code str}.
   */
  goog.i18n.bidi.estimateDirection = function (str, opt_isHtml) {
    var rtlCount = 0;
    var totalCount = 0;
    var hasWeaklyLtr = false;
    var tokens = goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml).split(goog.i18n.bidi.wordSeparatorRe_);
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (goog.i18n.bidi.startsWithRtl(token)) {
        rtlCount++;
        totalCount++;
      } else if (goog.i18n.bidi.isRequiredLtrRe_.test(token)) {
        hasWeaklyLtr = true;
      } else if (goog.i18n.bidi.hasAnyLtr(token)) {
        totalCount++;
      } else if (goog.i18n.bidi.hasNumeralsRe_.test(token)) {
        hasWeaklyLtr = true;
      }
    }

    return totalCount == 0 ? hasWeaklyLtr ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : rtlCount / totalCount > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
  };

  /**
   * Check the directionality of a piece of text, return true if the piece of
   * text should be laid out in RTL direction.
   * @param {string} str The piece of text that need to be detected.
   * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
   *     Default: false.
   * @return {boolean} Whether this piece of text should be laid out in RTL.
   */
  goog.i18n.bidi.detectRtlDirectionality = function (str, opt_isHtml) {
    return goog.i18n.bidi.estimateDirection(str, opt_isHtml) == goog.i18n.bidi.Dir.RTL;
  };

  /**
   * Sets text input element's directionality and text alignment based on a
   * given directionality. Does nothing if the given directionality is unknown or
   * neutral.
   * @param {Element} element Input field element to set directionality to.
   * @param {goog.i18n.bidi.Dir|number|boolean|null} dir Desired directionality,
   *     given in one of the following formats:
   *     1. A goog.i18n.bidi.Dir constant.
   *     2. A number (positive = LRT, negative = RTL, 0 = neutral).
   *     3. A boolean (true = RTL, false = LTR).
   *     4. A null for unknown directionality.
   */
  goog.i18n.bidi.setElementDirAndAlign = function (element, dir) {
    if (element) {
      dir = goog.i18n.bidi.toDir(dir);
      if (dir) {
        element.style.textAlign = dir == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
        element.dir = dir == goog.i18n.bidi.Dir.RTL ? 'rtl' : 'ltr';
      }
    }
  };

  /**
   * Sets element dir based on estimated directionality of the given text.
   * @param {!Element} element
   * @param {string} text
   */
  goog.i18n.bidi.setElementDirByTextDirectionality = function (element, text) {
    switch (goog.i18n.bidi.estimateDirection(text)) {
      case goog.i18n.bidi.Dir.LTR:
        element.dir = 'ltr';
        break;
      case goog.i18n.bidi.Dir.RTL:
        element.dir = 'rtl';
        break;
      default:
        // Default for no direction, inherit from document.
        element.removeAttribute('dir');
    }
  };

  /**
   * Strings that have an (optional) known direction.
   *
   * Implementations of this interface are string-like objects that carry an
   * attached direction, if known.
   * @interface
   */
  goog.i18n.bidi.DirectionalString = function () {};

  /**
   * Interface marker of the DirectionalString interface.
   *
   * This property can be used to determine at runtime whether or not an object
   * implements this interface.  All implementations of this interface set this
   * property to {@code true}.
   * @type {boolean}
   */
  goog.i18n.bidi.DirectionalString.prototype.implementsGoogI18nBidiDirectionalString;

  /**
   * Retrieves this object's known direction (if any).
   * @return {?goog.i18n.bidi.Dir} The known direction. Null if unknown.
   */
  goog.i18n.bidi.DirectionalString.prototype.getDirection;

  // Copyright 2008 The Closure Library Authors. All Rights Reserved.
  //
  // Licensed under the Apache License, Version 2.0 (the "License");
  // you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at
  //
  //      http://www.apache.org/licenses/LICENSE-2.0
  //
  // Unless required by applicable law or agreed to in writing, software
  // distributed under the License is distributed on an "AS-IS" BASIS,
  // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // See the License for the specific language governing permissions and
  // limitations under the License.

  /**
   * @fileoverview Utilities to check the preconditions, postconditions and
   * invariants runtime.
   *
   * Methods in this package should be given special treatment by the compiler
   * for type-inference. For example, <code>goog.asserts.assert(foo)</code>
   * will restrict <code>foo</code> to a truthy value.
   *
   * The compiler has an option to disable asserts. So code like:
   * <code>
   * var x = goog.asserts.assert(foo()); goog.asserts.assert(bar());
   * </code>
   * will be transformed into:
   * <code>
   * var x = foo();
   * </code>
   * The compiler will leave in foo() (because its return value is used),
   * but it will remove bar() because it assumes it does not have side-effects.
   *
   * @author agrieve@google.com (Andrew Grieve)
   */

  goog.provide('goog.asserts');

  /**
   * @define {boolean} Whether to strip out asserts or to leave them in.
   */
  goog.define('goog.asserts.ENABLE_ASSERTS', goog.DEBUG);

  /**
   * Error object for failed assertions.
   * @param {string} messagePattern The pattern that was used to form message.
   * @param {!Array<*>} messageArgs The items to substitute into the pattern.
   * @constructor
   * @extends {goog.debug.Error}
   * @final
   */
  goog.asserts.AssertionError = function (messagePattern, messageArgs) {
    messageArgs.unshift(messagePattern);
    goog.debug.Error.call(this, goog.string.subs.apply(null, messageArgs));
    // Remove the messagePattern afterwards to avoid permanently modifying the
    // passed in array.
    messageArgs.shift();

    /**
     * The message pattern used to format the error message. Error handlers can
     * use this to uniquely identify the assertion.
     * @type {string}
     */
    this.messagePattern = messagePattern;
  };
  goog.inherits(goog.asserts.AssertionError, goog.debug.Error);

  /** @override */
  goog.asserts.AssertionError.prototype.name = 'AssertionError';

  /**
   * The default error handler.
   * @param {!goog.asserts.AssertionError} e The exception to be handled.
   */
  goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
    throw e;
  };

  /**
   * The handler responsible for throwing or logging assertion errors.
   * @private {function(!goog.asserts.AssertionError)}
   */
  goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;

  /**
   * Throws an exception with the given message and "Assertion failed" prefixed
   * onto it.
   * @param {string} defaultMessage The message to use if givenMessage is empty.
   * @param {Array<*>} defaultArgs The substitution arguments for defaultMessage.
   * @param {string|undefined} givenMessage Message supplied by the caller.
   * @param {Array<*>} givenArgs The substitution arguments for givenMessage.
   * @throws {goog.asserts.AssertionError} When the value is not a number.
   * @private
   */
  goog.asserts.doAssertFailure_ = function (defaultMessage, defaultArgs, givenMessage, givenArgs) {
    var message = 'Assertion failed';
    if (givenMessage) {
      message += ': ' + givenMessage;
      var args = givenArgs;
    } else if (defaultMessage) {
      message += ': ' + defaultMessage;
      args = defaultArgs;
    }
    // The '' + works around an Opera 10 bug in the unit tests. Without it,
    // a stack trace is added to var message above. With this, a stack trace is
    // not added until this line (it causes the extra garbage to be added after
    // the assertion message instead of in the middle of it).
    var e = new goog.asserts.AssertionError('' + message, args || []);
    goog.asserts.errorHandler_(e);
  };

  /**
   * Sets a custom error handler that can be used to customize the behavior of
   * assertion failures, for example by turning all assertion failures into log
   * messages.
   * @param {function(!goog.asserts.AssertionError)} errorHandler
   */
  goog.asserts.setErrorHandler = function (errorHandler) {
    if (goog.asserts.ENABLE_ASSERTS) {
      goog.asserts.errorHandler_ = errorHandler;
    }
  };

  /**
   * Checks if the condition evaluates to true if goog.asserts.ENABLE_ASSERTS is
   * true.
   * @template T
   * @param {T} condition The condition to check.
   * @param {string=} opt_message Error message in case of failure.
   * @param {...*} var_args The items to substitute into the failure message.
   * @return {T} The value of the condition.
   * @throws {goog.asserts.AssertionError} When the condition evaluates to false.
   */
  goog.asserts.assert = function (condition, opt_message, var_args) {
    if (goog.asserts.ENABLE_ASSERTS && !condition) {
      goog.asserts.doAssertFailure_('', null, opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return condition;
  };

  /**
   * Fails if goog.asserts.ENABLE_ASSERTS is true. This function is useful in case
   * when we want to add a check in the unreachable area like switch-case
   * statement:
   *
   * <pre>
   *  switch(type) {
   *    case FOO: doSomething(); break;
   *    case BAR: doSomethingElse(); break;
   *    default: goog.assert.fail('Unrecognized type: ' + type);
   *      // We have only 2 types - "default:" section is unreachable code.
   *  }
   * </pre>
   *
   * @param {string=} opt_message Error message in case of failure.
   * @param {...*} var_args The items to substitute into the failure message.
   * @throws {goog.asserts.AssertionError} Failure.
   */
  goog.asserts.fail = function (opt_message, var_args) {
    if (goog.asserts.ENABLE_ASSERTS) {
      goog.asserts.errorHandler_(new goog.asserts.AssertionError('Failure' + (opt_message ? ': ' + opt_message : ''), Array.prototype.slice.call(arguments, 1)));
    }
  };

  /**
   * Checks if the value is a number if goog.asserts.ENABLE_ASSERTS is true.
   * @param {*} value The value to check.
   * @param {string=} opt_message Error message in case of failure.
   * @param {...*} var_args The items to substitute into the failure message.
   * @return {number} The value, guaranteed to be a number when asserts enabled.
   * @throws {goog.asserts.AssertionError} When the value is not a number.
   */
  goog.asserts.assertNumber = function (value, opt_message, var_args) {
    if (goog.asserts.ENABLE_ASSERTS && !goog.isNumber(value)) {
      goog.asserts.doAssertFailure_('Expected number but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return (/** @type {number} */value
    );
  };

  /**
   * Checks if the value is a string if goog.asserts.ENABLE_ASSERTS is true.
   * @param {*} value The value to check.
   * @param {string=} opt_message Error message in case of failure.
   * @param {...*} var_args The items to substitute into the failure message.
   * @return {string} The value, guaranteed to be a string when asserts enabled.
   * @throws {goog.asserts.AssertionError} When the value is not a string.
   */
  goog.asserts.assertString = function (value, opt_message, var_args) {
    if (goog.asserts.ENABLE_ASSERTS && !goog.isString(value)) {
      goog.asserts.doAssertFailure_('Expected string but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return (/** @type {string} */value
    );
  };

  /**
   * Checks if the value is a function if goog.asserts.ENABLE_ASSERTS is true.
   * @param {*} value The value to check.
   * @param {string=} opt_message Error message in case of failure.
   * @param {...*} var_args The items to substitute into the failure message.
   * @return {!Function} The value, guaranteed to be a function when asserts
   *     enabled.
   * @throws {goog.asserts.AssertionError} When the value is not a function.
   */
  goog.asserts.assertFunction = function (value, opt_message, var_args) {
    if (goog.asserts.ENABLE_ASSERTS && !goog.isFunction(value)) {
      goog.asserts.doAssertFailure_('Expected function but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return (/** @type {!Function} */value
    );
  };

  /**
   * Checks if the value is an Object if goog.asserts.ENABLE_ASSERTS is true.
   * @param {*} value The value to check.
   * @param {string=} opt_message Error message in case of failure.
   * @param {...*} var_args The items to substitute into the failure message.
   * @return {!Object} The value, guaranteed to be a non-null object.
   * @throws {goog.asserts.AssertionError} When the value is not an object.
   */
  goog.asserts.assertObject = function (value, opt_message, var_args) {
    if (goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {
      goog.asserts.doAssertFailure_('Expected object but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return (/** @type {!Object} */value
    );
  };

  /**
   * Checks if the value is an Array if goog.asserts.ENABLE_ASSERTS is true.
   * @param {*} value The value to check.
   * @param {string=} opt_message Error message in case of failure.
   * @param {...*} var_args The items to substitute into the failure message.
   * @return {!Array<?>} The value, guaranteed to be a non-null array.
   * @throws {goog.asserts.AssertionError} When the value is not an array.
   */
  goog.asserts.assertArray = function (value, opt_message, var_args) {
    if (goog.asserts.ENABLE_ASSERTS && !goog.isArray(value)) {
      goog.asserts.doAssertFailure_('Expected array but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return (/** @type {!Array<?>} */value
    );
  };

  /**
   * Checks if the value is a boolean if goog.asserts.ENABLE_ASSERTS is true.
   * @param {*} value The value to check.
   * @param {string=} opt_message Error message in case of failure.
   * @param {...*} var_args The items to substitute into the failure message.
   * @return {boolean} The value, guaranteed to be a boolean when asserts are
   *     enabled.
   * @throws {goog.asserts.AssertionError} When the value is not a boolean.
   */
  goog.asserts.assertBoolean = function (value, opt_message, var_args) {
    if (goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(value)) {
      goog.asserts.doAssertFailure_('Expected boolean but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return (/** @type {boolean} */value
    );
  };

  /**
   * Checks if the value is a DOM Element if goog.asserts.ENABLE_ASSERTS is true.
   * @param {*} value The value to check.
   * @param {string=} opt_message Error message in case of failure.
   * @param {...*} var_args The items to substitute into the failure message.
   * @return {!Element} The value, likely to be a DOM Element when asserts are
   *     enabled.
   * @throws {goog.asserts.AssertionError} When the value is not an Element.
   */
  goog.asserts.assertElement = function (value, opt_message, var_args) {
    if (goog.asserts.ENABLE_ASSERTS && (!goog.isObject(value) || value.nodeType != goog.dom.NodeType.ELEMENT)) {
      goog.asserts.doAssertFailure_('Expected Element but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
    }
    return (/** @type {!Element} */value
    );
  };

  /**
   * Checks if the value is an instance of the user-defined type if
   * goog.asserts.ENABLE_ASSERTS is true.
   *
   * The compiler may tighten the type returned by this function.
   *
   * @param {?} value The value to check.
   * @param {function(new: T, ...)} type A user-defined constructor.
   * @param {string=} opt_message Error message in case of failure.
   * @param {...*} var_args The items to substitute into the failure message.
   * @throws {goog.asserts.AssertionError} When the value is not an instance of
   *     type.
   * @return {T}
   * @template T
   */
  goog.asserts.assertInstanceof = function (value, type, opt_message, var_args) {
    if (goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {
      goog.asserts.doAssertFailure_('Expected instanceof %s but got %s.', [goog.asserts.getType_(type), goog.asserts.getType_(value)], opt_message, Array.prototype.slice.call(arguments, 3));
    }
    return value;
  };

  /**
   * Checks that no enumerable keys are present in Object.prototype. Such keys
   * would break most code that use {@code for (var ... in ...)} loops.
   */
  goog.asserts.assertObjectPrototypeIsIntact = function () {
    for (var key in Object.prototype) {
      goog.asserts.fail(key + ' should not be enumerable in Object.prototype.');
    }
  };

  /**
   * Returns the type of a value. If a constructor is passed, and a suitable
   * string cannot be found, 'unknown type name' will be returned.
   * @param {*} value A constructor, object, or primitive.
   * @return {string} The best display name for the value, or 'unknown type name'.
   * @private
   */
  goog.asserts.getType_ = function (value) {
    if (value instanceof Function) {
      return value.displayName || value.name || 'unknown type name';
    } else if (value instanceof Object) {
      return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
    } else {
      return value === null ? 'null' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
    }
  };

  /**
   * @fileoverview Utility for fast string concatenation.
   */

  /**
   * Utility class to facilitate string concatenation.
   *
   * @param {*=} opt_a1 Optional first initial item to append.
   * @param {...*} var_args Other initial items to
   *     append, e.g., new goog.string.StringBuffer('foo', 'bar').
   * @constructor
   */
  goog.string.StringBuffer = function (opt_a1, var_args) {
    if (opt_a1 != null) {
      this.append.apply(this, arguments);
    }
  };

  /**
   * Internal buffer for the string to be concatenated.
   * @type {string}
   * @private
   */
  goog.string.StringBuffer.prototype.buffer_ = '';

  /**
   * Sets the contents of the string buffer object, replacing what's currently
   * there.
   *
   * @param {*} s String to set.
   */
  goog.string.StringBuffer.prototype.set = function (s) {
    this.buffer_ = '' + s;
  };

  /**
   * Appends one or more items to the buffer.
   *
   * Calling this with null, undefined, or empty arguments is an error.
   *
   * @param {*} a1 Required first string.
   * @param {*=} opt_a2 Optional second string.
   * @param {...?} var_args Other items to append,
   *     e.g., sb.append('foo', 'bar', 'baz').
   * @return {!goog.string.StringBuffer} This same StringBuffer object.
   * @suppress {duplicate}
   */
  goog.string.StringBuffer.prototype.append = function (a1, opt_a2, var_args) {
    // Use a1 directly to avoid arguments instantiation for single-arg case.
    this.buffer_ += String(a1);
    if (opt_a2 != null) {
      // second argument is undefined (null == undefined)
      for (var i = 1; i < arguments.length; i++) {
        this.buffer_ += arguments[i];
      }
    }
    return this;
  };

  /**
   * Clears the internal buffer.
   */
  goog.string.StringBuffer.prototype.clear = function () {
    this.buffer_ = '';
  };

  /**
   * @return {number} the length of the current contents of the buffer.
   */
  goog.string.StringBuffer.prototype.getLength = function () {
    return this.buffer_.length;
  };

  /**
   * @return {string} The concatenated string.
   * @override
   */
  goog.string.StringBuffer.prototype.toString = function () {
    return this.buffer_;
  };

  // Copyright 2012 The Closure Library Authors. All Rights Reserved.
  //
  // Licensed under the Apache License, Version 2.0 (the "License");
  // you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at
  //
  //      http://www.apache.org/licenses/LICENSE-2.0
  //
  // Unless required by applicable law or agreed to in writing, software
  // distributed under the License is distributed on an "AS-IS" BASIS,
  // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // See the License for the specific language governing permissions and
  // limitations under the License.

  /**
   * @fileoverview Soy data primitives.
   *
   * The goal is to encompass data types used by Soy, especially to mark content
   * as known to be "safe".
   *
   * @author gboyer@google.com (Garrett Boyer)
   */

  goog.soy = {};
  goog.soy.data = {};

  /**
   * A type of textual content.
   *
   * This is an enum of type Object so that these values are unforgeable.
   *
   * @enum {!Object}
   */
  goog.soy.data.SanitizedContentKind = {

    /**
     * A snippet of HTML that does not start or end inside a tag, comment, entity,
     * or DOCTYPE; and that does not contain any executable code
     * (JS, {@code <object>}s, etc.) from a different trust domain.
     */
    HTML: goog.DEBUG ? { sanitizedContentKindHtml: true } : {},

    /**
     * Executable Javascript code or expression, safe for insertion in a
     * script-tag or event handler context, known to be free of any
     * attacker-controlled scripts. This can either be side-effect-free
     * Javascript (such as JSON) or Javascript that's entirely under Google's
     * control.
     */
    JS: goog.DEBUG ? { sanitizedContentJsChars: true } : {},

    /** A properly encoded portion of a URI. */
    URI: goog.DEBUG ? { sanitizedContentUri: true } : {},

    /** A resource URI not under attacker control. */
    TRUSTED_RESOURCE_URI: goog.DEBUG ? { sanitizedContentTrustedResourceUri: true } : {},

    /**
     * Repeated attribute names and values. For example,
     * {@code dir="ltr" foo="bar" onclick="trustedFunction()" checked}.
     */
    ATTRIBUTES: goog.DEBUG ? { sanitizedContentHtmlAttribute: true } : {},

    // TODO: Consider separating rules, declarations, and values into
    // separate types, but for simplicity, we'll treat explicitly blessed
    // SanitizedContent as allowed in all of these contexts.
    /**
     * A CSS3 declaration, property, value or group of semicolon separated
     * declarations.
     */
    CSS: goog.DEBUG ? { sanitizedContentCss: true } : {},

    /**
     * Unsanitized plain-text content.
     *
     * This is effectively the "null" entry of this enum, and is sometimes used
     * to explicitly mark content that should never be used unescaped. Since any
     * string is safe to use as text, being of ContentKind.TEXT makes no
     * guarantees about its safety in any other context such as HTML.
     */
    TEXT: goog.DEBUG ? { sanitizedContentKindText: true } : {}
  };

  /**
   * A string-like object that carries a content-type and a content direction.
   *
   * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
   * Instead, use a trusted, centrally reviewed library as endorsed by your team
   * to generate these objects. Otherwise, you risk accidentally creating
   * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
   * templates.
   *
   * @constructor
   */
  goog.soy.data.SanitizedContent = function () {
    throw Error('Do not instantiate directly');
  };

  /**
   * The context in which this content is safe from XSS attacks.
   * @type {goog.soy.data.SanitizedContentKind}
   */
  goog.soy.data.SanitizedContent.prototype.contentKind;

  /**
   * The content's direction; null if unknown and thus to be estimated when
   * necessary.
   * @type {?goog.i18n.bidi.Dir}
   */
  goog.soy.data.SanitizedContent.prototype.contentDir = null;

  /**
   * The already-safe content.
   * @protected {string}
   */
  goog.soy.data.SanitizedContent.prototype.content;

  /**
   * Gets the already-safe content.
   * @return {string}
   */
  goog.soy.data.SanitizedContent.prototype.getContent = function () {
    return this.content;
  };

  /** @override */
  goog.soy.data.SanitizedContent.prototype.toString = function () {
    return this.content;
  };

  /**
   * An intermediary base class to allow the type system to sepcify text templates
   * without referencing the soydata package.
   * @extends {goog.soy.data.SanitizedContent}
   * @constructor
   */
  goog.soy.data.UnsanitizedText = function () {
    // TODO(gboyer): Delete this class after moving soydata to Closure.
    goog.soy.data.UnsanitizedText.base(this, 'constructor');
  };

  goog.inherits(goog.soy.data.UnsanitizedText, goog.soy.data.SanitizedContent);

  /**
   * Content of type {@link goog.soy.data.SanitizedContentKind.HTML}.
   *
   * The content is a string of HTML that can safely be embedded in a PCDATA
   * context in your app.  If you would be surprised to find that an HTML
   * sanitizer produced {@code s} (e.g.  it runs code or fetches bad URLs) and
   * you wouldn't write a template that produces {@code s} on security or privacy
   * grounds, then don't pass {@code s} here. The default content direction is
   * unknown, i.e. to be estimated when necessary.
   *
   * @extends {goog.soy.data.SanitizedContent}
   * @constructor
   */
  goog.soy.data.SanitizedHtml = function () {
    goog.soy.data.SanitizedHtml.base(this, 'constructor');
  };
  goog.inherits(goog.soy.data.SanitizedHtml, goog.soy.data.SanitizedContent);

  /** @override */
  goog.soy.data.SanitizedHtml.prototype.contentKind = goog.soy.data.SanitizedContentKind.HTML;

  /**
   * Checks if the value could be used as the Soy type {html}.
   * @param {*} value
   * @return {boolean}
   */
  goog.soy.data.SanitizedHtml.isCompatibleWith = function (value) {
    return goog.isString(value) || value instanceof goog.soy.data.SanitizedHtml || value instanceof goog.soy.data.UnsanitizedText || value instanceof goog.html.SafeHtml;
  };

  /*
   * Copyright 2008 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @fileoverview
   * Utility functions and classes for Soy.
   *
   * <p>
   * The top portion of this file contains utilities for Soy users:<ul>
   *   <li> soy.StringBuilder: Compatible with the 'stringbuilder' code style.
   * </ul>
   *
   * <p>
   * The bottom portion of this file contains utilities that should only be called
   * by Soy-generated JS code. Please do not use these functions directly from
   * your hand-writen code. Their names all start with '$$'.
   *
   */

  // -----------------------------------------------------------------------------
  // StringBuilder (compatible with the 'stringbuilder' code style).

  (function () {
    var soy = {};
    soy.asserts = {};
    soy.esc = {};
    var soydata = {};

    /**
     * Utility class to facilitate much faster string concatenation in IE,
     * using Array.join() rather than the '+' operator. For other browsers
     * we simply use the '+' operator.
     *
     * @param {Object} var_args Initial items to append,
     *     e.g., new soy.StringBuilder('foo', 'bar').
     * @constructor
     */
    soy.StringBuilder = goog.string.StringBuffer;

    // -----------------------------------------------------------------------------
    // soydata: Defines typed strings, e.g. an HTML string {@code "a<b>c"} is
    // semantically distinct from the plain text string {@code "a<b>c"} and smart
    // templates can take that distinction into account.

    /**
     * A type of textual content.
     *
     * This is an enum of type Object so that these values are unforgeable.
     *
     * @enum {!Object}
     */
    soydata.SanitizedContentKind = goog.soy.data.SanitizedContentKind;

    /**
     * Checks whether a given value is of a given content kind.
     *
     * @param {*} value The value to be examined.
     * @param {soydata.SanitizedContentKind} contentKind The desired content
     *     kind.
     * @return {boolean} Whether the given value is of the given kind.
     * @private
     */
    soydata.isContentKind = function (value, contentKind) {
      // TODO(user): This function should really include the assert on
      // value.constructor that is currently sprinkled at most of the call sites.
      // Unfortunately, that would require a (debug-mode-only) switch statement.
      // TODO(user): Perhaps we should get rid of the contentKind property
      // altogether and only at the constructor.
      return value != null && value.contentKind === contentKind;
    };

    /**
     * Content of type {@link goog.soy.data.SanitizedContentKind.HTML}.
     *
     * The content is a string of HTML that can safely be embedded in a PCDATA
     * context in your app.  If you would be surprised to find that an HTML
     * sanitizer produced {@code s} (e.g.  it runs code or fetches bad URLs) and
     * you wouldn't write a template that produces {@code s} on security or privacy
     * grounds, then don't pass {@code s} here. The default content direction is
     * unknown, i.e. to be estimated when necessary.
     *
     * @constructor
     * @extends {goog.soy.data.SanitizedHtml}
     */
    soydata.SanitizedHtml = function () {
      soydata.SanitizedHtml.base(this, 'constructor'); // Throws an exception.
    };
    goog.inherits(soydata.SanitizedHtml, goog.soy.data.SanitizedHtml);

    /**
     * Returns a SanitizedHtml object for a particular value. The content direction
     * is preserved.
     *
     * This HTML-escapes the value unless it is already SanitizedHtml or SafeHtml.
     *
     * @param {*} value The value to convert. If it is already a SanitizedHtml
     *     object, it is left alone.
     * @return {!soydata.SanitizedHtml} A SanitizedHtml object derived from the
     *     stringified value. It is escaped unless the input is SanitizedHtml or
     *     SafeHtml.
     */
    soydata.SanitizedHtml.from = function (value) {
      // The check is soydata.isContentKind_() inlined for performance.
      if (value != null && value.contentKind === goog.soy.data.SanitizedContentKind.HTML) {
        goog.asserts.assert(value.constructor === goog.soy.data.SanitizedHtml || value.constructor === soydata.SanitizedHtml);
        return (/** @type {!soydata.SanitizedHtml} */value
        );
      }
      if (value instanceof goog.html.SafeHtml) {
        return soydata.VERY_UNSAFE.ordainSanitizedHtml(goog.html.SafeHtml.unwrap(value), value.getDirection());
      }
      return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.esc.$$escapeHtmlHelper(String(value)), soydata.getContentDir(value));
    };

    /**
     * Checks if the value could be used as the Soy type {html}.
     * @param {*} value
     * @return {boolean}
     */
    soydata.SanitizedHtml.isCompatibleWith = function (value) {
      return goog.isString(value) || value instanceof goog.soy.data.SanitizedHtml || value instanceof goog.soy.data.UnsanitizedText || value instanceof goog.html.SafeHtml;
    };

    /**
     * Content of type {@link soydata.SanitizedContentKind.URI}.
     *
     * The content is a URI chunk that the caller knows is safe to emit in a
     * template. The content direction is LTR.
     *
     * @constructor
     * @extends {goog.soy.data.SanitizedContent}
     */
    soydata.SanitizedUri = function () {
      goog.soy.data.SanitizedContent.call(this); // Throws an exception.
    };
    goog.inherits(soydata.SanitizedUri, goog.soy.data.SanitizedContent);

    /** @override */
    soydata.SanitizedUri.prototype.contentKind = soydata.SanitizedContentKind.URI;

    /** @override */
    soydata.SanitizedUri.prototype.contentDir = goog.i18n.bidi.Dir.LTR;

    /**
     * Unsanitized plain text string.
     *
     * While all strings are effectively safe to use as a plain text, there are no
     * guarantees about safety in any other context such as HTML. This is
     * sometimes used to mark that should never be used unescaped.
     *
     * @param {*} content Plain text with no guarantees.
     * @param {?goog.i18n.bidi.Dir=} opt_contentDir The content direction; null if
     *     unknown and thus to be estimated when necessary. Default: null.
     * @constructor
     * @extends {goog.soy.data.UnsanitizedText}
     */
    soydata.UnsanitizedText = function (content, opt_contentDir) {
      /** @override */
      this.content = String(content);
      this.contentDir = opt_contentDir != null ? opt_contentDir : null;
    };
    goog.inherits(soydata.UnsanitizedText, goog.soy.data.UnsanitizedText);

    /** @override */
    soydata.UnsanitizedText.prototype.contentKind = soydata.SanitizedContentKind.TEXT;

    /**
     * Empty string, used as a type in Soy templates.
     * @enum {string}
     * @private
     */
    soydata.$$EMPTY_STRING_ = {
      VALUE: ''
    };

    /**
     * Creates a factory for SanitizedContent types.
     *
     * This is a hack so that the soydata.VERY_UNSAFE.ordainSanitized* can
     * instantiate Sanitized* classes, without making the Sanitized* constructors
     * publicly usable. Requiring all construction to use the VERY_UNSAFE names
     * helps callers and their reviewers easily tell that creating SanitizedContent
     * is not always safe and calls for careful review.
     *
     * @param {function(new: T)} ctor A constructor.
     * @return {!function(*, ?goog.i18n.bidi.Dir=): T} A factory that takes
     *     content and an optional content direction and returns a new instance. If
     *     the content direction is undefined, ctor.prototype.contentDir is used.
     * @template T
     * @private
     */
    soydata.$$makeSanitizedContentFactory_ = function (ctor) {
      /**
       * @param {string} content
       * @constructor
       * @extends {goog.soy.data.SanitizedContent}
       */
      function InstantiableCtor(content) {
        /** @override */
        this.content = content;
      }
      InstantiableCtor.prototype = ctor.prototype;
      /**
       * Creates a ctor-type SanitizedContent instance.
       *
       * @param {*} content The content to put in the instance.
       * @param {?goog.i18n.bidi.Dir=} opt_contentDir The content direction. If
       *     undefined, ctor.prototype.contentDir is used.
       * @return {!goog.soy.data.SanitizedContent} The new instance. It is actually
       *     of type T above (ctor's type, a descendant of SanitizedContent), but
       *     there is no way to express that here.
       */
      function sanitizedContentFactory(content, opt_contentDir) {
        var result = new InstantiableCtor(String(content));
        if (opt_contentDir !== undefined) {
          result.contentDir = opt_contentDir;
        }
        return result;
      }
      return sanitizedContentFactory;
    };

    /**
     * Creates a factory for SanitizedContent types that should always have their
     * default directionality.
     *
     * This is a hack so that the soydata.VERY_UNSAFE.ordainSanitized* can
     * instantiate Sanitized* classes, without making the Sanitized* constructors
     * publicly usable. Requiring all construction to use the VERY_UNSAFE names
     * helps callers and their reviewers easily tell that creating SanitizedContent
     * is not always safe and calls for careful review.
     *
     * @param {function(new: T, string)} ctor A constructor.
     * @return {!function(*): T} A factory that takes content and returns a new
     *     instance (with default directionality, i.e. ctor.prototype.contentDir).
     * @template T
     * @private
     */
    soydata.$$makeSanitizedContentFactoryWithDefaultDirOnly_ = function (ctor) {
      /**
       * @param {string} content
       * @constructor
       * @extends {goog.soy.data.SanitizedContent}
       */
      function InstantiableCtor(content) {
        /** @override */
        this.content = content;
      }
      InstantiableCtor.prototype = ctor.prototype;
      /**
       * Creates a ctor-type SanitizedContent instance.
       *
       * @param {*} content The content to put in the instance.
       * @return {!goog.soy.data.SanitizedContent} The new instance. It is actually
       *     of type T above (ctor's type, a descendant of SanitizedContent), but
       *     there is no way to express that here.
       */
      function sanitizedContentFactory(content) {
        var result = new InstantiableCtor(String(content));
        return result;
      }
      return sanitizedContentFactory;
    };

    // -----------------------------------------------------------------------------
    // Sanitized content ordainers. Please use these with extreme caution (with the
    // exception of markUnsanitizedText). A good recommendation is to limit usage
    // of these to just a handful of files in your source tree where usages can be
    // carefully audited.


    /**
     * Protects a string from being used in an noAutoescaped context.
     *
     * This is useful for content where there is significant risk of accidental
     * unescaped usage in a Soy template. A great case is for user-controlled
     * data that has historically been a source of vulernabilities.
     *
     * @param {*} content Text to protect.
     * @param {?goog.i18n.bidi.Dir=} opt_contentDir The content direction; null if
     *     unknown and thus to be estimated when necessary. Default: null.
     * @return {!soydata.UnsanitizedText} A wrapper that is rejected by the
     *     Soy noAutoescape print directive.
     */
    soydata.markUnsanitizedText = function (content, opt_contentDir) {
      return new soydata.UnsanitizedText(content, opt_contentDir);
    };

    soydata.VERY_UNSAFE = {};

    /**
    * Takes a leap of faith that the provided content is "safe" to use as a URI
    * in a Soy template.
    *
    * This creates a Soy SanitizedContent object which indicates to Soy there is
    * no need to escape it when printed as a URI (e.g. in an href or src
    * attribute), such as if it's already been encoded or  if it's a Javascript:
    * URI.
    *
    * @param {*} content A chunk of URI that the caller knows is safe to
    *     emit in a template.
    * @return {!soydata.SanitizedUri} Sanitized content wrapper that indicates to
    *     Soy not to escape or filter when printed in URI context.
    */
    soydata.VERY_UNSAFE.ordainSanitizedUri = soydata.$$makeSanitizedContentFactoryWithDefaultDirOnly_(soydata.SanitizedUri);

    // -----------------------------------------------------------------------------
    // Below are private utilities to be used by Soy-generated code only.

    /**
     * Builds an augmented map. The returned map will contain mappings from both
     * the base map and the additional map. If the same key appears in both, then
     * the value from the additional map will be visible, while the value from the
     * base map will be hidden. The base map will be used, but not modified.
     *
     * @param {!Object} baseMap The original map to augment.
     * @param {!Object} additionalMap A map containing the additional mappings.
     * @return {!Object} An augmented map containing both the original and
     *     additional mappings.
     */
    soy.$$augmentMap = function (baseMap, additionalMap) {
      return soy.$$assignDefaults(soy.$$assignDefaults({}, additionalMap), baseMap);
    };

    /**
     * Copies extra properties into an object if they do not already exist. The
     * destination object is mutated in the process.
     *
     * @param {!Object} obj The destination object to update.
     * @param {!Object} defaults An object with default properties to apply.
     * @return {!Object} The destination object for convenience.
     */
    soy.$$assignDefaults = function (obj, defaults) {
      for (var key in defaults) {
        if (!(key in obj)) {
          obj[key] = defaults[key];
        }
      }

      return obj;
    };

    /**
     * Checks that the given map key is a string.
     * @param {*} key Key to check.
     * @return {string} The given key.
     */
    soy.$$checkMapKey = function (key) {
      // TODO: Support map literal with nonstring key.
      if (typeof key != 'string') {
        throw Error('Map literal\'s key expression must evaluate to string' + ' (encountered type "' + (typeof key === 'undefined' ? 'undefined' : _typeof(key)) + '").');
      }
      return key;
    };

    /**
     * Gets the keys in a map as an array. There are no guarantees on the order.
     * @param {Object} map The map to get the keys of.
     * @return {!Array<string>} The array of keys in the given map.
     */
    soy.$$getMapKeys = function (map) {
      var mapKeys = [];
      for (var key in map) {
        mapKeys.push(key);
      }
      return mapKeys;
    };

    /**
     * Returns the argument if it is not null.
     *
     * @param {T} val The value to check
     * @return {T} val if is isn't null
     * @template T
     */
    soy.$$checkNotNull = function (val) {
      if (val == null) {
        throw Error('unexpected null value');
      }
      return val;
    };

    /**
     * Gets a consistent unique id for the given delegate template name. Two calls
     * to this function will return the same id if and only if the input names are
     * the same.
     *
     * <p> Important: This function must always be called with a string constant.
     *
     * <p> If Closure Compiler is not being used, then this is just this identity
     * function. If Closure Compiler is being used, then each call to this function
     * will be replaced with a short string constant, which will be consistent per
     * input name.
     *
     * @param {string} delTemplateName The delegate template name for which to get a
     *     consistent unique id.
     * @return {string} A unique id that is consistent per input name.
     *
     * @consistentIdGenerator
     */
    soy.$$getDelTemplateId = function (delTemplateName) {
      return delTemplateName;
    };

    /**
     * Map from registered delegate template key to the priority of the
     * implementation.
     * @type {Object}
     * @private
     */
    soy.$$DELEGATE_REGISTRY_PRIORITIES_ = {};

    /**
     * Map from registered delegate template key to the implementation function.
     * @type {Object}
     * @private
     */
    soy.$$DELEGATE_REGISTRY_FUNCTIONS_ = {};

    /**
     * Registers a delegate implementation. If the same delegate template key (id
     * and variant) has been registered previously, then priority values are
     * compared and only the higher priority implementation is stored (if
     * priorities are equal, an error is thrown).
     *
     * @param {string} delTemplateId The delegate template id.
     * @param {string} delTemplateVariant The delegate template variant (can be
     *     empty string).
     * @param {number} delPriority The implementation's priority value.
     * @param {Function} delFn The implementation function.
     */
    soy.$$registerDelegateFn = function (delTemplateId, delTemplateVariant, delPriority, delFn) {

      var mapKey = 'key_' + delTemplateId + ':' + delTemplateVariant;
      var currPriority = soy.$$DELEGATE_REGISTRY_PRIORITIES_[mapKey];
      if (currPriority === undefined || delPriority > currPriority) {
        // Registering new or higher-priority function: replace registry entry.
        soy.$$DELEGATE_REGISTRY_PRIORITIES_[mapKey] = delPriority;
        soy.$$DELEGATE_REGISTRY_FUNCTIONS_[mapKey] = delFn;
      } else if (delPriority == currPriority) {
        // Registering same-priority function: error.
        throw Error('Encountered two active delegates with the same priority ("' + delTemplateId + ':' + delTemplateVariant + '").');
      } else {
        // Registering lower-priority function: do nothing.
      }
    };

    /**
     * Retrieves the (highest-priority) implementation that has been registered for
     * a given delegate template key (id and variant). If no implementation has
     * been registered for the key, then the fallback is the same id with empty
     * variant. If the fallback is also not registered, and allowsEmptyDefault is
     * true, then returns an implementation that is equivalent to an empty template
     * (i.e. rendered output would be empty string).
     *
     * @param {string} delTemplateId The delegate template id.
     * @param {string} delTemplateVariant The delegate template variant (can be
     *     empty string).
     * @param {boolean} allowsEmptyDefault Whether to default to the empty template
     *     function if there's no active implementation.
     * @return {Function} The retrieved implementation function.
     */
    soy.$$getDelegateFn = function (delTemplateId, delTemplateVariant, allowsEmptyDefault) {

      var delFn = soy.$$DELEGATE_REGISTRY_FUNCTIONS_['key_' + delTemplateId + ':' + delTemplateVariant];
      if (!delFn && delTemplateVariant != '') {
        // Fallback to empty variant.
        delFn = soy.$$DELEGATE_REGISTRY_FUNCTIONS_['key_' + delTemplateId + ':'];
      }

      if (delFn) {
        return delFn;
      } else if (allowsEmptyDefault) {
        return soy.$$EMPTY_TEMPLATE_FN_;
      } else {
        throw Error('Found no active impl for delegate call to "' + delTemplateId + ':' + delTemplateVariant + '" (and not allowemptydefault="true").');
      }
    };

    /**
     * Private helper soy.$$getDelegateFn(). This is the empty template function
     * that is returned whenever there's no delegate implementation found.
     *
     * @param {Object<string, *>=} opt_data
     * @param {soy.StringBuilder=} opt_sb
     * @param {Object<string, *>=} opt_ijData
     * @return {string}
     * @private
     */
    soy.$$EMPTY_TEMPLATE_FN_ = function (opt_data, opt_sb, opt_ijData) {
      return '';
    };

    // -----------------------------------------------------------------------------
    // Basic directives/functions.


    /**
     * Truncates a string to a given max length (if it's currently longer),
     * optionally adding ellipsis at the end.
     *
     * @param {*} str The string to truncate. Can be other types, but the value will
     *     be coerced to a string.
     * @param {number} maxLen The maximum length of the string after truncation
     *     (including ellipsis, if applicable).
     * @param {boolean} doAddEllipsis Whether to add ellipsis if the string needs
     *     truncation.
     * @return {string} The string after truncation.
     */
    soy.$$truncate = function (str, maxLen, doAddEllipsis) {

      str = String(str);
      if (str.length <= maxLen) {
        return str; // no need to truncate
      }

      // If doAddEllipsis, either reduce maxLen to compensate, or else if maxLen is
      // too small, just turn off doAddEllipsis.
      if (doAddEllipsis) {
        if (maxLen > 3) {
          maxLen -= 3;
        } else {
          doAddEllipsis = false;
        }
      }

      // Make sure truncating at maxLen doesn't cut up a unicode surrogate pair.
      if (soy.$$isHighSurrogate_(str.charAt(maxLen - 1)) && soy.$$isLowSurrogate_(str.charAt(maxLen))) {
        maxLen -= 1;
      }

      // Truncate.
      str = str.substring(0, maxLen);

      // Add ellipsis.
      if (doAddEllipsis) {
        str += '...';
      }

      return str;
    };

    /**
     * Private helper for $$truncate() to check whether a char is a high surrogate.
     * @param {string} ch The char to check.
     * @return {boolean} Whether the given char is a unicode high surrogate.
     * @private
     */
    soy.$$isHighSurrogate_ = function (ch) {
      return 0xD800 <= ch && ch <= 0xDBFF;
    };

    /**
     * Private helper for $$truncate() to check whether a char is a low surrogate.
     * @param {string} ch The char to check.
     * @return {boolean} Whether the given char is a unicode low surrogate.
     * @private
     */
    soy.$$isLowSurrogate_ = function (ch) {
      return 0xDC00 <= ch && ch <= 0xDFFF;
    };

    // -----------------------------------------------------------------------------
    // Assertion methods used by runtime.

    /**
     * Checks if the type assertion is true if goog.asserts.ENABLE_ASSERTS is
     * true. Report errors on runtime types if goog.DEBUG is true.
     * @param {boolean} condition The type check condition.
     * @param {string} paramName The Soy name of the parameter.
     * @param {?} param The JS object for the parameter.
     * @param {!string} jsDocTypeStr SoyDoc type str.
     * @return {?} the param value
     * @throws {goog.asserts.AssertionError} When the condition evaluates to false.
     */
    soy.asserts.assertType = function (condition, paramName, param, jsDocTypeStr) {
      if (goog.asserts.ENABLE_ASSERTS && !condition) {
        var msg = 'expected param ' + paramName + ' of type ' + jsDocTypeStr + (goog.DEBUG ? ', but got ' + goog.debug.runtimeType(param) : '') + '.';
        goog.asserts.fail(msg);
      }
      return param;
    };

    // -----------------------------------------------------------------------------
    // Generated code.


    // START GENERATED CODE FOR ESCAPERS.

    /**
     * @type {function (*) : string}
     */
    soy.esc.$$escapeHtmlHelper = function (v) {
      return goog.string.htmlEscape(String(v));
    };

    /**
     * Allows only data-protocol image URI's.
     *
     * @param {*} value The value to process. May not be a string, but the value
     *     will be coerced to a string.
     * @return {!soydata.SanitizedUri} An escaped version of value.
     */
    soy.$$filterImageDataUri = function (value) {
      // NOTE: Even if it's a SanitizedUri, we will still filter it.
      return soydata.VERY_UNSAFE.ordainSanitizedUri(soy.esc.$$filterImageDataUriHelper(value));
    };

    /**
     * A pattern that vets values produced by the named directives.
     * @private {!RegExp}
     */
    soy.esc.$$FILTER_FOR_FILTER_IMAGE_DATA_URI_ = /^data:image\/(?:bmp|gif|jpe?g|png|tiff|webp);base64,[a-z0-9+\/]+=*$/i;

    /**
     * A helper for the Soy directive |filterImageDataUri
     * @param {*} value Can be of any type but will be coerced to a string.
     * @return {string} The escaped text.
     */
    soy.esc.$$filterImageDataUriHelper = function (value) {
      var str = String(value);
      if (!soy.esc.$$FILTER_FOR_FILTER_IMAGE_DATA_URI_.test(str)) {
        goog.asserts.fail('Bad value `%s` for |filterImageDataUri', [str]);
        return 'data:image/gif;base64,zSoyz';
      }
      return str;
    };

    var incrementaldom = IncrementalDOM;
    var soyIDOM = {};

    /**
     * Calls an expression in case of a function or outputs it as text content.
     * @param {string|number|boolean|function()?} expr
     */
    soyIDOM.renderDynamicContent = function (expr) {
      if (goog.isFunction(expr)) {
        expr();
      } else if (expr != null) {
        incrementaldom.text(expr);
      }
    };

    /**
     * Prints an expression depending on its type.
     * @param {!SanitizedHtml|string|number|boolean|function()} expr
     */
    soyIDOM.print = function (expr) {
      if (expr instanceof soydata.SanitizedHtml) {
        // For HTML content we need to insert a custom element where we can place
        // the content without incremental dom modifying it.
        var el = incrementaldom.elementOpen('html-blob');
        var content = expr.toString();
        if (el.__innerHTML !== content) {
          soy.renderHtml(el, expr);
          el.__innerHTML = content;
        }
        incrementaldom.skip();
        incrementaldom.elementClose('html-blob');
      } else {
        soyIDOM.renderDynamicContent(expr);
      }
    };

    goog.loadModule(function () {
      goog.module('soy.idom');
      return soyIDOM;
    });

    // END GENERATED CODE

    goog.loadModule(function () {
      goog.module('soy');
      return soy;
    });

    goog.loadModule(function () {
      goog.module('soydata');
      return soydata;
    });

    goog.loadModule(function () {
      goog.module('soy.asserts');
      return soy;
    });
  })();

  goog.loadModule(function () {
    goog.module('incrementaldom');
    return IncrementalDOM;
  });
}).call(typeof exports !== 'undefined' && typeof global !== 'undefined' ? global : window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)))

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var SoyAop = {
	/**
  * The functions that should be called instead of a template call. The last
  * function in the array is the one that is intercepting at the moment. If the
  * array is empty, the original function will be called instead.
  * @type {!Array<function()>}
  * @protected
  */
	interceptFns_: [],

	/**
  * Gets the original function of the given template function. If no original exists,
  * returns the given function itself.
  * @param {!function()} fn
  * @return {!function()}
  */
	getOriginalFn: function getOriginalFn(fn) {
		return fn.originalFn ? fn.originalFn : fn;
	},

	/**
  * Handles a template call, calling the current interception function if one
  * is set, or otherwise just calling the original function instead.
  * @param {!function()} originalFn The original template function that was
  *     intercepted.
  * @param {Object} opt_data Template data object.
  * @param {*} opt_ignored
  * @param {Object} opt_ijData Template injected data object.
  * @return {*} The return value of the function that is called to handle this
  *     interception.
  */
	handleTemplateCall_: function handleTemplateCall_(originalFn, opt_data, opt_ignored, opt_ijData) {
		var interceptFn = SoyAop.interceptFns_[SoyAop.interceptFns_.length - 1];
		if (interceptFn) {
			return interceptFn.call(null, originalFn, opt_data, opt_ignored, opt_ijData);
		} else {
			return originalFn.call(null, opt_data, opt_ignored, opt_ijData);
		}
	},

	/**
  * Registers a template function that should be intercepted.
  * @param {!Object} templates The original templates object containing the
  *     function to be intercepted.
  * @param {string} name The name of the template function to intercept.
  */
	registerForInterception: function registerForInterception(templates, name) {
		var originalFn = templates[name];
		if (!originalFn.originalFn) {
			templates[name] = SoyAop.handleTemplateCall_.bind(null, originalFn);
			templates[name].originalFn = originalFn;
		}
	},

	/**
  * Starts intercepting all template calls, replacing them with a call to the
  * given function instead.
  * @param {!function()} fn
  */
	startInterception: function startInterception(fn) {
		SoyAop.interceptFns_.push(fn);
	},

	/**
  * Stops intercepting template calls.
  */
	stopAllInterceptions: function stopAllInterceptions() {
		SoyAop.interceptFns_ = [];
	},

	/**
  * Stops intercepting template calls with the last registered function.
  */
	stopInterception: function stopInterception() {
		SoyAop.interceptFns_.pop();
	}
};

exports.default = SoyAop;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _validators = __webpack_require__(93);

var _validators2 = _interopRequireDefault(_validators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sugar api that can be used as an alternative for manually building `State`
 * configuration in the expected format. For example, instead of having
 * something like this:
 *
 * ```js
 * MyClass.STATE = {
 *   foo: {
 *     required: true,
 *     validator: validators.number,
 *     value: 13
 *   }
 * };
 * ```
 *
 * You could instead do:
 *
 * ```js
 * MyClass.STATE = {
 *   foo: Config.required().number().value(13)
 * };
 * ```
 */
var Config = {
	/**
 * An object that contains a validator function.
 * @typedef {!Object} ConfigWithValidator
 */

	/**
  * Function that creates `State` object with an `any` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	any: setPrimitiveValidators('any'),

	/**
  * Function that creates `State` object with an `array` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	array: setPrimitiveValidators('array'),

	/**
  * Function that creates `State` object with an `arrayOf` validator.
  * @param {ConfigWithValidator} stateConfig `State` configuration object
  * @return {ConfigWithValidator} `State` configuration object.
  */
	arrayOf: setNestedValidators('arrayOf'),

	/**
  * Function that creates `State` object with a `bool` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	bool: setPrimitiveValidators('bool'),

	/**
  * Function that creates `State` object with a `func` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	func: setPrimitiveValidators('func'),

	/**
  * Function that creates `State` object with an `instanceOf` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	instanceOf: setExplicitValueValidators('instanceOf'),

	/**
  * Function that creates `State` object with a `number` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	number: setPrimitiveValidators('number'),

	/**
  * Function that creates `State` object with an `object` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	object: setPrimitiveValidators('object'),

	/**
  * Function that creates `State` object with an `objectOf` validator.
  * @param {ConfigWithValidator} stateConfig `State` configuration object
  * @return {ConfigWithValidator} `State` configuration object.
  */
	objectOf: setNestedValidators('objectOf'),

	/**
  * Function that creates `State` object with an `oneOf` validator.
  * @param {!Array} values `State` configuration object
  * @return {ConfigWithValidator} `State` configuration object.
  */
	oneOf: setExplicitValueValidators('oneOf'),

	/**
  * Creates `State` configuration object with an `oneOfType` validator.
  * @param {ConfigWithValidator[]} validatorArray Array of `State` configuration objects.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	oneOfType: function oneOfType(validatorArray) {
		validatorArray = validatorArray.map(function (configObj) {
			return configObj.config.validator;
		});

		return this.validator(_validators2.default.oneOfType(validatorArray));
	},


	/**
  * Creates `State` configuration object with a `shapeOf` validator.
  * @param {!Object.<string, ConfigWithValidator>} shapeObj Values being `State` configuration objects.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	shapeOf: function shapeOf(shapeObj) {
		shapeObj = destructShapeOfConfigs(shapeObj);

		return this.validator(_validators2.default.shapeOf(shapeObj));
	},


	/**
  * Function that creates `State` object with an `string` validator.
  * @return {ConfigWithValidator} `State` configuration object.
  */
	string: setPrimitiveValidators('string'),

	/**
  * Adds the `internal` flag to the `State` configuration.
  * @param {boolean} required Flag to set "internal" to. True by default.
  * @return {!Object} `State` configuration object.
  */
	internal: function internal() {
		var _internal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		return mergeConfig(this, {
			internal: _internal
		});
	},


	/**
  * Adds the `required` flag to the `State` configuration.
  * @param {boolean} required Flag to set "required" to. True by default.
  * @return {!Object} `State` configuration object.
  */
	required: function required() {
		var _required = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		return mergeConfig(this, {
			required: _required
		});
	},


	/**
  * Adds a setter to the `State` configuration.
  * @param {!function()} setter
  * @return {!Object} `State` configuration object.
  */
	setter: function setter(_setter) {
		return mergeConfig(this, {
			setter: _setter
		});
	},


	/**
  * Adds a validator to the `State` configuration.
  * @param {!function()} validator
  * @return {!Object} `State` configuration object.
  */
	validator: function validator(_validator) {
		return mergeConfig(this, {
			validator: _validator
		});
	},


	/**
  * Adds a default value to the `State` configuration.
  * @param {*} value
  * @return {!Object} `State` configuration object.
  */
	value: function value(_value) {
		return mergeConfig(this, {
			value: _value
		});
	},


	/**
  * Adds a valueFn that will return a default value for the `State` configuration.
  * @param {!function()} valueFn
  * @return {!Object} `State` configuration object.
  */
	valueFn: function valueFn(_valueFn) {
		return mergeConfig(this, {
			valueFn: _valueFn
		});
	}
};

/**
 * Recursively sets validators for shapeOf.
 * @param {!Object} shape The shape of specific types.
 * @return {!Object} Shape object with validators as values.
 */
function destructShapeOfConfigs(shape) {
	var keys = Object.keys(shape);

	var retShape = {};

	keys.forEach(function (key) {
		var value = shape[key];

		retShape[key] = value.config && value.config.validator ? value.config.validator : destructShapeOfConfigs(value);
	});

	return retShape;
}

/**
 * Merges the given config object into the one that has been built so far.
 * @param {!Object} context The object calling this function.
 * @param {!Object} config The object to merge to the built config.
 * @return {!Object} The final object containing the built config.
 */
function mergeConfig(context, config) {
	var obj = context;
	if (obj === Config) {
		obj = Object.create(Config);
		obj.config = {};
	}
	_metal.object.mixin(obj.config, config);
	return obj;
}

/**
* Calls validators with provided argument.
* @param {string} name The name of the validator.
* @param {!function()}
*/
function setExplicitValueValidators(name) {
	return function (arg) {
		return this.validator(_validators2.default[name](arg));
	};
}

/**
* Calls validators with a single nested config.
* @param {string} name The name of the validator.
* @return {!function()}
*/
function setNestedValidators(name) {
	return function (arg) {
		return this.validator(_validators2.default[name](arg.config.validator));
	};
}

/**
* Adds primitive type validators to the config object.
* @param {string} name The name of the validator.
* @return {!function()}
*/
function setPrimitiveValidators(name) {
	return function () {
		return this.validator(_validators2.default[name]);
	};
}

exports.default = Config;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metal = __webpack_require__(2);

var _metalEvents = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * State adds support for having object properties that can be watched for
 * changes, as well as configured with validators, setters and other options.
 * See the `configState` method for a complete list of available configuration
 * options for each state key.
 * @extends {EventEmitter}
 */
var State = function (_EventEmitter) {
	_inherits(State, _EventEmitter);

	/**
  * Constructor function for `State`.
  * @param {Object=} opt_config Optional config object with initial values to
  *     set state properties to.
  * @param {Object=} opt_obj Optional object that should hold the state
  *     properties. If none is given, they will be added directly to `this`
  *     instead.
  * @param {Object=} opt_context Optional context to call functions (like
  *     validators and setters) on. Defaults to `this`.
  */
	function State(opt_config, opt_obj, opt_context) {
		_classCallCheck(this, State);

		/**
   * Context to call functions (like validators and setters) on.
   * @type {!Object}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this));

		_this.context_ = opt_context || _this;

		/**
   * Map of keys that can not be used as state keys.
   * @type {Object<string, boolean>}
   * @protected
   */
		_this.keysBlacklist_ = null;

		/**
   * Object that should hold the state properties.
   * @type {!Object}
   * @protected
   */
		_this.obj_ = opt_obj || _this;

		_this.eventData_ = null;

		/**
   * Object with information about the batch event that is currently
   * scheduled, or null if none is.
   * @type {Object}
   * @protected
   */
		_this.scheduledBatchData_ = null;

		/**
   * Object that contains information about all this instance's state keys.
   * @type {!Object<string, !Object>}
   * @protected
   */
		_this.stateInfo_ = {};

		_this.stateConfigs_ = {};

		_this.initialValues_ = _metal.object.mixin({}, opt_config);

		_this.setShouldUseFacade(true);
		_this.configStateFromStaticHint_();

		Object.defineProperty(_this.obj_, State.STATE_REF_KEY, {
			configurable: true,
			enumerable: false,
			value: _this
		});
		return _this;
	}

	/**
  * Logs an error if the given property is required but wasn't given.
  * @param {string} name
  * @protected
  */


	_createClass(State, [{
		key: 'assertGivenIfRequired_',
		value: function assertGivenIfRequired_(name) {
			var config = this.stateConfigs_[name];
			if (config.required) {
				var info = this.getStateInfo(name);
				var value = info.state === State.KeyStates.INITIALIZED ? this.get(name) : this.initialValues_[name];
				if (!(0, _metal.isDefAndNotNull)(value)) {
					var errorMessage = 'The property called "' + name + '" is required but didn\'t receive a value.';
					if (this.shouldThrowValidationError()) {
						throw new Error(errorMessage);
					} else {
						console.error(errorMessage);
					}
				}
			}
		}

		/**
   * Logs an error if the `validatorReturn` is instance of `Error`.
   * @param {*} validatorReturn
   * @protected
   */

	}, {
		key: 'assertValidatorReturnInstanceOfError_',
		value: function assertValidatorReturnInstanceOfError_(validatorReturn) {
			if (validatorReturn instanceof Error) {
				if (this.shouldThrowValidationError()) {
					throw validatorReturn;
				} else {
					console.error('Warning: ' + validatorReturn);
				}
			}
		}

		/**
   * Checks that the given name is a valid state key name. If it's not, an error
   * will be thrown.
   * @param {string} name The name to be validated.
   * @throws {Error}
   * @protected
   */

	}, {
		key: 'assertValidStateKeyName_',
		value: function assertValidStateKeyName_(name) {
			if (this.keysBlacklist_ && this.keysBlacklist_[name]) {
				throw new Error('It\'s not allowed to create a state key with the name "' + name + '".');
			}
		}

		/**
   * Builds the property definition object for the specified state key.
   * @param {string} name The name of the key.
   * @return {!Object}
   * @protected
   */

	}, {
		key: 'buildKeyPropertyDef_',
		value: function buildKeyPropertyDef_(name) {
			return {
				configurable: true,
				enumerable: true,
				get: function get() {
					return this[State.STATE_REF_KEY].getStateKeyValue_(name);
				},
				set: function set(val) {
					this[State.STATE_REF_KEY].setStateKeyValue_(name, val);
				}
			};
		}

		/**
   * Calls the requested function, running the appropriate code for when it's
   * passed as an actual function object or just the function's name.
   * @param {!Function|string} fn Function, or name of the function to run.
   * @param {!Array} An optional array of parameters to be passed to the
   *   function that will be called.
   * @return {*} The return value of the called function.
   * @protected
   */

	}, {
		key: 'callFunction_',
		value: function callFunction_(fn, args) {
			if ((0, _metal.isString)(fn)) {
				return this.context_[fn].apply(this.context_, args);
			} else if ((0, _metal.isFunction)(fn)) {
				return fn.apply(this.context_, args);
			}
		}

		/**
   * Calls the state key's setter, if there is one.
   * @param {string} name The name of the key.
   * @param {*} value The value to be set.
   * @param {*} currentValue The current value.
   * @return {*} The final value to be set.
   * @protected
   */

	}, {
		key: 'callSetter_',
		value: function callSetter_(name, value, currentValue) {
			var config = this.stateConfigs_[name];
			if (config.setter) {
				value = this.callFunction_(config.setter, [value, currentValue]);
			}
			return value;
		}

		/**
   * Calls the state key's validator, if there is one. Emits console
   * warning if validator returns a string.
   * @param {string} name The name of the key.
   * @param {*} value The value to be validated.
   * @return {boolean} Flag indicating if value is valid or not.
   * @protected
   */

	}, {
		key: 'callValidator_',
		value: function callValidator_(name, value) {
			var config = this.stateConfigs_[name];
			if (config.validator) {
				var validatorReturn = this.callFunction_(config.validator, [value, name, this.context_]);
				this.assertValidatorReturnInstanceOfError_(validatorReturn);
				return validatorReturn;
			}
			return true;
		}

		/**
   * Checks if the it's allowed to write on the requested state key.
   * @param {string} name The name of the key.
   * @return {boolean}
   */

	}, {
		key: 'canSetState',
		value: function canSetState(name) {
			var info = this.getStateInfo(name);
			return !this.stateConfigs_[name].writeOnce || !info.written;
		}

		/**
   * Adds the given key(s) to the state, together with its(their) configs.
   * Config objects support the given settings:
   *     required - When set to `true`, causes errors to be printed (via
   *     `console.error`) if no value is given for the property.
   *
   *     setter - Function for normalizing state key values. It receives the new
   *     value that was set, and returns the value that should be stored.
   *
   *     validator - Function that validates state key values. When it returns
   *     false, the new value is ignored. When it returns an instance of Error,
   *     it will emit the error to the console.
   *
   *     value - The default value for the state key. Note that setting this to
   *     an object will cause all class instances to use the same reference to
   *     the object. To have each instance use a different reference for objects,
   *     use the `valueFn` option instead.
   *
   *     valueFn - A function that returns the default value for a state key.
   *
   *     writeOnce - Ignores writes to the state key after it's been first
   *     written to. That is, allows writes only when setting the value for the
   *     first time.
   * @param {!Object.<string, !Object>|string} configs An object that maps
   *     configuration options for keys to be added to the state.
   * @param {boolean|Object|*=} opt_context The context where the added state
   *     keys will be defined (defaults to `this`), or false if they shouldn't
   *     be defined at all.
   */

	}, {
		key: 'configState',
		value: function configState(configs, opt_context) {
			var names = Object.keys(configs);
			if (names.length === 0) {
				return;
			}

			if (opt_context !== false) {
				var props = {};
				for (var i = 0; i < names.length; i++) {
					var name = names[i];
					this.assertValidStateKeyName_(name);
					props[name] = this.buildKeyPropertyDef_(name);
				}
				Object.defineProperties(opt_context || this.obj_, props);
			}

			this.stateConfigs_ = configs;
			for (var _i = 0; _i < names.length; _i++) {
				var _name = names[_i];
				configs[_name] = configs[_name].config ? configs[_name].config : configs[_name];
				this.assertGivenIfRequired_(names[_i]);
				this.validateInitialValue_(names[_i]);
			}
		}

		/**
   * Adds state keys from super classes static hint `MyClass.STATE = {};`.
   * @param {Object.<string, !Object>=} opt_config An object that maps all the
   *     configurations for state keys.
   * @protected
   */

	}, {
		key: 'configStateFromStaticHint_',
		value: function configStateFromStaticHint_() {
			var ctor = this.constructor;
			if (ctor !== State) {
				var defineContext = void 0;
				if (this.obj_ === this) {
					defineContext = ctor.hasConfiguredState_ ? false : ctor.prototype;
					ctor.hasConfiguredState_ = true;
				}
				this.configState(State.getStateStatic(ctor), defineContext);
			}
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			_get(State.prototype.__proto__ || Object.getPrototypeOf(State.prototype), 'disposeInternal', this).call(this);
			this.initialValues_ = null;
			this.stateInfo_ = null;
			this.stateConfigs_ = null;
			this.scheduledBatchData_ = null;
		}

		/**
   * Emits the state change batch event.
   * @protected
   */

	}, {
		key: 'emitBatchEvent_',
		value: function emitBatchEvent_() {
			if (!this.isDisposed()) {
				var data = this.scheduledBatchData_;
				this.scheduledBatchData_ = null;
				this.context_.emit('stateChanged', data);
			}
		}

		/**
   * Returns the value of the requested state key.
   * Note: this can and should be accomplished by accessing the value as a
   * regular property. This should only be used in cases where a function is
   * actually needed.
   * @param {string} name
   * @return {*}
   */

	}, {
		key: 'get',
		value: function get(name) {
			return this.obj_[name];
		}

		/**
   * Returns an object that maps state keys to their values.
   * @param {Array<string>=} opt_names A list of names of the keys that should
   *   be returned. If none is given, the whole state will be returned.
   * @return {Object.<string, *>}
   */

	}, {
		key: 'getState',
		value: function getState(opt_names) {
			var state = {};
			var names = opt_names || this.getStateKeys();

			for (var i = 0; i < names.length; i++) {
				state[names[i]] = this.get(names[i]);
			}

			return state;
		}

		/**
   * Gets information about the specified state property.
   * @param {string} name
   * @return {!Object}
   */

	}, {
		key: 'getStateInfo',
		value: function getStateInfo(name) {
			if (!this.stateInfo_[name]) {
				this.stateInfo_[name] = {};
			}
			return this.stateInfo_[name];
		}

		/**
   * Gets the config object for the requested state key.
   * @param {string} name The key's name.
   * @return {Object}
   * @protected
   */

	}, {
		key: 'getStateKeyConfig',
		value: function getStateKeyConfig(name) {
			return this.stateConfigs_ ? this.stateConfigs_[name] : null;
		}

		/**
   * Returns an array with all state keys.
   * @return {!Array.<string>}
   */

	}, {
		key: 'getStateKeys',
		value: function getStateKeys() {
			return this.stateConfigs_ ? Object.keys(this.stateConfigs_) : [];
		}

		/**
   * Gets the value of the specified state key. This is passed as that key's
   * getter to the `Object.defineProperty` call inside the `addKeyToState` method.
   * @param {string} name The name of the key.
   * @return {*}
   * @protected
   */

	}, {
		key: 'getStateKeyValue_',
		value: function getStateKeyValue_(name) {
			if (!this.warnIfDisposed_(name)) {
				this.initStateKey_(name);
				return this.getStateInfo(name).value;
			}
		}

		/**
   * Merges the STATE static variable for the given constructor function.
   * @param  {!Function} ctor Constructor function.
   * @return {boolean} Returns true if merge happens, false otherwise.
   * @static
   */

	}, {
		key: 'hasBeenSet',


		/**
   * Checks if the value of the state key with the given name has already been
   * set. Note that this doesn't run the key's getter.
   * @param {string} name The name of the key.
   * @return {boolean}
   */
		value: function hasBeenSet(name) {
			var info = this.getStateInfo(name);
			return info.state === State.KeyStates.INITIALIZED || this.hasInitialValue_(name);
		}

		/**
   * Checks if an initial value was given to the specified state property.
   * @param {string} name The name of the key.
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'hasInitialValue_',
		value: function hasInitialValue_(name) {
			return this.initialValues_.hasOwnProperty(name);
		}

		/**
   * Checks if the given key is present in this instance's state.
   * @param {string} key
   * @return {boolean}
   */

	}, {
		key: 'hasStateKey',
		value: function hasStateKey(key) {
			if (!this.warnIfDisposed_(key)) {
				return !!this.stateConfigs_[key];
			}
		}

		/**
   * Informs of changes to a state key's value through an event. Won't trigger
   * the event if the value hasn't changed or if it's being initialized.
   * @param {string} name The name of the key.
   * @param {*} prevVal The previous value of the key.
   * @protected
   */

	}, {
		key: 'informChange_',
		value: function informChange_(name, prevVal) {
			if (this.shouldInformChange_(name, prevVal)) {
				var data = _metal.object.mixin({
					key: name,
					newVal: this.get(name),
					prevVal: prevVal
				}, this.eventData_);
				this.context_.emit(name + 'Changed', data);
				this.context_.emit('stateKeyChanged', data);
				this.scheduleBatchEvent_(data);
			}
		}

		/**
   * Initializes the specified state key, giving it a first value.
   * @param {string} name The name of the key.
   * @protected
   */

	}, {
		key: 'initStateKey_',
		value: function initStateKey_(name) {
			var info = this.getStateInfo(name);
			if (info.state !== State.KeyStates.UNINITIALIZED) {
				return;
			}

			info.state = State.KeyStates.INITIALIZING;
			this.setInitialValue_(name);
			if (!info.written) {
				this.setDefaultValue(name);
			}
			info.state = State.KeyStates.INITIALIZED;
		}

		/**
   * Merges two values for the STATE property into a single object.
   * @param {Object} mergedVal
   * @param {Object} currVal
   * @return {!Object} The merged value.
   * @static
   */

	}, {
		key: 'removeStateKey',


		/**
   * Removes the requested state key.
   * @param {string} name The name of the key.
   */
		value: function removeStateKey(name) {
			this.stateInfo_[name] = null;
			this.stateConfigs_[name] = null;
			delete this.obj_[name];
		}

		/**
   * Schedules a state change batch event to be emitted asynchronously.
   * @param {!Object} changeData Information about a state key's update.
   * @protected
   */

	}, {
		key: 'scheduleBatchEvent_',
		value: function scheduleBatchEvent_(changeData) {
			if (!this.scheduledBatchData_) {
				_metal.async.nextTick(this.emitBatchEvent_, this);
				this.scheduledBatchData_ = _metal.object.mixin({
					changes: {}
				}, this.eventData_);
			}

			var name = changeData.key;
			var changes = this.scheduledBatchData_.changes;
			if (changes[name]) {
				changes[name].newVal = changeData.newVal;
			} else {
				changes[name] = changeData;
			}
		}

		/**
   * Sets the value of the requested state key.
   * Note: this can and should be accomplished by setting the state key as a
   * regular property. This should only be used in cases where a function is
   * actually needed.
   * @param {string} name
   * @param {*} value
   * @return {*}
   */

	}, {
		key: 'set',
		value: function set(name, value) {
			if (this.hasStateKey(name)) {
				this.obj_[name] = value;
			}
		}

		/**
   * Sets the default value of the requested state key.
   * @param {string} name The name of the key.
   * @return {*}
   */

	}, {
		key: 'setDefaultValue',
		value: function setDefaultValue(name) {
			var config = this.stateConfigs_[name];

			if (config.value !== undefined) {
				this.set(name, config.value);
			} else {
				this.set(name, this.callFunction_(config.valueFn));
			}
		}

		/**
   * Sets data to be sent with all events emitted from this instance.
   * @param {Object}
   */

	}, {
		key: 'setEventData',
		value: function setEventData(data) {
			this.eventData_ = data;
		}

		/**
   * Sets the initial value of the requested state key.
   * @param {string} name The name of the key.
   * @return {*}
   * @protected
   */

	}, {
		key: 'setInitialValue_',
		value: function setInitialValue_(name) {
			if (this.hasInitialValue_(name)) {
				this.set(name, this.initialValues_[name]);
				this.initialValues_[name] = undefined;
			}
		}

		/**
   * Sets a map of keys that are not valid state keys.
   * @param {!Object<string, boolean>}
   */

	}, {
		key: 'setKeysBlacklist',
		value: function setKeysBlacklist(blacklist) {
			this.keysBlacklist_ = blacklist;
		}

		/**
   * Sets the value of all the specified state keys.
   * @param {!Object.<string,*>} values A map of state keys to the values they
   *   should be set to.
   * @param {function()=} opt_callback An optional function that will be run
   *   after the next batched update is triggered.
   */

	}, {
		key: 'setState',
		value: function setState(values, opt_callback) {
			var _this2 = this;

			Object.keys(values).forEach(function (name) {
				return _this2.set(name, values[name]);
			});
			if (opt_callback && this.scheduledBatchData_) {
				this.context_.once('stateChanged', opt_callback);
			}
		}

		/**
   * Sets the value of the specified state key. This is passed as that key's
   * setter to the `Object.defineProperty` call inside the `addKeyToState`
   * method.
   * @param {string} name The name of the key.
   * @param {*} value The new value of the key.
   * @protected
   */

	}, {
		key: 'setStateKeyValue_',
		value: function setStateKeyValue_(name, value) {
			if (this.warnIfDisposed_(name) || !this.canSetState(name) || !this.validateKeyValue_(name, value)) {
				return;
			}

			var prevVal = this.get(name);
			var info = this.getStateInfo(name);
			info.value = this.callSetter_(name, value, prevVal);
			this.assertGivenIfRequired_(name);
			info.written = true;
			this.informChange_(name, prevVal);
		}

		/**
   * Checks if we should inform about a state update. Updates are ignored during
   * state initialization. Otherwise, updates to primitive values are only
   * informed when the new value is different from the previous one. Updates to
   * objects (which includes functions and arrays) are always informed outside
   * initialization though, since we can't be sure if all of the internal data
   * has stayed the same.
   * @param {string} name The name of the key.
   * @param {*} prevVal The previous value of the key.
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'shouldInformChange_',
		value: function shouldInformChange_(name, prevVal) {
			var info = this.getStateInfo(name);
			return info.state === State.KeyStates.INITIALIZED && ((0, _metal.isObject)(prevVal) || prevVal !== this.get(name));
		}

		/**
   * Returns a boolean that determines whether or not should throw error when
   * vaildator functions returns an `Error` instance.
   * @return {boolean} By default returns false.
   */

	}, {
		key: 'shouldThrowValidationError',
		value: function shouldThrowValidationError() {
			return false;
		}

		/**
   * Validates the initial value for the state property with the given name.
   * @param {string} name
   * @protected
   */

	}, {
		key: 'validateInitialValue_',
		value: function validateInitialValue_(name) {
			if (this.hasInitialValue_(name) && !this.callValidator_(name, this.initialValues_[name])) {
				delete this.initialValues_[name];
			}
		}

		/**
   * Validates the state key's value, which includes calling the validator
   * defined in the key's configuration object, if there is one.
   * @param {string} name The name of the key.
   * @param {*} value The value to be validated.
   * @return {boolean} Flag indicating if value is valid or not.
   * @protected
   */

	}, {
		key: 'validateKeyValue_',
		value: function validateKeyValue_(name, value) {
			var info = this.getStateInfo(name);
			return info.state === State.KeyStates.INITIALIZING || this.callValidator_(name, value);
		}

		/**
   * Warns if this instance has already been disposed.
   * @param {string} name Name of the property to be accessed if not disposed.
   * @return {boolean} True if disposed, or false otherwise.
   * @protected
   */

	}, {
		key: 'warnIfDisposed_',
		value: function warnIfDisposed_(name) {
			var disposed = this.isDisposed();
			if (disposed) {
				console.warn('Error. Trying to access property "' + name + '" on disposed instance');
			}
			return disposed;
		}
	}], [{
		key: 'getStateStatic',
		value: function getStateStatic(ctor) {
			return (0, _metal.getStaticProperty)(ctor, 'STATE', State.mergeState);
		}
	}, {
		key: 'mergeState',
		value: function mergeState(mergedVal, currVal) {
			return _metal.object.mixin({}, currVal, mergedVal);
		}
	}]);

	return State;
}(_metalEvents.EventEmitter);

State.STATE_REF_KEY = '__METAL_STATE_REF_KEY__';

/**
 * Constants that represent the states that a state key can be in.
 * @type {!Object}
 */
State.KeyStates = {
	UNINITIALIZED: undefined,
	INITIALIZING: 1,
	INITIALIZED: 2
};

exports.default = State;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalEvents = __webpack_require__(7);

var _metalState = __webpack_require__(8);

var _metalState2 = _interopRequireDefault(_metalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Toggler component.
 */
var Toggler = function (_State) {
	_inherits(Toggler, _State);

	/**
  * @inheritDoc
  */
	function Toggler(opt_config) {
		_classCallCheck(this, Toggler);

		var _this = _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).call(this, opt_config));

		_this.headerEventHandler_ = new _metalEvents.EventHandler();

		_this.on('headerChanged', _this.syncHeader);
		_this.syncHeader();
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(Toggler, [{
		key: 'disposeInternal',
		value: function disposeInternal() {
			_get(Toggler.prototype.__proto__ || Object.getPrototypeOf(Toggler.prototype), 'disposeInternal', this).call(this);
			this.headerEventHandler_.removeAllListeners();
		}

		/**
  * Manually collapse the content's visibility.
  * @param {string|!Element} header
  */

	}, {
		key: 'collapse',
		value: function collapse(header) {
			var headerElements = this.getHeaderElements_(header);
			var content = this.getContentElement_(headerElements);
			_metalDom2.default.removeClasses(content, this.expandedClasses);
			_metalDom2.default.addClasses(content, this.collapsedClasses);
			_metalDom2.default.removeClasses(headerElements, this.headerExpandedClasses);
			_metalDom2.default.addClasses(headerElements, this.headerCollapsedClasses);
		}

		/**
  * Manually expand the content's visibility.
  * @param {string|!Element} header
  */

	}, {
		key: 'expand',
		value: function expand(header) {
			var headerElements = this.getHeaderElements_(header);
			var content = this.getContentElement_(headerElements);
			_metalDom2.default.addClasses(content, this.expandedClasses);
			_metalDom2.default.removeClasses(content, this.collapsedClasses);
			_metalDom2.default.addClasses(headerElements, this.headerExpandedClasses);
			_metalDom2.default.removeClasses(headerElements, this.headerCollapsedClasses);
		}

		/**
   * Gets the content to be toggled by the given header element.
   * @param {!Element} header
   * @returns {!Element}
   * @protected
   */

	}, {
		key: 'getContentElement_',
		value: function getContentElement_(header) {
			if (_metal2.default.isElement(this.content)) {
				return this.content;
			}

			var content = _metalDom2.default.next(header, this.content);
			if (content) {
				return content;
			}

			if (_metal2.default.isElement(header)) {
				content = header.querySelector(this.content);
				if (content) {
					return content;
				}
			}

			return this.container.querySelectorAll(this.content);
		}

		/**
   * Gets the header elements by giving a selector.
   * @param {string} header
   * @returns {!Nodelist}
   * @protected
   */

	}, {
		key: 'getHeaderElements_',
		value: function getHeaderElements_() {
			var header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.header;

			if (_metal2.default.isElement(header) || _metal2.default.isElement(header[0])) {
				return header;
			}
			return this.container.querySelectorAll(header);
		}

		/**
   * Handles a `click` event on the header.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleClick_',
		value: function handleClick_(event) {
			this.toggle(event.delegateTarget || event.currentTarget);
		}

		/**
   * Handles a `keydown` event on the header.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleKeydown_',
		value: function handleKeydown_(event) {
			if (event.keyCode === 13 || event.keyCode === 32) {
				this.toggle(event.delegateTarget || event.currentTarget);
				event.preventDefault();
			}
		}

		/**
   * Checks if there is any expanded header in the component context.
   * @param {string|!Element} event
   * @param {boolean}
   * @protected
   */

	}, {
		key: 'hasExpanded_',
		value: function hasExpanded_(header) {
			if (_metal2.default.isElement(header)) {
				return _metalDom2.default.hasClass(header, this.headerExpandedClasses);
			}
			return !!this.container.querySelectorAll('.' + this.headerExpandedClasses).length;
		}

		/**
   * Syncs the component according to the value of the `header` state,
   * attaching events to the new element and detaching from any previous one.
   */

	}, {
		key: 'syncHeader',
		value: function syncHeader() {
			this.headerEventHandler_.removeAllListeners();
			if (this.header) {
				if (_metal2.default.isString(this.header)) {
					this.headerEventHandler_.add(_metalDom2.default.delegate(this.container, 'click', this.header, this.handleClick_.bind(this)), _metalDom2.default.delegate(this.container, 'keydown', this.header, this.handleKeydown_.bind(this)));
				} else {
					this.headerEventHandler_.add(_metalDom2.default.on(this.header, 'click', this.handleClick_.bind(this)), _metalDom2.default.on(this.header, 'keydown', this.handleKeydown_.bind(this)));
				}
			}
		}

		/**
   * Toggles the content's visibility.
   * @param {string|!Element} header
   */

	}, {
		key: 'toggle',
		value: function toggle(header) {
			var headerElements = this.getHeaderElements_(header);
			if (this.hasExpanded_(headerElements)) {
				this.collapse(headerElements);
			} else {
				this.expand(headerElements);
			}
		}
	}]);

	return Toggler;
}(_metalState2.default);

/**
 * State configuration.
 */


Toggler.STATE = {
	/**
  * The CSS classes added to the content when it's collapsed.
  */
	collapsedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-collapsed'
	},

	/**
  * The element where the header/content selectors will be looked for.
  * @type {string|!Element}
  */
	container: {
		setter: _metalDom2.default.toElement,
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		},
		value: document
	},

	/**
  * The element that should be expanded/collapsed by this toggler.
  * @type {string|!Element}
  */
	content: {
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		}
	},

	/**
  * The CSS classes added to the content when it's expanded.
  */
	expandedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-expanded'
	},

	/**
  * The element that should be trigger toggling.
  * @type {string|!Element}
  */
	header: {
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		}
	},

	/**
  * The CSS classes added to the header when the content is collapsed.
  */
	headerCollapsedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-header-collapsed'
	},

	/**
  * The CSS classes added to the header when the content is expanded.
  */
	headerExpandedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-header-expanded'
	}
};

exports.default = Toggler;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(94);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var array = function () {
	function array() {
		_classCallCheck(this, array);
	}

	_createClass(array, null, [{
		key: 'equal',

		/**
   * Checks if the given arrays have the same content.
   * @param {!Array<*>} arr1
   * @param {!Array<*>} arr2
   * @return {boolean}
   */
		value: function equal(arr1, arr2) {
			if (arr1 === arr2) {
				return true;
			}
			if (arr1.length !== arr2.length) {
				return false;
			}
			for (var i = 0; i < arr1.length; i++) {
				if (arr1[i] !== arr2[i]) {
					return false;
				}
			}
			return true;
		}

		/**
   * Returns the first value in the given array that isn't undefined.
   * @param {!Array} arr
   * @return {*}
   */

	}, {
		key: 'firstDefinedValue',
		value: function firstDefinedValue(arr) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] !== undefined) {
					return arr[i];
				}
			}
		}

		/**
   * Transforms the input nested array to become flat.
   * @param {Array.<*|Array.<*>>} arr Nested array to flatten.
   * @param {Array.<*>} opt_output Optional output array.
   * @return {Array.<*>} Flat array.
   */

	}, {
		key: 'flatten',
		value: function flatten(arr, opt_output) {
			var output = opt_output || [];
			for (var i = 0; i < arr.length; i++) {
				if (Array.isArray(arr[i])) {
					array.flatten(arr[i], output);
				} else {
					output.push(arr[i]);
				}
			}
			return output;
		}

		/**
   * Removes the first occurrence of a particular value from an array.
   * @param {Array.<T>} arr Array from which to remove value.
   * @param {T} obj Object to remove.
   * @return {boolean} True if an element was removed.
   * @template T
   */

	}, {
		key: 'remove',
		value: function remove(arr, obj) {
			var i = arr.indexOf(obj);
			var rv = void 0;
			if (rv = i >= 0) {
				array.removeAt(arr, i);
			}
			return rv;
		}

		/**
   * Removes from an array the element at index i
   * @param {Array} arr Array or array like object from which to remove value.
   * @param {number} i The index to remove.
   * @return {boolean} True if an element was removed.
   */

	}, {
		key: 'removeAt',
		value: function removeAt(arr, i) {
			return Array.prototype.splice.call(arr, i, 1).length === 1;
		}

		/**
   * Slices the given array, just like Array.prototype.slice, but this
   * is faster and working on all array-like objects (like arguments).
   * @param {!Object} arr Array-like object to slice.
   * @param {number} start The index that should start the slice.
   * @param {number=} opt_end The index where the slice should end, not
   *   included in the final array. If not given, all elements after the
   *   start index will be included.
   * @return {!Array}
   */

	}, {
		key: 'slice',
		value: function slice(arr, start, opt_end) {
			var sliced = [];
			var end = (0, _core.isDef)(opt_end) ? opt_end : arr.length;
			for (var i = start; i < end; i++) {
				sliced.push(arr[i]);
			}
			return sliced;
		}
	}]);

	return array;
}();

exports.default = array;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/*!
 * Polyfill from Google's Closure Library.
 * Copyright 2013 The Closure Library Authors. All Rights Reserved.
 */



Object.defineProperty(exports, "__esModule", {
	value: true
});
var async = {};

/**
 * Throw an item without interrupting the current execution context.  For
 * example, if processing a group of items in a loop, sometimes it is useful
 * to report an error while still allowing the rest of the batch to be
 * processed.
 * @param {*} exception
 */
async.throwException = function (exception) {
	// Each throw needs to be in its own context.
	async.nextTick(function () {
		throw exception;
	});
};

/**
 * Fires the provided callback just before the current callstack unwinds, or as
 * soon as possible after the current JS execution context.
 * @param {function(this:THIS)} callback
 * @param {THIS=} opt_context Object to use as the "this value" when calling
 *     the provided function.
 * @template THIS
 */
async.run = function (callback, opt_context) {
	if (!async.run.workQueueScheduled_) {
		// Nothing is currently scheduled, schedule it now.
		async.nextTick(async.run.processWorkQueue);
		async.run.workQueueScheduled_ = true;
	}

	async.run.workQueue_.push(new async.run.WorkItem_(callback, opt_context));
};

/** @private {boolean} */
async.run.workQueueScheduled_ = false;

/** @private {!Array.<!async.run.WorkItem_>} */
async.run.workQueue_ = [];

/**
 * Run any pending async.run work items. This function is not intended
 * for general use, but for use by entry point handlers to run items ahead of
 * async.nextTick.
 */
async.run.processWorkQueue = function () {
	// NOTE: additional work queue items may be pushed while processing.
	while (async.run.workQueue_.length) {
		// Don't let the work queue grow indefinitely.
		var workItems = async.run.workQueue_;
		async.run.workQueue_ = [];
		for (var i = 0; i < workItems.length; i++) {
			var workItem = workItems[i];
			try {
				workItem.fn.call(workItem.scope);
			} catch (e) {
				async.throwException(e);
			}
		}
	}

	// There are no more work items, reset the work queue.
	async.run.workQueueScheduled_ = false;
};

/**
 * @constructor
 * @final
 * @struct
 * @private
 *
 * @param {function()} fn
 * @param {Object|null|undefined} scope
 */
async.run.WorkItem_ = function (fn, scope) {
	/** @const */
	this.fn = fn;
	/** @const */
	this.scope = scope;
};

/**
 * Fires the provided callbacks as soon as possible after the current JS
 * execution context. setTimeout(…, 0) always takes at least 5ms for legacy
 * reasons.
 * @param {function(this:SCOPE)} callback Callback function to fire as soon as
 *     possible.
 * @param {SCOPE=} opt_context Object in whose scope to call the listener.
 * @template SCOPE
 */
async.nextTick = function (callback, opt_context) {
	var cb = callback;
	if (opt_context) {
		cb = callback.bind(opt_context);
	}
	cb = async.nextTick.wrapCallback_(cb);
	// Introduced and currently only supported by IE10.
	// Verify if variable is defined on the current runtime (i.e., node, browser).
	// Can't use typeof enclosed in a function (such as core.isFunction) or an
	// exception will be thrown when the function is called on an environment
	// where the variable is undefined.
	if (typeof setImmediate === 'function') {
		setImmediate(cb);
		return;
	}
	// Look for and cache the custom fallback version of setImmediate.
	if (!async.nextTick.setImmediate_) {
		async.nextTick.setImmediate_ = async.nextTick.getSetImmediateEmulator_();
	}
	async.nextTick.setImmediate_(cb);
};

/**
 * Cache for the setImmediate implementation.
 * @type {function(function())}
 * @private
 */
async.nextTick.setImmediate_ = null;

/**
 * Determines the best possible implementation to run a function as soon as
 * the JS event loop is idle.
 * @return {function(function())} The "setImmediate" implementation.
 * @private
 */
async.nextTick.getSetImmediateEmulator_ = function () {
	// Create a private message channel and use it to postMessage empty messages
	// to ourselves.
	var Channel = void 0;

	// Verify if variable is defined on the current runtime (i.e., node, browser).
	// Can't use typeof enclosed in a function (such as core.isFunction) or an
	// exception will be thrown when the function is called on an environment
	// where the variable is undefined.
	if (typeof MessageChannel === 'function') {
		Channel = MessageChannel;
	}

	// If MessageChannel is not available and we are in a browser, implement
	// an iframe based polyfill in browsers that have postMessage and
	// document.addEventListener. The latter excludes IE8 because it has a
	// synchronous postMessage implementation.
	if (typeof Channel === 'undefined' && typeof window !== 'undefined' && window.postMessage && window.addEventListener) {
		/** @constructor */
		Channel = function Channel() {
			// Make an empty, invisible iframe.
			var iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			iframe.src = '';
			document.documentElement.appendChild(iframe);
			var win = iframe.contentWindow;
			var doc = win.document;
			doc.open();
			doc.write('');
			doc.close();
			var message = 'callImmediate' + Math.random();
			var origin = win.location.protocol + '//' + win.location.host;
			var onmessage = function (e) {
				// Validate origin and message to make sure that this message was
				// intended for us.
				if (e.origin !== origin && e.data !== message) {
					return;
				}
				this.port1.onmessage();
			}.bind(this);
			win.addEventListener('message', onmessage, false);
			this.port1 = {};
			this.port2 = {
				postMessage: function postMessage() {
					win.postMessage(message, origin);
				}
			};
		};
	}
	if (typeof Channel !== 'undefined') {
		var channel = new Channel();
		// Use a fifo linked list to call callbacks in the right order.
		var head = {};
		var tail = head;
		channel.port1.onmessage = function () {
			head = head.next;
			var cb = head.cb;
			head.cb = null;
			cb();
		};
		return function (cb) {
			tail.next = {
				cb: cb
			};
			tail = tail.next;
			channel.port2.postMessage(0);
		};
	}
	// Implementation for IE6-8: Script elements fire an asynchronous
	// onreadystatechange event when inserted into the DOM.
	if (typeof document !== 'undefined' && 'onreadystatechange' in document.createElement('script')) {
		return function (cb) {
			var script = document.createElement('script');
			script.onreadystatechange = function () {
				// Clean up and call the callback.
				script.onreadystatechange = null;
				script.parentNode.removeChild(script);
				script = null;
				cb();
				cb = null;
			};
			document.documentElement.appendChild(script);
		};
	}
	// Fall back to setTimeout with 0. In browsers this creates a delay of 5ms
	// or more.
	return function (cb) {
		setTimeout(cb, 0);
	};
};

/**
 * Helper function that is overrided to protect callbacks with entry point
 * monitor if the application monitors entry points.
 * @param {function()} callback Callback function to fire as soon as possible.
 * @return {function()} The wrapped callback.
 * @private
 */
async.nextTick.wrapCallback_ = function (opt_returnValue) {
	return opt_returnValue;
};

exports.default = async;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(159).setImmediate))

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/**
 * A collection of core utility functions.
 * @const
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.abstractMethod = abstractMethod;
exports.disableCompatibilityMode = disableCompatibilityMode;
exports.enableCompatibilityMode = enableCompatibilityMode;
exports.getCompatibilityModeData = getCompatibilityModeData;
exports.getFunctionName = getFunctionName;
exports.getStaticProperty = getStaticProperty;
exports.getUid = getUid;
exports.identityFunction = identityFunction;
exports.isBoolean = isBoolean;
exports.isDef = isDef;
exports.isDefAndNotNull = isDefAndNotNull;
exports.isDocument = isDocument;
exports.isDocumentFragment = isDocumentFragment;
exports.isElement = isElement;
exports.isFunction = isFunction;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isWindow = isWindow;
exports.isObject = isObject;
exports.isPromise = isPromise;
exports.isString = isString;
exports.isServerSide = isServerSide;
exports.nullFunction = nullFunction;
var compatibilityModeData_ = void 0;

/**
 * Counter for unique id.
 * @type {Number}
 * @private
 */
var uniqueIdCounter_ = 1;

/**
 * Unique id property prefix.
 * @type {String}
 * @protected
 */
var UID_PROPERTY = exports.UID_PROPERTY = 'core_' + (Math.random() * 1e9 >>> 0);

/**
 * When defining a class Foo with an abstract method bar(), you can do:
 * Foo.prototype.bar = abstractMethod
 *
 * Now if a subclass of Foo fails to override bar(), an error will be thrown
 * when bar() is invoked.
 *
 * @type {!Function}
 * @throws {Error} when invoked to indicate the method should be overridden.
 */
function abstractMethod() {
  throw Error('Unimplemented abstract method');
}

/**
 * Disables Metal.js's compatibility mode.
 */
function disableCompatibilityMode() {
  compatibilityModeData_ = undefined;
}

/**
 * Enables Metal.js's compatibility mode with the following features from rc
 * and 1.x versions:
 *     - Using "key" to reference component instances. In the current version
 *       this should be done via "ref" instead. This allows old code still
 *       using "key" to keep working like before. NOTE: this may cause
 *       problems, since "key" is meant to be used differently. Only use this
 *       if it's not possible to upgrade the code to use "ref" instead.
 * @param {Object=} opt_data Optional object with data to specify more
 *     details, such as:
 *         - renderers {Array} the template renderers that should be in
 *           compatibility mode, either their constructors or strings
 *           representing them (e.g. 'soy' or 'jsx'). By default, all the ones
 *           that extend from IncrementalDomRenderer.
 * @type {Object}
 */
function enableCompatibilityMode() {
  var opt_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  compatibilityModeData_ = opt_data;
}

/**
 * Returns the data used for compatibility mode, or nothing if it hasn't been
 * enabled.
 * @return {Object}
 */
function getCompatibilityModeData() {
  // Compatibility mode can be set via the __METAL_COMPATIBILITY__ global var.
  if (compatibilityModeData_ === undefined) {
    if (typeof window !== 'undefined' && window.__METAL_COMPATIBILITY__) {
      enableCompatibilityMode(window.__METAL_COMPATIBILITY__);
    }
  }
  return compatibilityModeData_;
}

/**
 * Returns the first argument if it's truthy, or the second otherwise.
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @protected
 */
function getFirstTruthy_(a, b) {
  return a || b;
}

/**
 * Gets the name of the given function. If the current browser doesn't
 * support the `name` property, this will calculate it from the function's
 * content string.
 * @param {!function()} fn
 * @return {string}
 */
function getFunctionName(fn) {
  if (!fn.name) {
    var str = fn.toString();
    fn.name = str.substring(9, str.indexOf('('));
  }
  return fn.name;
}

/**
 * Gets the value of a static property in the given class. The value will be
 * inherited from ancestors as expected, unless a custom merge function is given,
 * which can change how the super classes' value for that property will be merged
 * together.
 * The final merged value will be stored in another property, so that it won't
 * be recalculated even if this function is called multiple times.
 * @param {!function()} ctor Class constructor.
 * @param {string} propertyName Property name to be merged.
 * @param {function(*, *):*=} opt_mergeFn Function that receives the merged
 *     value of the property so far and the next value to be merged to it.
 *     Should return these two merged together. If not passed the final property
 *     will be the first truthy value among ancestors.
 */
function getStaticProperty(ctor, propertyName, opt_mergeFn) {
  var mergedName = propertyName + '_MERGED';
  if (!ctor.hasOwnProperty(mergedName)) {
    var merged = ctor.hasOwnProperty(propertyName) ? ctor[propertyName] : null;
    if (ctor.__proto__ && !ctor.__proto__.isPrototypeOf(Function)) {
      var mergeFn = opt_mergeFn || getFirstTruthy_;
      merged = mergeFn(merged, getStaticProperty(ctor.__proto__, propertyName, mergeFn));
    }
    ctor[mergedName] = merged;
  }
  return ctor[mergedName];
}

/**
 * Gets an unique id. If `opt_object` argument is passed, the object is
 * mutated with an unique id. Consecutive calls with the same object
 * reference won't mutate the object again, instead the current object uid
 * returns. See {@link UID_PROPERTY}.
 * @param {Object=} opt_object Optional object to be mutated with the uid. If
 *     not specified this method only returns the uid.
 * @param {boolean=} opt_noInheritance Optional flag indicating if this
 *     object's uid property can be inherited from parents or not.
 * @throws {Error} when invoked to indicate the method should be overridden.
 */
function getUid(opt_object, opt_noInheritance) {
  if (opt_object) {
    var id = opt_object[UID_PROPERTY];
    if (opt_noInheritance && !opt_object.hasOwnProperty(UID_PROPERTY)) {
      id = null;
    }
    return id || (opt_object[UID_PROPERTY] = uniqueIdCounter_++);
  }
  return uniqueIdCounter_++;
}

/**
 * The identity function. Returns its first argument.
 * @param {*=} opt_returnValue The single value that will be returned.
 * @return {?} The first argument.
 */
function identityFunction(opt_returnValue) {
  return opt_returnValue;
}

/**
 * Returns true if the specified value is a boolean.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is boolean.
 */
function isBoolean(val) {
  return typeof val === 'boolean';
}

/**
 * Returns true if the specified value is not undefined.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is defined.
 */
function isDef(val) {
  return val !== undefined;
}

/**
 * Returns true if value is not undefined or null.
 * @param {*} val
 * @return {boolean}
 */
function isDefAndNotNull(val) {
  return isDef(val) && !isNull(val);
}

/**
 * Returns true if value is a document.
 * @param {*} val
 * @return {boolean}
 */
function isDocument(val) {
  return val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.nodeType === 9;
}

/**
 * Returns true if value is a document-fragment.
 * @param {*} val
 * @return {boolean}
 */
function isDocumentFragment(val) {
  return val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.nodeType === 11;
}

/**
 * Returns true if value is a dom element.
 * @param {*} val
 * @return {boolean}
 */
function isElement(val) {
  return val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.nodeType === 1;
}

/**
 * Returns true if the specified value is a function.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is a function.
 */
function isFunction(val) {
  return typeof val === 'function';
}

/**
 * Returns true if value is null.
 * @param {*} val
 * @return {boolean}
 */
function isNull(val) {
  return val === null;
}

/**
 * Returns true if the specified value is a number.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is a number.
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Returns true if value is a window.
 * @param {*} val
 * @return {boolean}
 */
function isWindow(val) {
  return val !== null && val === val.window;
}

/**
 * Returns true if the specified value is an object. This includes arrays
 * and functions.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is an object.
 */
function isObject(val) {
  var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);
  return type === 'object' && val !== null || type === 'function';
}

/**
 * Returns true if value is a Promise.
 * @param {*} val
 * @return {boolean}
 */
function isPromise(val) {
  return val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && typeof val.then === 'function';
}

/**
 * Returns true if value is a string.
 * @param {*} val
 * @return {boolean}
 */
function isString(val) {
  return typeof val === 'string' || val instanceof String;
}

/**
 * Sets to true if running inside Node.js environment with extra check for
 * `process.browser` to skip Karma runner environment. Karma environment has
 * `process` defined even though it runs on the browser.
 * @return {boolean}
 */
function isServerSide() {
  return typeof process !== 'undefined' && typeof process.env !== 'undefined' && process.env.NODE_ENV !== 'test' && !process.browser;
}

/**
 * Null function used for default values of callbacks, etc.
 * @return {void} Nothing.
 */
function nullFunction() {}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Disposable utility. When inherited provides the `dispose` function to its
 * subclass, which is responsible for disposing of any object references
 * when an instance won't be used anymore. Subclasses should override
 * `disposeInternal` to implement any specific disposing logic.
 * @constructor
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Disposable = function () {
	function Disposable() {
		_classCallCheck(this, Disposable);

		/**
   * Flag indicating if this instance has already been disposed.
   * @type {boolean}
   * @protected
   */
		this.disposed_ = false;
	}

	/**
  * Disposes of this instance's object references. Calls `disposeInternal`.
  */


	_createClass(Disposable, [{
		key: 'dispose',
		value: function dispose() {
			if (!this.disposed_) {
				this.disposeInternal();
				this.disposed_ = true;
			}
		}

		/**
   * Subclasses should override this method to implement any specific
   * disposing logic (like clearing references and calling `dispose` on other
   * disposables).
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {}

		/**
   * Checks if this instance has already been disposed.
   * @return {boolean}
   */

	}, {
		key: 'isDisposed',
		value: function isDisposed() {
			return this.disposed_;
		}
	}]);

	return Disposable;
}();

exports.default = Disposable;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var object = function () {
	function object() {
		_classCallCheck(this, object);
	}

	_createClass(object, null, [{
		key: 'mixin',

		/**
   * Copies all the members of a source object to a target object.
   * @param {Object} target Target object.
   * @param {...Object} var_args The objects from which values will be copied.
   * @return {Object} Returns the target object reference.
   */
		value: function mixin(target) {
			var key = void 0,
			    source = void 0;
			for (var i = 1; i < arguments.length; i++) {
				source = arguments[i];
				for (key in source) {
					target[key] = source[key];
				}
			}
			return target;
		}

		/**
   * Returns an object based on its fully qualified external name.
   * @param {string} name The fully qualified name.
   * @param {object=} opt_obj The object within which to look; default is
   *     <code>window</code>.
   * @return {?} The value (object or primitive) or, if not found, undefined.
   */

	}, {
		key: 'getObjectByName',
		value: function getObjectByName(name, opt_obj) {
			var scope = opt_obj || window;
			var parts = name.split('.');
			return parts.reduce(function (part, key) {
				return part[key];
			}, scope);
		}

		/**
   * Returns a new object with the same keys as the given one, but with
   * their values set to the return values of the specified function.
   * @param {!Object} obj
   * @param {!function(string, *)} fn
   * @return {!Object}
   */

	}, {
		key: 'map',
		value: function map(obj, fn) {
			var mappedObj = {};
			var keys = Object.keys(obj);
			for (var i = 0; i < keys.length; i++) {
				mappedObj[keys[i]] = fn(keys[i], obj[keys[i]]);
			}
			return mappedObj;
		}

		/**
   * Checks if the two given objects are equal. This is done via a shallow
   * check, including only the keys directly contained by the 2 objects.
   * @return {boolean}
   */

	}, {
		key: 'shallowEqual',
		value: function shallowEqual(obj1, obj2) {
			if (obj1 === obj2) {
				return true;
			}

			var keys1 = Object.keys(obj1);
			var keys2 = Object.keys(obj2);
			if (keys1.length !== keys2.length) {
				return false;
			}

			for (var i = 0; i < keys1.length; i++) {
				if (obj1[keys1[i]] !== obj2[keys1[i]]) {
					return false;
				}
			}
			return true;
		}
	}]);

	return object;
}();

exports.default = object;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var string = function () {
	function string() {
		_classCallCheck(this, string);
	}

	_createClass(string, null, [{
		key: 'caseInsensitiveCompare',

		/**
   * Compares the given strings without taking the case into account.
   * @param {string|number} str1
   * @param {string|number} str2
   * @return {number} Either -1, 0 or 1, according to if the first string is
   *     "smaller", equal or "bigger" than the second given string.
   */
		value: function caseInsensitiveCompare(str1, str2) {
			var test1 = String(str1).toLowerCase();
			var test2 = String(str2).toLowerCase();

			if (test1 < test2) {
				return -1;
			} else if (test1 === test2) {
				return 0;
			} else {
				return 1;
			}
		}

		/**
   * Removes the breaking spaces from the left and right of the string and
   * collapses the sequences of breaking spaces in the middle into single spaces.
   * The original and the result strings render the same way in HTML.
   * @param {string} str A string in which to collapse spaces.
   * @return {string} Copy of the string with normalized breaking spaces.
   */

	}, {
		key: 'collapseBreakingSpaces',
		value: function collapseBreakingSpaces(str) {
			return str.replace(/[\t\r\n ]+/g, ' ').replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, '');
		}

		/**
  * Escapes characters in the string that are not safe to use in a RegExp.
  * @param {*} str The string to escape. If not a string, it will be casted
  *     to one.
  * @return {string} A RegExp safe, escaped copy of {@code s}.
  */

	}, {
		key: 'escapeRegex',
		value: function escapeRegex(str) {
			return String(str).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
		}

		/**
  * Returns a string with at least 64-bits of randomness.
  * @return {string} A random string, e.g. sn1s7vb4gcic.
  */

	}, {
		key: 'getRandomString',
		value: function getRandomString() {
			var x = 2147483648;
			return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36);
		}

		/**
   * Calculates the hashcode for a string. The hashcode value is computed by
   * the sum algorithm: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]. A nice
   * property of using 31 prime is that the multiplication can be replaced by
   * a shift and a subtraction for better performance: 31*i == (i<<5)-i.
   * Modern VMs do this sort of optimization automatically.
   * @param {String} val Target string.
   * @return {Number} Returns the string hashcode.
   */

	}, {
		key: 'hashCode',
		value: function hashCode(val) {
			var hash = 0;
			for (var i = 0, len = val.length; i < len; i++) {
				hash = 31 * hash + val.charCodeAt(i);
				hash %= 0x100000000;
			}
			return hash;
		}

		/**
   * Replaces interval into the string with specified value, e.g.
   * `replaceInterval("abcde", 1, 4, "")` returns "ae".
   * @param {string} str The input string.
   * @param {Number} start Start interval position to be replaced.
   * @param {Number} end End interval position to be replaced.
   * @param {string} value The value that replaces the specified interval.
   * @return {string}
   */

	}, {
		key: 'replaceInterval',
		value: function replaceInterval(str, start, end, value) {
			return str.substring(0, start) + value + str.substring(end);
		}
	}]);

	return string;
}();

exports.default = string;

/***/ }),
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_soy__);
/* jshint ignore:start */


var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Sidebar.
 * @hassoydeltemplate {ElectricNavigation.anchor.idom}
 * @public
 */

goog.module('Sidebar.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias2 = __WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.getTemplate('ElectricNavigation.incrementaldom', 'render');

var $templateAlias1 = __WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.getTemplate('ElectricSearchAutocomplete.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('nav', null, null,
      'class', 'sidebar');
    ie_open('a', null, null,
        'class', 'sidebar-header toggler-header-collapsed');
      ie_void('span', null, null,
          'class', 'sidebar-icon icon-16-menu');
      ie_open('span');
        itext('Docs Menu');
      ie_close('span');
      ie_open('span', null, null,
          'class', 'sidebar-icon-right');
        ie_void('span', null, null,
            'class', 'icon-12-arrow-down-short');
        ie_void('span', null, null,
            'class', 'icon-12-arrow-up-short');
      ie_close('span');
    ie_close('a');
    ie_open('div', null, null,
        'class', 'sidebar-toggler-content toggler-collapsed');
      ie_open('div', null, null,
          'class', 'sidebar-search');
        $templateAlias1({maxResults: 3, path: '/guia/', placeholder: 'Pesquisar'}, null, opt_ijData);
      ie_close('div');
      $templateAlias2({elementClasses: 'sidebar-list sidebar-list-1', listItemClasses: 'sidebar-item', anchorVariant: 'sidebar', section: opt_data.section}, null, opt_ijData);
    ie_close('div');
  ie_close('nav');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Sidebar.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function __deltemplate_s65_d34389eb(opt_data, opt_ignored, opt_ijData) {
  ie_open('a', null, null,
      'class', 'sidebar-link ' + (opt_data.page.active ? 'sidebar-link-selected' : ''),
      'href', opt_data.page.url);
    if (opt_data.page.icon) {
      ie_void('span', null, null,
          'class', 'sidebar-icon icon-16-' + opt_data.page.icon);
    }
    ie_open('span');
      var dyn5 = opt_data.page.title;
      if (typeof dyn5 == 'function') dyn5(); else if (dyn5 != null) itext(dyn5);
    ie_close('span');
  ie_close('a');
}
exports.__deltemplate_s65_d34389eb = __deltemplate_s65_d34389eb;
if (goog.DEBUG) {
  __deltemplate_s65_d34389eb.soyTemplateName = 'Sidebar.__deltemplate_s65_d34389eb';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ElectricNavigation.anchor.idom'), 'sidebar', 0, __deltemplate_s65_d34389eb);

exports.render.params = ["section"];
exports.render.types = {"section":"any"};
templates = exports;
return exports;

});

class Sidebar extends __WEBPACK_IMPORTED_MODULE_0_metal_component___default.a {}
__WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.register(Sidebar, templates);

/* harmony default export */ __webpack_exports__["default"] = (templates);
/* jshint ignore:end */


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76), __webpack_require__(75)))

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(158);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ })
/******/ ]);