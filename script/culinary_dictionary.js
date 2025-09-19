const culinary_dictionary_data_base = JSON.parse(window.localStorage.getItem("culinary_dictionary_data_base"));
const main_content = document.querySelector(".main_content");

function createDictionaryCard (dict, index) {
    const dictionary_card = document.createElement("div");
    dictionary_card.className = "dictionary_card";
    dictionary_card.dataset.letter = (dict[0][0]).toLowerCase();
    
    const dictionary_heading_card = document.createElement("p");
    dictionary_heading_card.className = "dictionary_heading_card";
    dictionary_heading_card.textContent = dict[0];

    const dictionary_text_card = document.createElement("p");
    dictionary_text_card.className = "dictionary_text_card";
    dictionary_text_card.textContent = ((((dict.join(" ")).slice(0,400)).split(" ")).slice(0, -1)).join(" ") + "...";

    const a = document.createElement("a");
    a.className = "transition_dictionary_page";
    a.href = "culinary_dictionary_page.html?culinary_dictionary_index="+index;
    a.textContent = "Узнать больше...";

    dictionary_card.appendChild(dictionary_heading_card);
    dictionary_card.appendChild(dictionary_text_card);
    dictionary_card.appendChild(a);

    main_content.appendChild(dictionary_card);
}

for (i=0; i<culinary_dictionary_data_base.length; i++){
    createDictionaryCard(culinary_dictionary_data_base[i], i);
}

const filter_letter_all = document.querySelectorAll(".dictionary_filter p span");
const dictionary_card_all = document.querySelectorAll(".dictionary_card");
console.log(dictionary_card_all);

filter_letter_all.forEach(letter => {
    letter.addEventListener("click", function() {
        dictionary_card_all.forEach(card => {
            console.log(card);
            if(letter.textContent != card.dataset.letter){
                card.style.display = "none";
            } else {
                card.style.display = "block";
            }
        });
    });
});