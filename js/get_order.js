/*Напишите функцию get_order(string), которая отсортирует все слова в заданном предложении string в алфавитном порядке. 
Например: get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"*/

let _string = ('ноты акустика гитара')
let _split_string = _string.split([' '], [3]);
let _sort_string = _split_string.sort()
console.log(_sort_string);