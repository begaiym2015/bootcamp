// const f = function(a,b,c){
//     console.log(...arguments)
// }
// f(12, 2 , 5);



//#2
// let b=1;
// const factorial = function(number, i=1){
//     if(i <= number){
//         b=b*i;
//         factorial (number,i+1)
     
//     }else return null;
// }
// factorial(5);
// console.log(b);

//#3

// let a=1;
// let b=1;
// let c=0;

// const fibbonachi = function(number, i=0){

//     if(i <= number){
//         c = a + b;
//         a = b;
//         b = c;
//         fibbonachi(number, i + 1)
//     }else return null;
// }
// fibbonachi(8);
// console.log(c);

//#4

// const converter = function(f){
//     return (f - 32) * (5/9);
    
// }
// let result = converter(56)
// console.log(result);



//#5

const numi = function(n){
    let arr = [];
    if ((typeof n) === 'number'){
        for(let i = 1; i = n; i++ ){
            arr.push(i);
        }
        console.log(arr);
    }else  return null;
    
}
numi(6);

