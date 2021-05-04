
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
            const listIng = new TagList("Ing","","ingredient", searchIngArray).get_Render();
            break;
        case "btnApp":
            const listApp = new TagList("App","","appareil", searchAppArray).get_Render();
            break;
        case "btnUst":
            const listUst = new TagList("Ust","","ustensile", searchUstArray).get_Render();
            break;
    }
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
                listItem.innerHTML += `<span data-value="${item.capitalize()}" data-type="${type}" onClick="selectedTag(this.dataset.type,this.dataset.value)">${item.capitalize()}</span>`;
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

function selectedTag(type,tag) {
    let tagSelected =  document.getElementById("tag");
    tagSelected.innerHTML = tag + "<i class='far fa-times-circle'></i>";
    tagSelected.style.display = "block";
    switch (type) {
        case "Ing" : 
            tagSelected.innerHTML = tag + "<i class='far fa-times-circle'></i>";
            tagSelected.classList.add("color-ing");
            tagSelected.classList.remove("color-app", "color-ust");
            document.querySelector(".b-SearchIng").style.display = "none";
            document.getElementById("btnIng").style ="width:10.625rem";
            document.getElementById("searchIng").value ="Ingredients";
            document.getElementById("btnDownIng").style.display = "block";
            document.getElementById("btnUpIng").style.display = "none";
            
            break;
        case "App" :             
            tagSelected.classList.add("color-app");            
            tagSelected.classList.remove("color-ing", "color-ust");
            document.querySelector(".b-SearchApp").style.display = "none";
            document.getElementById("btnApp").style ="width:10.625rem";
            document.getElementById("searchApp").value ="Appareil";
            document.getElementById("btnDownApp").style.display = "block";
            document.getElementById("btnUpApp").style.display = "none";
            break;
        case "Ust" : 
            tagSelected.classList.add("color-ust");            
            tagSelected.classList.remove("color-ing", "color-app");
            document.querySelector(".b-SearchUst").style.display = "none";
            document.getElementById("btnUst").style ="width:10.625rem";
            document.getElementById("searchUst").value ="Ustensile";
            document.getElementById("btnDownUst").style.display = "block";
            document.getElementById("btnUpUst").style.display = "none";
            break;
    }

    let closeTag = document.querySelector(".fa-times-circle");
        closeTag.addEventListener("click", () => {
        tagSelected.style.display = "none";
    })
}

