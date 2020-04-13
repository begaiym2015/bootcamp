let name = $('#name')
let region = $('#region')
let subregion = $('#subregion')
let capital = $('#capital')
let flag = $('#flag')
let inp = $('#inp')

$('#btn').on('click', () => {
 let inpValue = inp.val()
 console.log(inpValue);

 fetch(`https://restcountries.eu/rest/v2/name/`)
 .then(result => result.json())
 .then(data=>console.log(data))
 .then(data => {
    name.html(data[0].name)
    region.html(data[0].region)
    subregion.html(data[0].subregion)
    capital.html(data[0].capital)
    
    flag.css('background', `url(${data[0].flag}) no-repeat`)
    flag.css('backgrpund-size','contain')
  } )
})