/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/computer-player.js":
/*!******************************************!*\
  !*** ./src/factories/computer-player.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/factories/player.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ComputerPlayer = /*#__PURE__*/function (_Player) {
  _inherits(ComputerPlayer, _Player);

  var _super = _createSuper(ComputerPlayer);

  function ComputerPlayer() {
    var _this;

    _classCallCheck(this, ComputerPlayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "randomAttackEnemy", function () {
      var coords = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      var hit;

      try {
        hit = _this.attackEnemy(coords);
      } catch (error) {
        if (error.message === 'You cannot attack the same place twice') {
          return _this.randomAttackEnemy();
        }

        throw error;
      }

      return {
        coords: coords,
        hit: hit
      };
    });

    _defineProperty(_assertThisInitialized(_this), "attackCorner", function () {
      // todo: remove
      var coords = [9, 9];

      var hit = _this.attackEnemy(coords);

      return {
        coords: coords,
        hit: hit
      };
    });

    return _this;
  }

  return _createClass(ComputerPlayer);
}(_player__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComputerPlayer);

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _placeBlastingArea = /*#__PURE__*/new WeakMap();

var Gameboard = /*#__PURE__*/_createClass(function Gameboard() {
  var _this = this;

  _classCallCheck(this, Gameboard);

  _classPrivateFieldInitSpec(this, _placeBlastingArea, {
    writable: true,
    value: function value(coord, length, orientation, i) {
      if (orientation === 'horizontal') {
        if (i === coord[1] && i > 0) {
          _this.boardPlaces[coord[0]][i - 1] = -1;

          if (coord[0] > 0) {
            _this.boardPlaces[coord[0] - 1][i - 1] = -1;
          }

          if (coord[0] < 9) {
            _this.boardPlaces[coord[0] + 1][i - 1] = -1;
          }
        }

        if (coord[0] > 0) {
          _this.boardPlaces[coord[0] - 1][i] = -1;
        }

        if (coord[0] < 9) {
          _this.boardPlaces[coord[0] + 1][i] = -1;
        }

        if (i === coord[1] + length - 1 && i < 9) {
          _this.boardPlaces[coord[0]][i + 1] = -1;

          if (coord[0] > 0) {
            _this.boardPlaces[coord[0] - 1][i + 1] = -1;
          }

          if (coord[0] < 9) {
            _this.boardPlaces[coord[0] + 1][i + 1] = -1;
          }
        }
      }

      if (orientation === 'vertical') {
        if (i === coord[0] && i > 0) {
          _this.boardPlaces[i - 1][coord[1]] = -1;

          if (coord[1] > 0) {
            _this.boardPlaces[i - 1][coord[1] - 1] = -1;
          }

          if (coord[1] < 9) {
            _this.boardPlaces[i - 1][coord[1] + 1] = -1;
          }
        }

        if (coord[1] > 0) {
          _this.boardPlaces[i][coord[1] - 1] = -1;
        }

        if (coord[1] < 9) {
          _this.boardPlaces[i][coord[1] + 1] = -1;
        }

        if (i === coord[0] + length - 1 && i < 9) {
          _this.boardPlaces[i + 1][coord[1]] = -1;

          if (coord[1] > 0) {
            _this.boardPlaces[i + 1][coord[1] - 1] = -1;
          }

          if (coord[1] < 9) {
            _this.boardPlaces[i + 1][coord[1] + 1] = -1;
          }
        }
      }
    }
  });

  _defineProperty(this, "resetAllShips", function () {
    _this.boardPlaces = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    _this.boardHits = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    _this.allShipsInfo = [];
  });

  _defineProperty(this, "placeShip", function (coord, length, orientation) {
    var ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](coord, length, orientation);
    var id = _this.allShipsInfo.length + 1;

    if (orientation === 'horizontal') {
      if (coord[1] + length - 1 > 9) {
        throw new Error('You cannot place ship outside the board');
      }

      for (var i = coord[1]; i < coord[1] + length; i += 1) {
        if (_this.boardPlaces[coord[0]][i] !== 0) {
          throw new Error('You cannot place a ship over an existing ship or blasting area');
        }

        _this.boardPlaces[coord[0]][i] = id;

        _classPrivateFieldGet(_this, _placeBlastingArea).call(_this, coord, length, orientation, i);

        ship.coords.push([coord[0], i]);
      }
    }

    if (orientation === 'vertical') {
      if (coord[0] + length - 1 > 9) {
        throw new Error('You cannot place ship outside the board');
      }

      for (var _i = coord[0]; _i < coord[0] + length; _i += 1) {
        if (_this.boardPlaces[_i][coord[1]] !== 0) {
          throw new Error('You cannot place a ship over an existing ship or blasting area');
        }

        _this.boardPlaces[_i][coord[1]] = id;

        _classPrivateFieldGet(_this, _placeBlastingArea).call(_this, coord, length, orientation, _i);

        ship.coords.push([_i, coord[1]]);
      }
    }

    _this.allShipsInfo.push({
      id: id,
      ship: ship
    });
  });

  _defineProperty(this, "randomPlaceAllShips", function () {
    var lengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    var orientation = ['horizontal', 'vertical'];

    var retry = function retry(length) {
      var coords = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      var bin = Math.floor(Math.random() * 2);

      try {
        _this.placeShip(coords, length, orientation[bin]);
      } catch (error) {
        if (error.message === 'You cannot place ship outside the board' || error.message === 'You cannot place a ship over an existing ship or blasting area') {
          retry(length);
        }
      }
    };

    lengths.forEach(function (length) {
      return retry(length);
    });
  });

  _defineProperty(this, "setShipsProps", function () {
    if (_this.selectedShipsProps) {
      localStorage.setItem(JSON.stringify(_this.selectedShipsProps));
      return _this.selectedShipsProps;
    }

    if (typeof window !== 'undefined' && localStorage.getItem('playerShipsProps')) {
      return JSON.parse(localStorage.getItem('playerShipsProps'));
    }

    return [{
      coord: [9, 9],
      length: 1,
      orientation: 'horizontal'
    }, {
      coord: [0, 9],
      length: 1,
      orientation: 'horizontal'
    }, {
      coord: [0, 0],
      length: 4,
      orientation: 'horizontal'
    }, {
      coord: [0, 5],
      length: 3,
      orientation: 'horizontal'
    }, {
      coord: [3, 4],
      length: 3,
      orientation: 'vertical'
    }, {
      coord: [8, 0],
      length: 2,
      orientation: 'vertical'
    }, {
      coord: [8, 2],
      length: 2,
      orientation: 'vertical'
    }, {
      coord: [7, 7],
      length: 2,
      orientation: 'vertical'
    }, {
      coord: [3, 0],
      length: 1,
      orientation: 'horizontal'
    }, {
      coord: [3, 2],
      length: 1,
      orientation: 'horizontal'
    }];
  });

  _defineProperty(this, "placeAllShips", function () {
    _this.shipsProps.forEach(function (shipProps) {
      _this.placeShip(shipProps.coord, shipProps.length, shipProps.orientation);
    });
  });

  _defineProperty(this, "receiveAttack", function (coord) {
    var hit = _this.boardHits[coord[0]][coord[1]];

    if (hit !== 0) {
      throw new Error('You cannot attack the same place twice');
    }

    var id = _this.boardPlaces[coord[0]][coord[1]];

    if (id > 0) {
      var shipInfo = _this.allShipsInfo.find(function (s) {
        return s.id === id;
      });

      var position = shipInfo.ship.coords.findIndex(function (el) {
        return JSON.stringify(el) === JSON.stringify(coord);
      });
      shipInfo.ship.hit(position);
      _this.boardHits[coord[0]][coord[1]] = id;
      return true;
    }

    _this.boardHits[coord[0]][coord[1]] = -1;
    return false;
  });

  _defineProperty(this, "allShipsSunk", function () {
    var sunkCount = 0;

    _this.allShipsInfo.forEach(function (info) {
      if (info.ship.isSunk()) {
        sunkCount += 1;
      }
    });

    return sunkCount === _this.allShipsInfo.length;
  });

  this.boardPlaces = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  this.boardHits = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  this.allShipsInfo = [];
  this.shipsProps = this.setShipsProps();
  this.selectedShipsProps = null;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Player = /*#__PURE__*/_createClass(function Player(enemyGameboard) {
  var _this = this;

  _classCallCheck(this, Player);

  _defineProperty(this, "attackEnemy", function (coord) {
    return _this.enemyGameboard.receiveAttack(coord);
  });

  this.enemyGameboard = enemyGameboard;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Ship = /*#__PURE__*/_createClass(function Ship(coord, length, orientation) {
  var _this = this;

  _classCallCheck(this, Ship);

  _defineProperty(this, "hit", function (pos) {
    _this.positions[pos] = 1;
  });

  _defineProperty(this, "isSunk", function () {
    if (!_this.positions.includes(0)) {
      return true;
    }

    return false;
  });

  this.coord = coord;
  this.coords = [];
  this.length = this.constructor.setLength(length);
  this.orientation = orientation;
  this.positions = Array(this.length).fill(0);
});

_defineProperty(Ship, "setLength", function (length) {
  if (length < 1) {
    throw Error('Ship length must be > 0');
  }

  return length;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/gameboard */ "./src/factories/gameboard.js");
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/player */ "./src/factories/player.js");
/* harmony import */ var _factories_computer_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/computer-player */ "./src/factories/computer-player.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views */ "./src/views.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Game = /*#__PURE__*/_createClass(function Game() {
  var _this = this;

  _classCallCheck(this, Game);

  _defineProperty(this, "placeComputerShips", function () {
    _this.computerGameboard.randomPlaceAllShips();
  });

  _defineProperty(this, "placePlayerShips", function () {
    _this.playerGameboard.setShipsProps();

    _this.playerGameboard.placeAllShips();
  });

  _defineProperty(this, "setUpNewGame", function () {
    _this.playerGameboard = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    _this.computerGameboard = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    _this.player = new _factories_player__WEBPACK_IMPORTED_MODULE_1__["default"](_this.computerGameboard);
    _this.computer = new _factories_computer_player__WEBPACK_IMPORTED_MODULE_2__["default"](_this.playerGameboard);

    _this.placePlayerShips();

    _this.placeComputerShips();

    _views__WEBPACK_IMPORTED_MODULE_3__["default"].displayBoards();

    var playerShipsCoords = _this.playerGameboard.allShipsInfo.map(function (info) {
      return info.ship.coords;
    });

    _views__WEBPACK_IMPORTED_MODULE_3__["default"].displayShips(playerShipsCoords, 'player');
    _views__WEBPACK_IMPORTED_MODULE_3__["default"].listenForAttacks(_this);
    _views__WEBPACK_IMPORTED_MODULE_3__["default"].listenForRandomPlaceShips(_this);
    _views__WEBPACK_IMPORTED_MODULE_3__["default"].initialMessage();
  });

  _defineProperty(this, "isGameOver", function () {
    if (_this.computerGameboard.allShipsSunk()) {
      return {
        gameover: true,
        winner: 'player'
      };
    }

    if (_this.playerGameboard.allShipsSunk()) {
      return {
        gameover: true,
        winner: 'computer'
      };
    }

    return {
      gameover: false,
      winner: null
    };
  });

  _defineProperty(this, "runGameLoop", function (playerCoords) {
    var computerTurn = function computerTurn() {
      var computerAttack = _this.computer.randomAttackEnemy();

      if (computerAttack.hit) {
        _views__WEBPACK_IMPORTED_MODULE_3__["default"].hitSquare(computerAttack.coords, 'player', true);
        _views__WEBPACK_IMPORTED_MODULE_3__["default"].displayScore(_this.playerGameboard, 'player');
        _views__WEBPACK_IMPORTED_MODULE_3__["default"].disableClicks();

        var result = _this.isGameOver();

        if (result.gameover && result.winner === 'computer') {
          _views__WEBPACK_IMPORTED_MODULE_3__["default"].showGameoverMessage(result.winner);
        } else {
          setTimeout(function () {
            computerTurn();
            _views__WEBPACK_IMPORTED_MODULE_3__["default"].enableClicks();
          }, 800);
        }

        return;
      }

      _views__WEBPACK_IMPORTED_MODULE_3__["default"].hitSquare(computerAttack.coords, 'player', false);
    };

    var playerTurn = function playerTurn() {
      var playerAttack = _this.player.attackEnemy(playerCoords);

      if (playerAttack) {
        _views__WEBPACK_IMPORTED_MODULE_3__["default"].hitSquare(playerCoords, 'computer', true);
        _views__WEBPACK_IMPORTED_MODULE_3__["default"].displayScore(_this.playerGameboard, 'player');
        _views__WEBPACK_IMPORTED_MODULE_3__["default"].displayScore(_this.computerGameboard, 'computer');

        var result = _this.isGameOver();

        if (result.gameover && result.winner === 'player') {
          _views__WEBPACK_IMPORTED_MODULE_3__["default"].showGameoverMessage(result.winner);
        }
      } else {
        _views__WEBPACK_IMPORTED_MODULE_3__["default"].hitSquare(playerCoords, 'computer', false);
        _views__WEBPACK_IMPORTED_MODULE_3__["default"].disableClicks();
        setTimeout(function () {
          computerTurn();
          _views__WEBPACK_IMPORTED_MODULE_3__["default"].enableClicks();
        }, 500);
      }
    };

    playerTurn();
    _views__WEBPACK_IMPORTED_MODULE_3__["default"].displayScore(_this.playerGameboard, 'player');
    _views__WEBPACK_IMPORTED_MODULE_3__["default"].displayScore(_this.computerGameboard, 'computer');
  });

  this.playerGameboard = null;
  this.computerGameboard = null;
  this.player = null;
  this.computer = null;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/views.js":
/*!**********************!*\
  !*** ./src/views.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var views = function () {
  var createBoard = function createBoard(player) {
    var gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');
    gameboard.classList.add("".concat(player, "-gameboard"));

    for (var i = 0; i < 100; i += 1) {
      var square = document.createElement('div');
      square.classList.add('square');
      if (player === 'computer') square.classList.add('clickable-square');
      if (player === 'player') square.classList.add('player-square');
      if (i >= 90) square.classList.add('square-bottom');
      if ((i - 9) % 10 === 0) square.classList.add('square-right');
      square.setAttribute('data-id', i);
      square.setAttribute('coords', String(i).padStart(2, '0'));
      gameboard.appendChild(square);
    }

    return gameboard;
  };

  var displayBoards = function displayBoards() {
    var gameboardContainer = document.querySelector('.gameboards-container');
    gameboardContainer.innerHTML = '';
    var playerGameBoardName = document.createElement('h2');
    playerGameBoardName.textContent = 'Your board';
    var playerGameboard = createBoard('player');
    gameboardContainer.appendChild(playerGameBoardName);
    gameboardContainer.appendChild(playerGameboard);
    var computerGameBoardName = document.createElement('h2');
    computerGameBoardName.textContent = "Computer's board";
    var computerGameBoard = createBoard('computer');
    gameboardContainer.appendChild(computerGameBoardName);
    gameboardContainer.appendChild(computerGameBoard);
    var randomBtn = document.createElement('button');
    randomBtn.classList.add('random-btn');
    randomBtn.textContent = 'Randomize ships';
    var container = document.querySelector('.player-score');
    container.appendChild(randomBtn);
  };

  var displayShips = function displayShips(allShipsCoords, player) {
    allShipsCoords.forEach(function (shipCoords) {
      shipCoords.forEach(function (coord) {
        var _coord = _slicedToArray(coord, 2),
            x = _coord[0],
            y = _coord[1];

        var square = document.querySelector(".".concat(player, "-square[coords=\"").concat(x).concat(y, "\"]"));
        square.classList.add('ship');
        square.setAttribute('draggable', 'true');
      });
    });
  };

  var removeShips = function removeShips(player) {
    var allSquares = document.querySelectorAll(".".concat(player, "-square"));
    allSquares.forEach(function (square) {
      square.classList.remove('ship');
    });
  };

  var listenForRandomPlaceShips = function listenForRandomPlaceShips(game) {
    var randomBtn = document.querySelector('.random-btn');
    randomBtn.addEventListener('click', function () {
      game.playerGameboard.resetAllShips();
      game.playerGameboard.randomPlaceAllShips();
      var allShipsCoords = game.playerGameboard.allShipsInfo.map(function (info) {
        return info.ship.coords;
      });
      removeShips('player');
      displayShips(allShipsCoords, 'player');
    });
  };

  var disableClicks = function disableClicks() {
    var cover = document.createElement('div');
    cover.classList.add('cover');
    var computerGameboard = document.querySelector('.computer-gameboard');
    computerGameboard.appendChild(cover);
  };

  var enableClicks = function enableClicks() {
    var cover = document.querySelector('.cover');
    var computerGameboard = document.querySelector('.computer-gameboard');
    computerGameboard.removeChild(cover);
  };

  var initialMessage = function initialMessage() {
    disableClicks();
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');
    messageContainer.classList.add('initial-message');
    var message = document.createElement('h2');
    var span = document.createElement('span');
    span.classList.add('iconify');
    span.setAttribute('data-icon', 'mdi-arrow-left');
    message.appendChild(span);
    message.appendChild(document.createTextNode(' Place your ships on the gameboard'));
    messageContainer.appendChild(message);
    var btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('start-btn');
    btn.textContent = 'Start game';
    messageContainer.appendChild(btn);
    var cover = document.querySelector('.cover');
    cover.appendChild(messageContainer);

    var startGame = function startGame() {
      enableClicks();
      var playerGameboard = document.querySelector('.player-gameboard');
      var playerCover = document.createElement('div');
      playerCover.classList.add('player-cover');
      playerGameboard.appendChild(playerCover);
      var btnContainer = document.querySelector('.player-score');
      var randomBtn = document.querySelector('.random-btn');
      btnContainer.removeChild(randomBtn);
    };

    btn.addEventListener('click', startGame);
  };

  var displayScore = function displayScore(gameboard, player) {
    var score = document.createElement('div');
    score.classList.add("".concat(player, "-score"));
    score.classList.add('score');
    var shipsInfo = gameboard.allShipsInfo.sort(function (a, b) {
      return b.ship.length - a.ship.length;
    });
    shipsInfo.forEach(function (info) {
      var ship = document.createElement('div');
      ship.classList.add('score-ship');
      ship.classList.add("score-ship-".concat(info.ship.length));
      if (info.ship.isSunk()) ship.classList.add('score-ship-sunk');
      score.appendChild(ship);
    });
    var oldScore = document.querySelector(".".concat(player, "-score"));
    var scoreContainer = document.querySelector('.score-container');
    scoreContainer.replaceChild(score, oldScore);
    var content = document.querySelector('.content');
    content.appendChild(scoreContainer);
  };

  var restartGame = function restartGame() {
    window.location.reload();
  };

  var showGameoverMessage = function showGameoverMessage(winner) {
    var modal = document.createElement('div');
    modal.classList.add('modal');
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');
    var message = document.createElement('p');
    message.textContent = winner === 'player' ? 'You win!' : 'You lost!';
    messageContainer.appendChild(message);
    modal.appendChild(messageContainer);
    var btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'New game';
    btn.addEventListener('click', restartGame);
    modal.appendChild(btn);
    var content = document.querySelector('.gameboards-container');
    content.appendChild(modal);
  };

  var listenForAttacks = function listenForAttacks(game) {
    var computerSquares = document.querySelectorAll('.clickable-square');

    var playerAttack = function playerAttack(e) {
      e.target.removeEventListener('click', playerAttack);
      e.target.classList.remove('clickable-square');
      var _ref = [Number(e.target.getAttribute('coords')[0]), Number(e.target.getAttribute('coords')[1])],
          x = _ref[0],
          y = _ref[1];
      game.runGameLoop([x, y]);
    };

    computerSquares.forEach(function (sqr) {
      sqr.addEventListener('click', playerAttack);
    });
  };

  var hitSquare = function hitSquare(coords, opponent, hit) {
    var square = document.querySelector(".".concat(opponent, "-gameboard [coords=\"").concat(coords[0]).concat(coords[1], "\"]"));

    if (hit) {
      square.classList.add('hit-ship');
      var span = document.createElement('span');
      span.classList.add('iconify');
      span.setAttribute('data-icon', 'mdi-close');
      square.appendChild(span);
    } else {
      square.classList.add('miss-ship');

      var _span = document.createElement('span');

      _span.classList.add('iconify');

      _span.setAttribute('data-icon', 'mdi-circle');

      square.appendChild(_span);
    }
  };

  return {
    listenForRandomPlaceShips: listenForRandomPlaceShips,
    disableClicks: disableClicks,
    enableClicks: enableClicks,
    initialMessage: initialMessage,
    displayBoards: displayBoards,
    displayShips: displayShips,
    displayScore: displayScore,
    showGameoverMessage: showGameoverMessage,
    listenForAttacks: listenForAttacks,
    hitSquare: hitSquare
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\nbody {\n  width: 100vw;\n}\n\n.header {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  width: 900px;\n  margin: auto;\n}\n\n.header h1 {\n  font-size: 1.8em;\n  color: white;\n  background-color: rgb(60, 60, 60);\n  padding: 10px 23px 0 2px;\n  font-weight: bold;\n  cursor:default;\n}\n\n.content {\n  width: 900px;\n  margin: auto;\n  position: relative;\n}\n\n.gameboards-container {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-rows: auto auto;\n  row-gap: 10px;\n  justify-content: space-between;\n}\n\n.gameboard-name {\n  align-self: center;\n}\n\n.gameboard {\n  background-color: red;\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, auto);\n}\n\n.square {\n  background-color: rgb(237, 237, 237);\n  width: 40px;\n  height: 40px;\n  border-left: 1px solid rgb(173, 173, 173);\n  border-top: 1px solid rgb(173, 173, 173);\n  color: white;\n}\n\n.square-bottom {\n  border-bottom: 1px solid rgb(173, 173, 173);\n}\n\n.square-right {\n  border-right: 1px solid rgb(173, 173, 173);\n}\n\n.clickable-square:hover {\n  background-color: rgb(201, 255, 201);\n  cursor: pointer;\n}\n\n.ship {\n  background-color: rgb(60, 60, 60);\n  border: 1px solid rgb(60, 60, 60);\n}\n\n.hit-ship {\n  background-color: rgb(255, 72, 72);\n  border: 1px solid rgb(255, 72, 72);\n  color: rgb(255, 255, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3em;\n  transition: ease-out 300ms;\n}\n\n.miss-ship {\n  background-color: rgb(182, 221, 255);\n  border: 1px solid rgb(182, 221, 255);\n  color: rgb(255, 255, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .5em;\n  transition: ease-out 300ms;\n}\n\n.cover {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 400px;\n  height: 400px;\n}\n\n.player-cover {\n  position: absolute;\n  width: 400px;\n  height: 400px;\n}\n\n.modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.635);\n  width: 900px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 20px;\n  margin-top: 26px;\n}\n\n.message-container {\n  width: 500px;\n  height: 100px;\n  background-color: rgba(255, 255, 255, 0.868);\n  border-radius: 5px;\n  text-align: center;\n  padding: 36px;\n  font-size: 1.6em;\n}\n\n.initial-message {\n  border-radius: 0;\n  padding: 0;\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.btn {\n  border-width: 0;\n  background-color: rgb(238, 238, 238);\n  padding: 15px 30px;\n  font-size: 1.2em;\n  border-radius: 25px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: rgb(232, 232, 232);\n}\n\n.random-btn {\n  font-size: 1em;\n  border: 0;\n  background-color: rgb(255, 98, 98);\n  border-radius: 5px;\n  color: white;\n  padding: 3px 6px;\n  cursor: pointer;\n}\n\n.score-container {\n  margin: auto;\n  padding-top: 10px;\n  width: 900px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.score {\n  width: 400px;\n  height: fit-content;\n  display: flex;\n  gap: 4px;\n}\n\n.score-ship {\n  --unit: 10px;\n  width: var(--unit);\n  background-color: rgb(194, 194, 194);\n  border-radius: 2px;\n}\n\n.score-ship-4 {\n  height: calc(var(--unit) * 4)\n}\n\n.score-ship-3 {\n  height: calc(var(--unit) * 3)\n}\n\n.score-ship-2 {\n  height: calc(var(--unit) * 2)\n}\n\n.score-ship-1 {\n  height: var(--unit)\n}\n\n.score-ship-sunk {\n  background-color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,sBAAsB;EACtB,qGAAqG;AACvG;;AAEA;EACE,2BAA2B;EAC3B,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,iCAAiC;EACjC,wBAAwB;EACxB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,oCAAoC;EACpC,WAAW;EACX,YAAY;EACZ,yCAAyC;EACzC,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;EAClC,kCAAkC;EAClC,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;EACpC,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,0CAA0C;EAC1C,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,4CAA4C;EAC5C,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,cAAc;EACd,SAAS;EACT,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["html {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\nbody {\n  width: 100vw;\n}\n\n.header {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  width: 900px;\n  margin: auto;\n}\n\n.header h1 {\n  font-size: 1.8em;\n  color: white;\n  background-color: rgb(60, 60, 60);\n  padding: 10px 23px 0 2px;\n  font-weight: bold;\n  cursor:default;\n}\n\n.content {\n  width: 900px;\n  margin: auto;\n  position: relative;\n}\n\n.gameboards-container {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-rows: auto auto;\n  row-gap: 10px;\n  justify-content: space-between;\n}\n\n.gameboard-name {\n  align-self: center;\n}\n\n.gameboard {\n  background-color: red;\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, auto);\n}\n\n.square {\n  background-color: rgb(237, 237, 237);\n  width: 40px;\n  height: 40px;\n  border-left: 1px solid rgb(173, 173, 173);\n  border-top: 1px solid rgb(173, 173, 173);\n  color: white;\n}\n\n.square-bottom {\n  border-bottom: 1px solid rgb(173, 173, 173);\n}\n\n.square-right {\n  border-right: 1px solid rgb(173, 173, 173);\n}\n\n.clickable-square:hover {\n  background-color: rgb(201, 255, 201);\n  cursor: pointer;\n}\n\n.ship {\n  background-color: rgb(60, 60, 60);\n  border: 1px solid rgb(60, 60, 60);\n}\n\n.hit-ship {\n  background-color: rgb(255, 72, 72);\n  border: 1px solid rgb(255, 72, 72);\n  color: rgb(255, 255, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3em;\n  transition: ease-out 300ms;\n}\n\n.miss-ship {\n  background-color: rgb(182, 221, 255);\n  border: 1px solid rgb(182, 221, 255);\n  color: rgb(255, 255, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .5em;\n  transition: ease-out 300ms;\n}\n\n.cover {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 400px;\n  height: 400px;\n}\n\n.player-cover {\n  position: absolute;\n  width: 400px;\n  height: 400px;\n}\n\n.modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.635);\n  width: 900px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 20px;\n  margin-top: 26px;\n}\n\n.message-container {\n  width: 500px;\n  height: 100px;\n  background-color: rgba(255, 255, 255, 0.868);\n  border-radius: 5px;\n  text-align: center;\n  padding: 36px;\n  font-size: 1.6em;\n}\n\n.initial-message {\n  border-radius: 0;\n  padding: 0;\n  width: 400px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.btn {\n  border-width: 0;\n  background-color: rgb(238, 238, 238);\n  padding: 15px 30px;\n  font-size: 1.2em;\n  border-radius: 25px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: rgb(232, 232, 232);\n}\n\n.random-btn {\n  font-size: 1em;\n  border: 0;\n  background-color: rgb(255, 98, 98);\n  border-radius: 5px;\n  color: white;\n  padding: 3px 6px;\n  cursor: pointer;\n}\n\n.score-container {\n  margin: auto;\n  padding-top: 10px;\n  width: 900px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.score {\n  width: 400px;\n  height: fit-content;\n  display: flex;\n  gap: 4px;\n}\n\n.score-ship {\n  --unit: 10px;\n  width: var(--unit);\n  background-color: rgb(194, 194, 194);\n  border-radius: 2px;\n}\n\n.score-ship-4 {\n  height: calc(var(--unit) * 4)\n}\n\n.score-ship-3 {\n  height: calc(var(--unit) * 3)\n}\n\n.score-ship-2 {\n  height: calc(var(--unit) * 2)\n}\n\n.score-ship-1 {\n  height: var(--unit)\n}\n\n.score-ship-sunk {\n  background-color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");




var main = function main() {
  var game = new _game__WEBPACK_IMPORTED_MODULE_2__["default"]();
  game.setUpNewGame();
};

main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FGZSxFQUdmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FIZSxFQUlmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FKZSxFQUtmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FMZSxFQU1mLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FOZSxFQU9mLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FQZSxFQVFmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FSZSxFQVNmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIs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QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNK0YsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtFQUNqQixJQUFNbEMsSUFBSSxHQUFHLElBQUk1RCw2Q0FBSixFQUFiO0VBQ0E0RCxJQUFJLENBQUNtQyxZQUFMO0FBQ0QsQ0FIRDs7QUFLQUQsSUFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvY29tcHV0ZXItcGxheWVyLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy92aWV3cy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9yZXNldC5jc3M/ZWRlMCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY2xhc3MgQ29tcHV0ZXJQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICByYW5kb21BdHRhY2tFbmVteSA9ICgpID0+IHtcbiAgICBjb25zdCBjb29yZHMgPSBbXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgXTtcbiAgICBsZXQgaGl0O1xuICAgIHRyeSB7XG4gICAgICBoaXQgPSB0aGlzLmF0dGFja0VuZW15KGNvb3Jkcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAnWW91IGNhbm5vdCBhdHRhY2sgdGhlIHNhbWUgcGxhY2UgdHdpY2UnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhbmRvbUF0dGFja0VuZW15KCk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgY29vcmRzLCBoaXQgfTtcbiAgfTtcblxuICBhdHRhY2tDb3JuZXIgPSAoKSA9PiB7IC8vIHRvZG86IHJlbW92ZVxuICAgIGNvbnN0IGNvb3JkcyA9IFs5LCA5XTtcbiAgICBjb25zdCBoaXQgPSB0aGlzLmF0dGFja0VuZW15KGNvb3Jkcyk7XG4gICAgcmV0dXJuIHsgY29vcmRzLCBoaXQgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHV0ZXJQbGF5ZXI7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkUGxhY2VzID0gW1xuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIF07XG4gICAgdGhpcy5ib2FyZEhpdHMgPSBbXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgXTtcbiAgICB0aGlzLmFsbFNoaXBzSW5mbyA9IFtdO1xuICAgIHRoaXMuc2hpcHNQcm9wcyA9IHRoaXMuc2V0U2hpcHNQcm9wcygpO1xuICAgIHRoaXMuc2VsZWN0ZWRTaGlwc1Byb3BzID0gbnVsbDtcbiAgfVxuXG4gICNwbGFjZUJsYXN0aW5nQXJlYSA9IChjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbiwgaSkgPT4ge1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoaSA9PT0gY29vcmRbMV0gJiYgaSA+IDApIHtcbiAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tjb29yZFswXV1baSAtIDFdID0gLTE7XG4gICAgICAgIGlmIChjb29yZFswXSA+IDApIHtcbiAgICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdIC0gMV1baSAtIDFdID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3JkWzBdIDwgOSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF0gKyAxXVtpIC0gMV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY29vcmRbMF0gPiAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF0gLSAxXVtpXSA9IC0xO1xuICAgICAgfVxuICAgICAgaWYgKGNvb3JkWzBdIDwgOSkge1xuICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdICsgMV1baV0gPSAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPT09IGNvb3JkWzFdICsgbGVuZ3RoIC0gMSAmJiBpIDwgOSkge1xuICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdXVtpICsgMV0gPSAtMTtcbiAgICAgICAgaWYgKGNvb3JkWzBdID4gMCkge1xuICAgICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF0gLSAxXVtpICsgMV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmRbMF0gPCA5KSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tjb29yZFswXSArIDFdW2kgKyAxXSA9IC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAoaSA9PT0gY29vcmRbMF0gJiYgaSA+IDApIHtcbiAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tpIC0gMV1bY29vcmRbMV1dID0gLTE7XG4gICAgICAgIGlmIChjb29yZFsxXSA+IDApIHtcbiAgICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2kgLSAxXVtjb29yZFsxXSAtIDFdID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3JkWzFdIDwgOSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbaSAtIDFdW2Nvb3JkWzFdICsgMV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY29vcmRbMV0gPiAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbaV1bY29vcmRbMV0gLSAxXSA9IC0xO1xuICAgICAgfVxuICAgICAgaWYgKGNvb3JkWzFdIDwgOSkge1xuICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2ldW2Nvb3JkWzFdICsgMV0gPSAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPT09IGNvb3JkWzBdICsgbGVuZ3RoIC0gMSAmJiBpIDwgOSkge1xuICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2kgKyAxXVtjb29yZFsxXV0gPSAtMTtcbiAgICAgICAgaWYgKGNvb3JkWzFdID4gMCkge1xuICAgICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbaSArIDFdW2Nvb3JkWzFdIC0gMV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmRbMV0gPCA5KSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tpICsgMV1bY29vcmRbMV0gKyAxXSA9IC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJlc2V0QWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgdGhpcy5ib2FyZFBsYWNlcyA9IFtcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBdO1xuICAgIHRoaXMuYm9hcmRIaXRzID0gW1xuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIF07XG4gICAgdGhpcy5hbGxTaGlwc0luZm8gPSBbXTtcbiAgfTtcblxuICBwbGFjZVNoaXAgPSAoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgIGNvbnN0IGlkID0gdGhpcy5hbGxTaGlwc0luZm8ubGVuZ3RoICsgMTtcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoY29vcmRbMV0gKyBsZW5ndGggLSAxID4gOSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgcGxhY2Ugc2hpcCBvdXRzaWRlIHRoZSBib2FyZCcpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gY29vcmRbMV07IGkgPCBjb29yZFsxXSArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdXVtpXSAhPT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBwbGFjZSBhIHNoaXAgb3ZlciBhbiBleGlzdGluZyBzaGlwIG9yIGJsYXN0aW5nIGFyZWEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF1dW2ldID0gaWQ7XG4gICAgICAgIHRoaXMuI3BsYWNlQmxhc3RpbmdBcmVhKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uLCBpKTtcblxuICAgICAgICBzaGlwLmNvb3Jkcy5wdXNoKFtjb29yZFswXSwgaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKGNvb3JkWzBdICsgbGVuZ3RoIC0gMSA+IDkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IHBsYWNlIHNoaXAgb3V0c2lkZSB0aGUgYm9hcmQnKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzBdOyBpIDwgY29vcmRbMF0gKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFBsYWNlc1tpXVtjb29yZFsxXV0gIT09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgcGxhY2UgYSBzaGlwIG92ZXIgYW4gZXhpc3Rpbmcgc2hpcCBvciBibGFzdGluZyBhcmVhJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2ldW2Nvb3JkWzFdXSA9IGlkO1xuICAgICAgICB0aGlzLiNwbGFjZUJsYXN0aW5nQXJlYShjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbiwgaSk7XG5cbiAgICAgICAgc2hpcC5jb29yZHMucHVzaChbaSwgY29vcmRbMV1dKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFsbFNoaXBzSW5mby5wdXNoKHsgaWQsIHNoaXAgfSk7XG4gIH07XG5cbiAgcmFuZG9tUGxhY2VBbGxTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBsZW5ndGhzID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ107XG5cbiAgICBjb25zdCByZXRyeSA9IChsZW5ndGgpID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IFtcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICBdO1xuICAgICAgY29uc3QgYmluID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMucGxhY2VTaGlwKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvbltiaW5dKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAnWW91IGNhbm5vdCBwbGFjZSBzaGlwIG91dHNpZGUgdGhlIGJvYXJkJ1xuICAgICAgICB8fCBlcnJvci5tZXNzYWdlID09PSAnWW91IGNhbm5vdCBwbGFjZSBhIHNoaXAgb3ZlciBhbiBleGlzdGluZyBzaGlwIG9yIGJsYXN0aW5nIGFyZWEnKSB7XG4gICAgICAgICAgcmV0cnkobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsZW5ndGhzLmZvckVhY2goKGxlbmd0aCkgPT4gcmV0cnkobGVuZ3RoKSk7XG4gIH07XG5cbiAgc2V0U2hpcHNQcm9wcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFNoaXBzUHJvcHMpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRTaGlwc1Byb3BzKSk7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFNoaXBzUHJvcHM7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllclNoaXBzUHJvcHMnKSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllclNoaXBzUHJvcHMnKSk7XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICB7IGNvb3JkOiBbOSwgOV0sIGxlbmd0aDogMSwgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB9LFxuICAgICAgeyBjb29yZDogWzAsIDldLCBsZW5ndGg6IDEsIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfSxcbiAgICAgIHsgY29vcmQ6IFswLCAwXSwgbGVuZ3RoOiA0LCBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnIH0sXG4gICAgICB7IGNvb3JkOiBbMCwgNV0sIGxlbmd0aDogMywgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB9LFxuICAgICAgeyBjb29yZDogWzMsIDRdLCBsZW5ndGg6IDMsIG9yaWVudGF0aW9uOiAndmVydGljYWwnIH0sXG4gICAgICB7IGNvb3JkOiBbOCwgMF0sIGxlbmd0aDogMiwgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcgfSxcbiAgICAgIHsgY29vcmQ6IFs4LCAyXSwgbGVuZ3RoOiAyLCBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyB9LFxuICAgICAgeyBjb29yZDogWzcsIDddLCBsZW5ndGg6IDIsIG9yaWVudGF0aW9uOiAndmVydGljYWwnIH0sXG4gICAgICB7IGNvb3JkOiBbMywgMF0sIGxlbmd0aDogMSwgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB9LFxuICAgICAgeyBjb29yZDogWzMsIDJdLCBsZW5ndGg6IDEsIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfSxcbiAgICBdO1xuICB9O1xuXG4gIHBsYWNlQWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgdGhpcy5zaGlwc1Byb3BzLmZvckVhY2goKHNoaXBQcm9wcykgPT4ge1xuICAgICAgdGhpcy5wbGFjZVNoaXAoXG4gICAgICAgIHNoaXBQcm9wcy5jb29yZCxcbiAgICAgICAgc2hpcFByb3BzLmxlbmd0aCxcbiAgICAgICAgc2hpcFByb3BzLm9yaWVudGF0aW9uLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgaGl0ID0gdGhpcy5ib2FyZEhpdHNbY29vcmRbMF1dW2Nvb3JkWzFdXTtcbiAgICBpZiAoaGl0ICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgYXR0YWNrIHRoZSBzYW1lIHBsYWNlIHR3aWNlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgaWQgPSB0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdXVtjb29yZFsxXV07XG4gICAgaWYgKGlkID4gMCkge1xuICAgICAgY29uc3Qgc2hpcEluZm8gPSB0aGlzLmFsbFNoaXBzSW5mby5maW5kKChzKSA9PiBzLmlkID09PSBpZCk7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHNoaXBJbmZvLnNoaXAuY29vcmRzLmZpbmRJbmRleChcbiAgICAgICAgKGVsKSA9PiBKU09OLnN0cmluZ2lmeShlbCkgPT09IEpTT04uc3RyaW5naWZ5KGNvb3JkKSxcbiAgICAgICk7XG4gICAgICBzaGlwSW5mby5zaGlwLmhpdChwb3NpdGlvbik7XG4gICAgICB0aGlzLmJvYXJkSGl0c1tjb29yZFswXV1bY29vcmRbMV1dID0gaWQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ib2FyZEhpdHNbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IC0xO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IHN1bmtDb3VudCA9IDA7XG4gICAgdGhpcy5hbGxTaGlwc0luZm8uZm9yRWFjaCgoaW5mbykgPT4ge1xuICAgICAgaWYgKGluZm8uc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBzdW5rQ291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3Vua0NvdW50ID09PSB0aGlzLmFsbFNoaXBzSW5mby5sZW5ndGg7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGVuZW15R2FtZWJvYXJkKSB7XG4gICAgdGhpcy5lbmVteUdhbWVib2FyZCA9IGVuZW15R2FtZWJvYXJkO1xuICB9XG5cbiAgYXR0YWNrRW5lbXkgPSAoY29vcmQpID0+IHRoaXMuZW5lbXlHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcihjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIHRoaXMuY29vcmQgPSBjb29yZDtcbiAgICB0aGlzLmNvb3JkcyA9IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5jb25zdHJ1Y3Rvci5zZXRMZW5ndGgobGVuZ3RoKTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgdGhpcy5wb3NpdGlvbnMgPSBBcnJheSh0aGlzLmxlbmd0aCkuZmlsbCgwKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRMZW5ndGggPSAobGVuZ3RoKSA9PiB7XG4gICAgaWYgKGxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93IEVycm9yKCdTaGlwIGxlbmd0aCBtdXN0IGJlID4gMCcpO1xuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9O1xuXG4gIGhpdCA9IChwb3MpID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uc1twb3NdID0gMTtcbiAgfTtcblxuICBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9ucy5pbmNsdWRlcygwKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9mYWN0b3JpZXMvZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9mYWN0b3JpZXMvcGxheWVyJztcbmltcG9ydCBDb21wdXRlciBmcm9tICcuL2ZhY3Rvcmllcy9jb21wdXRlci1wbGF5ZXInO1xuaW1wb3J0IHZpZXdzIGZyb20gJy4vdmlld3MnO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQgPSBudWxsO1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQgPSBudWxsO1xuICAgIHRoaXMucGxheWVyID0gbnVsbDtcbiAgICB0aGlzLmNvbXB1dGVyID0gbnVsbDtcbiAgfVxuXG4gIHBsYWNlQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgICB0aGlzLmNvbXB1dGVyR2FtZWJvYXJkLnJhbmRvbVBsYWNlQWxsU2hpcHMoKTtcbiAgfTtcblxuICBwbGFjZVBsYXllclNoaXBzID0gKCkgPT4ge1xuICAgIHRoaXMucGxheWVyR2FtZWJvYXJkLnNldFNoaXBzUHJvcHMoKTtcbiAgICB0aGlzLnBsYXllckdhbWVib2FyZC5wbGFjZUFsbFNoaXBzKCk7XG4gIH07XG5cbiAgc2V0VXBOZXdHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMucGxheWVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQpO1xuICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIodGhpcy5wbGF5ZXJHYW1lYm9hcmQpO1xuXG4gICAgdGhpcy5wbGFjZVBsYXllclNoaXBzKCk7XG4gICAgdGhpcy5wbGFjZUNvbXB1dGVyU2hpcHMoKTtcblxuICAgIHZpZXdzLmRpc3BsYXlCb2FyZHMoKTtcbiAgICBjb25zdCBwbGF5ZXJTaGlwc0Nvb3JkcyA9IHRoaXMucGxheWVyR2FtZWJvYXJkLmFsbFNoaXBzSW5mby5tYXAoXG4gICAgICAoaW5mbykgPT4gaW5mby5zaGlwLmNvb3JkcyxcbiAgICApO1xuICAgIHZpZXdzLmRpc3BsYXlTaGlwcyhwbGF5ZXJTaGlwc0Nvb3JkcywgJ3BsYXllcicpO1xuICAgIHZpZXdzLmxpc3RlbkZvckF0dGFja3ModGhpcyk7XG4gICAgdmlld3MubGlzdGVuRm9yUmFuZG9tUGxhY2VTaGlwcyh0aGlzKTtcblxuICAgIHZpZXdzLmluaXRpYWxNZXNzYWdlKCk7XG4gIH07XG5cbiAgaXNHYW1lT3ZlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5jb21wdXRlckdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgZ2FtZW92ZXI6IHRydWUsIHdpbm5lcjogJ3BsYXllcicgfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGF5ZXJHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IGdhbWVvdmVyOiB0cnVlLCB3aW5uZXI6ICdjb21wdXRlcicgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnYW1lb3ZlcjogZmFsc2UsIHdpbm5lcjogbnVsbCB9O1xuICB9O1xuXG4gIHJ1bkdhbWVMb29wID0gKHBsYXllckNvb3JkcykgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyVHVybiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gdGhpcy5jb21wdXRlci5yYW5kb21BdHRhY2tFbmVteSgpO1xuICAgICAgaWYgKGNvbXB1dGVyQXR0YWNrLmhpdCkge1xuICAgICAgICB2aWV3cy5oaXRTcXVhcmUoY29tcHV0ZXJBdHRhY2suY29vcmRzLCAncGxheWVyJywgdHJ1ZSk7XG4gICAgICAgIHZpZXdzLmRpc3BsYXlTY29yZSh0aGlzLnBsYXllckdhbWVib2FyZCwgJ3BsYXllcicpO1xuICAgICAgICB2aWV3cy5kaXNhYmxlQ2xpY2tzKCk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pc0dhbWVPdmVyKCk7XG4gICAgICAgIGlmIChyZXN1bHQuZ2FtZW92ZXIgJiYgcmVzdWx0Lndpbm5lciA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgIHZpZXdzLnNob3dHYW1lb3Zlck1lc3NhZ2UocmVzdWx0Lndpbm5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb21wdXRlclR1cm4oKTtcbiAgICAgICAgICAgIHZpZXdzLmVuYWJsZUNsaWNrcygpO1xuICAgICAgICAgIH0sIDgwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmlld3MuaGl0U3F1YXJlKGNvbXB1dGVyQXR0YWNrLmNvb3JkcywgJ3BsYXllcicsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxheWVyVHVybiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBsYXllckF0dGFjayA9IHRoaXMucGxheWVyLmF0dGFja0VuZW15KHBsYXllckNvb3Jkcyk7XG4gICAgICBpZiAocGxheWVyQXR0YWNrKSB7XG4gICAgICAgIHZpZXdzLmhpdFNxdWFyZShwbGF5ZXJDb29yZHMsICdjb21wdXRlcicsIHRydWUpO1xuICAgICAgICB2aWV3cy5kaXNwbGF5U2NvcmUodGhpcy5wbGF5ZXJHYW1lYm9hcmQsICdwbGF5ZXInKTtcbiAgICAgICAgdmlld3MuZGlzcGxheVNjb3JlKHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQsICdjb21wdXRlcicpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaXNHYW1lT3ZlcigpO1xuICAgICAgICBpZiAocmVzdWx0LmdhbWVvdmVyICYmIHJlc3VsdC53aW5uZXIgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgdmlld3Muc2hvd0dhbWVvdmVyTWVzc2FnZShyZXN1bHQud2lubmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld3MuaGl0U3F1YXJlKHBsYXllckNvb3JkcywgJ2NvbXB1dGVyJywgZmFsc2UpO1xuICAgICAgICB2aWV3cy5kaXNhYmxlQ2xpY2tzKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbXB1dGVyVHVybigpO1xuICAgICAgICAgIHZpZXdzLmVuYWJsZUNsaWNrcygpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwbGF5ZXJUdXJuKCk7XG5cbiAgICB2aWV3cy5kaXNwbGF5U2NvcmUodGhpcy5wbGF5ZXJHYW1lYm9hcmQsICdwbGF5ZXInKTtcbiAgICB2aWV3cy5kaXNwbGF5U2NvcmUodGhpcy5jb21wdXRlckdhbWVib2FyZCwgJ2NvbXB1dGVyJyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjb25zdCB2aWV3cyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgICBnYW1lYm9hcmQuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXJ9LWdhbWVib2FyZGApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZS1zcXVhcmUnKTtcbiAgICAgIGlmIChwbGF5ZXIgPT09ICdwbGF5ZXInKSBzcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxheWVyLXNxdWFyZScpO1xuICAgICAgaWYgKGkgPj0gOTApIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUtYm90dG9tJyk7XG4gICAgICBpZiAoKGkgLSA5KSAlIDEwID09PSAwKSBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlLXJpZ2h0Jyk7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdjb29yZHMnLCBTdHJpbmcoaSkucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5Qm9hcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzLWNvbnRhaW5lcicpO1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHBsYXllckdhbWVCb2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBsYXllckdhbWVCb2FyZE5hbWUudGV4dENvbnRlbnQgPSAnWW91ciBib2FyZCc7XG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gY3JlYXRlQm9hcmQoJ3BsYXllcicpO1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJHYW1lQm9hcmROYW1lKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyR2FtZWJvYXJkKTtcblxuICAgIGNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29tcHV0ZXJHYW1lQm9hcmROYW1lLnRleHRDb250ZW50ID0gXCJDb21wdXRlcidzIGJvYXJkXCI7XG4gICAgY29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBjcmVhdGVCb2FyZCgnY29tcHV0ZXInKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcHV0ZXJHYW1lQm9hcmROYW1lKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcHV0ZXJHYW1lQm9hcmQpO1xuXG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmFuZG9tQnRuLmNsYXNzTGlzdC5hZGQoJ3JhbmRvbS1idG4nKTtcbiAgICByYW5kb21CdG4udGV4dENvbnRlbnQgPSAnUmFuZG9taXplIHNoaXBzJztcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNjb3JlJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhbmRvbUJ0bik7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVNoaXBzID0gKGFsbFNoaXBzQ29vcmRzLCBwbGF5ZXIpID0+IHtcbiAgICBhbGxTaGlwc0Nvb3Jkcy5mb3JFYWNoKChzaGlwQ29vcmRzKSA9PiB7XG4gICAgICBzaGlwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkO1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJ9LXNxdWFyZVtjb29yZHM9XCIke3h9JHt5fVwiXWApO1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcHMgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgYWxsU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3BsYXllcn0tc3F1YXJlYCk7XG4gICAgYWxsU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbGlzdGVuRm9yUmFuZG9tUGxhY2VTaGlwcyA9IChnYW1lKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1idG4nKTtcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnYW1lLnBsYXllckdhbWVib2FyZC5yZXNldEFsbFNoaXBzKCk7XG4gICAgICBnYW1lLnBsYXllckdhbWVib2FyZC5yYW5kb21QbGFjZUFsbFNoaXBzKCk7XG4gICAgICBjb25zdCBhbGxTaGlwc0Nvb3JkcyA9IGdhbWUucGxheWVyR2FtZWJvYXJkLmFsbFNoaXBzSW5mby5tYXAoXG4gICAgICAgIChpbmZvKSA9PiBpbmZvLnNoaXAuY29vcmRzLFxuICAgICAgKTtcbiAgICAgIHJlbW92ZVNoaXBzKCdwbGF5ZXInKTtcbiAgICAgIGRpc3BsYXlTaGlwcyhhbGxTaGlwc0Nvb3JkcywgJ3BsYXllcicpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVDbGlja3MgPSAoKSA9PiB7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKCdjb3ZlcicpO1xuXG4gICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItZ2FtZWJvYXJkJyk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoY292ZXIpO1xuICB9O1xuXG4gIGNvbnN0IGVuYWJsZUNsaWNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWdhbWVib2FyZCcpO1xuXG4gICAgY29tcHV0ZXJHYW1lYm9hcmQucmVtb3ZlQ2hpbGQoY292ZXIpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxNZXNzYWdlID0gKCkgPT4ge1xuICAgIGRpc2FibGVDbGlja3MoKTtcbiAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVzc2FnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWNvbnRhaW5lcicpO1xuICAgIG1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbC1tZXNzYWdlJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaWNvbmlmeScpO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCAnbWRpLWFycm93LWxlZnQnKTtcbiAgICBtZXNzYWdlLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIG1lc3NhZ2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyBQbGFjZSB5b3VyIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQnKSk7XG4gICAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnRuJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUnO1xuICAgIG1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuICAgIGNvdmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgICAgZW5hYmxlQ2xpY2tzKCk7XG4gICAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWdhbWVib2FyZCcpO1xuICAgICAgY29uc3QgcGxheWVyQ292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBsYXllckNvdmVyLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1jb3ZlcicpO1xuICAgICAgcGxheWVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKHBsYXllckNvdmVyKTtcblxuICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1zY29yZScpO1xuICAgICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbS1idG4nKTtcbiAgICAgIGJ0bkNvbnRhaW5lci5yZW1vdmVDaGlsZChyYW5kb21CdG4pO1xuICAgIH07XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlTY29yZSA9IChnYW1lYm9hcmQsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NvcmUuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXJ9LXNjb3JlYCk7XG4gICAgc2NvcmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcblxuICAgIGNvbnN0IHNoaXBzSW5mbyA9IGdhbWVib2FyZC5hbGxTaGlwc0luZm8uc29ydChcbiAgICAgIChhLCBiKSA9PiBiLnNoaXAubGVuZ3RoIC0gYS5zaGlwLmxlbmd0aCxcbiAgICApO1xuXG4gICAgc2hpcHNJbmZvLmZvckVhY2goKChpbmZvKSA9PiB7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLXNoaXAnKTtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChgc2NvcmUtc2hpcC0ke2luZm8uc2hpcC5sZW5ndGh9YCk7XG4gICAgICBpZiAoaW5mby5zaGlwLmlzU3VuaygpKSBzaGlwLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLXNoaXAtc3VuaycpO1xuICAgICAgc2NvcmUuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgfSkpO1xuXG4gICAgY29uc3Qgb2xkU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJ9LXNjb3JlYCk7XG4gICAgY29uc3Qgc2NvcmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtY29udGFpbmVyJyk7XG4gICAgc2NvcmVDb250YWluZXIucmVwbGFjZUNoaWxkKHNjb3JlLCBvbGRTY29yZSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNjb3JlQ29udGFpbmVyKTtcbiAgfTtcblxuICBjb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0dhbWVvdmVyTWVzc2FnZSA9ICh3aW5uZXIpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVzc2FnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gd2lubmVyID09PSAncGxheWVyJyA/ICdZb3Ugd2luIScgOiAnWW91IGxvc3QhJztcbiAgICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobWVzc2FnZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ05ldyBnYW1lJztcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzLWNvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICB9O1xuXG4gIGNvbnN0IGxpc3RlbkZvckF0dGFja3MgPSAoZ2FtZSkgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGlja2FibGUtc3F1YXJlJyk7XG5cbiAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXJBdHRhY2spO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2thYmxlLXNxdWFyZScpO1xuXG4gICAgICBjb25zdCBbeCwgeV0gPSBbXG4gICAgICAgIE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2Nvb3JkcycpWzBdKSxcbiAgICAgICAgTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY29vcmRzJylbMV0pLFxuICAgICAgXTtcblxuICAgICAgZ2FtZS5ydW5HYW1lTG9vcChbeCwgeV0pO1xuICAgIH07XG5cbiAgICBjb21wdXRlclNxdWFyZXMuZm9yRWFjaCgoc3FyKSA9PiB7XG4gICAgICBzcXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXJBdHRhY2spO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhpdFNxdWFyZSA9IChjb29yZHMsIG9wcG9uZW50LCBoaXQpID0+IHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke29wcG9uZW50fS1nYW1lYm9hcmQgW2Nvb3Jkcz1cIiR7Y29vcmRzWzBdfSR7Y29vcmRzWzFdfVwiXWAsXG4gICAgKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0LXNoaXAnKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2ljb25pZnknKTtcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCAnbWRpLWNsb3NlJyk7XG4gICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzLXNoaXAnKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2ljb25pZnknKTtcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCAnbWRpLWNpcmNsZScpO1xuICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGxpc3RlbkZvclJhbmRvbVBsYWNlU2hpcHMsXG4gICAgZGlzYWJsZUNsaWNrcyxcbiAgICBlbmFibGVDbGlja3MsXG4gICAgaW5pdGlhbE1lc3NhZ2UsXG4gICAgZGlzcGxheUJvYXJkcyxcbiAgICBkaXNwbGF5U2hpcHMsXG4gICAgZGlzcGxheVNjb3JlLFxuICAgIHNob3dHYW1lb3Zlck1lc3NhZ2UsXG4gICAgbGlzdGVuRm9yQXR0YWNrcyxcbiAgICBoaXRTcXVhcmUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3cztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxuICBwYWRkaW5nOiAxMHB4IDIzcHggMCAycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjpkZWZhdWx0O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgcm93LWdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmdhbWVib2FyZC1uYW1lIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAyMzcsIDIzNyk7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNxdWFyZS1ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcXG59XFxuXFxuLnNxdWFyZS1yaWdodCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XFxufVxcblxcbi5jbGlja2FibGUtc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDI1NSwgMjAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYwLCA2MCwgNjApO1xcbn1cXG5cXG4uaGl0LXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzIsIDcyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDcyLCA3Mik7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMzAwbXM7XFxufVxcblxcbi5taXNzLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMjIxLCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MiwgMjIxLCAyNTUpO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IC41ZW07XFxuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAzMDBtcztcXG59XFxuXFxuLmNvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi5wbGF5ZXItY292ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MzUpO1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbi10b3A6IDI2cHg7XFxufVxcblxcbi5tZXNzYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2OCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzNnB4O1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG59XFxuXFxuLmluaXRpYWwtbWVzc2FnZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxufVxcblxcbi5yYW5kb20tYnRuIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTgsIDk4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zY29yZS1jb250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB3aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2NvcmUge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnNjb3JlLXNoaXAge1xcbiAgLS11bml0OiAxMHB4O1xcbiAgd2lkdGg6IHZhcigtLXVuaXQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uc2NvcmUtc2hpcC00IHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS11bml0KSAqIDQpXFxufVxcblxcbi5zY29yZS1zaGlwLTMge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXVuaXQpICogMylcXG59XFxuXFxuLnNjb3JlLXNoaXAtMiB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdW5pdCkgKiAyKVxcbn1cXG5cXG4uc2NvcmUtc2hpcC0xIHtcXG4gIGhlaWdodDogdmFyKC0tdW5pdClcXG59XFxuXFxuLnNjb3JlLXNoaXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixxR0FBcUc7QUFDdkc7O0FBRUE7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aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXG4gIHBhZGRpbmc6IDEwcHggMjNweCAwIDJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOmRlZmF1bHQ7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdhbWVib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICByb3ctZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLW5hbWUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIGF1dG8pO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzNywgMjM3KTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3F1YXJlLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xcbn1cXG5cXG4uc3F1YXJlLXJpZ2h0IHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcXG59XFxuXFxuLmNsaWNrYWJsZS1zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMjU1LCAyMDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjAsIDYwLCA2MCk7XFxufVxcblxcbi5oaXQtc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3MiwgNzIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgNzIsIDcyKTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAzMDBtcztcXG59XFxuXFxuLm1pc3Mtc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAyMjEsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgyLCAyMjEsIDI1NSk7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogLjVlbTtcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDMwMG1zO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLnBsYXllci1jb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYzNSk7XFxuICB3aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjZweDtcXG59XFxuXFxuLm1lc3NhZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODY4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDM2cHg7XFxuICBmb250LXNpemU6IDEuNmVtO1xcbn1cXG5cXG4uaW5pdGlhbC1tZXNzYWdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDIzMiwgMjMyKTtcXG59XFxuXFxuLnJhbmRvbS1idG4ge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5OCwgOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNjb3JlLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zY29yZSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4uc2NvcmUtc2hpcCB7XFxuICAtLXVuaXQ6IDEwcHg7XFxuICB3aWR0aDogdmFyKC0tdW5pdCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5zY29yZS1zaGlwLTQge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXVuaXQpICogNClcXG59XFxuXFxuLnNjb3JlLXNoaXAtMyB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdW5pdCkgKiAzKVxcbn1cXG5cXG4uc2NvcmUtc2hpcC0yIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS11bml0KSAqIDIpXFxufVxcblxcbi5zY29yZS1zaGlwLTEge1xcbiAgaGVpZ2h0OiB2YXIoLS11bml0KVxcbn1cXG5cXG4uc2NvcmUtc2hpcC1zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgZ2FtZS5zZXRVcE5ld0dhbWUoKTtcbn07XG5cbm1haW4oKTtcbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJDb21wdXRlclBsYXllciIsImNvb3JkcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhpdCIsImF0dGFja0VuZW15IiwiZXJyb3IiLCJtZXNzYWdlIiwicmFuZG9tQXR0YWNrRW5lbXkiLCJTaGlwIiwiR2FtZWJvYXJkIiwiY29vcmQiLCJsZW5ndGgiLCJvcmllbnRhdGlvbiIsImkiLCJib2FyZFBsYWNlcyIsImJvYXJkSGl0cyIsImFsbFNoaXBzSW5mbyIsInNoaXAiLCJpZCIsIkVycm9yIiwicHVzaCIsImxlbmd0aHMiLCJyZXRyeSIsImJpbiIsInBsYWNlU2hpcCIsImZvckVhY2giLCJzZWxlY3RlZFNoaXBzUHJvcHMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImdldEl0ZW0iLCJwYXJzZSIsInNoaXBzUHJvcHMiLCJzaGlwUHJvcHMiLCJzaGlwSW5mbyIsImZpbmQiLCJzIiwicG9zaXRpb24iLCJmaW5kSW5kZXgiLCJlbCIsInN1bmtDb3VudCIsImluZm8iLCJpc1N1bmsiLCJzZXRTaGlwc1Byb3BzIiwiZW5lbXlHYW1lYm9hcmQiLCJyZWNlaXZlQXR0YWNrIiwicG9zIiwicG9zaXRpb25zIiwiaW5jbHVkZXMiLCJjb25zdHJ1Y3RvciIsInNldExlbmd0aCIsIkFycmF5IiwiZmlsbCIsIkNvbXB1dGVyIiwidmlld3MiLCJHYW1lIiwiY29tcHV0ZXJHYW1lYm9hcmQiLCJyYW5kb21QbGFjZUFsbFNoaXBzIiwicGxheWVyR2FtZWJvYXJkIiwicGxhY2VBbGxTaGlwcyIsInBsYXllciIsImNvbXB1dGVyIiwicGxhY2VQbGF5ZXJTaGlwcyIsInBsYWNlQ29tcHV0ZXJTaGlwcyIsImRpc3BsYXlCb2FyZHMiLCJwbGF5ZXJTaGlwc0Nvb3JkcyIsIm1hcCIsImRpc3BsYXlTaGlwcyIsImxpc3RlbkZvckF0dGFja3MiLCJsaXN0ZW5Gb3JSYW5kb21QbGFjZVNoaXBzIiwiaW5pdGlhbE1lc3NhZ2UiLCJhbGxTaGlwc1N1bmsiLCJnYW1lb3ZlciIsIndpbm5lciIsInBsYXllckNvb3JkcyIsImNvbXB1dGVyVHVybiIsImNvbXB1dGVyQXR0YWNrIiwiaGl0U3F1YXJlIiwiZGlzcGxheVNjb3JlIiwiZGlzYWJsZUNsaWNrcyIsInJlc3VsdCIsImlzR2FtZU92ZXIiLCJzaG93R2FtZW92ZXJNZXNzYWdlIiwic2V0VGltZW91dCIsImVuYWJsZUNsaWNrcyIsInBsYXllclR1cm4iLCJwbGF5ZXJBdHRhY2siLCJjcmVhdGVCb2FyZCIsImdhbWVib2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNxdWFyZSIsInNldEF0dHJpYnV0ZSIsIlN0cmluZyIsInBhZFN0YXJ0IiwiYXBwZW5kQ2hpbGQiLCJnYW1lYm9hcmRDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwicGxheWVyR2FtZUJvYXJkTmFtZSIsInRleHRDb250ZW50IiwiY29tcHV0ZXJHYW1lQm9hcmROYW1lIiwiY29tcHV0ZXJHYW1lQm9hcmQiLCJyYW5kb21CdG4iLCJjb250YWluZXIiLCJhbGxTaGlwc0Nvb3JkcyIsInNoaXBDb29yZHMiLCJ4IiwieSIsInJlbW92ZVNoaXBzIiwiYWxsU3F1YXJlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmUiLCJnYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2V0QWxsU2hpcHMiLCJjb3ZlciIsInJlbW92ZUNoaWxkIiwibWVzc2FnZUNvbnRhaW5lciIsInNwYW4iLCJjcmVhdGVUZXh0Tm9kZSIsImJ0biIsInN0YXJ0R2FtZSIsInBsYXllckNvdmVyIiwiYnRuQ29udGFpbmVyIiwic2NvcmUiLCJzaGlwc0luZm8iLCJzb3J0IiwiYSIsImIiLCJvbGRTY29yZSIsInNjb3JlQ29udGFpbmVyIiwicmVwbGFjZUNoaWxkIiwiY29udGVudCIsInJlc3RhcnRHYW1lIiwibG9jYXRpb24iLCJyZWxvYWQiLCJtb2RhbCIsImNvbXB1dGVyU3F1YXJlcyIsImUiLCJ0YXJnZXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTnVtYmVyIiwiZ2V0QXR0cmlidXRlIiwicnVuR2FtZUxvb3AiLCJzcXIiLCJvcHBvbmVudCIsIm1haW4iLCJzZXRVcE5ld0dhbWUiXSwic291cmNlUm9vdCI6IiJ9