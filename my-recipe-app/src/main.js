import { fetchAllMeals, fetchAreas, fetchCategories } from './data.js';
import { renderMeals, populateDropdown, renderFavorites } from './ui.js';
import { filterMeals, sortMeals, toggleFavorite, isFavorite } from './utils.js';

let allMeals = [];

async function init() {
  allMeals = await fetchAllMeals();
  const areas = await fetchAreas();
  const categories = await fetchCategories();

  populateDropdown('area-filter', areas);
  populateDropdown('category-filter', categories);
  renderMeals(allMeals.slice(0, 6)); // eerste 6 random maaltijden
  renderFavorites(allMeals);

}
init();

// Zoek, filter, sorteer
function updateMeals() {
  const search = document.getElementById('search').value;
  const area = document.getElementById('area-filter').value;
  const category = document.getElementById('category-filter').value;
  const sort = document.getElementById('sort').value;

  let meals = filterMeals(allMeals, search, area, category);
  meals = sort ? sortMeals(meals, sort) : meals;
  renderMeals(meals);
}

document.getElementById('search').addEventListener('input', updateMeals);
document.getElementById('area-filter').addEventListener('change', updateMeals);
document.getElementById('category-filter').addEventListener('change', updateMeals);
document.getElementById('sort').addEventListener('change', updateMeals);

// Favorieten toggle
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('fav-btn')) {
    const id = e.target.dataset.id;
    toggleFavorite(id);
    e.target.textContent = isFavorite(id) ? '❤️ Favoriet' : '♡ Voeg toe';
    renderFavorites(allMeals);
  }
});






