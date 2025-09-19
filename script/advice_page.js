const advice_index = parseInt(((new URL(document.location)).searchParams).get("advice_index"));
const advice_data_base = JSON.parse(window.localStorage.getItem("advice_data_base"));
const advice_data = advice_data_base[advice_index];
console.log(advice_data_base[0]);


const main_content = document.querySelector(".main_content");
const heading = document.createElement("h1");
heading.className = "heading";
heading.textContent = advice_data[0];

main_content.appendChild(heading);

for (i=1; i<advice_data.length; i++){
    const p = document.createElement("p");
    p.textContent = advice_data[i];
    main_content.appendChild(p);
}