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
    var ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](coord, length, orientation);
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
var Ship = /*#__PURE__*/_createClass(function Ship(coords, length, orientation) {
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

  this.coords = coords;
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

  _defineProperty(this, "placePlayerShips", function () {
    if (!localStorage.playerShipsProps) {
      // const playerShipsProps
      console.log(_this.playerGameboard);
    }

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

_defineProperty(Game, "randomPlaceShips", function (gameboard) {
  var lengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  var orientation = ['horizontal', 'vertical'];

  var retry = function retry(length) {
    var coords = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    var bin = Math.floor(Math.random() * 2);

    try {
      gameboard.placeShip(coords, length, orientation[bin]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBOztBQUVBLElBQU00RixJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBQ2pCLElBQU1mLElBQUksR0FBRyxJQUFJNUUsNkNBQUosRUFBYjtFQUNBNEUsSUFBSSxDQUFDZ0IsWUFBTDtBQUNELENBSEQ7O0FBS0FELElBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2NvbXB1dGVyLXBsYXllci5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvdmlld3MuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvcmVzZXQuY3NzP2VkZTAiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1wcm9qZWN0LWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmNsYXNzIENvbXB1dGVyUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgcmFuZG9tQXR0YWNrRW5lbXkgPSAoKSA9PiB7XG4gICAgY29uc3QgY29vcmRzID0gW1xuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgIF07XG4gICAgbGV0IGhpdDtcbiAgICB0cnkge1xuICAgICAgaGl0ID0gdGhpcy5hdHRhY2tFbmVteShjb29yZHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gJ1lvdSBjYW5ub3QgYXR0YWNrIHRoZSBzYW1lIHBsYWNlIHR3aWNlJykge1xuICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21BdHRhY2tFbmVteSgpO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHJldHVybiB7IGNvb3JkcywgaGl0IH07XG4gIH07XG5cbiAgYXR0YWNrQ29ybmVyID0gKCkgPT4geyAvLyB0b2RvOiByZW1vdmVcbiAgICBjb25zdCBjb29yZHMgPSBbOSwgOV07XG4gICAgY29uc3QgaGl0ID0gdGhpcy5hdHRhY2tFbmVteShjb29yZHMpO1xuICAgIHJldHVybiB7IGNvb3JkcywgaGl0IH07XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXB1dGVyUGxheWVyO1xuIiwiLy8gYm9hcmQgb2JqZWN0IGZvciBwbGFjaW5nIHNoaXBzXG4vLyBib2FyZCBvYmplY3QgZm9yIHBsYWNpbmcgaGl0c1xuLy8gZnVuY3Rpb24gZm9yIHBsYWNpbmcgc2hpcHNcbi8vIGZ1bmN0aW9uIGZvciBwbGFjaW5nIGhpdHNcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmRQbGFjZXMgPSBbXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgXTtcbiAgICB0aGlzLmJvYXJkSGl0cyA9IFtcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBdO1xuICAgIHRoaXMuYWxsU2hpcHNJbmZvID0gW107XG4gIH1cblxuICAjcGxhY2VCbGFzdGluZ0FyZWEgPSAoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24sIGkpID0+IHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKGkgPT09IGNvb3JkWzFdICYmIGkgPiAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF1dW2kgLSAxXSA9IC0xO1xuICAgICAgICBpZiAoY29vcmRbMF0gPiAwKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tjb29yZFswXSAtIDFdW2kgLSAxXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZFswXSA8IDkpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdICsgMV1baSAtIDFdID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvb3JkWzBdID4gMCkge1xuICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdIC0gMV1baV0gPSAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChjb29yZFswXSA8IDkpIHtcbiAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tjb29yZFswXSArIDFdW2ldID0gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChpID09PSBjb29yZFsxXSArIGxlbmd0aCAtIDEgJiYgaSA8IDkpIHtcbiAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tjb29yZFswXV1baSArIDFdID0gLTE7XG4gICAgICAgIGlmIChjb29yZFswXSA+IDApIHtcbiAgICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdIC0gMV1baSArIDFdID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3JkWzBdIDwgOSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF0gKyAxXVtpICsgMV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKGkgPT09IGNvb3JkWzBdICYmIGkgPiAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbaSAtIDFdW2Nvb3JkWzFdXSA9IC0xO1xuICAgICAgICBpZiAoY29vcmRbMV0gPiAwKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tpIC0gMV1bY29vcmRbMV0gLSAxXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZFsxXSA8IDkpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2kgLSAxXVtjb29yZFsxXSArIDFdID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvb3JkWzFdID4gMCkge1xuICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2ldW2Nvb3JkWzFdIC0gMV0gPSAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChjb29yZFsxXSA8IDkpIHtcbiAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tpXVtjb29yZFsxXSArIDFdID0gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChpID09PSBjb29yZFswXSArIGxlbmd0aCAtIDEgJiYgaSA8IDkpIHtcbiAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tpICsgMV1bY29vcmRbMV1dID0gLTE7XG4gICAgICAgIGlmIChjb29yZFsxXSA+IDApIHtcbiAgICAgICAgICB0aGlzLmJvYXJkUGxhY2VzW2kgKyAxXVtjb29yZFsxXSAtIDFdID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3JkWzFdIDwgOSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbaSArIDFdW2Nvb3JkWzFdICsgMV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwbGFjZVNoaXAgPSAoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pID0+IHtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgIGNvbnN0IGlkID0gdGhpcy5hbGxTaGlwc0luZm8ubGVuZ3RoICsgMTtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAoY29vcmRbMV0gKyBsZW5ndGggLSAxID4gOSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgcGxhY2Ugc2hpcCBvdXRzaWRlIHRoZSBib2FyZCcpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gY29vcmRbMV07IGkgPCBjb29yZFsxXSArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkUGxhY2VzW2Nvb3JkWzBdXVtpXSAhPT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBwbGFjZSBhIHNoaXAgb3ZlciBhbiBleGlzdGluZyBzaGlwIG9yIGJsYXN0aW5nIGFyZWEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF1dW2ldID0gaWQ7XG4gICAgICAgIHRoaXMuI3BsYWNlQmxhc3RpbmdBcmVhKGNvb3JkLCBsZW5ndGgsIG9yaWVudGF0aW9uLCBpKTtcblxuICAgICAgICBjb29yZHMucHVzaChbY29vcmRbMF0sIGldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmIChjb29yZFswXSArIGxlbmd0aCAtIDEgPiA5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBwbGFjZSBzaGlwIG91dHNpZGUgdGhlIGJvYXJkJyk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBjb29yZFswXTsgaSA8IGNvb3JkWzBdICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRQbGFjZXNbaV1bY29vcmRbMV1dICE9PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IHBsYWNlIGEgc2hpcCBvdmVyIGFuIGV4aXN0aW5nIHNoaXAgb3IgYmxhc3RpbmcgYXJlYScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib2FyZFBsYWNlc1tpXVtjb29yZFsxXV0gPSBpZDtcbiAgICAgICAgdGhpcy4jcGxhY2VCbGFzdGluZ0FyZWEoY29vcmQsIGxlbmd0aCwgb3JpZW50YXRpb24sIGkpO1xuXG4gICAgICAgIGNvb3Jkcy5wdXNoKFtpLCBjb29yZFsxXV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYWxsU2hpcHNJbmZvLnB1c2goeyBpZCwgc2hpcCwgY29vcmRzIH0pO1xuICB9O1xuXG4gIHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICBjb25zdCBoaXQgPSB0aGlzLmJvYXJkSGl0c1tjb29yZFswXV1bY29vcmRbMV1dO1xuICAgIGlmIChoaXQgIT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBhdHRhY2sgdGhlIHNhbWUgcGxhY2UgdHdpY2UnKTtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuYm9hcmRQbGFjZXNbY29vcmRbMF1dW2Nvb3JkWzFdXTtcbiAgICBpZiAoaWQgPiAwKSB7XG4gICAgICBjb25zdCBzaGlwSW5mbyA9IHRoaXMuYWxsU2hpcHNJbmZvLmZpbmQoKHMpID0+IHMuaWQgPT09IGlkKTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2hpcEluZm8uY29vcmRzLmZpbmRJbmRleChcbiAgICAgICAgKGVsKSA9PiBKU09OLnN0cmluZ2lmeShlbCkgPT09IEpTT04uc3RyaW5naWZ5KGNvb3JkKSxcbiAgICAgICk7XG4gICAgICBzaGlwSW5mby5zaGlwLmhpdChwb3NpdGlvbik7XG4gICAgICB0aGlzLmJvYXJkSGl0c1tjb29yZFswXV1bY29vcmRbMV1dID0gaWQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ib2FyZEhpdHNbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IC0xO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IHN1bmtDb3VudCA9IDA7XG4gICAgdGhpcy5hbGxTaGlwc0luZm8uZm9yRWFjaCgoaW5mbykgPT4ge1xuICAgICAgaWYgKGluZm8uc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBzdW5rQ291bnQgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3Vua0NvdW50ID09PSB0aGlzLmFsbFNoaXBzSW5mby5sZW5ndGg7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGVuZW15R2FtZWJvYXJkKSB7XG4gICAgdGhpcy5lbmVteUdhbWVib2FyZCA9IGVuZW15R2FtZWJvYXJkO1xuICB9XG5cbiAgYXR0YWNrRW5lbXkgPSAoY29vcmQpID0+IHRoaXMuZW5lbXlHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsIi8vIHNoaXBMZW5ndGgsIGhpdCgpLCBpc1N1bmsoKVxuY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5jb25zdHJ1Y3Rvci5zZXRMZW5ndGgobGVuZ3RoKTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgdGhpcy5wb3NpdGlvbnMgPSBBcnJheSh0aGlzLmxlbmd0aCkuZmlsbCgwKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRMZW5ndGggPSAobGVuZ3RoKSA9PiB7XG4gICAgaWYgKGxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93IEVycm9yKCdTaGlwIGxlbmd0aCBtdXN0IGJlID4gMCcpO1xuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9O1xuXG4gIGhpdCA9IChwb3MpID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uc1twb3NdID0gMTtcbiAgfTtcblxuICBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9ucy5pbmNsdWRlcygwKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9mYWN0b3JpZXMvZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9mYWN0b3JpZXMvcGxheWVyJztcbmltcG9ydCBDb21wdXRlciBmcm9tICcuL2ZhY3Rvcmllcy9jb21wdXRlci1wbGF5ZXInO1xuaW1wb3J0IHZpZXdzIGZyb20gJy4vdmlld3MnO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQgPSBudWxsO1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQgPSBudWxsO1xuICAgIHRoaXMucGxheWVyID0gbnVsbDtcbiAgICB0aGlzLmNvbXB1dGVyID0gbnVsbDtcbiAgICB0aGlzLnBsYXllclNoaXBzUHJvcHMgPSBbXG4gICAgICB7IGNvb3JkOiBbOSwgOV0sIGxlbmd0aDogMSwgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB9LFxuICAgICAgeyBjb29yZDogWzAsIDldLCBsZW5ndGg6IDEsIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfSxcbiAgICAgIHsgY29vcmQ6IFswLCAwXSwgbGVuZ3RoOiA0LCBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnIH0sXG4gICAgICB7IGNvb3JkOiBbMCwgNV0sIGxlbmd0aDogMywgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB9LFxuICAgICAgeyBjb29yZDogWzMsIDRdLCBsZW5ndGg6IDMsIG9yaWVudGF0aW9uOiAndmVydGljYWwnIH0sXG4gICAgICB7IGNvb3JkOiBbOCwgMF0sIGxlbmd0aDogMiwgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcgfSxcbiAgICAgIHsgY29vcmQ6IFs4LCAyXSwgbGVuZ3RoOiAyLCBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyB9LFxuICAgICAgeyBjb29yZDogWzcsIDddLCBsZW5ndGg6IDIsIG9yaWVudGF0aW9uOiAndmVydGljYWwnIH0sXG4gICAgICB7IGNvb3JkOiBbMywgMF0sIGxlbmd0aDogMSwgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB9LFxuICAgICAgeyBjb29yZDogWzMsIDJdLCBsZW5ndGg6IDEsIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfSxcbiAgICBdO1xuICB9XG5cbiAgc3RhdGljIHJhbmRvbVBsYWNlU2hpcHMgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RocyA9IFs0LCAzLCAzLCAyLCAyLCAyLCAxLCAxLCAxLCAxXTtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuXG4gICAgY29uc3QgcmV0cnkgPSAobGVuZ3RoKSA9PiB7XG4gICAgICBjb25zdCBjb29yZHMgPSBbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGJpbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvbltiaW5dKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAnWW91IGNhbm5vdCBwbGFjZSBzaGlwIG91dHNpZGUgdGhlIGJvYXJkJ1xuICAgICAgICB8fCBlcnJvci5tZXNzYWdlID09PSAnWW91IGNhbm5vdCBwbGFjZSBhIHNoaXAgb3ZlciBhbiBleGlzdGluZyBzaGlwIG9yIGJsYXN0aW5nIGFyZWEnKSB7XG4gICAgICAgICAgcmV0cnkobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBsZW5ndGhzLmZvckVhY2goKGxlbmd0aCkgPT4gcmV0cnkobGVuZ3RoKSk7XG4gIH07XG5cbiAgcGxhY2VQbGF5ZXJTaGlwcyA9ICgpID0+IHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5wbGF5ZXJTaGlwc1Byb3BzKSB7XG4gICAgICAvLyBjb25zdCBwbGF5ZXJTaGlwc1Byb3BzXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllckdhbWVib2FyZCk7XG4gICAgfVxuXG4gICAgdGhpcy5wbGF5ZXJTaGlwc1Byb3BzLmZvckVhY2goKHNoaXBQcm9wcykgPT4ge1xuICAgICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICBzaGlwUHJvcHMuY29vcmQsXG4gICAgICAgIHNoaXBQcm9wcy5sZW5ndGgsXG4gICAgICAgIHNoaXBQcm9wcy5vcmllbnRhdGlvbixcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHJlcGxhY2VDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFswLCA1XSwgMywgJ2hvcml6b250YWwnKTtcbiAgICB0aGlzLmNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcChbMywgNF0sIDMsICd2ZXJ0aWNhbCcpO1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFs4LCAwXSwgMiwgJ3ZlcnRpY2FsJyk7XG4gICAgdGhpcy5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoWzgsIDJdLCAyLCAndmVydGljYWwnKTtcbiAgICB0aGlzLmNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcChbNywgN10sIDIsICd2ZXJ0aWNhbCcpO1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFswLCA5XSwgMSwgJ2hvcml6b250YWwnKTtcbiAgICB0aGlzLmNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcChbMywgMF0sIDEsICdob3Jpem9udGFsJyk7XG4gICAgdGhpcy5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoWzAsIDBdLCA0LCAnaG9yaXpvbnRhbCcpO1xuXG4gICAgdGhpcy5jb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoWzMsIDJdLCAxLCAnaG9yaXpvbnRhbCcpO1xuICAgIHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKFs5LCA5XSwgMSwgJ2hvcml6b250YWwnKTtcbiAgfTtcblxuICBzZXRVcE5ld0dhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5jb21wdXRlckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNvbXB1dGVyR2FtZWJvYXJkKTtcbiAgICB0aGlzLmNvbXB1dGVyID0gbmV3IENvbXB1dGVyKHRoaXMucGxheWVyR2FtZWJvYXJkKTtcblxuICAgIHRoaXMucGxhY2VQbGF5ZXJTaGlwcygpO1xuICAgIHRoaXMucHJlcGxhY2VDb21wdXRlclNoaXBzKCk7IC8vIHRvZG86IGltcGxlbWVudCBwbGF5ZXIgZ3VpIGFuZCBhdXRvIHBsYWNlbWVudCBmb3IgY29tcHV0ZXJcbiAgICAvLyB0aGlzLnJhbmRvbVBsYWNlU2hpcHMoKTtcbiAgICB2aWV3cy5kaXNwbGF5Qm9hcmRzKCk7XG5cbiAgICBjb25zdCBwbGF5ZXJTaGlwc0Nvb3JkcyA9IHRoaXMucGxheWVyR2FtZWJvYXJkLmFsbFNoaXBzSW5mby5tYXAoXG4gICAgICAoaW5mbykgPT4gaW5mby5jb29yZHMsXG4gICAgKTtcbiAgICB2aWV3cy5kaXNwbGF5U2hpcHMocGxheWVyU2hpcHNDb29yZHMsICdwbGF5ZXInKTtcbiAgICB2aWV3cy5saXN0ZW5Gb3JBdHRhY2tzKHRoaXMpO1xuICB9O1xuXG4gIGlzR2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIHJldHVybiB7IGdhbWVvdmVyOiB0cnVlLCB3aW5uZXI6ICdwbGF5ZXInIH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGxheWVyR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICByZXR1cm4geyBnYW1lb3ZlcjogdHJ1ZSwgd2lubmVyOiAnY29tcHV0ZXInIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2FtZW92ZXI6IGZhbHNlLCB3aW5uZXI6IG51bGwgfTtcbiAgfTtcblxuICBydW5HYW1lTG9vcCA9IChwbGF5ZXJDb29yZHMpID0+IHtcbiAgICBjb25zdCBjb21wdXRlclR1cm4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb21wdXRlckF0dGFjayA9IHRoaXMuY29tcHV0ZXIucmFuZG9tQXR0YWNrRW5lbXkoKTtcbiAgICAgIGlmIChjb21wdXRlckF0dGFjay5oaXQpIHtcbiAgICAgICAgdmlld3MuaGl0U3F1YXJlKGNvbXB1dGVyQXR0YWNrLmNvb3JkcywgJ3BsYXllcicsIHRydWUpO1xuICAgICAgICB2aWV3cy5kaXNwbGF5U2NvcmUodGhpcy5wbGF5ZXJHYW1lYm9hcmQsICdwbGF5ZXInKTtcbiAgICAgICAgdmlld3MuZGlzYWJsZUNsaWNrcygpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaXNHYW1lT3ZlcigpO1xuICAgICAgICBpZiAocmVzdWx0LmdhbWVvdmVyICYmIHJlc3VsdC53aW5uZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICB2aWV3cy5zaG93R2FtZW92ZXJNZXNzYWdlKHJlc3VsdC53aW5uZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICB2aWV3cy5lbmFibGVDbGlja3MoKTtcbiAgICAgICAgICB9LCA4MDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZpZXdzLmhpdFNxdWFyZShjb21wdXRlckF0dGFjay5jb29yZHMsICdwbGF5ZXInLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSB0aGlzLnBsYXllci5hdHRhY2tFbmVteShwbGF5ZXJDb29yZHMpO1xuICAgICAgaWYgKHBsYXllckF0dGFjaykge1xuICAgICAgICB2aWV3cy5oaXRTcXVhcmUocGxheWVyQ29vcmRzLCAnY29tcHV0ZXInLCB0cnVlKTtcbiAgICAgICAgdmlld3MuZGlzcGxheVNjb3JlKHRoaXMucGxheWVyR2FtZWJvYXJkLCAncGxheWVyJyk7XG4gICAgICAgIHZpZXdzLmRpc3BsYXlTY29yZSh0aGlzLmNvbXB1dGVyR2FtZWJvYXJkLCAnY29tcHV0ZXInKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmlzR2FtZU92ZXIoKTtcbiAgICAgICAgaWYgKHJlc3VsdC5nYW1lb3ZlciAmJiByZXN1bHQud2lubmVyID09PSAncGxheWVyJykge1xuICAgICAgICAgIHZpZXdzLnNob3dHYW1lb3Zlck1lc3NhZ2UocmVzdWx0Lndpbm5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZXdzLmhpdFNxdWFyZShwbGF5ZXJDb29yZHMsICdjb21wdXRlcicsIGZhbHNlKTtcbiAgICAgICAgdmlld3MuZGlzYWJsZUNsaWNrcygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb21wdXRlclR1cm4oKTtcbiAgICAgICAgICB2aWV3cy5lbmFibGVDbGlja3MoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcGxheWVyVHVybigpO1xuXG4gICAgdmlld3MuZGlzcGxheVNjb3JlKHRoaXMucGxheWVyR2FtZWJvYXJkLCAncGxheWVyJyk7XG4gICAgdmlld3MuZGlzcGxheVNjb3JlKHRoaXMuY29tcHV0ZXJHYW1lYm9hcmQsICdjb21wdXRlcicpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiY29uc3Qgdmlld3MgPSAoKCkgPT4ge1xuICBjb25zdCBjcmVhdGVCb2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlLXNxdWFyZScpO1xuICAgICAgaWYgKHBsYXllciA9PT0gJ3BsYXllcicpIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItc3F1YXJlJyk7XG4gICAgICBpZiAoaSA+PSA5MCkgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZS1ib3R0b20nKTtcbiAgICAgIGlmICgoaSAtIDkpICUgMTAgPT09IDApIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUtcmlnaHQnKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2Nvb3JkcycsIFN0cmluZyhpKS5wYWRTdGFydCgyLCAnMCcpKTtcbiAgICAgIGdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlCb2FyZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMtY29udGFpbmVyJyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgcGxheWVyR2FtZUJvYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGxheWVyR2FtZUJvYXJkTmFtZS50ZXh0Q29udGVudCA9ICdZb3VyIGJvYXJkJztcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjcmVhdGVCb2FyZCgncGxheWVyJyk7XG4gICAgcGxheWVyR2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1nYW1lYm9hcmQnKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyR2FtZUJvYXJkTmFtZSk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckdhbWVib2FyZCk7XG5cbiAgICBjb25zdCBjb21wdXRlckdhbWVCb2FyZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbXB1dGVyR2FtZUJvYXJkTmFtZS50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXIncyBib2FyZFwiO1xuICAgIGNvbnN0IGNvbXB1dGVyR2FtZUJvYXJkID0gY3JlYXRlQm9hcmQoJ2NvbXB1dGVyJyk7XG4gICAgY29tcHV0ZXJHYW1lQm9hcmQuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItZ2FtZWJvYXJkJyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyR2FtZUJvYXJkTmFtZSk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyR2FtZUJvYXJkKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5U2hpcHMgPSAoYWxsU2hpcHNDb29yZHMsIHBsYXllcikgPT4ge1xuICAgIGFsbFNoaXBzQ29vcmRzLmZvckVhY2goKHNoaXBDb29yZHMpID0+IHtcbiAgICAgIHNoaXBDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gY29vcmQ7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BsYXllcn0tc3F1YXJlW2Nvb3Jkcz1cIiR7eH0ke3l9XCJdYCk7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5U2NvcmUgPSAoZ2FtZWJvYXJkLCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjb3JlLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyfS1zY29yZWApO1xuICAgIHNjb3JlLmNsYXNzTGlzdC5hZGQoJ3Njb3JlJyk7XG5cbiAgICBjb25zdCBzaGlwc0luZm8gPSBnYW1lYm9hcmQuYWxsU2hpcHNJbmZvLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYi5zaGlwLmxlbmd0aCAtIGEuc2hpcC5sZW5ndGgsXG4gICAgKTtcblxuICAgIHNoaXBzSW5mby5mb3JFYWNoKCgoaW5mbykgPT4ge1xuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzY29yZS1zaGlwJyk7XG4gICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoYHNjb3JlLXNoaXAtJHtpbmZvLnNoaXAubGVuZ3RofWApO1xuICAgICAgaWYgKGluZm8uc2hpcC5pc1N1bmsoKSkgc2hpcC5jbGFzc0xpc3QuYWRkKCdzY29yZS1zaGlwLXN1bmsnKTtcbiAgICAgIHNjb3JlLmFwcGVuZENoaWxkKHNoaXApO1xuICAgIH0pKTtcblxuICAgIGNvbnN0IG9sZFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGxheWVyfS1zY29yZWApO1xuICAgIGNvbnN0IHNjb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlLWNvbnRhaW5lcicpO1xuICAgIHNjb3JlQ29udGFpbmVyLnJlcGxhY2VDaGlsZChzY29yZSwgb2xkU2NvcmUpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzY29yZUNvbnRhaW5lcik7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnROZXdHYW1lID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBjb25zdCBzaG93R2FtZW92ZXJNZXNzYWdlID0gKHdpbm5lcikgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcblxuICAgIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSB3aW5uZXIgPT09ICdwbGF5ZXInID8gJ1lvdSB3aW4hJyA6ICdZb3UgbG9zdCEnO1xuICAgIG1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtZXNzYWdlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSAnU3RhcnQgbmV3IGdhbWUnO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSk7XG5cbiAgICBtb2RhbC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzLWNvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICB9O1xuXG4gIGNvbnN0IGxpc3RlbkZvckF0dGFja3MgPSAoZ2FtZSkgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGlja2FibGUtc3F1YXJlJyk7XG5cbiAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXJBdHRhY2spO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2thYmxlLXNxdWFyZScpO1xuXG4gICAgICBjb25zdCBbeCwgeV0gPSBbXG4gICAgICAgIE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2Nvb3JkcycpWzBdKSxcbiAgICAgICAgTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY29vcmRzJylbMV0pLFxuICAgICAgXTtcblxuICAgICAgZ2FtZS5ydW5HYW1lTG9vcChbeCwgeV0pO1xuICAgIH07XG5cbiAgICBjb21wdXRlclNxdWFyZXMuZm9yRWFjaCgoc3FyKSA9PiB7XG4gICAgICBzcXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXJBdHRhY2spO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhpdFNxdWFyZSA9IChjb29yZHMsIG9wcG9uZW50LCBoaXQpID0+IHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke29wcG9uZW50fS1nYW1lYm9hcmQgW2Nvb3Jkcz1cIiR7Y29vcmRzWzBdfSR7Y29vcmRzWzFdfVwiXWAsXG4gICAgKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0LXNoaXAnKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2ljb25pZnknKTtcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCAnbWRpLWNsb3NlJyk7XG4gICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdtaXNzLXNoaXAnKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2ljb25pZnknKTtcbiAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLWljb24nLCAnbWRpLWNpcmNsZScpO1xuICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNhYmxlQ2xpY2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY292ZXIuY2xhc3NMaXN0LmFkZCgnY292ZXInKTtcblxuICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWdhbWVib2FyZCcpO1xuICAgIGNvbXB1dGVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKGNvdmVyKTtcbiAgfTtcblxuICBjb25zdCBlbmFibGVDbGlja3MgPSAoKSA9PiB7XG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXInKTtcbiAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1nYW1lYm9hcmQnKTtcblxuICAgIGNvbXB1dGVyR2FtZWJvYXJkLnJlbW92ZUNoaWxkKGNvdmVyKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlCb2FyZHMsXG4gICAgZGlzcGxheVNoaXBzLFxuICAgIGRpc3BsYXlTY29yZSxcbiAgICBzaG93R2FtZW92ZXJNZXNzYWdlLFxuICAgIGxpc3RlbkZvckF0dGFja3MsXG4gICAgaGl0U3F1YXJlLFxuICAgIGRpc2FibGVDbGlja3MsXG4gICAgZW5hYmxlQ2xpY2tzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdmlld3M7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcXG4gIC1tb3otYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbiAgcGFkZGluZzogMTBweCAyM3B4IDAgMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6ZGVmYXVsdDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIHJvdy1nYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5nYW1lYm9hcmQtbmFtZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgYXV0byk7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjM3LCAyMzcpO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zcXVhcmUtYm90dG9tIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XFxufVxcblxcbi5zcXVhcmUtcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xcbn1cXG5cXG4uY2xpY2thYmxlLXNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAyNTUsIDIwMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MCwgNjAsIDYwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpdC1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDcyLCA3Mik7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCA3MiwgNzIpO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDMwMG1zO1xcbn1cXG5cXG4ubWlzcy1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDIyMSwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODIsIDIyMSwgMjU1KTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAuNWVtO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMzAwbXM7XFxufVxcblxcbi5jb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYzNSk7XFxuICB3aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjZweDtcXG59XFxuXFxuLm1lc3NhZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODY4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDM2cHg7XFxuICBmb250LXNpemU6IDEuNmVtO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xcbn1cXG5cXG4uc2NvcmUtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNjb3JlIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zY29yZS1zaGlwIHtcXG4gIC0tdW5pdDogMTBweDtcXG4gIHdpZHRoOiB2YXIoLS11bml0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnNjb3JlLXNoaXAtNCB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdW5pdCkgKiA0KVxcbn1cXG5cXG4uc2NvcmUtc2hpcC0zIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS11bml0KSAqIDMpXFxufVxcblxcbi5zY29yZS1zaGlwLTIge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXVuaXQpICogMilcXG59XFxuXFxuLnNjb3JlLXNoaXAtMSB7XFxuICBoZWlnaHQ6IHZhcigtLXVuaXQpXFxufVxcblxcbi5zY29yZS1zaGlwLXN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIscUdBQXFHO0FBQ3ZHOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlDQUF5QztFQUN6Qyx3Q0FBd0M7RUFDeEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxuICBwYWRkaW5nOiAxMHB4IDIzcHggMCAycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjpkZWZhdWx0O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB3aWR0aDogOTAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5nYW1lYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgcm93LWdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmdhbWVib2FyZC1uYW1lIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM3LCAyMzcsIDIzNyk7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNxdWFyZS1ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcXG59XFxuXFxuLnNxdWFyZS1yaWdodCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTczLCAxNzMsIDE3Myk7XFxufVxcblxcbi5jbGlja2FibGUtc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDI1NSwgMjAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYwLCA2MCwgNjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGl0LXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzIsIDcyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDcyLCA3Mik7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMzAwbXM7XFxufVxcblxcbi5taXNzLXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMjIxLCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MiwgMjIxLCAyNTUpO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IC41ZW07XFxuICB0cmFuc2l0aW9uOiBlYXNlLW91dCAzMDBtcztcXG59XFxuXFxuLmNvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjM1KTtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAyNnB4O1xcbn1cXG5cXG4ubWVzc2FnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NjgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMzZweDtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxufVxcblxcbi5idG4ge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxufVxcblxcbi5zY29yZS1jb250YWluZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB3aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2NvcmUge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnNjb3JlLXNoaXAge1xcbiAgLS11bml0OiAxMHB4O1xcbiAgd2lkdGg6IHZhcigtLXVuaXQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uc2NvcmUtc2hpcC00IHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS11bml0KSAqIDQpXFxufVxcblxcbi5zY29yZS1zaGlwLTMge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXVuaXQpICogMylcXG59XFxuXFxuLnNjb3JlLXNoaXAtMiB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdW5pdCkgKiAyKVxcbn1cXG5cXG4uc2NvcmUtc2hpcC0xIHtcXG4gIGhlaWdodDogdmFyKC0tdW5pdClcXG59XFxuXFxuLnNjb3JlLXNoaXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIGdhbWUuc2V0VXBOZXdHYW1lKCk7XG59O1xuXG5tYWluKCk7XG4iXSwibmFtZXMiOlsiUGxheWVyIiwiQ29tcHV0ZXJQbGF5ZXIiLCJjb29yZHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoaXQiLCJhdHRhY2tFbmVteSIsImVycm9yIiwibWVzc2FnZSIsInJhbmRvbUF0dGFja0VuZW15IiwiU2hpcCIsIkdhbWVib2FyZCIsImNvb3JkIiwibGVuZ3RoIiwib3JpZW50YXRpb24iLCJpIiwiYm9hcmRQbGFjZXMiLCJzaGlwIiwiaWQiLCJhbGxTaGlwc0luZm8iLCJFcnJvciIsInB1c2giLCJib2FyZEhpdHMiLCJzaGlwSW5mbyIsImZpbmQiLCJzIiwicG9zaXRpb24iLCJmaW5kSW5kZXgiLCJlbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdW5rQ291bnQiLCJmb3JFYWNoIiwiaW5mbyIsImlzU3VuayIsImVuZW15R2FtZWJvYXJkIiwicmVjZWl2ZUF0dGFjayIsInBvcyIsInBvc2l0aW9ucyIsImluY2x1ZGVzIiwiY29uc3RydWN0b3IiLCJzZXRMZW5ndGgiLCJBcnJheSIsImZpbGwiLCJDb21wdXRlciIsInZpZXdzIiwiR2FtZSIsImxvY2FsU3RvcmFnZSIsInBsYXllclNoaXBzUHJvcHMiLCJjb25zb2xlIiwibG9nIiwicGxheWVyR2FtZWJvYXJkIiwic2hpcFByb3BzIiwicGxhY2VTaGlwIiwiY29tcHV0ZXJHYW1lYm9hcmQiLCJwbGF5ZXIiLCJjb21wdXRlciIsInBsYWNlUGxheWVyU2hpcHMiLCJwcmVwbGFjZUNvbXB1dGVyU2hpcHMiLCJkaXNwbGF5Qm9hcmRzIiwicGxheWVyU2hpcHNDb29yZHMiLCJtYXAiLCJkaXNwbGF5U2hpcHMiLCJsaXN0ZW5Gb3JBdHRhY2tzIiwiYWxsU2hpcHNTdW5rIiwiZ2FtZW92ZXIiLCJ3aW5uZXIiLCJwbGF5ZXJDb29yZHMiLCJjb21wdXRlclR1cm4iLCJjb21wdXRlckF0dGFjayIsImhpdFNxdWFyZSIsImRpc3BsYXlTY29yZSIsImRpc2FibGVDbGlja3MiLCJyZXN1bHQiLCJpc0dhbWVPdmVyIiwic2hvd0dhbWVvdmVyTWVzc2FnZSIsInNldFRpbWVvdXQiLCJlbmFibGVDbGlja3MiLCJwbGF5ZXJUdXJuIiwicGxheWVyQXR0YWNrIiwiZ2FtZWJvYXJkIiwibGVuZ3RocyIsInJldHJ5IiwiYmluIiwiY3JlYXRlQm9hcmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzcXVhcmUiLCJzZXRBdHRyaWJ1dGUiLCJTdHJpbmciLCJwYWRTdGFydCIsImFwcGVuZENoaWxkIiwiZ2FtZWJvYXJkQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInBsYXllckdhbWVCb2FyZE5hbWUiLCJ0ZXh0Q29udGVudCIsImNvbXB1dGVyR2FtZUJvYXJkTmFtZSIsImNvbXB1dGVyR2FtZUJvYXJkIiwiYWxsU2hpcHNDb29yZHMiLCJzaGlwQ29vcmRzIiwieCIsInkiLCJzY29yZSIsInNoaXBzSW5mbyIsInNvcnQiLCJhIiwiYiIsIm9sZFNjb3JlIiwic2NvcmVDb250YWluZXIiLCJyZXBsYWNlQ2hpbGQiLCJjb250ZW50Iiwic3RhcnROZXdHYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJtb2RhbCIsIm1lc3NhZ2VDb250YWluZXIiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsImNvbXB1dGVyU3F1YXJlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlIiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIk51bWJlciIsImdldEF0dHJpYnV0ZSIsInJ1bkdhbWVMb29wIiwic3FyIiwib3Bwb25lbnQiLCJzcGFuIiwiY292ZXIiLCJyZW1vdmVDaGlsZCIsIm1haW4iLCJzZXRVcE5ld0dhbWUiXSwic291cmNlUm9vdCI6IiJ9