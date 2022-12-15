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

/***/ "./src/load-contact.js":
/*!*****************************!*\
  !*** ./src/load-contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function loadContact() {
	(0,_index__WEBPACK_IMPORTED_MODULE_0__.clearDOM)();
	console.log("loading our story");
	const navItem1 = document.getElementById("nav-item-1");
	const navItem2 = document.getElementById("nav-item-2");
	const navItem3 = document.getElementById("nav-item-3");
	const mainContainer = document.getElementById("main-container");
	const textContainer = document.createElement("div");
	const title = document.createElement("h2");
	const textBlock = document.createElement("p");
	let titleContent = "Get in touch with us";
	let mainTextContent =
		"<strong>Membership and Enquiries</strong><br><br>Every day, 8am–5pm<br>Call: +44 (0)1234 56780<br>Email: enquiries@daguglielmo.com";

	navItem1.style.cssText = "";
	navItem2.style.cssText = "";
	navItem3.style.cssText = "border-bottom: rgb(200, 200, 200) 1px solid";
	document.title = "Da Guglielmo | Contact Us";

	mainContainer.appendChild(textContainer);
	textContainer.id = "text-container";
	textContainer.appendChild(title);
	title.id = "title";
	title.innerHTML = titleContent;
	textContainer.appendChild(textBlock);
	textBlock.innerHTML = mainTextContent;
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
/* harmony import */ var _load_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-contact */ "./src/load-contact.js");
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
	const navItem3 = document.getElementById("nav-item-3");

	navItem1.addEventListener("click", _load_homepage__WEBPACK_IMPORTED_MODULE_1__.loadHomepage);
	navItem2.addEventListener("click", _load_our_story__WEBPACK_IMPORTED_MODULE_2__.loadOurStory);
	navItem3.addEventListener("click", _load_contact__WEBPACK_IMPORTED_MODULE_0__.loadContact);
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
	const navItem1 = document.getElementById("nav-item-1");
	const navItem2 = document.getElementById("nav-item-2");
	const navItem3 = document.getElementById("nav-item-3");
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
	const navItem1 = document.getElementById("nav-item-1");
	const navItem2 = document.getElementById("nav-item-2");
	const navItem3 = document.getElementById("nav-item-3");
	const mainContainer = document.getElementById("main-container");
	const heroImage = document.createElement("div");
	const textContainer = document.createElement("div");
	const title = document.createElement("h2");
	const textBlock = document.createElement("p");
	let titleContent = "Who are we?";
	let mainTextContent =
		"At Da Guglielmo, our story begins with a passion for traditional Italian cheesemaking. Located in the heart of Wuppertal, our cheesery is dedicated to crafting the finest artisanal cheeses using time-honored methods and the highest quality ingredients.<br> <br> As cheese lovers ourselves, we understand the importance of flavor and authenticity. That's why we insist on using only the freshest milk and the most carefully sourced ingredients in our cheeses. From our creamy burrata to our tangy pecorino, each and every one of our cheeses is made by hand with care and attention to detail.<br> <br> Our love for cheese extends beyond just the taste. We also believe in supporting sustainable farming practices and working with local producers whenever possible. This commitment to quality and sustainability is what sets us apart and makes our cheeses truly special.<br> <br> We invite you to visit our shop and taste the difference for yourself. Whether you're a seasoned cheese connoisseur or just starting to explore the world of artisanal cheese, we're confident you'll find something to love at Da Guglielmo. Come see us today and discover the flavors of handcrafted Italian cheese.";

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
	title.innerHTML = titleContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0k7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBVTtBQUNWO0FBQ0EsNERBQVk7O0FBRUw7QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQm1DOztBQUU1QjtBQUNQLENBQUMsZ0RBQVE7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCNkM7QUFDRTtBQUNDOztBQUV6QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyx3REFBWTtBQUNoRCxvQ0FBb0MseURBQVk7QUFDaEQsb0NBQW9DLHNEQUFXO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7O0FDakRtQzs7QUFFNUI7QUFDUCxDQUFDLGdEQUFRO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ21DOztBQUU1QjtBQUNQLENBQUMsZ0RBQVE7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLWNvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQtaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLWhvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLW91ci1zdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEhlYWRlciB9IGZyb20gXCIuL2xvYWQtaGVhZGVyXCI7XG5pbXBvcnQgeyBsb2FkSG9tZXBhZ2UgfSBmcm9tIFwiLi9sb2FkLWhvbWVwYWdlXCI7XG5cbmZ1bmN0aW9uIGFkZE1haW5Db250YWluZXIoKSB7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXHRtYWluQ29udGFpbmVyLmlkID0gXCJtYWluLWNvbnRhaW5lclwiO1xufVxuXG5sb2FkSGVhZGVyKCk7XG5hZGRNYWluQ29udGFpbmVyKCk7XG5sb2FkSG9tZXBhZ2UoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuXHRjb25zdCBET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuXHRET00udGV4dENvbnRlbnQgPSBcIlwiO1xufVxuIiwiaW1wb3J0IHsgY2xlYXJET00gfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG5cdGNsZWFyRE9NKCk7XG5cdGNvbnNvbGUubG9nKFwibG9hZGluZyBvdXIgc3RvcnlcIik7XG5cdGNvbnN0IG5hdkl0ZW0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtaXRlbS0xXCIpO1xuXHRjb25zdCBuYXZJdGVtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWl0ZW0tMlwiKTtcblx0Y29uc3QgbmF2SXRlbTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1pdGVtLTNcIik7XG5cdGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGFpbmVyXCIpO1xuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdGNvbnN0IHRleHRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRsZXQgdGl0bGVDb250ZW50ID0gXCJHZXQgaW4gdG91Y2ggd2l0aCB1c1wiO1xuXHRsZXQgbWFpblRleHRDb250ZW50ID1cblx0XHRcIjxzdHJvbmc+TWVtYmVyc2hpcCBhbmQgRW5xdWlyaWVzPC9zdHJvbmc+PGJyPjxicj5FdmVyeSBkYXksIDhhbeKAkzVwbTxicj5DYWxsOiArNDQgKDApMTIzNCA1Njc4MDxicj5FbWFpbDogZW5xdWlyaWVzQGRhZ3VnbGllbG1vLmNvbVwiO1xuXG5cdG5hdkl0ZW0xLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xuXHRuYXZJdGVtMi5zdHlsZS5jc3NUZXh0ID0gXCJcIjtcblx0bmF2SXRlbTMuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWJvdHRvbTogcmdiKDIwMCwgMjAwLCAyMDApIDFweCBzb2xpZFwiO1xuXHRkb2N1bWVudC50aXRsZSA9IFwiRGEgR3VnbGllbG1vIHwgQ29udGFjdCBVc1wiO1xuXG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cdHRleHRDb250YWluZXIuaWQgPSBcInRleHQtY29udGFpbmVyXCI7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHR0aXRsZS5pZCA9IFwidGl0bGVcIjtcblx0dGl0bGUuaW5uZXJIVE1MID0gdGl0bGVDb250ZW50O1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRCbG9jayk7XG5cdHRleHRCbG9jay5pbm5lckhUTUwgPSBtYWluVGV4dENvbnRlbnQ7XG59XG4iLCJpbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gXCIuL2xvYWQtY29udGFjdFwiO1xuaW1wb3J0IHsgbG9hZEhvbWVwYWdlIH0gZnJvbSBcIi4vbG9hZC1ob21lcGFnZVwiO1xuaW1wb3J0IHsgbG9hZE91clN0b3J5IH0gZnJvbSBcIi4vbG9hZC1vdXItc3RvcnlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG5cdGNvbnNvbGUubG9nKFwibG9hZGluZyBoZWFkZXJcIik7XG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRpdGxlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0Y29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblx0Y29uc3QgbmF2SXRlbXMgPSBbXG5cdFx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksXG5cdFx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksXG5cdFx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksXG5cdF07XG5cdGNvbnN0IG5hdkl0ZW1OYW1lcyA9IFtcIkhvbWVcIiwgXCJPdXIgU3RvcnlcIiwgXCJDb250YWN0XCJdO1xuXHRmdW5jdGlvbiBhZGROYXZJdGVtcygpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0bmF2TWVudS5hcHBlbmRDaGlsZChuYXZJdGVtc1tpXSk7XG5cdFx0XHRuYXZJdGVtc1tpXS5pbm5lckhUTUwgPSBuYXZJdGVtTmFtZXNbaV07XG5cdFx0XHRuYXZJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIik7XG5cdFx0XHRuYXZJdGVtc1tpXS5pZCA9IFwibmF2LWl0ZW0tXCIgKyAoaSArIDEpO1xuXHRcdH1cblx0fVxuXHRjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cdGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG5cdGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUJhcik7XG5cdHRpdGxlQmFyLmlkID0gXCJ0aXRsZS1iYXJcIjtcblx0dGl0bGVCYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cdGxvZ28uaW5uZXJIVE1MID0gXCJEYSBHdWdsaWVsbW9cIjtcblx0bG9nby5pZCA9IFwibG9nb1wiO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQodG9wQmFyKTtcblx0dG9wQmFyLmlkID0gXCJ0b3AtYmFyXCI7XG5cdHRvcEJhci5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cdHN1YnRpdGxlLmlubmVySFRNTCA9IFwiVGhlIGJlc3QgY2hlZXNlIGluIFd1cHBlcnRhbFwiO1xuXHR0b3BCYXIuYXBwZW5kQ2hpbGQobmF2TWVudSk7XG5cdG5hdk1lbnUuaWQgPSBcIm5hdi1tZW51XCI7XG5cdGFkZE5hdkl0ZW1zKCk7XG5cblx0Y29uc3QgbmF2SXRlbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1pdGVtLTFcIik7XG5cdGNvbnN0IG5hdkl0ZW0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtaXRlbS0yXCIpO1xuXHRjb25zdCBuYXZJdGVtMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWl0ZW0tM1wiKTtcblxuXHRuYXZJdGVtMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEhvbWVwYWdlKTtcblx0bmF2SXRlbTIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRPdXJTdG9yeSk7XG5cdG5hdkl0ZW0zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkQ29udGFjdCk7XG59XG4iLCJpbXBvcnQgeyBjbGVhckRPTSB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZXBhZ2UoKSB7XG5cdGNsZWFyRE9NKCk7XG5cdGNvbnNvbGUubG9nKFwibG9hZGluZyBob21lcGFnZVwiKTtcblx0Y29uc3QgbmF2SXRlbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1pdGVtLTFcIik7XG5cdGNvbnN0IG5hdkl0ZW0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtaXRlbS0yXCIpO1xuXHRjb25zdCBuYXZJdGVtMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWl0ZW0tM1wiKTtcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG5cdGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0Y29uc3QgdGV4dEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGxldCBtYWluVGV4dENvbnRlbnQgPVxuXHRcdFwiRGEgR3VnbGllbG1vIGlzIGFuIGFydGlzYW4gSXRhbGlhbiBjaGVlc2VyeSBsb2NhdGVkIGluIHRoZSBoZWFydCBvZiBXdXBwZXJ0YWwuIE91ciBjaGVlc2VzIGFyZSBtYWRlIHdpdGggdGhlIGZpbmVzdCBpbmdyZWRpZW50cywgdXNpbmcgdHJhZGl0aW9uYWwgbWV0aG9kcyBwYXNzZWQgZG93biB0aHJvdWdoIGdlbmVyYXRpb25zLiBGcm9tIGNyZWFteSBidXJyYXRhIHRvIHRhbmd5IHBlY29yaW5vLCBvdXIgc2VsZWN0aW9uIGlzIHN1cmUgdG8gc2F0aXNmeSBldmVuIHRoZSBtb3N0IGRpc2Nlcm5pbmcgY2hlZXNlIGxvdmVycy4gU3RvcCBieSBvdXIgc2hvcCB0b2RheSBhbmQgdGFzdGUgdGhlIGRpZmZlcmVuY2Ugb2YgaGFuZGNyYWZ0ZWQgSXRhbGlhbiBjaGVlc2UuXCI7XG5cdGxldCB0aXRsZUNvbnRlbnQgPVxuXHRcdFwiRXhwZXJpZW5jZSB0aGUgRmluZXN0IEhhbmRjcmFmdGVkIEl0YWxpYW4gQ2hlZXNlIGF0IERhIEd1Z2xpZWxtb1wiO1xuXG5cdG5hdkl0ZW0xLnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci1ib3R0b206IHJnYigyMDAsIDIwMCwgMjAwKSAxcHggc29saWRcIjtcblx0bmF2SXRlbTIuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG5cdG5hdkl0ZW0zLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xuXHRkb2N1bWVudC50aXRsZSA9IFwiRGEgR3VnbGllbG1vIHwgSG9tZVwiO1xuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XG5cdGhlcm9JbWFnZS5pZCA9IFwiaG9tZS1pbWFnZVwiO1xuXHRoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1haW4taW1hZ2VcIik7XG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cdHRleHRDb250YWluZXIuaWQgPSBcInRleHQtY29udGFpbmVyXCI7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHR0aXRsZS5pZCA9IFwidGl0bGVcIjtcblx0dGl0bGUuaW5uZXJIVE1MID0gdGl0bGVDb250ZW50O1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRCbG9jayk7XG5cdHRleHRCbG9jay5jbGFzc0xpc3QuYWRkKFwidGV4dC1ibG9ja1wiKTtcblx0dGV4dEJsb2NrLmlubmVySFRNTCA9IG1haW5UZXh0Q29udGVudDtcbn1cbiIsImltcG9ydCB7IGNsZWFyRE9NIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPdXJTdG9yeSgpIHtcblx0Y2xlYXJET00oKTtcblx0Y29uc29sZS5sb2coXCJsb2FkaW5nIG91ciBzdG9yeVwiKTtcblx0Y29uc3QgbmF2SXRlbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1pdGVtLTFcIik7XG5cdGNvbnN0IG5hdkl0ZW0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtaXRlbS0yXCIpO1xuXHRjb25zdCBuYXZJdGVtMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWl0ZW0tM1wiKTtcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250YWluZXJcIik7XG5cdGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0Y29uc3QgdGV4dEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGxldCB0aXRsZUNvbnRlbnQgPSBcIldobyBhcmUgd2U/XCI7XG5cdGxldCBtYWluVGV4dENvbnRlbnQgPVxuXHRcdFwiQXQgRGEgR3VnbGllbG1vLCBvdXIgc3RvcnkgYmVnaW5zIHdpdGggYSBwYXNzaW9uIGZvciB0cmFkaXRpb25hbCBJdGFsaWFuIGNoZWVzZW1ha2luZy4gTG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgV3VwcGVydGFsLCBvdXIgY2hlZXNlcnkgaXMgZGVkaWNhdGVkIHRvIGNyYWZ0aW5nIHRoZSBmaW5lc3QgYXJ0aXNhbmFsIGNoZWVzZXMgdXNpbmcgdGltZS1ob25vcmVkIG1ldGhvZHMgYW5kIHRoZSBoaWdoZXN0IHF1YWxpdHkgaW5ncmVkaWVudHMuPGJyPiA8YnI+IEFzIGNoZWVzZSBsb3ZlcnMgb3Vyc2VsdmVzLCB3ZSB1bmRlcnN0YW5kIHRoZSBpbXBvcnRhbmNlIG9mIGZsYXZvciBhbmQgYXV0aGVudGljaXR5LiBUaGF0J3Mgd2h5IHdlIGluc2lzdCBvbiB1c2luZyBvbmx5IHRoZSBmcmVzaGVzdCBtaWxrIGFuZCB0aGUgbW9zdCBjYXJlZnVsbHkgc291cmNlZCBpbmdyZWRpZW50cyBpbiBvdXIgY2hlZXNlcy4gRnJvbSBvdXIgY3JlYW15IGJ1cnJhdGEgdG8gb3VyIHRhbmd5IHBlY29yaW5vLCBlYWNoIGFuZCBldmVyeSBvbmUgb2Ygb3VyIGNoZWVzZXMgaXMgbWFkZSBieSBoYW5kIHdpdGggY2FyZSBhbmQgYXR0ZW50aW9uIHRvIGRldGFpbC48YnI+IDxicj4gT3VyIGxvdmUgZm9yIGNoZWVzZSBleHRlbmRzIGJleW9uZCBqdXN0IHRoZSB0YXN0ZS4gV2UgYWxzbyBiZWxpZXZlIGluIHN1cHBvcnRpbmcgc3VzdGFpbmFibGUgZmFybWluZyBwcmFjdGljZXMgYW5kIHdvcmtpbmcgd2l0aCBsb2NhbCBwcm9kdWNlcnMgd2hlbmV2ZXIgcG9zc2libGUuIFRoaXMgY29tbWl0bWVudCB0byBxdWFsaXR5IGFuZCBzdXN0YWluYWJpbGl0eSBpcyB3aGF0IHNldHMgdXMgYXBhcnQgYW5kIG1ha2VzIG91ciBjaGVlc2VzIHRydWx5IHNwZWNpYWwuPGJyPiA8YnI+IFdlIGludml0ZSB5b3UgdG8gdmlzaXQgb3VyIHNob3AgYW5kIHRhc3RlIHRoZSBkaWZmZXJlbmNlIGZvciB5b3Vyc2VsZi4gV2hldGhlciB5b3UncmUgYSBzZWFzb25lZCBjaGVlc2UgY29ubm9pc3NldXIgb3IganVzdCBzdGFydGluZyB0byBleHBsb3JlIHRoZSB3b3JsZCBvZiBhcnRpc2FuYWwgY2hlZXNlLCB3ZSdyZSBjb25maWRlbnQgeW91J2xsIGZpbmQgc29tZXRoaW5nIHRvIGxvdmUgYXQgRGEgR3VnbGllbG1vLiBDb21lIHNlZSB1cyB0b2RheSBhbmQgZGlzY292ZXIgdGhlIGZsYXZvcnMgb2YgaGFuZGNyYWZ0ZWQgSXRhbGlhbiBjaGVlc2UuXCI7XG5cblx0bmF2SXRlbTEuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG5cdG5hdkl0ZW0yLnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci1ib3R0b206IHJnYigyMDAsIDIwMCwgMjAwKSAxcHggc29saWRcIjtcblx0bmF2SXRlbTMuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XG5cdGRvY3VtZW50LnRpdGxlID0gXCJEYSBHdWdsaWVsbW8gfCBPdXIgU3RvcnlcIjtcblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuXHRoZXJvSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm1haW4taW1hZ2VcIik7XG5cdGhlcm9JbWFnZS5pZCA9IFwib3VyLXN0b3J5LWltYWdlXCI7XG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cdHRleHRDb250YWluZXIuaWQgPSBcInRleHQtY29udGFpbmVyXCI7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHR0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cdHRpdGxlLmlubmVySFRNTCA9IHRpdGxlQ29udGVudDtcblx0dGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0QmxvY2spO1xuXHR0ZXh0QmxvY2suaW5uZXJIVE1MID0gbWFpblRleHRDb250ZW50O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==