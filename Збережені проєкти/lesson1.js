// ***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).
 
// let name = 'Ivan';
// let city = name;
// console.log(city);

// ***2***
// Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); //  привіт 1
// console.log(`привіт ${"name"}`); // привіт "name"
// console.log(`привіт ${name}`); // ? привіт O

// ***3***
// Видобути число зі змінних

// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);
// console.log(`${a} \n${b} \n${c} `)
// вивести в консоль тип
// aбо так ->
// console.log(`${parseFloat(a)} \n${parseFloat(b)} \n${parseFloat(c)} `)
// console.log(`${typeof(a)} \n${typeof(b)} \n${typeof(c)} `)

// ***4***
// Зробіть, щоб 0.1 + 0.2 = 0.3
// let a = 0.1;
// let b = 0.2;
// console.log((a * 10 + b * 10) / 10);

// ***5**
// Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40))

// ***6**
// Поверніть випадкове число в діапазоні від 2 до 4
// let max = 15;
// let min = 2;
// console.log(Math.random() * (max - min)+min);

// ***7**
// дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

// ***8**
// вивести в консоль message  великими літерами
// console.log(message.toUpperCase());
// ***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
// let user = {};
// user.name = 'Ivan';
// user.age = 30;
// user,city = 'Kyiv';
// delete user.city;
// user['like flowers'] = true;
// console.log(user);


// ***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
// for (let key in user){
// console.log(`${key}: ${user[key]}`)
// }