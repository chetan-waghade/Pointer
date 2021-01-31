// show pop box 
const searchBtn = document.getElementById("search-button");
const popBox = document.querySelector(".pop-block");
let hoverCount=0;
searchBtn.addEventListener('mouseover',()=>{
    if(hoverCount!==2){
        popBox.style.display = "inline-block";
    } 
});
searchBtn.addEventListener('mouseleave',()=>{
    popBox.style.display = "none";
    hoverCount++;
});
