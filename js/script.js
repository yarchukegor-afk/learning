let inputNumberRef = document.getElementById("numberInput");
let resultButtonRef = document.getElementById("result");
let buttonNumberRef = Array.from(document.querySelectorAll(".btnNum"));
let buttonOperationRef = Array.from(document.querySelectorAll(".btnOp"));
let currentValue = '';
let previosValue = '';
let operation = '';
let isResult = false;

function reset(){
   currentValue = ''; previosValue = ''; operation = '';
  };

function checkInput(){
  if(inputNumberRef.value == "" || !isFinite(inputNumberRef.value)) {
  inputNumberRef.value = 'Введено неправильне значення';
  return;
} 
  previosValue = Number(inputNumberRef.value);
  inputNumberRef.value = '';
  isResult = false;
}

function calculationResult(){
  currentValue = Number(inputNumberRef.value);
  switch(operation){
  case "+":
     return inputNumberRef.value = previosValue + currentValue;
  case "-":
     return inputNumberRef.value = previosValue - currentValue;
  case "x":
     return inputNumberRef.value = previosValue * currentValue;
  case "/":
     return inputNumberRef.value = previosValue / currentValue;
 }
}


function getResult(){
calculationResult()
previosValue = Number(inputNumberRef.value);
isResult = true;
}

for(let i = 0 ; i < buttonOperationRef.length; i++){
 buttonOperationRef[i].addEventListener('click',function() {
 operation = buttonOperationRef[i].textContent;
 checkInput();
});
}

for(let i = 0; i < buttonNumberRef.length; i++) {
  buttonNumberRef[i].addEventListener("click", function() {
  if(isResult){
  reset();
  inputNumberRef.value = '';
  isResult = false;
  } 
    
  inputNumberRef.value += buttonNumberRef[i].textContent;
});
}

resultButtonRef.addEventListener('click', getResult);
