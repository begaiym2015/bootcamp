//Метод Includes

// const str = 'Hello world';
// console.log(str.includes('world')); // находит подстроку в строке


//Метод  indexOf

// const str = 'Hello world, welcome to universe';
// console.log(str.indexOf('welcome')); //возвращает интекс


 //Метод split
// const str = 'how are you doing today';
// console.log(str.split(' ',3)); // разбивает строку на массив (второй аргумент длина массива)



//Метод substr
// const str = 'Hello world';
// console.log(str.substr(1,4)); // получим ello

//Метод substring
// console.log(str.substring(1,4)); // указывает скакого индекса и сколько


// Шаблоны строк
// const name = 'John';
// const age = 20;
// const sex = 'male';
//es5
// const personDescription = 'Name: ' +name + 'Age: '+ age + 'Sex: ' +sex;
//es6
// const personDescription = `Name: ${name} Age: ${age*2} Sex: ${sex}`;
// console.log(personDescription);

// const massage = 'Hello!\nI\'m John,\
// and i love this\\ (-_-)/'; // 'Hello! I\'m John,'; //экронирующий символ \
// console.log(massage);


// const regexp1 = /l/gim;
// const regexp2 = new RegExp('l','g');
// const regexp3 = new RegExp(/l/, 'g');
// const regexp4 = RegExp(/l/,'g');

// let str = 'HeLLo world';
// const result = str .replace(regexp1,'#');
// console.log(result);


// const str = 'Please open the book on page №7';
// // console.log(str.match(/\d/gi)); //метод находит данный regexp который поместили


// console.log(str.replace(/\w/gi,'#'));
// console.log(str.replace(/\s/gi, '-'));
// console.log(str.replace(/\D/gi, '-'));
// console.log(str.replace(/\W/gi, '-'));
// console.log(str.replace(/\S/gi, '#'));

const str = 'Please open the book on page №7';
console.log(str.replace(/[A-Za-z]/g, '*'));
console.log(str.replace(/[a-j]/g, '*'));
console.log(str.replace(/[^a-j]/g, '*'));
console.log(str.replace(/[^\w|\s]/g, ''));
console.log(str.replace(/[a|b]/g, '*'));



// const str = 'Unix time 01.01.1970';
// const result = str.match(/\d{2}\.\d{2}\.\d{4}/gi);
// console.log(result);

// const phone1 = '+380951112233';
// const phone2 = '+38 (095) 111 22 33';
// const simplePhoneRegExp = /^\+(\d+\s?((\(\d+\))|(\d{3}))\s?\d{3}\s?\d{2}\s?\d{2})$/;
// console.log(simplePhoneRegExp.test(phone1));
// console.log(simplePhoneRegExp.test(phone2));



