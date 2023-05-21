const contentPokemon = document.getElementById("contentPokemon");

function convertPokemonToContent(pokemon) {
  return `<section class="content ${pokemon.type}">
  <div id="info" class="descricao-top">
    <h1>${pokemon.name}</h1>
    <span class="number">#${pokemon.number}</span>
    <span class="type ${pokemon.types[0]}">${pokemon.type}</span>
    <span class="type ${pokemon.types[1]}">${pokemon.types[1]}</span>
  </div>
  
  <div class="imagem">
    <img src="${pokemon.photoDesc}" alt="${pokemon.name}">
  </div>
  <div class="descricao-bottom">
    <div class="about">
      <span>About:</span>
    </div>

    <div class="descricao-left">
      <ul>
        <li><span>Height</span></li>
        <li><span>Abilities 1:</span></li>
        <li><span>Abilities 2:</span></li>
        <li><span>Weight</span></li>

      </ul>
    </div>
    <div class="descricao-right">
      <ul id="pokemonDesList">
      <li><span>${pokemon.height}</span></li>
      <li><span>${pokemon.abilities[0]}</span></li>
      <li><span>${pokemon.abilities[1]}</span></li>
      <li><span>${pokemon.weight}</span></li>
      </ul>
    </div>
  </div>
</section>
  `;
}

loadPokemon(localStorage.getItem("name"));

function loadPokemon(pokemonName) {
  pokeApi.getPokemon(pokemonName).then((pokemon) => {
    const newHtml = convertPokemonToContent(pokemon);
    contentPokemon.innerHTML += newHtml;
  });
}
