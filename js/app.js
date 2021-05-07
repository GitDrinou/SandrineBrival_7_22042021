
let searchIngArray = [... new Set(ingArray)];
let searchAppArray = [... new Set(appArray)];
let searchUstArray = [... new Set(ustArray)];

// Première lettre en majuscule
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


btnFilter.forEach((btn) => {     
    switch(btn.getAttribute("id")) {
        case "btnIng":
            display_tagList("Ing","","ingredient",searchIngArray);
            break;
        case "btnApp":
            display_tagList("App","","appareil",searchAppArray,false);
            break;
        case "btnUst":
            display_tagList("Ust","","ustensile",searchUstArray,false);
            break;
    }
});

icoSearch.addEventListener("click", () => {
   
    let valSearch = mainSearch.value;
    if (valSearch.length >=3) {
        let newRecipes = searchRecipes(valSearch);

        if(newRecipes.length > 0) {
            display_Recipes(newRecipes);
        }
    }   

;
});

