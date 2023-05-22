const contentPokemon = document.getElementById("contentPokemon");

function convertPokemonToContent(pokemon) {
  return `<section class="content ${pokemon.type}">
  <a class = "seta" href="./index.html"> ⬅ </a>
  <div id="info" class="descricao-top">
    <h1>${pokemon.name}</h1>
    <span class="number">#${pokemon.number}</span>
    ${pokemon.types
      .map((type) => `<span class="type ${type}">${type}</span>`)
      .join(" ")} 
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
        <li><span>Ability:</span></li>
        <li><span>Ability:</span></li>
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
