alert("Проверка двузначности и четности числа");                // вызво диалогового окна
let number1 = prompt("Введите число: ");                        // Создание переменных
number1 = Number(number1);                                      // Перевод из str в int
if ((number1 % 2 == 0) && ((number1 >= 10 && number1 <= 99) || (number1 <= -10 && number1 >= -99))) {   // Условие 
    alert("Число четное и двузначное");
} else {
    alert("Число или нечетное или не двузначное")
}

