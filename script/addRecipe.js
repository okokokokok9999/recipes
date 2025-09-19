const composition = document.querySelector(".composition");

const arr_measurements = ["кг","гр","л","мл","стол.л.","чайн.л.","десерт.л.","шт",]

const add_composition_elem = document.querySelector(".add_composition_elem");
const delete_composition_elem = document.querySelector(".delete_composition_elem");

let composition_count = 0;
let tabIndex_composition = 4;

function addCompositionElem() {
    composition_count += 1;
    tabIndex_composition += 3;

    const composition_elem = document.createElement("p");
    
    const composition_name = document.createElement("input")
    composition_name.type = "search";
    composition_name.title = "composition_name";
    composition_name.name = "composition_name"+composition_count;
    composition_name.className = "composition_name"
    composition_name.placeholder = "Ингредиент";
    composition_name.setAttribute("list","composition_list");
    composition_name.tabIndex = tabIndex_composition;
    composition_name.required = true;
    
    const composition_filler = document.createElement("span");
    composition_filler.className = "filler";
    
    const composition_number = document.createElement("input");
    composition_number.type = "number";
    composition_number.min = 0;
    composition_number.max = 10000;
    composition_number.title = "composition_number";
    composition_number.name = "composition_number" + composition_count;
    composition_number.className = "composition_number";
    composition_number.tabIndex = tabIndex_composition + 1;
    composition_number.required = true;
    
    const composition_measurement = document.createElement("select");
    composition_measurement.title = "composition_measurement";
    composition_measurement.name = "composition_measurement" + composition_count;
    composition_measurement.className = "measurement";
    composition_measurement.tabIndex = tabIndex_composition + 2;
    composition_measurement.required = true;
    
    composition_elem.appendChild(composition_name);
    composition_elem.appendChild(composition_filler);
    composition_elem.appendChild(composition_number);
    composition_elem.appendChild(composition_measurement);
    
    arr_measurements.forEach(elem => {
        let option = document.createElement("option");
        option.textContent = elem;
        option.value = elem;
        composition_measurement.appendChild(option);
    })
    
    composition.appendChild(composition_elem);
}

function deleteCompositionElem () {
    if(composition.children.length > 3){
        composition.removeChild(composition.lastChild);
        composition_count -= 1;
        tabIndex -= 3;
    }
}
addCompositionElem();

add_composition_elem.addEventListener("click", addCompositionElem);
delete_composition_elem.addEventListener("click", deleteCompositionElem);



const recipe_step = document.querySelector(".recipe_step");
const add_step = document.querySelector(".add_step");
const delete_step = document.querySelector(".delete_step");
let step_count = 0;

function addRecipeStep () {
    step_count += 1;

    const step = document.createElement("div");
    step.className = "step";

    const h3 = document.createElement("h3");
    h3.textContent = "ШАГ: " + step_count;

    const label_img = document.createElement("label");
    label_img.htmlFor = "step" + step_count;

    const step_img = document.createElement("img");
    step_img.classList = "step_img change_img";
    step_img.src = "img/main/add_img.png";
    step_img.alt = "step_img";

    const input = document.createElement("input");
    input.id = "step" + step_count;
    input.classList = "step_input_img";
    input.type = "file";
    input.title = "step_img";
    input.name = "step_img" + step_count;
    // input.required = true;
    input.onchange = even => {
        let reader = new FileReader();
        reader.onload = e => step_img.src = e.target.result;
        reader.readAsDataURL(even.target.files[0]);
        saveAs(even.target.files[0], "step_"+input.id[input.id.length-1]+".jpg");
    }
    const step_text = document.createElement("textarea");
    step_text.name = "step_text" + step_count;
    step_text.className = "step_text";
    step_text.rows = 5;
    step_text.placeholder = "Введите текст";
    // step_text.required = true;

    recipe_step.appendChild(step);
    step.appendChild(h3);
    step.appendChild(label_img);
    label_img.appendChild(step_img);
    step.appendChild(input);
    step.appendChild(step_text);
}

function deleteRecipeStep () {
    if(recipe_step.children.length > 1){
        recipe_step.removeChild(recipe_step.lastChild);
        step_count -= 1;
    }
}

addRecipeStep(step_count);
add_step.addEventListener("click", addRecipeStep);
delete_step.addEventListener("click", deleteRecipeStep);




const conclusions = document.querySelector(".conclusions");
const add_conclusions = document.querySelector(".add_conclusions");
const delete_conclusions = document.querySelector(".delete_conclusions");

let conclusions_count = 0;

function addConclusions () {
    conclusions_count += 1;
    let textarea = document.createElement("textarea");
    textarea.className = "conclusions_text";
    textarea.title = "conclusions_text";
    textarea.name = "conclusions_text" + conclusions_count;
    textarea.rows = 4;

    conclusions.appendChild(textarea);
}

function deleteConclusions () {
    if(conclusions.children.length > 1) {
        conclusions.removeChild(conclusions.lastChild);
        conclusions_count -= 1;
    }
}

addConclusions();

add_conclusions.addEventListener("click", addConclusions);
delete_conclusions.addEventListener("click", deleteConclusions);




const composition_list = document.querySelector("#composition_list");
let composition_data_base = JSON.parse(window.localStorage.getItem("composition_data_base"));
composition_data_base.forEach(elem => {
    let option = document.createElement("option");
    option.value = elem;
    composition_list.appendChild(option);
})




const input_img = document.querySelectorAll(".input_img");
const change_img = document.querySelectorAll(".change_img");

for (let i=0; i<input_img.length; i++) {
    input_img[i].onchange = input => {
        let reader = new FileReader();
        reader.onload = e => change_img[i].src = e.target.result;
        reader.readAsDataURL(input.target.files[0]);
        saveAs(input.target.files[0], i+".jpg", );
    };
}