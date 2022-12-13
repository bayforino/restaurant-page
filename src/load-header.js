import { clearDOM } from "./index";
import { loadHomepage } from "./load-homepage";
import { loadOurStory } from "./load-our-story";

export function loadHeader() {
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

	navItem1.addEventListener("click", loadHomepage);
	navItem2.addEventListener("click", loadOurStory);
}
