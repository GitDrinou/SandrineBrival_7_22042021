
const searchIng = document.getElementById("searchIng");
console.log(ingArray);
console.log([... new Set(ingArray)]);



searchIng.addEventListener("focus", () => {
    searchIng.value=" ";
});