// Première lettre en majuscule
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const btnFilter = document.querySelectorAll(".btn");
const mainSearch = document.getElementById("mainSearch");
const icoSearch = document.getElementById("icoSearch");
const list = document.querySelectorAll(".js-recipe");

let tmpIngs = [];
let tmpApps = [];
let tmpUsts = [];

let newRecipes = [];

let newTmpIngs = [];
let newTmpApps = [];
let newTmpUsts = [];

let tags = [];
let valTags = []; 


for (let recipe of recipes) {
    for(let ing of recipe.ingredients) {
        tmpIngs.push(ing["ingredient"].toLowerCase());
    }
    tmpApps.push(recipe["appliance"].toLowerCase());
    for (let ust of recipe.ustensils) {
        tmpUsts.push(ust);
    } 
}

let ingDeduplicate = [... new Set(tmpIngs)];
let appDeduplicate = [... new Set(tmpApps)];
let ustDeduplicate = [... new Set(tmpUsts)];




