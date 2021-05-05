function filterRecipes(val) {
    val = val.toLowerCase();
    list.forEach(elt => {

        // DOM Content verification
        let recipeCard = elt.textContent.toLowerCase();                
        if (recipeCard.indexOf(val) > -1) {
            //console.log(recipeCard);
            elt.style.display="block";
        }
        else {
            elt.style.display = "none";
        }                
    });
}