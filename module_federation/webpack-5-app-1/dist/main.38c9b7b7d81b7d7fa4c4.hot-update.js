/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetutorial"]("main",{

/***/ "./src/hello-world.js":
/*!****************************!*\
  !*** ./src/hello-world.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_myNextRide_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/myNextRide.jpeg */ \"./src/assets/images/myNextRide.jpeg\");\n\n\nfunction helloWorld() {\n  console.log('Hello world!');\n  const div = document.createElement('div');\n  div.innerHTML = '<h1>Application 1 which serves a button component</h1>'\n  const body = document.querySelector('body');\n  body.innerHTML = '';\n  body.appendChild(div);\n  const img = document.createElement('img');\n  img.style.width = '400px';\n  img.style.height = 'auto';\n  img.src = _assets_images_myNextRide_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  img.alt = 'bike-image';\n\n  body.appendChild(img);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloWorld);\n\n//# sourceURL=webpack://tutorial/./src/hello-world.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c836103393a5a5feb374")
/******/ })();
/******/ 
/******/ }
);