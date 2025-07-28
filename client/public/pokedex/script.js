// ChatGPT Conversation Links:
// 1. https://chatgpt.com/share/67ff1124-7cdc-800d-994a-32bdc153c4e2
// 2.
// Add as many links as needed

// PokeAPI - https://pokeapi.co/



  
"use strict";

let searchInput, searchButton, toggleButton, pokemonDetailsContainer;
let loadingSpinner, modal, closeModalBtn;
let modalName, modalId, modalImg, modalTypesContainer;
let modalAbilitiesSpan, modalHeightSpan, modalWeightSpan, modalStatsContainer;

let lastPokemon = null;
let showingFavourites = false;
let favouritesList = [];

function init() {
  localStorage.removeItem("favourites");
  searchInput = document.getElementById("search-input");
  searchButton = document.getElementById("search-button");
  toggleButton = document.getElementById("toggle-favourites");
  pokemonDetailsContainer = document.getElementById("pokemon-details");
  loadingSpinner = document.getElementById("loading");
  modal = document.getElementById("pokemon-modal");
  closeModalBtn = document.getElementById("close-modal");
  modalName = document.getElementById("modal-name");
  modalId = document.getElementById("modal-id");
  modalImg = document.getElementById("modal-img");
  modalTypesContainer = modal.querySelector(".types-container");
  modalAbilitiesSpan = document.querySelector("#modal-abilities span");
  modalHeightSpan = document.querySelector("#modal-height span");
  modalWeightSpan = document.querySelector("#modal-weight span");
  modalStatsContainer = document.getElementById("modal-stats");

  favouritesList = JSON.parse(localStorage.getItem("favourites") || "[]");

  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") handleSearch();
  });
  toggleButton.addEventListener("click", toggleFavouritesView);
  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });
}

async function fetchPokemon(query) {
  const url = `https://pokeapi.co/api/v2/pokemon/${query.toString().toLowerCase().trim()}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Pokémon not found");
  return response.json();
}

function transformPokemonData(data) {
  return {
    name: data.name,
    id: data.id,
    image: data.sprites.other["official-artwork"].front_default || data.sprites.front_default,
    types: data.types.map(t => t.type.name),
    abilities: data.abilities.map(a => a.ability.name),
    height: data.height,
    weight: data.weight,
    stats: data.stats.map(s => ({ name: s.stat.name, value: s.base_stat }))
  };
}

function showError(message) {
  pokemonDetailsContainer.innerHTML = `<p class="error">${message}</p>`;
}

function showLoadingSpinner() {
  loadingSpinner.classList.remove("hidden");
}

function hideLoadingSpinner() {
  loadingSpinner.classList.add("hidden");
}

function createPokemonCard(pokemon, isFavouriteView = false) {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
  
    const nameElem = document.createElement("h2");
    nameElem.textContent = pokemon.name;
    card.appendChild(nameElem);
  
    const imgElem = document.createElement("img");
    imgElem.src = pokemon.image || "";
    imgElem.alt = `${pokemon.name} image`;
    card.appendChild(imgElem);
  
    const idElem = document.createElement("p");
    idElem.textContent = `ID: ${pokemon.id}`;
    card.appendChild(idElem);
  
    const typesElem = document.createElement("p");
    typesElem.textContent = "Type: " + pokemon.types.join(", ");
    card.appendChild(typesElem);
  
    const abilitiesElem = document.createElement("p");
    abilitiesElem.textContent = "Abilities: " + pokemon.abilities.join(", ");
    card.appendChild(abilitiesElem);
  
    const moreInfoBtn = document.createElement("button");
    moreInfoBtn.textContent = "More Info";
    card.appendChild(moreInfoBtn);
  
    moreInfoBtn.addEventListener("click", function () {
      openModal(pokemon);
    });

    if (!isFavouriteView) {
      const favBtn = document.createElement("button");
      favBtn.textContent = "Add to Favourites";
      favBtn.addEventListener("click", function () {
        addToFavourites(pokemon);
      });
      card.appendChild(favBtn);
    }
  
    return card;
  }
  

function renderFavourites() {
  pokemonDetailsContainer.innerHTML = "";
  if (favouritesList.length === 0) {
    showError("No favourite Pokémon yet.");
    return;
  }
  favouritesList.forEach(pokemon => {
    const card = createPokemonCard(pokemon, true);
    pokemonDetailsContainer.appendChild(card);
  });
}

function openModal(pokemon) {
  modalName.textContent = pokemon.name;
  modalId.textContent = "#" + pokemon.id;
  modalImg.src = pokemon.image || "";
  modalImg.alt = `${pokemon.name} image`;

  modalTypesContainer.innerHTML = "";
  pokemon.types.forEach(typeName => {
    const typeBadge = document.createElement("span");
    typeBadge.className = `type-badge type-${typeName}`;
    typeBadge.textContent = typeName;
    modalTypesContainer.appendChild(typeBadge);
  });

  modalAbilitiesSpan.textContent = pokemon.abilities.join(", ");
  modalHeightSpan.textContent = pokemon.height;
  modalWeightSpan.textContent = pokemon.weight;

  modalStatsContainer.innerHTML = "";
  pokemon.stats.forEach(stat => {
    const statRow = document.createElement("div");
    statRow.classList.add("stat-row");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("stat-name");
    nameSpan.textContent = stat.name;
    statRow.appendChild(nameSpan);

    const barDiv = document.createElement("div");
    barDiv.classList.add("stat-bar");
    const fillDiv = document.createElement("div");
    fillDiv.classList.add("stat-fill");
    const percent = Math.min((stat.value / 255) * 100, 100);
    fillDiv.style.width = percent + "%";
    barDiv.appendChild(fillDiv);
    statRow.appendChild(barDiv);

    const valueSpan = document.createElement("span");
    valueSpan.classList.add("stat-value");
    valueSpan.textContent = stat.value;
    statRow.appendChild(valueSpan);

    modalStatsContainer.appendChild(statRow);
  });

  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function addToFavourites(pokemon) {
  const alreadyFav = favouritesList.some(fav => fav.id === pokemon.id);
  if (alreadyFav) {
    alert(`${pokemon.name} is already in your favourites.`);
    return;
  }
  if (favouritesList.length >= 6) {
    alert("You can only have up to 6 favourite Pokémon.");
    return;
  }
  favouritesList.push(pokemon);
  localStorage.setItem("favourites", JSON.stringify(favouritesList));
  alert(`${pokemon.name} has been added to your favourites!`);
}

function toggleFavouritesView() {
  if (!showingFavourites) {
    renderFavourites();
    showingFavourites = true;
    toggleButton.textContent = "Back to Search";
    searchInput.classList.add("hidden");
    searchButton.classList.add("hidden");
  } else {

    pokemonDetailsContainer.innerHTML = "";
    if (lastPokemon) {
      const card = createPokemonCard(lastPokemon, false);
      pokemonDetailsContainer.appendChild(card);
    } else {
      showError("Use the search above to find a Pokémon.");
    }
    showingFavourites = false;
    toggleButton.textContent = "View Favourites";

    searchInput.classList.remove("hidden");
    searchButton.classList.remove("hidden");
  }
}


async function handleSearch() {
  const query = searchInput.value.trim();
  if (!query) return;
  if (showingFavourites) {
    showingFavourites = false;
    toggleButton.textContent = "View Favourites";
  }
  pokemonDetailsContainer.innerHTML = "";
  showLoadingSpinner();
  try {
    const data = await fetchPokemon(query);
    const pokemon = transformPokemonData(data);
    lastPokemon = pokemon;
    pokemonDetailsContainer.innerHTML = "";
    const card = createPokemonCard(pokemon, false);
    const isFav = favouritesList.some(fav => fav.id === pokemon.id);
    if (isFav) {
      const addBtn = card.querySelector("button:last-of-type");
      if (addBtn) {
        addBtn.textContent = "In Favourites";
        addBtn.disabled = true;
      }
    }
    pokemonDetailsContainer.appendChild(card);
  } catch (error) {
    showError("Pokémon not found. Please try another name or ID.");
  } finally {
    hideLoadingSpinner();
  }
}

window.addEventListener("DOMContentLoaded", init);