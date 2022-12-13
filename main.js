/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/load-header.js":
/*!****************************!*\
  !*** ./src/load-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader)
/* harmony export */ });
function loadHeader() {
    const content = document.getElementById("content");
    const titleBar = document.createElement("div");
	const topBar = document.createElement("div");
	const logo = document.createElement("h2");
	const subtitle = document.createElement("p");
	const navMenu = document.createElement("ul");
	const navItems = [
		document.createElement("a"),
		document.createElement("a"),
		document.createElement("a"),
	];
	const navItemNames = ["Home", "Our Story", "Contact"];
	function addNavItems() {
		for (let i = 0; i < 3; i++) {
			navMenu.appendChild(navItems[i]);
			navItems[i].innerHTML = navItemNames[i];
			navItems[i].classList;
		}
	}
    content.appendChild(titleBar);
    titleBar.id = "title-bar";
    titleBar.appendChild(logo);
	logo.innerHTML = "Da Guglielmo";
	logo.id = "logo";
	content.appendChild(topBar);
	topBar.id = "top-bar";
	topBar.appendChild(subtitle);
	subtitle.innerHTML = "The best cheese in Wuppertal";
	topBar.appendChild(navMenu);
	navMenu.id = "nav-menu";
	addNavItems();
}

/***/ }),

/***/ "./src/load-homepage.js":
/*!******************************!*\
  !*** ./src/load-homepage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomepage": () => (/* binding */ loadHomepage)
/* harmony export */ });
function loadHomepage() {
	const content = document.getElementById('content');
    const mainContainer = document.createElement('div');
    const mozz = document.createElement('img');
    const textBlock = document.createElement('div');
    let mainTextContent = 'Da Guglielmo is an artisan Italian cheesery located in the heart of Wuppertal. Our cheeses are made with the finest ingredients, using traditional methods passed down through generations. From creamy burrata to tangy pecorino, our selection is sure to satisfy even the most discerning cheese lovers. Stop by our shop today and taste the difference of handcrafted Italian cheese.'

    document.title = "Da Guglielmo | Home"
    content.appendChild(mainContainer);
    mainContainer.id = "main-container";
    mainContainer.appendChild(mozz);
    mozz.setAttribute("src", "mozz.jpg");
    mozz.id = "main-image";
    mainContainer.appendChild(textBlock);
    textBlock.classList.add('main-container');
    textBlock.innerHTML = mainTextContent;
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-homepage */ "./src/load-homepage.js");
/* harmony import */ var _load_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-header */ "./src/load-header.js");



(0,_load_header__WEBPACK_IMPORTED_MODULE_1__.loadHeader)();
(0,_load_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHomepage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNKOztBQUUzQyx3REFBVTtBQUNWLDREQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQtaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgdGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXHRjb25zdCBuYXZJdGVtcyA9IFtcblx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcblx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcblx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcblx0XTtcblx0Y29uc3QgbmF2SXRlbU5hbWVzID0gW1wiSG9tZVwiLCBcIk91ciBTdG9yeVwiLCBcIkNvbnRhY3RcIl07XG5cdGZ1bmN0aW9uIGFkZE5hdkl0ZW1zKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRuYXZNZW51LmFwcGVuZENoaWxkKG5hdkl0ZW1zW2ldKTtcblx0XHRcdG5hdkl0ZW1zW2ldLmlubmVySFRNTCA9IG5hdkl0ZW1OYW1lc1tpXTtcblx0XHRcdG5hdkl0ZW1zW2ldLmNsYXNzTGlzdDtcblx0XHR9XG5cdH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQmFyKTtcbiAgICB0aXRsZUJhci5pZCA9IFwidGl0bGUtYmFyXCI7XG4gICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cdGxvZ28uaW5uZXJIVE1MID0gXCJEYSBHdWdsaWVsbW9cIjtcblx0bG9nby5pZCA9IFwibG9nb1wiO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKHRvcEJhcik7XG5cdHRvcEJhci5pZCA9IFwidG9wLWJhclwiO1xuXHR0b3BCYXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXHRzdWJ0aXRsZS5pbm5lckhUTUwgPSBcIlRoZSBiZXN0IGNoZWVzZSBpbiBXdXBwZXJ0YWxcIjtcblx0dG9wQmFyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuXHRuYXZNZW51LmlkID0gXCJuYXYtbWVudVwiO1xuXHRhZGROYXZJdGVtcygpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZXBhZ2UoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtb3p6ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgdGV4dEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IG1haW5UZXh0Q29udGVudCA9ICdEYSBHdWdsaWVsbW8gaXMgYW4gYXJ0aXNhbiBJdGFsaWFuIGNoZWVzZXJ5IGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIFd1cHBlcnRhbC4gT3VyIGNoZWVzZXMgYXJlIG1hZGUgd2l0aCB0aGUgZmluZXN0IGluZ3JlZGllbnRzLCB1c2luZyB0cmFkaXRpb25hbCBtZXRob2RzIHBhc3NlZCBkb3duIHRocm91Z2ggZ2VuZXJhdGlvbnMuIEZyb20gY3JlYW15IGJ1cnJhdGEgdG8gdGFuZ3kgcGVjb3Jpbm8sIG91ciBzZWxlY3Rpb24gaXMgc3VyZSB0byBzYXRpc2Z5IGV2ZW4gdGhlIG1vc3QgZGlzY2VybmluZyBjaGVlc2UgbG92ZXJzLiBTdG9wIGJ5IG91ciBzaG9wIHRvZGF5IGFuZCB0YXN0ZSB0aGUgZGlmZmVyZW5jZSBvZiBoYW5kY3JhZnRlZCBJdGFsaWFuIGNoZWVzZS4nXG5cbiAgICBkb2N1bWVudC50aXRsZSA9IFwiRGEgR3VnbGllbG1vIHwgSG9tZVwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgICBtYWluQ29udGFpbmVyLmlkID0gXCJtYWluLWNvbnRhaW5lclwiO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobW96eik7XG4gICAgbW96ei5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJtb3p6LmpwZ1wiKTtcbiAgICBtb3p6LmlkID0gXCJtYWluLWltYWdlXCI7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0QmxvY2spO1xuICAgIHRleHRCbG9jay5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuICAgIHRleHRCbG9jay5pbm5lckhUTUwgPSBtYWluVGV4dENvbnRlbnQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRIb21lcGFnZSB9IGZyb20gXCIuL2xvYWQtaG9tZXBhZ2VcIjtcbmltcG9ydCB7IGxvYWRIZWFkZXIgfSBmcm9tIFwiLi9sb2FkLWhlYWRlclwiO1xuXG5sb2FkSGVhZGVyKCk7XG5sb2FkSG9tZXBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=