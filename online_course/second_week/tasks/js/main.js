//111111
// let ans = 0;
//   $('#go').click(function() {
//       b = $('input').val();
//       let v = b.split("");
//       for(let i=0;i<=v.length;i++){
//           ans= ans+i;
//       }
//    alert(ans)
//     });
  
 //22222
// let count = 0;
// $('#go').click(function(){
//     a = $('.first').val();
//     b = $('.second').val();
//     let arr = a.split('');
//    arr.forEach(function(item){
//        if(item===b)  ++count;
//    })
//    console.log(count);
// });
 

//33333333
// let arr = [];
// let arr1 = [];
// let result = 0;
// let result1 = 0;
// $('#go').click(function(){
//     let start = $('.start').val();
//     let end = $('.end').val();
//     let num = $('.num').val();
//     for(let i=start;i<=end;i++){
//         arr.push(i);
//     }
//     console.log(arr);

//     arr.forEach(function(item){
//         if(item % num == 0){
//             result = item/num;
//             arr1.push(result);
//         }
//     })
//     arr1.forEach(function(item){
//         result1 = result1 + item;
//     })
//     console.log(result1);
// })


//444444
// let arr =[];
// let imax=0;
// let imin=0;

// $('#go').click(function(){
//     let num = $('.start').val();
//     for(let i = 0; i<num; i++){
//         arr.push(Math.round(Math.random()*100))
//     }
//     $('.form').html(`
//     <h3>Исходный массив: ${arr}</h3>`)
//     console.log(arr);
//     imin = Math.min.apply(Array,arr);
//     console.log(imin);
    
//     imax = Math.max.apply(Array,arr);
//     console.log(imax);
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==imin)
//         arr[i]=imax;
//         else if(arr[i]==imax)
//         arr[i]=imin;
//     }
//     console.log(arr);
//     $('.form').html(`
//     <h3>Результат: ${arr}</h3>`)
// })
    

   
//555555

// $('.add').click(function(){
//     let fio = $('.name').val();
//     let arr = fio.split(' ');
//     if(arr.length >= 2 ){
//         let arr0 = arr[0];
//         // arr0.css('text-trensform','uppercase');
//         let arr1 = arr[1].split('');
//         let arr2 = arr[2].split('');

//         let str = arr0.join();
//         str.toUpperCase();
        
//         console.log(`${str} ${arr1[0]}.${arr2[0]}.`);
//     }else{
//         console.log('Вы ввели не полную фамилию!')
//     }
// })

//-----------------6666666666



//--------------------77777777

// $('.add').click(function(){
//     let num = $('.num').val();
//     if(num > 60 || num < 0){
//         alert('число должно быть от 0 до 60!')
//     }else{
//         console.log((num % 5 < 3) ? 'зеленый':'красный');
       
//     }
// })


// --------------888888888-------

// $('.add').click(function(){
//     let year = $('.num').val();
//     if(year < 1 || year > 9999 )
//         alert('Введите число от 1 до 9999!')
//     else if(year % 4 === 0)
//         $('.list').append(`
//         <h4> ${year} год високосный! </h4>
//         `);
//     else
//     $('.list').append(`
//         <h4> ${year} год не високосный! </h4>
//         `);

// })








