import { isFavorite } from './utils.js';

export function renderMeals(meals) {
  const container = document.getElementById('meal-container');
  container.innerHTML = '';

  meals.forEach(meal => {
    const card = document.createElement('div');
    card.className = 'meal-card';
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <h3>${meal.strMeal}</h3>
      <p><strong>Land:</strong> ${meal.strArea}</p>
      <p><strong>Categorie:</strong> ${meal.strCategory}</p>
      <button class="fav-btn" data-id="${meal.idMeal}">
        ${isFavorite(meal.idMeal) ? '❤️ Favoriet' : '♡ Voeg toe'}
      </button>
    `;
    container.appendChild(card);
  });
}

export function populateDropdown(id, values) {
  const select = document.getElementById(id);
  values.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  });
}


import { getFavorites } from './utils.js';

export function renderFavorites(meals) {
  const favContainer = document.getElementById('favorites-container');
  favContainer.innerHTML = '';

  const favoriteIds = getFavorites();
  const favoriteMeals = meals.filter(meal => favoriteIds.includes(meal.idMeal));

  favoriteMeals.forEach(meal => {
    const card = document.createElement('div');
    card.className = 'meal-card';
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <h3>${meal.strMeal}</h3>
    `;
    favContainer.appendChild(card);
  });
}

