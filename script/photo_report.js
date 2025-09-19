const like_btn = document.querySelectorAll(".like_btn");
const dislike_btn = document.querySelectorAll(".dislike_btn");
const like_count = document.querySelectorAll(".like_count");

let all_photo_report = document.querySelectorAll(".photo_report");
let recipes_data_base = JSON.parse(window.localStorage.getItem("recipes_data_base"));

for (let photo_report of all_photo_report){
    let index = Number(photo_report.getAttribute("data-index"));
    if (recipes_data_base[index] == undefined){
        photo_report.style.display = "none";
    }
}

like_btn[0].addEventListener("click", function() {
    if (dislike_btn[0].classList.contains("active_btn")) {
        dislike_btn[0].classList.remove("active_btn");
        like_count[0].textContent = parseInt(like_count[0].textContent) + 2;
        like_btn[0].classList.add("active_btn");
    } else if (like_btn[0].classList.contains("active_btn")) {
        like_count[0].textContent = parseInt(like_count[0].textContent) - 1;
        like_btn[0].classList.remove("active_btn");
    } else {
        like_count[0].textContent = parseInt(like_count[0].textContent) + 1;
        like_btn[0].classList.add("active_btn");
    };
});
dislike_btn[0].addEventListener("click", function() {
    if (like_btn[0].classList.contains("active_btn")) {
        like_btn[0].classList.remove("active_btn");
        like_count[0].textContent = parseInt(like_count[0].textContent) - 2;
        dislike_btn[0].classList.add("active_btn");
    } else if (dislike_btn[0].classList.contains("active_btn")) {
        like_count[0].textContent = parseInt(like_count[0].textContent) + 1;
        dislike_btn[0].classList.remove("active_btn");
    } else {
        like_count[0].textContent = parseInt(like_count[0].textContent) - 1;
        dislike_btn[0].classList.add("active_btn");
    };
});
like_btn[1].addEventListener("click", function() {
    if (dislike_btn[1].classList.contains("active_btn")) {
        dislike_btn[1].classList.remove("active_btn");
        like_count[1].textContent = parseInt(like_count[1].textContent) + 2;
        like_btn[1].classList.add("active_btn");
    } else if (like_btn[1].classList.contains("active_btn")) {
        like_count[1].textContent = parseInt(like_count[1].textContent) - 1;
        like_btn[1].classList.remove("active_btn");
    } else {
        like_count[1].textContent = parseInt(like_count[1].textContent) + 1;
        like_btn[1].classList.add("active_btn");
    };
});
dislike_btn[1].addEventListener("click", function() {
    if (like_btn[1].classList.contains("active_btn")) {
        like_btn[1].classList.remove("active_btn");
        like_count[1].textContent = parseInt(like_count[1].textContent) - 2;
        dislike_btn[1].classList.add("active_btn");
    } else if (dislike_btn[1].classList.contains("active_btn")) {
        like_count[1].textContent = parseInt(like_count[1].textContent) + 1;
        dislike_btn[1].classList.remove("active_btn");
    } else {
        like_count[1].textContent = parseInt(like_count[1].textContent) - 1;
        dislike_btn[1].classList.add("active_btn");
    };
});
like_btn[2].addEventListener("click", function() {
    if (dislike_btn[2].classList.contains("active_btn")) {
        dislike_btn[2].classList.remove("active_btn");
        like_count[2].textContent = parseInt(like_count[2].textContent) + 2;
        like_btn[2].classList.add("active_btn");
    } else if (like_btn[2].classList.contains("active_btn")) {
        like_count[2].textContent = parseInt(like_count[2].textContent) - 1;
        like_btn[2].classList.remove("active_btn");
    } else {
        like_count[2].textContent = parseInt(like_count[2].textContent) + 1;
        like_btn[2].classList.add("active_btn");
    };
});
dislike_btn[2].addEventListener("click", function() {
    if (like_btn[2].classList.contains("active_btn")) {
        like_btn[2].classList.remove("active_btn");
        like_count[2].textContent = parseInt(like_count[2].textContent) - 2;
        dislike_btn[2].classList.add("active_btn");
    } else if (dislike_btn[2].classList.contains("active_btn")) {
        like_count[2].textContent = parseInt(like_count[2].textContent) + 1;
        dislike_btn[2].classList.remove("active_btn");
    } else {
        like_count[2].textContent = parseInt(like_count[2].textContent) - 1;
        dislike_btn[2].classList.add("active_btn");
    };
});
like_btn[3].addEventListener("click", function() {
    if (dislike_btn[3].classList.contains("active_btn")) {
        dislike_btn[3].classList.remove("active_btn");
        like_count[3].textContent = parseInt(like_count[3].textContent) + 2;
        like_btn[3].classList.add("active_btn");
    } else if (like_btn[3].classList.contains("active_btn")) {
        like_count[3].textContent = parseInt(like_count[3].textContent) - 1;
        like_btn[3].classList.remove("active_btn");
    } else {
        like_count[3].textContent = parseInt(like_count[3].textContent) + 1;
        like_btn[3].classList.add("active_btn");
    };
});
dislike_btn[3].addEventListener("click", function() {
    if (like_btn[3].classList.contains("active_btn")) {
        like_btn[3].classList.remove("active_btn");
        like_count[3].textContent = parseInt(like_count[3].textContent) - 2;
        dislike_btn[3].classList.add("active_btn");
    } else if (dislike_btn[3].classList.contains("active_btn")) {
        like_count[3].textContent = parseInt(like_count[3].textContent) + 1;
        dislike_btn[3].classList.remove("active_btn");
    } else {
        like_count[3].textContent = parseInt(like_count[3].textContent) - 1;
        dislike_btn[3].classList.add("active_btn");
    };
});
like_btn[4].addEventListener("click", function() {
    if (dislike_btn[4].classList.contains("active_btn")) {
        dislike_btn[4].classList.remove("active_btn");
        like_count[4].textContent = parseInt(like_count[4].textContent) + 2;
        like_btn[4].classList.add("active_btn");
    } else if (like_btn[4].classList.contains("active_btn")) {
        like_count[4].textContent = parseInt(like_count[4].textContent) - 1;
        like_btn[4].classList.remove("active_btn");
    } else {
        like_count[4].textContent = parseInt(like_count[4].textContent) + 1;
        like_btn[4].classList.add("active_btn");
    };
});
dislike_btn[4].addEventListener("click", function() {
    if (like_btn[4].classList.contains("active_btn")) {
        like_btn[4].classList.remove("active_btn");
        like_count[4].textContent = parseInt(like_count[4].textContent) - 2;
        dislike_btn[4].classList.add("active_btn");
    } else if (dislike_btn[4].classList.contains("active_btn")) {
        like_count[4].textContent = parseInt(like_count[4].textContent) + 1;
        dislike_btn[4].classList.remove("active_btn");
    } else {
        like_count[4].textContent = parseInt(like_count[4].textContent) - 1;
        dislike_btn[4].classList.add("active_btn");
    };
});
like_btn[5].addEventListener("click", function() {
    if (dislike_btn[5].classList.contains("active_btn")) {
        dislike_btn[5].classList.remove("active_btn");
        like_count[5].textContent = parseInt(like_count[5].textContent) + 2;
        like_btn[5].classList.add("active_btn");
    } else if (like_btn[5].classList.contains("active_btn")) {
        like_count[5].textContent = parseInt(like_count[5].textContent) - 1;
        like_btn[5].classList.remove("active_btn");
    } else {
        like_count[5].textContent = parseInt(like_count[5].textContent) + 1;
        like_btn[5].classList.add("active_btn");
    };
});
dislike_btn[5].addEventListener("click", function() {
    if (like_btn[5].classList.contains("active_btn")) {
        like_btn[5].classList.remove("active_btn");
        like_count[5].textContent = parseInt(like_count[5].textContent) - 2;
        dislike_btn[5].classList.add("active_btn");
    } else if (dislike_btn[5].classList.contains("active_btn")) {
        like_count[5].textContent = parseInt(like_count[5].textContent) + 1;
        dislike_btn[5].classList.remove("active_btn");
    } else {
        like_count[5].textContent = parseInt(like_count[5].textContent) - 1;
        dislike_btn[5].classList.add("active_btn");
    };
});
like_btn[6].addEventListener("click", function() {
    if (dislike_btn[6].classList.contains("active_btn")) {
        dislike_btn[6].classList.remove("active_btn");
        like_count[6].textContent = parseInt(like_count[6].textContent) + 2;
        like_btn[6].classList.add("active_btn");
    } else if (like_btn[6].classList.contains("active_btn")) {
        like_count[6].textContent = parseInt(like_count[6].textContent) - 1;
        like_btn[6].classList.remove("active_btn");
    } else {
        like_count[6].textContent = parseInt(like_count[6].textContent) + 1;
        like_btn[6].classList.add("active_btn");
    };
});
dislike_btn[6].addEventListener("click", function() {
    if (like_btn[6].classList.contains("active_btn")) {
        like_btn[6].classList.remove("active_btn");
        like_count[6].textContent = parseInt(like_count[6].textContent) - 2;
        dislike_btn[6].classList.add("active_btn");
    } else if (dislike_btn[6].classList.contains("active_btn")) {
        like_count[6].textContent = parseInt(like_count[6].textContent) + 1;
        dislike_btn[6].classList.remove("active_btn");
    } else {
        like_count[6].textContent = parseInt(like_count[6].textContent) - 1;
        dislike_btn[6].classList.add("active_btn");
    };
});
like_btn[7].addEventListener("click", function() {
    if (dislike_btn[7].classList.contains("active_btn")) {
        dislike_btn[7].classList.remove("active_btn");
        like_count[7].textContent = parseInt(like_count[7].textContent) + 2;
        like_btn[7].classList.add("active_btn");
    } else if (like_btn[7].classList.contains("active_btn")) {
        like_count[7].textContent = parseInt(like_count[7].textContent) - 1;
        like_btn[7].classList.remove("active_btn");
    } else {
        like_count[7].textContent = parseInt(like_count[7].textContent) + 1;
        like_btn[7].classList.add("active_btn");
    };
});
dislike_btn[7].addEventListener("click", function() {
    if (like_btn[7].classList.contains("active_btn")) {
        like_btn[7].classList.remove("active_btn");
        like_count[7].textContent = parseInt(like_count[7].textContent) - 2;
        dislike_btn[7].classList.add("active_btn");
    } else if (dislike_btn[7].classList.contains("active_btn")) {
        like_count[7].textContent = parseInt(like_count[7].textContent) + 1;
        dislike_btn[7].classList.remove("active_btn");
    } else {
        like_count[7].textContent = parseInt(like_count[7].textContent) - 1;
        dislike_btn[7].classList.add("active_btn");
    };
});