class TagList {
    constructor(type, tag, label, array) {
        this.type = type,
        this.tag = tag,
        this.label = label,
        this.array = array
    }

    get_Render() {
        let counter = 0;
        let maxCount = 0;
        let arr = this.array;
            
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
    
            for (let item of this.array) {
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
    
        
        /**
         * ALGORITHME #01
         * Tag list filters
         * manual search
        */
        let arrFilter= [];
    
        searchText.addEventListener("input", () => {
            let valSearch = searchText.value;
            arrFilter = array.filter(elt => elt.includes(valSearch.replace(/ /g, "")));
            listItem.innerHTML = "";
            search.style.display ="block";
            btn.style="width:600px";
            for (let item of arrFilter) {
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
            list.forEach(elt => {
                elt.style.display = "block";
            });

        });

        if (valTag !="") {   
            filterRecipes(valTag);
        }         
    }
}
