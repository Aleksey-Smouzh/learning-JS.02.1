// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;

console.log(a * b);
// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

// document.querySelector('.out-2').textContent =
let c = 7;
let d = 9;
v = c / d;
document.querySelector(".out-2").textContent = v;
// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

// document.querySelector('.out-3').textContent =
e = 3;
f = 5;
document.querySelector(".out-3").textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
// document.querySelector('.out-4').textContent =
let e1 = "3",
  f1 = 5;
document.querySelector(".out-4").textContent = e1 + f1;

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
// document.querySelector('.out-5').textContent =
let e2 = 3,
  f2 = 0;
q1 = e2 / f2;
document.querySelector(".out-5").textContent = q1;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
// document.querySelector('.out-6').textContent =
let e3 = 3,
  f3 = "Hello";
document.querySelector(".out-6").textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
// document.querySelector('.out-7').textContent =
let e4 = 3,
  f4 = "Hello";

document.querySelector(".out-7").textContent = e4 * f4;

// Task 8.
// По нажатию на кнопку .b-8 выполняется функция, которая выводит в div.out-8 то, что пользователь ввел в input.i-8.

function t8() {
  // value всегда получаем внутри функции
  // let data = document.querySelector('.i-8').value; // получили значение
  // тут выводим
  let i8 = document.querySelector(".i-8").value;
  const b_8 = document.querySelector(".b-8");
  let out8 = document.querySelector(".out-8");
  b_8.onclick = () => {
    out8.innerHTML = i8;
  };
}

document.querySelector(".b-8").onclick = t8;

// Task 9.
// По нажатию на кнопку .b-9 выполняется функция t9, которая выводит в div.out-9 то, что пользователь ввел в input.i-9. Добавьте очистку input после нажатия кнопки.

function t9() {
  let i9 = document.querySelector(".i-9");
  const b9 = document.querySelector(".b-9");
  let out9 = document.querySelector(".out-9");
  b9.onclick = () => {
    let d = i9.value;
    out9.innerHTML = d;
    i9.value = "";
  };
}

document.querySelector(".b-9").onclick = t9;

// Task 10.
// По нажатию на кнопку .b-10 выполняется функция t10, которая выводит в div.out-10 то, что пользователь ввел в input.i-10 умноженное на 20.

function t10() {
  let i10 = document.querySelector(".i-10");
  const b10 = document.querySelector(".b-10");
  let out10 = document.querySelector(".out-10");
  b10.onclick = () => {
    out10.innerHTML = i10.value * 20;
    i10.value = "";
  };
}

document.querySelector(".b-10").onclick = t10;

// Task 11.
// По нажатию на кнопку .b-11 выполняется функция t11, которая выводит на страницу в .out-11 число, которое ввел пользователь в i-11 и к нему добавленное число 55. В этой задаче мы не приводим к числу полученное из input.

function t11() {
  let i11 = document.querySelector(".i-11");
  const b11 = document.querySelector(".b-11");
  let out11 = document.querySelector(".out-11");
  b11.onclick = () => {
    let d = i11.value;
    out11.innerHTML = d + 55;
    i11.value = "";
  };
}

document.querySelector(".b-11").onclick = t11;

// Task 12.
// По нажатию на кнопку выполняется функция t12. Функция должна получить данные из input i.12-1 и i.12-2 (пользователь вводин в них фамилию и имя). После чего вывести в .out-12  строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия. Обращаю ваше внимание - с этого момента мы работаем строго по заданию. Hello - с большой буквы. Между Hello имя один пробел (вы же включили отображение пробелов?). Вы не добавляете "от себя" - запятые, любые другие слова и символы. Аналогичные правила действуют и дальше по курсу.

function t12() {
  let i121 = document.querySelector(".i-12-1");
  let i122 = document.querySelector(".i-12-2");
  const b12 = document.querySelector(".b-12");
  let out12 = document.querySelector(".out-12");
  b12.onclick = () => {
    let e = i121.value;
    let b = i122.value;
    out12.innerHTML = "Hello" + "&nbsp" + e + "&nbsp" + b;
  };
}

document.querySelector(".b-12").onclick = t12;

// Task 13.
// При нажатии кнопки .b-13 выполняется t13. Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b. После чего в .out-13 выводит их сумму. Преобразовывайте a, b в числа!!!!

function t13() {
  let i131 = document.querySelector(".i-13-1");
  let i132 = document.querySelector(".i-13-2");
  const b13 = document.querySelector(".b-13");
  let out13 = document.querySelector(".out-13");
  b13.onclick = () => {
    let a = +i131.value;
    let b = +i132.value;
    out13.innerHTML = a + b;
  };
}

document.querySelector(".b-13").onclick = t13;

// Task 14.
// По нажатию кнопки .b-14 выполняется функция t14. Она заменяет значение value в input.i-14 на строку 'Go';

function t14() {
  let i14 = document.querySelector(".i-14");
  const b14 = document.querySelector(".b-14");
  b14.onclick = () => {
    i14.value = "";
    i14.value = "Go";
  };
}

document.querySelector(".b-14").onclick = t14;

// Task 15.
//  По нажатию кнопки .b-15 выполняется функция t15. Она присваивает .i-15 свойство style.border = "4px solid red";

function t15() {
  let i15 = document.querySelector(".i-15");
  const b15 = document.querySelector(".b-15");
  b15.onclick = () => {
    i15.style.border = "4px solid red";
  };
}

document.querySelector(".b-15").onclick = t15;

// Task 16.
//По нажатию на кнопку .b-16 выполняется функция t16. Функция получает из .i-16-1 и i-16-2 числа. Выведите в .out-16 сумму данных чисел по нажатию кнопки b-16. Не переводите полученное из input в число!!!!

function t16() {
  let i161 = document.querySelector(".i-16-1");
  let i162 = document.querySelector(".i-16-2");
  const b16 = document.querySelector(".b-16");
  let out16 = document.querySelector(".out-16");
  b16.onclick = () => {
    let a = i161.value;
    let b = i162.value;
    out16.innerHTML = a + b;
  };
}

document.querySelector(".b-16").onclick = t16;

// Task 17.
// По нажатию на кнопку .b-17 выполняется функция t17. Функция получает из .i-17 число. Изучите работу кода и запомните отличия. Попробуйте ввести числа 5, 4zz, zz4, -200, 33.05

function t17() {
  let a = document.querySelector(".i-17").value;
  document.querySelector(".out-17-1").innerHTML = +a;
  document.querySelector(".out-17-2").innerHTML = parseInt(a, 10);
  document.querySelector(".out-17-3").innerHTML = Number(a);
}

document.querySelector(".b-17").onclick = t17;

// Task 18.
//  По нажатию на кнопку .b-18 выполняется функция t18. Функция получает из .i-18 число в переменную a. Выводит в out-18 результат операции parseFloat(a). Попробуйте ввести значения 5, 33.02, 33.9a, -20.01

function t18() {
  let i18 = document.querySelector(".i-18");
  const b18 = document.querySelector(".b-18");
  let out18 = document.querySelector(".out-18");
  b18.onclick = () => {
    let a = i18.value;
    out18.innerHTML = parseFloat(a);
  };
}

document.querySelector(".b-18").onclick = t18;

// Task 19.
// По нажатию кнопки .b-19 функция t19 дожна в out-19 вывести сумму двух отрицательных чисел из input .i-19-1 и .i-19-2.

function t19() {
    let i191 = document.querySelector('.i-19-1');
    let i192 = document.querySelector('.i-19-2');
    const b19 = document.querySelector('.b-19');
    let out19 = document.querySelector('.out-19');
    b19.onclick = () =>{
        let a = +i191.value;
        let b = +i192.value;
        out19.innerHTML = a + b;
    }
}

document.querySelector(".b-19").onclick = t19;

// Task 20
// При нажатии на кнопку .b-20 в out-20 выводится число - сколько раз была нажата кнопка .b-20;

let count = 0;

function t20() {
  count = count + 1; // можно сократить count++
  document.querySelector('.out-20').innerHTML = count// тут допишите вывод в out-20
}

document.querySelector(".b-20").onclick = t20;
