export function loadHomepage(){
    const content = document.getElementById('content');
    const topBar = document.createElement('div');
    const title = document.createElement('h1');
    
 
    topBar.id = "top-bar"
    topBar.appendChild(title)
    title.innerHTML = 'Da Guglielmo'
    content.appendChild(topBar);
    cobsole.log('peaches');

    return element;
}