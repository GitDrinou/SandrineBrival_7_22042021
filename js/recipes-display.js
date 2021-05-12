
/**
 * definition
 * arrays use for main search
 */
let recipesByIng = [];
let recipesByUst = [];
let recipesByOther = [];

/** display recipes 
 *  with default datas 
 * arrays on variables_globales.js
 */
document.onload = display_Recipes(recipes,tmpIngs,tmpApps,tmpUsts);


/** 
 * Loop on recipes 
 * to fill arrays recipesBy... 
 * 
 */ 
for (let rec of recipes) {
      
    for (let ust of rec.ustensils) {
        recipesByUst.push({
            "recipeId" : rec.id,
            "ustensil" : ust 
        })
    }

    recipesByOther.push({
        "recipeId" : rec.id,
        "name" : rec.name,
        "appliance": rec.appliance,
        "description" : rec.description,
    });

    for (let ing of rec.ingredients) {
        recipesByIng.push({
            "recipeId": rec.id,
            "ingredient" : ing.ingredient
        });
    }    
}
