let current_user = window.localStorage.getItem("current_user");
// let users_data_base = JSON.parse(window.localStorage.getItem("users"));
let user = users_data_base[current_user];
const bookmark_recipe_content = document.querySelector(".bookmark_recipe_content");
const my_recipe_content = document.querySelector(".my_recipe_content");
let recipes_data_base = JSON.parse(window.localStorage.getItem("recipes_data_base"));

function createTabCard(recipe, index, remove){
    const tab_recipe = document.createElement("a");
    tab_recipe.className = "tab_recipe";
    tab_recipe.href = "recipes.html?recipe_index=" +index;

    const remove_card = document.createElement("img");
    remove_card.className = remove;
    remove_card.src = "img/main/close.png";
    remove_card.alt = "remove";
    remove_card.dataset.index = index;

    const heading = document.createElement("h3");
    heading.textContent = recipe.name;
    
    const composition = document.createElement("p");
    let composition_arr = []
    for(let key in recipe.composition){
        composition_arr.push(key);
    }
    composition.textContent = "Ингредиенты: " + (composition_arr.slice(0,4)).join(", ") + "...";

    const time = document.createElement("p");
    const time_text = document.createElement("strong");
    time_text.textContent = "Время приготовления: ";
    time.appendChild(time_text);
    const all_time = document.createElement("span");
    all_time.textContent = recipe.all_time;
    time.appendChild(all_time);

    tab_recipe.appendChild(remove_card);
    tab_recipe.appendChild(heading);
    tab_recipe.appendChild(composition);
    tab_recipe.appendChild(time);

    return tab_recipe;
}

(user.bookmark).forEach(index => {
    if(recipes_data_base[index] != undefined) {
        const card = createTabCard(recipes_data_base[index], index, "remove_bookmark");
        bookmark_recipe_content.appendChild(card);    
    }
});
(user.my_recipe).forEach(index => {
    if(recipes_data_base[index] != undefined) {
        const card = createTabCard(recipes_data_base[index], index, "remove_my_recipe");
        my_recipe_content.appendChild(card);    
    }
});

const bookmark_recipe = document.querySelector(".bookmark_recipe");
const my_recipe = document.querySelector(".my_recipe");
const my_recipe_bool = Boolean(((new URL(document.location)).searchParams).get("my_recipe"));
if(my_recipe_bool){
    bookmark_recipe.classList.add("no_active");
    bookmark_recipe_content.style.display = "none";
    my_recipe.classList.remove("no_active");
    my_recipe_content.style.display = "block";
}

bookmark_recipe.addEventListener("click", function() {
    if(my_recipe.classList.contains("no_active")){
        return null;
    }
    my_recipe.classList.add("no_active");
    my_recipe_content.style.display = "none";
    bookmark_recipe.classList.remove("no_active");
    bookmark_recipe_content.style.display = "block";
});
my_recipe.addEventListener("click", function() {
    if(bookmark_recipe.classList.contains("no_active")){
        return null;
    }
    bookmark_recipe.classList.add("no_active");
    bookmark_recipe_content.style.display = "none";
    my_recipe.classList.remove("no_active");
    my_recipe_content.style.display = "block";
});

const remove_bookmark = document.querySelectorAll(".remove_bookmark");
remove_bookmark.forEach(elem => 
    elem.addEventListener("click", function() {
    user.bookmark = (user.bookmark).filter(index => index != elem.getAttribute("data-index"));
    users_data_base[current_user] = user;
    window.localStorage.setItem("users", JSON.stringify(users_data_base));
}));
remove_bookmark.forEach(elem =>
    elem.addEventListener("mouseover", function() {
        const parent_elem = elem.parentElement;
        parent_elem.href = "";
    })
);

const remove_my_recipe = document.querySelectorAll(".remove_my_recipe");
remove_my_recipe.forEach(elem => 
    elem.addEventListener("click", function() {
    user.my_recipe = (user.my_recipe).filter(index => index != elem.getAttribute("data-index"));
    users_data_base[current_user] = user;
    window.localStorage.setItem("users", JSON.stringify(users_data_base));
    delete recipes_data_base[elem.getAttribute("data-index")];
    window.localStorage.setItem("recipes_data_base", JSON.stringify(recipes_data_base));
}));
remove_my_recipe.forEach(elem =>
    elem.addEventListener("mouseover", function() {
        const parent_elem = elem.parentElement;
        parent_elem.href = "";
    })
);




const main_img = document.querySelector(".main_img img");
const avatar_select_fon = document.querySelector(".avatar_select_fon");
const close_avatar_select = document.querySelector(".close_avatar_select");

main_img.addEventListener("click", function() {
    avatar_select_fon.style.display = "flex";
    body.style.overflow = "hidden"
});
close_avatar_select.addEventListener("click", function () {
    avatar_select_fon.style.display = "none";
    body.style.overflowY = "scroll"
});



const avatar_img_all = document.querySelectorAll(".avatar_img img");
avatar_img_all.forEach((avatar_img) => {
    avatar_img.addEventListener("click", function() {
        main_img.src = avatar_img.src;
        avatar_select_fon.style.display = "none";
        body.style.overflowY = "scroll"
        user["avatar"] = avatar_img.src;
        users_data_base[current_user] = user;
        window.localStorage.setItem("users", JSON.stringify(users_data_base));
    });
});

if(user.avatar != ""){
    main_img.src = user.avatar;
}

const user_info_text = document.querySelectorAll(".user_info_text .change_text");
user_info_text[0].textContent = user.name;
user_info_text[1].textContent = user.data_registration;
user_info_text[2].textContent = (user.bookmark).length;
user_info_text[3].textContent = (user.my_recipe).length;