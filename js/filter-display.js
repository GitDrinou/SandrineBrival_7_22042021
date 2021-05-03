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
            displayTagList("Ing","ingredient",searchIngArray);
            break;
        case "btnApp":
            displayTagList("App","appareil",searchAppArray);
            break;
        case "btnUst":
            displayTagList("Ust","ustensile",searchUstArray);
            break;
    }
});


function selectedTag(type,tag) {

    const tagged = new TagList(type,tag);
    tagged.getRender();  
    
}




