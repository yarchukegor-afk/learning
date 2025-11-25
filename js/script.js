const value = "Я отримав твій текст. Ось він : ";
const userMessageRef = document.querySelector('#textFromUser')
let buttonRef = document.querySelector('#confirm');
function hello(hell2,massage){
 return alert(value+massage);
};
buttonRef.addEventListener('click', () => hello(value, userMessageRef.value));