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
    const navItem1 = document.getElementById('nav-item-1');
    const navItem2 = document.getElementById('nav-item-2');
    const navItem3 = document.getElementById('nav-item-3');
	const mainContainer = document.getElementById("main-container");
	const heroImage = document.createElement("div");
	const textContainer = document.createElement("div");
	const title = document.createElement("h2");
	const textBlock = document.createElement("p");
	let mainTextContent =
		"Da Guglielmo is an artisan Italian cheesery located in the heart of Wuppertal. Our cheeses are made with the finest ingredients, using traditional methods passed down through generations. From creamy burrata to tangy pecorino, our selection is sure to satisfy even the most discerning cheese lovers. Stop by our shop today and taste the difference of handcrafted Italian cheese.";
	let titleContent =
		"Experience the Finest Handcrafted Italian Cheese at Da Guglielmo";

    navItem1.style.cssText = "border-bottom: rgb(200, 200, 200) 1px solid";
    navItem2.style.cssText = "";
    navItem3.style.cssText = "";
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
    const navItem1 = document.getElementById('nav-item-1');
    const navItem2 = document.getElementById('nav-item-2');
    const navItem3 = document.getElementById('nav-item-3');
	const mainContainer = document.getElementById("main-container");
	const heroImage = document.createElement("div");
	const textContainer = document.createElement("div");
    const title = document.createElement("h2");
    const textBlock = document.createElement("p");
    let mainTextContent = "At Da Guglielmo, our story begins with a passion for traditional Italian cheesemaking. Located in the heart of Wuppertal, our cheesery is dedicated to crafting the finest artisanal cheeses using time-honored methods and the highest quality ingredients.<br> <br> As cheese lovers ourselves, we understand the importance of flavor and authenticity. That's why we insist on using only the freshest milk and the most carefully sourced ingredients in our cheeses. From our creamy burrata to our tangy pecorino, each and every one of our cheeses is made by hand with care and attention to detail.<br> <br> Our love for cheese extends beyond just the taste. We also believe in supporting sustainable farming practices and working with local producers whenever possible. This commitment to quality and sustainability is what sets us apart and makes our cheeses truly special.<br> <br> We invite you to visit our shop and taste the difference for yourself. Whether you're a seasoned cheese connoisseur or just starting to explore the world of artisanal cheese, we're confident you'll find something to love at Da Guglielmo. Come see us today and discover the flavors of handcrafted Italian cheese."


    navItem1.style.cssText = "";
    navItem2.style.cssText = "border-bottom: rgb(200, 200, 200) 1px solid";
    navItem3.style.cssText = "";
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0k7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBVTtBQUNWO0FBQ0EsNERBQVk7O0FBRUw7QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCbUM7QUFDWTtBQUNDOztBQUV6QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0Msd0RBQVk7QUFDaEQsb0NBQW9DLHlEQUFZO0FBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DbUM7QUFDUTs7QUFFcEM7QUFDUCxDQUFDLGdEQUFRO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENtQztBQUNROztBQUVwQztBQUNQLENBQUMsZ0RBQVE7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1vdXItc3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRIZWFkZXIgfSBmcm9tIFwiLi9sb2FkLWhlYWRlclwiO1xuaW1wb3J0IHsgbG9hZEhvbWVwYWdlIH0gZnJvbSBcIi4vbG9hZC1ob21lcGFnZVwiO1xuXG5mdW5jdGlvbiBhZGRNYWluQ29udGFpbmVyKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblx0bWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcbn1cblxubG9hZEhlYWRlcigpO1xuYWRkTWFpbkNvbnRhaW5lcigpO1xubG9hZEhvbWVwYWdlKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRPTSgpIHtcblx0Y29uc3QgRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcblx0RE9NLnRleHRDb250ZW50ID0gXCJcIjtcbn1cbiIsImltcG9ydCB7IGNsZWFyRE9NIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IGxvYWRIb21lcGFnZSB9IGZyb20gXCIuL2xvYWQtaG9tZXBhZ2VcIjtcbmltcG9ydCB7IGxvYWRPdXJTdG9yeSB9IGZyb20gXCIuL2xvYWQtb3VyLXN0b3J5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuXHRjb25zb2xlLmxvZyhcImxvYWRpbmcgaGVhZGVyXCIpO1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0aXRsZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdGNvbnN0IG5hdkl0ZW1zID0gW1xuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxuXHRdO1xuXHRjb25zdCBuYXZJdGVtTmFtZXMgPSBbXCJIb21lXCIsIFwiT3VyIFN0b3J5XCIsIFwiQ29udGFjdFwiXTtcblx0ZnVuY3Rpb24gYWRkTmF2SXRlbXMoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdG5hdk1lbnUuYXBwZW5kQ2hpbGQobmF2SXRlbXNbaV0pO1xuXHRcdFx0bmF2SXRlbXNbaV0uaW5uZXJIVE1MID0gbmF2SXRlbU5hbWVzW2ldO1xuXHRcdFx0bmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuXHRcdFx0bmF2SXRlbXNbaV0uaWQgPSBcIm5hdi1pdGVtLVwiICsgKGkgKyAxKTtcblx0XHR9XG5cdH1cblx0Y29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXHRoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVCYXIpO1xuXHR0aXRsZUJhci5pZCA9IFwidGl0bGUtYmFyXCI7XG5cdHRpdGxlQmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuXHRsb2dvLmlubmVySFRNTCA9IFwiRGEgR3VnbGllbG1vXCI7XG5cdGxvZ28uaWQgPSBcImxvZ29cIjtcblx0aGVhZGVyLmFwcGVuZENoaWxkKHRvcEJhcik7XG5cdHRvcEJhci5pZCA9IFwidG9wLWJhclwiO1xuXHR0b3BCYXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXHRzdWJ0aXRsZS5pbm5lckhUTUwgPSBcIlRoZSBiZXN0IGNoZWVzZSBpbiBXdXBwZXJ0YWxcIjtcblx0dG9wQmFyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuXHRuYXZNZW51LmlkID0gXCJuYXYtbWVudVwiO1xuXHRhZGROYXZJdGVtcygpO1xuXG5cdGNvbnN0IG5hdkl0ZW0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtaXRlbS0xXCIpO1xuXHRjb25zdCBuYXZJdGVtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWl0ZW0tMlwiKTtcblxuXHRuYXZJdGVtMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEhvbWVwYWdlKTtcblx0bmF2SXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRPdXJTdG9yeSk7XG59XG4iLCJpbXBvcnQgeyBjbGVhckRPTSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBsb2FkSGVhZGVyIH0gZnJvbSBcIi4vbG9hZC1oZWFkZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lcGFnZSgpIHtcblx0Y2xlYXJET00oKTtcblx0Y29uc29sZS5sb2coXCJsb2FkaW5nIGhvbWVwYWdlXCIpO1xuICAgIGNvbnN0IG5hdkl0ZW0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1pdGVtLTEnKTtcbiAgICBjb25zdCBuYXZJdGVtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtaXRlbS0yJyk7XG4gICAgY29uc3QgbmF2SXRlbTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWl0ZW0tMycpO1xuXHRjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgaGVyb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRjb25zdCB0ZXh0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0bGV0IG1haW5UZXh0Q29udGVudCA9XG5cdFx0XCJEYSBHdWdsaWVsbW8gaXMgYW4gYXJ0aXNhbiBJdGFsaWFuIGNoZWVzZXJ5IGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIFd1cHBlcnRhbC4gT3VyIGNoZWVzZXMgYXJlIG1hZGUgd2l0aCB0aGUgZmluZXN0IGluZ3JlZGllbnRzLCB1c2luZyB0cmFkaXRpb25hbCBtZXRob2RzIHBhc3NlZCBkb3duIHRocm91Z2ggZ2VuZXJhdGlvbnMuIEZyb20gY3JlYW15IGJ1cnJhdGEgdG8gdGFuZ3kgcGVjb3Jpbm8sIG91ciBzZWxlY3Rpb24gaXMgc3VyZSB0byBzYXRpc2Z5IGV2ZW4gdGhlIG1vc3QgZGlzY2VybmluZyBjaGVlc2UgbG92ZXJzLiBTdG9wIGJ5IG91ciBzaG9wIHRvZGF5IGFuZCB0YXN0ZSB0aGUgZGlmZmVyZW5jZSBvZiBoYW5kY3JhZnRlZCBJdGFsaWFuIGNoZWVzZS5cIjtcblx0bGV0IHRpdGxlQ29udGVudCA9XG5cdFx0XCJFeHBlcmllbmNlIHRoZSBGaW5lc3QgSGFuZGNyYWZ0ZWQgSXRhbGlhbiBDaGVlc2UgYXQgRGEgR3VnbGllbG1vXCI7XG5cbiAgICBuYXZJdGVtMS5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItYm90dG9tOiByZ2IoMjAwLCAyMDAsIDIwMCkgMXB4IHNvbGlkXCI7XG4gICAgbmF2SXRlbTIuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG4gICAgbmF2SXRlbTMuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG5cdGRvY3VtZW50LnRpdGxlID0gXCJEYSBHdWdsaWVsbW8gfCBIb21lXCI7XG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcblx0aGVyb0ltYWdlLmlkID0gXCJob21lLWltYWdlXCI7XG5cdGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1pbWFnZVwiKTtcblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblx0dGV4dENvbnRhaW5lci5pZCA9IFwidGV4dC1jb250YWluZXJcIjtcblx0dGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdHRpdGxlLmlkID0gXCJ0aXRsZVwiO1xuXHR0aXRsZS5pbm5lckhUTUwgPSB0aXRsZUNvbnRlbnQ7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEJsb2NrKTtcblx0dGV4dEJsb2NrLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWJsb2NrXCIpO1xuXHR0ZXh0QmxvY2suaW5uZXJIVE1MID0gbWFpblRleHRDb250ZW50O1xufVxuIiwiaW1wb3J0IHsgY2xlYXJET00gfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgbG9hZEhlYWRlciB9IGZyb20gXCIuL2xvYWQtaGVhZGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkT3VyU3RvcnkoKSB7XG5cdGNsZWFyRE9NKCk7XG5cdGNvbnNvbGUubG9nKFwibG9hZGluZyBvdXIgc3RvcnlcIik7XG4gICAgY29uc3QgbmF2SXRlbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWl0ZW0tMScpO1xuICAgIGNvbnN0IG5hdkl0ZW0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1pdGVtLTInKTtcbiAgICBjb25zdCBuYXZJdGVtMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtaXRlbS0zJyk7XG5cdGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuXHRjb25zdCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCB0ZXh0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgbWFpblRleHRDb250ZW50ID0gXCJBdCBEYSBHdWdsaWVsbW8sIG91ciBzdG9yeSBiZWdpbnMgd2l0aCBhIHBhc3Npb24gZm9yIHRyYWRpdGlvbmFsIEl0YWxpYW4gY2hlZXNlbWFraW5nLiBMb2NhdGVkIGluIHRoZSBoZWFydCBvZiBXdXBwZXJ0YWwsIG91ciBjaGVlc2VyeSBpcyBkZWRpY2F0ZWQgdG8gY3JhZnRpbmcgdGhlIGZpbmVzdCBhcnRpc2FuYWwgY2hlZXNlcyB1c2luZyB0aW1lLWhvbm9yZWQgbWV0aG9kcyBhbmQgdGhlIGhpZ2hlc3QgcXVhbGl0eSBpbmdyZWRpZW50cy48YnI+IDxicj4gQXMgY2hlZXNlIGxvdmVycyBvdXJzZWx2ZXMsIHdlIHVuZGVyc3RhbmQgdGhlIGltcG9ydGFuY2Ugb2YgZmxhdm9yIGFuZCBhdXRoZW50aWNpdHkuIFRoYXQncyB3aHkgd2UgaW5zaXN0IG9uIHVzaW5nIG9ubHkgdGhlIGZyZXNoZXN0IG1pbGsgYW5kIHRoZSBtb3N0IGNhcmVmdWxseSBzb3VyY2VkIGluZ3JlZGllbnRzIGluIG91ciBjaGVlc2VzLiBGcm9tIG91ciBjcmVhbXkgYnVycmF0YSB0byBvdXIgdGFuZ3kgcGVjb3Jpbm8sIGVhY2ggYW5kIGV2ZXJ5IG9uZSBvZiBvdXIgY2hlZXNlcyBpcyBtYWRlIGJ5IGhhbmQgd2l0aCBjYXJlIGFuZCBhdHRlbnRpb24gdG8gZGV0YWlsLjxicj4gPGJyPiBPdXIgbG92ZSBmb3IgY2hlZXNlIGV4dGVuZHMgYmV5b25kIGp1c3QgdGhlIHRhc3RlLiBXZSBhbHNvIGJlbGlldmUgaW4gc3VwcG9ydGluZyBzdXN0YWluYWJsZSBmYXJtaW5nIHByYWN0aWNlcyBhbmQgd29ya2luZyB3aXRoIGxvY2FsIHByb2R1Y2VycyB3aGVuZXZlciBwb3NzaWJsZS4gVGhpcyBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIHN1c3RhaW5hYmlsaXR5IGlzIHdoYXQgc2V0cyB1cyBhcGFydCBhbmQgbWFrZXMgb3VyIGNoZWVzZXMgdHJ1bHkgc3BlY2lhbC48YnI+IDxicj4gV2UgaW52aXRlIHlvdSB0byB2aXNpdCBvdXIgc2hvcCBhbmQgdGFzdGUgdGhlIGRpZmZlcmVuY2UgZm9yIHlvdXJzZWxmLiBXaGV0aGVyIHlvdSdyZSBhIHNlYXNvbmVkIGNoZWVzZSBjb25ub2lzc2V1ciBvciBqdXN0IHN0YXJ0aW5nIHRvIGV4cGxvcmUgdGhlIHdvcmxkIG9mIGFydGlzYW5hbCBjaGVlc2UsIHdlJ3JlIGNvbmZpZGVudCB5b3UnbGwgZmluZCBzb21ldGhpbmcgdG8gbG92ZSBhdCBEYSBHdWdsaWVsbW8uIENvbWUgc2VlIHVzIHRvZGF5IGFuZCBkaXNjb3ZlciB0aGUgZmxhdm9ycyBvZiBoYW5kY3JhZnRlZCBJdGFsaWFuIGNoZWVzZS5cIlxuXG5cbiAgICBuYXZJdGVtMS5zdHlsZS5jc3NUZXh0ID0gXCJcIjtcbiAgICBuYXZJdGVtMi5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItYm90dG9tOiByZ2IoMjAwLCAyMDAsIDIwMCkgMXB4IHNvbGlkXCI7XG4gICAgbmF2SXRlbTMuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG5cdGRvY3VtZW50LnRpdGxlID0gXCJEYSBHdWdsaWVsbW8gfCBPdXIgU3RvcnlcIjtcblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuXHRoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1haW4taW1hZ2VcIik7XG5cdGhlcm9JbWFnZS5pZCA9IFwib3VyLXN0b3J5LWltYWdlXCI7XG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cdHRleHRDb250YWluZXIuaWQgPSBcInRleHQtY29udGFpbmVyXCI7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHR0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cdHRpdGxlLmlubmVySFRNTCA9IFwiV2hvIGFyZSB3ZT9cIjtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRCbG9jayk7XG4gICAgdGV4dEJsb2NrLmlubmVySFRNTCA9IG1haW5UZXh0Q29udGVudDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=