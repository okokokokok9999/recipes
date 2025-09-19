const ellipsis = document.querySelectorAll(".ellipsis");
const compos = document.querySelectorAll(".card_compos");
const close_btn = document.querySelectorAll(".close");

for (let i=0; i<ellipsis.length; i++){
    ellipsis[i].addEventListener("click", function(){
        for(let p=0; p<compos.length; p++){
            if(compos[p].style.display == "block"){
                compos[p].style.display = "none";
                ellipsis[p].style.display = "flex";
            }
        }
        ellipsis[i].style.display = "none";
        compos[i].style.display = "block";
    });
}

for (let i=0; i<close_btn.length; i++){
    close_btn[i].addEventListener("click", function(){
        compos[i].style.display = "none";
        ellipsis[i].style.display = "flex";
    });
}



function filterCard(filter){
    filter.addEventListener("click", () => {
        const category = filter.getAttribute("data-filter");

        cards.forEach(card => {
            const arr_category = (card.getAttribute("data-categories")).split(",");
            if(arr_category.includes(category) || category == "all"){
                card.style.display = "block";
            } else {
                card.style.display = "none";
            };
            all_categories.style.display = "none";
        });
        });
}

const btn_filter = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".card");
const all_categories = document.querySelector(".categories_fon");
const other_filter = ((new URL(document.location)).searchParams).get("data-filter");

if(other_filter){
    cards.forEach(card => {
        const arr_category = (card.getAttribute("data-categories")).split(",");
        if(arr_category.includes(other_filter)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        };
        all_categories.style.display = "none";
        // body.style.overflow = "scroll";
    });
};
btn_filter.forEach(filter => filterCard(filter));

const categories_close = document.querySelector(".categories_close");
const categories_open = document.querySelectorAll(".categories_open");
const body = document.querySelector("body");

categories_close.addEventListener("click", () => {
    all_categories.style.display = "none";
    body.style.overflow = "scroll";
});

categories_open.forEach(open => {
    open.addEventListener("click", () => {
        all_categories.style.display = "flex";
        body.style.overflow = "hidden";
    });
})
