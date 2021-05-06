
function display_Recipes(newArrRecipes) {
    return new Recipe(newArrRecipes).get_Render();    
}

function taggedRecipes(type,val) {

    let tmpRecipes = [];
    let newRecipes = [];
    
    val = val.toLowerCase();
   
    switch (type) {
        case "Ing":
            tmpRecipes = recipesByIng.filter(elt => elt["ingredient"].toLowerCase() === val);
            break;
        case "App" :
            tmpRecipes = recipesByOther.filter(elt => elt["appliance"].toLowerCase() === val);
            break;
        case "Ust" :
            tmpRecipes = recipesByUst.filter(elt => elt["ustensil"].toLowerCase() === val);
            break;
    }

    for(let recipe of recipes) {
        for(let n of tmpRecipes){
            if (recipe.id == n.recipeId) {
                newRecipes.push(recipe);
            }
        }        
    }    

    return newRecipes;   
}


function searchRecipes(val) {

    let tmpRecipes = [];
    let tmp = [];
    let newRecipes = [];
    
    val = val.toLowerCase();
        
    tmp.push(recipesByIng.filter(elt => elt["ingredient"].toLowerCase().includes(val)));
    tmp.push(recipesByOther.filter(elt => elt["appliance"].toLowerCase().includes(val)));
    tmp.push(recipesByUst.filter(elt => elt["ustensil"].toLowerCase().includes(val)));
    tmp.push(recipesByOther.filter(elt => elt["description"].toLowerCase().includes(val)));

    for (let item of tmp) {
        item.forEach(elt => tmpRecipes.push(elt.recipeId));
    }

    for(let recipe of recipes) {
        for(let n of [... new Set(tmpRecipes)]){
            if (recipe.id == n) {
                newRecipes.push(recipe);
            }
        }        
    }  
    
    return newRecipes;  
}
