
//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
let arr = [];
const fruts = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];
 for (let item of fruts){
    arr.push(item.name);
 }
 console.log(arr);
//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
for (let i = 2; i <= 10; i++){
    if(i % 2 === 0) alert(i);
}
//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }
let i = 0;
while (i < 5) {
    console.log( `цифра ${i}!` );
    i++;
}

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
let numm;
for (;;){
  numm = prompt('Enter num','?')
  if(numm > 100 || numm == null || numm.trim() == "") break;
}
//  -- 5 --
// Вирахуйте середній вік
let avarage = 0;
const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];
for (let item of girls){
alert(item.name);
}
;