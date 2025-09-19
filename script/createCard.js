img_src = "img/recipes/";

function createCard(recipe, i) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.categories = recipe.categories;

    const card_top = document.createElement("div");
    card_top.className = "card_top";

    const card_img = document.createElement("a");
    card_img.href = "recipes.html?recipe_index="+i;
    card_img.target = "_blank"
    card_img.className = "card_img";

    const img = document.createElement("img");
    img.src = img_src + recipe.img + "/0.jpg";
    img.alt = recipe.name;
    
    const card_bottom = document.createElement("div");
    card_bottom.className = "card_bottom";

    const info = document.createElement("div");
    info.className = "info";

    const calory = document.createElement("p");
    calory.className = "calory";
    calory.textContent = recipe.calory;

    const time = document.createElement("p");
    time.className = "time";
    time.textContent = recipe.all_time;

    const card_text = document.createElement("div");
    card_text.className = "card_text";

    const card_name = document.createElement("a");
    card_name.target = "_blank"
    card_name.href = "recipes.html?recipe_index="+i;
    card_name.className = "card_name";
    card_name.textContent = recipe.name;

    const card_desc = document.createElement("p");
    card_desc.className = "card_desc";
    card_desc.textContent = recipe.description;

    const add_info = document.createElement("div");
    add_info.className = "add_info";

    const ellipsis = document.createElement("button");
    ellipsis.className = "ellipsis";

    const ellipsis_img = document.createElement("img");
    ellipsis_img.src = "img/main/ellipsis.png";
    ellipsis_img.alt = "ellipsis";

    const card_compos = document.createElement("div");
    card_compos.className = "card_compos";

    const p = document.createElement("p");
    p.textContent = "Состав: ";

    let ul = document.createElement("ul");
    Object.keys(recipe.composition).forEach(key => {
        let li = document.createElement("li");
        li.textContent = key;
        ul.appendChild(li);
    });

    const bookmark = document.createElement("div");
    bookmark.className = "bookmark";
    bookmark.textContent = recipe.bookmark;

    const like = document.createElement("div");
    like.className = "like";
    like.textContent = recipe.like;

    const transition = document.createElement("a");
    transition.href = "recipes.html?recipe_index="+i;
    transition.target = "_blank";
    transition.className = "transition";
    transition.textContent = "Перейти к рецепту";

    const close = document.createElement("div");
    close.className = "close";

    const close_img = document.createElement("img");
    close_img.src = "img/main/close.png";
    close_img.alt = "close";

    card.appendChild(card_top);
    card_top.appendChild(card_img);
    card_img.appendChild(img);
    
    card.appendChild(card_bottom);
    card_bottom.appendChild(info);
    info.appendChild(calory);
    info.appendChild(time);

    card_bottom.appendChild(card_text);
    card_text.appendChild(card_name);
    card_text.appendChild(card_desc);

    card_bottom.appendChild(add_info);
    add_info.appendChild(ellipsis);
    ellipsis.appendChild(ellipsis_img);

    card_bottom.appendChild(card_compos);
    card_compos.appendChild(p);
    card_compos.appendChild(ul);
    card_compos.appendChild(bookmark);
    card_compos.appendChild(like);
    card_compos.appendChild(transition);
    card_compos.appendChild(close);
    close.appendChild(close_img);

    return card;
}



const main_content = document.querySelector(".main_content");

let recipes_data_base = JSON.parse(window.localStorage.getItem("recipes_data_base"));
let keys = Object.keys(recipes_data_base).reverse();

for(let key of keys){
    const card = createCard(recipes_data_base[key], key);
    main_content.appendChild(card);
};