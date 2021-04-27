
let searchIngArray = [... new Set(ingArray)];
let searchAppArray = [... new Set(appArray)];
let searchUstArray = [... new Set(ustArray)];

let maxIng = 0;
let maxApp = 0;
let maxUst = 0;

searchIngArray.length >= 30 ? maxIng = 30 : maxIng = searchIngArray.length;
searchAppArray.length >= 30 ? maxApp = 30 : maxApp = searchAppArray.length;
searchUstArray.length >= 30 ? maxUst = 30 : maxUst = searchUstArray.length;

// Première lettre en majuscule
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

btnFilter.forEach((btn) => { 
    switch(btn.getAttribute("id")) {
        case "btnIng":
            displayList("Ing","ingredient",searchIngArray);
            break;
        case "btnApp":
            displayList("App","appareil",searchAppArray);
            break;
        case "btnUst":
            displayList("Ust","ustensile",searchUstArray);
            break;
    }
});

// focus Ingredients search
// value replace by null
searchIng.addEventListener("focus", () => {
    searchIng.value=" ";
});

/**
 * FUNCTION
 * Display a list of item according the type of filter
 * @param {*} type 
 * @param {*} label 
 * @param {*} array 
 * 
 */

function displayList(type, label, array) {
    let counter = 0;
    let maxCount = 0;

    array.length > 30 ? maxCount = 30 : maxCount = array.length;

    const btn = document.getElementById("btn" + type);
    const btnDown = document.getElementById("btnDown" + type);
    const btnUp = document.getElementById("btnUp" + type);
    const search = document.querySelector(".b-Search" + type);
    const searchText = document.getElementById("search" + type);
    const listItem = document.querySelector(".list" + type);
    
    btnDown.addEventListener("click", () => {
        search.style.display = "block";
        searchText.value="";
        btn.style ="width:600px";
        searchText.setAttribute("placeholder", "Recherche un " + label);
        btnDown.style.display ="none";
        btnUp.style.display = "block";

        for (let item of array) {
            if (counter < maxCount) { 
                listItem.innerHTML += `<span> ${item.capitalize()} </span>`;
                counter ++; 
            }                                       
        }
    });

    btnUp.addEventListener("click", () => {
        search.style.display = "none";
        searchText.value !="" ? searchText.value = searchText.value : searchText.value = label ;
        btn.style ="width:10.625rem";
        btnDown.style.display ="block";
        btnUp.style.display = "none";
    });
}

