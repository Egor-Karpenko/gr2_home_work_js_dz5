/*Напишите функцию get_uniq_arr( arr ), которая удаляет из заданного массива arr элементы, которые дублируются (необходимо использовать цикл)*/


function get_uniq_arr(arr) {
    let new_arr = []
    let i = arr.length - 1;
    let tmp = {};


    for (; i >= 0; i--) {
        if (arr[i] in tmp) continue;
        new_arr.push(arr[i]);
        tmp[arr[i]] = 1;

    }
    return new_arr
}

let arr = [1, 'яблоко', 'яблоко', 2, 1];
console.log(get_uniq_arr(arr))