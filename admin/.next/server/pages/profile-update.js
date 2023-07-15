module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile-update/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation */ \"./components/Navigation.js\");\n/* harmony import */ var _services_AccessTokenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/AccessTokenService */ \"./services/AccessTokenService.js\");\nvar _jsxFileName = \"/Users/draki/Documents/Epitech/EIP/admin/components/Layout.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst {\n  Content,\n  Sider\n} = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"];\nconst Layout = props => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const access_token = _services_AccessTokenService__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get();\n    if (!access_token) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');\n  });\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    style: {\n      height: \"100vh\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(Sider, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      color: \"white\",\n      textAlign: \"center\",\n      marginTop: 20,\n      marginBottom: 20,\n      fontSize: 20\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, \"Admin\"), __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    style: {\n      overflowY: \"scroll\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, __jsx(Content, {\n    style: {\n      margin: ''\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    style: {\n      paddingBottom: 50\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }, props.children))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJTaWRlciIsIkFudGRMYXlvdXQiLCJMYXlvdXQiLCJwcm9wcyIsInVzZUVmZmVjdCIsImFjY2Vzc190b2tlbiIsIkFjY2Vzc1Rva2VuU2VydmljZSIsImdldCIsIlJvdXRlciIsInB1c2giLCJfX2pzeCIsInN0eWxlIiwiaGVpZ2h0IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjb2xvciIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwiTmF2aWdhdGlvbiIsIm92ZXJmbG93WSIsIm1hcmdpbiIsInBhZGRpbmdCb3R0b20iLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUDtBQUNVO0FBQ0o7QUFDMEI7QUFFaEUsTUFBTTtFQUFDQSxPQUFPO0VBQUVDO0FBQUssQ0FBQyxHQUFHQywyQ0FBVTtBQUVuQyxNQUFNQyxNQUFNLEdBQUlDLEtBQUssSUFBSztFQUN0QkMsdURBQVMsQ0FBQyxNQUFNO0lBQ1osTUFBTUMsWUFBWSxHQUFHQyxvRUFBa0IsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDN0MsSUFBSSxDQUFDRixZQUFZLEVBQ2JHLGtEQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDeEIsQ0FBQyxDQUFDO0VBRUYsT0FFSUMsS0FBQSxDQUFDVCwyQ0FBVTtJQUFDVSxLQUFLLEVBQUU7TUFBQ0MsTUFBTSxFQUFFO0lBQU8sQ0FBRTtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDakNSLEtBQUEsQ0FBQ1YsS0FBSztJQUFBYSxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDRlIsS0FBQTtJQUFLQyxLQUFLLEVBQUU7TUFBQ1EsS0FBSyxFQUFFLE9BQU87TUFBRUMsU0FBUyxFQUFFLFFBQVE7TUFBRUMsU0FBUyxFQUFFLEVBQUU7TUFBRUMsWUFBWSxFQUFFLEVBQUU7TUFBRUMsUUFBUSxFQUFFO0lBQUUsQ0FBRTtJQUFBVixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBQyxPQUU3RixDQUFDLEVBQ05SLEtBQUEsQ0FBQ2MsbURBQVU7SUFBQVgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUMsQ0FDVCxDQUFDLEVBQ1JSLEtBQUEsQ0FBQ1QsMkNBQVU7SUFBQ1UsS0FBSyxFQUFFO01BQUNjLFNBQVMsRUFBRTtJQUFRLENBQUU7SUFBQVosTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3JDUixLQUFBLENBQUNYLE9BQU87SUFBQ1ksS0FBSyxFQUFFO01BQUNlLE1BQU0sRUFBRTtJQUFFLENBQUU7SUFBQWIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3pCUixLQUFBO0lBQUtDLEtBQUssRUFBRTtNQUFDZ0IsYUFBYSxFQUFFO0lBQUUsQ0FBRTtJQUFBZCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDM0JmLEtBQUssQ0FBQ3lCLFFBQ04sQ0FDQSxDQUNELENBQ0osQ0FBQztBQUVyQixDQUFDO0FBRWMxQixxRUFBTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge0xheW91dCBhcyBBbnRkTGF5b3V0fSBmcm9tICdhbnRkJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcbmltcG9ydCBBY2Nlc3NUb2tlblNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL0FjY2Vzc1Rva2VuU2VydmljZVwiO1xuXG5jb25zdCB7Q29udGVudCwgU2lkZXJ9ID0gQW50ZExheW91dDtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gQWNjZXNzVG9rZW5TZXJ2aWNlLmdldCgpO1xuICAgICAgICBpZiAoIWFjY2Vzc190b2tlbilcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPEFudGRMYXlvdXQgc3R5bGU9e3toZWlnaHQ6IFwiMTAwdmhcIn19PlxuICAgICAgICAgICAgPFNpZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJ3aGl0ZVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogMjAsIG1hcmdpbkJvdHRvbTogMjAsIGZvbnRTaXplOiAyMH19PlxuICAgICAgICAgICAgICAgICAgICBBZG1pblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgIDwvU2lkZXI+XG4gICAgICAgICAgICA8QW50ZExheW91dCBzdHlsZT17e292ZXJmbG93WTogXCJzY3JvbGxcIn19PlxuICAgICAgICAgICAgICAgIDxDb250ZW50IHN0eWxlPXt7bWFyZ2luOiAnJ319PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgPC9BbnRkTGF5b3V0PlxuICAgICAgICA8L0FudGRMYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_AccessTokenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/AccessTokenService */ \"./services/AccessTokenService.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/draki/Documents/Epitech/EIP/admin/components/Navigation.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n// association of route to menu to mark as selected\nconst activeMenus = {\n  '/control': '/control'\n};\nconst Navigation = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const navigate = async pathname => {\n    await next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(pathname);\n  };\n  const logout = () => {\n    _services_AccessTokenService__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove();\n    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');\n  };\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n    theme: \"dark\",\n    mode: \"inline\",\n    selectedKeys: [activeMenus[router.pathname]],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n    key: \"/control\",\n    icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faTv\"],\n      style: {\n        marginRight: 10\n      },\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 23\n      }\n    }),\n    onClick: () => navigate('/control'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Map\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n    key: \"/profile-update\",\n    icon: __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faAddressCard\"],\n      style: {\n        marginRight: 10\n      },\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 23\n      }\n    }),\n    onClick: () => navigate('/profile-update'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Profile\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n    style: {\n      marginTop: \"380%\"\n    },\n    key: \"/logout\",\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"LogoutOutlined\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 23\n      }\n    }),\n    onClick: logout,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"Sign Out\"));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb24uanM/MTQ4NiJdLCJuYW1lcyI6WyJhY3RpdmVNZW51cyIsIk5hdmlnYXRpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYXZpZ2F0ZSIsInBhdGhuYW1lIiwiUm91dGVyIiwicHVzaCIsImxvZ291dCIsIkFjY2Vzc1Rva2VuU2VydmljZSIsInJlbW92ZSIsIl9fanN4IiwiTWVudSIsInRoZW1lIiwibW9kZSIsInNlbGVjdGVkS2V5cyIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSXRlbSIsImtleSIsImljb24iLCJGb250QXdlc29tZUljb24iLCJmYVR2Iiwic3R5bGUiLCJtYXJnaW5SaWdodCIsIm9uQ2xpY2siLCJmYUFkZHJlc3NDYXJkIiwibWFyZ2luVG9wIiwiTG9nb3V0T3V0bGluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSjtBQUNuQjtBQUN1QjtBQUNlO0FBQ0Q7QUFJcEI7O0FBRTNDO0FBQ0EsTUFBTUEsV0FBVyxHQUFHO0VBQ2hCLFVBQVUsRUFBRTtBQUNoQixDQUFDO0FBRUQsTUFBTUMsVUFBVSxHQUFHQSxDQUFBLEtBQU07RUFDckIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxDQUFDLENBQUM7RUFFMUIsTUFBTUMsUUFBUSxHQUFHLE1BQU9DLFFBQVEsSUFBSztJQUNqQyxNQUFNQyxrREFBTSxDQUFDQyxJQUFJLENBQUNGLFFBQVEsQ0FBQztFQUMvQixDQUFDO0VBRUQsTUFBTUcsTUFBTSxHQUFHQSxDQUFBLEtBQU07SUFDakJDLG9FQUFrQixDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUMzQkosa0RBQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUNwQixDQUFDO0VBRUQsT0FDSUksS0FBQSxDQUFDQyx5Q0FBSTtJQUFDQyxLQUFLLEVBQUMsTUFBTTtJQUFDQyxJQUFJLEVBQUMsUUFBUTtJQUFDQyxZQUFZLEVBQUUsQ0FBQ2YsV0FBVyxDQUFDRSxNQUFNLENBQUNHLFFBQVEsQ0FBQyxDQUFFO0lBQUFXLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUMxRVYsS0FBQSxDQUFDQyx5Q0FBSSxDQUFDVSxJQUFJO0lBQ05DLEdBQUcsRUFBRSxVQUFXO0lBQ2hCQyxJQUFJLEVBQUViLEtBQUEsQ0FBQ2MsOEVBQWU7TUFBQ0QsSUFBSSxFQUFFRSxzRUFBSztNQUFDQyxLQUFLLEVBQUU7UUFBQ0MsV0FBVyxFQUFFO01BQUUsQ0FBRTtNQUFBWixNQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsQ0FBRSxDQUFFO0lBQ2hFUSxPQUFPLEVBQUVBLENBQUEsS0FBTXpCLFFBQVEsQ0FBQyxVQUFVLENBQUU7SUFBQVksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3ZDLEtBRVUsQ0FBQyxFQUNaVixLQUFBLENBQUNDLHlDQUFJLENBQUNVLElBQUk7SUFDTkMsR0FBRyxFQUFFLGlCQUFrQjtJQUN2QkMsSUFBSSxFQUFFYixLQUFBLENBQUNjLDhFQUFlO01BQUNELElBQUksRUFBRU0sK0VBQWM7TUFBRUgsS0FBSyxFQUFFO1FBQUNDLFdBQVcsRUFBRTtNQUFFLENBQUU7TUFBQVosTUFBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLENBQUUsQ0FBRTtJQUMxRVEsT0FBTyxFQUFFQSxDQUFBLEtBQU16QixRQUFRLENBQUMsaUJBQWlCLENBQUU7SUFBQVksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzlDLFNBRVUsQ0FBQyxFQUNaVixLQUFBLENBQUNDLHlDQUFJLENBQUNVLElBQUk7SUFDTkssS0FBSyxFQUFFO01BQUNJLFNBQVMsRUFBRTtJQUFNLENBQUU7SUFDM0JSLEdBQUcsRUFBQyxTQUFTO0lBQ2JDLElBQUksRUFBRWIsS0FBQSxDQUFDcUIsZ0VBQWM7TUFBQWhCLE1BQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxDQUFFLENBQUU7SUFDekJRLE9BQU8sRUFBRXJCLE1BQU87SUFBQVEsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ25CLFVBRVUsQ0FDVCxDQUFDO0FBRWYsQ0FBQztBQUVjcEIseUVBQVUiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtNZW51fSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHtMb2dvdXRPdXRsaW5lZH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgQWNjZXNzVG9rZW5TZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9BY2Nlc3NUb2tlblNlcnZpY2VcIjtcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQge1xuICAgIGZhQWRkcmVzc0NhcmQsXG4gICAgZmFUdixcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG4vLyBhc3NvY2lhdGlvbiBvZiByb3V0ZSB0byBtZW51IHRvIG1hcmsgYXMgc2VsZWN0ZWRcbmNvbnN0IGFjdGl2ZU1lbnVzID0ge1xuICAgICcvY29udHJvbCc6ICcvY29udHJvbCdcbn07XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBuYXZpZ2F0ZSA9IGFzeW5jIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBhd2FpdCBSb3V0ZXIucHVzaChwYXRobmFtZSlcbiAgICB9XG5cbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIEFjY2Vzc1Rva2VuU2VydmljZS5yZW1vdmUoKTtcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVudSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaW5saW5lXCIgc2VsZWN0ZWRLZXlzPXtbYWN0aXZlTWVudXNbcm91dGVyLnBhdGhuYW1lXV19PlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgIGtleT17XCIvY29udHJvbFwifVxuICAgICAgICAgICAgICAgIGljb249ezxGb250QXdlc29tZUljb24gaWNvbj17ZmFUdn0gc3R5bGU9e3ttYXJnaW5SaWdodDogMTB9fSAvPn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL2NvbnRyb2wnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNYXBcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgIGtleT17XCIvcHJvZmlsZS11cGRhdGVcIn1cbiAgICAgICAgICAgICAgICBpY29uPXs8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQWRkcmVzc0NhcmR9ICBzdHlsZT17e21hcmdpblJpZ2h0OiAxMH19IC8+fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvcHJvZmlsZS11cGRhdGUnKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQcm9maWxlXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogXCIzODAlXCJ9fVxuICAgICAgICAgICAgICAgIGtleT1cIi9sb2dvdXRcIlxuICAgICAgICAgICAgICAgIGljb249ezxMb2dvdXRPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dvdXR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2lnbiBPdXRcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navigation.js\n");

/***/ }),

/***/ "./pages/profile-update/index.js":
/*!***************************************!*\
  !*** ./pages/profile-update/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProfileUpdate; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/draki/Documents/Epitech/EIP/admin/pages/profile-update/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst {\n  Title\n} = antd__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"];\nfunction ProfileUpdate() {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    style: {\n      marginTop: \"17%\",\n      alignVertical: \"25%\",\n      left: \"25%\",\n      width: \"50%\",\n      alignHorizontal: \"25%\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(Title, {\n    level: 2,\n    style: {\n      marginTop: \"0%\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"Profile Update\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    style: {\n      marginTop: \"5%\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Item, {\n    label: \"Username\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    style: {\n      marginLeft: \"2.3%\"\n    },\n    className: \"username\",\n    placeholder: \"Username\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Item, {\n    style: {\n      marginLeft: \"1%\"\n    },\n    label: \"Password\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    style: {\n      left: \"2%\"\n    },\n    className: \"password\",\n    placeholder: \"Password\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Item, {\n    style: {\n      marginLeft: \"2.5%\"\n    },\n    label: \"Confirm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Input\"], {\n    style: {\n      left: \"2%\"\n    },\n    className: \"password\",\n    placeholder: \"Confirm Password\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Item, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    style: {\n      left: \"87%\",\n      top: \"50%\"\n    },\n    className: \"button-submit\",\n    type: \"primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, \"Submit\")))));\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLXVwZGF0ZS9pbmRleC5qcz80Njg2Il0sIm5hbWVzIjpbIlRpdGxlIiwiVHlwb2dyYXBoeSIsIlByb2ZpbGVVcGRhdGUiLCJfX2pzeCIsIkxheW91dCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQ2FyZCIsInN0eWxlIiwibWFyZ2luVG9wIiwiYWxpZ25WZXJ0aWNhbCIsImxlZnQiLCJ3aWR0aCIsImFsaWduSG9yaXpvbnRhbCIsImxldmVsIiwiRm9ybSIsIkl0ZW0iLCJsYWJlbCIsIklucHV0IiwibWFyZ2luTGVmdCIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwiQnV0dG9uIiwidG9wIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDVjtBQUNKO0FBQzBCO0FBQ3JDO0FBRWxDLE1BQU07RUFBRUE7QUFBTSxDQUFDLEdBQUdDLCtDQUFVO0FBR2IsU0FBU0MsYUFBYUEsQ0FBQSxFQUFJO0VBQ3JDLE9BQ0lDLEtBQUEsQ0FBQ0MsMERBQU07SUFBQUMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1BQLEtBQUEsQ0FBQ1EseUNBQUk7SUFBQ0MsS0FBSyxFQUFFO01BQUNDLFNBQVMsRUFBRSxLQUFLO01BQUNDLGFBQWEsRUFBQyxLQUFLO01BQUNDLElBQUksRUFBRSxLQUFLO01BQUVDLEtBQUssRUFBRSxLQUFLO01BQUVDLGVBQWUsRUFBRTtJQUFLLENBQUU7SUFBQVosTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3RHUCxLQUFBLENBQUNILEtBQUs7SUFBQ2tCLEtBQUssRUFBRSxDQUFFO0lBQUNOLEtBQUssRUFBRTtNQUFDQyxTQUFTLEVBQUM7SUFBSSxDQUFFO0lBQUFSLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFDLGdCQUFxQixDQUFDLEVBRWhFUCxLQUFBLENBQUNnQix5Q0FBSTtJQUFDUCxLQUFLLEVBQUU7TUFBQ0MsU0FBUyxFQUFDO0lBQUksQ0FBRTtJQUFBUixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDNUJQLEtBQUEsQ0FBQ2dCLHlDQUFJLENBQUNDLElBQUk7SUFBQ0MsS0FBSyxFQUFDLFVBQVU7SUFBQWhCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN6QlAsS0FBQSxDQUFDbUIsMENBQUs7SUFBRVYsS0FBSyxFQUFFO01BQUNXLFVBQVUsRUFBRTtJQUFNLENBQUU7SUFBQ0MsU0FBUyxFQUFDLFVBQVU7SUFBQ0MsV0FBVyxFQUFDLFVBQVU7SUFBQXBCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFDLENBQ3hFLENBQUMsRUFDWlAsS0FBQSxDQUFDZ0IseUNBQUksQ0FBQ0MsSUFBSTtJQUFDUixLQUFLLEVBQUU7TUFBQ1csVUFBVSxFQUFFO0lBQUksQ0FBRTtJQUFDRixLQUFLLEVBQUMsVUFBVTtJQUFBaEIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3BEUCxLQUFBLENBQUNtQiwwQ0FBSztJQUFDVixLQUFLLEVBQUU7TUFBQ0csSUFBSSxFQUFFO0lBQUksQ0FBRTtJQUFDUyxTQUFTLEVBQUMsVUFBVTtJQUFDQyxXQUFXLEVBQUMsVUFBVTtJQUFBcEIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUMsQ0FDL0QsQ0FBQyxFQUNaUCxLQUFBLENBQUNnQix5Q0FBSSxDQUFDQyxJQUFJO0lBQUNSLEtBQUssRUFBRTtNQUFDVyxVQUFVLEVBQUU7SUFBTSxDQUFFO0lBQUNGLEtBQUssRUFBQyxTQUFTO0lBQUFoQixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDckRQLEtBQUEsQ0FBQ21CLDBDQUFLO0lBQUNWLEtBQUssRUFBRTtNQUFDRyxJQUFJLEVBQUU7SUFBSSxDQUFFO0lBQUNTLFNBQVMsRUFBQyxVQUFVO0lBQUNDLFdBQVcsRUFBQyxrQkFBa0I7SUFBQXBCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFDLENBQ3ZFLENBQUMsRUFDWlAsS0FBQSxDQUFDZ0IseUNBQUksQ0FBQ0MsSUFBSTtJQUFBZixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDUlAsS0FBQSxDQUFDdUIsMkNBQU07SUFBQ2QsS0FBSyxFQUFFO01BQUNHLElBQUksRUFBRSxLQUFLO01BQUVZLEdBQUcsRUFBQztJQUFLLENBQUU7SUFBQ0gsU0FBUyxFQUFDLGVBQWU7SUFBQ0ksSUFBSSxFQUFDLFNBQVM7SUFBQXZCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFDLFFBQWMsQ0FDdkYsQ0FDUCxDQUNBLENBQ0UsQ0FBQztBQUliO0FBQUMiLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLXVwZGF0ZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIFJhZGlvLCBDYXJkLCBBdmF0YXIsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IHsgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZVVwZGF0ZSAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgPENhcmQgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMTclXCIsYWxpZ25WZXJ0aWNhbDpcIjI1JVwiLGxlZnQ6IFwiMjUlXCIsIHdpZHRoOiBcIjUwJVwiLCBhbGlnbkhvcml6b250YWw6IFwiMjUlXCJ9fT5cbiAgICAgICAgPFRpdGxlIGxldmVsPXsyfSBzdHlsZT17e21hcmdpblRvcDpcIjAlXCJ9fT5Qcm9maWxlIFVwZGF0ZTwvVGl0bGU+XG5cbiAgICAgICAgPEZvcm0gc3R5bGU9e3ttYXJnaW5Ub3A6XCI1JVwifX0gPlxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJVc2VybmFtZVwiPlxuICAgICAgICAgICAgPElucHV0ICBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMi4zJVwifX0gY2xhc3NOYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjElXCJ9fSBsYWJlbD1cIlBhc3N3b3JkXCI+XG4gICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tsZWZ0OiBcIjIlXCJ9fSBjbGFzc05hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIi8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbSBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMi41JVwifX0gbGFiZWw9XCJDb25maXJtXCI+XG4gICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3tsZWZ0OiBcIjIlXCJ9fSBjbGFzc05hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtID5cbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3tsZWZ0OiBcIjg3JVwiLCB0b3A6XCI1MCVcIn19IGNsYXNzTmFtZT1cImJ1dHRvbi1zdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgXG4gICAgICAgIClcblxuICAgIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile-update/index.js\n");

/***/ }),

/***/ "./services/AccessTokenService.js":
/*!****************************************!*\
  !*** ./services/AccessTokenService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nconst storageName = \"access_token\";\nclass AccessTokenService {\n  constructor() {\n    _defineProperty(this, \"accessToken\", null);\n  }\n  get() {\n    if (this.accessToken) return this.accessToken;\n    if (localStorage === undefined) return null;\n    const accessToken = localStorage.getItem(storageName);\n    this.accessToken = accessToken;\n    return accessToken;\n  }\n  set(accessToken) {\n    this.accessToken = accessToken;\n    localStorage.setItem(storageName, accessToken);\n  }\n  remove() {\n    this.accessToken = null;\n    localStorage.removeItem(storageName);\n  }\n}\nconst service = new AccessTokenService();\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9BY2Nlc3NUb2tlblNlcnZpY2UuanM/ZGZmZSJdLCJuYW1lcyI6WyJzdG9yYWdlTmFtZSIsIkFjY2Vzc1Rva2VuU2VydmljZSIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWNjZXNzVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJ1bmRlZmluZWQiLCJnZXRJdGVtIiwic2V0Iiwic2V0SXRlbSIsInJlbW92ZSIsInJlbW92ZUl0ZW0iLCJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBVyxHQUFHLGNBQWM7QUFFbEMsTUFBTUMsa0JBQWtCLENBQUM7RUFBQUMsWUFBQTtJQUFBQyxlQUFBLHNCQUNQLElBQUk7RUFBQTtFQUVsQkMsR0FBR0EsQ0FBQSxFQUFHO0lBQ0YsSUFBSSxJQUFJLENBQUNDLFdBQVcsRUFDaEIsT0FBTyxJQUFJLENBQUNBLFdBQVc7SUFFM0IsSUFBSUMsWUFBWSxLQUFLQyxTQUFTLEVBQzFCLE9BQU8sSUFBSTtJQUNmLE1BQU1GLFdBQVcsR0FBR0MsWUFBWSxDQUFDRSxPQUFPLENBQUNSLFdBQVcsQ0FBQztJQUNyRCxJQUFJLENBQUNLLFdBQVcsR0FBR0EsV0FBVztJQUM5QixPQUFPQSxXQUFXO0VBQ3RCO0VBRUFJLEdBQUdBLENBQUNKLFdBQVcsRUFBRTtJQUNiLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQzlCQyxZQUFZLENBQUNJLE9BQU8sQ0FBQ1YsV0FBVyxFQUFFSyxXQUFXLENBQUM7RUFDbEQ7RUFFQU0sTUFBTUEsQ0FBQSxFQUFHO0lBQ0wsSUFBSSxDQUFDTixXQUFXLEdBQUcsSUFBSTtJQUN2QkMsWUFBWSxDQUFDTSxVQUFVLENBQUNaLFdBQVcsQ0FBQztFQUN4QztBQUNKO0FBRUEsTUFBTWEsT0FBTyxHQUFHLElBQUlaLGtCQUFrQixDQUFDLENBQUM7QUFDekJZLHNFQUFPIiwiZmlsZSI6Ii4vc2VydmljZXMvQWNjZXNzVG9rZW5TZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RvcmFnZU5hbWUgPSBcImFjY2Vzc190b2tlblwiO1xuXG5jbGFzcyBBY2Nlc3NUb2tlblNlcnZpY2Uge1xuICAgIGFjY2Vzc1Rva2VuID0gbnVsbDtcblxuICAgIGdldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWNjZXNzVG9rZW4pXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbjtcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlTmFtZSk7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlblxuICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW47XG4gICAgfVxuXG4gICAgc2V0KGFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZU5hbWUsIGFjY2Vzc1Rva2VuKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBudWxsO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlTmFtZSk7XG4gICAgfVxufVxuXG5jb25zdCBzZXJ2aWNlID0gbmV3IEFjY2Vzc1Rva2VuU2VydmljZSgpO1xuZXhwb3J0IGRlZmF1bHQgc2VydmljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/AccessTokenService.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiPzI0MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFudC1kZXNpZ24vaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons\n");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/free-solid-svg-icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIj83M2NiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fortawesome/free-solid-svg-icons\n");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/react-fontawesome\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIj85N2FhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fortawesome/react-fontawesome\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });