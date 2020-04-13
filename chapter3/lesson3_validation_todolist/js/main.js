// --------------валидация формы-------------

// const btn = document.getElementsByTagName('button')[0];
// const fields = document.getElementsByTagName('input');

// const getDataFromFields = () => {
//   const values = [];

//   for (let i = 0; i < fields.length; i++) {
//     values.push(fields[i].value);
//   }

//   return values
// }

// const arrValidation = (arr) => {
//   return arr.reduce((total, item) => {
//     if (item.length === 0) return total = false
//     else return total
//   }, true);

// }
// const clearFormvalues = () => {
//     for (let i=0;i<fields.length;i++){
//         fields[i].value = ''

//     }
// }
// const renderData = () =>{
//     let userData = localStorage.getItem('user-data');
//     const userList = document.querySelector('.user-list');

//     if (!userData) return;
//     userData = JSON.parse(userData);


//     userList.innerHTML = '';
    
    
//     userData.forEach(item =>{
//         const elem = document.createElement('li');
//         const firstName = document.createElement('div');
//         const lastName = document.createElement('div');
//         const email = document.createElement('div');

//         firstName.innerText = `Name: ${item.firstName}`;
//         lastName.innerText = `LastName: ${item.lastName}`;
//         email.innerText = `Email: ${item.email}`;

//         elem.append(firstName);
//         elem.append(lastName);
//         elem.append(email);

//         userList.append(elem);
//     })
// }

// const setItemToStorage = (userData) => {
//     if(!localStorage.getItem('user-data')){
//         localStorage.setItem('user-data', JSON.stringify([]));
//     }

// const storageUserData = JSON.parse(localStorage.getItem('user-data'));
// storageUserData.push(userData);
// localStorage.setItem('user-data',JSON.stringify(storageUserData));
// clearFormvalues();

// }

// const dataHandler = () => {
//   const values = getDataFromFields();

//   if (!arrValidation(values)) {
//     alert('Заполните все поля!')
//     return
//   }
//   const userData = {
//       firstName:values[0],
//       lastName:values[1],
//       email:values[2],
//       passwords:values[3]
//   }

//   setItemToStorage(userData);
//   renderData();
// }
// renderData();

// btn.addEventListener('click', dataHandler);



//-----------задачи на интервью--------------

// let a = [];
// for(let i = 0; i<= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         a.push(i);
//     }
// }console.log(a);


// let a = [];
// for(let i = 0; i<= 100; i++){
//     a.push(i);
// }
// a.forEach(function(item){
//     if(item % 3 == 0 && item % 5 == 0){
//         console.log(item)
//     }
// })



// a = [2,3,4,5];
// let v = 1;
// a.map(function(item){
//     v *=item;
// })
// console.log(v);

// let arr = [4,8,2,10,11,47,21]

// arr.sort(function(x,y){
//     return x-y
// })
// console.log(arr);

// let arr = [4,8,2,10,11,47,21]

// arr.sort(function(x,y){
//     return y -x 
// })
// console.log(arr);



// function rek (item){
//     console.log(item)
//     if(item == 20) return
//     rek(item + 1) 
    
   
// }

// rek(1);


// ------------------TO DO LIST--------------------

$('#form').on('submit',function(e){
    e.preventDefault()
    let data = $('#form').serialize();
    $ajax({
        mathod:'post',
        url:'http://localhost:8000/users',
        data,
        success:render
    })
})
$('.tbody').on('click', 'btn-del',function(e){
    let id = $(e.target).attr('data-id');
    $.ajax({
        method:'delete',
        url:`http://localhost:8000/users/${id}`,
        success:render
    })
})
$('.tbody').on('click', 'btn-del',function(e){
    let about = $(e.target).attr('data-about');
    let text = $(e.target).text();
    $(e.target).html(`<input type="text" value="${text}">`);
})
$('.tbody').on('change','edit-item-info',function(e){
    let target = $(e.target);
    let result = target.val();
    let about = target.parent().attr('data-about');
    let id = target.parent().parent().attr('data-id');
    let data = {};
    data[about] = result;
    $.ajax({
        method:'patch',
        url:`http://localhost:8000/users/${id}`,
        data,
        success:render
    })

})

function render(){
    $.ajax({
        method:'get',
        url:"http://localhost:8000/users",
        success:function(data){
            $('.tbody').html('');
            data.forEach(item=>{
                $('.tbody').append(`
                <tr data-id="${item.id}">
                <td class+"item-info" data-about="name>${item.name}</td>
                <td class+"item-info" data-about="lastname>${item.lastname}</td>
                <td class+"item-info" data-about="phone>${item.phone}</td>
                <td class+"item-info" data-about="email>${item.email}</td>
                <td class="btn-del" data-id="${item.id}">X</td>
                </tr>`)
            })
        }
    })
}