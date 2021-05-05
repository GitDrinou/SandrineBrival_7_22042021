const ingArray = [];
const appArray = [];
const ustArray = [];

let recipesByIng = [];
let recipesByUst = [];
let recipesByOther = [];

const defaultRecipes = new Recipe(recipes).get_Render();

// fill arrays recipesBy..
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
/*
for(let recipe of recipes) {
    let recipeIng = recipe.ingredients;
    let recipeUst = recipe.ustensils;
    let textIng=``;
    let quantity, unit;
    let recipeDesc = recipe.description; 
    recipeDesc = recipeDesc.substring(0,200);
    appArray.push((recipe.appliance).toLowerCase());
    recipeBy.push({
        "recipeId" : recipe.id,
        "appliance": recipe.appliance.toLowerCase(),
        "description" : recipe.description.toLowerCase(),
        "ustensils" : recipe.ustensils
    });
    
    for (let ust of recipe.ustensils) {
        recipeByUst.push({
            "recipeId" : recipe.id,
            "ustensil" : ust 
        })
    }

    for (let ing of recipeIng) {
        ing.quantity == undefined ? quantity = "" : quantity = ing.quantity;
        ing.unit == undefined ? unit = "" : unit = ing.unit;
        textIng += `<span>${ing.ingredient}: ${quantity} ${unit.substring(0,9)} </span>`; 
        ingArray.push((ing.ingredient).toLowerCase());   
        recipeByIng.push({
            "recipeId": recipe.id,
            "ingredient" : ing.ingredient
        });
    }

    for (let ust of recipeUst) {
        ustArray.push((ust).toLowerCase());
    }   

    document.getElementById("listRecipes").innerHTML += `<div class="col-12 col-md-6 col-lg-4 mb-5 border-light js-recipe">
                                                            <div class="card">
                                                                <img class="card-img-top" src="images/img.png" alt="vignette recette">
                                                                <div class="card-body px-0 py-0">
                                                                    <div class="card-header">
                                                                        <span class="card-title rName"> ${recipe.name}</span>
                                                                        <span class="card-text rTime"> <i class="far fa-clock"></i> ${recipe.time} min</span>
                                                                    </div>
                                                                    <div class="card-content pb-3">
                                                                        <div class="card-text ingList"> ${textIng}</div>
                                                                        <p class="card-text descRecipe"> ${recipeDesc}...</p>
                                                                    </div>
                                                                    <div class="card-details pl-3 mb-3">
                                                                        <p class="card-text">
                                                                            Appareil : ${recipe.appliance} <br>
                                                                            Ustensiles : ${recipe.ustensils}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>`
}

*/
