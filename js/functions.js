
function taggedRecipes(type,val) {
    
    let tmpRecipes;
    let newRecipes = [];

    val = val.toLowerCase();
    
    switch (type) {
        case "Ing":
            tmpRecipes = recipesByIng.filter(elt => elt["ingredient"].toLowerCase() === val);
            break;
    
        default:
            break;
    }

    for(let recipe of recipes) {
        for(let n of tmpRecipes){
            if (recipe.id == n.recipeId) {
                newRecipes.push(recipe);
            }
        }        
    }

    console.log(newRecipes);
    let filteredRecipes = new Recipe(newRecipes).get_Render();
    
    console.log(filteredRecipes)
    
    

    /*console.log("Appareil");
    console.log(recipeBy.filter(elt => elt["appliance"].includes(val)));
    console.log("Ingredients");
    console.log();
    console.log("Description");
    console.log(recipeBy.filter(elt => elt["description"].includes(val)));
    */

   /*
        list.forEach(elt => {

        // DOM Content verification
        let recipeCard = elt.textContent.toLowerCase(); 
           
        //console.log(recipeCard.includes(val));           
        if ((val.length >=3) && (recipeCard.indexOf(val) !== -1)) {
            //console.log(recipeCard);
            elt.style.display="block";
        }
        else {
            elt.style.display = "none";
        }                
    }); 
     */ 

   
}