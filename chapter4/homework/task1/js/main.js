// class Worker{
//     constructor (name, surname,rate,days){
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days
//     }
//     getSalary(){
//         return this.rate*this.days
//     }
    
// }

// var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name); //выведет &#39;Иван&#39;
// console.log(worker.surname); //выведет &#39;Иванов&#39;
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31


///2
// class Worker{
//     constructor (name, surname,rate,days){
//         this._name = name;
//         this._surname = surname;
//         this._rate = rate;
//         this._days = days
//     }
    
//    getName(){
//        return this._name
//    }
//    getSurname(){
//        return this._surname
//    }
//    getRate(){
//        return this._rate
//    }
//    getDays(){
//        return this._days
//    }
//     getSalary(){
//         return this._rate*this._days
//     }
    
// }

// var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getName()); //выведет &#39;Иван&#39;
// console.log(worker.getSurname()); //выведет &#39;Иванов&#39;
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31




///3
class Worker{
    constructor (name, surname,rate,days){
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days
    }
    
   getName(){
       return this._name
   }
   getSurname(){
       return this._surname
   }
   getRate(){
       return this._rate
   }
   getDays(){
       return this._days
   }
   setRate(val){
       this._rate = val
       return
   }
   setDays(val){
       this._days = val
       return
   }


    getSalary(){
        return this._rate*this._days
    }
    
}

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10