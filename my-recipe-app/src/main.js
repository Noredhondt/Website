//import '.styles/style.css'; 
import { fetchRecipes } from './data.js';


const app = document.querySelector('#recipes-list');

async function initApp() {
  // Haal recepten op
  const recipes = await fetchRecipes();
  
  // Render de recepten
  renderRecipes(recipes, app);
}

initApp();
