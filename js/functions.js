/**
 * display the recipes
 * use Recipe object and get_Render method
 * 
 * @param {array} newRecipes 
 * @param {boolean} bDefaultfilters
 * @param {array} ings
 * @param {array} apps
 * @param {array} usts
 * @returns
 */
function display_Recipes(newRecipes, bDefaultfilters, ings, apps, usts ) {
    return new Recipe(newRecipes,bDefaultfilters, ings, apps, usts).get_Render();    
}

// affiche la liste des tags
/**
 * display the tags lists
 * use TagList object and get_Render method
 * @param {string} type
 * @param {string} tag
 * @param {string} label
 * @param {array} tagArray
 * @returns 
 */
function display_tagList(type,tag,label,tagArray) {   
    return new TagList(type,tag,label,tagArray).get_Render();
}

/**
 * display the selected tags
 * use TagList object and get_Selected method
 * 
 * @param {string} type 
 * @param {string} tag 
 */

function selectedTag(type,tag) {
   tags.push({
            "type" : type,
            "tag" : tag
    });
    
    const tagged = new TagList(type,tags).get_Selected();    
}

/**
 * search and filter recipes
 * with tag value(s)
 * use filter method and recipesBy... arrays
 * 
 * @param {array} tagValues 
 * @returns
 */
function taggedRecipes(tagValues) {

    let tmpRecipes = [];
    let newRecipes = [];
    for (let val of tagValues) {
        switch (val.type) {            
            case "Ing":
                tmpRecipes = recipesByIng.filter(elt => elt["ingredient"].toLowerCase() === val["tag"].toLowerCase());                
                break;
            case "App" :
                tmpRecipes = recipesByOther.filter(elt => elt["appliance"].toLowerCase() === val["tag"].toLowerCase());  
                break;
            case "Ust" :
                tmpRecipes = recipesByUst.filter(elt => elt["ustensil"].toLowerCase() === val["tag"].toLowerCase());  
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

/**
 * search and filter recipes
 * with main search value
 * use filter method
 * @param {string} val 
 * @returns 
 */
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
