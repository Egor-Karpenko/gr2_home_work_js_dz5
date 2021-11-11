/*Есть объект points с оценками. Напишите код, который выведет сумму всех оценок. */
let points = {
    "Вася": 200,
    "Петя": 300,
    "Даша": 250,
    "Андрей": 150,
    "Сергей": 450,
};

function sum_grade(points) {
    let sum = 0;
    for (let salary of Object.values(points)) {
        sum += salary;
    }
    return sum;
}
console.log('Сумма всех оценок : ', sum_grade(points));