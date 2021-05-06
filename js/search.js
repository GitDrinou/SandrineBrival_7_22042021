const btnFilter = document.querySelectorAll(".btn");
const mainSearch = document.getElementById("searchInput");
const icoSearch = document.getElementById("icoSearch");
const list = document.querySelectorAll(".js-recipe");


let counter = 0;
let maxCount = 0;


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
            const listIng = new TagList("Ing","","ingredient",searchIngArray).get_Render();
            break;
        case "btnApp":
            const listApp = new TagList("App","","appareil",searchAppArray).get_Render();
            break;
        case "btnUst":
            const listUst = new TagList("Ust","","ustensile",searchUstArray).get_Render();
            break;
    }
});


function selectedTag(type,tag) {
    const tagged = new TagList(type,tag).get_Selected();    
}


icoSearch.addEventListener("click", () => {
    let newRecipes = searchRecipes(mainSearch.value);
    
    if(newRecipes.length > 0) {
        display_Recipes(newRecipes);
    }

});