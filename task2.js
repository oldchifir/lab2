alert("Изменение числа, в зависимости от условия");             // вызво диалогового окна
let number2 = prompt("Введите число: ");                        // Создание переменных
number2 = Number(number2);                                      // Перевод из str в int
if ((number2 > 0)) {   // Условие 
    number2 = number2 + 1;
} else if ((number2 < 0)) {
    number2 = number2 - 2;
} else if (number2 == 0) {
    number2 = 10
}
alert("Полученное число: " + number2);
