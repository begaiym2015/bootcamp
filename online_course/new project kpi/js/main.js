//--------Добавление--------
$(window).ready(function(){
    render()
})


let inpName = $('.name');
let groupName = $('.group');
let courseN = $('.course');

let one1 = +$('.1');
let two2 = +$('.2');
let three3 = +$('.3');
let four4 = +$('.4');
let five5 = +$('.5');
let six6 = +$('.6');
let kpi=0;

let btnAdd = $('.add');


$('.btnAdd').on('click', function(){
    $('.modalWin').toggleClass('dNone');
    $('.inputForm').css('display','block');

    
  });
  
  let page = 1;
  let lastPage = false;
  btnAdd.on("click", function(e) {
    e.preventDefault();
    if(inpName.val()!==''){
      let obj = {          //Этот объект отправляется в json-server и сохраняетсяв файле db.json
        name: inpName.val().charAt(0).toUpperCase() + inpName.val().slice(1), //С помощью .val() берем значение с инпутов
        group: groupName.val(),
        course: courseN.val(),
        one: one1.val(),
        two: two2.val(),
        three: three3.val(),
        four: four4.val(),
        five: five5.val(),
        six: six6.val()

      }
      
      $.ajax({
        method: "post",//отправляем
        url: `http://localhost:8000/students`,//на указанный сервер
        data: obj,
        success: function(data) {//если отправка успешно 
          render()//вызываем функцию render()
          
        },
        error: function(err) {
          console.log(err);//иначе выводим ошибку
        }
      })
      $('input').val('');//очищаем все инпуты, чтобы при вводе след значений не делать это в ручную
    }
  });
  
  
  
  function render (){//------render--------
    $('.list').html('')//все что находится внутри <ul> очищаем 
    $.ajax({
      method:"get",//Получаем 
      url:`http://localhost:8000/students?_page=${page}&_limit=7`,//из указанного сервера
      success: function(data) {//если успешно получили
        data.sort();
          data.map((item) =>{ //переберам полученные данные и добавлем в <ul> все найденные имена
            kpi = ((parseInt(item.one) + parseInt(item.two) + parseInt(item.three) + parseInt(item.four) + parseInt(item.five) + parseInt(item.six))/6).toFixed(2)
            $('.list').append(`
              <li class="liListC"  data-id="${item.id}">${item.name}-${kpi}</li> 
            `);
          });
      },
      error: function(err){
        console.log(err);
      }
      });
  };
  
  //------------------------------------Пагинаяция-----------
  $('.btnNext').on('click', function(){
    page++
    $.ajax({
      method:"get",//Получаем 
      url:`http://localhost:8000/students?_page=${page}&_limit=7`,//из указанного сервера
      success: function(data) {//если успешно получили
        if(data.length==0) {
          page--
          
        }else{
          $('.list').html('');
          data.map((item) =>{ //переберам полученные данные и добавлем в <ul> все найденные имена
            $('.list').append(`
            <li class="liListC"  data-id="${item.id}">${item.name}-${kpi}</li> 
            `);
          });
        }
      }
      });
  });
  $('.btnPrev').on('click', function(){
    if(page>1){
      page--
      $.ajax({
        method:"get",//Получаем 
        url:`http://localhost:8000/students?_page=${page}&_limit=7`,//из указанного сервера
        success: function(data) {//если успешно получили
  
            $('.list').html('');
            data.map((item) =>{ //переберам полученные данные и добавлем в <ul> все найденные имена
              $('.list').append(`
              <li class="liListC"  data-id="${item.id}">${item.name}-${kpi}</li> 

              `);
            });
          
        }
        });
    }
  });
  
  
  //------------------------------------Просмотр в модальном окне--------------------
  $('.list').on('click', 'li', (e)=>{
    $('.modalWin').toggleClass('dNone');
    $('.modal').css('display','block');
  
    $('.modal').text('');
    let target = $(e.target);
    let id = target.attr('data-id');
    $.ajax({
      method: 'get', 
      url: `http://localhost:8000/students/${id}`,
      success: function(data){
        $('.modal').append(`
          <button class="btnX" data-id="${id}">x</button>
          <li class="liMod">Имя: <span>${data.name}</span></li>
          <li class="liMod">Группа: <span>${data.group}</span></li>
          <li class="liMod">Курс: <span>${data.course}</span></li>
          <li class="liMod">Курс: <span>${kpi}</span></li>
          <input class="dNone btnSave" type="submit" value="save">
          <div class="modalDiv"><button class="btnUpdate btn">Update</button><button class="btnDelete btn">Delete</button></div>
        `)
      }
    })
  })
  $('.modalWin').on('click',function(e){
    if(e.target !== e.currentTarget)return;
    $(this).toggleClass('dNone');
    $('.modal').css('display','none');
    $('.inputForm').css('display','none');
  })
  $('.modal').on('click','.btnX',function(){
    $('.modalWin').toggleClass('dNone');
    $('.modal').css('display','none');
    $('.inputForm').css('display','none');
  });
  
  
//   //-----------------------------Редактирование-----------------------------
  let arr=[];
  $('.modal').on('click', '.btnUpdate', (e)=>{//----Update----
    e.preventDefault();
  
    let id = $('.btnX').attr('data-id');
    $('.modal').text('');
    $.ajax({
      method: 'get', 
      url: `http://localhost:8000/students/${id}`,
      success: function(data){
        $('.modal').append(`
          <button class="btnX" data-id="${id}">x</button>
          <li class="liMod">Имя: <input class="modInpName" value="${data.name}"></li>
          <li class="liMod">Группа: <input class="modInpSurname" value="${data.group}"></li>
          <li class="liMod">Курс: <input class="modInpNumber" value="${data.course}"></li>
          <button class="btnSave btn">Save</button>
        `)
      }
    });
  });
  
  
  $('.modal').on('click', '.btnSave', (e)=>{//-----Save----
    e.preventDefault();
    let id = $('.btnX').attr('data-id');
    console.log(id)
    $.ajax({
      method: 'patch',
      url: `http://localhost:8000/students/${id}`,
      data:{
        name: $('.modInpName').val(),
        group: $('.modInpSurname').val(),
        course: $('.modInpNumber').val()
      },
      success:function(){
        render()
    
      },
      done: function(data){
        console.log(data)
      }
    })
    $('.modalWin').toggleClass('dNone');
  });
  
  
  //----------------------------------------------Удаление------------------
  $('.modal').on('click', '.btnDelete', (e)=>{
    e.preventDefault();
    let id = $('.btnX').attr('data-id');
    let q = confirm('Вы уверены?');
  
    if(q==true){
      $.ajax({
        method: 'delete',
        url: `http://localhost:8000/students/${id}`,
        success: function(data){
        console.log('Вы удалили данные!');
        $('.modalWin').toggleClass('dNone');
        render();
        
       },
       error: function(error){
        console.log('Произошла ошибка!!!');
      }
    });
    }else{return};
  
  })
  
  //----------Поиск------------------------------Поиск------------------
  $('.inpSearch').on('keyup', function() {
    let inp = $('.inpSearch').val()
    $.ajax({
        method: 'get',
        url: `http://localhost:8000/student?q=${inp}`,
        success: function(data){
            if(inp!==''){
              $('.container').html('');
                data.forEach(item => {
                    $('.list').append(`
                    <li class="liListC"  data-id="${item.id}">${item.name}-${kpi}</li> 
                    `)
                });
            }
        }
    });
});
