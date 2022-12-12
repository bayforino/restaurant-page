export function loadHomepage(){
    const body = document.getElementById('content');
    const element = document.createElement('div');

    element.innerHTML = 'bloody hell';

    body.appendChild(element);
    cobsole.log('peaches');

    return element;
}