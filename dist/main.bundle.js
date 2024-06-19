/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../logic/images/restaurent/restaurant.jpg */ "./src/logic/images/restaurent/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

html {
  font-family: 'Poppins' sans-serif;
}

body {
  margin: 0;
}
#photo-main {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: color;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
}

#navBar-container {
  background-color: aquamarine;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 8vh;
  box-shadow: 0 0 5px rgb(0, 0, 0);
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  object-fit: cover;
}

figure {
  padding: 0;
  margin: 0;
}

#navBar {
  display: flex;
  justify-content: space-between;
}
span {
  font-family: cursive;
  font-size: x-large;
  padding: 4px;
}
#nav-icons {
  display: flex;
  justify-content: space-between;
}
.card-img {
  width: 73%;
  margin-left: 13%;
}

.icon-img {
  width: 2rem;
  margin: 3px;
  margin-right: 17px;
}
.img-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: antiquewhite;
  width: 72%;
  padding-top: 5%;
  border-radius: 7px;
}
.img-a {
  color: rgb(0, 0, 0);
  font-size: larger;
  padding-bottom: 3%;
  float: none;
  font: 500 24px / 30px 'cursive';
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: top;
  position: relative;
}
.content .title a {
  position: relative;
}
.img-details a::after {
  background: #a97345;
  position: absolute;
  left: 0;
  right: 0;
  top: auto;
  bottom: 0;
  margin: 0 auto;
  content: '';
  height: 2px;
  width: 30px;
  margin-bottom: 7px;
}

.img-figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
}
#photo-section {
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-self: center;
}
.product-card {
}

/*
* {
  box-sizing: border-box;
}
html {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

img {
}
figure {

}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}*/
/*programmation top down | programmtion orienté objet */
/**body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  width: 100%;
}

#logPage-div {
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

#navBar {
  width: 100%;
  background-color: #333;
  padding: 1rem;
}
#home-div {
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
}
#contact-div {
  display: flex;
  margin-right: 1rem;
}
#login-div {
  margin-left: 6rem;
}
#home-div,
#contact-div,
#login-div {
  font-size: larger;
}
#login-container {
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
input {
  width: 20rem;
  height: 4rem;
  border-color: black;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
}

#button-section {
  display: flex;
  padding: 1rem;
}
#input-section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 10rem;
}
button {
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  background-color: #613fb1;
  cursor: pointer;
  width: 40%;
}

button:hover {
  background-color: #4b2f8b;
}

#reset-button {
  margin-left: 3rem;
}
#submit-button {
  margin-right: 2rem;
}*/

/*\${jhjh}:interpolation
img {
}*/
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,SAAS;AACX;AACA;EACE,yDAAkE;EAClE,oCAAoC;EACpC,4BAA4B;EAC5B,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;;EAE5B,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,WAAW;EACX,gCAAgC;AAClC;AACA;;EAEE,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,UAAU;EACV,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;EACX,+BAA+B;EAC/B,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,SAAS;EACT,cAAc;EACd,WAAW;EACX,WAAW;EACX,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,kBAAkB;AACpB;AACA;AACA;;AAEA;;;;;;;;;;;;;;;;;;EAkBE;AACF,uDAAuD;AACvD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA6FE;;AAEF;;EAEE","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: 'Poppins' sans-serif;\n}\n\nbody {\n  margin: 0;\n}\n#photo-main {\n  background-image: url('../logic/images/restaurent/restaurant.jpg');\n  background-color: rgba(0, 0, 0, 0.5);\n  background-blend-mode: color;\n  padding-top: 150px;\n  display: flex;\n  flex-direction: column;\n}\n\n#navBar-container {\n  background-color: aquamarine;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 8vh;\n  box-shadow: 0 0 5px rgb(0, 0, 0);\n}\nul,\nli {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nimg {\n  object-fit: cover;\n}\n\nfigure {\n  padding: 0;\n  margin: 0;\n}\n\n#navBar {\n  display: flex;\n  justify-content: space-between;\n}\nspan {\n  font-family: cursive;\n  font-size: x-large;\n  padding: 4px;\n}\n#nav-icons {\n  display: flex;\n  justify-content: space-between;\n}\n.card-img {\n  width: 73%;\n  margin-left: 13%;\n}\n\n.icon-img {\n  width: 2rem;\n  margin: 3px;\n  margin-right: 17px;\n}\n.img-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: antiquewhite;\n  width: 72%;\n  padding-top: 5%;\n  border-radius: 7px;\n}\n.img-a {\n  color: rgb(0, 0, 0);\n  font-size: larger;\n  padding-bottom: 3%;\n  float: none;\n  font: 500 24px / 30px 'cursive';\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: top;\n  position: relative;\n}\n.content .title a {\n  position: relative;\n}\n.img-details a::after {\n  background: #a97345;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: auto;\n  bottom: 0;\n  margin: 0 auto;\n  content: '';\n  height: 2px;\n  width: 30px;\n  margin-bottom: 7px;\n}\n\n.img-figure {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 10%;\n}\n#photo-section {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  align-self: center;\n}\n.product-card {\n}\n\n/*\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\nimg {\n}\nfigure {\n\n}\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}*/\n/*programmation top down | programmtion orienté objet */\n/**body {\n  margin: 0;\n  padding: 0;\n  font-family: Arial, sans-serif;\n  background-color: #f4f4f4;\n  width: 100%;\n}\n\n#logPage-div {\n  width: 100%;\n  max-width: 1200px;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n#navBar {\n  width: 100%;\n  background-color: #333;\n  padding: 1rem;\n}\n#home-div {\n  display: flex;\n  justify-content: space-between;\n  margin-left: 1rem;\n}\n#contact-div {\n  display: flex;\n  margin-right: 1rem;\n}\n#login-div {\n  margin-left: 6rem;\n}\n#home-div,\n#contact-div,\n#login-div {\n  font-size: larger;\n}\n#login-container {\n  width: 100%;\n  max-width: 400px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: #f9f9f9;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\ninput {\n  width: 20rem;\n  height: 4rem;\n  border-color: black;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 1rem;\n}\n\n#button-section {\n  display: flex;\n  padding: 1rem;\n}\n#input-section {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  height: 10rem;\n}\nbutton {\n  padding: 0.75rem;\n  border: none;\n  border-radius: 5px;\n  background-color: #333;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n\n  background-color: #613fb1;\n  cursor: pointer;\n  width: 40%;\n}\n\nbutton:hover {\n  background-color: #4b2f8b;\n}\n\n#reset-button {\n  margin-left: 3rem;\n}\n#submit-button {\n  margin-right: 2rem;\n}*/\n\n/*${jhjh}:interpolation\nimg {\n}*/\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/logic/LoginBusinessLogic.ts":
/*!*****************************************!*\
  !*** ./src/logic/LoginBusinessLogic.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginBusinessLogic: () => (/* binding */ LoginBusinessLogic)
/* harmony export */ });
/* harmony import */ var _ts_components_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ts/components/form */ "./src/ts/components/form.ts");
/* harmony import */ var _ts_components_navBarForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ts/components/navBarForm */ "./src/ts/components/navBarForm.ts");
/* harmony import */ var _images_icons_home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icons/home.png */ "./src/logic/images/icons/home.png");
/* harmony import */ var _images_icons_eat_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icons/eat.png */ "./src/logic/images/icons/eat.png");




class LoginBusinessLogic {
    constructor() {
        this.data = {
            id: 'login-form',
            inputs: [
                {
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    placeholder: 'Entrer votre email',
                },
                {
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    placeholder: 'Entrer votre mot de passe',
                },
            ],
            buttons: [
                {
                    id: 'submit-button',
                    name: 'submit-button',
                    type: 'submit',
                    textContent: 'Valider',
                },
                {
                    id: 'reset-button',
                    name: 'reset-button',
                    type: 'reset',
                    textContent: 'Reset',
                },
            ],
        };
        this.navBarData = {
            id: 'navBar',
            NavBars: [
                {
                    id: 'home-div',
                    name: 'home',
                    type: 'string',
                    textContent: 'ChezBobo',
                },
                {
                    id: 'contact-div',
                    name: 'contact',
                    type: 'string',
                    src: _images_icons_home_png__WEBPACK_IMPORTED_MODULE_2__,
                },
                {
                    id: 'login-div',
                    name: 'login',
                    type: 'string',
                    src: _images_icons_eat_png__WEBPACK_IMPORTED_MODULE_3__,
                },
            ],
        };
        const navBarMain = document.getElementById('navBar-container');
        if (navBarMain) {
            navBarMain.innerHTML = (0,_ts_components_navBarForm__WEBPACK_IMPORTED_MODULE_1__["default"])(this.navBarData);
        }
        const loginMain = document.getElementById('login-main');
        if (loginMain) {
            loginMain.innerHTML = (0,_ts_components_form__WEBPACK_IMPORTED_MODULE_0__["default"])(this.data);
        }
        this.attachEventListeners();
    }
    attachEventListeners() {
        const formElement = document.getElementById(this.data.id);
        if (formElement) {
            formElement.addEventListener('submit', this.onSubmit.bind(this));
            formElement.addEventListener('reset', this.onReset.bind(this));
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formValues = Array.from(formData.values());
        console.log([...formValues, ...[]]);
        window.location.href = '/src/html/login.html';
    }
    onReset(e) {
        const formReset = document.getElementById(this.data.id);
        if (formReset) {
            formReset.reset();
            console.log([]);
        }
    }
}
/** */


/***/ }),

/***/ "./src/logic/PhotoDisplayLogic.ts":
/*!****************************************!*\
  !*** ./src/logic/PhotoDisplayLogic.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotoDisplayLogic: () => (/* binding */ PhotoDisplayLogic)
/* harmony export */ });
/* harmony import */ var _ts_components_photoPageForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ts/components/photoPageForm */ "./src/ts/components/photoPageForm.ts");
/* harmony import */ var _images_pizza_pizza_au_feu_de_bois_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizza/pizza-au-feu-de-bois.jpg */ "./src/logic/images/pizza/pizza-au-feu-de-bois.jpg");
/* harmony import */ var _images_pasta_pasta_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pasta/pasta 3.jpg */ "./src/logic/images/pasta/pasta 3.jpg");
/* harmony import */ var _images_salade_salad_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/salade/salad-1.jpg */ "./src/logic/images/salade/salad-1.jpg");
/* harmony import */ var _images_desserts_strawberry_dessert_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/desserts/strawberry-dessert.jpg */ "./src/logic/images/desserts/strawberry-dessert.jpg");





class PhotoDisplayLogic {
    constructor() {
        this.PhData = {
            id: 'PhoTo',
            allPhotos: [
                {
                    id: 'photo1',
                    name: 'Pizza',
                    type: 'landscape',
                    src: _images_pizza_pizza_au_feu_de_bois_jpg__WEBPACK_IMPORTED_MODULE_1__,
                },
                {
                    id: 'photo2',
                    name: 'Pasta',
                    type: 'portrait',
                    src: _images_pasta_pasta_3_jpg__WEBPACK_IMPORTED_MODULE_2__,
                },
                {
                    id: 'photo3',
                    name: 'Salade',
                    type: 'landscape',
                    src: _images_salade_salad_1_jpg__WEBPACK_IMPORTED_MODULE_3__,
                },
                {
                    id: 'photo3',
                    name: 'Desserts',
                    type: 'landscape',
                    src: _images_desserts_strawberry_dessert_jpg__WEBPACK_IMPORTED_MODULE_4__,
                },
            ],
        };
        const photoMain = document.getElementById('photo-main');
        if (photoMain) {
            photoMain.innerHTML = (0,_ts_components_photoPageForm__WEBPACK_IMPORTED_MODULE_0__["default"])([this.PhData]);
        }
    }
}


/***/ }),

/***/ "./src/pages/loginUI.ts":
/*!******************************!*\
  !*** ./src/pages/loginUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loginUI)
/* harmony export */ });
function loginUI() {
    return ` <main class="login__main" id="login-main"></main>`;
}


/***/ }),

/***/ "./src/pages/navBarUI.ts":
/*!*******************************!*\
  !*** ./src/pages/navBarUI.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navBarUI)
/* harmony export */ });
function navBarUI() {
    return `<nav class="navBar__div" id="navBar-div"></nav>`;
}


/***/ }),

/***/ "./src/pages/photoUI.ts":
/*!******************************!*\
  !*** ./src/pages/photoUI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ photoUI)
/* harmony export */ });
function photoUI() {
    return ` <section class="photo__main" id="photo-main"></section>`;
}


/***/ }),

/***/ "./src/ts/components/form.ts":
/*!***********************************!*\
  !*** ./src/ts/components/form.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ form)
/* harmony export */ });
function form(data) {
    const renderInput = (el) => `
    <div class="form-group">
      <input id="${el.id}" name="${el.name}" type="${el.type}" placeholder="${el.placeholder || ''}" />
    </div>
  `;
    const renderButton = (el) => `
    <button id="${el.id || ''}" name="${el.name}" type="${el.type}">${el.textContent}</button>
  `;
    const inputs = data.inputs ? data.inputs.map(renderInput).join('') : '';
    const buttons = data.buttons ? data.buttons.map(renderButton).join('') : '';
    return `
  <div>
    <form id="${data.id || 'body-form'}" class="form">
      <section id="input-section">
        ${inputs}
      </section>
      <section id="button-section">
        ${buttons}
      </section>
    </form>
    <div/>
  `;
}


/***/ }),

/***/ "./src/ts/components/navBarForm.ts":
/*!*****************************************!*\
  !*** ./src/ts/components/navBarForm.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navBarForm)
/* harmony export */ });
function navBarForm(navBarData) {
    const renderNavBar = (el) => {
        if (el.textContent) {
            return `<span>${el.textContent}</span>`;
        }
        return '';
    };
    const renderNavBarWithSrc = (el) => {
        if (el.src) {
            return `
      <a href="/"><img src="${el.src}" alt="${el.name}" class="icon-img"></a>
      `;
        }
        return '';
    };
    const navBars = navBarData.NavBars
        ? navBarData.NavBars.map(renderNavBar).join('')
        : '';
    const navBarsWithSrc = navBarData.NavBars
        ? navBarData.NavBars.map(renderNavBarWithSrc).join('')
        : '';
    return `
    <nav id="${navBarData.id || 'nav-form'}">
      ${navBars}
      ${navBarsWithSrc ? `<nav id="nav-icons">${navBarsWithSrc}</nav>` : ''}
    </nav>
  `;
}


/***/ }),

/***/ "./src/ts/components/photoPageForm.ts":
/*!********************************************!*\
  !*** ./src/ts/components/photoPageForm.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ photoPageForm)
/* harmony export */ });
function photoPageForm(PhData) {
    const renderPhotos = (photo) => `<article class="product-card">
      <figure id="${photo.id}" name="${photo.name}" type="${photo.type}" class="img-figure">
      <section class="img-details">
      <a href="/" class="img-a1">
      <img src="${photo.src}" alt="${photo.name}" class="card-img">
          <a href="/" class="img-a">${photo.name}</a>
          </a>
        </section>
      </figure>
    </article>`;
    const photoToRender = PhData[0].allPhotos
        ? PhData[0].allPhotos.map(renderPhotos).join('')
        : '';
    return `
  <section id="photo-section">${photoToRender}</section>`;
}


/***/ }),

/***/ "./src/logic/images/desserts/strawberry-dessert.jpg":
/*!**********************************************************!*\
  !*** ./src/logic/images/desserts/strawberry-dessert.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db0de89453ffd2c587d9.jpg";

/***/ }),

/***/ "./src/logic/images/icons/eat.png":
/*!****************************************!*\
  !*** ./src/logic/images/icons/eat.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0b38f8be84706661a80.png";

/***/ }),

/***/ "./src/logic/images/icons/home.png":
/*!*****************************************!*\
  !*** ./src/logic/images/icons/home.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7772e8015d34f3866bbf.png";

/***/ }),

/***/ "./src/logic/images/pasta/pasta 3.jpg":
/*!********************************************!*\
  !*** ./src/logic/images/pasta/pasta 3.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89168c248dd7d941ef8e.jpg";

/***/ }),

/***/ "./src/logic/images/pizza/pizza-au-feu-de-bois.jpg":
/*!*********************************************************!*\
  !*** ./src/logic/images/pizza/pizza-au-feu-de-bois.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67ef460b4f7677c88372.jpg";

/***/ }),

/***/ "./src/logic/images/restaurent/restaurant.jpg":
/*!****************************************************!*\
  !*** ./src/logic/images/restaurent/restaurant.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b357266551a439a83fd8.jpg";

/***/ }),

/***/ "./src/logic/images/salade/salad-1.jpg":
/*!*********************************************!*\
  !*** ./src/logic/images/salade/salad-1.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c010f0ed652d91c160c9.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_loginUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/loginUI */ "./src/pages/loginUI.ts");
/* harmony import */ var _logic_LoginBusinessLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/LoginBusinessLogic */ "./src/logic/LoginBusinessLogic.ts");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _pages_navBarUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/navBarUI */ "./src/pages/navBarUI.ts");
/* harmony import */ var _logic_PhotoDisplayLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/PhotoDisplayLogic */ "./src/logic/PhotoDisplayLogic.ts");
/* harmony import */ var _pages_photoUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/photoUI */ "./src/pages/photoUI.ts");






window.addEventListener('DOMContentLoaded', () => {
    const photoMain = document.getElementById('photo-container');
    if (photoMain) {
        photoMain.innerHTML = (0,_pages_photoUI__WEBPACK_IMPORTED_MODULE_5__["default"])();
        new _logic_PhotoDisplayLogic__WEBPACK_IMPORTED_MODULE_4__.PhotoDisplayLogic();
    }
    const formContainer = document.getElementById('login-container');
    const navBarContainer = document.getElementById('navBar-container');
    if (formContainer) {
        formContainer.innerHTML = (0,_pages_loginUI__WEBPACK_IMPORTED_MODULE_0__["default"])();
        new _logic_LoginBusinessLogic__WEBPACK_IMPORTED_MODULE_1__.LoginBusinessLogic();
    }
    if (navBarContainer) {
        navBarContainer.innerHTML = (0,_pages_navBarUI__WEBPACK_IMPORTED_MODULE_3__["default"])();
        new _logic_LoginBusinessLogic__WEBPACK_IMPORTED_MODULE_1__.LoginBusinessLogic();
    }
});

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map