| Projectbeschrijving en functionaliteiten
Een webapplicatie waarmee gebruikers recepten kunnen zoeken, filteren op land of categorie, sorteren en favorieten opslaan. Gebouwd met HTML, CSS en JavaScript. Deze heb ik gemaakt omdat ik zelf geintreseerd ben in koken en eten. 
Deze applicatie bevat de functionaliteiten: 
  - Zoek op naam van maaltijd
  - Filter op land en categorie
  - Sorteer alfabetisch
  - Voeg maaltijden toe aan favorieten
  - Favorieten worden opgeslagen via localStorage

|| Gebruikte API's met links
 The meal API (https://www.themealdb.com/api.php)
   -->  Zoek recepten op naam: https://www.themealdb.com/api/json/v1/1/search.php?s=
   -->  Lijst van gebieden (landen): https://www.themealdb.com/api/json/v1/1/list.php?a=list
   -->  Lijst van categorieën: https://www.themealdb.com/api/json/v1/1/list.php?c=list

||| Implementatie van elke technisch vereiste (waar in de code?/lijnnummer)
. API ophalen (alle maaltijden): fetchAllMeals()` - regel 1 (data.js)
. Landen ophalen: fetchAreas()` - regel 6 (data.js)
. Categorieën ophalen: fetchCategories()` - regel 11 (data.js)
. Filterfunctionaliteit:  `filterMeals()` - regel 56  (utils.js)
. Sorteerfunctionaliteit: `sortMeals()` - regel 63 (utils.js)
. Favorieten opslaan: `toggleFavorite()` - regel 74 (utils.js)
. Favorieten tonen: `renderFavorites()` (ui.js)
. DOM manipulatie voor kaarten: `renderMeals()` - regel 3 (ui.js)
. Event listeners en init: vanaf regel 12 (main.js)

|||| Installatiehandleiding
