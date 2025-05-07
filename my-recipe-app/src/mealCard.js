export function createMealCard(meal) {
    const card = document.createElement('div');
    card.className = 'meal-card';
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <h3>${meal.strMeal}</h3>
      <p>Categorie: ${meal.strCategory}</p>
      <p>Land: ${meal.strArea}</p>
      <button class="fav-btn" data-id="${meal.idMeal}">❤️</button>
    `;
    return card;
  }
  