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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boardUI\": () => (/* binding */ boardUI)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar boardUI = /*#__PURE__*/function () {\n  function boardUI() {\n    _classCallCheck(this, boardUI);\n\n    this.playerBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\n    this.aiBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\n    this.playerBoardUI = this.createBoard('playerBoard');\n    this.aiBoardUI = this.createBoard('aiBoard');\n    this.battleshipHTML = document.querySelector(\"#battleship\");\n    this.carrierHTML = document.querySelector(\"#carrier\");\n    this.submarineHTML = document.querySelector(\"#submarine\");\n    this.destroyerHTML = document.querySelector(\"#destroyer\");\n    this.cruiserHTML = document.querySelector(\"#cruiser\");\n  }\n\n  _createClass(boardUI, [{\n    key: \"refreshWindow\",\n    value: function refreshWindow() {\n      location.reload();\n    }\n  }, {\n    key: \"dropShip\",\n    value: function dropShip(e) {\n      var data = JSON.parse(e.dataTransfer.getData('text/plain'));\n      var x = parseInt(e.target.getAttribute('data-data-x'));\n      var y = parseInt(e.target.getAttribute('data-data-y'));\n      console.log(data, x, y);\n      console.log(e.target);\n\n      switch (data.id) {\n        case 'carrier':\n          {\n            if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {\n              this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);\n            } else {\n              alert(\"YO YOU CANT DO THAT\");\n            }\n\n            break;\n          }\n\n        case 'battleship':\n          {\n            if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {\n              this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);\n            } else {\n              alert(\"YO YOU CANT DO THAT\");\n            }\n\n            break;\n          }\n\n        case 'submarine':\n          {\n            if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {\n              this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);\n            } else {\n              alert(\"YO YOU CANT DO THAT\");\n            }\n\n            break;\n          }\n\n        case 'cruiser':\n          {\n            if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {\n              this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);\n            } else {\n              alert(\"YO YOU CANT DO THAT\");\n            }\n\n            break;\n          }\n\n        case 'destroyer':\n          {\n            if (this.validPlacement(data.alignment, x, y, parseInt(data.length))) {\n              this.dropShipPlaceHelper(data.length, data.id, data.alignment, x, y);\n            } else {\n              alert(\"YO YOU CANT DO THAT\");\n            }\n\n            break;\n          }\n      }\n    }\n  }, {\n    key: \"dropShipPlaceHelper\",\n    value: function dropShipPlaceHelper(length, id, alignment, x, y) {\n      var ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(parseInt(length));\n      this.playerBoard.placeShip(ship, alignment, x, y);\n      this.updateDisplay(this.playerBoardUI, this.playerBoard);\n      document.querySelector(\"#\".concat(id)).remove();\n    }\n  }, {\n    key: \"validPlacement\",\n    value: function validPlacement(alignment, x, y, length) {\n      console.log(alignment, x, y, length);\n\n      if (alignment === 'vertical') {\n        if (length + y > 10) {\n          return false;\n        }\n\n        for (var i = 0; i < length; i++) {\n          if (this.playerBoard.getGameBoard()[y + i][x].ship !== undefined) {\n            return false;\n          }\n        }\n      } else {\n        if (length + x > 10) {\n          return false;\n        }\n\n        for (var _i = 0; _i < length; _i++) {\n          if (this.playerBoard.getGameBoard()[y][x + _i].ship !== undefined) {\n            return false;\n          }\n        }\n      }\n\n      return true;\n    }\n  }, {\n    key: \"updateDisplay\",\n    value: function updateDisplay(boardName, board) {\n      var boardArray = board.getGameBoard();\n      var missedAttacks = board.getMissedAttacks();\n\n      for (var i = 0; i < boardArray.length; i++) {\n        for (var j = 0; j < boardArray.length; j++) {\n          if (boardArray[i][j].ship && boardName === 'playerBoard') {\n            // console.log(i, j);\n            var cell = document.querySelector(\".\".concat(boardName, \" [data-data-x='\").concat(j, \"'][data-data-y='\").concat(i, \"']\")); // console.log(cell);\n\n            cell.classList.add('placed-ship');\n          }\n        }\n      } // console.log(boardArray);\n      // console.log(missedAttacks);\n\n    }\n  }, {\n    key: \"attackEvent\",\n    value: function attackEvent(target) {}\n  }, {\n    key: \"dragStart\",\n    value: function dragStart(element) {\n      element.addEventListener(\"dragstart\", function (e) {\n        e.dataTransfer.setData(\"text/plain\", JSON.stringify({\n          'id': e.target.id,\n          'length': e.target.dataset.length,\n          'alignment': e.target.classList.contains('horizontal') ? 'horizontal' : 'vertical'\n        }));\n      });\n    }\n  }, {\n    key: \"createBoard\",\n    value: function createBoard(boardName) {\n      var _this = this;\n\n      var board = document.querySelector(\".\".concat(boardName));\n\n      for (var i = 0; i < 10; i++) {\n        for (var j = 0; j < 10; j++) {\n          var cell = document.createElement('div');\n          cell.classList.add('cell');\n          cell.dataset.dataX = j;\n          cell.dataset.dataY = i;\n\n          if (boardName === \"aiBoard\") {\n            cell.addEventListener(\"click\", function (e) {//attackEvent(e.target);\n            });\n          } else if (boardName === \"playerBoard\") {\n            cell.addEventListener(\"dragover\", function (e) {\n              e.preventDefault();\n            });\n            cell.addEventListener(\"drop\", function (e) {\n              e.preventDefault();\n\n              _this.dropShip(e);\n            });\n          }\n\n          board.appendChild(cell);\n        }\n      }\n\n      return boardName;\n    }\n  }]);\n\n  return boardUI;\n}();\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard() {\n    _classCallCheck(this, Gameboard);\n\n    this.gameBoardArray = this._createGameBoardArray();\n    this.missedAttacks = [];\n    this.ships = [];\n  }\n\n  _createClass(Gameboard, [{\n    key: \"_createGameBoardArray\",\n    value: function _createGameBoardArray() {\n      var array = [];\n\n      for (var i = 0; i < 10; i++) {\n        var subArray = [];\n\n        for (var j = 0; j < 10; j++) {\n          subArray.push({\n            'ship': undefined,\n            'shipIndex': undefined\n          });\n        }\n\n        array.push(subArray);\n      }\n\n      return array;\n    }\n  }, {\n    key: \"getGameBoard\",\n    value: function getGameBoard() {\n      return this.gameBoardArray;\n    }\n  }, {\n    key: \"_validPlace\",\n    value: function _validPlace(length, direction, x, y) {\n      if (direction === 'horizontal') {\n        if (x + length > 10) {\n          return false;\n        }\n\n        for (var i = 0; i < length; i++) {\n          if (this.gameBoardArray[y][x + i].ship !== undefined) {\n            return false;\n          }\n        }\n      } else if (direction === 'vertical') {\n        if (y + length > 10) {\n          return false;\n        }\n\n        for (var _i = 0; _i < length; _i++) {\n          if (this.gameBoardArray[y + _i][x].ship !== undefined) {\n            return false;\n          }\n        }\n      }\n\n      return true;\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(ship, direction, x, y) {\n      if (this._validPlace(ship.getShipLength(), direction, x, y) && direction === 'horizontal') {\n        for (var i = 0; i < ship.getShipLength(); i++) {\n          this.gameBoardArray[y][x + i].ship = ship;\n          this.gameBoardArray[y][x + i].shipIndex = i;\n        }\n\n        this.ships.push(ship);\n      } else if (this._validPlace(ship.getShipLength(), direction, x, y) && direction === 'vertical') {\n        for (var _i2 = 0; _i2 < ship.getShipLength(); _i2++) {\n          this.gameBoardArray[y + _i2][x].ship = ship;\n          this.gameBoardArray[y + _i2][x].shipIndex = _i2;\n        }\n\n        this.ships.push(ship);\n      } else {\n        return \"INVALID PLACEMENT\";\n      }\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(x, y) {\n      if (this.gameBoardArray[y][x].ship !== undefined) {\n        this.gameBoardArray[y][x].ship.hit(this.gameBoardArray[y][x].shipIndex);\n      } else {\n        this.missedAttacks.push({\n          x: x,\n          y: y\n        });\n      }\n    }\n  }, {\n    key: \"getMissedAttacks\",\n    value: function getMissedAttacks() {\n      return this.missedAttacks;\n    }\n  }, {\n    key: \"allShipsSunk\",\n    value: function allShipsSunk() {\n      for (var i = 0; i < this.ships.length; i++) {\n        for (var j = 0; j < this.ships[i].ship.length; j++) {\n          if (this.ships[i].ship[j].hit === false) {\n            return false;\n          }\n        }\n      }\n\n      return true;\n    }\n  }]);\n\n  return Gameboard;\n}();\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\n\n // let test = new Ship(2);\n// console.log(test);\n// test.hit(0);\n// console.log(test.ship);\n// console.log(test.isSunk());\n// test.hit(1);\n// console.log(test.ship);\n// console.log(test.isSunk());\n\nvar board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard();\nvar ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2);\nboard.placeShip(ship, 'horizontal', 0, 0);\nvar ship2 = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4);\nboard.placeShip(ship2, 'vertical', 3, 5); // console.log(board);\n// let ship2 = new Ship(3);\n// board.placeShip(ship2, 'horizontal', 0, 0);\n// board.placeShip(ship2, 'vertical', 2, 0);\n// board.placeShip(ship2, 'vertical', 4, 4);\n// console.log(board);\n// console.log(board.gameBoardArray[0][0].ship.length);\n// console.log(board.gameBoardArray[4][4].ship.length);\n\nvar b = new _UI_js__WEBPACK_IMPORTED_MODULE_2__.boardUI();\nb.dragStart(b.carrierHTML);\nb.dragStart(b.battleshipHTML);\nb.dragStart(b.submarineHTML);\nb.dragStart(b.cruiserHTML);\nb.dragStart(b.destroyerHTML);\ndocument.querySelector('p').addEventListener('click', function () {\n  b.updateDisplay('playerBoard', board);\n});\nvar htmlShips = document.querySelectorAll('.ship');\ndocument.querySelector('.flip-alignment').addEventListener('click', function () {\n  htmlShips.forEach(function (ship) {\n    if (ship.classList.contains('horizontal')) {\n      ship.classList.remove('horizontal');\n      ship.classList.add('vertical');\n    } else {\n      ship.classList.remove('vertical');\n      ship.classList.add('horizontal');\n    }\n  });\n}); // placeMentShips.forEach(ship => {\n//     ship.addEventListener('dragstart', dragStart);\n//     ship.addEventListener('dragend', dragEnd);\n// });\n// function dragStart(e) {\n//     e.dataTransfer.setData('text/plain', e.target.id);\n//     e.target.classList.add('blur');\n//     console.log(e.target.parentNode);\n//     // setTimeout(() => {\n//     //     e.target.classList.add('hide');\n//     // }, 0);\n// }\n// function dragEnd(e) {\n//     e.target.classList.remove('blur');\n// }\n// const boxes = document.querySelectorAll('.droppable');\n// boxes.forEach(box => {\n//     box.addEventListener('dragenter', dragEnter);\n//     box.addEventListener('dragover', dragOver);\n//     box.addEventListener('dragleave', dragLeave);\n//     box.addEventListener('drop', drop);\n// });\n// function dragEnter(e) {\n//     e.preventDefault();\n//     e.target.classList.add('drag-over');\n// }\n// function dragOver(e) {\n//     e.preventDefault();\n//     e.target.classList.add('drag-over');\n// }\n// function dragLeave(e) {\n//     e.target.classList.remove('drag-over');\n// }\n// function drop(e) {\n//     e.target.classList.remove('drag-over');\n//     // get the draggable element\n//     const id = e.dataTransfer.getData('text/plain');\n//     console.log(id);\n//     const draggable = document.getElementById(id);\n//     // add it to the drop target\n//     e.target.appendChild(draggable);\n//     // display the draggable element\n//     draggable.classList.remove('hide');\n// }\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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