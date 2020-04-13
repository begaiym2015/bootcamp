// class Animal{
//     constructor(type,name, weigh,color, voice){
//         this.type = type;
//         this.name = name;
//         this.weigh = weigh;
//         this.color = color;
//         this.voice = voice

//         // this.say = function(){
//             // console.log(this.voice)

//         // }
//     }
//     say(){
//         console.log('hello world')
//     }
// }
// let obj = new Animal('cat','barsik',34, 'white','miau');
// let obj2 = new Animal('cat','barsik2',34, 'white2','miau2');
// let obj3 = new obj.__proto__.constructor('cat','barsik3',10, 'white2','miau2');


// console.log(obj3);

// // console.log(obj);

// // obj.say()
// // obj2.say()
// // Animal.prototype.say = function(){
// //     console.log('qwert')
// // }

// // obj.say = function(){
// //     console.log('kubick')
// // }

// class Human extends Animal{
//     constructor(){
//         super(...arguments);
//     }
//     say(){
//         console.log(this.name + 'говорит: -' + this.voice);
//     }
// }

// let man1 = new Human('human','fais','100','black','easy');
// console.log(man1);
// man1.say();




class Some {
    _haelth = 100;
    set haelth(val){
        if(val<0 || val>100 || isNaN(+val) || typeof val !== 'number'){
            console.log('error');
            return
        }
        this._haelth = val;
    };
    get health(){
        return this._haelth + 'hp'
    }
}
let obj = new Some();
console.log(obj);