export function filterMeals(meals, search, area, category) {
    return meals.filter(meal => {
      const matchesSearch = meal.strMeal.toLowerCase().includes(search.toLowerCase());
      const matchesArea = area ? meal.strArea === area : true;
      const matchesCat = category ? meal.strCategory === category : true;
      return matchesSearch && matchesArea && matchesCat;
    });
  }
  
  export function sortMeals(meals, direction) {
    return [...meals].sort((a, b) =>
      direction === 'asc'
        ? a.strMeal.localeCompare(b.strMeal)
        : b.strMeal.localeCompare(a.strMeal)
    );
  }
  
  // LocalStorage
  export function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }
  
  export function isFavorite(id) {
    return getFavorites().includes(id);
  }
  
  export function toggleFavorite(id) {
    const favs = getFavorites();
    const updated = favs.includes(id)
      ? favs.filter(f => f !== id)
      : [...favs, id];
    localStorage.setItem('favorites', JSON.stringify(updated));
  }
  