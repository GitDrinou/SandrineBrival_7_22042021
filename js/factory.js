/**
 * FACTORY METHOD
 * Use :Type of Filter (ingredient, appareil, ustensile)
 * -----------------------------------------------------------
*/

class Ingredients {
    constructor() {
        
    }
    displayList() {      
        let ctnIng = 0;
        ingBtnDown.addEventListener("click", () => {   
            blistIng.style.display = "block";
            blistApp.style.display = "none";
            blistUst.style.display = "none";                
            btnApp.style ="width:10.625rem";
            btnUst.style ="width:10.625rem";
            searchIng.value="";
            searchIng.setAttribute("placeholder", "Recherche un ingredient");
            btnIng.style ="width:600px";
            ingBtnDown.style.display ="none";
            ingBtnUp.style.display = "block";
            for (let ing of searchIngArray) {
                if (ctnIng < maxIng) { 
                    listIng.innerHTML += `<span> ${ing.capitalize()} </span>`;
                    ctnIng ++; 
                }                                       
            }
        });
        
        ingBtnUp.addEventListener("click", () => {
            blistIng.style.display = "none";
            searchIng.value !="" ? searchIng.value = searchIng.value : searchIng.value = "Ingredient" ;
            btn.style ="width:10.625rem";
            ingBtnDown.style.display ="block";
            ingBtnUp.style.display = "none";
        });}
}


function factory(type) {
    switch (type) {
        case "btnIng":
            return new Ingredients();
        case "btnApp":
            return console.log("allo");
        case "btnUst":
            return console.log("à l'huilte");
    }
}