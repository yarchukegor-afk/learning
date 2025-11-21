function summ(firstNumber, secondNumber){
    a = Number(firstNumber);
    b = Number(secondNumber);
    result = a + b;
    return alert(result);
};

const firstNumberRef = document.querySelector('#a');
const secondNumberRef = document.querySelector('#b');
const buttonRef = document.querySelector('#sumBtn');
buttonRef.addEventListener('click', () => summ(firstNumberRef.value,secondNumberRef.value) );