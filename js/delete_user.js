/*Задача на синтаксис объектов. Напишите код, по строке на каждое действие.*/
let user = {
    name: ['Вася'],
    surname: ['Петров'],
};
user.name = 'Иван'
delete user.name
console.log(user.name)
