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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/dynamic_edit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/dynamic_edit.js":
/*!********************************!*\
  !*** ./src/js/dynamic_edit.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_dynamic_edit_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/dynamic_edit.scss */ "./src/scss/dynamic_edit.scss");
/* harmony import */ var _scss_dynamic_edit_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_dynamic_edit_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_dynamic_block_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/dynamic_block.scss */ "./src/scss/dynamic_block.scss");
/* harmony import */ var _scss_dynamic_block_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_dynamic_block_scss__WEBPACK_IMPORTED_MODULE_1__);
// https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/creating-dynamic-blocks/
// https://wordpress.org/gutenberg/handbook/designers-developers/developers/packages/packages-data/
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;


registerBlockType('poeticplaylite/dynamic', {
  title: __('DYNAMIC'),
  icon: 'id-alt',
  category: 'poeticplaylite',
  edit: withSelect(function (select) {
    return {
      posts: select('core').getEntityRecords('postType', 'post')
    };
  })(function (props) {
    if (!props.posts) {
      return 'Loading...';
    }

    if (props.posts.length === 0) {
      return 'No posts';
    }

    var className = props.className;
    return props.posts.map(function (post) {
      return wp.element.createElement("div", {
        className: "Post"
      }, wp.element.createElement("a", {
        className: className,
        href: post.link
      }, post.title.rendered));
    });
  }),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    return null;
  }
});

/***/ }),

/***/ "./src/scss/dynamic_block.scss":
/*!*************************************!*\
  !*** ./src/scss/dynamic_block.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/dynamic_edit.scss":
/*!************************************!*\
  !*** ./src/scss/dynamic_edit.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2R5bmFtaWNfZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9keW5hbWljX2Jsb2NrLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvZHluYW1pY19lZGl0LnNjc3MiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsIndpdGhTZWxlY3QiLCJkYXRhIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJlZGl0Iiwic2VsZWN0IiwicG9zdHMiLCJnZXRFbnRpdHlSZWNvcmRzIiwicHJvcHMiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3N0IiwibGluayIsInJlbmRlcmVkIiwic2F2ZSIsImF0dHJpYnV0ZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7SUFFUUEsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtJQUNBRyxpQixHQUFzQkYsRUFBRSxDQUFDRyxNLENBQXpCRCxpQjtJQUNBRSxVLEdBQWVKLEVBQUUsQ0FBQ0ssSSxDQUFsQkQsVTtBQUVSO0FBQ0E7QUFFQUYsaUJBQWlCLENBQ2Ysd0JBRGUsRUFFZjtBQUNFSSxPQUFLLEVBQUVQLEVBQUUsQ0FBQyxTQUFELENBRFg7QUFFRVEsTUFBSSxFQUFFLFFBRlI7QUFHRUMsVUFBUSxFQUFFLGdCQUhaO0FBSUVDLE1BQUksRUFBRUwsVUFBVSxDQUFDLFVBQVNNLE1BQVQsRUFBaUI7QUFDaEMsV0FBTztBQUNIQyxXQUFLLEVBQUVELE1BQU0sQ0FBQyxNQUFELENBQU4sQ0FBZUUsZ0JBQWYsQ0FBZ0MsVUFBaEMsRUFBNEMsTUFBNUM7QUFESixLQUFQO0FBR0QsR0FKZSxDQUFWLENBSUgsVUFBU0MsS0FBVCxFQUFnQjtBQUVqQixRQUFJLENBQUVBLEtBQUssQ0FBQ0YsS0FBWixFQUFtQjtBQUNmLGFBQU8sWUFBUDtBQUNIOztBQUVELFFBQUlFLEtBQUssQ0FBQ0YsS0FBTixDQUFZRyxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLGFBQU8sVUFBUDtBQUNIOztBQUVELFFBQUlDLFNBQVMsR0FBR0YsS0FBSyxDQUFDRSxTQUF0QjtBQUNBLFdBQU9GLEtBQUssQ0FBQ0YsS0FBTixDQUFZSyxHQUFaLENBQWdCLFVBQUFDLElBQUksRUFBSTtBQUU3QixhQUFPO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0w7QUFBRyxpQkFBUyxFQUFHRixTQUFmO0FBQ1EsWUFBSSxFQUFHRSxJQUFJLENBQUNDO0FBRHBCLFNBRUlELElBQUksQ0FBQ1gsS0FBTCxDQUFXYSxRQUZmLENBREssQ0FBUDtBQU1ELEtBUk0sQ0FBUDtBQVNELEdBeEJLLENBSlI7QUE2QkVDLE1BN0JGLHNCQTZCdUI7QUFBQSxRQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFFbkIsV0FBUSxJQUFSO0FBQ0Q7QUFoQ0gsQ0FGZSxDQUFqQixDOzs7Ozs7Ozs7OztBQ1ZBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImR5bmFtaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9keW5hbWljX2VkaXQuanNcIik7XG4iLCIvLyBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Rlc2lnbmVycy1kZXZlbG9wZXJzL2RldmVsb3BlcnMvdHV0b3JpYWxzL2Jsb2NrLXR1dG9yaWFsL2NyZWF0aW5nLWR5bmFtaWMtYmxvY2tzL1xyXG4vLyBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Rlc2lnbmVycy1kZXZlbG9wZXJzL2RldmVsb3BlcnMvcGFja2FnZXMvcGFja2FnZXMtZGF0YS9cclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xyXG5cclxuaW1wb3J0ICcuLi9zY3NzL2R5bmFtaWNfZWRpdC5zY3NzJztcclxuaW1wb3J0ICcuLi9zY3NzL2R5bmFtaWNfYmxvY2suc2Nzcyc7XHJcblxyXG5yZWdpc3RlckJsb2NrVHlwZSAoXHJcbiAgJ3BvZXRpY3BsYXlsaXRlL2R5bmFtaWMnLCBcclxuICB7XHJcbiAgICB0aXRsZTogX18oJ0RZTkFNSUMnKSxcclxuICAgIGljb246ICdpZC1hbHQnLFxyXG4gICAgY2F0ZWdvcnk6ICdwb2V0aWNwbGF5bGl0ZScsICAgIFxyXG4gICAgZWRpdDogd2l0aFNlbGVjdChmdW5jdGlvbihzZWxlY3QpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBvc3RzOiBzZWxlY3QoJ2NvcmUnKS5nZXRFbnRpdHlSZWNvcmRzKCdwb3N0VHlwZScsICdwb3N0JylcclxuICAgICAgfTtcclxuICAgIH0pKGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG4gICAgICBpZiAoISBwcm9wcy5wb3N0cykge1xyXG4gICAgICAgICAgcmV0dXJuICdMb2FkaW5nLi4uJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb3BzLnBvc3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuICdObyBwb3N0cyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XHJcbiAgICAgIHJldHVybiBwcm9wcy5wb3N0cy5tYXAocG9zdCA9PiB7XHJcbiBcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJQb3N0XCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPXsgcG9zdC5saW5rIH0+XHJcbiAgICAgICAgICAgIHsgcG9zdC50aXRsZS5yZW5kZXJlZCB9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH0pOyAgICAgIFxyXG4gICAgfSksXHJcbiAgICBzYXZlKHsgYXR0cmlidXRlcyB9KSB7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gKG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9