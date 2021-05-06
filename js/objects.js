class Recipe {
    constructor(arrRecipes) {
        this.arrRecipes = arrRecipes;
    }

    get_Render() {      
        document.getElementById("listRecipes").innerHTML = "";  
        for(let recipe of this.arrRecipes) {
            let recipeIng = recipe.ingredients;
            let recipeUst = recipe.ustensils;
            let textIng=``;
            let quantity, unit;
            let recipeDesc = recipe.description; 
            recipeDesc = recipeDesc.substring(0,200);
            appArray.push((recipe.appliance).toLowerCase());
                                
            for (let ing of recipeIng) {
                ing.quantity == undefined ? quantity = "" : quantity = ing.quantity;
                ing.unit == undefined ? unit = "" : unit = ing.unit;
                textIng += `<span>${ing.ingredient}: ${quantity} ${unit.substring(0,9)} </span>`; 
                ingArray.push((ing.ingredient).toLowerCase());   
            }
        
            for (let ust of recipeUst) {
                ustArray.push((ust).toLowerCase());
            }   
            document.getElementById("listRecipes").innerHTML += `<div class="col-12 col-md-6 col-lg-4 mb-5 border-light js-recipe">
                                                                    <div class="card">
                                                                        <img class="card-img-top" src="images/img.png" alt="vignette recette">
                                                                        <div class="card-body px-0 py-0">
                                                                            <div class="card-header">
                                                                                <span class="card-title rName"> ${recipe.name}</span>
                                                                                <span class="card-text rTime"> <i class="far fa-clock"></i> ${recipe.time} min</span>
                                                                            </div>
                                                                            <div class="card-content pb-3">
                                                                                <div class="card-text ingList"> ${textIng}</div>
                                                                                <p class="card-text descRecipe"> ${recipeDesc}...</p>
                                                                            </div>                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>`
        }
        
    }
}






class TagList {
    constructor(type, tag, label, filtArray) {
        this.type = type,
        this.tag = tag,
        this.label = label,
        this.filtArray = filtArray
    }

    get_Render() {
        let counter = 0;
        let maxCount = 0;
        let arr = this.filtArray;
            
        arr.length > 30 ? maxCount = 30 : maxCount = arr.length;
    
        const btn = document.getElementById("btn" + this.type);
        const btnDown = document.getElementById("btnDown" + this.type);
        const btnUp = document.getElementById("btnUp" + this.type);
        const search = document.querySelector(".b-Search" + this.type);
        const searchText = document.getElementById("search" + this.type);
        const listItem = document.querySelector(".list" + this.type);
    
        // focus Ingredients search
        // value replace by null
        searchText.addEventListener("focus", () => {
            searchText.value=" ";
        });
        
        btnDown.addEventListener("click", () => {
            search.style.display = "block";
            searchText.value="";
            btn.style ="width:600px";
            searchText.setAttribute("placeholder", "Recherche un " + this.label);
            btnDown.style.display ="none";
            btnUp.style.display = "block";
    
            for (let item of this.filtArray) {
                if (counter < maxCount) { 
                    listItem.innerHTML += `<span data-value="${item.capitalize()}" data-type="${this.type}" onClick="selectedTag(this.dataset.type,this.dataset.value)">${item.capitalize()}</span>`;
                    counter ++; 
                }                                       
            }
        });
    
        btnUp.addEventListener("click", () => {
            search.style.display = "none";
            searchText.value !="" ? searchText.value = searchText.value : searchText.value = this.label ;
            btn.style ="width:10.625rem";
            btnDown.style.display ="block";
            btnUp.style.display = "none";
        });
    
        
        let arrFilter= [];
        
        searchText.addEventListener("input", () => {
            let valSearch = searchText.value;            
            valSearch = valSearch.replace(/ /g, "");
            if (valSearch.length > 2) {
                arrFilter = this.filtArray.filter(elt => elt.includes(valSearch.replace(/ /g, "")));
            }
            else if(valSearch.length === 0) {
                arrFilter.splice(0, arrFilter.length);
            }

            listItem.innerHTML = "";
            search.style.display ="block";
            btn.style="width:600px";
            let newArrFilter = [... new Set(arrFilter)];
            for (let item of newArrFilter) {
                listItem.innerHTML += `<span data-value="${item.capitalize()}" data-type="${this.type}" onClick="selectedTag(this.dataset.type,this.dataset.value)">${item.capitalize()}</span>`;
            }     
        });
    }
   
    get_Selected() {
        let tagSelected =  document.getElementById("tag");
        let btnLabel;
        tagSelected.innerHTML = this.tag + "<i class='far fa-times-circle'></i>";
        tagSelected.style.display = "block";
        tagSelected.classList.add("color" + this.type); 

        switch (this.type) {
            case "Ing" : 
                btnLabel = "Ingredients";
                tagSelected.classList.remove("colorApp", "colorUst");
                break;
            case "App" : 
                btnLabel = "Appareils";
                tagSelected.classList.remove("colorIng", "colorUst");
                break;
            case "Ust" : 
                btnLabel = "Ustensiles";
                tagSelected.classList.remove("colorIng", "colorApp");
                break;
        }

        document.getElementById("b-Search" + this.type).style.display = "none";
        document.getElementById("btn" + this.type).style ="width:10.625rem";
        document.getElementById("search" + this.type).value = btnLabel;
        document.getElementById("btnDown" + this.type).style.display = "block";
        document.getElementById("btnUp" + this.type).style.display = "none"; 
        
        
        let valTag = document.getElementById("tag").textContent;  
        let closeTag = document.querySelector(".fa-times-circle");

        closeTag.addEventListener("click", () => {
            tagSelected.style.display = "none";
            display_Recipes(recipes);
            /*list.forEach(elt => {
                elt.style.display = "block";
            });*/
        });

        if (valTag !="") {   
           let newRecipes = taggedRecipes(this.type,valTag);
           if(newRecipes.length > 0) {
               display_Recipes(newRecipes);
           }
        }         
    }
}
