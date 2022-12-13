import { loadHeader } from "./load-header";
import { loadHomepage } from "./load-homepage";

function addMainContainer() {
	const content = document.getElementById("content");
	const mainContainer = document.createElement("div");
	content.appendChild(mainContainer);
	mainContainer.id = "main-container";
}

loadHeader();
addMainContainer();
loadHomepage();

export function clearDOM() {
	const DOM = document.getElementById("main-container");
	DOM.textContent = "";
}
