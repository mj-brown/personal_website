//I want to create an element in my footer of each page.
const h2 = document.createElement('h2');

//I want that division to say a message.
h2.innerHTML = 'This page is made with Aloha!';
document.body.appendChild(h2);