/*Задача на синтаксис объектов. Напишите код, по строке на каждое действие.*/
let user = new Object();
let _name = (user = 'Вася');
let surname = 'Петрович';
let new_name = (_name = 'Иван');
delete user;