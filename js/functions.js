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
    let ingIndex, appIndex, ustIndex;
    for (let t of tags) {
        switch (type) {
            case "Ing":
                ingIndex = tagArray.indexOf(t.tag);
                tagArray.splice(ingIndex,1);
                break;
            case "App":
                appIndex = tagArray.indexOf(t.tag);
                tagArray.splice(ingIndex,1);
                break;
            case "Ust":
                ustIndex = tagArray.indexOf(t.tag);
                tagArray.splice(ingIndex,1);
                break;
        }
    }
   
    return new TagList(type,tag,label,tagArray).get_Render();
}

/**
 * Store recipes by Ustensils
 * @param {array} recipeArr 
 * @returns 
 */
function byUstensils(recipeArr) {

    for (let rec of recipeArr) {
      
        for (let ust of rec.ustensils) {
            recipesByUst.push({
                "recipeId" : rec.id,
                "ustensil" : ust 
            })
        }
    }

    return recipesByUst;
}

/**
 * Store recipes by Name, Appliance and description
 * @param {array} recipeArr 
 * @returns 
 */
function byNameAndDesc(recipeArr) {
    
    for (let rec of recipeArr) {
      
        recipesByOther.push({
            "recipeId" : rec.id,
            "name" : rec.name,
            "appliance": rec.appliance,
            "description" : rec.description,
        });
    }
    
    return recipesByOther;
}

/**
 * Store recipes by Ingredients
 * @param {array} recipeArr 
 * @returns 
 */

function byIngredients(recipeArr) {
    for (let rec of recipeArr) {      
        for (let ing of rec.ingredients) {
            recipesByIng.push({
                "recipeId": rec.id,
                "ingredient" : ing.ingredient
            });
        } 
        
    }
    
    return recipesByIng;
}

function createNewRecipes (recipeArr, tmp) {
    let filtRecipes = [];
    for(let recipe of recipeArr) {
        for(let n of tmp){
            if (recipe.id == n.recipeId) {
                filtRecipes.push(recipe);
            }
        }        
    }  
    
    return [... new Set(filtRecipes)];
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

    let bDefault = true;

    if (newRecipes.length > 0) {
        recipesByIng = byIngredients(newRecipes);
        recipesByOther = byNameAndDesc(newRecipes);
        recipesByUst = byUstensils(newRecipes);
        bDefault = false;
    }
    else {
        recipesByIng = byIngredients(recipes);
        recipesByOther = byNameAndDesc(recipes);
        recipesByUst = byUstensils(recipes);
    }

    let tmpRecipes = [];
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
  
    return (!bDefault) ?  createNewRecipes (newRecipes,tmpRecipes) : createNewRecipes (recipes,tmpRecipes);
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

    recipesByIng = byIngredients(recipes);
    recipesByOther = byNameAndDesc(recipes);
    recipesByUst = byUstensils(recipes);
    
    val = val.toLowerCase();
    
    tmpRecipes.push(...recipesByOther.filter(elt => elt["name"].toLowerCase().includes(val)),...recipesByIng.filter(elt => elt["ingredient"].toLowerCase().includes(val)),...recipesByOther.filter(elt => elt["description"].toLowerCase().includes(val)));
    //tmpRecipes.push(...recipesByOther.filter(elt => elt["name"].toLowerCase().indexOf(val) !==-1),...recipesByIng.filter(elt => elt["ingredient"].toLowerCase().indexOf(val) !==-1),...recipesByOther.filter(elt => elt["description"].toLowerCase().indexOf(val) !==-1));

    for(let recipe of recipes) {
        for(let n of tmpRecipes){
            if (recipe.id == n.recipeId) {
                newRecipes.push(recipe);
            }
        }        
    }  
        
    return [... new Set(newRecipes)];  
}
