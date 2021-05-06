const ingArray = [];
const appArray = [];
const ustArray = [];

let recipesByIng = [];
let recipesByUst = [];
let recipesByOther = [];

document.onload = display_Recipes(recipes);


// fill arrays recipesBy...
for (let rec of recipes) {
      
    for (let ust of rec.ustensils) {
        recipesByUst.push({
            "recipeId" : rec.id,
            "ustensil" : ust 
        })
    }

    recipesByOther.push({
        "recipeId" : rec.id,
        "appliance": rec.appliance.toLowerCase(),
        "description" : rec.description.toLowerCase(),
        "ustensils" : rec.ustensils
    });

    for (let ing of rec.ingredients) {
        recipesByIng.push({
            "recipeId": rec.id,
            "ingredient" : ing.ingredient
        });
    }    
}
