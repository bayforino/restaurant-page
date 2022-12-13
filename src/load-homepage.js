export function loadHomepage() {
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
