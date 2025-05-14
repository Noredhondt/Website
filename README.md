| Projectbeschrijving en functionaliteiten
- 
Een webapplicatie waarmee gebruikers recepten kunnen zoeken, filteren op land of categorie, sorteren en favorieten opslaan. Gebouwd met HTML, CSS en JavaScript. Deze heb ik gemaakt omdat ik zelf geintreseerd ben in koken en eten. 
Deze applicatie bevat de functionaliteiten: 
  - Zoek op naam van maaltijd
  - Filter op land en categorie
  - Sorteer alfabetisch
  - Voeg maaltijden toe aan favorieten
  - Favorieten worden opgeslagen via localStorage

|| Gebruikte API's met links 
-
 The meal API (https://www.themealdb.com/api.php)
- Zoek recepten op naam: https://www.themealdb.com/api/json/v1/1/search.php?s=
- Lijst van gebieden (landen): https://www.themealdb.com/api/json/v1/1/list.php?a=list
- Lijst van categorieën: https://www.themealdb.com/api/json/v1/1/list.php?c=list

||| Implementatie van elke technisch vereiste (waar in de code?/lijnnummer)
-
- API ophalen (alle maaltijden): fetchAllMeals()` - regel 1 (data.js)
- Landen ophalen: fetchAreas()` - regel 7 (data.js)
- Categorieën ophalen: fetchCategories()` - regel 13 (data.js)
  
- Filterfunctionaliteit:  `filterMeals()` - regel 1  (utils.js)
- Sorteerfunctionaliteit: `sortMeals()` - regel 7 (utils.js)
- Favorieten opslaan: `toggleFavorite()` - regel 13 (utils.js)
  
- DOM manipulatie voor kaarten: `renderMeals()` - regel 3 (ui.js)
- dropdown menu invullen: 'populateDropdown()' - regel 23 (ui.js)
- Favorieten tonen: `renderFavorites()` - regel 36 (ui.js)

- Event listeners en init: vanaf regel 7 (main.js)

|||| Installatiehandleiding
- 
Vereisten
- 
- Git
- moderne browser
- internetverbinding

Kopier dit: 
- 
git clone https://github.com/Noredhondt/Website.git
cd Website

||||| Screenshots applicatie
- 
![image](https://github.com/user-attachments/assets/71694623-20ba-4752-af56-3bafe16d848d)
![image](https://github.com/user-attachments/assets/862c1f40-356b-4fae-a815-25fdfaca9d29)
![image](https://github.com/user-attachments/assets/b805c44b-9277-4aac-bd2f-fa01e7db083e)
![image](https://github.com/user-attachments/assets/836b8d08-3914-4443-8c4c-0a6f0bab9663)
![image](https://github.com/user-attachments/assets/6e9a584d-e624-4808-982e-aec1d1786663)


|||||| Gebruikte bronnen
- 
- API: TheMealDB API
  - https://appmaster.io/nl/blog/apis-voor-beginners-hoe-een-api-te-gebruiken-een-complete-gids
  - https://www.youtube.com/watch?v=tBhPTk5lksc
  - https://chatgpt.com/share/6824172b-98b4-8002-beae-6f38b52419c0

- Figma schets: https://www.figma.com/design/Gn6RgfFcajztVEWF9cm6cN/Website-receptenzoeker?node-id=0-1&m=dev



