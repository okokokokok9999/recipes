img_src = "img/recipes/";

function createRecipe (recipe) {
    const main_content = document.querySelector(".main_content");
    main_content.className = "main_content";

    const heading = document.createElement("h1");
    heading.className = "heading";
    heading.textContent = recipe.name;
    
    const recipe_img = document.createElement("div");
    recipe_img.className = "recipe_img";

    const main_img = document.createElement("img");
    main_img.className = "main_img";
    main_img.src = img_src + recipe.img + "/0.jpg";
    main_img.alt = recipe.img + "_0"

    const like_dislike = document.createElement("div");
    like_dislike.className = "like_dislike";

    const like = document.createElement("img");
    like.className = "like_btn";
    like.src = "img/main/like.png";
    like.alt = "like";

    const dislike = document.createElement("img");
    dislike.className = "dislike_btn";
    dislike.src = "img/main/like.png";
    dislike.alt = "dislike";

    const like_count = document.createElement("div");
    like_count.className = "like_count";
    like_count.textContent = "+" + recipe.like;

    const bookmark_views = document.createElement("div");
    bookmark_views.className = "bookmark_views";

    const bookmark_img = document.createElement("img");
    bookmark_img.className = "bookmark_img";
    bookmark_img.src = "img/main/bookmark.png";
    bookmark_img.alt = "bookmark_img";

    const bookmark = document.createElement("div");
    bookmark.className = "bookmark";
    bookmark.textContent = recipe.bookmark;

    const views = document.createElement("div");
    views.className = "views";
    views.textContent = recipe.views;

    const composition = document.createElement("div");
    composition.className = "composition";

    const composition_text = document.createElement("h2");
    composition_text.textContent = "Состав / ингредиенты";

    const info_time = document.createElement("div");
    info_time.className = "info_time";

    const info_time_text = document.createElement("h2");
    info_time_text.textContent = "Пошаговое приготовление";

    const time = document.createElement("time");
    time.className = "time";

    const all_time = document.createElement("p");
    all_time.className = "all_time";
    all_time.textContent = recipe.all_time;

    const recipe_step = document.createElement("div");
    recipe_step.className = "recipe_step";

    const conclusions = document.createElement("div");
    conclusions.className = "conclusions";

    main_content.appendChild(heading);
    main_content.appendChild(recipe_img);
    recipe_img.appendChild(main_img);
    for(let i=1; i<4; i++){
        let img = document.createElement("img");
        img.src = img_src + recipe.img + "/" + i + ".jpg";
        img.alt = recipe.img + "_" + i;
        recipe_img.appendChild(img);
    }

    recipe_img.appendChild(like_dislike);
    like_dislike.appendChild(like);
    like_dislike.appendChild(dislike);
    like_dislike.appendChild(like_count);

    recipe_img.appendChild(bookmark_views);
    bookmark_views.appendChild(views);
    bookmark_views.appendChild(bookmark);
    bookmark_views.appendChild(bookmark_img);

    main_content.appendChild(composition);
    composition.appendChild(composition_text);
    Object.entries(recipe.composition).forEach(([key, value]) => {
        let p = document.createElement("p");
        let span1 = document.createElement("span");
        span1.textContent = key;
        let span2 = document.createElement("span");
        span2.className = "filler"
        let span3 = document.createElement("span");
        span3.textContent = value;

        composition.appendChild(p);
        p.appendChild(span1);
        p.appendChild(span2);
        p.appendChild(span3);
    });

    main_content.appendChild(info_time);
    info_time.appendChild(time);
    time.appendChild(all_time);
    if(recipe.active_time != ""){
        const active_time = document.createElement("p");
        active_time.className = "active_time";
        active_time.textContent = recipe.active_time;
        time.appendChild(active_time);
    } else {
        all_time.style = "grid-row-start: 1; grid-row-end: 3;" 
    };

    main_content.appendChild(recipe_step);
    for(let i=0; i<recipe.step_text.length; i++){
        let step = document.createElement("div");
        step.className = "step";
        let h3 = document.createElement("h3");
        h3.textContent = "ШАГ: " + (i+1);
        let step_img = document.createElement("img");
        step_img.src = img_src + recipe.img + "/step_" + (i+1) + ".jpg";
        step_img.alt = recipe.img + "_" + (i+1);
        let p = document.createElement("p");
        p.textContent = recipe.step_text[i];

        recipe_step.appendChild(step);
        step.appendChild(h3);
        step.appendChild(step_img);
        step.appendChild(p);
    }

    main_content.appendChild(conclusions);
    recipe.conclusions.forEach(t => {
        let text = document.createElement("p");
        text.textContent = t;
        conclusions.appendChild(text);
    });
}



let params = (new URL(document.location)).searchParams;
let recipe_index = parseInt(params.get("recipe_index"));

let recipes_data_base = JSON.parse(window.localStorage.getItem("recipes_data_base"));
createRecipe(recipes_data_base[recipe_index]);




const like_btn = document.querySelector(".like_btn");
const dislike_btn = document.querySelector(".dislike_btn");
const like_count = document.querySelector(".like_count");
let users = JSON.parse(window.localStorage.getItem("users"));
let current_user = window.localStorage.getItem("current_user"); 
let user = users[current_user];
let recipe = recipes_data_base[recipe_index];


like_btn.addEventListener("click", function() {
    if (current_user == ""){
        document.body.style.overflow = "hidden";
        registration_fon.style.display = "flex";
        return 0;
    }
    if (dislike_btn.classList.contains("active_btn")) {
        dislike_btn.classList.remove("active_btn");
        like_count.textContent = "+" + (parseInt((like_count.textContent).slice(1)) + 2);
        like_btn.classList.add("active_btn");
        (user.like).push(recipe_index)
        user.dislike = (user.dislike).filter(elem => elem != recipe_index);
    } else if (like_btn.classList.contains("active_btn")) {
        like_count.textContent = "+" + (parseInt((like_count.textContent).slice(1)) - 1);
        like_btn.classList.remove("active_btn");
        user.like = (user.like).filter(elem => elem != recipe_index);
    } else {
        like_count.textContent = "+" + (parseInt((like_count.textContent).slice(1)) + 1);
        like_btn.classList.add("active_btn");
        (user.like).push(recipe_index);
    }
    recipe.like = parseInt((like_count.textContent).slice(1));
    recipes_data_base[recipe_index] = recipe;
    users[current_user] = user;
    window.localStorage.setItem("recipes_data_base", JSON.stringify(recipes_data_base));
    window.localStorage.setItem("users", JSON.stringify(users));
});
dislike_btn.addEventListener("click", function() {
    if (current_user == ""){
        document.body.style.overflow = "hidden";
        registration_fon.style.display = "flex";
        return 0;
    }
    if (like_btn.classList.contains("active_btn")) {
        like_btn.classList.remove("active_btn");
        like_count.textContent = "+" + (parseInt((like_count.textContent).slice(1)) - 2);
        dislike_btn.classList.add("active_btn");
        (user.dislike).push(recipe_index)
        user.like = (user.like).filter(elem => elem != recipe_index);
    } else if (dislike_btn.classList.contains("active_btn")) {
        like_count.textContent = "+" + (parseInt((like_count.textContent).slice(1)) + 1);
        dislike_btn.classList.remove("active_btn");
        user.dislike = (user.dislike).filter(elem => elem != recipe_index);
    } else {
        like_count.textContent = "+" + (parseInt((like_count.textContent).slice(1)) - 1);
        dislike_btn.classList.add("active_btn");
        (user.dislike).push(recipe_index);
    }
    recipe.like = parseInt((like_count.textContent).slice(1));
    recipes_data_base[recipe_index] = recipe;
    users[current_user] = user;
    window.localStorage.setItem("recipes_data_base", JSON.stringify(recipes_data_base));
    window.localStorage.setItem("users", JSON.stringify(users));
});

console.log(user)
if (current_user != ""){
    if ((user.like).includes(recipe_index)) {
        like_btn.classList.add("active_btn");
    } else if ((user.dislike).includes(recipe_index)) {
        dislike_btn.classList.add("active_btn");
}}






const bookmark = document.querySelector(".bookmark_img");
const bookmark_count = document.querySelector(".bookmark");

bookmark.addEventListener("click", function() {
    console.log(current_user);
    if (current_user == ""){
        document.body.style.overflow = "hidden";
        registration_fon.style.display = "flex";
        return 0;
    }
    if(bookmark.classList.contains("active_btn")) {
    bookmark.classList.remove("active_btn");
    bookmark_count.textContent = parseInt(bookmark_count.textContent) - 1;
    user.bookmark = (user.bookmark).filter(elem => elem != recipe_index);
    } else {
    bookmark_count.textContent = parseInt(bookmark_count.textContent) + 1;
    bookmark.classList.add("active_btn");
    (user.bookmark).push(recipe_index);
    }
    recipe.bookmark = parseInt(bookmark_count.textContent);
    recipes_data_base[recipe_index] = recipe;
    users[current_user] = user;
    window.localStorage.setItem("recipes_data_base", JSON.stringify(recipes_data_base));
    window.localStorage.setItem("users", JSON.stringify(users));
});

if (current_user != "" && (user.bookmark).includes(recipe_index)){
    bookmark.classList.add("active_btn")
}