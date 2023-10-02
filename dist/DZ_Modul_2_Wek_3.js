var _a, _b;
/*
 const divPrintElements = document.querySelector('.printElements')
  if (divPrintElements) divPrintElements.innerHTML = wrapperElement.getHtml()
Модуль 2
ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ.
ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.
ВВЕДЕНИЕ В ООП
Задание
1. Написать функцию, которая принимает строку и выводит
статистику о ней: количество букв, количество цифр и
количество других знаков.
*/
function outputStringStatistics(str) {
    var letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    var digits = '0123456789';
    var signs = '_+=-!@#$%^&*()~`*[]{}\\|/<>?:;"';
    var l = 0;
    var d = 0;
    var s = 0;
    for (var i = 0; i < str.length; i++) {
        if (letters.includes(str[i])) {
            l++;
        }
        if (digits.includes(str[i])) {
            d++;
        }
        if (signs.includes(str[i])) {
            s++;
        }
    }
    console.log("<p>l= " + l + " d = " + d + " s = " + s + "</p>");
}
outputStringStatistics('1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.*/');
// 2. Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.
var numberInWords;
var counter = 0;
var input1 = document.querySelector('#homework1 input');
if (input1)
    input1.value;
var text1 = document.querySelector('#homework1 h3');
var button1 = document.querySelectorAll('#homework1 button');
var output1 = document.querySelector('#homework1 p');
var onClick = function () {
    // @ts-ignore
    output1.innerText = '';
    numberInWords = input1.value;
    // do{
    //   if (counter > 0) {
    //     text1.innerHTML = '<h3 style= "color:red">Введите положительное двузначное число</h3>'
    //     input1.innerText = ''
    //   }
    //   numberInWords = Number(numberInWords)
    //   counter ++
    // }while (10 > numberInWords || numberInWords > 99 ) 
    // @ts-ignore
    if (input1.value == 'Админ') {
        // @ts-ignore
        text1.innerHTML = 'Пароль?';
        // @ts-ignore
        input1.value = '';
        button1[0].classList.add('hidden');
        button1[1].classList.remove('hidden');
    }
    else {
        // @ts-ignore
        output1.innerText = 'Я вас не знаю';
    }
};
(_a = button1[0]) === null || _a === void 0 ? void 0 : _a.addEventListener('click', onClick);
(_b = button1[1]) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    // @ts-ignore
    output1.innerText = '';
    // @ts-ignore
    if (input1.value == 'Я Главный') {
        // @ts-ignore
        output1.innerText = 'Здравствуйте!';
    }
    else {
        // @ts-ignore
        text1.innerText = 'Кто там?';
        // @ts-ignore
        output1.innerText = 'Я вас не знаю';
        // @ts-ignore
        input1.value = '';
        button1[0].classList.remove('hidden');
        button1[1].classList.add('hidden');
    }
});
// do{
//   numberInWords = prompt('Введите положительное двузначное число')
//   numberInWords = Number(numberInWords)
// }while (10 > numberInWords || numberInWords > 99 ) 
//  console.log(numberInWords);
function inWordsTheNumber(num) {
    var digit = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    var twoDigitNumber = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    var dozens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    num = String(num);
    if ((+num[0]) == 1) {
        return twoDigitNumber[(+num[1])];
    }
    else {
        return dozens[(+num[0])] + ' ' + digit[(+num[1])];
    }
}
console.log(inWordsTheNumber(numberInWords));
/*
3. Написать функцию, которая заменяет в полученной строке
большие буквы на маленькие, маленькие – на большие, а
цифры – на знак нижнего подчеркивания.
*/
var str1 = '';
var arr;
function changingTheCaseAndNumbers(str) {
    var capitalLetters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    var letters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    var digits = '0123456789';
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (capitalLetters.includes(str[i])) {
            arr[i] = arr[i].toLowerCase();
        }
        if (letters.includes(str[i])) {
            arr[i] = arr[i].toUpperCase();
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (digits.includes(str[i])) {
            arr[i] = '_';
        }
    }
    str1 = arr.join('');
    console.log("<p>" + str1 + "</p>");
}
changingTheCaseAndNumbers('1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.*/');
/*
4. Написать функцию, которая преобразует названия css-
стилей с дефисом в название в СamelСase стиле: font-size
в fontSize, background-color в backgroundColor, textalign
в textAlign.
*/
function cconvertСamelСase(nameStyle) {
    var arr = nameStyle.split('-');
    arr.forEach(function (el, i, arr) {
        if (i > 0) {
            arr[i] = el[0].toUpperCase() + el.slice(1);
        }
    });
    return arr.join('');
}
console.log(cconvertСamelСase('font-size-normal'));
/*
5. Написать функцию, которая принимает словосочетание
и превращает его в аббревиатуру.
Например: cascading style sheets в CSS, объектно-
ориентированное программирование в ООП.
*/
function convertToAnAbbreviation(str) {
    var arr = str.split(' ');
    var arr1 = arr.map(function (item) { return item[0].toUpperCase(); });
    return arr1.join('');
}
console.log(convertToAnAbbreviation('объектно ориентированное программирование'));
/*

6. Написать функцию, которая принимает любое коли-
чество строк, объединяет их в одну длинную строку и
возвращает ее.
*/
function convertToOneOine() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join('');
}
console.log(convertToOneOine('Google', 'Opera', 'fsfs'));
/*
7. Написать функцию – калькулятор. Функция принимает
строку с примером, определяет, какое действие необходимо
выполнить (+ - * /), переводит операнды в числа, решает
пример и возвращает результат.
*/
function calculatorFromTheLine(example) {
    while (example.indexOf('+') != -1) {
        return (+(example.slice(0, example.indexOf('+')))) + (+(example.slice(example.indexOf('+') + 1)));
    }
    while (example.indexOf('-') != -1) {
        return (+(example.slice(0, example.indexOf('-')))) - (+(example.slice(example.indexOf('-') + 1)));
    }
    while (example.indexOf('*') != -1) {
        return (+(example.slice(0, example.indexOf('*')))) * (+(example.slice(example.indexOf('*') + 1)));
    }
    while (example.indexOf('/') != -1) {
        return (+(example.slice(0, example.indexOf('/')))) / (+(example.slice(example.indexOf('/') + 1)));
    }
}
console.log(calculatorFromTheLine('72 + 28'));
/*
8. Написать функцию, которая получает url и выводит под-
робную информацию о нем.
Например: url “https://itstep.org/ua/about”, информация
“протокол: https, домен: itstep.org, путь: /ua/about”.
*/
function urlAdress(url) {
    var protocol = url.slice(0, url.indexOf('://'));
    var domain = url.slice(url.indexOf('://') + 3, url.indexOf('/', url.indexOf('://') + 3));
    var path = url.slice(url.indexOf('/', url.indexOf('://') + 3));
    return 'протокол:' + protocol + ', домен:' + domain + ', путь:' + path;
}
console.log(urlAdress('https://itstep.org/ua/about'));
/*
9. Написать функцию, которая принимает строку и раздели-
тель и возвращает массив подстрок, разбитых с помощью
указанного разделителя.
Например: строка “10/08/2020”, разделитель “/”, результат:
“10”, “08”, “2020”.
Выполняя задание, не используйте функцию split().
*/
function dividingTheString(str, dividing) {
    var arr = '';
    var i;
    do {
        arr = arr + (str.slice(i, str.indexOf(dividing, i)));
        i = str.indexOf(dividing, i);
    } while (str.indexOf(dividing, i) == -1);
    return arr;
}
console.log(dividingTheString('10/08/2020/30/40', '/'));
// function dividingTheString (str: string,dividing) {
//   let rek = divide (0 , str.indexOf(dividing,0))
//   function divide (i , a) {
//     if (a == -1){
//       return arr
//     }else{
//       return  arr.push(str.slice (i,(divide (i=a+1, a=str.indexOf(dividing,i)))))
//       console.log (i)
//       console.log (a)
//     }
//   }
//   return rek
// }
// console.log (dividingTheString ('10/08/2020','/'))
/*
10. Написать функцию вывода текста по заданному шаблону.
Функция принимает первым параметром шаблон, в тексте
которого может использоваться %, после символа % ука-
зывается индекс входного параметра. При выводе вместо
%индекс необходимо вывести значение соответствующего
входного параметра.
Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
8, 2020) должна вывести “Today is Monday 10.8.2020”.
*/ 
