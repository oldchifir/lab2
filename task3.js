alert("Изменение числа, в зависимости от условия");     // вызво диалогового окна
let x = prompt("Введите x: ");                          // Создание переменных
let a = 2.73;
let b = 1.68;
x = Number(x);                                          // Перевод из str в int
if (x <= 1) {
    alert(Math.sin(Math.log(Math.abs(x))));
} else if (x > 1 && x <= 3) {
    alert(4 * x + b ** 2);
} else if (x > 3) {
    alert((1 / (x ** 2 + a ** 2)));
}
