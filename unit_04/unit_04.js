// Task 1
// При нажатии (click) на .b-1 запускайте f1, которая выводите в .out-1 число 1.

function f1() {
  document.querySelector(".b-1").onclick = function () {
    out1.innerHTML = 1;
  };
  let out1 = document.querySelector(".out-1");
}

document.querySelector(".b-1").onclick = f1;

// Task 2
// При нажатии (click) на .i-2 запускайте f2, которая выводите в .out-2 число 2. Т.е. как видите, мы можем повесить клик на любой элемент.

function f2() {
  document.querySelector(".i-2").onclick = function () {
    out2.innerHTML = 2;
  };
  let out2 = document.querySelector(".out-2");
}

document.querySelector(".i-2").onclick = f2;

// Task 3
//  При нажатии (click) на .p-3 запускайте f3, которая выводите в .out-3 число 3. Т.е. как видите, мы можем повеcить клик на любой элемент.

function f3() {
  document.querySelector(".p-3").onclick = function () {
    out3.innerHTML = 3;
  };
  let out3 = document.querySelector(".out-3");
}

document.querySelector(".p-3").onclick = f3;

// Task 4.
// При клике по кнопке .b-4 запускается функция f4. Функция проверяет состояние .i-4 и если он checked - выводит true, если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае - div.out-4

function f4() {
  const b4 = (document.querySelector(".b-4").onclick = () => {
    let out4 = document.querySelector(".out-4");
    let i4 = document.querySelector(".i-4");
    console.log(i4.checked);
    if (i4.checked) {
      out4.innerHTML = "div.out-4";
    } else {
    }
  });
}

document.querySelector(".b-4").onclick = f4;

// Task 5.
// При клике по кнопке .b-5 запускается функция f5. Функция проверяет состояние .i-5 и если он checked - выводит value данного элемента, если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

function f5() {
  let i5 = document.querySelector(".i-5");
  let out5 = document.querySelector(".out-5");
  document.querySelector(".b-5").onclick = function () {
    if (i5.checked) {
      out5.innerHTML = i5.value;
    } else {
    }
  };
}

document.querySelector(".b-5").onclick = f5;

// Task 6.
// При нажатии на кнопку выводите value из input.i-6 в div.out-6. Обратите внимание, что даже скрытый hidden input - нам не помеха.

function f6() {
  let i6 = document.querySelector(".i-6");
  let out6 = document.querySelector(".out-6");
  document.querySelector(".b-6").onclick = () => {
    out6.innerHTML = i6.value;
  };
}

document.querySelector(".b-6").onclick = f6;

// Task 7.
// При нажатии на кнопку выводите в div.out-71 value прописанное в input .i-7. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

function f7() {
  //нужно переделать
  let i7 = document.querySelector(".i-7");
  let out71 = document.querySelector(".out-71");
  let out72 = document.querySelector(".out-72");
  document.querySelector(".b-7").onclick = () => {
    out71.innerHTML = i7.value;
    for (let i = 0; i < i7.value.length; ++i) {
      if (i7.value.length[i] <= 6) {
        out72.innerHTML = 1;
      } else {
        out72.innerHTML = 0;
      }
    }
  };
}

document.querySelector(".b-7").onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 запускается функция f8. Функция с помощью innerHTML создает в .out-8 новый div с классом "js2" и текстом "new div". Нажали несколько раз? Создаем несколько раз!

function f8() {
  let out8 = document.querySelector(".out-8");
  document.querySelector(".b-8").onclick = () => {
    out8.innerHTML = ` <div class="js2">new div</div> `;
  };
}

document.querySelector(".b-8").onclick = f8;

// Task 9
// При нажатии кнопки .b-9 запускаем функцию f9. Функция проверяет checked элемента .r-9. Если элемент выбран (checked) то выводит в .out-9 value radiobutton. Если не выбран - выводит false.

function f9() {
  let r9 = document.querySelector(".r-9");
  let out9 = document.querySelector(".out-9");
  document.querySelector(".b-9").onclick = () => {
    if (r9.checked) {
      out9.innerHTML = r9.value;
    } else {
      out9.innerHTML = "false";
    }
  };
}

document.querySelector(".b-9").onclick = f9;

// Task 10
// При нажатии кнопки .b-10 запускаем функцию f10. Функция получает из .i-10 значение цвета и окрашивает style.background элемента .out-10 в этот цвет.

function f10() {
  let i10 = document.querySelector(".i-10");
  document.querySelector(".b-10").onclick = () => {
    document.querySelector(".out-10").style.backgroundColor = i10.value;
  };
}

document.querySelector(".b-10").onclick = f10;

// Task 11
// При нажатии кнопки .b-11 запускается функция f11. Функция получает цвет из .i-111 и присваивает как value элементу .i-112. Т.е. после нажатия кнопки выбранный цвета в первом и втором input станут одинаковые.

function f11() {
  let i111 = document.querySelector(".i-111");
  let i112 = document.querySelector(".i-112");
  document.querySelector(".b-11").onclick = () => {
    i112.value = i111.value;
  };
}

document.querySelector(".b-11").onclick = f11;

// Task 12
// При нажатии кнопки .b-12 запускается функция f12. Функция выводит дату из .i-12 в out-12.

function f12() {
  let i12 = document.querySelector(".i-12");
  let out12 = document.querySelector(".out-12");
  document.querySelector(".b-12").onclick = () => {
    out12.innerHTML = i12.value;
  };
}

document.querySelector(".b-12").onclick = f12;

// Task 13
//  При изменении положения ползунка .i-13 выводите его значение в out-13. Обратите внимание на событие.

function f13() {
  let i13 = document.querySelector(".i-13");
  document.querySelector(".out-13").innerHTML = i13.value;
}

document.querySelector(".i-13").oninput = f13;

// Task 14
// При нажатии на кнопку выводите текст из textarea .t-14 в .out-14.

function f14() {
  document.querySelector(".b-14").onclick = () => {
    let t14 = document.querySelector(".t-14");
    document.querySelector(".out-14").innerHTML = t14.value;
  };
}

document.querySelector(".b-14").onclick = f14;

// Task 15
// При нажатии кнопки .b-15 функция должна выводить текст из .i-15 в textarea .t-15 и в .out-15.

function f15() {
  let i15 = document.querySelector(".i-15");
  document.querySelector(".b-15").onclick = () => {
    document.querySelector(".t-15").innerHTML = i15.value;
    document.querySelector(".out-15").innerHTML = i15.value;
  };
}

document.querySelector(".b-15").onclick = f15;

// Task 16
// При нажатии на кнопку .b-16 выводите в .out-16 value выбранного option из .s-16.

function f16() {
  let s16 = document.querySelector(".s-16");
  document.querySelector(".b-16").onclick = () => {
    document.querySelector(".out-16").innerHTML = s16.value;
  };
  // для получения выбранного option просто получите select в переменную и select.value;
}

document.querySelector(".b-16").onclick = f16;

// Task 17
// При смене выбранного значения .s-17 выводите в .out-17 value выбранного option из .s-17.

function f17() {
  let s17 = document.querySelector(".s-17");
  document.querySelector(".out-17").innerHTML = s17.value;
}

document.querySelector(".s-17").onchange = f17;

// Task 18
// При смене выбранного значения в s-18, получайте из него value выбранного option и присвойте данный value в input .i-18.

function f18() {}

document.querySelector(".s-18").onchange = f18;

// Task 19
// На странице создан div.out-19. По нажатию кнопки, получите из него текст и присвойте в value элемента .i-19.

function f19() {}

document.querySelector(".b-19").onclick = f19;

// Task 20
// У вас есть два select. Напишите код, который при изменении select .s-201 будет аналогично изменять выбранный option в .s-202.

function f20() {}

document.querySelector(".s-201").onchange = f20;
