module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/flarum/beta8/workbench/enso-theme/js/src/forum/index.js: Unexpected token (7:14)\n\n\u001b[0m \u001b[90m  5 | \u001b[39mapp\u001b[33m.\u001b[39minitializers\u001b[33m.\u001b[39madd(\u001b[32m'reflar/enso-theme'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m  6 | \u001b[39m  extend(\u001b[33mDiscussionListItem\u001b[39m\u001b[33m.\u001b[39mprototype\u001b[33m,\u001b[39m \u001b[32m\"view\"\u001b[39m\u001b[33m,\u001b[39m vnode \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m    \u001b[36mif\u001b[39m (vnode\u001b[33m.\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m    vnode\u001b[33m.\u001b[39mchildren\u001b[33m.\u001b[39mpush(\u001b[33m<\u001b[39m\u001b[33mspan\u001b[39m\u001b[33m>\u001b[39miH\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mspan\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m})\u001b[33m;\u001b[39m\u001b[0m\n    at _class.raise (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:4028:15)\n    at _class.unexpected (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:5343:16)\n    at _class.parseIdentifierName (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:7145:18)\n    at _class.parseIdentifier (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:7119:21)\n    at _class.parseMaybePrivateName (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:6463:19)\n    at _class.parseSubscript (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:6090:30)\n    at _class.parseSubscripts (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:6039:19)\n    at _class.parseExprSubscripts (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:6029:17)\n    at _class.parseMaybeUnary (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:5998:21)\n    at _class.parseExprOps (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:5907:21)\n    at _class.parseMaybeConditional (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:5879:21)\n    at _class.parseMaybeAssign (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:5826:21)\n    at _class.parseExpression (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:5779:21)\n    at _class.parseParenExpression (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:6537:20)\n    at _class.parseIfStatement (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:7615:22)\n    at _class.parseStatementContent (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:7308:21)\n    at _class.parseStatement (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:7277:17)\n    at _class.parseBlockOrModuleBlockBody (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:7829:23)\n    at _class.parseBlockBody (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:7816:10)\n    at _class.parseBlock (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:7805:10)\n    at _class.parseFunctionBody (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:7042:24)\n    at _class.parseArrowExpression (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:6995:10)\n    at _class.parseExprAtom (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:6335:18)\n    at _class.parseExprAtom (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:3724:52)\n    at _class.parseExprSubscripts (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:6019:21)\n    at _class.parseMaybeUnary (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:5998:21)\n    at _class.parseExprOps (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:5907:21)\n    at _class.parseMaybeConditional (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:5879:21)\n    at _class.parseMaybeAssign (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:5826:21)\n    at _class.parseExprListItem (/var/www/flarum/beta8/workbench/enso-theme/js/node_modules/@babel/parser/lib/index.js:7111:18)");

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map