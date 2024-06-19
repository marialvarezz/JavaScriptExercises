const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonNameSpan = document.getElementById("pokemon-name");
const pokemonIdSpan = document.getElementById("pokemon-id");
const pokemonTypeSpan = document.getElementById("types");
const pokemonHpSpan = document.getElementById("hp");
const pokemonAttackSpan = document.getElementById("attack");
const pokemonDefenseSpan = document.getElementById("defense");
const pokemonSpecialASpan = document.getElementById("special-attack");
const pokemonDefenseSpecial = document.getElementById("special-defense");
const speedSpan = document.getElementById("speed");
const pokemonWeightSpan = document.getElementById("weight");
const pokemonHeightSpan= document.getElementById("height");
const resultPokemon=document.getElementById("img-container");

let pokemonsObj={};
let pokemons = [];
let isValid = 0;

fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon")
.then((res)=>res.json())
.then((data)=>{
  pokemonsObj=data;
  pokemons= pokemonsObj.results;
  

})
console.log(pokemons)


const displayPokemon = (object)=>{
 pokemonNameSpan.textContent = "";
  pokemonIdSpan.textContent = "";
  pokemonHpSpan.textContent = "";
  pokemonWeightSpan.textContent = "";
  pokemonHeightSpan.textContent = "";
  pokemonTypeSpan.textContent="";
  pokemonHpSpan.textContent="";
  resultPokemon.innerHTML=""



  console.log(object)
  pokemonNameSpan.textContent = object.name.toUpperCase();
  pokemonIdSpan.textContent = `#${object.id}`;
  pokemonHpSpan.textContent = object.base_experience;
  pokemonWeightSpan.textContent = object.weight;
  pokemonHeightSpan.textContent = object.height;

  object.types.forEach((item)=>{
    pokemonTypeSpan.innerHTML += `<p>${item.type.name.toUpperCase()}</p>`});

   object.stats.forEach((item)=>{
     switch(item.stat.name){
       case "hp": 
       pokemonHpSpan.textContent=item.base_stat;
       break;
       case "attack":
       pokemonAttackSpan.textContent =item.base_stat;
       break;
       case "defense":
       pokemonDefenseSpan.textContent = item.base_stat;
       break;
       case "special-defense":
       pokemonDefenseSpecial.textContent = item.base_stat;
       break;
       case "special-attack":
       pokemonSpecialASpan.textContent = item.base_stat;
       break;
       case "speed":
        speedSpan.textContent = item.base_stat;
       break;
     }

   }
   )


  resultPokemon.innerHTML += `<img id="sprite" src="${object.sprites.front_default}" alt="${object.name} image default">`;
  resultPokemon.innerHTML += `<img  src="${object.sprites.front_shiny}" alt="${object.name} image shiny">`


  searchInput.value = "";
  isValid =0;
  

}



const foundPokemon=(value)=>{
  
   for(const pokemon of pokemons){
   if(pokemon.id === parseInt(value) || pokemon.name === value.toLowerCase()){
       console.log(pokemon);
          isValid++;
       fetch(pokemon.url)
.then((res)=>res.json())
.then((data)=>{
  displayPokemon(data);
  
     });

     }
}
}


const searchPokemon =()=>{
   


  const inputValue = searchInput.value;

 console.log(pokemons);
  
  
      foundPokemon(inputValue);
  

  if(isValid===0){
      alert("Pokémon not found")
    }

}

 searchBtn.addEventListener("click",()=>{
   searchPokemon()})

