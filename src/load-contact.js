import { clearDOM } from "./index";

export function loadContact() {
	clearDOM();
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
