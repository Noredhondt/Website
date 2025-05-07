export async function fetchAllMeals() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await res.json();
  return data.meals; // bevat alle maaltijden (~27)
}

export async function fetchAreas() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const data = await res.json();
  return data.meals.map(m => m.strArea);
}

export async function fetchCategories() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const data = await res.json();
  return data.meals.map(m => m.strCategory);
}
