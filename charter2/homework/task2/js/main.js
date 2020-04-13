//#6
// const part = function(min){
//     if(min > 0 && min <= 15){
//         console.log('первая четверть');
//     }else if (min > 15 && min <= 30){
//         console.log('вторая четверть');
//     }else if (min > 30 && min <= 45){
//         console.log('третья четверть');
//     }else if(min > 45 && min <= 59){
//         console.log('четвертая четверть');
//     }else{
//         return null;
//     }

// }
// part(55);

// #7
// const hours = function(hour){
//     if((typeof hour) === 'number'){
//         return hour * 3600;
//     }
// }
// let result = hours(3);
// console.log(result);


//#8
// const a = function(first,second){
//     return first % second ==0 ? 'true':'folse';
// }
// let b = a(40,3);
// console.log(b);



//#9______________lift

const elevator = {
    floor : 1,
    minfloor:1,
    maxfloor:16,
    toFloor : function(n){
        this.printFloor();
        if(n >= this.minfloor && n<=this.maxfloor) {
              this.floor = n;
            console.log('Elevator to floor -'+ (this.floor));
        }
       
            let i = 1;
            while (i <= this.floor) {
               console.log('Elevator is on the floor -'+ (i));
            i++;
            }
        
    },
    upOneFloor : function(){
        this.printFloor();
        this.floor++;
        console.log('Elevator is on the floor'+ this.floor);

    },
    downOneFloor : function(){
        this.printFloor();
        this.floor--;
        console.log('Elevator is on the floor -' + this.floor);

    },
    printFloor : function(n){
    console.log('Elevator is on the floor -'+ (this.floor));
    }
}

elevator.toFloor(4);
elevator.toFloor(6);
elevator.upOneFloor();
elevator.downOneFloor();
elevator.downOneFloor();
elevator.toFloor(10);



// const elevator = {
//     floor: 1,
//     maxFloor: 16,
//     minFloor: 1,

//     toFloor: function(num){
//         this.print();
//         if (num==this.floor)return;
//         if (num<this.minFloor||num>this.maxFloor){
//             console.log('intput is wrogn');
//             return;
//         }
//         if (num>this.floor)this.up();
//         else if(num<this.floor)this.down();
//         elevator.toFloor(num);
//     },
//     print: function(){
//         console.log(`Elevator is on the floor: ${this.floor}`)
//     },
//     up: function(){
//         this.floor++;
//     },
//     down: function(){
//         this.floor--;
//     }
// }
// elevator.toFloor(4);


 //срез знаний
// let name = 'John';
// let admin = name;
// alert(admin);


// let name = prompt('Введите имя:');
// alert(name);



// const part = function(n){
//         if(n >= 0 && n <= 15){
//             alert('первая четверть');
//         }else if (n > 15 && n <= 30){
//             alert('вторая четверть');
//         }else if (n > 30 && n <= 45){
//             alert('третья четверть');
//         }else if(n > 45 && n <= 59){
//             alert('четвертая четверть');
//         }
// }
// let min = +prompt('Введите число');
// if(min >= 0 && min <= 59 ) {
//     part(min);
// }



// let arr = [1,2,5,9,4,13,4,10];
// for (let i = 0; i <= arr.length; i++){
//     if(arr[i] === 4){
//         console.log('Есть');
//     }
// }


// let arr = [2,3,4,5];
// b = 1;
// for(let i= 0;i <= arr.length; i++){
//     b*=arr[i];
// }
// console.log(b);



// let arr = [2, 5, 9, 15, 0, 4];
// let arr1 = [];
// for(let i= 0;i <= arr.length; i++){
//     if(arr[i] > 3 && arr[i] < 10){
//     arr1.push[i];
//     }
//     }
//     console.log(arr1);

//     arr.map(function(item){
//         if(item>3 && item <10){
//             console.log(item);
//         }
//     }
//     )

// let f = arr.filter(function(item){
//    return  item > 3 && item < 10
// });
// console.log(f);

// let newArr = [];
// for(let key in console){
//     console.log(key, console[key]);
// }

// let newArr = Object.keys(console);
// ;
// newArr.sort(function(a,b){
//     return a.length-b.length
// });
// console.log(newArr)

// let arr = Object.keys(console);
// // newArr.sort((a,b) => (a.length-b.length));
// let newArr = arr.map(item=>(item.toUpperCase()));
// console.log(newArr)


// let week = ['вс','пн','вт','ср','чт','пт','сб'];
// let day = week[new Date().getDay()];
// week.forEach(function(item){
//     console.log(item)
// });
// console.log(`${day}`);

// const season = function(n){
//             if(n === 1 || n === 2 || n === 12){
//                 alert('зима');
//             }else if (n > 2 && n <= 5){
//                 alert('весна');
//             }else if (n > 5 && n <= 8){
//                 alert('лето');
//             }else if(n > 8 && n <= 11){
//                 alert('осень');
//             }else
//             alert('неверное число');
//     }
//     let month = +prompt('Введите число');
//     if(month >= 1 && month <= 12 ) {
//        season(month);
//     }


// let lang = prompt('Введите язык');
// let ru = ['вс','пн','вт','ср','чт','пт','сб'];
// let en = ['mon','th','w', 'th', 'f','s','sun'];;
// // if(lang == 'ru'){
// //     console.log(ru);
// // }else if(lang == 'en'){
// //     console.log(en);
// // }

// switch(lang){
//     case 'ru': console.log(ru);
//     break;
//     case 'en': console.log(en);
//     break;
// }

// let a = +prompt('Введите a....');
// let b = +prompt('Введите b....'); ;
// if(a <= 1 && b>=3){
//     console.log(a+b);
// }else{
//     console.log(a-b);
// }




