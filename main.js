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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard() {\n    _classCallCheck(this, Gameboard);\n\n    this.gameBoardArray = this._createGameBoardArray();\n    this.missedAttacks = [];\n  }\n\n  _createClass(Gameboard, [{\n    key: \"_createGameBoardArray\",\n    value: function _createGameBoardArray() {\n      var array = [];\n\n      for (var i = 0; i < 10; i++) {\n        var subArray = [];\n\n        for (var j = 0; j < 10; j++) {\n          subArray.push({\n            'ship': undefined,\n            'shipIndex': undefined\n          });\n        }\n\n        array.push(subArray);\n      }\n\n      return array;\n    }\n  }, {\n    key: \"getGameBoard\",\n    value: function getGameBoard() {\n      return this.gameBoardArray;\n    }\n  }, {\n    key: \"_validPlace\",\n    value: function _validPlace(length, direction, x, y) {\n      if (direction === 'horizontal') {\n        for (var i = 0; i < length; i++) {\n          if (this.gameBoardArray[y][x + i].ship !== undefined) {\n            return false;\n          }\n        }\n      } else if (direction === 'vertical') {\n        for (var _i = 0; _i < length; _i++) {\n          if (this.gameBoardArray[y + _i][x].ship !== undefined) {\n            return false;\n          }\n        }\n      }\n\n      return true;\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(ship, direction, x, y) {\n      if (this._validPlace(ship.getShipLength(), direction, x, y) && direction === 'horizontal') {\n        for (var i = 0; i < ship.getShipLength(); i++) {\n          this.gameBoardArray[y][x + i].ship = ship;\n          this.gameBoardArray[y][x + i].shipIndex = i;\n        }\n      } else if (this._validPlace(ship.getShipLength(), direction, x, y) && direction === 'vertical') {\n        for (var _i2 = 0; _i2 < ship.getShipLength(); _i2++) {\n          this.gameBoardArray[y + _i2][x].ship = ship;\n          this.gameBoardArray[y + _i2][x].shipIndex = _i2;\n        }\n      } else {\n        console.log(\"INVALID PLACEMENT\");\n      }\n    }\n  }]);\n\n  return Gameboard;\n}();\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n // let test = new Ship(2);\n// console.log(test);\n// test.hit(0);\n// console.log(test.ship);\n// console.log(test.isSunk());\n// test.hit(1);\n// console.log(test.ship);\n// console.log(test.isSunk());\n\nvar board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\nconsole.log(board);\nvar ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2);\nboard.placeShip(ship, 'horizontal', 0, 0);\nconsole.log(board);\nvar ship2 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3);\nboard.placeShip(ship2, 'horizontal', 0, 0);\nboard.placeShip(ship2, 'vertical', 2, 0);\nboard.placeShip(ship2, 'vertical', 4, 4);\nconsole.log(board);\nconsole.log(board.gameBoardArray[0][0].ship.length);\nconsole.log(board.gameBoardArray[4][4].ship.length);\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Ship = /*#__PURE__*/function () {\n  function Ship(length) {\n    _classCallCheck(this, Ship);\n\n    this.length = length;\n    this.ship = this._createShip();\n  }\n\n  _createClass(Ship, [{\n    key: \"getShipLength\",\n    value: function getShipLength() {\n      return this.ship.length;\n    }\n  }, {\n    key: \"_createShip\",\n    value: function _createShip() {\n      var shipSlots = [];\n\n      for (var i = 0; i < this.length; i++) {\n        shipSlots.push({\n          hit: false\n        });\n      }\n\n      return shipSlots;\n    }\n  }, {\n    key: \"hit\",\n    value: function hit(num) {\n      this.ship[num].hit = true;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      for (var i = 0; i < this.length; i++) {\n        if (this.ship[i].hit === false) {\n          return false;\n        }\n      }\n\n      return true;\n    }\n  }]);\n\n  return Ship;\n}();\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;