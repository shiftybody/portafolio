/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
    }
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
    /******/ 			i: moduleId,
    /******/ 			l: false,
    /******/ 			exports: {}
      /******/
    };
    /******/
    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/ 		module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/
  }
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function (exports, name, getter) {
    /******/ 		if (!__webpack_require__.o(exports, name)) {
    /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function (exports) {
    /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function (value, mode) {
    /******/ 		if (mode & 1) value = __webpack_require__(value);
    /******/ 		if (mode & 8) return value;
    /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/ 		var ns = Object.create(null);
    /******/ 		__webpack_require__.r(ns);
    /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
    /******/ 		return ns;
    /******/
  };
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function (module) {
    /******/ 		var getter = module && module.__esModule ?
    /******/ 			function getDefault() { return module['default']; } :
    /******/ 			function getModuleExports() { return module; };
    /******/ 		__webpack_require__.d(getter, 'a', getter);
    /******/ 		return getter;
    /******/
  };
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 0);
  /******/
})
    /************************************************************************/
    /******/({

    /***/ "./index.js":
    /*!******************!*\
      !*** ./index.js ***!
      \******************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/styles.scss */ "./src/styles.scss");
    /* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _src_terminal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/terminal.js */ "./src/terminal.js");

      /*!
       * AnderShell - Just a small CSS demo
       *
       * Copyright (c) 2011-2018, Anders Evenrud <andersevenrud@gmail.com>
       * All rights reserved.
       *
       * Redistribution and use in source and binary forms, with or without
       * modification, are permitted provided that the following conditions are met:
       *
       * 1. Redistributions of source code must retain the above copyright notice, this
       *    list of conditions and the following disclaimer.
       * 2. Redistributions in binary form must reproduce the above copyright notice,
       *    this list of conditions and the following disclaimer in the documentation
       *    and/or other materials provided with the distribution.
       *
       * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
       * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
       * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
       * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
       * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
       * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
       * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
       * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
       * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
       * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       */



      // Banner text
      var banner = "\nInicializando Chat\nPreguntame lo que quieras sobre\nVIDEOJUEGOS\n\n.............................................................................\n\n@@@@@@@  @@@ @@@@@@@@ @@@  @@@ @@@  @@@ @@@@@@@@ @@@  @@@ @@@ @@@@@@@   @@@@@@ \n@@!  @@@ @@! @@!      @@!@!@@@ @@!  @@@ @@!      @@!@!@@@ @@! @@!  @@@ @@!  @@@\n@!@!@!@  !!@ @!!!:!   @!@@!!@! @!@  !@! @!!!:!   @!@@!!@! !!@ @!@  !@! @!@  !@!\n!!:  !!! !!: !!:      !!:  !!!  !: .:!  !!:      !!:  !!! !!: !!:  !!! !!:  !!!\n:: : ::  :   : :: ::: ::    :     ::    : :: ::: ::    :  :   :: :  :   : :. : \n";

      ///////////////////////////////////////////////////////////////////////////////
      // MAIN
      ///////////////////////////////////////////////////////////////////////////////

      var load = function load() {
        var t = Object(_src_terminal_js__WEBPACK_IMPORTED_MODULE_2__["terminal"])({
          prompt: function prompt() {
            return "$ ".concat("> ");
          },
          banner: banner,
        });

        // Lógica para analizar cualquier entrada del usuario y devolver respuestas
        t.parse = function (input) {
          const question = input.toLowerCase();
          if (question.includes('videojuegos')) {
            t.print("Los videojuegos son una excelente forma de entretenimiento. ¿Quieres recomendaciones?");
          } else {
            t.print("No tengo información sobre eso. ¿Quieres preguntar sobre videojuegos?");
          }
        };
      };
      document.addEventListener('DOMContentLoaded', load);
      /***/
    }),

    /***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
      \*****************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
    }),

    /***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
      \******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

      var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return arrayLikeToArray(arr);
      }
      module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
    }),

    /***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
    /*!****************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
      \****************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
    }),

    /***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
      \******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
    }),

    /***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
      \******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

      var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
      var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
      var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
      var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
      function _toConsumableArray(arr) {
        return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
      }
      module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
    }),

    /***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
      \***************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

      var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
      }
      module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

      /***/
    }),

    /***/ "./src/styles.scss":
    /*!*************************!*\
      !*** ./src/styles.scss ***!
      \*************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

      // extracted by mini-css-extract-plugin

      /***/
    }),

    /***/ "./src/terminal.js":
    /*!*************************!*\
      !*** ./src/terminal.js ***!
      \*************************/
    /*! exports provided: terminal */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "terminal", function () { return terminal; });
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

      /**
       * AnderShell - Just a small CSS demo
       *
       * Copyright (c) 2011-2018, Anders Evenrud <andersevenrud@gmail.com>
       * All rights reserved.
       *
       * Redistribution and use in source and binary forms, with or without
       * modification, are permitted provided that the following conditions are met:
       *
       * 1. Redistributions of source code must retain the above copyright notice, this
       *    list of conditions and the following disclaimer.
       * 2. Redistributions in binary form must reproduce the above copyright notice,
       *    this list of conditions and the following disclaimer in the documentation
       *    and/or other materials provided with the distribution.
       *
       * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
       * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
       * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
       * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
       * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
       * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
       * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
       * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
       * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
       * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       */

      // Creates initial options
      var createOptions = function createOptions(opts) {
        return Object.assign({}, {
          banner: 'Hello World',
          prompt: function prompt() {
            return '$ > ';
          },
          tickrate: 1000 / 60,
          buflen: 8,
          commands: {}
        }, opts || {});
      };

      // Creates our textarea element
      var createElement = function createElement(root) {
        var el = document.createElement('textarea');
        el.contentEditable = true;
        el.spellcheck = false;
        el.value = '';
        root.appendChild(el);
        return el;
      };

      // Keys that must be ignored

      // Sets text selection range
      var setSelectionRange = function setSelectionRange(input) {
        var length = input.value.length;
        if (input.setSelectionRange) {
          input.focus();
          input.setSelectionRange(length, length);
        } else if (input.createTextRange) {
          var range = input.createTextRange();
          range.collapse(true);
          range.moveEnd('character', length);
          range.moveStart('character', length);
          range.select();
        }
      };

      // Gets the font size of an element
      var getFontSize = function getFontSize(element) {
        return parseInt(window.getComputedStyle(element).getPropertyValue('font-size'), 10);
      };

      // Creates the rendering loop
      var renderer = function renderer(tickrate, onrender) {
        var lastTick = 0;
        var tick = function tick(time) {
          var now = performance.now();
          var delta = now - lastTick;
          if (delta > tickrate) {
            lastTick = now - delta % tickrate;
            onrender();
          }
          window.requestAnimationFrame(tick);
        };
        return tick;
      };

      // Pronts buffer onto the textarea
      var printer = function printer($element, buflen) {
        return function (buffer) {
          if (buffer.length > 0) {
            var len = Math.min(buflen, buffer.length);
            var val = buffer.splice(0, len);
            $element.value += val.join('');
            setSelectionRange($element);
            $element.scrollTop = $element.scrollHeight;
            return true;
          }
          return false;
        };
      };

      // Parses input
      var parser = function parser(onparsed) {
        return function (str) {
          if (str.length) {
            var args = str.split(' ').map(function (s) {
              return s.trim();
            });
            var cmd = args.splice(0, 1)[0];
            console.debug(cmd, args);
            onparsed.apply(void 0, [cmd].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args)));
          }
        };
      };

      // Command executor
      var executor = function executor(commands) {
        return function (cmd) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return function (cb) {
            try {
              commands[cmd] ? cb(commands[cmd].apply(commands, args) + '\n') : cb("El comando ingresado no existe '".concat(cmd, "'\n"));
            } catch (e) {
              console.warn(e);
              cb("Exception: ".concat(e, "\n"));
            }
          };
        };
      };

      // Handle keyboard events
      var keyboard = function keyboard(parse) {
        var input = [];
        var keys = {
          8: 'backspace',
          13: 'enter'
        };
        var ignoreKey = function ignoreKey(code) {
          return code >= 33 && code <= 40;
        };
        var key = function key(ev) {
          return keys[ev.which || ev.keyCode];
        };
        return {
          keypress: function keypress(ev) {
            if (key(ev) === 'enter') {
              var str = input.join('').trim();
              parse(str);
              input = [];
            } else if (key(ev) !== 'backspace') {
              input.push(String.fromCharCode(ev.which || ev.keyCode));
            }
          },
          keydown: function keydown(ev) {
            if (key(ev) === 'backspace') {
              if (input.length > 0) {
                input.pop();
              } else {
                ev.preventDefault();
              }
            } else if (ignoreKey(ev.keyCode)) {
              ev.preventDefault();
            }
          }
        };
      };

      // Creates the terminal
      var terminal = function terminal(opts) {
        var buffer = []; // What will be output to display
        var busy = false; // If we cannot type at the moment

        var _createOptions = createOptions(opts),
          prompt = _createOptions.prompt,
          banner = _createOptions.banner,
          commands = _createOptions.commands,
          buflen = _createOptions.buflen,
          tickrate = _createOptions.tickrate;
        var $root = document.querySelector('#terminal');
        var $element = createElement($root);
        var fontSize = getFontSize($element);
        var width = $element.offsetWidth;
        var cwidth = Math.round(width / fontSize * 1.9); // FIXME: Should be calculated via canvas

        var output = function output(_output, center) {
          var lines = _output.split(/\n/);
          if (center) {
            lines = lines.map(function (line) {
              return line.length > 0 ? line.padStart(line.length + (cwidth / 2 - line.length / 2), ' ') : line;
            });
          }
          var append = lines.join('\n') + '\n' + prompt();
          buffer = buffer.concat(append.split(''));
        };
        var print = printer($element, buflen);
        var execute = executor(commands);
        var onrender = function onrender() {
          return busy = print(buffer);
        };
        var onparsed = function onparsed(cmd) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          return execute.apply(void 0, [cmd].concat(args))(output);
        };
        var render = renderer(tickrate, onrender);
        var parse = parser(onparsed);
        var focus = function focus() {
          return setTimeout(function () {
            return $element.focus();
          }, 1);
        };
        var kbd = keyboard(parse);
        var clear = function clear() {
          return $element.value = '';
        };
        var input = function input(ev) {
          return busy ? ev.preventDefault() : kbd[ev.type](ev);
        };
        $element.addEventListener('focus', function () {
          return setSelectionRange($element);
        });
        $element.addEventListener('blur', focus);
        $element.addEventListener('keypress', input);
        $element.addEventListener('keydown', input);
        window.addEventListener('focus', focus);
        $root.addEventListener('click', focus);
        $root.appendChild($element);
        render();
        output(banner, true);
        focus();
        return {
          focus: focus,
          parse: parse,
          clear: clear,
          print: output
        };
      };

      /***/
    }),

    /***/ 0:
    /*!************************!*\
      !*** multi ./index.js ***!
      \************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(/*! /Users/andersevenrud/Projects/retro-css-shell-demo/index.js */"./index.js");

      /***/
    })

  /******/
});
//# sourceMappingURL=main.js.ma