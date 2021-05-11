class Recipe {
    constructor(arrRecipes, ings, apps, usts) {
        this.arrRecipes = arrRecipes,
        this.ings = ings,
        this.apps = apps,
        this.usts = usts     
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

            for (let ing of recipeIng) {
                ing.quantity == undefined ? quantity = "" : quantity = ing.quantity;
                ing.unit == undefined ? unit = "" : unit = ing.unit;
                textIng += `<span>${ing.ingredient}: ${quantity} ${unit.substring(0,9)} </span>`;                
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
                
        btnFilter.forEach((btn) => {     
            switch(btn.getAttribute("id")) {
                case "btnIng":
                    display_tagList("Ing","","ingredient",[... new Set(this.ings)]);
                    break;
                case "btnApp":
                    display_tagList("App","","appareil",[... new Set(this.apps)]);
                    break;
                case "btnUst":
                    display_tagList("Ust","","ustensile",[... new Set(this.usts)]);
                    break;
            }
        });
        
    }
}


class TagList {
    constructor(type, tags, label, filtArray) {
        this.type = type,
        this.tags = tags,
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

            listItem.innerHTML = "";
            
            for (let item of arr) {
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
            if (valSearch.length > 2) {
                arrFilter = arr.filter(elt => elt.includes(valSearch.replace(/ /g, "")));
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
        tagSelected.innerHTML = " ";

        for(let tag of tags) {
            tagSelected.innerHTML += `<span class="js-selected color${tag.type}" data-type="${tag.type}">${tag.tag}<i class="far fa-times-circle"></i></span>`;
            tagSelected.classList.add("color" + tag.type); 
        }    
                
        tagSelected.style.display = "block";

        switch (this.type) {
            case "Ing" : 
                btnLabel = "Ingredients";
                break;
            case "App" : 
                btnLabel = "Appareils";
                break;
            case "Ust" : 
                btnLabel = "Ustensiles";
                break;
        }

        document.getElementById("b-Search" + this.type).style.display = "none";
        document.getElementById("btn" + this.type).style ="width:10.625rem";
        document.getElementById("search" + this.type).value = btnLabel;
        document.getElementById("btnDown" + this.type).style.display = "block";
        document.getElementById("btnUp" + this.type).style.display = "none"; 
        
        let newRecipes = taggedRecipes(tags);  

        if (tags.length > 0 ) {  
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
            } 
            
            display_Recipes(newRecipes,newTmpIngs,newTmpApps,newTmpUsts); 
        
        
            let closeTag = document.querySelectorAll(".fa-times-circle");
            closeTag.forEach ((btn) => {
                btn.addEventListener("click", () => {
                    let tagText = btn.previousSibling;
                    tags.splice(tags.indexOf(tagText),1);
                    btn.parentElement.style.display = "none";
                    newRecipes.splice(0,newRecipes.length);

                    if (tags.length > 0 ) {  
                        
                        newRecipes = taggedRecipes(tags);          
            
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
                        } 
                        
                        display_Recipes(newRecipes,newTmpIngs,newTmpApps,newTmpUsts);  
                    }  
                    else {
                        display_Recipes(recipes,tmpIngs,tmpApps,tmpUsts);
                    }          
                });
            });            
        }
    }
}
