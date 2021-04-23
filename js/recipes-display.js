
//console.log(recipes);
const ingArray = [];

for(let recipe of recipes) {
    let recipeIng = recipe.ingredients;
    let textIng=``;
    let quantity, unit;
    let recipeDesc = recipe.description; 
    recipeDesc = recipeDesc.substring(0,200);
    for (let ing of recipeIng) {
        ing.quantity == undefined ? quantity = "" : quantity = ing.quantity;
        ing.unit == undefined ? unit = "" : unit = ing.unit;
        textIng += `<span>${ing.ingredient}: ${quantity} ${unit.substring(0,9)} </span>`; 
        ingArray.push((ing.ingredient).toLowerCase());   
    }
    document.querySelector(".listRecipes").innerHTML += `<div class="col-12 col-md-6 col-lg-4 mb-5 border-light">
                                                            <div class="card">
                                                                <img class="card-img-top" src="images/img.png" alt="vignette recette">
                                                                <div class="card-body px-0 py-0">
                                                                    <div class="card-header">
                                                                        <span class="card-title rName"> ${recipe.name}</span>
                                                                        <span class="card-text rTime"> <i class="far fa-clock"></i> ${recipe.time} min</span>
                                                                    </div>
                                                                    <div class="card-content pb-3 mb-3">
                                                                        <div class="card-text listIng"> ${textIng}</div>
                                                                        <p class="card-text descRecipe"> ${recipeDesc}...</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>`

    /**<div class="col-12 col-lg-4">
                <div class="card mb-4 mb-lg-0 border-light shadow-sm">
                    <img class="card-img-top" src="images/course/css.jpeg" alt="Animations CSS">
                    <div class="card-body">
                        <h5 class="card-title">Créez des animations CSS</h5>
                        <p class="card-text">Vous allez plonger dans le monde des animations CSS pour donner vie à vos pages web !</p>
                        <a href="lessons_1.html" class="btn btn-primary stretched-link" role="button">Démarrer l'apprentissage</a>
                    </div>
                </div>
            </div>
    console.log(item.name);*/
}



