module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contexts/app/AppContext.tsx":
/*!*****************************************!*\
  !*** ./src/contexts/app/AppContext.tsx ***!
  \*****************************************/
/*! exports provided: AppProvider, useAppContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProvider", function() { return AppProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers/rootReducer */ "./src/reducers/rootReducer.ts");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\contexts\\app\\AppContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import { ContextDevTool } from "react-context-devtool";


const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const AppProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["rootReducer"], _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["initialState"]);
  const contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return {
      state,
      dispatch
    };
  }, [state, dispatch]);
  return __jsx(AppContext.Provider, {
    value: contextValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, children);
};
const useAppContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AppContext);
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_app_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/app/AppContext */ "./src/contexts/app/AppContext.tsx");
/* harmony import */ var _utils_globalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/globalStyles */ "./src/utils/globalStyles.ts");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/theme */ "./src/utils/theme.ts");
var _jsxFileName = "D:\\CODE\\kyoto-fronend\\src\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 //Binding events.

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done());
nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.configure({
  showSpinner: false
});

const App = ({
  Component,
  pageProps
}) => {
  let Layout = Component.layout || react__WEBPACK_IMPORTED_MODULE_3__["Fragment"];
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _utils_theme__WEBPACK_IMPORTED_MODULE_7__["theme"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html; charset=utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://bonik-react.vercel.app/landing",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "React Next JS Ecommerce Template",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Minimal, clean and Fast Next js ecommerce template. Build Super store, Grocery delivery app, Multivendor store and niche market",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/assets/images/landing/preview.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-SGG7GE7HZC",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SGG7GE7HZC');
          `
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx(_utils_globalStyles__WEBPACK_IMPORTED_MODULE_6__["GlobalStyles"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(_contexts_app_AppContext__WEBPACK_IMPORTED_MODULE_5__["AppProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(Layout, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  })))));
}; // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/reducers/cartReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/cartReducer.ts ***!
  \*************************************/
/*! exports provided: cartInitialState, cartReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartInitialState", function() { return cartInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartReducer", function() { return cartReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CHANGE_CART_AMOUNT = "CHANGE_CART_AMOUNT";
const cartInitialState = {
  cartList: [{
    price: 250,
    name: "Lord 2019",
    imgUrl: "/assets/images/products/Automotive/1.Ford2019.png",
    id: "7222243834583537",
    qty: 1
  }, {
    price: 250,
    name: "Xorsche 2020",
    imgUrl: "/assets/images/products/Automotive/28.Porsche2020.png",
    id: "38553442244076086",
    qty: 1
  }, {
    price: 250,
    name: "Heavy 20kt Gold Necklace",
    imgUrl: "/assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png",
    id: "9573201630529315",
    qty: 1
  }]
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CART_AMOUNT:
      let cartList = state.cartList;
      let cartItem = action.payload;
      let exist = cartList.find(item => item.id === cartItem.id);
      if (cartItem.qty < 1) return {
        cartList: cartList.filter(item => item.id !== cartItem.id)
      };else if (exist) return {
        cartList: cartList.map(item => {
          if (item.id === cartItem.id) return _objectSpread(_objectSpread({}, item), {}, {
            qty: cartItem.qty
          });else return item;
        })
      };else return {
        cartList: [...cartList, cartItem]
      };

    default:
      {}
  }
};

/***/ }),

/***/ "./src/reducers/combineReducers.ts":
/*!*****************************************!*\
  !*** ./src/reducers/combineReducers.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const combineReducers = reducers => {
  return (state = {}, action) => {
    const newState = {};

    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }

    return newState;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (combineReducers);

/***/ }),

/***/ "./src/reducers/layoutReducer.ts":
/*!***************************************!*\
  !*** ./src/reducers/layoutReducer.ts ***!
  \***************************************/
/*! exports provided: layoutInitialState, layoutReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutInitialState", function() { return layoutInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutReducer", function() { return layoutReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const layoutInitialState = {
  isHeaderFixed: false
};
const layoutReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_HEADER":
      return _objectSpread(_objectSpread({}, state), {}, {
        isHeaderFixed: action.payload
      });

    default:
      {}
  }
};

/***/ }),

/***/ "./src/reducers/rootReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/rootReducer.ts ***!
  \*************************************/
/*! exports provided: initialState, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartReducer */ "./src/reducers/cartReducer.ts");
/* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combineReducers */ "./src/reducers/combineReducers.ts");
/* harmony import */ var _layoutReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layoutReducer */ "./src/reducers/layoutReducer.ts");



const initialState = {
  layout: _layoutReducer__WEBPACK_IMPORTED_MODULE_2__["layoutInitialState"],
  cart: _cartReducer__WEBPACK_IMPORTED_MODULE_0__["cartInitialState"]
};
const rootReducer = Object(_combineReducers__WEBPACK_IMPORTED_MODULE_1__["default"])({
  layout: _layoutReducer__WEBPACK_IMPORTED_MODULE_2__["layoutReducer"],
  cart: _cartReducer__WEBPACK_IMPORTED_MODULE_0__["cartReducer"]
});

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! exports provided: deviceSize, layoutConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceSize", function() { return deviceSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutConstant", function() { return layoutConstant; });
const deviceSize = {
  xs: 425,
  sm: 768,
  md: 1024,
  lg: 1440
};
const layoutConstant = {
  grocerySidenavWidth: "280px",
  containerWidth: "1200px",
  mobileNavHeight: "64px",
  headerHeight: "80px",
  mobileHeaderHeight: "64px"
};

/***/ }),

/***/ "./src/utils/globalStyles.ts":
/*!***********************************!*\
  !*** ./src/utils/globalStyles.ts ***!
  \***********************************/
/*! exports provided: GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 14px;
    background: ${({
  theme
}) => theme.colors.body.default};
    color: ${({
  theme
}) => theme.colors.body.text};
    transition: all 0.50s linear;
    font-family: Open Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    line-height: 1.5;
  }

  html {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: ${({
  theme
}) => theme.colors.body.text};
  }
  .cursor-pointer {
    cursor: pointer;
  }

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${({
  theme
}) => theme.colors.primary.main};

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 3px;
  border-radius: 0px 4px 4px 0px;
  overflow: hidden;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${({
  theme
}) => theme.colors.primary.main}, 0 0 5px ${({
  theme
}) => theme.colors.primary.main};
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: ${({
  theme
}) => theme.colors.primary.main};
  border-left-color: ${({
  theme
}) => theme.colors.primary.main};
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

/***/ }),

/***/ "./src/utils/theme.ts":
/*!****************************!*\
  !*** ./src/utils/theme.ts ***!
  \****************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/utils/constants.ts");
/* harmony import */ var _themeColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themeColors */ "./src/utils/themeColors.ts");
/* harmony import */ var _themeShadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themeShadows */ "./src/utils/themeShadows.ts");



const breakpoints = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["deviceSize"]).map(key => _constants__WEBPACK_IMPORTED_MODULE_0__["deviceSize"][key] + "px");
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
const theme = {
  colors: _themeColors__WEBPACK_IMPORTED_MODULE_1__["colors"],
  shadows: _themeShadows__WEBPACK_IMPORTED_MODULE_2__["default"],
  breakpoints
};

/***/ }),

/***/ "./src/utils/themeColors.ts":
/*!**********************************!*\
  !*** ./src/utils/themeColors.ts ***!
  \**********************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
const gray = {
  900: "#2B3445",
  // Main Text
  800: "#373F50",
  // Paragraph
  700: "#4B566B",
  600: "#7D879C",
  // Low Priority form Title/Text
  500: "#AEB4BE",
  400: "#DAE1E7",
  // Border
  300: "#E3E9EF",
  200: "#F3F5F9",
  // Line Stroke
  100: "#F6F9FC",
  white: "#FFFFFF"
};
const textColor = {
  primary: gray[900],
  secondary: gray[800],
  hint: gray[600],
  muted: gray[600],
  disabled: gray[400]
};
const bodyColor = {
  text: textColor.primary,
  default: gray[100],
  paper: gray["white"]
};
const primaryColor = {
  light: "#FFE1E6",
  main: "#E94560",
  // dark: "#D23F57",
  dark: "#4F4CB6",
  text: "#ffffff" // 100: "#FCE9EC",

};
const secondaryColor = {
  light: "rgba(15, 52, 96, 0.2)",
  main: "rgba(15, 52, 96, 1)",
  dark: "#303A47",
  text: "#ffffff",
  900: "#041533",
  100: "#F3F6F9"
};
const warningColor = {
  main: "#FFCD4E",
  text: textColor.primary
};
const errorColor = {
  main: "#E94560",
  light: "#FFE1E6",
  text: textColor.primary
};
const successColor = {
  main: "rgba(51, 208, 103, 1)",
  light: "rgba(51, 208, 103, 0.15)",
  text: textColor.primary
};
const defaultColor = {
  light: textColor.secondary,
  main: textColor.primary,
  dark: textColor.primary,
  text: textColor.primary
};
const colors = {
  default: defaultColor,
  primary: primaryColor,
  secondary: secondaryColor,
  warn: warningColor,
  error: errorColor,
  success: successColor,
  text: textColor,
  body: bodyColor,
  gray
};

/***/ }),

/***/ "./src/utils/themeShadows.ts":
/*!***********************************!*\
  !*** ./src/utils/themeShadows.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shadows = ["none", "0px 2px 1px -1px rgba(0, 0, 0, 0.06),0px 1px 1px 0px rgba(0, 0, 0, 0.042),0px 1px 3px 0px rgba(0, 0, 0, 0.036)", "0px 3px 1px -2px rgba(0, 0, 0, 0.06),0px 2px 2px 0px rgba(0, 0, 0, 0.042),0px 1px 5px 0px rgba(0, 0, 0, 0.036)", "0px 3px 3px -2px rgba(0, 0, 0, 0.06),0px 3px 4px 0px rgba(0, 0, 0, 0.042),0px 1px 8px 0px rgba(0, 0, 0, 0.036)", "0px 6px 26px rgba(0, 0, 0, 0.05)", "0px 15px 50px rgba(0, 0, 0, 0.06)", "0px 3px 5px -1px rgba(0, 0, 0, 0.06),0px 5px 8px 0px rgba(0, 0, 0, 0.042),0px 1px 14px 0px rgba(0, 0, 0, 0.036)", "0px 3px 5px -1px rgba(0, 0, 0, 0.06),0px 6px 10px 0px rgba(0, 0, 0, 0.042),0px 1px 18px 0px rgba(0, 0, 0, 0.036)", "0px 4px 5px -2px rgba(0, 0, 0, 0.06),0px 7px 10px 1px rgba(0, 0, 0, 0.042),0px 2px 16px 1px rgba(0, 0, 0, 0.036)", "0px 5px 5px -3px rgba(0, 0, 0, 0.06),0px 8px 10px 1px rgba(0, 0, 0, 0.042),0px 3px 14px 2px rgba(0, 0, 0, 0.036)", "0px 5px 6px -3px rgba(0, 0, 0, 0.06),0px 9px 12px 1px rgba(0, 0, 0, 0.042),0px 3px 16px 2px rgba(0, 0, 0, 0.036)", "0px 6px 6px -3px rgba(0, 0, 0, 0.06),0px 10px 14px 1px rgba(0, 0, 0, 0.042),0px 4px 18px 3px rgba(0, 0, 0, 0.036)", "0px 6px 7px -4px rgba(0, 0, 0, 0.06),0px 11px 15px 1px rgba(0, 0, 0, 0.042),0px 4px 20px 3px rgba(0, 0, 0, 0.036)", "0px 7px 8px -4px rgba(0, 0, 0, 0.06),0px 12px 17px 2px rgba(0, 0, 0, 0.042),0px 5px 22px 4px rgba(0, 0, 0, 0.036)", "0px 7px 8px -4px rgba(0, 0, 0, 0.06),0px 13px 19px 2px rgba(0, 0, 0, 0.042),0px 5px 24px 4px rgba(0, 0, 0, 0.036)", "0px 7px 9px -4px rgba(0, 0, 0, 0.06),0px 14px 21px 2px rgba(0, 0, 0, 0.042),0px 5px 26px 4px rgba(0, 0, 0, 0.036)", "0px 8px 9px -5px rgba(0, 0, 0, 0.06),0px 15px 22px 2px rgba(0, 0, 0, 0.042),0px 6px 28px 5px rgba(0, 0, 0, 0.036)", "0px 8px 10px -5px rgba(0, 0, 0, 0.06),0px 16px 24px 2px rgba(0, 0, 0, 0.042),0px 6px 30px 5px rgba(0, 0, 0, 0.036)", "0px 8px 11px -5px rgba(0, 0, 0, 0.06),0px 17px 26px 2px rgba(0, 0, 0, 0.042),0px 6px 32px 5px rgba(0, 0, 0, 0.036)", "0px 9px 11px -5px rgba(0, 0, 0, 0.06),0px 18px 28px 2px rgba(0, 0, 0, 0.042),0px 7px 34px 6px rgba(0, 0, 0, 0.036)", "0px 9px 12px -6px rgba(0, 0, 0, 0.06),0px 19px 29px 2px rgba(0, 0, 0, 0.042),0px 7px 36px 6px rgba(0, 0, 0, 0.036)", "0px 10px 13px -6px rgba(0, 0, 0, 0.06),0px 20px 31px 3px rgba(0, 0, 0, 0.042),0px 8px 38px 7px rgba(0, 0, 0, 0.036)", "0px 10px 13px -6px rgba(0, 0, 0, 0.06),0px 20px 31px 3px rgba(0, 0, 0, 0.042),0px 8px 38px 7px rgba(0, 0, 0, 0.036)", "0px 10px 13px -6px rgba(0, 0, 0, 0.06),0px 20px 31px 3px rgba(0, 0, 0, 0.042),0px 8px 38px 7px rgba(0, 0, 0, 0.036)", "0px 10px 13px -6px rgba(0, 0, 0, 0.06),0px 20px 31px 3px rgba(0, 0, 0, 0.042),0px 8px 38px 7px rgba(0, 0, 0, 0.036)", "0px 10px 13px -6px rgba(0, 0, 0, 0.06),0px 20px 31px 3px rgba(0, 0, 0, 0.042),0px 8px 38px 7px rgba(0, 0, 0, 0.036)"];
shadows.small = "0px 1px 3px rgba(3, 0, 71, 0.09)";
shadows.regular = "0px 4px 16px rgba(43, 52, 69, 0.1)";
shadows.large = "0px 8px 45px rgba(3, 0, 71, 0.09)";
shadows.border = "0px 0px 28px rgba(3, 0, 71, 0.04)";
shadows.badge = "0px 8px 20px -5px rgba(255, 103, 128, 0.9)";
/* harmony default export */ __webpack_exports__["default"] = (shadows);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL2FwcC9BcHBDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NhcnRSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jb21iaW5lUmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2xheW91dFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dsb2JhbFN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RoZW1lQ29sb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90aGVtZVNoYWRvd3MudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJyb290UmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImNvbnRleHRWYWx1ZSIsInVzZU1lbW8iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiTlByb2dyZXNzIiwic3RhcnQiLCJkb25lIiwiY29uZmlndXJlIiwic2hvd1NwaW5uZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJMYXlvdXQiLCJsYXlvdXQiLCJGcmFnbWVudCIsInRoZW1lIiwiX19odG1sIiwiQ0hBTkdFX0NBUlRfQU1PVU5UIiwiY2FydEluaXRpYWxTdGF0ZSIsImNhcnRMaXN0IiwicHJpY2UiLCJuYW1lIiwiaW1nVXJsIiwiaWQiLCJxdHkiLCJjYXJ0UmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJjYXJ0SXRlbSIsInBheWxvYWQiLCJleGlzdCIsImZpbmQiLCJpdGVtIiwiZmlsdGVyIiwibWFwIiwiY29tYmluZVJlZHVjZXJzIiwicmVkdWNlcnMiLCJuZXdTdGF0ZSIsImtleSIsImxheW91dEluaXRpYWxTdGF0ZSIsImlzSGVhZGVyRml4ZWQiLCJsYXlvdXRSZWR1Y2VyIiwiY2FydCIsImRldmljZVNpemUiLCJ4cyIsInNtIiwibWQiLCJsZyIsImxheW91dENvbnN0YW50IiwiZ3JvY2VyeVNpZGVuYXZXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwibW9iaWxlTmF2SGVpZ2h0IiwiaGVhZGVySGVpZ2h0IiwibW9iaWxlSGVhZGVySGVpZ2h0IiwiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJjb2xvcnMiLCJib2R5IiwiZGVmYXVsdCIsInRleHQiLCJwcmltYXJ5IiwibWFpbiIsImJyZWFrcG9pbnRzIiwiT2JqZWN0Iiwia2V5cyIsInhsIiwic2hhZG93cyIsImdyYXkiLCJ3aGl0ZSIsInRleHRDb2xvciIsInNlY29uZGFyeSIsImhpbnQiLCJtdXRlZCIsImRpc2FibGVkIiwiYm9keUNvbG9yIiwicGFwZXIiLCJwcmltYXJ5Q29sb3IiLCJsaWdodCIsImRhcmsiLCJzZWNvbmRhcnlDb2xvciIsIndhcm5pbmdDb2xvciIsImVycm9yQ29sb3IiLCJzdWNjZXNzQ29sb3IiLCJkZWZhdWx0Q29sb3IiLCJ3YXJuIiwiZXJyb3IiLCJzdWNjZXNzIiwic21hbGwi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LDRDQUFoQjtBQUVlekIsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Esc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBDb250ZXh0RGV2VG9vbCB9IGZyb20gXCJyZWFjdC1jb250ZXh0LWRldnRvb2xcIjtcclxuaW1wb3J0IHtcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcm9vdEFjdGlvblR5cGUsXHJcbiAgcm9vdFJlZHVjZXIsXHJcbn0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcm9vdFJlZHVjZXInO1xyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwUHJvdmlkZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4geyBzdGF0ZSwgZGlzcGF0Y2ggfTtcclxuICB9LCBbc3RhdGUsIGRpc3BhdGNoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cclxuICAgICAgey8qIDxDb250ZXh0RGV2VG9vbCBjb250ZXh0PXtBcHBDb250ZXh0fSBpZD1cImFwcC1jb250ZXh0XCIgZGlzcGxheU5hbWU9XCJBcHBcIiAvPiAqL31cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXBwQ29udGV4dCA9ICgpID0+XHJcbiAgdXNlQ29udGV4dDx7XHJcbiAgICBzdGF0ZTogdHlwZW9mIGluaXRpYWxTdGF0ZTtcclxuICAgIGRpc3BhdGNoOiAoYXJnczogcm9vdEFjdGlvblR5cGUpID0+IHZvaWQ7XHJcbiAgfT4oQXBwQ29udGV4dCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvYXBwL0FwcENvbnRleHQnO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMgfSBmcm9tICcuLi91dGlscy9nbG9iYWxTdHlsZXMnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL3V0aWxzL3RoZW1lJztcclxuXHJcbi8vQmluZGluZyBldmVudHMuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IGFueSkgPT4ge1xyXG4gIGxldCBMYXlvdXQgPSBDb21wb25lbnQubGF5b3V0IHx8IEZyYWdtZW50O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJDb250ZW50LVR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxyXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vYm9uaWstcmVhY3QudmVyY2VsLmFwcC9sYW5kaW5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiB0aHVtYm5haWwgQW5kIHRpdGxlIGZvciBzb2NpYWwgbWVkaWEgKi99XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiUmVhY3QgTmV4dCBKUyBFY29tbWVyY2UgVGVtcGxhdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJNaW5pbWFsLCBjbGVhbiBhbmQgRmFzdCBOZXh0IGpzIGVjb21tZXJjZSB0ZW1wbGF0ZS4gQnVpbGQgU3VwZXIgc3RvcmUsIEdyb2NlcnkgZGVsaXZlcnkgYXBwLCBNdWx0aXZlbmRvciBzdG9yZSBhbmQgbmljaGUgbWFya2V0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCIvYXNzZXRzL2ltYWdlcy9sYW5kaW5nL3ByZXZpZXcucG5nXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICB7LyogR29vZ2xlIGFuYWx5dGljcyAqL31cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLVNHRzdHRTdIWkNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJ0ctU0dHN0dFN0haQycpO1xyXG4gICAgICAgICAgYCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgPEFwcFByb3ZpZGVyPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvQXBwUHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxyXG4vLyBldmVyeSBzaW5nbGUgcGFnZSBpbiB5b3VyIGFwcGxpY2F0aW9uLiBUaGlzIGRpc2FibGVzIHRoZSBhYmlsaXR5IHRvXHJcbi8vIHBlcmZvcm0gYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24sIGNhdXNpbmcgZXZlcnkgcGFnZSBpbiB5b3VyIGFwcCB0b1xyXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cclxuLy9cclxuLy8gQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XHJcbi8vICAgLy8gY2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxyXG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcclxuLy9cclxuLy8gICByZXR1cm4geyAuLi5hcHBQcm9wcyB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiY29uc3QgQ0hBTkdFX0NBUlRfQU1PVU5UID0gXCJDSEFOR0VfQ0FSVF9BTU9VTlRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJ0SW5pdGlhbFN0YXRlID0ge1xyXG4gIGNhcnRMaXN0OiBbXHJcbiAgICB7XHJcbiAgICAgIHByaWNlOiAyNTAsXHJcbiAgICAgIG5hbWU6IFwiTG9yZCAyMDE5XCIsXHJcbiAgICAgIGltZ1VybDogXCIvYXNzZXRzL2ltYWdlcy9wcm9kdWN0cy9BdXRvbW90aXZlLzEuRm9yZDIwMTkucG5nXCIsXHJcbiAgICAgIGlkOiBcIjcyMjIyNDM4MzQ1ODM1MzdcIixcclxuICAgICAgcXR5OiAxLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJpY2U6IDI1MCxcclxuICAgICAgbmFtZTogXCJYb3JzY2hlIDIwMjBcIixcclxuICAgICAgaW1nVXJsOiBcIi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3RzL0F1dG9tb3RpdmUvMjguUG9yc2NoZTIwMjAucG5nXCIsXHJcbiAgICAgIGlkOiBcIjM4NTUzNDQyMjQ0MDc2MDg2XCIsXHJcbiAgICAgIHF0eTogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByaWNlOiAyNTAsXHJcbiAgICAgIG5hbWU6IFwiSGVhdnkgMjBrdCBHb2xkIE5lY2tsYWNlXCIsXHJcbiAgICAgIGltZ1VybDpcclxuICAgICAgICBcIi9hc3NldHMvaW1hZ2VzL3Byb2R1Y3RzL0Zhc2hpb24vSmV3ZWxsZXJ5LzkuSGVhdnkyMGt0R29sZE5lY2tsYWNlLnBuZ1wiLFxyXG4gICAgICBpZDogXCI5NTczMjAxNjMwNTI5MzE1XCIsXHJcbiAgICAgIHF0eTogMSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIENhcnRJdGVtID0ge1xyXG4gIGlkOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHF0eTogbnVtYmVyO1xyXG4gIHByaWNlOiBudW1iZXI7XHJcbiAgaW1nVXJsPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgY2FydFN0YXRlVHlwZSA9IHtcclxuICBjYXJ0TGlzdDogQ2FydEl0ZW1bXTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIGNhcnRBY3Rpb25UeXBlID0ge1xyXG4gIHR5cGU6IHR5cGVvZiBDSEFOR0VfQ0FSVF9BTU9VTlQ7XHJcbiAgcGF5bG9hZDogQ2FydEl0ZW07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FydFJlZHVjZXI6IFJlYWN0LlJlZHVjZXI8Y2FydFN0YXRlVHlwZSwgY2FydEFjdGlvblR5cGU+ID0gKFxyXG4gIHN0YXRlOiBjYXJ0U3RhdGVUeXBlLFxyXG4gIGFjdGlvbjogY2FydEFjdGlvblR5cGVcclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBDSEFOR0VfQ0FSVF9BTU9VTlQ6XHJcbiAgICAgIGxldCBjYXJ0TGlzdCA9IHN0YXRlLmNhcnRMaXN0O1xyXG4gICAgICBsZXQgY2FydEl0ZW0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgbGV0IGV4aXN0ID0gY2FydExpc3QuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gY2FydEl0ZW0uaWQpO1xyXG5cclxuICAgICAgaWYgKGNhcnRJdGVtLnF0eSA8IDEpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGNhcnRMaXN0OiBjYXJ0TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGNhcnRJdGVtLmlkKSxcclxuICAgICAgICB9O1xyXG4gICAgICBlbHNlIGlmIChleGlzdClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY2FydExpc3Q6IGNhcnRMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gY2FydEl0ZW0uaWQpIHJldHVybiB7IC4uLml0ZW0sIHF0eTogY2FydEl0ZW0ucXR5IH07XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGNhcnRMaXN0OiBbLi4uY2FydExpc3QsIGNhcnRJdGVtXSxcclxuICAgICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xyXG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xyXG4gICAgZm9yIChsZXQga2V5IGluIHJlZHVjZXJzKSB7XHJcbiAgICAgIG5ld1N0YXRlW2tleV0gPSByZWR1Y2Vyc1trZXldKHN0YXRlW2tleV0sIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2VycztcclxuIiwiZXhwb3J0IGNvbnN0IGxheW91dEluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0hlYWRlckZpeGVkOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIGxheW91dFN0YXRlVHlwZSA9IHR5cGVvZiBsYXlvdXRJbml0aWFsU3RhdGU7XHJcbmV4cG9ydCB0eXBlIGxheW91dEFjdGlvblR5cGUgPSB7IHR5cGU6IFwiVE9HR0xFX0hFQURFUlwiOyBwYXlsb2FkOiBib29sZWFuIH07XHJcblxyXG5leHBvcnQgY29uc3QgbGF5b3V0UmVkdWNlcjogUmVhY3QuUmVkdWNlcjxsYXlvdXRTdGF0ZVR5cGUsIGxheW91dEFjdGlvblR5cGU+ID0gKFxyXG4gIHN0YXRlOiBsYXlvdXRTdGF0ZVR5cGUsXHJcbiAgYWN0aW9uOiBsYXlvdXRBY3Rpb25UeXBlXHJcbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJUT0dHTEVfSEVBREVSXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNIZWFkZXJGaXhlZDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgY2FydEFjdGlvblR5cGUsIGNhcnRJbml0aWFsU3RhdGUsIGNhcnRSZWR1Y2VyIH0gZnJvbSBcIi4vY2FydFJlZHVjZXJcIjtcclxuaW1wb3J0IGNvbWJpbmVSZWR1Y2VycyBmcm9tIFwiLi9jb21iaW5lUmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuICBsYXlvdXRBY3Rpb25UeXBlLFxyXG4gIGxheW91dEluaXRpYWxTdGF0ZSxcclxuICBsYXlvdXRSZWR1Y2VyLFxyXG59IGZyb20gXCIuL2xheW91dFJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCB0eXBlIHJvb3RBY3Rpb25UeXBlID0gbGF5b3V0QWN0aW9uVHlwZSB8IGNhcnRBY3Rpb25UeXBlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsYXlvdXQ6IGxheW91dEluaXRpYWxTdGF0ZSxcclxuICBjYXJ0OiBjYXJ0SW5pdGlhbFN0YXRlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBsYXlvdXQ6IGxheW91dFJlZHVjZXIsXHJcbiAgY2FydDogY2FydFJlZHVjZXIsXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgZGV2aWNlU2l6ZSA9IHtcclxuICB4czogNDI1LFxyXG4gIHNtOiA3NjgsXHJcbiAgbWQ6IDEwMjQsXHJcbiAgbGc6IDE0NDAsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGF5b3V0Q29uc3RhbnQgPSB7XHJcbiAgZ3JvY2VyeVNpZGVuYXZXaWR0aDogXCIyODBweFwiLFxyXG4gIGNvbnRhaW5lcldpZHRoOiBcIjEyMDBweFwiLFxyXG4gIG1vYmlsZU5hdkhlaWdodDogXCI2NHB4XCIsXHJcbiAgaGVhZGVySGVpZ2h0OiBcIjgwcHhcIixcclxuICBtb2JpbGVIZWFkZXJIZWlnaHQ6IFwiNjRweFwiLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgaHRtbCxcclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuY29sb3JzLmJvZHkuZGVmYXVsdH07XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmNvbG9ycy5ib2R5LnRleHR9O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNTBzIGxpbmVhcjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIFJvYm90bywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSxcclxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcblxyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuY29sb3JzLmJvZHkudGV4dH07XHJcbiAgfVxyXG4gIC5jdXJzb3ItcG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuI25wcm9ncmVzcyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbiNucHJvZ3Jlc3MgLmJhciB7XHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5Lm1haW59O1xyXG5cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAzMTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIEZhbmN5IGJsdXIgZWZmZWN0ICovXHJcbiNucHJvZ3Jlc3MgLnBlZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAkeyh7IHRoZW1lIH06IGFueSkgPT5cclxuICAgIHRoZW1lLmNvbG9ycy5wcmltYXJ5Lm1haW59LCAwIDAgNXB4ICR7KHsgdGhlbWUgfTogYW55KSA9PlxyXG4gIHRoZW1lLmNvbG9ycy5wcmltYXJ5Lm1haW59O1xyXG4gIG9wYWNpdHk6IDEuMDtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XHJcbn1cclxuXHJcbi8qIFJlbW92ZSB0aGVzZSB0byBnZXQgcmlkIG9mIHRoZSBzcGlubmVyICovXHJcbiNucHJvZ3Jlc3MgLnNwaW5uZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDMxO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTVweDtcclxufVxyXG5cclxuI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5Lm1haW59O1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnkubWFpbn07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCAjbnByb2dyZXNzIC5zcGlubmVyLFxyXG4ubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgMCUgICB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5gO1xyXG4iLCJpbXBvcnQgeyBkZXZpY2VTaXplIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuL3RoZW1lQ29sb3JzXCI7XHJcbmltcG9ydCBzaGFkb3dzIGZyb20gXCIuL3RoZW1lU2hhZG93c1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaGVtZVByb3BzIHtcclxuICB0aGVtZToge1xyXG4gICAgZm9udFNpemVzOiBudW1iZXJbXTtcclxuICAgIHNwYWNlOiBudW1iZXJbXTtcclxuICAgIGNvbG9yczoge1xyXG4gICAgICBibGFjazogc3RyaW5nO1xyXG4gICAgICB3aGl0ZTogc3RyaW5nO1xyXG4gICAgICBibHVlOiBzdHJpbmc7XHJcbiAgICAgIHByaW1hcnk6IHN0cmluZztcclxuICAgICAgbmF2eTogc3RyaW5nO1xyXG4gICAgfTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBicmVha3BvaW50czogYW55ID0gT2JqZWN0LmtleXMoZGV2aWNlU2l6ZSkubWFwKFxyXG4gIChrZXkpID0+IGRldmljZVNpemVba2V5XSArIFwicHhcIlxyXG4pO1xyXG5cclxuYnJlYWtwb2ludHMuc20gPSBicmVha3BvaW50c1swXTtcclxuYnJlYWtwb2ludHMubWQgPSBicmVha3BvaW50c1sxXTtcclxuYnJlYWtwb2ludHMubGcgPSBicmVha3BvaW50c1syXTtcclxuYnJlYWtwb2ludHMueGwgPSBicmVha3BvaW50c1szXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcclxuICBjb2xvcnMsXHJcbiAgc2hhZG93cyxcclxuICBicmVha3BvaW50cyxcclxufTtcclxuIiwiY29uc3QgZ3JheSA9IHtcclxuICA5MDA6IFwiIzJCMzQ0NVwiLCAvLyBNYWluIFRleHRcclxuICA4MDA6IFwiIzM3M0Y1MFwiLCAvLyBQYXJhZ3JhcGhcclxuICA3MDA6IFwiIzRCNTY2QlwiLFxyXG4gIDYwMDogXCIjN0Q4NzlDXCIsIC8vIExvdyBQcmlvcml0eSBmb3JtIFRpdGxlL1RleHRcclxuICA1MDA6IFwiI0FFQjRCRVwiLFxyXG4gIDQwMDogXCIjREFFMUU3XCIsIC8vIEJvcmRlclxyXG4gIDMwMDogXCIjRTNFOUVGXCIsXHJcbiAgMjAwOiBcIiNGM0Y1RjlcIiwgLy8gTGluZSBTdHJva2VcclxuICAxMDA6IFwiI0Y2RjlGQ1wiLFxyXG4gIHdoaXRlOiBcIiNGRkZGRkZcIixcclxufTtcclxuXHJcbmNvbnN0IHRleHRDb2xvciA9IHtcclxuICBwcmltYXJ5OiBncmF5WzkwMF0sXHJcbiAgc2Vjb25kYXJ5OiBncmF5WzgwMF0sXHJcbiAgaGludDogZ3JheVs2MDBdLFxyXG4gIG11dGVkOiBncmF5WzYwMF0sXHJcbiAgZGlzYWJsZWQ6IGdyYXlbNDAwXSxcclxufTtcclxuXHJcbmNvbnN0IGJvZHlDb2xvciA9IHtcclxuICB0ZXh0OiB0ZXh0Q29sb3IucHJpbWFyeSxcclxuICBkZWZhdWx0OiBncmF5WzEwMF0sXHJcbiAgcGFwZXI6IGdyYXlbXCJ3aGl0ZVwiXSxcclxufTtcclxuXHJcbmNvbnN0IHByaW1hcnlDb2xvciA9IHtcclxuICBsaWdodDogXCIjRkZFMUU2XCIsXHJcbiAgbWFpbjogXCIjRTk0NTYwXCIsXHJcbiAgLy8gZGFyazogXCIjRDIzRjU3XCIsXHJcbiAgZGFyazogXCIjNEY0Q0I2XCIsXHJcbiAgdGV4dDogXCIjZmZmZmZmXCIsXHJcbiAgLy8gMTAwOiBcIiNGQ0U5RUNcIixcclxufTtcclxuXHJcbmNvbnN0IHNlY29uZGFyeUNvbG9yID0ge1xyXG4gIGxpZ2h0OiBcInJnYmEoMTUsIDUyLCA5NiwgMC4yKVwiLFxyXG4gIG1haW46IFwicmdiYSgxNSwgNTIsIDk2LCAxKVwiLFxyXG4gIGRhcms6IFwiIzMwM0E0N1wiLFxyXG4gIHRleHQ6IFwiI2ZmZmZmZlwiLFxyXG4gIDkwMDogXCIjMDQxNTMzXCIsXHJcbiAgMTAwOiBcIiNGM0Y2RjlcIixcclxufTtcclxuXHJcbmNvbnN0IHdhcm5pbmdDb2xvciA9IHtcclxuICBtYWluOiBcIiNGRkNENEVcIixcclxuICB0ZXh0OiB0ZXh0Q29sb3IucHJpbWFyeSxcclxufTtcclxuY29uc3QgZXJyb3JDb2xvciA9IHtcclxuICBtYWluOiBcIiNFOTQ1NjBcIixcclxuICBsaWdodDogXCIjRkZFMUU2XCIsXHJcbiAgdGV4dDogdGV4dENvbG9yLnByaW1hcnksXHJcbn07XHJcbmNvbnN0IHN1Y2Nlc3NDb2xvciA9IHtcclxuICBtYWluOiBcInJnYmEoNTEsIDIwOCwgMTAzLCAxKVwiLFxyXG4gIGxpZ2h0OiBcInJnYmEoNTEsIDIwOCwgMTAzLCAwLjE1KVwiLFxyXG4gIHRleHQ6IHRleHRDb2xvci5wcmltYXJ5LFxyXG59O1xyXG5jb25zdCBkZWZhdWx0Q29sb3IgPSB7XHJcbiAgbGlnaHQ6IHRleHRDb2xvci5zZWNvbmRhcnksXHJcbiAgbWFpbjogdGV4dENvbG9yLnByaW1hcnksXHJcbiAgZGFyazogdGV4dENvbG9yLnByaW1hcnksXHJcbiAgdGV4dDogdGV4dENvbG9yLnByaW1hcnksXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29sb3JzID0ge1xyXG4gIGRlZmF1bHQ6IGRlZmF1bHRDb2xvcixcclxuICBwcmltYXJ5OiBwcmltYXJ5Q29sb3IsXHJcbiAgc2Vjb25kYXJ5OiBzZWNvbmRhcnlDb2xvcixcclxuICB3YXJuOiB3YXJuaW5nQ29sb3IsXHJcbiAgZXJyb3I6IGVycm9yQ29sb3IsXHJcbiAgc3VjY2Vzczogc3VjY2Vzc0NvbG9yLFxyXG4gIHRleHQ6IHRleHRDb2xvcixcclxuICBib2R5OiBib2R5Q29sb3IsXHJcbiAgZ3JheSxcclxufTtcclxuIiwiY29uc3Qgc2hhZG93czogYW55ID0gW1xyXG4gIFwibm9uZVwiLFxyXG4gIFwiMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjAzNilcIixcclxuICBcIjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA2KSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA0MiksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wMzYpXCIsXHJcbiAgXCIwcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDM2KVwiLFxyXG4gIFwiMHB4IDZweCAyNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSlcIixcclxuICBcIjBweCAxNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjA2KVwiLFxyXG4gIFwiMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCA1cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwwcHggMXB4IDE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wMzYpXCIsXHJcbiAgXCIwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wMzYpXCIsXHJcbiAgXCIwcHggNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksMHB4IDdweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMzYpXCIsXHJcbiAgXCIwcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4wNiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzYpXCIsXHJcbiAgXCIwcHggNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4wNiksMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzYpXCIsXHJcbiAgXCIwcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4wNiksMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0MiksMHB4IDRweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDM2KVwiLFxyXG4gIFwiMHB4IDZweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCAxMXB4IDE1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLDBweCA0cHggMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjAzNilcIixcclxuICBcIjBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjA2KSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMzYpXCIsXHJcbiAgXCIwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksMHB4IDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjA0MiksMHB4IDVweCAyNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDM2KVwiLFxyXG4gIFwiMHB4IDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCAxNHB4IDIxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLDBweCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAzNilcIixcclxuICBcIjBweCA4cHggOXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA2KSwwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwwcHggNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wMzYpXCIsXHJcbiAgXCIwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjAzNilcIixcclxuICBcIjBweCA4cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNiksMHB4IDE3cHggMjZweCAycHggcmdiYSgwLCAwLCAwLCAwLjA0MiksMHB4IDZweCAzMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDM2KVwiLFxyXG4gIFwiMHB4IDlweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA2KSwwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSwwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wMzYpXCIsXHJcbiAgXCIwcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLDBweCA3cHggMzZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjAzNilcIixcclxuICBcIjBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjAzNilcIixcclxuICBcIjBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjAzNilcIixcclxuICBcIjBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjAzNilcIixcclxuICBcIjBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjAzNilcIixcclxuICBcIjBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMDYpLDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDIpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjAzNilcIixcclxuXTtcclxuXHJcbnNoYWRvd3Muc21hbGwgPSBcIjBweCAxcHggM3B4IHJnYmEoMywgMCwgNzEsIDAuMDkpXCI7XHJcbnNoYWRvd3MucmVndWxhciA9IFwiMHB4IDRweCAxNnB4IHJnYmEoNDMsIDUyLCA2OSwgMC4xKVwiO1xyXG5zaGFkb3dzLmxhcmdlID0gXCIwcHggOHB4IDQ1cHggcmdiYSgzLCAwLCA3MSwgMC4wOSlcIjtcclxuc2hhZG93cy5ib3JkZXIgPSBcIjBweCAwcHggMjhweCByZ2JhKDMsIDAsIDcxLCAwLjA0KVwiO1xyXG5zaGFkb3dzLmJhZGdlID0gXCIwcHggOHB4IDIwcHggLTVweCByZ2JhKDI1NSwgMTAzLCAxMjgsIDAuOSlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNoYWRvd3M7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==