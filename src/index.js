
// - Make sure you check and understand the data that is given to you!

// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using J
console.log(data)
// - Create a card using JS that represents a single pokemon, 
// use the example image as a reference. 
// You will also find an HTML example commented out in the index.html


let ul = document.getElementsByClassName('cards')[0]

function createPokemon(pokemon){
    let li = document.createElement('li')
    li.setAttribute('class', 'card')

    let h2 = document.createElement('h2')
    h2.setAttribute('class', 'card--title')
    h2.append(document.createTextNode(pokemon.name))
    li.append(h2)

    let imgEl = document.createElement('img')
    imgEl.setAttribute('width', '256')
    imgEl.setAttribute('class', 'card--img')
    imgEl.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)
    li.append(imgEl)

    let ul2 = document.createElement('ul')
    ul2.setAttribute('class','card--text')

    for( let stat of pokemon.stats) {
        let liStat = document.createElement('li')
        liStat.append(
            document.createTextNode(
            `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`
            )
        )
        ul2.append(liStat)
    }

    li.append(ul2)


    ul.append(li)
}

for(let pokemon of data) {
    createPokemon(pokemon)
}
 


// input: pokemon
// action: create a card for this pokemon
// // output: undefined
// function createPokemonCard(pokemon) {
//     // let facingForwards = true
  
//     let cardLi = document.createElement('li')
//     cardLi.className = 'card'
//     cardLi.addEventListener('click', function () {
//       // way 1
//       if (pokeImg.src === pokemon.sprites.front_default) {
//         pokeImg.src = pokemon.sprites.back_default
//       } else {
//         pokeImg.src = pokemon.sprites.front_default
//       }
  
      // way 2
      // if (facingForwards) {
      //   pokeImg.src = pokemon.sprites.back_default
      // } else {
      //   pokeImg.src = pokemon.sprites.front_default
      // }
  
      // facingForwards = !facingForwards
  
      // way 3
      // pokeImg.src =
      //   pokeImg.src === pokemon.sprites.front_default
      //     ? pokemon.sprites.back_default
      //     : pokemon.sprites.front_default
    // })
  
    // cardLi.addEventListener('mouseenter', function () {
    //   pokeImg.src = pokemon.sprites.front_default
    // })
  
    // cardLi.addEventListener('mouseleave', function () {
    //   pokeImg.src = pokemon.sprites.back_default
    // })
  
//     let titleH2 = document.createElement('h2')
//     titleH2.className = 'card--title'
//     titleH2.textContent = pokemon.name.toUpperCase()
  
//     let pokeImg = document.createElement('img')
//     pokeImg.width = 256
//     pokeImg.className = 'card--img'
//     pokeImg.src = pokemon.sprites.back_default
  
//     let statsUl = document.createElement('ul')
//     statsUl.className = 'card--text'
  
//     for (let statInfo of pokemon.stats) {
//       let statLi = document.createElement('li')
//       statLi.textContent = `${statInfo.stat.name.toUpperCase()}: ${
//         statInfo.base_stat
//       }`
//       statsUl.appendChild(statLi)
//     }
  
//     cardLi.append(titleH2, pokeImg, statsUl)
  
//     let cardsUl = document.querySelector('.cards')
//     cardsUl.append(cardLi)
//   }
  
//   for (let pokemon of data) {
//     createPokemonCard(pokemon)
//   }
 
 





