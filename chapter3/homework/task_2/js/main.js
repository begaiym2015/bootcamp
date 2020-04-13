
//day2
// $('strong').css('color','green');
// $('em').addClass('selected');
// $('.row mark').addClass('selected');
// $('a').css('textDecoration','none');
// $('strong').toggleClass('some');
// $('.row').eq(1).toggleClass('row');

// let f = $( ".container:contains('Задания')" );
// console.log(f);

// let a= $('a').eq(1).css('color');
// console.log(a);


//1
// let body = $('body');
// let btn = $('.btn').on('click', function(){
//     body.css('backgroundColor','green');
// });


//2

// const btn = $('button')[0];
//         const fields = $('input');

//         const getDataFromFields = () => {
//         const values = [];

//         for (let i = 0; i < fields.length; i++) {
//             values.push(fields[i].value);
//         }
//         return values
//         }

//         const arrValidation = (arr) => {
//         return arr.reduce((total, item) => {
//             if (item.length === 0) return total = false
//             else return total
//         }, true);

//         }
//         const dataHandler = () => {
//         const values = getDataFromFields();

//         if (!arrValidation(values)) {
//             alert('Заполните все поля!')
//             return
//         }
//     }
//         btn.addEventListener('click', dataHandler);




//3



let e = $('div');

e.onkeydown = function (){
    if(e.keyCode == 37){
        e.style.left = e.offsetLeft + 100 + 'px';
    }else if (e.keyCode == 39){
        e.style.right = e.offsetTop + 100 + 'px';
    }
}



//4

window.addEventListener('mousemove',function(e){
        console.log('X:' + e.clientX, 'Y:' + e.clientY);
    })
    div.addEventListener('mousemove', function(e){
        e.stopPropagation();
    })