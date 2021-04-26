
const searchIng = document.getElementById("searchIng");
const ingBtnDown = document.getElementById("ing-btnDown");
const ingBtnUp = document.getElementById("ing-btnUp");
const appBtnDown = document.getElementById("app-btnDown");
const appBtnUp = document.getElementById("app-btnUp");
const ustBtnDown = document.getElementById("ust-btnDown");
const ustBtnUp = document.getElementById("ust-btnUp");
const blistIng = document.querySelector(".b-SearchIng");
const blistApp = document.querySelector(".b-SearchApp");
const blistUst = document.querySelector(".b-SearchUst");
const listIng = document.querySelector(".ingList");
const listApp = document.querySelector(".appList");
const listUst = document.querySelector(".ustList");
const btnIng = document.querySelector(".btn-primary");
const btnFilter = document.querySelectorAll(".btn");

let searchIngArray = [... new Set(ingArray)];
let searchAppArray = [... new Set(appArray)];
let searchUstArray = [... new Set(ustArray)];

// Première lettre en majuscule
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

btnFilter.forEach((btn) => { 
    switch(btn.getAttribute("id")) {
        case "btnIng":
            ingBtnDown.addEventListener("click", () => {
                let ctnIng = 0;
                blistIng.style.display = "block";
                searchIng.value="";
                searchIng.setAttribute("placeholder", "Recherche un ingredient");
                btnIng.style =" width:600px";
                ingBtnDown.style.display ="none";
                ingBtnUp.style.display = "block";
                for (let ing of searchIngArray) {
                    ctnIng < 30 ? listIng.innerHTML += `<span> ${ing.capitalize()} </span>` : null ;
                    ctnIng ++;        
                }
            });
            
            ingBtnUp.addEventListener("click", () => {
                blistIng.style.display = "none";
                searchIng.value !="" ? searchIng.value = searchIng.value : searchIng.value = "Ingredient" ;
                btn.style ="width:10.625rem";
                ingBtnDown.style.display ="block";
                ingBtnUp.style.display = "none";
            });
        case "btnApp":
            appBtnDown.addEventListener("click", () => {
                let ctnApp = 0;
                blistApp.style.display = "block";
                searchApp.value="";
                searchApp.setAttribute("placeholder", "Recherche un appareil");
                btnApp.style =" width:600px";
                appBtnDown.style.display ="none";
                appBtnUp.style.display = "block";
                for (let app of searchAppArray) {
                    ctnApp < 30 ? listApp.innerHTML += `<span> ${app.capitalize()} </span>` : null ;
                    ctnApp ++;  
                    console.log(app);      
                }
            });
            
            appBtnUp.addEventListener("click", () => {
                blistApp.style.display = "none";
                searchApp.value !="" ? searchApp.value = searchApp.value : searchApp.value = "Appareil" ;
                btn.style ="width:10.625rem";
                appBtnDown.style.display ="block";
                appBtnUp.style.display = "none";
            });
        case "btnUst":
            ustBtnDown.addEventListener("click", () => {
                let ctnUst = 0;
                blistUst.style.display = "block";
                searchUst.value="";
                searchUst.setAttribute("placeholder", "Recherche un ustensile");
                btnUst.style =" width:600px";
                ustBtnDown.style.display ="none";
                ustBtnUp.style.display = "block";
                for (let ust of searchUstArray) {
                    ctnUst < 30 ? listUst.innerHTML += `<span> ${ust.capitalize()} </span>` : null ;
                    ctnUst ++;        
                }
            });
            
            ustBtnUp.addEventListener("click", () => {
                blistUst.style.display = "none";
                searchUst.value !="" ? searchUst.value = searchUst.value : searchUst.value = "Ustensile" ;
                btnUst.style ="width:10.625rem";
                ustBtnDown.style.display ="block";
                ustBtnUp.style.display = "none";
            });
    }
});

// focus Ingredients search
// value replace by null
searchIng.addEventListener("focus", () => {
    searchIng.value=" ";
});

// onClick ingredient chevron

