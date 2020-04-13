let backModal = $('.back-modal');
let mainModal = $('.main-modal');
let pages = 0;
let url;

fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
    .then(result=>result.json())
    .then(data=>console.log(render(data)))

    function render(pokemons){
        pokemons.results.map(item=>{
            fetch(item.url)
                .then(result=>result.json())
                .then(data=>
                    getName(data.name,data.id)
                )
        })
    }

    function getName(name,id){
        $('.list').append(`<li id="${id} class="list-item">${name}</li>`)

    }

    function showInfo(pock){
        $('.container').on('click',`#${pock.id}`,function(){
            let types = pock.types.map(item =>{
                return item.type.name
            })
            let elems = `
            <div class="pock-img"></div>
            <span>Имя пакемона: ${pock.name}</span>
            <span>Рост пакемона: ${pock.height}</span>
            <span>Вес пакемона: ${pock.weight}</span>
            <span>Тип пакемона: ${types}</span>
            <button class="btn-close">X</button>
            `

            mainModal.html(elems)
            backModal.css('display','block')

            $('.btn-close').on('click',function(){
                backModal.css('display','none')
            })
            $('.pock-img').css('background',`url(${pock.sptites.front_default})`)
        })
    }
function windowPage(api){
    fetch(api)
        .then(result=>result.json)
        .then(data=>render(data))

}

    $('.btn-next').on('click',function(){
        pages += 20
        url = `https://pokeapi.co/api/v2/pokemon?offset=${pages}&limit=20`
        windowPage(url)
        $('.list-item').remove()
    })

    $('.bnt-prev').on('click',function(){
        pages -=20
        url = `https://pokeapi.co/api/v2/pokemon?offset=${pages}&limit=20`
        windowPage(url)
        $('.list-item').remove()
    })