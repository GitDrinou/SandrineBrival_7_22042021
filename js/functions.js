// affiche la liste des recettes
function display_Recipes(newRecipes, bDefaultfilters, ings, apps, usts ) {
    return new Recipe(newRecipes,bDefaultfilters, ings, apps, usts).get_Render();    
}

// affiche la liste des tags
function display_tagList(type,tag,label,tagArray) {   
    return new TagList(type,tag,label,tagArray).get_Render();
}

function selectedTag(type,tag) {
   if (tags.length > 0) {
       for (let t of tags) {
           if (t.tag !== tag) {
               tags.push({
                    "type" : type,
                    "tag" : tag
                });
           }
       }
   }   
   else {
        tags.push({
            "type" : type,
            "tag" : tag
        });
   } 
    
    const tagged = new TagList(type,tags).get_Selected();    
}


function taggedRecipes(tagValues) {

    let tmpRecipes = [];
    let newRecipes = [];
    for (let val of tagValues) {
        switch (val.type) {            
            case "Ing":
                tmpRecipes = recipesByIng.filter(elt => elt["ingredient"].toLowerCase() === val["valContent"].toLowerCase());                
                break;
            case "App" :
                tmpRecipes = recipesByOther.filter(elt => elt["appliance"].toLowerCase() === val["valContent"].toLowerCase());  
                break;
            case "Ust" :
                tmpRecipes = recipesByUst.filter(elt => elt["ustensil"].toLowerCase() === val["valContent"].toLowerCase());  
                break;
        }
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
    
    return newRecipes;  
}
