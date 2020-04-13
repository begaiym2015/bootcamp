// $(window).ready(function(){
//     render()
//   })
  
  let inp = $("input");
  let btnAdd = $(".add");
  
  btnAdd.on("click", function() {
    let obj = {
      task: inp.val()
    }
    
    $.ajax({
      type: "post",
      url: "http://localhost:8000/contact",
      data: obj,
      success: function(data) {
          render()
        // $('.list').append(`<li>${data.task}</li>`)
      },
      error: function(err) {
        console.log(err);
      }
    })
});
//     inp.val('')
//   })
  
//   function render (){
//     $.ajax({
//       type:"get",
//       url:"http://localhost:8000/contact",
//       success: function(data) {
//         data.map(item =>{
//           $('.list').append(`<li>${item.task}</li>`)
  
//         })
//       },
//       error: function(err){
//         console.log(err);
//       }
//       })
//   }