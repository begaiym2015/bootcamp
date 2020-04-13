//lesson


// let person1 = {
//     name:'Kubat',
//     lastName:'Abdracmanov',
//     age:24,
//     sayHello(){

//         console.log(`hello, my name is ${this.name} ${this.lastName}`)
//     },
//     sayAge(){
//         console.log(`I'm ${this.age}`)
//     }
// }
// let person2 = {
//     name:'Emir',
//     lastName:'Pipisasa',
//     age:16,
    
// }


//ES5
// function Person(name,lastName,age){
//     this.name = name
//     this.lastName = lastName
//     this.age = age
// }

// Person.prototype.sayHello = function(){
//     console.log(`hello, my name is ${this.name} ${this.lastName}`)
// }

// let person1 = new Person('Kubat','Abdracmanov', 24)
// let person2 = new Person('Emir','Pipisasa',16)

// person2.sayHello()

// ES6

// class Person{
//     constructor(name,lastName,age){
//         this.name = name
//         this.lastName = lastName
//         this.age = age

//         Person.count++
//     }

//     sayhello(){
//         console.log(`hello, my name is ${this.name} ${this.lastName}`)
//     }
//     sayAge(){
//         console.log(`I'm ${this.age}`)
//     }
//     static countOfObject(){
//         console.log(Person.count)
//     }
// }

// Person.coun = 0;

// let person1 = new Person('Kubat','Abdracmanov', 24)
// let person2 = new Person('Emir','Pipisasa',16)

// console.log(person1)
// console.log(person2)
// console.log(Person.count)
// Person.countOfObject();

// class Mentor extends Person{
//     constructor(name,lastName,age,position,type){
//     super(name,lastName,age)

//     this.position = position
//     this.type = type
// }
// work(){
//     console.log(`I'm ${this.position}`)
// }
// }
// let mentor1 = new Mentor('Kubat','Abdracmanov',240,mentor,javascript)
// let mentor2 = new Mentor('Emir','Pipisasa',16,mentor,javascript)

// mentor2.work()
// mentor1.work()

// mentor1.sayhello()
// mentor2.sayAge()





///------tasks-----111111111------

// let d = new Date();

// class Users{
//     constructor(name,surname){
//         this.name=name
//         this.surname=surname
//     }
//     getFullName(){
//         console.log(`${this.name}   ${this.surname}`);
//     }
// }


// class Student extends Users{
//     constructor(name,surname,year){
//         super(name,surname)

//         this.year = year
//     }

//     getCourse(){
//         if(d.getFullYear() < 2015)
//         alert('Вы закончили университет!')
//         else
//         console.log(`Вы на ${d.getFullYear()-this.year} курсе!`)
//     }
// }

// let student = new Student('Иван','Иванов',2019);


// console.log(student.name);
// console.log(student.surname);
// student.getFullName();

// console.log(student.year);
// student.getCourse();



// task--------22222----------------
let arr = [];
class MyString{
    constructor(str){
        this.str=str
    }
    
    revers(){
        return this.str.split('').reverse().join('');

    }
    ucFirst(){
        return this.str[0].toUpperCase()+this.str.slice(1);
      

    }
    usWords(){
        return this.str.toUpperCase()+this.str.slice();

    }
}
let s = new MyString('abcde abcde abcde');

console.log(s.revers());
console.log(s.ucFirst());
console.log(s.usWords());