function summ(firstNumber, secondNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    result = firstNumber + secondNumber;
    return alert(result);
};

const firstNumberRef = document.querySelector('input[name="firstNumber"]');
const secondNumberRef = document.querySelector('input[name="secondNumber"]');
const buttonRef = document.querySelector('button');
buttonRef.addEventListener('click', () => summ(firstNumberRef.value,secondNumberRef.value) );