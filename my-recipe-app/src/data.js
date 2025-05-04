export async function fetchRecipes() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      
      // Haal de eerste maaltijd uit de response
      return data.meals || [];
    } catch (error) {
      console.error("Fout bij het ophalen van recepten:", error);
      return [];
    }
  }
  
  