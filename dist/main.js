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

// board object for placing ships
// board object for placing hits
// function for placing ships
// function for placing hits


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

  _defineProperty(this, "placeShip", function (coord, length, orientation) {
    var ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
    var id = _this.allShipsInfo.length + 1;
    var coords = [];

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

        coords.push([coord[0], i]);
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

        coords.push([_i, coord[1]]);
      }
    }

    _this.allShipsInfo.push({
      id: id,
      ship: ship,
      coords: coords
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

      var position = shipInfo.coords.findIndex(function (el) {
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

// shipLength, hit(), isSunk()
var Ship = /*#__PURE__*/_createClass(function Ship(length) {
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

  this.length = this.constructor.setLength(length);
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

  _defineProperty(this, "placePlayerShips", function () {
    _this.playerShipsProps.forEach(function (shipProps) {
      _this.playerGameboard.placeShip(shipProps.coord, shipProps.length, shipProps.orientation);
    });
  });

  _defineProperty(this, "preplaceComputerShips", function () {
    _this.computerGameboard.placeShip([0, 5], 3, 'horizontal');

    _this.computerGameboard.placeShip([3, 4], 3, 'vertical');

    _this.computerGameboard.placeShip([8, 0], 2, 'vertical');

    _this.computerGameboard.placeShip([8, 2], 2, 'vertical');

    _this.computerGameboard.placeShip([7, 7], 2, 'vertical');

    _this.computerGameboard.placeShip([0, 9], 1, 'horizontal');

    _this.computerGameboard.placeShip([3, 0], 1, 'horizontal');

    _this.computerGameboard.placeShip([0, 0], 4, 'horizontal');

    _this.computerGameboard.placeShip([3, 2], 1, 'horizontal');

    _this.computerGameboard.placeShip([9, 9], 1, 'horizontal');
  });

  _defineProperty(this, "randomPlaceShips", function () {
    var lengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    var orientation = ['horizontal', 'vertical'];

    var retry = function retry(length) {
      var coords = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      var bin = Math.floor(Math.random() * 2);

      try {
        // this.computerGameboard.placeShip(coords, length, orientation[bin]);
        _this.playerGameboard.placeShip(coords, length, orientation[bin]);
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

  _defineProperty(this, "setUpNewGame", function () {
    _this.playerGameboard = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    _this.computerGameboard = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    _this.player = new _factories_player__WEBPACK_IMPORTED_MODULE_1__["default"](_this.computerGameboard);
    _this.computer = new _factories_computer_player__WEBPACK_IMPORTED_MODULE_2__["default"](_this.playerGameboard);

    _this.placePlayerShips();

    _this.preplaceComputerShips(); // todo: implement player gui and auto placement for computer
    // this.randomPlaceShips();


    _views__WEBPACK_IMPORTED_MODULE_3__["default"].displayBoards();

    var playerShipsCoords = _this.playerGameboard.allShipsInfo.map(function (info) {
      return info.coords;
    });

    _views__WEBPACK_IMPORTED_MODULE_3__["default"].displayShips(playerShipsCoords, 'player');
    _views__WEBPACK_IMPORTED_MODULE_3__["default"].listenForAttacks(_this);
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
  this.playerShipsProps = [{
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
    playerGameboard.classList.add('player-gameboard');
    gameboardContainer.appendChild(playerGameBoardName);
    gameboardContainer.appendChild(playerGameboard);
    var computerGameBoardName = document.createElement('h2');
    computerGameBoardName.textContent = "Computer's board";
    var computerGameBoard = createBoard('computer');
    computerGameBoard.classList.add('computer-gameboard');
    gameboardContainer.appendChild(computerGameBoardName);
    gameboardContainer.appendChild(computerGameBoard);
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

  var startNewGame = function startNewGame() {
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
    btn.textContent = 'Start new game';
    btn.addEventListener('click', startNewGame);
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

  return {
    displayBoards: displayBoards,
    displayShips: displayShips,
    displayScore: displayScore,
    showGameoverMessage: showGameoverMessage,
    listenForAttacks: listenForAttacks,
    hitSquare: hitSquare,
    disableClicks: disableClicks,
    enableClicks: enableClicks
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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\nbody {\n  width: 100vw;\n}\n\n.header {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  width: 900px;\n  margin: auto;\n}\n\n.header h1 {\n  font-size: 1.8em;\n  color: white;\n  background-color: rgb(60, 60, 60);\n  padding: 10px 23px 0 2px;\n  font-weight: bold;\n  cursor:default;\n}\n\n.content {\n  width: 900px;\n  margin: auto;\n  position: relative;\n}\n\n.gameboards-container {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-rows: auto auto;\n  row-gap: 10px;\n  justify-content: space-between;\n}\n\n.gameboard-name {\n  align-self: center;\n}\n\n.gameboard {\n  background-color: red;\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, auto);\n}\n\n.square {\n  background-color: rgb(237, 237, 237);\n  width: 40px;\n  height: 40px;\n  border-left: 1px solid rgb(173, 173, 173);\n  border-top: 1px solid rgb(173, 173, 173);\n  color: white;\n}\n\n.square-bottom {\n  border-bottom: 1px solid rgb(173, 173, 173);\n}\n\n.square-right {\n  border-right: 1px solid rgb(173, 173, 173);\n}\n\n.clickable-square:hover {\n  background-color: rgb(201, 255, 201);\n  cursor: pointer;\n}\n\n.ship {\n  background-color: rgb(60, 60, 60);\n  border: 1px solid rgb(60, 60, 60);\n  cursor: pointer;\n}\n\n.hit-ship {\n  background-color: rgb(255, 72, 72);\n  border: 1px solid rgb(255, 72, 72);\n  color: rgb(255, 255, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3em;\n  transition: ease-out 300ms;\n}\n\n.miss-ship {\n  background-color: rgb(182, 221, 255);\n  border: 1px solid rgb(182, 221, 255);\n  color: rgb(255, 255, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .5em;\n  transition: ease-out 300ms;\n}\n\n.cover {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 400px;\n  height: 400px;\n}\n\n.modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.635);\n  width: 900px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 20px;\n  margin-top: 26px;\n}\n\n.message-container {\n  width: 500px;\n  height: 100px;\n  background-color: rgba(255, 255, 255, 0.868);\n  border-radius: 5px;\n  text-align: center;\n  padding: 36px;\n  font-size: 1.6em;\n}\n\n.btn {\n  border-width: 0;\n  background-color: white;\n  padding: 15px 30px;\n  font-size: 1.2em;\n  border-radius: 25px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: rgb(232, 232, 232);\n}\n\n.score-container {\n  margin: auto;\n  padding-top: 10px;\n  width: 900px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.score {\n  width: 400px;\n  height: fit-content;\n  display: flex;\n  gap: 4px;\n}\n\n.score-ship {\n  --unit: 10px;\n  width: var(--unit);\n  background-color: rgb(194, 194, 194);\n  border-radius: 2px;\n}\n\n.score-ship-4 {\n  height: calc(var(--unit) * 4)\n}\n\n.score-ship-3 {\n  height: calc(var(--unit) * 3)\n}\n\n.score-ship-2 {\n  height: calc(var(--unit) * 2)\n}\n\n.score-ship-1 {\n  height: var(--unit)\n}\n\n.score-ship-sunk {\n  background-color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,sBAAsB;EACtB,qGAAqG;AACvG;;AAEA;EACE,2BAA2B;EAC3B,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,iCAAiC;EACjC,wBAAwB;EACxB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,oCAAoC;EACpC,WAAW;EACX,YAAY;EACZ,yCAAyC;EACzC,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,kCAAkC;EAClC,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;EACpC,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,0CAA0C;EAC1C,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,4CAA4C;EAC5C,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE;AACF;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["html {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\nbody {\n  width: 100vw;\n}\n\n.header {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  width: 900px;\n  margin: auto;\n}\n\n.header h1 {\n  font-size: 1.8em;\n  color: white;\n  background-color: rgb(60, 60, 60);\n  padding: 10px 23px 0 2px;\n  font-weight: bold;\n  cursor:default;\n}\n\n.content {\n  width: 900px;\n  margin: auto;\n  position: relative;\n}\n\n.gameboards-container {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-rows: auto auto;\n  row-gap: 10px;\n  justify-content: space-between;\n}\n\n.gameboard-name {\n  align-self: center;\n}\n\n.gameboard {\n  background-color: red;\n  width: 400px;\n  height: 400px;\n  display: grid;\n  grid-template-columns: repeat(10, auto);\n}\n\n.square {\n  background-color: rgb(237, 237, 237);\n  width: 40px;\n  height: 40px;\n  border-left: 1px solid rgb(173, 173, 173);\n  border-top: 1px solid rgb(173, 173, 173);\n  color: white;\n}\n\n.square-bottom {\n  border-bottom: 1px solid rgb(173, 173, 173);\n}\n\n.square-right {\n  border-right: 1px solid rgb(173, 173, 173);\n}\n\n.clickable-square:hover {\n  background-color: rgb(201, 255, 201);\n  cursor: pointer;\n}\n\n.ship {\n  background-color: rgb(60, 60, 60);\n  border: 1px solid rgb(60, 60, 60);\n  cursor: pointer;\n}\n\n.hit-ship {\n  background-color: rgb(255, 72, 72);\n  border: 1px solid rgb(255, 72, 72);\n  color: rgb(255, 255, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3em;\n  transition: ease-out 300ms;\n}\n\n.miss-ship {\n  background-color: rgb(182, 221, 255);\n  border: 1px solid rgb(182, 221, 255);\n  color: rgb(255, 255, 255);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .5em;\n  transition: ease-out 300ms;\n}\n\n.cover {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 400px;\n  height: 400px;\n}\n\n.modal {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.635);\n  width: 900px;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 20px;\n  margin-top: 26px;\n}\n\n.message-container {\n  width: 500px;\n  height: 100px;\n  background-color: rgba(255, 255, 255, 0.868);\n  border-radius: 5px;\n  text-align: center;\n  padding: 36px;\n  font-size: 1.6em;\n}\n\n.btn {\n  border-width: 0;\n  background-color: white;\n  padding: 15px 30px;\n  font-size: 1.2em;\n  border-radius: 25px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: rgb(232, 232, 232);\n}\n\n.score-container {\n  margin: auto;\n  padding-top: 10px;\n  width: 900px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.score {\n  width: 400px;\n  height: fit-content;\n  display: flex;\n  gap: 4px;\n}\n\n.score-ship {\n  --unit: 10px;\n  width: var(--unit);\n  background-color: rgb(194, 194, 194);\n  border-radius: 2px;\n}\n\n.score-ship-4 {\n  height: calc(var(--unit) * 4)\n}\n\n.score-ship-3 {\n  height: calc(var(--unit) * 3)\n}\n\n.score-ship-2 {\n  height: calc(var(--unit) * 2)\n}\n\n.score-ship-1 {\n  height: var(--unit)\n}\n\n.score-ship-sunk {\n  background-color: red;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUM7Ozs7Ozs7Ozs7Ozs7Ozs7d0VBQ2dCLFlBQU07TUFDeEIsSUFBTUMsTUFBTSxHQUFHLENBQ2JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBM0IsQ0FEYSxFQUViRixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBRmEsQ0FBZjtNQUlBLElBQUlDLEdBQUo7O01BQ0EsSUFBSTtRQUNGQSxHQUFHLEdBQUcsTUFBS0MsV0FBTCxDQUFpQkwsTUFBakIsQ0FBTjtNQUNELENBRkQsQ0FFRSxPQUFPTSxLQUFQLEVBQWM7UUFDZCxJQUFJQSxLQUFLLENBQUNDLE9BQU4sS0FBa0Isd0NBQXRCLEVBQWdFO1VBQzlELE9BQU8sTUFBS0MsaUJBQUwsRUFBUDtRQUNEOztRQUNELE1BQU1GLEtBQU47TUFDRDs7TUFDRCxPQUFPO1FBQUVOLE1BQU0sRUFBTkEsTUFBRjtRQUFVSSxHQUFHLEVBQUhBO01BQVYsQ0FBUDtJQUNEOzttRUFFYyxZQUFNO01BQUU7TUFDckIsSUFBTUosTUFBTSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBZjs7TUFDQSxJQUFNSSxHQUFHLEdBQUcsTUFBS0MsV0FBTCxDQUFpQkwsTUFBakIsQ0FBWjs7TUFDQSxPQUFPO1FBQUVBLE1BQU0sRUFBTkEsTUFBRjtRQUFVSSxHQUFHLEVBQUhBO01BQVYsQ0FBUDtJQUNEOzs7Ozs7RUF0QjBCTjs7QUF5QjdCLGlFQUFlQyxjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztJQUVNVyxzQ0FDSixxQkFBYztFQUFBOztFQUFBOztFQUFBO0lBQUE7SUFBQSxPQTRCTyxlQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLFdBQWhCLEVBQTZCQyxDQUE3QixFQUFtQztNQUN0RCxJQUFJRCxXQUFXLEtBQUssWUFBcEIsRUFBa0M7UUFDaEMsSUFBSUMsQ0FBQyxLQUFLSCxLQUFLLENBQUMsQ0FBRCxDQUFYLElBQWtCRyxDQUFDLEdBQUcsQ0FBMUIsRUFBNkI7VUFDM0IsS0FBSSxDQUFDQyxXQUFMLENBQWlCSixLQUFLLENBQUMsQ0FBRCxDQUF0QixFQUEyQkcsQ0FBQyxHQUFHLENBQS9CLElBQW9DLENBQUMsQ0FBckM7O1VBQ0EsSUFBSUgsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQWYsRUFBa0I7WUFDaEIsS0FBSSxDQUFDSSxXQUFMLENBQWlCSixLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBNUIsRUFBK0JHLENBQUMsR0FBRyxDQUFuQyxJQUF3QyxDQUFDLENBQXpDO1VBQ0Q7O1VBQ0QsSUFBSUgsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQWYsRUFBa0I7WUFDaEIsS0FBSSxDQUFDSSxXQUFMLENBQWlCSixLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBNUIsRUFBK0JHLENBQUMsR0FBRyxDQUFuQyxJQUF3QyxDQUFDLENBQXpDO1VBQ0Q7UUFDRjs7UUFFRCxJQUFJSCxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBZixFQUFrQjtVQUNoQixLQUFJLENBQUNJLFdBQUwsQ0FBaUJKLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUE1QixFQUErQkcsQ0FBL0IsSUFBb0MsQ0FBQyxDQUFyQztRQUNEOztRQUNELElBQUlILEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFmLEVBQWtCO1VBQ2hCLEtBQUksQ0FBQ0ksV0FBTCxDQUFpQkosS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQTVCLEVBQStCRyxDQUEvQixJQUFvQyxDQUFDLENBQXJDO1FBQ0Q7O1FBRUQsSUFBSUEsQ0FBQyxLQUFLSCxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVdDLE1BQVgsR0FBb0IsQ0FBMUIsSUFBK0JFLENBQUMsR0FBRyxDQUF2QyxFQUEwQztVQUN4QyxLQUFJLENBQUNDLFdBQUwsQ0FBaUJKLEtBQUssQ0FBQyxDQUFELENBQXRCLEVBQTJCRyxDQUFDLEdBQUcsQ0FBL0IsSUFBb0MsQ0FBQyxDQUFyQzs7VUFDQSxJQUFJSCxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBZixFQUFrQjtZQUNoQixLQUFJLENBQUNJLFdBQUwsQ0FBaUJKLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUE1QixFQUErQkcsQ0FBQyxHQUFHLENBQW5DLElBQXdDLENBQUMsQ0FBekM7VUFDRDs7VUFDRCxJQUFJSCxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBZixFQUFrQjtZQUNoQixLQUFJLENBQUNJLFdBQUwsQ0FBaUJKLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUE1QixFQUErQkcsQ0FBQyxHQUFHLENBQW5DLElBQXdDLENBQUMsQ0FBekM7VUFDRDtRQUNGO01BQ0Y7O01BRUQsSUFBSUQsV0FBVyxLQUFLLFVBQXBCLEVBQWdDO1FBQzlCLElBQUlDLENBQUMsS0FBS0gsS0FBSyxDQUFDLENBQUQsQ0FBWCxJQUFrQkcsQ0FBQyxHQUFHLENBQTFCLEVBQTZCO1VBQzNCLEtBQUksQ0FBQ0MsV0FBTCxDQUFpQkQsQ0FBQyxHQUFHLENBQXJCLEVBQXdCSCxLQUFLLENBQUMsQ0FBRCxDQUE3QixJQUFvQyxDQUFDLENBQXJDOztVQUNBLElBQUlBLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFmLEVBQWtCO1lBQ2hCLEtBQUksQ0FBQ0ksV0FBTCxDQUFpQkQsQ0FBQyxHQUFHLENBQXJCLEVBQXdCSCxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBbkMsSUFBd0MsQ0FBQyxDQUF6QztVQUNEOztVQUNELElBQUlBLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFmLEVBQWtCO1lBQ2hCLEtBQUksQ0FBQ0ksV0FBTCxDQUFpQkQsQ0FBQyxHQUFHLENBQXJCLEVBQXdCSCxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBbkMsSUFBd0MsQ0FBQyxDQUF6QztVQUNEO1FBQ0Y7O1FBRUQsSUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQWYsRUFBa0I7VUFDaEIsS0FBSSxDQUFDSSxXQUFMLENBQWlCRCxDQUFqQixFQUFvQkgsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQS9CLElBQW9DLENBQUMsQ0FBckM7UUFDRDs7UUFDRCxJQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBZixFQUFrQjtVQUNoQixLQUFJLENBQUNJLFdBQUwsQ0FBaUJELENBQWpCLEVBQW9CSCxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBL0IsSUFBb0MsQ0FBQyxDQUFyQztRQUNEOztRQUVELElBQUlHLENBQUMsS0FBS0gsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQyxNQUFYLEdBQW9CLENBQTFCLElBQStCRSxDQUFDLEdBQUcsQ0FBdkMsRUFBMEM7VUFDeEMsS0FBSSxDQUFDQyxXQUFMLENBQWlCRCxDQUFDLEdBQUcsQ0FBckIsRUFBd0JILEtBQUssQ0FBQyxDQUFELENBQTdCLElBQW9DLENBQUMsQ0FBckM7O1VBQ0EsSUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQWYsRUFBa0I7WUFDaEIsS0FBSSxDQUFDSSxXQUFMLENBQWlCRCxDQUFDLEdBQUcsQ0FBckIsRUFBd0JILEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFuQyxJQUF3QyxDQUFDLENBQXpDO1VBQ0Q7O1VBQ0QsSUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQWYsRUFBa0I7WUFDaEIsS0FBSSxDQUFDSSxXQUFMLENBQWlCRCxDQUFDLEdBQUcsQ0FBckIsRUFBd0JILEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFuQyxJQUF3QyxDQUFDLENBQXpDO1VBQ0Q7UUFDRjtNQUNGO0lBQ0Y7RUF0RmE7O0VBQUEsbUNBd0ZGLFVBQUNBLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsV0FBaEIsRUFBZ0M7SUFDMUMsSUFBTUcsSUFBSSxHQUFHLElBQUlQLDZDQUFKLENBQVNHLE1BQVQsQ0FBYjtJQUNBLElBQU1LLEVBQUUsR0FBRyxLQUFJLENBQUNDLFlBQUwsQ0FBa0JOLE1BQWxCLEdBQTJCLENBQXRDO0lBQ0EsSUFBTVosTUFBTSxHQUFHLEVBQWY7O0lBRUEsSUFBSWEsV0FBVyxLQUFLLFlBQXBCLEVBQWtDO01BQ2hDLElBQUlGLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBV0MsTUFBWCxHQUFvQixDQUFwQixHQUF3QixDQUE1QixFQUErQjtRQUM3QixNQUFNLElBQUlPLEtBQUosQ0FBVSx5Q0FBVixDQUFOO01BQ0Q7O01BRUQsS0FBSyxJQUFJTCxDQUFDLEdBQUdILEtBQUssQ0FBQyxDQUFELENBQWxCLEVBQXVCRyxDQUFDLEdBQUdILEtBQUssQ0FBQyxDQUFELENBQUwsR0FBV0MsTUFBdEMsRUFBOENFLENBQUMsSUFBSSxDQUFuRCxFQUFzRDtRQUNwRCxJQUFJLEtBQUksQ0FBQ0MsV0FBTCxDQUFpQkosS0FBSyxDQUFDLENBQUQsQ0FBdEIsRUFBMkJHLENBQTNCLE1BQWtDLENBQXRDLEVBQXlDO1VBQ3ZDLE1BQU0sSUFBSUssS0FBSixDQUFVLGdFQUFWLENBQU47UUFDRDs7UUFFRCxLQUFJLENBQUNKLFdBQUwsQ0FBaUJKLEtBQUssQ0FBQyxDQUFELENBQXRCLEVBQTJCRyxDQUEzQixJQUFnQ0csRUFBaEM7O1FBQ0EsMkJBQUkscUJBQUosV0FBSSxFQUFvQk4sS0FBcEIsRUFBMkJDLE1BQTNCLEVBQW1DQyxXQUFuQyxFQUFnREMsQ0FBaEQsQ0FBSjs7UUFFQWQsTUFBTSxDQUFDb0IsSUFBUCxDQUFZLENBQUNULEtBQUssQ0FBQyxDQUFELENBQU4sRUFBV0csQ0FBWCxDQUFaO01BQ0Q7SUFDRjs7SUFFRCxJQUFJRCxXQUFXLEtBQUssVUFBcEIsRUFBZ0M7TUFDOUIsSUFBSUYsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQyxNQUFYLEdBQW9CLENBQXBCLEdBQXdCLENBQTVCLEVBQStCO1FBQzdCLE1BQU0sSUFBSU8sS0FBSixDQUFVLHlDQUFWLENBQU47TUFDRDs7TUFFRCxLQUFLLElBQUlMLEVBQUMsR0FBR0gsS0FBSyxDQUFDLENBQUQsQ0FBbEIsRUFBdUJHLEVBQUMsR0FBR0gsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQyxNQUF0QyxFQUE4Q0UsRUFBQyxJQUFJLENBQW5ELEVBQXNEO1FBQ3BELElBQUksS0FBSSxDQUFDQyxXQUFMLENBQWlCRCxFQUFqQixFQUFvQkgsS0FBSyxDQUFDLENBQUQsQ0FBekIsTUFBa0MsQ0FBdEMsRUFBeUM7VUFDdkMsTUFBTSxJQUFJUSxLQUFKLENBQVUsZ0VBQVYsQ0FBTjtRQUNEOztRQUVELEtBQUksQ0FBQ0osV0FBTCxDQUFpQkQsRUFBakIsRUFBb0JILEtBQUssQ0FBQyxDQUFELENBQXpCLElBQWdDTSxFQUFoQzs7UUFDQSwyQkFBSSxxQkFBSixXQUFJLEVBQW9CTixLQUFwQixFQUEyQkMsTUFBM0IsRUFBbUNDLFdBQW5DLEVBQWdEQyxFQUFoRCxDQUFKOztRQUVBZCxNQUFNLENBQUNvQixJQUFQLENBQVksQ0FBQ04sRUFBRCxFQUFJSCxLQUFLLENBQUMsQ0FBRCxDQUFULENBQVo7TUFDRDtJQUNGOztJQUVELEtBQUksQ0FBQ08sWUFBTCxDQUFrQkUsSUFBbEIsQ0FBdUI7TUFBRUgsRUFBRSxFQUFGQSxFQUFGO01BQU1ELElBQUksRUFBSkEsSUFBTjtNQUFZaEIsTUFBTSxFQUFOQTtJQUFaLENBQXZCO0VBQ0QsQ0FoSWE7O0VBQUEsdUNBa0lFLFVBQUNXLEtBQUQsRUFBVztJQUN6QixJQUFNUCxHQUFHLEdBQUcsS0FBSSxDQUFDaUIsU0FBTCxDQUFlVixLQUFLLENBQUMsQ0FBRCxDQUFwQixFQUF5QkEsS0FBSyxDQUFDLENBQUQsQ0FBOUIsQ0FBWjs7SUFDQSxJQUFJUCxHQUFHLEtBQUssQ0FBWixFQUFlO01BQ2IsTUFBTSxJQUFJZSxLQUFKLENBQVUsd0NBQVYsQ0FBTjtJQUNEOztJQUVELElBQU1GLEVBQUUsR0FBRyxLQUFJLENBQUNGLFdBQUwsQ0FBaUJKLEtBQUssQ0FBQyxDQUFELENBQXRCLEVBQTJCQSxLQUFLLENBQUMsQ0FBRCxDQUFoQyxDQUFYOztJQUNBLElBQUlNLEVBQUUsR0FBRyxDQUFULEVBQVk7TUFDVixJQUFNSyxRQUFRLEdBQUcsS0FBSSxDQUFDSixZQUFMLENBQWtCSyxJQUFsQixDQUF1QixVQUFDQyxDQUFEO1FBQUEsT0FBT0EsQ0FBQyxDQUFDUCxFQUFGLEtBQVNBLEVBQWhCO01BQUEsQ0FBdkIsQ0FBakI7O01BQ0EsSUFBTVEsUUFBUSxHQUFHSCxRQUFRLENBQUN0QixNQUFULENBQWdCMEIsU0FBaEIsQ0FDZixVQUFDQyxFQUFEO1FBQUEsT0FBUUMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLEVBQWYsTUFBdUJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlbEIsS0FBZixDQUEvQjtNQUFBLENBRGUsQ0FBakI7TUFHQVcsUUFBUSxDQUFDTixJQUFULENBQWNaLEdBQWQsQ0FBa0JxQixRQUFsQjtNQUNBLEtBQUksQ0FBQ0osU0FBTCxDQUFlVixLQUFLLENBQUMsQ0FBRCxDQUFwQixFQUF5QkEsS0FBSyxDQUFDLENBQUQsQ0FBOUIsSUFBcUNNLEVBQXJDO01BQ0EsT0FBTyxJQUFQO0lBQ0Q7O0lBQ0QsS0FBSSxDQUFDSSxTQUFMLENBQWVWLEtBQUssQ0FBQyxDQUFELENBQXBCLEVBQXlCQSxLQUFLLENBQUMsQ0FBRCxDQUE5QixJQUFxQyxDQUFDLENBQXRDO0lBQ0EsT0FBTyxLQUFQO0VBQ0QsQ0FwSmE7O0VBQUEsc0NBc0pDLFlBQU07SUFDbkIsSUFBSW1CLFNBQVMsR0FBRyxDQUFoQjs7SUFDQSxLQUFJLENBQUNaLFlBQUwsQ0FBa0JhLE9BQWxCLENBQTBCLFVBQUNDLElBQUQsRUFBVTtNQUNsQyxJQUFJQSxJQUFJLENBQUNoQixJQUFMLENBQVVpQixNQUFWLEVBQUosRUFBd0I7UUFDdEJILFNBQVMsSUFBSSxDQUFiO01BQ0Q7SUFDRixDQUpEOztJQUtBLE9BQU9BLFNBQVMsS0FBSyxLQUFJLENBQUNaLFlBQUwsQ0FBa0JOLE1BQXZDO0VBQ0QsQ0E5SmE7O0VBQ1osS0FBS0csV0FBTCxHQUFtQixDQUNqQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBRGlCLEVBRWpCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FGaUIsRUFHakIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUhpQixFQUlqQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBSmlCLEVBS2pCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FMaUIsRUFNakIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQU5pQixFQU9qQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBUGlCLEVBUWpCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FSaUIsRUFTakIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQVRpQixFQVVqQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBVmlCLENBQW5CO0VBWUEsS0FBS00sU0FBTCxHQUFpQixDQUNmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FEZSxFQUVmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FGZSxFQUdmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FIZSxFQUlmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FKZSxFQUtmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FMZSxFQU1mLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FOZSxFQU9mLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FQZSxFQVFmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FSZSxFQVNmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FUZSxFQVVmLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FWZSxDQUFqQjtFQVlBLEtBQUtILFlBQUwsR0FBb0IsRUFBcEI7QUFDRDs7QUF1SUgsaUVBQWVSLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN4S01aLG1DQUNKLGdCQUFZb0MsY0FBWixFQUE0QjtFQUFBOztFQUFBOztFQUFBLHFDQUlkLFVBQUN2QixLQUFEO0lBQUEsT0FBVyxLQUFJLENBQUN1QixjQUFMLENBQW9CQyxhQUFwQixDQUFrQ3hCLEtBQWxDLENBQVg7RUFBQSxDQUpjOztFQUMxQixLQUFLdUIsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7QUFLSCxpRUFBZXBDLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtJQUNNVyxpQ0FDSixjQUFZRyxNQUFaLEVBQW9CO0VBQUE7O0VBQUE7O0VBQUEsNkJBWWQsVUFBQ3dCLEdBQUQsRUFBUztJQUNiLEtBQUksQ0FBQ0MsU0FBTCxDQUFlRCxHQUFmLElBQXNCLENBQXRCO0VBQ0QsQ0FkbUI7O0VBQUEsZ0NBZ0JYLFlBQU07SUFDYixJQUFJLENBQUMsS0FBSSxDQUFDQyxTQUFMLENBQWVDLFFBQWYsQ0FBd0IsQ0FBeEIsQ0FBTCxFQUFpQztNQUMvQixPQUFPLElBQVA7SUFDRDs7SUFDRCxPQUFPLEtBQVA7RUFDRCxDQXJCbUI7O0VBQ2xCLEtBQUsxQixNQUFMLEdBQWMsS0FBSzJCLFdBQUwsQ0FBaUJDLFNBQWpCLENBQTJCNUIsTUFBM0IsQ0FBZDtFQUNBLEtBQUt5QixTQUFMLEdBQWlCSSxLQUFLLENBQUMsS0FBSzdCLE1BQU4sQ0FBTCxDQUFtQjhCLElBQW5CLENBQXdCLENBQXhCLENBQWpCO0FBQ0Q7O2dCQUpHakMsbUJBTWUsVUFBQ0csTUFBRCxFQUFZO0VBQzdCLElBQUlBLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0lBQ2QsTUFBTU8sS0FBSyxDQUFDLHlCQUFELENBQVg7RUFDRDs7RUFDRCxPQUFPUCxNQUFQO0FBQ0Q7O0FBY0gsaUVBQWVILElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBOztJQUVNb0MsaUNBQ0osZ0JBQWM7RUFBQTs7RUFBQTs7RUFBQSwwQ0FtQkssWUFBTTtJQUN2QixLQUFJLENBQUNDLGdCQUFMLENBQXNCZixPQUF0QixDQUE4QixVQUFDZ0IsU0FBRCxFQUFlO01BQzNDLEtBQUksQ0FBQ0MsZUFBTCxDQUFxQkMsU0FBckIsQ0FDRUYsU0FBUyxDQUFDcEMsS0FEWixFQUVFb0MsU0FBUyxDQUFDbkMsTUFGWixFQUdFbUMsU0FBUyxDQUFDbEMsV0FIWjtJQUtELENBTkQ7RUFPRCxDQTNCYTs7RUFBQSwrQ0E2QlUsWUFBTTtJQUM1QixLQUFJLENBQUNxQyxpQkFBTCxDQUF1QkQsU0FBdkIsQ0FBaUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQyxFQUF5QyxDQUF6QyxFQUE0QyxZQUE1Qzs7SUFDQSxLQUFJLENBQUNDLGlCQUFMLENBQXVCRCxTQUF2QixDQUFpQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpDLEVBQXlDLENBQXpDLEVBQTRDLFVBQTVDOztJQUNBLEtBQUksQ0FBQ0MsaUJBQUwsQ0FBdUJELFNBQXZCLENBQWlDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBakMsRUFBeUMsQ0FBekMsRUFBNEMsVUFBNUM7O0lBQ0EsS0FBSSxDQUFDQyxpQkFBTCxDQUF1QkQsU0FBdkIsQ0FBaUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQyxFQUF5QyxDQUF6QyxFQUE0QyxVQUE1Qzs7SUFDQSxLQUFJLENBQUNDLGlCQUFMLENBQXVCRCxTQUF2QixDQUFpQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpDLEVBQXlDLENBQXpDLEVBQTRDLFVBQTVDOztJQUNBLEtBQUksQ0FBQ0MsaUJBQUwsQ0FBdUJELFNBQXZCLENBQWlDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBakMsRUFBeUMsQ0FBekMsRUFBNEMsWUFBNUM7O0lBQ0EsS0FBSSxDQUFDQyxpQkFBTCxDQUF1QkQsU0FBdkIsQ0FBaUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQyxFQUF5QyxDQUF6QyxFQUE0QyxZQUE1Qzs7SUFDQSxLQUFJLENBQUNDLGlCQUFMLENBQXVCRCxTQUF2QixDQUFpQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpDLEVBQXlDLENBQXpDLEVBQTRDLFlBQTVDOztJQUVBLEtBQUksQ0FBQ0MsaUJBQUwsQ0FBdUJELFNBQXZCLENBQWlDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBakMsRUFBeUMsQ0FBekMsRUFBNEMsWUFBNUM7O0lBQ0EsS0FBSSxDQUFDQyxpQkFBTCxDQUF1QkQsU0FBdkIsQ0FBaUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQyxFQUF5QyxDQUF6QyxFQUE0QyxZQUE1QztFQUNELENBekNhOztFQUFBLDBDQTJDSyxZQUFNO0lBQ3ZCLElBQU1FLE9BQU8sR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQWhCO0lBQ0EsSUFBTXRDLFdBQVcsR0FBRyxDQUFDLFlBQUQsRUFBZSxVQUFmLENBQXBCOztJQUVBLElBQU11QyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDeEMsTUFBRCxFQUFZO01BQ3hCLElBQU1aLE1BQU0sR0FBRyxDQUNiQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEVBQTNCLENBRGEsRUFFYkYsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUEzQixDQUZhLENBQWY7TUFJQSxJQUFNa0QsR0FBRyxHQUFHcEQsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUFaOztNQUVBLElBQUk7UUFDRjtRQUVBLEtBQUksQ0FBQzZDLGVBQUwsQ0FBcUJDLFNBQXJCLENBQStCakQsTUFBL0IsRUFBdUNZLE1BQXZDLEVBQStDQyxXQUFXLENBQUN3QyxHQUFELENBQTFEO01BQ0QsQ0FKRCxDQUlFLE9BQU8vQyxLQUFQLEVBQWM7UUFDZCxJQUFJQSxLQUFLLENBQUNDLE9BQU4sS0FBa0IseUNBQWxCLElBQ0RELEtBQUssQ0FBQ0MsT0FBTixLQUFrQixnRUFEckIsRUFDdUY7VUFDckY2QyxLQUFLLENBQUN4QyxNQUFELENBQUw7UUFDRDtNQUNGO0lBQ0YsQ0FqQkQ7O0lBbUJBdUMsT0FBTyxDQUFDcEIsT0FBUixDQUFnQixVQUFDbkIsTUFBRDtNQUFBLE9BQVl3QyxLQUFLLENBQUN4QyxNQUFELENBQWpCO0lBQUEsQ0FBaEI7RUFDRCxDQW5FYTs7RUFBQSxzQ0FxRUMsWUFBTTtJQUNuQixLQUFJLENBQUNvQyxlQUFMLEdBQXVCLElBQUl0Qyw0REFBSixFQUF2QjtJQUNBLEtBQUksQ0FBQ3dDLGlCQUFMLEdBQXlCLElBQUl4Qyw0REFBSixFQUF6QjtJQUVBLEtBQUksQ0FBQzRDLE1BQUwsR0FBYyxJQUFJeEQseURBQUosQ0FBVyxLQUFJLENBQUNvRCxpQkFBaEIsQ0FBZDtJQUNBLEtBQUksQ0FBQ0ssUUFBTCxHQUFnQixJQUFJWixrRUFBSixDQUFhLEtBQUksQ0FBQ0ssZUFBbEIsQ0FBaEI7O0lBRUEsS0FBSSxDQUFDUSxnQkFBTDs7SUFDQSxLQUFJLENBQUNDLHFCQUFMLEdBUm1CLENBUVc7SUFDOUI7OztJQUNBYiw0REFBQTs7SUFFQSxJQUFNZSxpQkFBaUIsR0FBRyxLQUFJLENBQUNYLGVBQUwsQ0FBcUI5QixZQUFyQixDQUFrQzBDLEdBQWxDLENBQ3hCLFVBQUM1QixJQUFEO01BQUEsT0FBVUEsSUFBSSxDQUFDaEMsTUFBZjtJQUFBLENBRHdCLENBQTFCOztJQUdBNEMsMkRBQUEsQ0FBbUJlLGlCQUFuQixFQUFzQyxRQUF0QztJQUNBZiwrREFBQSxDQUF1QixLQUF2QjtFQUNELENBdEZhOztFQUFBLG9DQXdGRCxZQUFNO0lBQ2pCLElBQUksS0FBSSxDQUFDTSxpQkFBTCxDQUF1QmEsWUFBdkIsRUFBSixFQUEyQztNQUN6QyxPQUFPO1FBQUVDLFFBQVEsRUFBRSxJQUFaO1FBQWtCQyxNQUFNLEVBQUU7TUFBMUIsQ0FBUDtJQUNEOztJQUVELElBQUksS0FBSSxDQUFDakIsZUFBTCxDQUFxQmUsWUFBckIsRUFBSixFQUF5QztNQUN2QyxPQUFPO1FBQUVDLFFBQVEsRUFBRSxJQUFaO1FBQWtCQyxNQUFNLEVBQUU7TUFBMUIsQ0FBUDtJQUNEOztJQUVELE9BQU87TUFBRUQsUUFBUSxFQUFFLEtBQVo7TUFBbUJDLE1BQU0sRUFBRTtJQUEzQixDQUFQO0VBQ0QsQ0FsR2E7O0VBQUEscUNBb0dBLFVBQUNDLFlBQUQsRUFBa0I7SUFDOUIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtNQUN6QixJQUFNQyxjQUFjLEdBQUcsS0FBSSxDQUFDYixRQUFMLENBQWMvQyxpQkFBZCxFQUF2Qjs7TUFDQSxJQUFJNEQsY0FBYyxDQUFDaEUsR0FBbkIsRUFBd0I7UUFDdEJ3Qyx3REFBQSxDQUFnQndCLGNBQWMsQ0FBQ3BFLE1BQS9CLEVBQXVDLFFBQXZDLEVBQWlELElBQWpEO1FBQ0E0QywyREFBQSxDQUFtQixLQUFJLENBQUNJLGVBQXhCLEVBQXlDLFFBQXpDO1FBQ0FKLDREQUFBOztRQUVBLElBQU00QixNQUFNLEdBQUcsS0FBSSxDQUFDQyxVQUFMLEVBQWY7O1FBQ0EsSUFBSUQsTUFBTSxDQUFDUixRQUFQLElBQW1CUSxNQUFNLENBQUNQLE1BQVAsS0FBa0IsVUFBekMsRUFBcUQ7VUFDbkRyQixrRUFBQSxDQUEwQjRCLE1BQU0sQ0FBQ1AsTUFBakM7UUFDRCxDQUZELE1BRU87VUFDTFUsVUFBVSxDQUFDLFlBQU07WUFDZlIsWUFBWTtZQUNadkIsMkRBQUE7VUFDRCxDQUhTLEVBR1AsR0FITyxDQUFWO1FBSUQ7O1FBQ0Q7TUFDRDs7TUFDREEsd0RBQUEsQ0FBZ0J3QixjQUFjLENBQUNwRSxNQUEvQixFQUF1QyxRQUF2QyxFQUFpRCxLQUFqRDtJQUNELENBbkJEOztJQXFCQSxJQUFNNkUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtNQUN2QixJQUFNQyxZQUFZLEdBQUcsS0FBSSxDQUFDeEIsTUFBTCxDQUFZakQsV0FBWixDQUF3QjZELFlBQXhCLENBQXJCOztNQUNBLElBQUlZLFlBQUosRUFBa0I7UUFDaEJsQyx3REFBQSxDQUFnQnNCLFlBQWhCLEVBQThCLFVBQTlCLEVBQTBDLElBQTFDO1FBQ0F0QiwyREFBQSxDQUFtQixLQUFJLENBQUNJLGVBQXhCLEVBQXlDLFFBQXpDO1FBQ0FKLDJEQUFBLENBQW1CLEtBQUksQ0FBQ00saUJBQXhCLEVBQTJDLFVBQTNDOztRQUVBLElBQU1zQixNQUFNLEdBQUcsS0FBSSxDQUFDQyxVQUFMLEVBQWY7O1FBQ0EsSUFBSUQsTUFBTSxDQUFDUixRQUFQLElBQW1CUSxNQUFNLENBQUNQLE1BQVAsS0FBa0IsUUFBekMsRUFBbUQ7VUFDakRyQixrRUFBQSxDQUEwQjRCLE1BQU0sQ0FBQ1AsTUFBakM7UUFDRDtNQUNGLENBVEQsTUFTTztRQUNMckIsd0RBQUEsQ0FBZ0JzQixZQUFoQixFQUE4QixVQUE5QixFQUEwQyxLQUExQztRQUNBdEIsNERBQUE7UUFDQStCLFVBQVUsQ0FBQyxZQUFNO1VBQ2ZSLFlBQVk7VUFDWnZCLDJEQUFBO1FBQ0QsQ0FIUyxFQUdQLEdBSE8sQ0FBVjtNQUlEO0lBQ0YsQ0FuQkQ7O0lBcUJBaUMsVUFBVTtJQUVWakMsMkRBQUEsQ0FBbUIsS0FBSSxDQUFDSSxlQUF4QixFQUF5QyxRQUF6QztJQUNBSiwyREFBQSxDQUFtQixLQUFJLENBQUNNLGlCQUF4QixFQUEyQyxVQUEzQztFQUNELENBbkphOztFQUNaLEtBQUtGLGVBQUwsR0FBdUIsSUFBdkI7RUFDQSxLQUFLRSxpQkFBTCxHQUF5QixJQUF6QjtFQUNBLEtBQUtJLE1BQUwsR0FBYyxJQUFkO0VBQ0EsS0FBS0MsUUFBTCxHQUFnQixJQUFoQjtFQUNBLEtBQUtULGdCQUFMLEdBQXdCLENBQ3RCO0lBQUVuQyxLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0lBQWlCQyxNQUFNLEVBQUUsQ0FBekI7SUFBNEJDLFdBQVcsRUFBRTtFQUF6QyxDQURzQixFQUV0QjtJQUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0lBQWlCQyxNQUFNLEVBQUUsQ0FBekI7SUFBNEJDLFdBQVcsRUFBRTtFQUF6QyxDQUZzQixFQUd0QjtJQUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0lBQWlCQyxNQUFNLEVBQUUsQ0FBekI7SUFBNEJDLFdBQVcsRUFBRTtFQUF6QyxDQUhzQixFQUl0QjtJQUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0lBQWlCQyxNQUFNLEVBQUUsQ0FBekI7SUFBNEJDLFdBQVcsRUFBRTtFQUF6QyxDQUpzQixFQUt0QjtJQUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0lBQWlCQyxNQUFNLEVBQUUsQ0FBekI7SUFBNEJDLFdBQVcsRUFBRTtFQUF6QyxDQUxzQixFQU10QjtJQUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0lBQWlCQyxNQUFNLEVBQUUsQ0FBekI7SUFBNEJDLFdBQVcsRUFBRTtFQUF6QyxDQU5zQixFQU90QjtJQUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0lBQWlCQyxNQUFNLEVBQUUsQ0FBekI7SUFBNEJDLFdBQVcsRUFBRTtFQUF6QyxDQVBzQixFQVF0QjtJQUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0lBQWlCQyxNQUFNLEVBQUUsQ0FBekI7SUFBNEJDLFdBQVcsRUFBRTtFQUF6QyxDQVJzQixFQVN0QjtJQUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0lBQWlCQyxNQUFNLEVBQUUsQ0FBekI7SUFBNEJDLFdBQVcsRUFBRTtFQUF6QyxDQVRzQixFQVV0QjtJQUFFRixLQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0lBQWlCQyxNQUFNLEVBQUUsQ0FBekI7SUFBNEJDLFdBQVcsRUFBRTtFQUF6QyxDQVZzQixDQUF4QjtBQVlEOztBQXFJSCxpRUFBZWdDLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUpBLElBQU1ELEtBQUssR0FBSSxZQUFNO0VBQ25CLElBQU1tQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDekIsTUFBRCxFQUFZO0lBQzlCLElBQU0wQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtJQUNBRixTQUFTLENBQUNHLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFdBQXhCOztJQUNBLEtBQUssSUFBSXRFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsR0FBcEIsRUFBeUJBLENBQUMsSUFBSSxDQUE5QixFQUFpQztNQUMvQixJQUFNdUUsTUFBTSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtNQUNBRyxNQUFNLENBQUNGLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCO01BQ0EsSUFBSTlCLE1BQU0sS0FBSyxVQUFmLEVBQTJCK0IsTUFBTSxDQUFDRixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixrQkFBckI7TUFDM0IsSUFBSTlCLE1BQU0sS0FBSyxRQUFmLEVBQXlCK0IsTUFBTSxDQUFDRixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixlQUFyQjtNQUN6QixJQUFJdEUsQ0FBQyxJQUFJLEVBQVQsRUFBYXVFLE1BQU0sQ0FBQ0YsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsZUFBckI7TUFDYixJQUFJLENBQUN0RSxDQUFDLEdBQUcsQ0FBTCxJQUFVLEVBQVYsS0FBaUIsQ0FBckIsRUFBd0J1RSxNQUFNLENBQUNGLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGNBQXJCO01BQ3hCQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsU0FBcEIsRUFBK0J4RSxDQUEvQjtNQUNBdUUsTUFBTSxDQUFDQyxZQUFQLENBQW9CLFFBQXBCLEVBQThCQyxNQUFNLENBQUN6RSxDQUFELENBQU4sQ0FBVTBFLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsQ0FBOUI7TUFDQVIsU0FBUyxDQUFDUyxXQUFWLENBQXNCSixNQUF0QjtJQUNEOztJQUNELE9BQU9MLFNBQVA7RUFDRCxDQWZEOztFQWlCQSxJQUFNdEIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0lBQzFCLElBQU1nQyxrQkFBa0IsR0FBR1QsUUFBUSxDQUFDVSxhQUFULENBQXVCLHVCQUF2QixDQUEzQjtJQUNBRCxrQkFBa0IsQ0FBQ0UsU0FBbkIsR0FBK0IsRUFBL0I7SUFFQSxJQUFNQyxtQkFBbUIsR0FBR1osUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQTVCO0lBQ0FXLG1CQUFtQixDQUFDQyxXQUFwQixHQUFrQyxZQUFsQztJQUNBLElBQU05QyxlQUFlLEdBQUcrQixXQUFXLENBQUMsUUFBRCxDQUFuQztJQUNBL0IsZUFBZSxDQUFDbUMsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLGtCQUE5QjtJQUNBTSxrQkFBa0IsQ0FBQ0QsV0FBbkIsQ0FBK0JJLG1CQUEvQjtJQUNBSCxrQkFBa0IsQ0FBQ0QsV0FBbkIsQ0FBK0J6QyxlQUEvQjtJQUVBLElBQU0rQyxxQkFBcUIsR0FBR2QsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQTlCO0lBQ0FhLHFCQUFxQixDQUFDRCxXQUF0QixHQUFvQyxrQkFBcEM7SUFDQSxJQUFNRSxpQkFBaUIsR0FBR2pCLFdBQVcsQ0FBQyxVQUFELENBQXJDO0lBQ0FpQixpQkFBaUIsQ0FBQ2IsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLG9CQUFoQztJQUNBTSxrQkFBa0IsQ0FBQ0QsV0FBbkIsQ0FBK0JNLHFCQUEvQjtJQUNBTCxrQkFBa0IsQ0FBQ0QsV0FBbkIsQ0FBK0JPLGlCQUEvQjtFQUNELENBakJEOztFQW1CQSxJQUFNbkMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ29DLGNBQUQsRUFBaUIzQyxNQUFqQixFQUE0QjtJQUMvQzJDLGNBQWMsQ0FBQ2xFLE9BQWYsQ0FBdUIsVUFBQ21FLFVBQUQsRUFBZ0I7TUFDckNBLFVBQVUsQ0FBQ25FLE9BQVgsQ0FBbUIsVUFBQ3BCLEtBQUQsRUFBVztRQUM1Qiw0QkFBZUEsS0FBZjtRQUFBLElBQU93RixDQUFQO1FBQUEsSUFBVUMsQ0FBVjs7UUFDQSxJQUFNZixNQUFNLEdBQUdKLFFBQVEsQ0FBQ1UsYUFBVCxZQUEyQnJDLE1BQTNCLDhCQUFvRDZDLENBQXBELFNBQXdEQyxDQUF4RCxTQUFmO1FBQ0FmLE1BQU0sQ0FBQ0YsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckI7UUFDQUMsTUFBTSxDQUFDQyxZQUFQLENBQW9CLFdBQXBCLEVBQWlDLE1BQWpDO01BQ0QsQ0FMRDtJQU1ELENBUEQ7RUFRRCxDQVREOztFQVdBLElBQU1oQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDVSxTQUFELEVBQVkxQixNQUFaLEVBQXVCO0lBQzFDLElBQU0rQyxLQUFLLEdBQUdwQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtJQUNBbUIsS0FBSyxDQUFDbEIsU0FBTixDQUFnQkMsR0FBaEIsV0FBdUI5QixNQUF2QjtJQUNBK0MsS0FBSyxDQUFDbEIsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsT0FBcEI7SUFFQSxJQUFNa0IsU0FBUyxHQUFHdEIsU0FBUyxDQUFDOUQsWUFBVixDQUF1QnFGLElBQXZCLENBQ2hCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtNQUFBLE9BQVVBLENBQUMsQ0FBQ3pGLElBQUYsQ0FBT0osTUFBUCxHQUFnQjRGLENBQUMsQ0FBQ3hGLElBQUYsQ0FBT0osTUFBakM7SUFBQSxDQURnQixDQUFsQjtJQUlBMEYsU0FBUyxDQUFDdkUsT0FBVixDQUFtQixVQUFDQyxJQUFELEVBQVU7TUFDM0IsSUFBTWhCLElBQUksR0FBR2lFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO01BQ0FsRSxJQUFJLENBQUNtRSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsWUFBbkI7TUFDQXBFLElBQUksQ0FBQ21FLFNBQUwsQ0FBZUMsR0FBZixzQkFBaUNwRCxJQUFJLENBQUNoQixJQUFMLENBQVVKLE1BQTNDO01BQ0EsSUFBSW9CLElBQUksQ0FBQ2hCLElBQUwsQ0FBVWlCLE1BQVYsRUFBSixFQUF3QmpCLElBQUksQ0FBQ21FLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixpQkFBbkI7TUFDeEJpQixLQUFLLENBQUNaLFdBQU4sQ0FBa0J6RSxJQUFsQjtJQUNELENBTkQ7SUFRQSxJQUFNMEYsUUFBUSxHQUFHekIsUUFBUSxDQUFDVSxhQUFULFlBQTJCckMsTUFBM0IsWUFBakI7SUFDQSxJQUFNcUQsY0FBYyxHQUFHMUIsUUFBUSxDQUFDVSxhQUFULENBQXVCLGtCQUF2QixDQUF2QjtJQUNBZ0IsY0FBYyxDQUFDQyxZQUFmLENBQTRCUCxLQUE1QixFQUFtQ0ssUUFBbkM7SUFFQSxJQUFNRyxPQUFPLEdBQUc1QixRQUFRLENBQUNVLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7SUFDQWtCLE9BQU8sQ0FBQ3BCLFdBQVIsQ0FBb0JrQixjQUFwQjtFQUNELENBdkJEOztFQXlCQSxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0lBQ3pCQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNdkMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDVCxNQUFELEVBQVk7SUFDdEMsSUFBTWlELEtBQUssR0FBR2pDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFkO0lBQ0FnQyxLQUFLLENBQUMvQixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixPQUFwQjtJQUVBLElBQU0rQixnQkFBZ0IsR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF6QjtJQUNBaUMsZ0JBQWdCLENBQUNoQyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsbUJBQS9CO0lBRUEsSUFBTTdFLE9BQU8sR0FBRzBFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFoQjtJQUNBM0UsT0FBTyxDQUFDdUYsV0FBUixHQUFzQjdCLE1BQU0sS0FBSyxRQUFYLEdBQXNCLFVBQXRCLEdBQW1DLFdBQXpEO0lBQ0FrRCxnQkFBZ0IsQ0FBQzFCLFdBQWpCLENBQTZCbEYsT0FBN0I7SUFFQTJHLEtBQUssQ0FBQ3pCLFdBQU4sQ0FBa0IwQixnQkFBbEI7SUFFQSxJQUFNQyxHQUFHLEdBQUduQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtJQUNBa0MsR0FBRyxDQUFDakMsU0FBSixDQUFjQyxHQUFkLENBQWtCLEtBQWxCO0lBQ0FnQyxHQUFHLENBQUN0QixXQUFKLEdBQWtCLGdCQUFsQjtJQUNBc0IsR0FBRyxDQUFDQyxnQkFBSixDQUFxQixPQUFyQixFQUE4QlAsWUFBOUI7SUFFQUksS0FBSyxDQUFDekIsV0FBTixDQUFrQjJCLEdBQWxCO0lBRUEsSUFBTVAsT0FBTyxHQUFHNUIsUUFBUSxDQUFDVSxhQUFULENBQXVCLHVCQUF2QixDQUFoQjtJQUNBa0IsT0FBTyxDQUFDcEIsV0FBUixDQUFvQnlCLEtBQXBCO0VBQ0QsQ0F0QkQ7O0VBd0JBLElBQU1wRCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUN3RCxJQUFELEVBQVU7SUFDakMsSUFBTUMsZUFBZSxHQUFHdEMsUUFBUSxDQUFDdUMsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQXhCOztJQUVBLElBQU0xQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDMkMsQ0FBRCxFQUFPO01BQzFCQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0M3QyxZQUF0QztNQUNBMkMsQ0FBQyxDQUFDQyxNQUFGLENBQVN2QyxTQUFULENBQW1CeUMsTUFBbkIsQ0FBMEIsa0JBQTFCO01BRUEsV0FBZSxDQUNiQyxNQUFNLENBQUNKLENBQUMsQ0FBQ0MsTUFBRixDQUFTSSxZQUFULENBQXNCLFFBQXRCLEVBQWdDLENBQWhDLENBQUQsQ0FETyxFQUViRCxNQUFNLENBQUNKLENBQUMsQ0FBQ0MsTUFBRixDQUFTSSxZQUFULENBQXNCLFFBQXRCLEVBQWdDLENBQWhDLENBQUQsQ0FGTyxDQUFmO01BQUEsSUFBTzNCLENBQVA7TUFBQSxJQUFVQyxDQUFWO01BS0FrQixJQUFJLENBQUNTLFdBQUwsQ0FBaUIsQ0FBQzVCLENBQUQsRUFBSUMsQ0FBSixDQUFqQjtJQUNELENBVkQ7O0lBWUFtQixlQUFlLENBQUN4RixPQUFoQixDQUF3QixVQUFDaUcsR0FBRCxFQUFTO01BQy9CQSxHQUFHLENBQUNYLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCdkMsWUFBOUI7SUFDRCxDQUZEO0VBR0QsQ0FsQkQ7O0VBb0JBLElBQU1ULFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNyRSxNQUFELEVBQVNpSSxRQUFULEVBQW1CN0gsR0FBbkIsRUFBMkI7SUFDM0MsSUFBTWlGLE1BQU0sR0FBR0osUUFBUSxDQUFDVSxhQUFULFlBQ1RzQyxRQURTLGtDQUNzQmpJLE1BQU0sQ0FBQyxDQUFELENBRDVCLFNBQ2tDQSxNQUFNLENBQUMsQ0FBRCxDQUR4QyxTQUFmOztJQUdBLElBQUlJLEdBQUosRUFBUztNQUNQaUYsTUFBTSxDQUFDRixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixVQUFyQjtNQUNBLElBQU04QyxJQUFJLEdBQUdqRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtNQUNBZ0QsSUFBSSxDQUFDL0MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFNBQW5CO01BQ0E4QyxJQUFJLENBQUM1QyxZQUFMLENBQWtCLFdBQWxCLEVBQStCLFdBQS9CO01BQ0FELE1BQU0sQ0FBQ0ksV0FBUCxDQUFtQnlDLElBQW5CO0lBQ0QsQ0FORCxNQU1PO01BQ0w3QyxNQUFNLENBQUNGLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFdBQXJCOztNQUNBLElBQU04QyxLQUFJLEdBQUdqRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7TUFDQWdELEtBQUksQ0FBQy9DLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixTQUFuQjs7TUFDQThDLEtBQUksQ0FBQzVDLFlBQUwsQ0FBa0IsV0FBbEIsRUFBK0IsWUFBL0I7O01BQ0FELE1BQU0sQ0FBQ0ksV0FBUCxDQUFtQnlDLEtBQW5CO0lBQ0Q7RUFDRixDQWpCRDs7RUFtQkEsSUFBTTNELGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtJQUMxQixJQUFNNEQsS0FBSyxHQUFHbEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7SUFDQWlELEtBQUssQ0FBQ2hELFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCO0lBRUEsSUFBTWxDLGlCQUFpQixHQUFHK0IsUUFBUSxDQUFDVSxhQUFULENBQXVCLHFCQUF2QixDQUExQjtJQUNBekMsaUJBQWlCLENBQUN1QyxXQUFsQixDQUE4QjBDLEtBQTlCO0VBQ0QsQ0FORDs7RUFRQSxJQUFNdkQsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtJQUN6QixJQUFNdUQsS0FBSyxHQUFHbEQsUUFBUSxDQUFDVSxhQUFULENBQXVCLFFBQXZCLENBQWQ7SUFDQSxJQUFNekMsaUJBQWlCLEdBQUcrQixRQUFRLENBQUNVLGFBQVQsQ0FBdUIscUJBQXZCLENBQTFCO0lBRUF6QyxpQkFBaUIsQ0FBQ2tGLFdBQWxCLENBQThCRCxLQUE5QjtFQUNELENBTEQ7O0VBT0EsT0FBTztJQUNMekUsYUFBYSxFQUFiQSxhQURLO0lBRUxHLFlBQVksRUFBWkEsWUFGSztJQUdMUyxZQUFZLEVBQVpBLFlBSEs7SUFJTEksbUJBQW1CLEVBQW5CQSxtQkFKSztJQUtMWixnQkFBZ0IsRUFBaEJBLGdCQUxLO0lBTUxPLFNBQVMsRUFBVEEsU0FOSztJQU9MRSxhQUFhLEVBQWJBLGFBUEs7SUFRTEssWUFBWSxFQUFaQTtFQVJLLENBQVA7QUFVRCxDQXJLYSxFQUFkOztBQXVLQSxpRUFBZWhDLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZLQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsK29CQUErb0IsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxnSkFBZ0osbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRywyREFBMkQsZ0JBQWdCLGtCQUFrQixHQUFHLFNBQVMsOEJBQThCLHNCQUFzQixHQUFHLE9BQU8sa0ZBQWtGLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLCtuQkFBK25CLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsZ0pBQWdKLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsMkRBQTJELGdCQUFnQixrQkFBa0IsR0FBRyxTQUFTLDhCQUE4QixzQkFBc0IsR0FBRyxtQkFBbUI7QUFDM3FGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdEQUFnRCxtQ0FBbUMsZ0NBQWdDLDJCQUEyQiwwR0FBMEcsR0FBRywwQkFBMEIsZ0NBQWdDLDZCQUE2Qix3QkFBd0IsR0FBRyxVQUFVLGlCQUFpQixHQUFHLGFBQWEsa0JBQWtCLGtCQUFrQix3QkFBd0IsaUJBQWlCLGlCQUFpQixHQUFHLGdCQUFnQixxQkFBcUIsaUJBQWlCLHNDQUFzQyw2QkFBNkIsc0JBQXNCLG1CQUFtQixHQUFHLGNBQWMsaUJBQWlCLGlCQUFpQix1QkFBdUIsR0FBRywyQkFBMkIsa0JBQWtCLDJCQUEyQixrQ0FBa0Msa0JBQWtCLG1DQUFtQyxHQUFHLHFCQUFxQix1QkFBdUIsR0FBRyxnQkFBZ0IsMEJBQTBCLGlCQUFpQixrQkFBa0Isa0JBQWtCLDRDQUE0QyxHQUFHLGFBQWEseUNBQXlDLGdCQUFnQixpQkFBaUIsOENBQThDLDZDQUE2QyxpQkFBaUIsR0FBRyxvQkFBb0IsZ0RBQWdELEdBQUcsbUJBQW1CLCtDQUErQyxHQUFHLDZCQUE2Qix5Q0FBeUMsb0JBQW9CLEdBQUcsV0FBVyxzQ0FBc0Msc0NBQXNDLG9CQUFvQixHQUFHLGVBQWUsdUNBQXVDLHVDQUF1Qyw4QkFBOEIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsbUJBQW1CLCtCQUErQixHQUFHLGdCQUFnQix5Q0FBeUMseUNBQXlDLDhCQUE4QixrQkFBa0Isd0JBQXdCLDRCQUE0QixvQkFBb0IsK0JBQStCLEdBQUcsWUFBWSx1QkFBdUIsK0NBQStDLGlCQUFpQixrQkFBa0IsR0FBRyxZQUFZLHVCQUF1QiwyQ0FBMkMsaUJBQWlCLGtCQUFrQixrQkFBa0IsMkJBQTJCLGtDQUFrQyx3QkFBd0Isa0JBQWtCLHFCQUFxQixHQUFHLHdCQUF3QixpQkFBaUIsa0JBQWtCLGlEQUFpRCx1QkFBdUIsdUJBQXVCLGtCQUFrQixxQkFBcUIsR0FBRyxVQUFVLG9CQUFvQiw0QkFBNEIsdUJBQXVCLHFCQUFxQix3QkFBd0Isb0JBQW9CLEdBQUcsZ0JBQWdCLHlDQUF5QyxHQUFHLHNCQUFzQixpQkFBaUIsc0JBQXNCLGlCQUFpQixpQkFBaUIsa0JBQWtCLG1DQUFtQyxHQUFHLFlBQVksaUJBQWlCLHdCQUF3QixrQkFBa0IsYUFBYSxHQUFHLGlCQUFpQixpQkFBaUIsdUJBQXVCLHlDQUF5Qyx1QkFBdUIsR0FBRyxtQkFBbUIsb0NBQW9DLG1CQUFtQixvQ0FBb0MsbUJBQW1CLG9DQUFvQyxtQkFBbUIsMEJBQTBCLHNCQUFzQiwwQkFBMEIsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxnQ0FBZ0MsbUNBQW1DLGdDQUFnQywyQkFBMkIsMEdBQTBHLEdBQUcsMEJBQTBCLGdDQUFnQyw2QkFBNkIsd0JBQXdCLEdBQUcsVUFBVSxpQkFBaUIsR0FBRyxhQUFhLGtCQUFrQixrQkFBa0Isd0JBQXdCLGlCQUFpQixpQkFBaUIsR0FBRyxnQkFBZ0IscUJBQXFCLGlCQUFpQixzQ0FBc0MsNkJBQTZCLHNCQUFzQixtQkFBbUIsR0FBRyxjQUFjLGlCQUFpQixpQkFBaUIsdUJBQXVCLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLGtCQUFrQixtQ0FBbUMsR0FBRyxxQkFBcUIsdUJBQXVCLEdBQUcsZ0JBQWdCLDBCQUEwQixpQkFBaUIsa0JBQWtCLGtCQUFrQiw0Q0FBNEMsR0FBRyxhQUFhLHlDQUF5QyxnQkFBZ0IsaUJBQWlCLDhDQUE4Qyw2Q0FBNkMsaUJBQWlCLEdBQUcsb0JBQW9CLGdEQUFnRCxHQUFHLG1CQUFtQiwrQ0FBK0MsR0FBRyw2QkFBNkIseUNBQXlDLG9CQUFvQixHQUFHLFdBQVcsc0NBQXNDLHNDQUFzQyxvQkFBb0IsR0FBRyxlQUFlLHVDQUF1Qyx1Q0FBdUMsOEJBQThCLGtCQUFrQix3QkFBd0IsNEJBQTRCLG1CQUFtQiwrQkFBK0IsR0FBRyxnQkFBZ0IseUNBQXlDLHlDQUF5Qyw4QkFBOEIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLCtCQUErQixHQUFHLFlBQVksdUJBQXVCLCtDQUErQyxpQkFBaUIsa0JBQWtCLEdBQUcsWUFBWSx1QkFBdUIsMkNBQTJDLGlCQUFpQixrQkFBa0Isa0JBQWtCLDJCQUEyQixrQ0FBa0Msd0JBQXdCLGtCQUFrQixxQkFBcUIsR0FBRyx3QkFBd0IsaUJBQWlCLGtCQUFrQixpREFBaUQsdUJBQXVCLHVCQUF1QixrQkFBa0IscUJBQXFCLEdBQUcsVUFBVSxvQkFBb0IsNEJBQTRCLHVCQUF1QixxQkFBcUIsd0JBQXdCLG9CQUFvQixHQUFHLGdCQUFnQix5Q0FBeUMsR0FBRyxzQkFBc0IsaUJBQWlCLHNCQUFzQixpQkFBaUIsaUJBQWlCLGtCQUFrQixtQ0FBbUMsR0FBRyxZQUFZLGlCQUFpQix3QkFBd0Isa0JBQWtCLGFBQWEsR0FBRyxpQkFBaUIsaUJBQWlCLHVCQUF1Qix5Q0FBeUMsdUJBQXVCLEdBQUcsbUJBQW1CLG9DQUFvQyxtQkFBbUIsb0NBQW9DLG1CQUFtQixvQ0FBb0MsbUJBQW1CLDBCQUEwQixzQkFBc0IsMEJBQTBCLEdBQUcsbUJBQW1CO0FBQ3BpUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNeUYsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtFQUNqQixJQUFNZixJQUFJLEdBQUcsSUFBSXpFLDZDQUFKLEVBQWI7RUFDQXlFLElBQUksQ0FBQ2dCLFlBQUw7QUFDRCxDQUhEOztBQUtBRCxJQUFJLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9jb21wdXRlci1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3ZpZXdzLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL3Jlc2V0LmNzcz9lZGUwIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuXG5jbGFzcyBDb21wdXRlclBsYXllciBleHRlbmRzIFBsYXllciB7XG4gIHJhbmRvbUF0dGFja0VuZW15ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvb3JkcyA9IFtcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICBdO1xuICAgIGxldCBoaXQ7XG4gICAgdHJ5IHtcbiAgICAgIGhpdCA9IHRoaXMuYXR0YWNrRW5lbXkoY29vcmRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgPT09ICdZb3UgY2Fubm90IGF0dGFjayB0aGUgc2FtZSBwbGFjZSB0d2ljZScpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tQXR0YWNrRW5lbXkoKTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICByZXR1cm4geyBjb29yZHMsIGhpdCB9O1xuICB9O1xuXG4gIGF0dGFja0Nvcm5lciA9ICgpID0+IHsgLy8gdG9kbzogcmVtb3ZlXG4gICAgY29uc3QgY29vcmRzID0gWzksIDldO1xuICAgIGNvbnN0IGhpdCA9IHRoaXMuYXR0YWNrRW5lbXkoY29vcmRzKTtcbiAgICByZXR1cm4geyBjb29yZHMsIGhpdCB9O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wdXRlclBsYXllcjtcbiIsIi8vIGJvYXJkIG9iamVjdCBmb3IgcGxhY2luZyBzaGlwc1xuLy8gYm9hcmQgb2JqZWN0IGZvciBwbGFjaW5nIGhpdHNcbi8vIGZ1bmN0aW9uIGZvciBwbGFjaW5nIHNoaXBzXG4vLyBmdW5jdGlvbiBmb3IgcGxhY2luZyBoaXRzXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkUGxhY2VzID0gW1xuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIF07XG4gICAgdGhpcy5ib2FyZEhpdHMgPSBbXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgXTtcbiAgICB0aGlzLmFsbFNoaXBzSW5mbyA9IFtdO1xuICB9XG5cbiAgI3BsYWNlQmxhc3RpbmdBcmVhID0gKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uLCBpKSA9PiB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmIChpID09PSBjb29yZFsxXSAmJiBpID4gMCkge1xuICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdXVtpIC0gMV0gPSAtMTtcbiAgICAgICAgaWYgKGNvb3JkWzBdID4gMCkge1xuICAgICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF0gLSAxXVtpIC0gMV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmRbMF0gPCA5KSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tjb29yZFswXSArIDFdW2kgLSAxXSA9IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb29yZFswXSA+IDApIHtcbiAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tjb29yZFswXSAtIDFdW2ldID0gLTE7XG4gICAgICB9XG4gICAgICBpZiAoY29vcmRbMF0gPCA5KSB7XG4gICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF0gKyAxXVtpXSA9IC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA9PT0gY29vcmRbMV0gKyBsZW5ndGggLSAxICYmIGkgPCA5KSB7XG4gICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF1dW2kgKyAxXSA9IC0xO1xuICAgICAgICBpZiAoY29vcmRbMF0gPiAwKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tjb29yZFswXSAtIDFdW2kgKyAxXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZFswXSA8IDkpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdICsgMV1baSArIDFdID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmIChpID09PSBjb29yZFswXSAmJiBpID4gMCkge1xuICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2kgLSAxXVtjb29yZFsxXV0gPSAtMTtcbiAgICAgICAgaWYgKGNvb3JkWzFdID4gMCkge1xuICAgICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbaSAtIDFdW2Nvb3JkWzFdIC0gMV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmRbMV0gPCA5KSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tpIC0gMV1bY29vcmRbMV0gKyAxXSA9IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb29yZFsxXSA+IDApIHtcbiAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tpXVtjb29yZFsxXSAtIDFdID0gLTE7XG4gICAgICB9XG4gICAgICBpZiAoY29vcmRbMV0gPCA5KSB7XG4gICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbaV1bY29vcmRbMV0gKyAxXSA9IC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA9PT0gY29vcmRbMF0gKyBsZW5ndGggLSAxICYmIGkgPCA5KSB7XG4gICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbaSArIDFdW2Nvb3JkWzFdXSA9IC0xO1xuICAgICAgICBpZiAoY29vcmRbMV0gPiAwKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tpICsgMV1bY29vcmRbMV0gLSAxXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZFsxXSA8IDkpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2kgKyAxXVtjb29yZFsxXSArIDFdID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcGxhY2VTaGlwID0gKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgY29uc3QgaWQgPSB0aGlzLmFsbFNoaXBzSW5mby5sZW5ndGggKyAxO1xuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmIChjb29yZFsxXSArIGxlbmd0aCAtIDEgPiA5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBwbGFjZSBzaGlwIG91dHNpZGUgdGhlIGJvYXJkJyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBjb29yZFsxXTsgaSA8IGNvb3JkWzFdICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF1dW2ldICE9PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IHBsYWNlIGEgc2hpcCBvdmVyIGFuIGV4aXN0aW5nIHNoaXAgb3IgYmxhc3RpbmcgYXJlYScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tjb29yZFswXV1baV0gPSBpZDtcbiAgICAgICAgdGhpcy4jcGxhY2VCbGFzdGluZ0FyZWEoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24sIGkpO1xuXG4gICAgICAgIGNvb3Jkcy5wdXNoKFtjb29yZFswXSwgaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKGNvb3JkWzBdICsgbGVuZ3RoIC0gMSA+IDkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IHBsYWNlIHNoaXAgb3V0c2lkZSB0aGUgYm9hcmQnKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzBdOyBpIDwgY29vcmRbMF0gKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFBsYWNlc1tpXVtjb29yZFsxXV0gIT09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgcGxhY2UgYSBzaGlwIG92ZXIgYW4gZXhpc3Rpbmcgc2hpcCBvciBibGFzdGluZyBhcmVhJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2ldW2Nvb3JkWzFdXSA9IGlkO1xuICAgICAgICB0aGlzLiNwbGFjZUJsYXN0aW5nQXJlYShjb29yZCwgbGVuZ3RoLCBvcmllbnRhdGlvbiwgaSk7XG5cbiAgICAgICAgY29vcmRzLnB1c2goW2ksIGNvb3JkWzFdXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hbGxTaGlwc0luZm8ucHVzaCh7IGlkLCBzaGlwLCBjb29yZHMgfSk7XG4gIH07XG5cbiAgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIGNvbnN0IGhpdCA9IHRoaXMuYm9hcmRIaXRzW2Nvb3JkWzBdXVtjb29yZFsxXV07XG4gICAgaWYgKGhpdCAhPT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IGF0dGFjayB0aGUgc2FtZSBwbGFjZSB0d2ljZScpO1xuICAgIH1cblxuICAgIGNvbnN0IGlkID0gdGhpcy5ib2FyZFBsYWNlc1tjb29yZFswXV1bY29vcmRbMV1dO1xuICAgIGlmIChpZCA+IDApIHtcbiAgICAgIGNvbnN0IHNoaXBJbmZvID0gdGhpcy5hbGxTaGlwc0luZm8uZmluZCgocykgPT4gcy5pZCA9PT0gaWQpO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBzaGlwSW5mby5jb29yZHMuZmluZEluZGV4KFxuICAgICAgICAoZWwpID0+IEpTT04uc3RyaW5naWZ5KGVsKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29vcmQpLFxuICAgICAgKTtcbiAgICAgIHNoaXBJbmZvLnNoaXAuaGl0KHBvc2l0aW9uKTtcbiAgICAgIHRoaXMuYm9hcmRIaXRzW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSBpZDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmJvYXJkSGl0c1tjb29yZFswXV1bY29vcmRbMV1dID0gLTE7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc3Vua0NvdW50ID0gMDtcbiAgICB0aGlzLmFsbFNoaXBzSW5mby5mb3JFYWNoKChpbmZvKSA9PiB7XG4gICAgICBpZiAoaW5mby5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHN1bmtDb3VudCArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdW5rQ291bnQgPT09IHRoaXMuYWxsU2hpcHNJbmZvLmxlbmd0aDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZW5lbXlHYW1lYm9hcmQpIHtcbiAgICB0aGlzLmVuZW15R2FtZWJvYXJkID0gZW5lbXlHYW1lYm9hcmQ7XG4gIH1cblxuICBhdHRhY2tFbmVteSA9IChjb29yZCkgPT4gdGhpcy5lbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiLy8gc2hpcExlbmd0aCwgaGl0KCksIGlzU3VuaygpXG5jbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmNvbnN0cnVjdG9yLnNldExlbmd0aChsZW5ndGgpO1xuICAgIHRoaXMucG9zaXRpb25zID0gQXJyYXkodGhpcy5sZW5ndGgpLmZpbGwoMCk7XG4gIH1cblxuICBzdGF0aWMgc2V0TGVuZ3RoID0gKGxlbmd0aCkgPT4ge1xuICAgIGlmIChsZW5ndGggPCAxKSB7XG4gICAgICB0aHJvdyBFcnJvcignU2hpcCBsZW5ndGggbXVzdCBiZSA+IDAnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcblxuICBoaXQgPSAocG9zKSA9PiB7XG4gICAgdGhpcy5wb3NpdGlvbnNbcG9zXSA9IDE7XG4gIH07XG5cbiAgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5wb3NpdGlvbnMuaW5jbHVkZXMoMCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZmFjdG9yaWVzL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vZmFjdG9yaWVzL3BsYXllcic7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi9mYWN0b3JpZXMvY29tcHV0ZXItcGxheWVyJztcbmltcG9ydCB2aWV3cyBmcm9tICcuL3ZpZXdzJztcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyR2FtZWJvYXJkID0gbnVsbDtcbiAgICB0aGlzLmNvbXB1dGVyR2FtZWJvYXJkID0gbnVsbDtcbiAgICB0aGlzLnBsYXllciA9IG51bGw7XG4gICAgdGhpcy5jb21wdXRlciA9IG51bGw7XG4gICAgdGhpcy5wbGF5ZXJTaGlwc1Byb3BzID0gW1xuICAgICAgeyBjb29yZDogWzksIDldLCBsZW5ndGg6IDEsIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfSxcbiAgICAgIHsgY29vcmQ6IFswLCA5XSwgbGVuZ3RoOiAxLCBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnIH0sXG4gICAgICB7IGNvb3JkOiBbMCwgMF0sIGxlbmd0aDogNCwgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB9LFxuICAgICAgeyBjb29yZDogWzAsIDVdLCBsZW5ndGg6IDMsIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfSxcbiAgICAgIHsgY29vcmQ6IFszLCA0XSwgbGVuZ3RoOiAzLCBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyB9LFxuICAgICAgeyBjb29yZDogWzgsIDBdLCBsZW5ndGg6IDIsIG9yaWVudGF0aW9uOiAndmVydGljYWwnIH0sXG4gICAgICB7IGNvb3JkOiBbOCwgMl0sIGxlbmd0aDogMiwgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcgfSxcbiAgICAgIHsgY29vcmQ6IFs3LCA3XSwgbGVuZ3RoOiAyLCBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyB9LFxuICAgICAgeyBjb29yZDogWzMsIDBdLCBsZW5ndGg6IDEsIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfSxcbiAgICAgIHsgY29vcmQ6IFszLCAyXSwgbGVuZ3RoOiAxLCBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnIH0sXG4gICAgXTtcbiAgfVxuXG4gIHBsYWNlUGxheWVyU2hpcHMgPSAoKSA9PiB7XG4gICAgdGhpcy5wbGF5ZXJTaGlwc1Byb3BzLmZvckVhY2goKHNoaXBQcm9wcykgPT4ge1xuICAgICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICBzaGlwUHJvcHMuY29vcmQsXG4gICAgICAgIHNoaXBQcm9wcy5sZW5ndGgsXG4gICAgICAgIHNoaXBQcm9wcy5vcmllbnRhdGlvbixcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHJlcGxhY2VDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFswLCA1XSwgMywgJ2hvcml6b250YWwnKTtcbiAgICB0aGlzLmNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcChbMywgNF0sIDMsICd2ZXJ0aWNhbCcpO1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFs4LCAwXSwgMiwgJ3ZlcnRpY2FsJyk7XG4gICAgdGhpcy5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoWzgsIDJdLCAyLCAndmVydGljYWwnKTtcbiAgICB0aGlzLmNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcChbNywgN10sIDIsICd2ZXJ0aWNhbCcpO1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFswLCA5XSwgMSwgJ2hvcml6b250YWwnKTtcbiAgICB0aGlzLmNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcChbMywgMF0sIDEsICdob3Jpem9udGFsJyk7XG4gICAgdGhpcy5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoWzAsIDBdLCA0LCAnaG9yaXpvbnRhbCcpO1xuXG4gICAgdGhpcy5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoWzMsIDJdLCAxLCAnaG9yaXpvbnRhbCcpO1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFs5LCA5XSwgMSwgJ2hvcml6b250YWwnKTtcbiAgfTtcblxuICByYW5kb21QbGFjZVNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aHMgPSBbNCwgMywgMywgMiwgMiwgMiwgMSwgMSwgMSwgMV07XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXTtcblxuICAgIGNvbnN0IHJldHJ5ID0gKGxlbmd0aCkgPT4ge1xuICAgICAgY29uc3QgY29vcmRzID0gW1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgIF07XG4gICAgICBjb25zdCBiaW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcy5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uW2Jpbl0pO1xuXG4gICAgICAgIHRoaXMucGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcChjb29yZHMsIGxlbmd0aCwgb3JpZW50YXRpb25bYmluXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gJ1lvdSBjYW5ub3QgcGxhY2Ugc2hpcCBvdXRzaWRlIHRoZSBib2FyZCdcbiAgICAgICAgfHwgZXJyb3IubWVzc2FnZSA9PT0gJ1lvdSBjYW5ub3QgcGxhY2UgYSBzaGlwIG92ZXIgYW4gZXhpc3Rpbmcgc2hpcCBvciBibGFzdGluZyBhcmVhJykge1xuICAgICAgICAgIHJldHJ5KGxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgpID0+IHJldHJ5KGxlbmd0aCkpO1xuICB9O1xuXG4gIHNldFVwTmV3R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLnBsYXllckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLmNvbXB1dGVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQpO1xuICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIodGhpcy5wbGF5ZXJHYW1lYm9hcmQpO1xuXG4gICAgdGhpcy5wbGFjZVBsYXllclNoaXBzKCk7XG4gICAgdGhpcy5wcmVwbGFjZUNvbXB1dGVyU2hpcHMoKTsgLy8gdG9kbzogaW1wbGVtZW50IHBsYXllciBndWkgYW5kIGF1dG8gcGxhY2VtZW50IGZvciBjb21wdXRlclxuICAgIC8vIHRoaXMucmFuZG9tUGxhY2VTaGlwcygpO1xuICAgIHZpZXdzLmRpc3BsYXlCb2FyZHMoKTtcblxuICAgIGNvbnN0IHBsYXllclNoaXBzQ29vcmRzID0gdGhpcy5wbGF5ZXJHYW1lYm9hcmQuYWxsU2hpcHNJbmZvLm1hcChcbiAgICAgIChpbmZvKSA9PiBpbmZvLmNvb3JkcyxcbiAgICApO1xuICAgIHZpZXdzLmRpc3BsYXlTaGlwcyhwbGF5ZXJTaGlwc0Nvb3JkcywgJ3BsYXllcicpO1xuICAgIHZpZXdzLmxpc3RlbkZvckF0dGFja3ModGhpcyk7XG4gIH07XG5cbiAgaXNHYW1lT3ZlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5jb21wdXRlckdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIHsgZ2FtZW92ZXI6IHRydWUsIHdpbm5lcjogJ3BsYXllcicgfTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGF5ZXJHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IGdhbWVvdmVyOiB0cnVlLCB3aW5uZXI6ICdjb21wdXRlcicgfTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnYW1lb3ZlcjogZmFsc2UsIHdpbm5lcjogbnVsbCB9O1xuICB9O1xuXG4gIHJ1bkdhbWVMb29wID0gKHBsYXllckNvb3JkcykgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyVHVybiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gdGhpcy5jb21wdXRlci5yYW5kb21BdHRhY2tFbmVteSgpO1xuICAgICAgaWYgKGNvbXB1dGVyQXR0YWNrLmhpdCkge1xuICAgICAgICB2aWV3cy5oaXRTcXVhcmUoY29tcHV0ZXJBdHRhY2suY29vcmRzLCAncGxheWVyJywgdHJ1ZSk7XG4gICAgICAgIHZpZXdzLmRpc3BsYXlTY29yZSh0aGlzLnBsYXllckdhbWVib2FyZCwgJ3BsYXllcicpO1xuICAgICAgICB2aWV3cy5kaXNhYmxlQ2xpY2tzKCk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5pc0dhbWVPdmVyKCk7XG4gICAgICAgIGlmIChyZXN1bHQuZ2FtZW92ZXIgJiYgcmVzdWx0Lndpbm5lciA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgIHZpZXdzLnNob3dHYW1lb3Zlck1lc3NhZ2UocmVzdWx0Lndpbm5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb21wdXRlclR1cm4oKTtcbiAgICAgICAgICAgIHZpZXdzLmVuYWJsZUNsaWNrcygpO1xuICAgICAgICAgIH0sIDgwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmlld3MuaGl0U3F1YXJlKGNvbXB1dGVyQXR0YWNrLmNvb3JkcywgJ3BsYXllcicsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxheWVyVHVybiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBsYXllckF0dGFjayA9IHRoaXMucGxheWVyLmF0dGFja0VuZW15KHBsYXllckNvb3Jkcyk7XG4gICAgICBpZiAocGxheWVyQXR0YWNrKSB7XG4gICAgICAgIHZpZXdzLmhpdFNxdWFyZShwbGF5ZXJDb29yZHMsICdjb21wdXRlcicsIHRydWUpO1xuICAgICAgICB2aWV3cy5kaXNwbGF5U2NvcmUodGhpcy5wbGF5ZXJHYW1lYm9hcmQsICdwbGF5ZXInKTtcbiAgICAgICAgdmlld3MuZGlzcGxheVNjb3JlKHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQsICdjb21wdXRlcicpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaXNHYW1lT3ZlcigpO1xuICAgICAgICBpZiAocmVzdWx0LmdhbWVvdmVyICYmIHJlc3VsdC53aW5uZXIgPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgdmlld3Muc2hvd0dhbWVvdmVyTWVzc2FnZShyZXN1bHQud2lubmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld3MuaGl0U3F1YXJlKHBsYXllckNvb3JkcywgJ2NvbXB1dGVyJywgZmFsc2UpO1xuICAgICAgICB2aWV3cy5kaXNhYmxlQ2xpY2tzKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbXB1dGVyVHVybigpO1xuICAgICAgICAgIHZpZXdzLmVuYWJsZUNsaWNrcygpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBwbGF5ZXJUdXJuKCk7XG5cbiAgICB2aWV3cy5kaXNwbGF5U2NvcmUodGhpcy5wbGF5ZXJHYW1lYm9hcmQsICdwbGF5ZXInKTtcbiAgICB2aWV3cy5kaXNwbGF5U2NvcmUodGhpcy5jb21wdXRlckdhbWVib2FyZCwgJ2NvbXB1dGVyJyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjb25zdCB2aWV3cyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUtc3F1YXJlJyk7XG4gICAgICBpZiAocGxheWVyID09PSAncGxheWVyJykgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1zcXVhcmUnKTtcbiAgICAgIGlmIChpID49IDkwKSBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlLWJvdHRvbScpO1xuICAgICAgaWYgKChpIC0gOSkgJSAxMCA9PT0gMCkgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZS1yaWdodCcpO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnY29vcmRzJywgU3RyaW5nKGkpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgZ2FtZWJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUJvYXJkcyA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcy1jb250YWluZXInKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBwbGF5ZXJHYW1lQm9hcmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwbGF5ZXJHYW1lQm9hcmROYW1lLnRleHRDb250ZW50ID0gJ1lvdXIgYm9hcmQnO1xuICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGNyZWF0ZUJvYXJkKCdwbGF5ZXInKTtcbiAgICBwbGF5ZXJHYW1lYm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyLWdhbWVib2FyZCcpO1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJHYW1lQm9hcmROYW1lKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyR2FtZWJvYXJkKTtcblxuICAgIGNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29tcHV0ZXJHYW1lQm9hcmROYW1lLnRleHRDb250ZW50ID0gXCJDb21wdXRlcidzIGJvYXJkXCI7XG4gICAgY29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBjcmVhdGVCb2FyZCgnY29tcHV0ZXInKTtcbiAgICBjb21wdXRlckdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1nYW1lYm9hcmQnKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcHV0ZXJHYW1lQm9hcmROYW1lKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcHV0ZXJHYW1lQm9hcmQpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlTaGlwcyA9IChhbGxTaGlwc0Nvb3JkcywgcGxheWVyKSA9PiB7XG4gICAgYWxsU2hpcHNDb29yZHMuZm9yRWFjaCgoc2hpcENvb3JkcykgPT4ge1xuICAgICAgc2hpcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBjb29yZDtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGxheWVyfS1zcXVhcmVbY29vcmRzPVwiJHt4fSR7eX1cIl1gKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlTY29yZSA9IChnYW1lYm9hcmQsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NvcmUuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXJ9LXNjb3JlYCk7XG4gICAgc2NvcmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcblxuICAgIGNvbnN0IHNoaXBzSW5mbyA9IGdhbWVib2FyZC5hbGxTaGlwc0luZm8uc29ydChcbiAgICAgIChhLCBiKSA9PiBiLnNoaXAubGVuZ3RoIC0gYS5zaGlwLmxlbmd0aCxcbiAgICApO1xuXG4gICAgc2hpcHNJbmZvLmZvckVhY2goKChpbmZvKSA9PiB7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLXNoaXAnKTtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChgc2NvcmUtc2hpcC0ke2luZm8uc2hpcC5sZW5ndGh9YCk7XG4gICAgICBpZiAoaW5mby5zaGlwLmlzU3VuaygpKSBzaGlwLmNsYXNzTGlzdC5hZGQoJ3Njb3JlLXNoaXAtc3VuaycpO1xuICAgICAgc2NvcmUuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgfSkpO1xuXG4gICAgY29uc3Qgb2xkU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJ9LXNjb3JlYCk7XG4gICAgY29uc3Qgc2NvcmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtY29udGFpbmVyJyk7XG4gICAgc2NvcmVDb250YWluZXIucmVwbGFjZUNoaWxkKHNjb3JlLCBvbGRTY29yZSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNjb3JlQ29udGFpbmVyKTtcbiAgfTtcblxuICBjb25zdCBzdGFydE5ld0dhbWUgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dHYW1lb3Zlck1lc3NhZ2UgPSAod2lubmVyKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuXG4gICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IHdpbm5lciA9PT0gJ3BsYXllcicgPyAnWW91IHdpbiEnIDogJ1lvdSBsb3N0ISc7XG4gICAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1lc3NhZ2VDb250YWluZXIpO1xuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdTdGFydCBuZXcgZ2FtZSc7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnROZXdHYW1lKTtcblxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMtY29udGFpbmVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIH07XG5cbiAgY29uc3QgbGlzdGVuRm9yQXR0YWNrcyA9IChnYW1lKSA9PiB7XG4gICAgY29uc3QgY29tcHV0ZXJTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWNrYWJsZS1zcXVhcmUnKTtcblxuICAgIGNvbnN0IHBsYXllckF0dGFjayA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckF0dGFjayk7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2FibGUtc3F1YXJlJyk7XG5cbiAgICAgIGNvbnN0IFt4LCB5XSA9IFtcbiAgICAgICAgTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY29vcmRzJylbMF0pLFxuICAgICAgICBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjb29yZHMnKVsxXSksXG4gICAgICBdO1xuXG4gICAgICBnYW1lLnJ1bkdhbWVMb29wKFt4LCB5XSk7XG4gICAgfTtcblxuICAgIGNvbXB1dGVyU3F1YXJlcy5mb3JFYWNoKChzcXIpID0+IHtcbiAgICAgIHNxci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXllckF0dGFjayk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGl0U3F1YXJlID0gKGNvb3Jkcywgb3Bwb25lbnQsIGhpdCkgPT4ge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7b3Bwb25lbnR9LWdhbWVib2FyZCBbY29vcmRzPVwiJHtjb29yZHNbMF19JHtjb29yZHNbMV19XCJdYCxcbiAgICApO1xuICAgIGlmIChoaXQpIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaXQtc2hpcCcpO1xuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaWNvbmlmeScpO1xuICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicsICdtZGktY2xvc2UnKTtcbiAgICAgIHNxdWFyZS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3Mtc2hpcCcpO1xuICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaWNvbmlmeScpO1xuICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicsICdtZGktY2lyY2xlJyk7XG4gICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc2FibGVDbGlja3MgPSAoKSA9PiB7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3Zlci5jbGFzc0xpc3QuYWRkKCdjb3ZlcicpO1xuXG4gICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItZ2FtZWJvYXJkJyk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoY292ZXIpO1xuICB9O1xuXG4gIGNvbnN0IGVuYWJsZUNsaWNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlcicpO1xuICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWdhbWVib2FyZCcpO1xuXG4gICAgY29tcHV0ZXJHYW1lYm9hcmQucmVtb3ZlQ2hpbGQoY292ZXIpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheUJvYXJkcyxcbiAgICBkaXNwbGF5U2hpcHMsXG4gICAgZGlzcGxheVNjb3JlLFxuICAgIHNob3dHYW1lb3Zlck1lc3NhZ2UsXG4gICAgbGlzdGVuRm9yQXR0YWNrcyxcbiAgICBoaXRTcXVhcmUsXG4gICAgZGlzYWJsZUNsaWNrcyxcbiAgICBlbmFibGVDbGlja3MsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3cztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxuICBwYWRkaW5nOiAxMHB4IDIzcHggMCAycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjpkZWZhdWx0O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgcm93LWdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmdhbWVib2FyZC1uYW1lIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAyMzcsIDIzNyk7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNxdWFyZS1ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcXG59XFxuXFxuLnNxdWFyZS1yaWdodCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XFxufVxcblxcbi5jbGlja2FibGUtc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDI1NSwgMjAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYwLCA2MCwgNjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGl0LXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzIsIDcyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDcyLCA3Mik7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMzAwbXM7XFxufVxcblxcbi5taXNzLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMjIxLCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MiwgMjIxLCAyNTUpO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IC41ZW07XFxuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAzMDBtcztcXG59XFxuXFxuLmNvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjM1KTtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyNnB4O1xcbn1cXG5cXG4ubWVzc2FnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NjgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMzZweDtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxufVxcblxcbi5idG4ge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxufVxcblxcbi5zY29yZS1jb250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB3aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2NvcmUge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnNjb3JlLXNoaXAge1xcbiAgLS11bml0OiAxMHB4O1xcbiAgd2lkdGg6IHZhcigtLXVuaXQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uc2NvcmUtc2hpcC00IHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS11bml0KSAqIDQpXFxufVxcblxcbi5zY29yZS1zaGlwLTMge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXVuaXQpICogMylcXG59XFxuXFxuLnNjb3JlLXNoaXAtMiB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdW5pdCkgKiAyKVxcbn1cXG5cXG4uc2NvcmUtc2hpcC0xIHtcXG4gIGhlaWdodDogdmFyKC0tdW5pdClcXG59XFxuXFxuLnNjb3JlLXNoaXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixxR0FBcUc7QUFDdkc7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXG4gIHBhZGRpbmc6IDEwcHggMjNweCAwIDJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOmRlZmF1bHQ7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdhbWVib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICByb3ctZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLW5hbWUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIGF1dG8pO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzNywgMjM3KTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3F1YXJlLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xcbn1cXG5cXG4uc3F1YXJlLXJpZ2h0IHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcXG59XFxuXFxuLmNsaWNrYWJsZS1zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMjU1LCAyMDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjAsIDYwLCA2MCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaXQtc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3MiwgNzIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgNzIsIDcyKTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzZW07XFxuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAzMDBtcztcXG59XFxuXFxuLm1pc3Mtc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAyMjEsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgyLCAyMjEsIDI1NSk7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogLjVlbTtcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDMwMG1zO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MzUpO1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbi10b3A6IDI2cHg7XFxufVxcblxcbi5tZXNzYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2OCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzNnB4O1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDIzMiwgMjMyKTtcXG59XFxuXFxuLnNjb3JlLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zY29yZSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4uc2NvcmUtc2hpcCB7XFxuICAtLXVuaXQ6IDEwcHg7XFxuICB3aWR0aDogdmFyKC0tdW5pdCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5zY29yZS1zaGlwLTQge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXVuaXQpICogNClcXG59XFxuXFxuLnNjb3JlLXNoaXAtMyB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdW5pdCkgKiAzKVxcbn1cXG5cXG4uc2NvcmUtc2hpcC0yIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS11bml0KSAqIDIpXFxufVxcblxcbi5zY29yZS1zaGlwLTEge1xcbiAgaGVpZ2h0OiB2YXIoLS11bml0KVxcbn1cXG5cXG4uc2NvcmUtc2hpcC1zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgZ2FtZS5zZXRVcE5ld0dhbWUoKTtcbn07XG5cbm1haW4oKTtcbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJDb21wdXRlclBsYXllciIsImNvb3JkcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhpdCIsImF0dGFja0VuZW15IiwiZXJyb3IiLCJtZXNzYWdlIiwicmFuZG9tQXR0YWNrRW5lbXkiLCJTaGlwIiwiR2FtZWJvYXJkIiwiY29vcmQiLCJsZW5ndGgiLCJvcmllbnRhdGlvbiIsImkiLCJib2FyZFBsYWNlcyIsInNoaXAiLCJpZCIsImFsbFNoaXBzSW5mbyIsIkVycm9yIiwicHVzaCIsImJvYXJkSGl0cyIsInNoaXBJbmZvIiwiZmluZCIsInMiLCJwb3NpdGlvbiIsImZpbmRJbmRleCIsImVsIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1bmtDb3VudCIsImZvckVhY2giLCJpbmZvIiwiaXNTdW5rIiwiZW5lbXlHYW1lYm9hcmQiLCJyZWNlaXZlQXR0YWNrIiwicG9zIiwicG9zaXRpb25zIiwiaW5jbHVkZXMiLCJjb25zdHJ1Y3RvciIsInNldExlbmd0aCIsIkFycmF5IiwiZmlsbCIsIkNvbXB1dGVyIiwidmlld3MiLCJHYW1lIiwicGxheWVyU2hpcHNQcm9wcyIsInNoaXBQcm9wcyIsInBsYXllckdhbWVib2FyZCIsInBsYWNlU2hpcCIsImNvbXB1dGVyR2FtZWJvYXJkIiwibGVuZ3RocyIsInJldHJ5IiwiYmluIiwicGxheWVyIiwiY29tcHV0ZXIiLCJwbGFjZVBsYXllclNoaXBzIiwicHJlcGxhY2VDb21wdXRlclNoaXBzIiwiZGlzcGxheUJvYXJkcyIsInBsYXllclNoaXBzQ29vcmRzIiwibWFwIiwiZGlzcGxheVNoaXBzIiwibGlzdGVuRm9yQXR0YWNrcyIsImFsbFNoaXBzU3VuayIsImdhbWVvdmVyIiwid2lubmVyIiwicGxheWVyQ29vcmRzIiwiY29tcHV0ZXJUdXJuIiwiY29tcHV0ZXJBdHRhY2siLCJoaXRTcXVhcmUiLCJkaXNwbGF5U2NvcmUiLCJkaXNhYmxlQ2xpY2tzIiwicmVzdWx0IiwiaXNHYW1lT3ZlciIsInNob3dHYW1lb3Zlck1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwiZW5hYmxlQ2xpY2tzIiwicGxheWVyVHVybiIsInBsYXllckF0dGFjayIsImNyZWF0ZUJvYXJkIiwiZ2FtZWJvYXJkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3F1YXJlIiwic2V0QXR0cmlidXRlIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJhcHBlbmRDaGlsZCIsImdhbWVib2FyZENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJwbGF5ZXJHYW1lQm9hcmROYW1lIiwidGV4dENvbnRlbnQiLCJjb21wdXRlckdhbWVCb2FyZE5hbWUiLCJjb21wdXRlckdhbWVCb2FyZCIsImFsbFNoaXBzQ29vcmRzIiwic2hpcENvb3JkcyIsIngiLCJ5Iiwic2NvcmUiLCJzaGlwc0luZm8iLCJzb3J0IiwiYSIsImIiLCJvbGRTY29yZSIsInNjb3JlQ29udGFpbmVyIiwicmVwbGFjZUNoaWxkIiwiY29udGVudCIsInN0YXJ0TmV3R2FtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwibW9kYWwiLCJtZXNzYWdlQ29udGFpbmVyIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhbWUiLCJjb21wdXRlclNxdWFyZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsInRhcmdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJOdW1iZXIiLCJnZXRBdHRyaWJ1dGUiLCJydW5HYW1lTG9vcCIsInNxciIsIm9wcG9uZW50Iiwic3BhbiIsImNvdmVyIiwicmVtb3ZlQ2hpbGQiLCJtYWluIiwic2V0VXBOZXdHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==