let cocktailsList = new Array();
let cocktailIngredients = new Array();

let cocktailType = document.getElementById("cocktailName");
let IngredientsType = document.getElementById("ingredients");
let searchArea = document.getElementById("searchArea");
let btnSearch = document.getElementById("btnSearch");
//let cards = document.getElementById("cards");
let formPricipal = document.getElementById("formPrincipal");


formPricipal.addEventListener("submit", (event) => {
    event.preventDefault();
});

const API_BASE = "https://www.thecocktaildb.com/api/json/v1/1/";

// bouton.addEventListener("submit", (event) => {
//     event.preventDefault();
// });


btnSearch.addEventListener('click', () => {
    const query = searchArea.value.trim();
    console.log(query);

    const searchType = cocktailType.checked ? 'cocktailName' : 'ingredients';
    //"!query" correspond à notre barre de recherche
    if (!query) return alert("Veuillez entrer un terme de recherche.");
    const endpoint =
        searchType === 'cocktailName'
            ? `${API_BASE}search.php?s=${query}`
            : `${API_BASE}filter.php?i=${query}`; fetch(endpoint)
                .then((response) => response.json())
                .then((data) => createCocktail(data.drinks))
                .catch(console.error);
});


/** FONCTION QUI AFFICHERA LES COCKTAILS */
function createCocktail(_cocktails) {

    //Boucle sur l'ensemble du repetoire des cocktails
    for (let cocktail of _cocktails) {
        cocktailsList.push(cocktail);
        console.log(cocktailsList);

        for (let i = 0; i < cocktail.ingredients.length; i++) {
            let ingredient = cocktail.ingredients[i];

            //je verifie si nous avons ou pas des doublon dans la liste des auteurs
            if (cocktailIngredients.indexOf(ingredient) == -1) {
                cocktailIngredients.push(ingredient);
            }
        }
        //Faire le même schema pour la liste des Catégories
    }
       // pour afficher les images et les titres dans les cards
    cocktail.innerHTML = '<img src="' + _cocktails[a].strDrinkThumbnailUrlnailUrl + '"/>' +
           '<h1 class = "booktitle"><span class = "infobulle" title = "'
           + _cocktails[a].idDrink + '">' + idDrink + '</span></h1>';
    


   // showCocktails(cocktailsList);

}


// function showCocktails(_cocktails) {

//     cocktailType.innerHTML = "";

//     for (let a = 0; a < _cocktails.length; a++) {
//         let cocktail = document.createElement("section");
//         cocktail.setAttribute("id", "card");
//         //Fontion pour appeler les images
//         if (_cocktails[a].strDrinkThumbnailUrl == undefined || _cocktails[a].strDrinkThumbnailUrl == null) {
//             _cocktails[a].strDrinkThumbnailUrl = "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg"
//         }

//         /* pour  afficher et extraire les 20 premiers caractètes du titre d'un livre de la bibliothèque
//         let titre;
//         if (_cocktails[a].title.length > 20) {
//             titre = _cocktails[a].title.substring(0, 20) + "(...)";
//         }
//         else {
//             titre = _cocktails[a].title;
//         }
//         */


//         // // pour afficher les images et les titres dans les cards
//         cocktail.innerHTML = '<img src="' + _cocktails[a].strDrinkThumbnailUrlnailUrl + '"/>' +
//             '<h1 class = "booktitle"><span class = "infobulle" title = "'
//             + _cocktails[a].idDrink + '">' + idDrink + '</span></h1>';

//     }



// }