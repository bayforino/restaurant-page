import { clearDOM } from "./index";

export function loadOurStory() {
	clearDOM();
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
