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
    const heroImage = document.createElement('div');
    const textContainer = document.createElement('div');
    const title = document.createElement('h2');
    const textBlock = document.createElement('p');
    let mainTextContent = 'Da Guglielmo is an artisan Italian cheesery located in the heart of Wuppertal. Our cheeses are made with the finest ingredients, using traditional methods passed down through generations. From creamy burrata to tangy pecorino, our selection is sure to satisfy even the most discerning cheese lovers. Stop by our shop today and taste the difference of handcrafted Italian cheese.';
    let titleContent = 'Experience the Finest Handcrafted Italian Cheese at Da Guglielmo';

    document.title = "Da Guglielmo | Home"
    content.appendChild(mainContainer);
    mainContainer.id = "main-container";
    mainContainer.appendChild(heroImage);
    heroImage.id = "main-image";
    mainContainer.appendChild(textContainer);
    textContainer.id = "text-container";
    textContainer.appendChild(title);
    title.id = "title";
    title.innerHTML = titleContent; 
    textContainer.appendChild(textBlock);
    textBlock.classList.add('text-block');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNKOztBQUUzQyx3REFBVTtBQUNWLDREQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQtaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgdGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXHRjb25zdCBuYXZJdGVtcyA9IFtcblx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcblx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcblx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcblx0XTtcblx0Y29uc3QgbmF2SXRlbU5hbWVzID0gW1wiSG9tZVwiLCBcIk91ciBTdG9yeVwiLCBcIkNvbnRhY3RcIl07XG5cdGZ1bmN0aW9uIGFkZE5hdkl0ZW1zKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRuYXZNZW51LmFwcGVuZENoaWxkKG5hdkl0ZW1zW2ldKTtcblx0XHRcdG5hdkl0ZW1zW2ldLmlubmVySFRNTCA9IG5hdkl0ZW1OYW1lc1tpXTtcblx0XHRcdG5hdkl0ZW1zW2ldLmNsYXNzTGlzdDtcblx0XHR9XG5cdH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQmFyKTtcbiAgICB0aXRsZUJhci5pZCA9IFwidGl0bGUtYmFyXCI7XG4gICAgdGl0bGVCYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cdGxvZ28uaW5uZXJIVE1MID0gXCJEYSBHdWdsaWVsbW9cIjtcblx0bG9nby5pZCA9IFwibG9nb1wiO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKHRvcEJhcik7XG5cdHRvcEJhci5pZCA9IFwidG9wLWJhclwiO1xuXHR0b3BCYXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXHRzdWJ0aXRsZS5pbm5lckhUTUwgPSBcIlRoZSBiZXN0IGNoZWVzZSBpbiBXdXBwZXJ0YWxcIjtcblx0dG9wQmFyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuXHRuYXZNZW51LmlkID0gXCJuYXYtbWVudVwiO1xuXHRhZGROYXZJdGVtcygpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZXBhZ2UoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHRleHRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgbWFpblRleHRDb250ZW50ID0gJ0RhIEd1Z2xpZWxtbyBpcyBhbiBhcnRpc2FuIEl0YWxpYW4gY2hlZXNlcnkgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgV3VwcGVydGFsLiBPdXIgY2hlZXNlcyBhcmUgbWFkZSB3aXRoIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMsIHVzaW5nIHRyYWRpdGlvbmFsIG1ldGhvZHMgcGFzc2VkIGRvd24gdGhyb3VnaCBnZW5lcmF0aW9ucy4gRnJvbSBjcmVhbXkgYnVycmF0YSB0byB0YW5neSBwZWNvcmlubywgb3VyIHNlbGVjdGlvbiBpcyBzdXJlIHRvIHNhdGlzZnkgZXZlbiB0aGUgbW9zdCBkaXNjZXJuaW5nIGNoZWVzZSBsb3ZlcnMuIFN0b3AgYnkgb3VyIHNob3AgdG9kYXkgYW5kIHRhc3RlIHRoZSBkaWZmZXJlbmNlIG9mIGhhbmRjcmFmdGVkIEl0YWxpYW4gY2hlZXNlLic7XG4gICAgbGV0IHRpdGxlQ29udGVudCA9ICdFeHBlcmllbmNlIHRoZSBGaW5lc3QgSGFuZGNyYWZ0ZWQgSXRhbGlhbiBDaGVlc2UgYXQgRGEgR3VnbGllbG1vJztcblxuICAgIGRvY3VtZW50LnRpdGxlID0gXCJEYSBHdWdsaWVsbW8gfCBIb21lXCJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICAgIG1haW5Db250YWluZXIuaWQgPSBcIm1haW4tY29udGFpbmVyXCI7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuICAgIGhlcm9JbWFnZS5pZCA9IFwibWFpbi1pbWFnZVwiO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG4gICAgdGV4dENvbnRhaW5lci5pZCA9IFwidGV4dC1jb250YWluZXJcIjtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZS5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZUNvbnRlbnQ7IFxuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEJsb2NrKTtcbiAgICB0ZXh0QmxvY2suY2xhc3NMaXN0LmFkZCgndGV4dC1ibG9jaycpO1xuICAgIHRleHRCbG9jay5pbm5lckhUTUwgPSBtYWluVGV4dENvbnRlbnQ7XG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZEhvbWVwYWdlIH0gZnJvbSBcIi4vbG9hZC1ob21lcGFnZVwiO1xuaW1wb3J0IHsgbG9hZEhlYWRlciB9IGZyb20gXCIuL2xvYWQtaGVhZGVyXCI7XG5cbmxvYWRIZWFkZXIoKTtcbmxvYWRIb21lcGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==