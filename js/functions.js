// affiche la liste des recettes
function display_Recipes(newRecipes, bDefaultfilters, ings, apps, usts ) {
    return new Recipe(newRecipes,bDefaultfilters, ings, apps, usts).get_Render();    
}

// affiche la liste des tags
function display_tagList(type,tag,label,tagArray) {   
    return new TagList(type,tag,label,tagArray).get_Render();
}

function selectedTag(type,tag) {
    tags.push({
        "type" : type,
        "tag" : tag
    });
       
    const tagged = new TagList(type,tags).get_Selected();    
}


function taggedRecipes(tagValues) {

    let tmpRecipes = [];
    let tmpNewRecipes = [];
    for (let val of tagValues) {
        switch (val.type) {            
            case "Ing":
                for(let ing of recipesByIng) {
                    if(ing["ingredient"].toLowerCase() === val["tag"].toLowerCase()) {
                        tmpRecipes.push(ing);
                    }
                }
                break;
            case "App" :
                for(let rec of recipesByOther) {
                    if(rec["appliance"].toLowerCase() === val["tag"].toLowerCase()) {
                        tmpRecipes.push(rec);
                    }
                }
                break;
            case "Ust" :
                for(let ust of recipesByUst) {
                    if(rec["ustensil"].toLowerCase() === val["tag"].toLowerCase()) {
                        tmpRecipes.push(ust);
                    }
                }
                break;
        }
    }    

    if(newRecipes.length > 0) {
        for(let recipe of newRecipes) {
            for(let n of tmpRecipes){
                if (recipe.id == n.recipeId) {
                    tmpNewRecipes.push(recipe);
                }
            }        
        }    
    }
    else {
        for(let recipe of recipes) {
            for(let n of tmpRecipes){
                if (recipe.id == n.recipeId) {
                    tmpNewRecipes.push(recipe);
                }
            }        
        }  
    }
    
    return [... new Set(tmpNewRecipes)];   
}


function searchRecipes(val) {
    
    let tmpRecipes = [];
    let tmp = [];
    
    val = val.toLowerCase();
    
    for(let rec of recipesByOther) {
        if(rec["name"].toLowerCase().indexOf(val.toLowerCase()) !== -1) {
            tmp.push(rec);
        }
        if(rec["description"].toLowerCase().indexOf(val.toLowerCase()) !== -1) {
            tmp.push(rec);
        }
    }
    
    for(let ing of recipesByIng) {
        if(ing["ingredient"].toLowerCase().indexOf(val.toLowerCase()) !== -1) {
            tmp.push(ing);
        }
    }  

    for (let item of tmp) {
        //item.forEach(elt => tmpRecipes.push(elt.recipeId));
        tmpRecipes.push(item.recipeId);
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
