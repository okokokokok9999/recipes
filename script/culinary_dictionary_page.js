const culinary_dictionary_data_base = JSON.parse(window.localStorage.getItem("culinary_dictionary_data_base"));
const params = (new URL(document.location)).searchParams;
const culinary_dictionary_index = parseInt(params.get("culinary_dictionary_index"));
const main_content = document.querySelector(".main_content");
const culinary_word =  culinary_dictionary_data_base[culinary_dictionary_index];

const heading = document.createElement("h1");
heading.className = "heading";
heading.textContent = culinary_word[0];

main_content.appendChild(heading);

for(i=1; i<culinary_word.length; i++) {
    const p = document.createElement("p");
    p.textContent = culinary_word[i];
    main_content.appendChild(p);
}