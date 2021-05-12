/**
 * addEventListener on search button
 * call searchRecipes function 
 */
icoSearch.addEventListener("click", () => {

    mainSearch.setAttribute("data-main",true);
    
    let valSearch = mainSearch.value;
    if (valSearch.length >=3) {

        let newRecipes = searchRecipes(valSearch);

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
    }   
});



