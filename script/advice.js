const img_src = "/Users/77474/Downloads/recipe/img/advice/";

function createAdviceCard (advice, i) {
    const card = document.createElement("div");
    card.className = "card";

    const card_top = document.createElement("div");
    card_top.className = "card_top";

    const card_img = document.createElement("a");
    card_img.target = "_blank";
    card_img.href = "advice_page.html?advice_index=" + i;
    card_img.className = "card_img";

    const img = document.createElement("img");
    img.src = img_src + i + ".jpg";
    img.alt = i + ".jpg";
    console.log(img.src);

    const card_bottom = document.createElement("div");
    card_bottom.className = "card_bottom";

    const card_text = document.createElement("div");
    card_text.className = "card_text";

    const card_name = document.createElement("a");
    card_name.target = "_blank";
    card_name.href = "advice_page.html?advice_index=" + i;
    card_name.className = "card_name";
    card_name.textContent = advice[0];

    card.appendChild(card_top);
    card.appendChild(card_bottom);
    card_top.appendChild(card_img);
    card_img.appendChild(img);
    card_bottom.appendChild(card_text);
    card_bottom.appendChild(card_name);

    return card;
}


const main_content = document.querySelector(".main_content");
const advice_data_base = JSON.parse(window.localStorage.getItem("advice_data_base"));

for(i=0; i<advice_data_base.length; i++){
    const card = createAdviceCard(advice_data_base[i], i);
    main_content.appendChild(card);
}