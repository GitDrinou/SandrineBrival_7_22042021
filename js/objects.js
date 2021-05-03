class TagList {
    constructor(type, tag) {
        this.type = type,
        this.tag = tag
    }

    getRender() {
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
        
        
    const list = document.querySelectorAll(".js-recipe");
    let valTag = document.getElementById("tag").textContent;  
    let closeTag = document.querySelector(".fa-times-circle");

    closeTag.addEventListener("click", () => {
        tagSelected.style.display = "none";
        list.forEach(elt => {
            elt.style.display = "block";
        });

    });

    if (valTag !="") {        
        list.forEach(elt => {
            let recipeCard = elt.textContent.toLowerCase();
            if (recipeCard.indexOf(valTag.toLowerCase()) > -1) {
                elt.style.display="block";
            }
            else {
                elt.style.display = "none";
            }
        });
    }    

    // ICI gérer le cas où les résultats sont vides
        
    }
}
