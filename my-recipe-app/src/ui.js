export function renderRecipes(recipes, container) {
    container.innerHTML = ''; // Maak de container leeg voordat we nieuwe recepten toevoegen
  
    // Als er geen recepten zijn, toon een bericht
    if (recipes.length === 0) {
      container.innerHTML = '<p>Geen recepten gevonden.</p>';
      return;
    }
  
    recipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
      
      recipeCard.innerHTML = `
        <h3>${recipe.strMeal}</h3>
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" style="width:100%; height:auto;" />
        <p>Categorie: ${recipe.strCategory}</p>
        <p>Land: ${recipe.strArea}</p>
        <p>Voorbereidingstijd: Onbekend</p>
        <a href="${recipe.strSource}" target="_blank">Bekijk recept</a>
      `;
      
      container.appendChild(recipeCard);
    });
  }
  