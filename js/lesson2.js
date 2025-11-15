// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// let a = 1;
// let b = 0;
// let c = -3;

// a>0 ? alert(true) : alert(false);
// b>0 ? alert(true) : alert(false);
// c>0 ? alert(true) : alert(false);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let value = prompt('?','');
// value === 'test' ? alert(true) : alert (false);

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
// let value = Number(prompt('number?',''));
// if (value > 10){
//     console.log(value - 5);
// }else{
//     console.log(value + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// let month = prompt('ведіть місяць','1');
// switch (month){
//     case '1':
//     console.log('січень');
//     break;
//     case '2':
//     console.log('лютий');
//     break;
//     case '3':
//     console.log('березень');
//     break;
//     case '4':
//     console.log('квітень');
//     break;
//     case '5':
//     console.log('травень');
//     break;
//     case '6':
//     console.log('червень');
//     break;
//     case '7':
//     console.log('липень');
//     break;
//     case '8':
//     console.log('серпень');
//     break;
//     case '9':
//     console.log('вересень');
//     break;
//     case '10':
//     console.log('жовтень');
//     break;
//     case '11':
//     console.log('листопад');
//     break;
//     case '12':
//     console.log('грудень');
//     break;
//     default:
//     console.log('такого не існує');
//     break;
// }
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let value = prompt('value','123');
// let steps = value.length;
// let summ = 0;
// let result = 0; 
// for(let i = 0; i < steps; i++){
// result = value%10;
// value = Math.floor(value/10);
// summ += result;
// }

let value = +prompt('value','123');
let n=0;
for(let i = 0; i < value.length; i++){
if(value%10 === 0) ++n;
value = Math.floor(value/10);
}