//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
  let o1 = "";
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      o1 += "*";
    }
    o1 += "_";
  }

  document.querySelector(".out-1").innerHTML = o1;
}

document.querySelector(".b-1").onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
function t2() {
  let o2 = "";
  for (let i = 1; i < 4; i++) {
    o2 += i + "<br>";
    for (let k = 0; k < 3; k++) {
      o2 += "*" + "_";
    }
    o2 += "<br>";
  }
  document.querySelector(".out-2").innerHTML = o2;
}

document.querySelector(".b-2").onclick = t2;

//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
function t3() {
  let o3 = "";
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      o3 += "*" + "_";
    }
    o3 += "<br>";
  }
  document.querySelector(".out-3").innerHTML = o3;
}

document.querySelector(".b-3").onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
  let o4 = "";
  for (let i = 1; i <= 5; i++) {
    o4 += i + "_";
    for (let k = 1; k <= 5; k++) {
      o4 += k + "*";
    }
  }
  document.querySelector(".out-4").innerHTML = o4;
}

document.querySelector(".b-4").onclick = t4;

//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
function t5() {
  let o5 = "";
  for (let i = 1; i <= 3; i++) {
    for (let k = 1; k < 7; k++) {
      if (k % 2 == 0) {
        o5 += "0";
      } else {
        o5 += "1";
      }
    }
    o5 += "<br>";
  }

  document.querySelector(".out-5").innerHTML = o5;
}

document.querySelector(".b-5").onclick = t5;

//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x

function t6() {
  let o6 = "";
  for (let i = 0; i <= 2; i++) {
    for (let k = 0; k <= 2; k++) {
      if (k == 2) {
        o6 += "10" + "x" + "01" + "x";
      }
    }
    o6 += "<br>";
  }
  document.querySelector(".out-6").innerHTML = o6;
}

document.querySelector(".b-6").onclick = t6;

//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

function t7() {
  let o7 = "";
  for (let i = 0; i <= 3; i++) {
    o7 += "*";
    for (let k = 1; k <= i; k++) {
      o7 += "*";
    }
    o7 += "<br>";
  }
  document.querySelector(".out-7").innerHTML = o7;
}

document.querySelector(".b-7").onclick = t7;

//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {
  let o8 = "";
  for (let i = 5; i >= 1; i--) {
    for (let k = 0; k < i; k++) {
      o8 += "*";
    }
    o8 += "<br>";
  }
  document.querySelector(".out-8").innerHTML = o8;
}

document.querySelector(".b-8").onclick = t8;

//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {
  let o9 = "";
  for (let i = 1; i <= 6; i++){
    for (let k = 1; k < i; k++){
      o9 += k + "_";
    }
      o9 += "<br>"
  }
  document.querySelector('.out-9').innerHTML = o9
}

document.querySelector(".b-9").onclick = t9;

//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_

function t10() {}

document.querySelector(".b-10").onclick = t10;
