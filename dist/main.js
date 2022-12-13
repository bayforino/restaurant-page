/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDOM": () => (/* binding */ clearDOM)
/* harmony export */ });
/* harmony import */ var _load_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-header */ "./src/load-header.js");
/* harmony import */ var _load_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-homepage */ "./src/load-homepage.js");



function addMainContainer() {
	const content = document.getElementById("content");
	const mainContainer = document.createElement("div");
	content.appendChild(mainContainer);
	mainContainer.id = "main-container";
}

(0,_load_header__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();
addMainContainer();
(0,_load_homepage__WEBPACK_IMPORTED_MODULE_1__.loadHomepage)();

function clearDOM() {
	const DOM = document.getElementById("main-container");
	DOM.textContent = "";
}


/***/ }),

/***/ "./src/load-header.js":
/*!****************************!*\
  !*** ./src/load-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _load_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-homepage */ "./src/load-homepage.js");
/* harmony import */ var _load_our_story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-our-story */ "./src/load-our-story.js");




function loadHeader() {
	console.log("loading header");
	const content = document.getElementById("content");
	const header = document.createElement("div");
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
			navItems[i].classList.add("nav-item");
			navItems[i].id = "nav-item-" + (i + 1);
		}
	}
	content.appendChild(header);
	header.id = "header";
	header.appendChild(titleBar);
	titleBar.id = "title-bar";
	titleBar.appendChild(logo);
	logo.innerHTML = "Da Guglielmo";
	logo.id = "logo";
	header.appendChild(topBar);
	topBar.id = "top-bar";
	topBar.appendChild(subtitle);
	subtitle.innerHTML = "The best cheese in Wuppertal";
	topBar.appendChild(navMenu);
	navMenu.id = "nav-menu";
	addNavItems();

	const navItem1 = document.getElementById("nav-item-1");
	const navItem2 = document.getElementById("nav-item-2");

	navItem1.addEventListener("click", _load_homepage__WEBPACK_IMPORTED_MODULE_1__.loadHomepage);
	navItem2.addEventListener("click", _load_our_story__WEBPACK_IMPORTED_MODULE_2__.loadOurStory);
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _load_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-header */ "./src/load-header.js");



function loadHomepage() {
	(0,_index__WEBPACK_IMPORTED_MODULE_0__.clearDOM)();
	console.log("loading homepage");
	const mainContainer = document.getElementById("main-container");
	const heroImage = document.createElement("div");
	const textContainer = document.createElement("div");
	const title = document.createElement("h2");
	const textBlock = document.createElement("p");
	let mainTextContent =
		"Da Guglielmo is an artisan Italian cheesery located in the heart of Wuppertal. Our cheeses are made with the finest ingredients, using traditional methods passed down through generations. From creamy burrata to tangy pecorino, our selection is sure to satisfy even the most discerning cheese lovers. Stop by our shop today and taste the difference of handcrafted Italian cheese.";
	let titleContent =
		"Experience the Finest Handcrafted Italian Cheese at Da Guglielmo";

	document.title = "Da Guglielmo | Home";
	mainContainer.appendChild(heroImage);
	heroImage.id = "home-image";
	heroImage.classList.add("main-image");
	mainContainer.appendChild(textContainer);
	textContainer.id = "text-container";
	textContainer.appendChild(title);
	title.id = "title";
	title.innerHTML = titleContent;
	textContainer.appendChild(textBlock);
	textBlock.classList.add("text-block");
	textBlock.innerHTML = mainTextContent;
}


/***/ }),

/***/ "./src/load-our-story.js":
/*!*******************************!*\
  !*** ./src/load-our-story.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadOurStory": () => (/* binding */ loadOurStory)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _load_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-header */ "./src/load-header.js");



function loadOurStory() {
	(0,_index__WEBPACK_IMPORTED_MODULE_0__.clearDOM)();
	console.log("loading our story");
	const mainContainer = document.getElementById("main-container");
	const heroImage = document.createElement("div");
	const textContainer = document.createElement("div");
    const title = document.createElement("h2");
    const textBlock = document.createElement("p");

	document.title = "Da Guglielmo | Our Story";
	mainContainer.appendChild(heroImage);
	heroImage.classList.add("main-image");
	heroImage.id = "our-story-image";
	mainContainer.appendChild(textContainer);
	textContainer.id = "text-container";
	textContainer.appendChild(title);
	title.classList.add("title");
	title.innerHTML = "Who are we?";
    textContainer.appendChild(textBlock);
    textBlock.innerHTML = "At Da Guglielmo, our story begins with a passion for traditional Italian cheesemaking. Located in the heart of Wuppertal, our cheesery is dedicated to crafting the finest artisanal cheeses using time-honored methods and the highest quality ingredients.<br> <br> As cheese lovers ourselves, we understand the importance of flavor and authenticity. That's why we insist on using only the freshest milk and the most carefully sourced ingredients in our cheeses. From our creamy burrata to our tangy pecorino, each and every one of our cheeses is made by hand with care and attention to detail.<br> <br> Our love for cheese extends beyond just the taste. We also believe in supporting sustainable farming practices and working with local producers whenever possible. This commitment to quality and sustainability is what sets us apart and makes our cheeses truly special.<br> <br> We invite you to visit our shop and taste the difference for yourself. Whether you're a seasoned cheese connoisseur or just starting to explore the world of artisanal cheese, we're confident you'll find something to love at Da Guglielmo. Come see us today and discover the flavors of handcrafted Italian cheese.";
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0k7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBVTtBQUNWO0FBQ0EsNERBQVk7O0FBRUw7QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCbUM7QUFDWTtBQUNDOztBQUV6QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0Msd0RBQVk7QUFDaEQsb0NBQW9DLHlEQUFZO0FBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DbUM7QUFDUTs7QUFFcEM7QUFDUCxDQUFDLGdEQUFRO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJtQztBQUNROztBQUVwQztBQUNQLENBQUMsZ0RBQVE7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1vdXItc3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRIZWFkZXIgfSBmcm9tIFwiLi9sb2FkLWhlYWRlclwiO1xuaW1wb3J0IHsgbG9hZEhvbWVwYWdlIH0gZnJvbSBcIi4vbG9hZC1ob21lcGFnZVwiO1xuXG5mdW5jdGlvbiBhZGRNYWluQ29udGFpbmVyKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblx0bWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcbn1cblxubG9hZEhlYWRlcigpO1xuYWRkTWFpbkNvbnRhaW5lcigpO1xubG9hZEhvbWVwYWdlKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRPTSgpIHtcblx0Y29uc3QgRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcblx0RE9NLnRleHRDb250ZW50ID0gXCJcIjtcbn1cbiIsImltcG9ydCB7IGNsZWFyRE9NIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGxvYWRIb21lcGFnZSB9IGZyb20gXCIuL2xvYWQtaG9tZXBhZ2VcIjtcbmltcG9ydCB7IGxvYWRPdXJTdG9yeSB9IGZyb20gXCIuL2xvYWQtb3VyLXN0b3J5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuXHRjb25zb2xlLmxvZyhcImxvYWRpbmcgaGVhZGVyXCIpO1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0aXRsZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdGNvbnN0IG5hdkl0ZW1zID0gW1xuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxuXHRdO1xuXHRjb25zdCBuYXZJdGVtTmFtZXMgPSBbXCJIb21lXCIsIFwiT3VyIFN0b3J5XCIsIFwiQ29udGFjdFwiXTtcblx0ZnVuY3Rpb24gYWRkTmF2SXRlbXMoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdG5hdk1lbnUuYXBwZW5kQ2hpbGQobmF2SXRlbXNbaV0pO1xuXHRcdFx0bmF2SXRlbXNbaV0uaW5uZXJIVE1MID0gbmF2SXRlbU5hbWVzW2ldO1xuXHRcdFx0bmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuXHRcdFx0bmF2SXRlbXNbaV0uaWQgPSBcIm5hdi1pdGVtLVwiICsgKGkgKyAxKTtcblx0XHR9XG5cdH1cblx0Y29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXHRoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVCYXIpO1xuXHR0aXRsZUJhci5pZCA9IFwidGl0bGUtYmFyXCI7XG5cdHRpdGxlQmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuXHRsb2dvLmlubmVySFRNTCA9IFwiRGEgR3VnbGllbG1vXCI7XG5cdGxvZ28uaWQgPSBcImxvZ29cIjtcblx0aGVhZGVyLmFwcGVuZENoaWxkKHRvcEJhcik7XG5cdHRvcEJhci5pZCA9IFwidG9wLWJhclwiO1xuXHR0b3BCYXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXHRzdWJ0aXRsZS5pbm5lckhUTUwgPSBcIlRoZSBiZXN0IGNoZWVzZSBpbiBXdXBwZXJ0YWxcIjtcblx0dG9wQmFyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuXHRuYXZNZW51LmlkID0gXCJuYXYtbWVudVwiO1xuXHRhZGROYXZJdGVtcygpO1xuXG5cdGNvbnN0IG5hdkl0ZW0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtaXRlbS0xXCIpO1xuXHRjb25zdCBuYXZJdGVtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWl0ZW0tMlwiKTtcblxuXHRuYXZJdGVtMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEhvbWVwYWdlKTtcblx0bmF2SXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRPdXJTdG9yeSk7XG59XG4iLCJpbXBvcnQgeyBjbGVhckRPTSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBsb2FkSGVhZGVyIH0gZnJvbSBcIi4vbG9hZC1oZWFkZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lcGFnZSgpIHtcblx0Y2xlYXJET00oKTtcblx0Y29uc29sZS5sb2coXCJsb2FkaW5nIGhvbWVwYWdlXCIpO1xuXHRjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgaGVyb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRjb25zdCB0ZXh0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0bGV0IG1haW5UZXh0Q29udGVudCA9XG5cdFx0XCJEYSBHdWdsaWVsbW8gaXMgYW4gYXJ0aXNhbiBJdGFsaWFuIGNoZWVzZXJ5IGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIFd1cHBlcnRhbC4gT3VyIGNoZWVzZXMgYXJlIG1hZGUgd2l0aCB0aGUgZmluZXN0IGluZ3JlZGllbnRzLCB1c2luZyB0cmFkaXRpb25hbCBtZXRob2RzIHBhc3NlZCBkb3duIHRocm91Z2ggZ2VuZXJhdGlvbnMuIEZyb20gY3JlYW15IGJ1cnJhdGEgdG8gdGFuZ3kgcGVjb3Jpbm8sIG91ciBzZWxlY3Rpb24gaXMgc3VyZSB0byBzYXRpc2Z5IGV2ZW4gdGhlIG1vc3QgZGlzY2VybmluZyBjaGVlc2UgbG92ZXJzLiBTdG9wIGJ5IG91ciBzaG9wIHRvZGF5IGFuZCB0YXN0ZSB0aGUgZGlmZmVyZW5jZSBvZiBoYW5kY3JhZnRlZCBJdGFsaWFuIGNoZWVzZS5cIjtcblx0bGV0IHRpdGxlQ29udGVudCA9XG5cdFx0XCJFeHBlcmllbmNlIHRoZSBGaW5lc3QgSGFuZGNyYWZ0ZWQgSXRhbGlhbiBDaGVlc2UgYXQgRGEgR3VnbGllbG1vXCI7XG5cblx0ZG9jdW1lbnQudGl0bGUgPSBcIkRhIEd1Z2xpZWxtbyB8IEhvbWVcIjtcblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuXHRoZXJvSW1hZ2UuaWQgPSBcImhvbWUtaW1hZ2VcIjtcblx0aGVyb0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJtYWluLWltYWdlXCIpO1xuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXHR0ZXh0Q29udGFpbmVyLmlkID0gXCJ0ZXh0LWNvbnRhaW5lclwiO1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblx0dGl0bGUuaWQgPSBcInRpdGxlXCI7XG5cdHRpdGxlLmlubmVySFRNTCA9IHRpdGxlQ29udGVudDtcblx0dGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0QmxvY2spO1xuXHR0ZXh0QmxvY2suY2xhc3NMaXN0LmFkZChcInRleHQtYmxvY2tcIik7XG5cdHRleHRCbG9jay5pbm5lckhUTUwgPSBtYWluVGV4dENvbnRlbnQ7XG59XG4iLCJpbXBvcnQgeyBjbGVhckRPTSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBsb2FkSGVhZGVyIH0gZnJvbSBcIi4vbG9hZC1oZWFkZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPdXJTdG9yeSgpIHtcblx0Y2xlYXJET00oKTtcblx0Y29uc29sZS5sb2coXCJsb2FkaW5nIG91ciBzdG9yeVwiKTtcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG5cdGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IHRleHRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdGRvY3VtZW50LnRpdGxlID0gXCJEYSBHdWdsaWVsbW8gfCBPdXIgU3RvcnlcIjtcblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuXHRoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1haW4taW1hZ2VcIik7XG5cdGhlcm9JbWFnZS5pZCA9IFwib3VyLXN0b3J5LWltYWdlXCI7XG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cdHRleHRDb250YWluZXIuaWQgPSBcInRleHQtY29udGFpbmVyXCI7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHR0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cdHRpdGxlLmlubmVySFRNTCA9IFwiV2hvIGFyZSB3ZT9cIjtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRCbG9jayk7XG4gICAgdGV4dEJsb2NrLmlubmVySFRNTCA9IFwiQXQgRGEgR3VnbGllbG1vLCBvdXIgc3RvcnkgYmVnaW5zIHdpdGggYSBwYXNzaW9uIGZvciB0cmFkaXRpb25hbCBJdGFsaWFuIGNoZWVzZW1ha2luZy4gTG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgV3VwcGVydGFsLCBvdXIgY2hlZXNlcnkgaXMgZGVkaWNhdGVkIHRvIGNyYWZ0aW5nIHRoZSBmaW5lc3QgYXJ0aXNhbmFsIGNoZWVzZXMgdXNpbmcgdGltZS1ob25vcmVkIG1ldGhvZHMgYW5kIHRoZSBoaWdoZXN0IHF1YWxpdHkgaW5ncmVkaWVudHMuPGJyPiA8YnI+IEFzIGNoZWVzZSBsb3ZlcnMgb3Vyc2VsdmVzLCB3ZSB1bmRlcnN0YW5kIHRoZSBpbXBvcnRhbmNlIG9mIGZsYXZvciBhbmQgYXV0aGVudGljaXR5LiBUaGF0J3Mgd2h5IHdlIGluc2lzdCBvbiB1c2luZyBvbmx5IHRoZSBmcmVzaGVzdCBtaWxrIGFuZCB0aGUgbW9zdCBjYXJlZnVsbHkgc291cmNlZCBpbmdyZWRpZW50cyBpbiBvdXIgY2hlZXNlcy4gRnJvbSBvdXIgY3JlYW15IGJ1cnJhdGEgdG8gb3VyIHRhbmd5IHBlY29yaW5vLCBlYWNoIGFuZCBldmVyeSBvbmUgb2Ygb3VyIGNoZWVzZXMgaXMgbWFkZSBieSBoYW5kIHdpdGggY2FyZSBhbmQgYXR0ZW50aW9uIHRvIGRldGFpbC48YnI+IDxicj4gT3VyIGxvdmUgZm9yIGNoZWVzZSBleHRlbmRzIGJleW9uZCBqdXN0IHRoZSB0YXN0ZS4gV2UgYWxzbyBiZWxpZXZlIGluIHN1cHBvcnRpbmcgc3VzdGFpbmFibGUgZmFybWluZyBwcmFjdGljZXMgYW5kIHdvcmtpbmcgd2l0aCBsb2NhbCBwcm9kdWNlcnMgd2hlbmV2ZXIgcG9zc2libGUuIFRoaXMgY29tbWl0bWVudCB0byBxdWFsaXR5IGFuZCBzdXN0YWluYWJpbGl0eSBpcyB3aGF0IHNldHMgdXMgYXBhcnQgYW5kIG1ha2VzIG91ciBjaGVlc2VzIHRydWx5IHNwZWNpYWwuPGJyPiA8YnI+IFdlIGludml0ZSB5b3UgdG8gdmlzaXQgb3VyIHNob3AgYW5kIHRhc3RlIHRoZSBkaWZmZXJlbmNlIGZvciB5b3Vyc2VsZi4gV2hldGhlciB5b3UncmUgYSBzZWFzb25lZCBjaGVlc2UgY29ubm9pc3NldXIgb3IganVzdCBzdGFydGluZyB0byBleHBsb3JlIHRoZSB3b3JsZCBvZiBhcnRpc2FuYWwgY2hlZXNlLCB3ZSdyZSBjb25maWRlbnQgeW91J2xsIGZpbmQgc29tZXRoaW5nIHRvIGxvdmUgYXQgRGEgR3VnbGllbG1vLiBDb21lIHNlZSB1cyB0b2RheSBhbmQgZGlzY292ZXIgdGhlIGZsYXZvcnMgb2YgaGFuZGNyYWZ0ZWQgSXRhbGlhbiBjaGVlc2UuXCI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9