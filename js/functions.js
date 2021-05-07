// affiche la liste des recettes
function display_Recipes(newArrRecipes) {
    return new Recipe(newArrRecipes).get_Render();    
}

// affiche la liste des tags
function display_tagList(type,tag,label,tagArray) {    
    return new TagList(type,tag,label,tagArray).get_Render();
}

function selectedTag(type,tag) {
    const tagged = new TagList(type,tag).get_Selected();    
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
    
    tmp.push(recipesByOther.filter(elt => elt["name"].toLowerCase().includes(val)));    
    tmp.push(recipesByIng.filter(elt => elt["ingredient"].toLowerCase().includes(val)));
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

    /* Update tags arrays */
    ingArray.splice(0,ingArray.length);
    appArray.splice(0,appArray.length);
    ustArray.splice(0,ustArray.length);

    for (let recipe of newRecipes) {
        appArray.push((recipe.appliance).toLowerCase());
        for (let ing of recipe.ingredients) {
            ingArray.push((ing.ingredient).toLowerCase());   
        }    
        for (let ust of recipe.ustensils) {
            ustArray.push((ust).toLowerCase());
        }   
    }
    
    return newRecipes;  
}
