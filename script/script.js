/*
const requestOptions = {
   method: "GET",
   redirect: "follow"
};


window.addEventListener("DOMContentLoaded", parametre);

function parametre() {
   fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", requestOptions)
       console.log(response);
      .then((response) => response.text())
       .then((result) => console.log(result))
       .catch((error) => console.error(error));
} */



let cocktailName = document.getElementById("cocktailName");
let cocktailIngredients = document.getElementById("ingredient");

Form.addEventListener

const API_BASE = "https://www.thecocktaildb.com/api/json/v1/1/"; 

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    const searchType = searchByName.checked ? 'name' : 'ingredient';
    if (!query) return alert("Veuillez entrer un terme de recherche."); const endpoint =
        searchType === 'name'
            ? `${API_BASE}search.php?s=${query}`
            : `${API_BASE}filter.php?i=${query}`; fetch(endpoint)
                .then((response) => response.json())
                .then((data) => displayResults(data.drinks))
                .catch(console.error);
});