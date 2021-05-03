
/**
 * FUNCTION
 * Display a list of item according the type of filter
 * @param {*} type 
 * @param {*} label 
 * @param {*} array 
 * 
 */

function displayTagList(type, label, array) {
    
    let counter = 0;
    let maxCount = 0;

    array.length > 30 ? maxCount = 30 : maxCount = array.length;

    const btn = document.getElementById("btn" + type);
    const btnDown = document.getElementById("btnDown" + type);
    const btnUp = document.getElementById("btnUp" + type);
    const search = document.querySelector(".b-Search" + type);
    const searchText = document.getElementById("search" + type);
    const listItem = document.querySelector(".list" + type);

    // focus Ingredients search
    // value replace by null
    searchText.addEventListener("focus", () => {
        searchText.value=" ";
    });
    
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

    
    /**
     * ALGO #01
    */
    let arrFilter= [];

    searchText.addEventListener("input", () => {
        let valSearch = searchText.value;
        arrFilter = array.filter(elt => elt.includes(valSearch.replace(/ /g, "")));
        listItem.innerHTML = "";
        search.style.display ="block";
        btn.style="width:600px";
        for (let item of arrFilter) {
            listItem.innerHTML += `<span data-value="${item.capitalize()}" data-type="${type}" onClick="selectedTag(this.dataset.type,this.dataset.value)">${item.capitalize()}</span>`;
        }      
    });

}