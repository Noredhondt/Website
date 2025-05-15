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
halen we via internet een lijst met maaltijden op. Dit gebeurt met moderne technieken zoals fetch() en async/await.

  
- Landen ophalen: fetchAreas()` - regel 7 (data.js)
Met deze functie halen we een lijst met landen op waar de maaltijden vandaan komen.

- Categorieën ophalen: fetchCategories()` - regel 13 (data.js)
Met deze functie halen we een lijst met maaltijdcategorieën op, zoals “Vlees” of “Vegetarisch”.
  
- Filterfunctionaliteit:  `filterMeals()` - regel 1  (utils.js)
Met deze functie filteren we de maaltijden op basis van de zoekterm, het land en de categorie.

- Sorteerfunctionaliteit: `sortMeals()` - regel 7 (utils.js)
Met deze functie worden de maaltijden alfabetisch gesorteerd, zowel oplopend als aflopend. Dit wordt gedaan met de array .sort() methode, gecombineerd met de ternary operator.

- Favorieten opslaan: `toggleFavorite()` - regel 13 (utils.js)
Met deze functie worden de favoriete maaltijden lokaal opgeslagen in de browser, zodat ze bewaard blijven als je de pagina ververst. Hiervoor wordt er localStorage gebruikt. Dit is een eenvoudige manier om data in de browser op te slaan.

- DOM manipulatie voor kaarten: `renderMeals()` - regel 3 (ui.js)
Met deze functie wordt er voor elke maaltijd een kaartje aangemaakt in de pagina. Dit wordt gedaan door nieuwe HTML-elementen aan te maken met document.createElement(), de inhoud te vullen met template literals en die kaartjes aan de pagina toe te voegen.

- dropdown menu invullen: 'populateDropdown()' - regel 23 (ui.js)
Met deze functie worden de filterselecties automatisch ingevuld voor landen en categorieën met de opgehaalde data.

- Favorieten tonen: `renderFavorites()` - regel 36 (ui.js)
Met deze functie worden alle favoriete maaltijden getoond in een apart deel van de pagina.

- Event listeners en init: vanaf regel 7 (main.js)
In het main bestand van javascript worden er allerlei acties aan de pagina-elementen gekoppeld.  Bijvoorbeeld, zodra je iets typt in de zoekbalk of een filter verandert, wordt automatisch de lijst aangepast. Ook kunnen favorieten met een klik aan- of uitgezet worden. Dit gebeurt met callbacks, stukjes code die uitgevoerd worden als een actie plaatsvindt.

- Constanten
In de hele code gebruiken we waar mogelijk const om aan te geven dat een variabele niet verandert.

- Iteratie over arrays:
Er wordt gebruik gemaakt van veel array-methodes zoals .forEach(), .map(), .filter(), en .sort() om lijsten te doorlopen en te verwerken. Dit zie je bijvoorbeeld in utils.js en ui.js.

- Styling & layout:
De pagina is opgebouwd met eenvoudige, semantische HTML. Voor de layout van de maaltijdkaartjes gebruiken we CSS Grid (te vinden in style.css onder .grid). Ook zijn er gebruiksvriendelijke elementen, zoals duidelijk zichtbare favorietenknoppen met icoontjes en hover-effecten voor betere interactie

- Tooling & structuur:
Dit project is opgezet met Vite, een moderne tool die de ontwikkeling makkelijker en sneller maakt. De code is netjes georganiseerd: de JavaScript-bestanden staan in de src map, CSS in styles, en de HTML apart.


|||| Installatiehandleiding
- 
Vereisten
- 
- Git
- moderne browser
- VS code
- internetverbinding

Stap 1
-
Ga naar de locatie waar het project staat (GitHub - noredhondt/website)
Klik op "Download ZIP"
Pak het ZIP-bestand uit op een gewenste locatie op je computer

Stap 2
- 
Start Visual Studio Code
Klik op "Bestand" > "Map openen..."
Navigeer naar de map van je project en open deze

Stap 3
-
Installeer de extensie Live Server (als je die nog niet hebt)
Open het HTML-bestand. De naam is :index.html
Klik het bestand en klik op je rechtermuisknop
Klik op de optie 'Open with liveserver'
De website wordt geopend in je browser




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
  - https://chatgpt.com/share/68258a75-9368-8002-9006-24db3ccb67ce

- Handleiding maken
  - https://chatgpt.com/share/682585a8-ba10-8002-9523-2b53955cae8d

- Figma schets: https://www.figma.com/design/Gn6RgfFcajztVEWF9cm6cN/Website-receptenzoeker?node-id=0-1&m=dev

- Css en html
  - https://chatgpt.com/share/68258afc-b770-8002-be43-a6089f2ae6d8

- Github
  - https://chatgpt.com/share/68258b48-e7c8-8002-92d9-136115578dd2


- Overige vragen
  - https://chatgpt.com/share/68258c35-a034-8002-9604-c618953c47ff
  - https://chatgpt.com/share/68258c8b-db40-8002-ae04-89c4e04590cb
