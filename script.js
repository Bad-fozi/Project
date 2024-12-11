let title = "Обучение";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1500;
let rollback = 59;
let fullPrice = 5000;
let adaptive = true;

let costScreenPrice = "Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани";
let costFullPrice = "Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани";
//let changeScreens = (screens.toLowerCase);
let costRollback = "Процент отката посреднику за работу: " + (fullPrice * (rollback/100)) + " рублей/ долларов/гривен/юани";

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log(costScreenPrice);
console.log(costFullPrice);
console.log(screens.toLowerCase().split(", "));
console.log(costRollback);


