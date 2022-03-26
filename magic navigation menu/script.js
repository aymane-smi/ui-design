const lists = document.querySelectorAll(".list");
console.log((lists));
function activeLink (){
    for(let list of lists){
        list.classList.remove("active");
        this.classList.add('active');
    }
}

for(let tmp of lists){
    tmp.addEventListener("click", activeLink);
}