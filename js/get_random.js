/*Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.*/

function get_random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(get_random(0, 100));