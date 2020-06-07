webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/valentinmuller/Advanced-React/sick-fits/frontend/components/Page.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([\"\\n  @font-face {\\n    font-family: 'radnika_next';\\n    src: url('/static/radnikanext-medium-webfont.woff2')\\n    format('woff2');\\n    font-weight: normal;\\n    font-style: normal;\\n  }\\n  html {\\n    box-sizing: border-box;\\n    font-size: 10px;\\n  }\\n  *, *:before, *:after {\\n    box-sizing: inherit;\\n  }\\n  body {\\n    padding: 0;\\n    margin: 0;\\n    font-size: 1.5rem;\\n    line-height: 2;\\n    font-family: 'radnika_next';\\n  }\\n  a {\\n    text-decoration: none;\\n    color: \", \"\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar theme = {\n  red: '#FF0000',\n  black: '#393939',\n  grey: '#3A3A3A',\n  lightgrey: '#E1E1E1',\n  offWhite: '#EDEDED',\n  maxWidth: '1000px',\n  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'\n};\nvar StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Page__StyledPage\",\n  componentId: \"sc-4u7a64-0\"\n})([\"background:white;color:\", \";\"], function (props) {\n  return props.theme.black;\n});\n_c = StyledPage;\nvar Inner = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"Page__Inner\",\n  componentId: \"sc-4u7a64-1\"\n})([\"max-width:\", \";margin:0 auto;padding:2rem;\"], function (props) {\n  return props.theme.maxWidth;\n});\n_c2 = Inner;\nObject(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"injectGlobal\"])(_templateObject(), the);\n\nvar Page = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Page, _Component);\n\n  var _super = _createSuper(Page);\n\n  function Page() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Page);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Page, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_9__[\"ThemeProvider\"], {\n        theme: theme,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }\n      }, __jsx(StyledPage, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }\n      }, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 15\n        }\n      }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 15\n        }\n      }), __jsx(Inner, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 15\n        }\n      }, this.props.children)));\n    }\n  }]);\n\n  return Page;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledPage\");\n$RefreshReg$(_c2, \"Inner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2UuanM/MTc1YyJdLCJuYW1lcyI6WyJ0aGVtZSIsInJlZCIsImJsYWNrIiwiZ3JleSIsImxpZ2h0Z3JleSIsIm9mZldoaXRlIiwibWF4V2lkdGgiLCJicyIsIlN0eWxlZFBhZ2UiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsIklubmVyIiwiaW5qZWN0R2xvYmFsIiwidGhlIiwiUGFnZSIsImNoaWxkcmVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBQ1ZDLEtBQUcsRUFBRSxTQURLO0FBRVZDLE9BQUssRUFBRSxTQUZHO0FBR1ZDLE1BQUksRUFBRSxTQUhJO0FBSVZDLFdBQVMsRUFBRSxTQUpEO0FBS1ZDLFVBQVEsRUFBRSxTQUxBO0FBTVZDLFVBQVEsRUFBRSxRQU5BO0FBT1ZDLElBQUUsRUFBRTtBQVBNLENBQWQ7QUFVQSxJQUFNQyxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUNBRUgsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1gsS0FBTixDQUFZRSxLQUFoQjtBQUFBLENBRkYsQ0FBaEI7S0FBTU0sVTtBQUtOLElBQU1JLEtBQUssR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtREFDTSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDWCxLQUFOLENBQVlNLFFBQWhCO0FBQUEsQ0FEWCxDQUFYO01BQU1NLEs7QUFNTkMsc0VBQVksb0JBd0JDQyxHQXhCRCxDQUFaOztJQTZCTUMsSTs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLGFBQ0UsTUFBQywrREFBRDtBQUFlLGFBQUssRUFBRWYsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFFRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQUdFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVEsS0FBS1csS0FBTCxDQUFXSyxRQUFuQixDQUhGLENBREYsQ0FERjtBQVNIOzs7O0VBWGNDLCtDOztBQWNKRixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9NZXRhJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciwgaW5qZWN0R2xvYmFsIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgICByZWQ6ICcjRkYwMDAwJyxcbiAgICBibGFjazogJyMzOTM5MzknLFxuICAgIGdyZXk6ICcjM0EzQTNBJyxcbiAgICBsaWdodGdyZXk6ICcjRTFFMUUxJyxcbiAgICBvZmZXaGl0ZTogJyNFREVERUQnLFxuICAgIG1heFdpZHRoOiAnMTAwMHB4JyxcbiAgICBiczogJzAgMTJweCAyNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KScsXG59O1xuXG5jb25zdCBTdHlsZWRQYWdlID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibGFja307XG5gO1xuXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1heFdpZHRofTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAycmVtO1xuYDtcblxuaW5qZWN0R2xvYmFsYFxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3JhZG5pa2FfbmV4dCc7XG4gICAgc3JjOiB1cmwoJy9zdGF0aWMvcmFkbmlrYW5leHQtbWVkaXVtLXdlYmZvbnQud29mZjInKVxuICAgIGZvcm1hdCgnd29mZjInKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuICBodG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgfVxuICBib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBmb250LWZhbWlseTogJ3JhZG5pa2FfbmV4dCc7XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAke3RoZX1cbiAgfVxuYDtcblxuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxTdHlsZWRQYWdlPlxuICAgICAgICAgICAgICA8TWV0YSAvPlxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgIDxJbm5lcj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0lubmVyPlxuICAgICAgICAgICAgPC9TdHlsZWRQYWdlPlxuICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Page.js\n");

/***/ })

})