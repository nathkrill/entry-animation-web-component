/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entry-animation.js":
/*!********************************!*\
  !*** ./src/entry-animation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst entryEvents = {\n\tstart: new Event('enterStart'),\n\tquarter: new Event('enterQuarter'),\n\thalf: new Event('enterHalf'),\n\tthreeQuarter: new Event('enterThreeQuarter'),\n\tend: new Event('enterEnd'),\n};\n\nclass EntryAnimation extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\t\t\n\t\tlet observer = new IntersectionObserver(this.onWindowEnter.bind(this), {\n\t\t\tthreshold: [0,0.25,0.5,0.75,1]\n\t\t});\n\t\t\n\t\tobserver.observe(this);\n\t}\n\t\n\tonWindowEnter(entries, observer) {\n\t\tentries.forEach(entry => {\n\t\t\tif (entry.intersectionRatio > 0) {\n\t\t\t\tthis.dispatchEvent(entryEvents.start);\t\n\t\t\t}\n\t\t\tif (entry.intersectionRatio > 0.25) {\n\t\t\t\tthis.dispatchEvent(entryEvents.quarter);\t\n\t\t\t}\n\t\t\tif (entry.intersectionRatio > 0.5) {\n\t\t\t\tthis.dispatchEvent(entryEvents.half);\t\n\t\t\t}\n\t\t\tif (entry.intersectionRatio > 0.75) {\n\t\t\t\tthis.dispatchEvent(entryEvents.threeQuarter);\t\n\t\t\t}\n\t\t\tif (entry.intersectionRatio == 1) {\n\t\t\t\tthis.dispatchEvent(entryEvents.end);\n\t\t\t\tobserver.disconnect();\n\t\t\t}\n\t\t})\n\t}\n}\n\nconst init = (() => {\n    if (customElements) {\n        customElements.define('entry-animation', EntryAnimation);\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://entry-animation-web-component/./src/entry-animation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/entry-animation.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;