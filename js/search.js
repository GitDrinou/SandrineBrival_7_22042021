
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




function selectedTag(type,tag) {
    
    const selTag = new TagList(type,tag).get_Selected();
    /*let tagSelected =  document.getElementById("tag");
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
    */

    let closeTag = document.querySelector(".fa-times-circle");
        closeTag.addEventListener("click", () => {
        tagSelected.style.display = "none";
    })
}

