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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\nwindow.templateEngine = {\n  render: _render__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lookup.js":
/*!***********************!*\
  !*** ./src/lookup.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lookup; });\n/* \n  ??????????????????.??????\n*/\n\nfunction lookup(dataObj, keyName) {\n  if (keyName.includes(\".\") && keyName!=='.') {\n    const keys = keyName.split(\".\");\n    let temp = dataObj;\n    keys.forEach(key => {\n      temp = temp[key];\n    });\n    return temp;\n  }\n\n  return dataObj[keyName];\n}\n\n\n//# sourceURL=webpack:///./src/lookup.js?");

/***/ }),

/***/ "./src/nestTokens.js":
/*!***************************!*\
  !*** ./src/nestTokens.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nestTokens; });\n/**\n * ????????????????????? ?????? # /\n *  */\n\nfunction nestTokens(tokens) {\n  console.log(\"tokens: \", tokens);\n  const nestTokens = [];\n  // ?????????\n  const sections = [];\n  // ?????????\n  let collector = nestTokens;\n  for (let i = 0; i < tokens.length; i++) {\n    // const element = array[i];\n    const token = tokens[i];\n    // ??????3 ???????????????\n\n    switch (token[0]) {\n      case \"#\":\n        // ??????????????????\n        collector.push(token);\n        sections.push(token);\n        // ??????????????? token??? []\n        token[2] = collector = [];\n        break;\n      case \"/\":\n        let section = sections.pop();\n        // ?????? ??????????????? ????????? collector ???????????? ???????????????nestTokens???????????????????????????default??????collector??????nestTokens???\n        collector =\n          sections.length  ? sections[sections.length - 1][2] : nestTokens;\n        break;\n      default:\n        collector.push(token);\n    }\n    // ??????1\n    // if (token[0] === \"#\") {\n    //   // ?????? ?????????????????????\n    //   token.push([]);\n    //   // ??????\n    //   sections.push(token);\n    //   console.log(\"tokens[i:# \", token);\n    // } else if (token[0] === \"/\") {\n    //   // ??????????????????\n    //   const section = sections.pop();\n    //   // ???????????????\n    //   if (sections.length === 0) {\n    //     nestTokens.push(section);\n    //   } else {\n    //     sections[sections.length - 1][2].push(section);\n    //   }\n    //   console.log(\"tokens[i: /\", token);\n    // } else {\n    //   // ??????0 ??????token????????????\n    //   if (sections.length === 0) {\n    //     nestTokens.push(token);\n    //   } else {\n    //     // ?????????0 ?????????????????? ????????????????????????\n    //     sections[sections.length - 1][2].push(token);\n    //   }\n    // }\n\n    //  ??????2\n    // switch (token[0]) {\n    //   case \"#\":\n    //     // ?????? ?????????????????????\n    //     token.push([]);\n    //     // ??????\n    //     sections.push(token);\n    //     break;\n    //   case \"/\":\n    //     // ??????????????????\n    //     const section = sections.pop();\n    //     // ???????????????\n    //     if (sections.length === 0) {\n    //       nestTokens.push(section);\n    //     } else {\n    //       // ??????????????? ????????????????????????????????????\n    //       sections[sections.length - 1][2].push(section);\n    //     }\n    //     break;\n    //   default:\n    //     // ??????0 ??????token????????????\n    //     if (sections.length === 0) {\n    //       nestTokens.push(token);\n    //     } else {\n    //       // ?????????0 ?????????????????? ????????????????????????\n    //       sections[sections.length - 1][2].push(token);\n    //     }\n    // }\n  }\n  return nestTokens;\n}\n\n\n//# sourceURL=webpack:///./src/nestTokens.js?");

/***/ }),

/***/ "./src/parseArray.js":
/*!***************************!*\
  !*** ./src/parseArray.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseArray; });\n/* harmony import */ var _lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lookup */ \"./src/lookup.js\");\n/* harmony import */ var _renderTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTemplate */ \"./src/renderTemplate.js\");\n/* \n?????? token ['#','xxx',[]] [\"#\", \"students\", Array(5)]\ndata \nv [{???}, {???}, {???}]\n*/\n\n\n\n\nfunction parseArray(token, data) {\n  let resultStr = \"\";\n  //  ??????????????????\n  let v = Object(_lookup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, token[1]);\n  // ???????????? ?????????????????????\n  v.forEach(item => {\n    // ??????. ??????  ?????? renderTemplate????????????\n    resultStr += Object(_renderTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(token[2], { \".\": item, ...item });\n    // resultStr += renderTemplate(token[2], item);\n    console.log(\"item: \", item);\n  });\n\n  return resultStr;\n}\n\n\n//# sourceURL=webpack:///./src/parseArray.js?");

/***/ }),

/***/ "./src/parseTemplateToTokens.js":
/*!**************************************!*\
  !*** ./src/parseTemplateToTokens.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parseTemplateToTokens; });\n/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ \"./src/scanner.js\");\n/* harmony import */ var _nestTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nestTokens */ \"./src/nestTokens.js\");\n\n\n/**\n *  ????????????\n *   */\nfunction parseTemplateToTokens(templateStr) {\n  // ??????????????????\n  const tokens = [];\n  const scanner = new _scanner__WEBPACK_IMPORTED_MODULE_0__[\"default\"](templateStr);\n  // ???????????????\n  let words;\n  while (!scanner.eos()) {\n    // ??????{{???????????????\n    words = scanner.scanUtil(\"{{\");\n    if (words) {\n      // ????????? <a class></a>\n      // ????????? <>\n      let flag = false;\n      let str = \"\";\n      Array.prototype.forEach.call(words, char => {\n        if (char == \"<\" || char == \">\") {\n          flag = !flag;\n        }\n        str += flag ? char:char.trim()\n      });\n      // words.replace(/\\s+/g, \"\") ????????????????????????\n      console.log('str: ', str);\n      tokens.push([\"text\", str]);\n    }\n    //  ????????????\n    scanner.scan(\"{{\");\n    // ??????????????????\n    words = scanner.scanUtil(\"}}\");\n    if (words) {\n      //  {{}} ????????????????????????  #arr /arr\n      if (words[0] === \"#\") {\n        tokens.push([\"#\", words.substring(1)]);\n      } else if (words[0] === \"/\") {\n        tokens.push([\"/\", words.substring(1)]);\n      } else {\n        tokens.push([\"name\", words]);\n      }\n    }\n    scanner.scan(\"}}\");\n  }\n  \n  return Object(_nestTokens__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tokens);\n}\n\n\n//# sourceURL=webpack:///./src/parseTemplateToTokens.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parseTemplateToTokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseTemplateToTokens */ \"./src/parseTemplateToTokens.js\");\n/* harmony import */ var _renderTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTemplate */ \"./src/renderTemplate.js\");\n\n\nconst render = (template, data) => {\n  console.log(\"template: \", template);\n  console.log(\"template: \", template.length);\n  // ???????????? tokens\n  const tokens = Object(_parseTemplateToTokens__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(template);\n  // console.log(\"tokens: \", tokens);\n  //  tokens ?????? domStr\n  const res = Object(_renderTemplate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tokens, data);\n  // console.log(\"res: \", res);\n  return res;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/renderTemplate.js":
/*!*******************************!*\
  !*** ./src/renderTemplate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderTemplate; });\n/* harmony import */ var _lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lookup */ \"./src/lookup.js\");\n/* harmony import */ var _parseArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseArray */ \"./src/parseArray.js\");\n\n\n\nfunction renderTemplate(tokens, data) {\n  let resultStr = \"\";\n  for (let i = 0; i < tokens.length; i++) {\n    let token = tokens[i];\n    let tag = token[0];\n    if (tag == \"text\") {\n      resultStr += token[1];\n    } else if (tag == \"name\") {\n      // ?????????. ??????????????????\n      // if (token[1] == \".\") {\n      //   resultStr += data;\n      // } else {\n      //   // ??????lookup ??????????????????\n      // resultStr += lookup(data, token[1]);\n      // }\n      resultStr += Object(_lookup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, token[1]);\n    } else if (tag == \"#\") {\n      // resultStr += renderTemplate(token[2], data[token[1]]);\n      //  # ??????????????? ?????????????????? ???????????? [2] ????????????\n      resultStr += Object(_parseArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(token, data);\n      // data[token[1]].forEach(item => {\n      //   resultStr += renderTemplate(token[2], item);\n      // });\n    }\n  }\n\n  return resultStr;\n}\n\n\n//# sourceURL=webpack:///./src/renderTemplate.js?");

/***/ }),

/***/ "./src/scanner.js":
/*!************************!*\
  !*** ./src/scanner.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scanner; });\n/**\n * ?????????\n */\n\nclass Scanner {\n  constructor(templateStr) {\n    console.log(\"Scanner:????????? \", templateStr);\n    // console.log('new.target ', new.target);\n    this.templateStr = templateStr;\n    // ??????\n    this.pos = 0;\n    // ???????????????\n    this.tail = templateStr;\n  }\n  // ????????????\n  scan(tag) {\n    if (this.tail.indexOf(tag) == 0) {\n      // ?????? tag????????? ???{{\n      this.pos += tag.length;\n      this.tail = this.templateStr.substring(this.pos);\n    }\n  }\n  // ??????????????????????????? ??????scan????????????????????????\n  scanUtil(stopTag) {\n    // ???????????????????????????\n    const pos_backup = this.pos;\n    // ??????????????????????????? ???????????????\n    while (\n      this.tail.indexOf(stopTag) != 0 &&\n      this.pos < this.templateStr.length\n    ) {\n      this.pos++;\n      // ???????????????????????????\n      this.tail = this.templateStr.substring(this.pos);\n    }\n    return this.templateStr.substring(pos_backup, this.pos);\n  }\n  // ??????????????????\n  eos() {\n    return this.pos === this.templateStr.length;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/scanner.js?");

/***/ })

/******/ });