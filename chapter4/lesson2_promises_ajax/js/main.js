// setTimeout(() =>{
//     console.log('Five seconds');

// }, 5000);

// console.log('work');

// const myPromise = new Promise((resolve, reject) => {
//     reject('This is a bad result!');

// });
// console.log(myPromise);

// myPromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error)
//     });


    // //Цепочка Promise

    // const waitForFiveSeconds = function(){
    //     return new Promise((resolve,reject) => {
    //         setTimeout(()=>{
    //             resolve('Five seconnds have passed');
    //         },5000);
    //     })
    // }

    // const waitForThreeSeconds = function(message){
    //     console.log(message);

    //     return new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             resolve('Three seconds have passed');
    //         },3000)
    //     })
    // }
    // waitForFiveSeconds()
    // .then(waitForThreeSeconds)
    // .then(result => console.log(result));


    // Работа с Api

//     const countryURL = 'https://restcountries.eu/rest/v2/name/russia';
//     const getAlpha = 'https://restcountries.eu/rest/v2/alpha/';
//     // fetch(countryURL)
//     //     .then(response => response.json())
//     //     .then(data => console.log(data));


// const borderedCountries = async () => {
//     const response = await fetch(countryURL);
//     const data = await response.json();

//     data[0].borders.forEach(async item => {
//         const responseBorders = await fetch(getAlpha + item);
//         const countryData = await responseBorders.json();

//         console.log(countryData);
//     })
// }
//  borderedCountries();

// Error handing

// try{
//     let some = getUnderfined();

// }catch(error){
//     console.log(error);
// }

// console.log('work'

// );

// fetch('http://localhost:3000/main')
//     .then(response =>response.json())
//     .then(data => console.log(data));


// let form = $('.myForm')
// form.on('submit', function(e){
//     e.preventDefault();
//     $.ajax({
//         type:"post",
//         url:'http://localhost:3000/main',
//         data:form.serializa(),
//         success:function(data){
//             console.log(data)
//         },
//         error:function(err){
//             console.log(err);
//         }
//     })
// })










$(window).ready(function(){
  render()
})

// ТАДААААМ!!!!
let inp = $(".inp");
let btnAdd = $(".btn-add");



btnAdd.on("click", function() {


  let obj = {
    task: inp.val()
  }
  
  $.ajax({
    type: "post",
    url: "http://localhost:8000/tasks",
    data: obj,
    success: function(data) {
      $('.list').append(`<li><span>Задача номер ${data.id}: </span>${data.task}</li>`)
    },
    error: function(err) {
      console.log(err);
    }
  })
  inp.val('')
})

function render (){
  $.ajax({
    type:"get",
    url:"http://localhost:8000/tasks",
    success: function(data) {
      data.map(item =>{
        $('.list').append(`<li><span>Задача номер ${item.id}: </span>${item.task}</li>`)

      })
    },
    error: function(err){
      console.log(err);
    }
    })
}