import { clearDOM } from "./index";

export function loadHomepage() {
	clearDOM();
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
