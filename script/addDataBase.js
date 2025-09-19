document.querySelector(".page").addEventListener("submit", function(event) {
    console.log("dfvdfsfecervfsd")
    event.preventDefault();

    const formData = new FormData(this);
    
    let recipe_data = {name: "", img: "", calory: 0,  bookmark: 0, like: 0, all_time: "", active_time: "", views: 0, description: "", composition: {}, categories: [], step_text: [], conclusions: []};

    function timeInString (time) {
        let str = ""
        if (time.slice(0,2) != "00") {
            if (time[0] != "0") {
                str += time.slice(0,2) + " час ";
            } else {
                str += time[1] + " час ";
            }
        }
        if (time.slice(3) != "00") {
            if (time[3] != "0") {
                str += time.slice(3) + " мин";
            } else {
                str += time[4] + " мин";
            }
        }
        return str;
    }

    recipe_data.name = formData.get("heading");
    recipe_data.img = "pflfxf";
    recipe_data.description = formData.get("description");
    recipe_data.calory = formData.get("calory");
    recipe_data.all_time = formData.get("all_time");
    recipe_data.active_time = formData.get("active_time");
    recipe_data.description = formData.get("description");
    recipe_data.categories = formData.getAll("categories");

    let count = 1;
    while(formData.get("composition_name"+count) != null){
        recipe_data.composition[formData.get("composition_name"+count)] = formData.get("composition_number"+count) + " " + formData.get("composition_measurement"+count);
        count += 1;
    }

    count = 1;
    while(formData.get("step_text"+count) != null){
        recipe_data.step_text.push(formData.get("step_text"+count));
        count += 1;
    }

    count = 1;
    while(formData.get("conclusions_text"+count) != null){
        recipe_data.conclusions.push(formData.get("conclusions_text"+count));
        count += 1;
    }

    let recipes_data_base = JSON.parse(window.localStorage.getItem("recipes_data_base"));
    let last_index = (Object.keys(recipes_data_base))[(Object.keys(recipes_data_base)).length-1];
    recipes_data_base[last_index+1] = recipe_data;
    window.localStorage.setItem("recipes_data_base", JSON.stringify(recipes_data_base));


    let users = JSON.parse(window.localStorage.getItem("users"))
    let current_user = window.localStorage.getItem("current_user");
    let user = users[current_user];
    user.my_recipe.push(last_index+1);
    window.localStorage.setItem("users", JSON.stringify(users));
    window.open("file:///C:/Users/77474/Downloads/recipe/main.html", "_blank");
});

