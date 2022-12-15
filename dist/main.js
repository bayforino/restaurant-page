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
/* harmony import */ var _load_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-homepage */ "./src/load-homepage.js");
/* harmony import */ var _load_our_story__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-our-story */ "./src/load-our-story.js");



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

	navItem1.addEventListener("click", _load_homepage__WEBPACK_IMPORTED_MODULE_0__.loadHomepage);
	navItem2.addEventListener("click", _load_our_story__WEBPACK_IMPORTED_MODULE_1__.loadOurStory);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0k7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBVTtBQUNWO0FBQ0EsNERBQVk7O0FBRUw7QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakIrQztBQUNDOztBQUV6QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0Msd0RBQVk7QUFDaEQsb0NBQW9DLHlEQUFZO0FBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUNtQzs7QUFFNUI7QUFDUCxDQUFDLGdEQUFRO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ21DOztBQUU1QjtBQUNQLENBQUMsZ0RBQVE7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1vdXItc3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRIZWFkZXIgfSBmcm9tIFwiLi9sb2FkLWhlYWRlclwiO1xuaW1wb3J0IHsgbG9hZEhvbWVwYWdlIH0gZnJvbSBcIi4vbG9hZC1ob21lcGFnZVwiO1xuXG5mdW5jdGlvbiBhZGRNYWluQ29udGFpbmVyKCkge1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblx0bWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcbn1cblxubG9hZEhlYWRlcigpO1xuYWRkTWFpbkNvbnRhaW5lcigpO1xubG9hZEhvbWVwYWdlKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRPTSgpIHtcblx0Y29uc3QgRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcblx0RE9NLnRleHRDb250ZW50ID0gXCJcIjtcbn1cbiIsImltcG9ydCB7IGxvYWRIb21lcGFnZSB9IGZyb20gXCIuL2xvYWQtaG9tZXBhZ2VcIjtcbmltcG9ydCB7IGxvYWRPdXJTdG9yeSB9IGZyb20gXCIuL2xvYWQtb3VyLXN0b3J5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuXHRjb25zb2xlLmxvZyhcImxvYWRpbmcgaGVhZGVyXCIpO1xuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0aXRsZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cdGNvbnN0IG5hdkl0ZW1zID0gW1xuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFxuXHRdO1xuXHRjb25zdCBuYXZJdGVtTmFtZXMgPSBbXCJIb21lXCIsIFwiT3VyIFN0b3J5XCIsIFwiQ29udGFjdFwiXTtcblx0ZnVuY3Rpb24gYWRkTmF2SXRlbXMoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdG5hdk1lbnUuYXBwZW5kQ2hpbGQobmF2SXRlbXNbaV0pO1xuXHRcdFx0bmF2SXRlbXNbaV0uaW5uZXJIVE1MID0gbmF2SXRlbU5hbWVzW2ldO1xuXHRcdFx0bmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuXHRcdFx0bmF2SXRlbXNbaV0uaWQgPSBcIm5hdi1pdGVtLVwiICsgKGkgKyAxKTtcblx0XHR9XG5cdH1cblx0Y29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXHRoZWFkZXIuaWQgPSBcImhlYWRlclwiO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVCYXIpO1xuXHR0aXRsZUJhci5pZCA9IFwidGl0bGUtYmFyXCI7XG5cdHRpdGxlQmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuXHRsb2dvLmlubmVySFRNTCA9IFwiRGEgR3VnbGllbG1vXCI7XG5cdGxvZ28uaWQgPSBcImxvZ29cIjtcblx0aGVhZGVyLmFwcGVuZENoaWxkKHRvcEJhcik7XG5cdHRvcEJhci5pZCA9IFwidG9wLWJhclwiO1xuXHR0b3BCYXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xuXHRzdWJ0aXRsZS5pbm5lckhUTUwgPSBcIlRoZSBiZXN0IGNoZWVzZSBpbiBXdXBwZXJ0YWxcIjtcblx0dG9wQmFyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuXHRuYXZNZW51LmlkID0gXCJuYXYtbWVudVwiO1xuXHRhZGROYXZJdGVtcygpO1xuXG5cdGNvbnN0IG5hdkl0ZW0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtaXRlbS0xXCIpO1xuXHRjb25zdCBuYXZJdGVtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWl0ZW0tMlwiKTtcblxuXHRuYXZJdGVtMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEhvbWVwYWdlKTtcblx0bmF2SXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRPdXJTdG9yeSk7XG59XG4iLCJpbXBvcnQgeyBjbGVhckRPTSB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZXBhZ2UoKSB7XG5cdGNsZWFyRE9NKCk7XG5cdGNvbnNvbGUubG9nKFwibG9hZGluZyBob21lcGFnZVwiKTtcbiAgICBjb25zdCBuYXZJdGVtMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtaXRlbS0xJyk7XG4gICAgY29uc3QgbmF2SXRlbTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWl0ZW0tMicpO1xuICAgIGNvbnN0IG5hdkl0ZW0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1pdGVtLTMnKTtcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG5cdGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0Y29uc3QgdGV4dEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGxldCBtYWluVGV4dENvbnRlbnQgPVxuXHRcdFwiRGEgR3VnbGllbG1vIGlzIGFuIGFydGlzYW4gSXRhbGlhbiBjaGVlc2VyeSBsb2NhdGVkIGluIHRoZSBoZWFydCBvZiBXdXBwZXJ0YWwuIE91ciBjaGVlc2VzIGFyZSBtYWRlIHdpdGggdGhlIGZpbmVzdCBpbmdyZWRpZW50cywgdXNpbmcgdHJhZGl0aW9uYWwgbWV0aG9kcyBwYXNzZWQgZG93biB0aHJvdWdoIGdlbmVyYXRpb25zLiBGcm9tIGNyZWFteSBidXJyYXRhIHRvIHRhbmd5IHBlY29yaW5vLCBvdXIgc2VsZWN0aW9uIGlzIHN1cmUgdG8gc2F0aXNmeSBldmVuIHRoZSBtb3N0IGRpc2Nlcm5pbmcgY2hlZXNlIGxvdmVycy4gU3RvcCBieSBvdXIgc2hvcCB0b2RheSBhbmQgdGFzdGUgdGhlIGRpZmZlcmVuY2Ugb2YgaGFuZGNyYWZ0ZWQgSXRhbGlhbiBjaGVlc2UuXCI7XG5cdGxldCB0aXRsZUNvbnRlbnQgPVxuXHRcdFwiRXhwZXJpZW5jZSB0aGUgRmluZXN0IEhhbmRjcmFmdGVkIEl0YWxpYW4gQ2hlZXNlIGF0IERhIEd1Z2xpZWxtb1wiO1xuXG4gICAgbmF2SXRlbTEuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWJvdHRvbTogcmdiKDIwMCwgMjAwLCAyMDApIDFweCBzb2xpZFwiO1xuICAgIG5hdkl0ZW0yLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICAgIG5hdkl0ZW0zLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xuXHRkb2N1bWVudC50aXRsZSA9IFwiRGEgR3VnbGllbG1vIHwgSG9tZVwiO1xuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XG5cdGhlcm9JbWFnZS5pZCA9IFwiaG9tZS1pbWFnZVwiO1xuXHRoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1haW4taW1hZ2VcIik7XG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cdHRleHRDb250YWluZXIuaWQgPSBcInRleHQtY29udGFpbmVyXCI7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHR0aXRsZS5pZCA9IFwidGl0bGVcIjtcblx0dGl0bGUuaW5uZXJIVE1MID0gdGl0bGVDb250ZW50O1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRCbG9jayk7XG5cdHRleHRCbG9jay5jbGFzc0xpc3QuYWRkKFwidGV4dC1ibG9ja1wiKTtcblx0dGV4dEJsb2NrLmlubmVySFRNTCA9IG1haW5UZXh0Q29udGVudDtcbn1cbiIsImltcG9ydCB7IGNsZWFyRE9NIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPdXJTdG9yeSgpIHtcblx0Y2xlYXJET00oKTtcblx0Y29uc29sZS5sb2coXCJsb2FkaW5nIG91ciBzdG9yeVwiKTtcbiAgICBjb25zdCBuYXZJdGVtMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtaXRlbS0xJyk7XG4gICAgY29uc3QgbmF2SXRlbTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWl0ZW0tMicpO1xuICAgIGNvbnN0IG5hdkl0ZW0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1pdGVtLTMnKTtcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG5cdGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IHRleHRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBtYWluVGV4dENvbnRlbnQgPSBcIkF0IERhIEd1Z2xpZWxtbywgb3VyIHN0b3J5IGJlZ2lucyB3aXRoIGEgcGFzc2lvbiBmb3IgdHJhZGl0aW9uYWwgSXRhbGlhbiBjaGVlc2VtYWtpbmcuIExvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIFd1cHBlcnRhbCwgb3VyIGNoZWVzZXJ5IGlzIGRlZGljYXRlZCB0byBjcmFmdGluZyB0aGUgZmluZXN0IGFydGlzYW5hbCBjaGVlc2VzIHVzaW5nIHRpbWUtaG9ub3JlZCBtZXRob2RzIGFuZCB0aGUgaGlnaGVzdCBxdWFsaXR5IGluZ3JlZGllbnRzLjxicj4gPGJyPiBBcyBjaGVlc2UgbG92ZXJzIG91cnNlbHZlcywgd2UgdW5kZXJzdGFuZCB0aGUgaW1wb3J0YW5jZSBvZiBmbGF2b3IgYW5kIGF1dGhlbnRpY2l0eS4gVGhhdCdzIHdoeSB3ZSBpbnNpc3Qgb24gdXNpbmcgb25seSB0aGUgZnJlc2hlc3QgbWlsayBhbmQgdGhlIG1vc3QgY2FyZWZ1bGx5IHNvdXJjZWQgaW5ncmVkaWVudHMgaW4gb3VyIGNoZWVzZXMuIEZyb20gb3VyIGNyZWFteSBidXJyYXRhIHRvIG91ciB0YW5neSBwZWNvcmlubywgZWFjaCBhbmQgZXZlcnkgb25lIG9mIG91ciBjaGVlc2VzIGlzIG1hZGUgYnkgaGFuZCB3aXRoIGNhcmUgYW5kIGF0dGVudGlvbiB0byBkZXRhaWwuPGJyPiA8YnI+IE91ciBsb3ZlIGZvciBjaGVlc2UgZXh0ZW5kcyBiZXlvbmQganVzdCB0aGUgdGFzdGUuIFdlIGFsc28gYmVsaWV2ZSBpbiBzdXBwb3J0aW5nIHN1c3RhaW5hYmxlIGZhcm1pbmcgcHJhY3RpY2VzIGFuZCB3b3JraW5nIHdpdGggbG9jYWwgcHJvZHVjZXJzIHdoZW5ldmVyIHBvc3NpYmxlLiBUaGlzIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSBhbmQgc3VzdGFpbmFiaWxpdHkgaXMgd2hhdCBzZXRzIHVzIGFwYXJ0IGFuZCBtYWtlcyBvdXIgY2hlZXNlcyB0cnVseSBzcGVjaWFsLjxicj4gPGJyPiBXZSBpbnZpdGUgeW91IHRvIHZpc2l0IG91ciBzaG9wIGFuZCB0YXN0ZSB0aGUgZGlmZmVyZW5jZSBmb3IgeW91cnNlbGYuIFdoZXRoZXIgeW91J3JlIGEgc2Vhc29uZWQgY2hlZXNlIGNvbm5vaXNzZXVyIG9yIGp1c3Qgc3RhcnRpbmcgdG8gZXhwbG9yZSB0aGUgd29ybGQgb2YgYXJ0aXNhbmFsIGNoZWVzZSwgd2UncmUgY29uZmlkZW50IHlvdSdsbCBmaW5kIHNvbWV0aGluZyB0byBsb3ZlIGF0IERhIEd1Z2xpZWxtby4gQ29tZSBzZWUgdXMgdG9kYXkgYW5kIGRpc2NvdmVyIHRoZSBmbGF2b3JzIG9mIGhhbmRjcmFmdGVkIEl0YWxpYW4gY2hlZXNlLlwiXG5cblxuICAgIG5hdkl0ZW0xLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICAgIG5hdkl0ZW0yLnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci1ib3R0b206IHJnYigyMDAsIDIwMCwgMjAwKSAxcHggc29saWRcIjtcbiAgICBuYXZJdGVtMy5zdHlsZS5jc3NUZXh0ID0gXCJcIjtcblx0ZG9jdW1lbnQudGl0bGUgPSBcIkRhIEd1Z2xpZWxtbyB8IE91ciBTdG9yeVwiO1xuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XG5cdGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1pbWFnZVwiKTtcblx0aGVyb0ltYWdlLmlkID0gXCJvdXItc3RvcnktaW1hZ2VcIjtcblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblx0dGV4dENvbnRhaW5lci5pZCA9IFwidGV4dC1jb250YWluZXJcIjtcblx0dGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblx0dGl0bGUuaW5uZXJIVE1MID0gXCJXaG8gYXJlIHdlP1wiO1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEJsb2NrKTtcbiAgICB0ZXh0QmxvY2suaW5uZXJIVE1MID0gbWFpblRleHRDb250ZW50O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==