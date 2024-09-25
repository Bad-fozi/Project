'use strict';

let rollback = 0;
let title = prompt("Как называется Ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать, Простые, Сложные, Интерактивные?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какрй дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какрй дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let fullPrice = (screenPrice + servicePrice1 + servicePrice2);

switch (true) {
    case fullPrice >= 30000:
    rollback = 10;
    console.log("Даём скидку в 10%");
    break;

    case fullPrice >= 15000 && fullPrice < 30000:
    rollback = 5;
    console.log("Даём скидку в 5%");
    break;
    case fullPrice >= 0 && fullPrice < 15000:
    console.log("Скидка не предусмотрена");
    break;
    case fullPrice < 0:
    console.log("Что-то пошло не так");
    break;

} 

let servicePercentPrice = Math.ceil(fullPrice - fullPrice * rollback/100);
console.log(servicePercentPrice);