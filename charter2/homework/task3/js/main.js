// let mail = function(email){
//     const a = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/gi;
//     console.log(a.test(email));
// }
// let e = prompt('Введите email');
// let result = mail(e);



// let n = '+996700405060';
// const result = /^\+\d{3}\d{3}\d{3}\d{3}$/;
// console.log(result.test(n));
// console.log(n.match(/\d{3}/));


let str = 'Привет, меня зовут Майкл, мне 20 лет, родился в 1999 году, мой номер телефона +996700405060';
console.log(str.match(/\d/g));



// let str = ' Привет, Меня зовут Майкл, мне 20 Лет, родился в 1999 году, мой номер телефона +996700405060';
// console.log(str.match(/\W[А-Я]/g));