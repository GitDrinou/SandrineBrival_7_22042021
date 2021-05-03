
for(let recipe of recipes) {
    let recipeIng = recipe.ingredients;
    let recipeUst = recipe.ustensils;
    let textIng=``;
    let quantity, unit;
    let recipeDesc = recipe.description; 
    recipeDesc = recipeDesc.substring(0,200);
    appArray.push((recipe.appliance).toLowerCase());
    
    for (let ing of recipeIng) {
        ing.quantity == undefined ? quantity = "" : quantity = ing.quantity;
        ing.unit == undefined ? unit = "" : unit = ing.unit;
        textIng += `<span>${ing.ingredient}: ${quantity} ${unit.substring(0,9)} </span>`; 
        ingArray.push((ing.ingredient).toLowerCase());   
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
                                                                    <div class="card-content pb-3 mb-3">
                                                                        <div class="card-text ingList"> ${textIng}</div>
                                                                        <p class="card-text descRecipe"> ${recipeDesc}...</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>`
}



