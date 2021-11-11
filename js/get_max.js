/*Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.*/

let new_arr = [34, 1, 529, -78, 89.7, 1243, 2000, 300000];

function get_max(arr) {
    let max;
    let min = new_arr[0];
    for (let i = 0; i < new_arr.length; i++) {
        if ((new_arr[i]) < min) {
            min = new_arr[i];
        } else {
            max = new_arr[i];
        }
    }
    return max;
}

console.log(get_max(new_arr));