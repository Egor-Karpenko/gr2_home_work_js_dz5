/*Напишите функцию random(min, max), которая будет возвращать случае целое число от min до max*/

function random(min, max) {
    function check(param) {
        return typeof(param) !== 'number';
    }
    if (check(min) || check(max)) {
        return null;
    }
    let result = 0;
    let temp = Math.random();

    result = min + (max - min) * temp;
    result = Math.floor(result);

    return result;
}
let a = random(0, 100);
console.log(a)