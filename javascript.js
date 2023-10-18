//I want to create an element in my footer of each page.
const h3 = document.createElement('h3');

//I want that division to say a message.
h3.innerHTML = 'This page is made with Aloha!';
document.body.appendChild(h3);