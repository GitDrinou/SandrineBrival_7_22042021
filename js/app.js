/*mainSearch.addEventListener("input", () => {

    mainSearch.setAttribute("data-main",true);
    let valSearch = mainSearch.value;  
    
    if (valSearch.length > 3) {

        newRecipes = searchRecipes(valSearch);

        if(newRecipes.length > 0) {

            for (let recipe of newRecipes) {
                newTmpApps.push((recipe.appliance));
                for (let ing of recipe.ingredients) {
                    newTmpIngs.push((ing.ingredient));   
                }    
                for (let ust of recipe.ustensils) {
                    newTmpUsts.push((ust.capitalize()));
                }   
            }

            display_Recipes(newRecipes,newTmpIngs,newTmpApps,newTmpUsts);            
        }
        else {
            document.getElementById("listRecipes").innerHTML = `<div class="col-12 mt-5 mb-5 border-light .shadow-sm noResults">
                                                                    <p>Aucune recette ne correspond à votre critère...<br>vous pouvez chercher "tarte aux pommes", "poisson", etc.</p>
                                                                </div>`;  
        }  
    }  
})*/

/**
 * addEventListener on search button
 * call searchRecipes function 
 */
icoSearch.addEventListener("click", () => {

    mainSearch.setAttribute("data-main",true);
    
    let valSearch = mainSearch.value;
    if (valSearch.length >=3) {

        newRecipes = searchRecipes(valSearch);

        if(newRecipes.length > 0) {

            /* Update tags arrays */            
            for (let recipe of newRecipes) {
                newTmpApps.push((recipe.appliance));
                for (let ing of recipe.ingredients) {
                    newTmpIngs.push((ing.ingredient));   
                }    
                for (let ust of recipe.ustensils) {
                    newTmpUsts.push((ust.capitalize()));
                }   
            }

            display_Recipes(newRecipes,newTmpIngs,newTmpApps,newTmpUsts);            
        }
        else {
            document.getElementById("listRecipes").innerHTML = `<div class="col-12 mt-5 mb-5 border-light .shadow-sm noResults">
                                                                    <p>Aucune recette ne correspond à votre critère...<br>vous pouvez chercher "tarte aux pommes", "poisson", etc.</p>
                                                                </div>`;  
        }  
    } else {
        document.getElementById("errorMsg").innerHTML = `<div class="alert alert-warning alert-dismissible show" role="alert">
                                                                <h6 class="alert-heading"><b>Pour info</b></h5>
                                                                <p>Saisissez un ingrédient, une idée de recette pour lancer la recherche</p>
                                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                        </div> `
    }  
});



