export function loadHomepage() {
	const content = document.getElementById('content');
    const mainContainer = document.createElement('div');
    const mozz = document.createElement('img');
    const textBlock = document.createElement('div');
    let mainTextContent = 'Da Guglielmo is an artisan Italian cheesery located in the heart of Wuppertal. Our cheeses are made with the finest ingredients, using traditional methods passed down through generations. From creamy burrata to tangy pecorino, our selection is sure to satisfy even the most discerning cheese lovers. Stop by our shop today and taste the difference of handcrafted Italian cheese.'

    document.title = "Da Guglielmo | Home"
    content.appendChild(mainContainer);
    mainContainer.id = "main-container";
    mainContainer.appendChild(mozz);
    mozz.setAttribute("src", "mozz.jpg");
    mozz.id = "main-image";
    mainContainer.appendChild(textBlock);
    textBlock.classList.add('main-container');
    textBlock.innerHTML = mainTextContent;
}
