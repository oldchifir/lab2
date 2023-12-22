alert("Изменение числа, в зависимости от условия");     // вызво диалогового окна
x = prompt("Введите x: ");                          // Создание переменных
a = 2.73;
b = 1.68;
x = Number(x);                                          // Перевод из str в int
switch (x) {
    case -2:
        alert(Math.sin(Math.log(Math.abs(x))));
        break;
    case 3:
        alert((4 * x + b) ** 2);
        break;
    case 5:
        alert((1 / (x ** 2 + a ** 2)));
        break;
    default:
        alert("Такое значения нельзя ввести")
}
