// fetch("https://restcountries.eu/rest/v2/all")
//     .then(result=>result.json())
//     .then(data=>console.log(data))
//     .then(data=>data.forEach(item=>{
//         $("tbody").append(`
//         <tr>
//         <td> ${item.alpha2Code}</td>
//         <td><img src="${item.flag}"width="40" height="30"/></td>
//         <td>${item.name}</td>
//         <td>${item.capital}</td>
//         <td>${item.population}</td>
//         <td>${item.region}</td>
//         </tr>`)
//     }))







fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(result =>result.json())
    .then(data=>console.log(data))
    .then(results=>results.name.forEach(item=>{
        $('.list').append(`
        <ul>
        <li>${item.name}</li>
        <li>${item.url}</li>
        </ul>`)
       
    }))



// const pokemon = 'https://pokeapi.co/api/v2/pokemon/';
// const onePokemon = 'https://pokeapi.co/api/v2/pokemon/{id}/';
// fetch(pokemon)
//     .then(response =>response.json())
//     .then(data=>console.log(data));

// const pokName = async() =>{
//     const response = await fetch(pokemon);
//     const data = await response.json();


//     data[0].results.forEach(async item => {
//         const name = await fetch(onePokemon+item);
//         const url = await url.json();
//         console.log(pokemon);
//     })
// }
// pokName();
// fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then(result=>result.json())
//     .then(data=>data.forEach(item=>{
//         $('div').append(`<a>${item.name}</a>`)
//     }));






