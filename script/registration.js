const entrance_open = document.querySelector(".entrance_open");
const registration_open = document.querySelector(".registration_open");
const forgot_password_open = document.querySelector(".forgot_password_open");

const registration_fon = document.querySelector(".registration_fon");
const entrance = document.querySelector(".entrance");
const registration = document.querySelector(".registration");
const forgot_password = document.querySelector(".forgot_password");

const registration_close = document.querySelectorAll(".registration_close");
const registration_back_button = document.querySelectorAll(".registration_back_button");

const entrance_false = document.querySelector(".entrance_false");


entrance_open.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    registration_fon.style.display = "flex";
});
registration_open.addEventListener("click", () => {
    entrance.style.display = "none";
    registration.style.display = "block";
});
forgot_password_open.addEventListener("click", () => {
    entrance.style.display = "none";
    forgot_password.style.display = "block";
});


function initialPosition() {
    registration.style.display = "none";
    forgot_password.style.display = "none";
    entrance.style.display = "block";
    entrance_false.style.display = "none";
}

function registrationClose() {
    document.body.style.overflow = "scroll";
    registration_fon.style.display = "none"
    initialPosition();
}

registration_close.forEach(btn_close => {
    btn_close.addEventListener("click", registrationClose);
});

registration_back_button.forEach(back_button => {
    back_button.addEventListener("click", initialPosition);
});




const user_icon = document.querySelector(".user_icon");
let users_data_base = JSON.parse(window.localStorage.getItem("users"));
console.log(users_data_base);


function logOutAccount() {
    entrance_open.style.display = "block";
    user_icon.style.display = "none";
    window.localStorage.setItem("current_user", "");
}
function logInAccount() {
    if (window.localStorage.getItem("current_user") != ""){
        entrance_open.style.display = "none";
        user_icon.style.display = "block";
    } else {logOutAccount();}
}
logInAccount();

document.querySelector(".log_out_account").addEventListener("click", logOutAccount);

entrance.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const email = formData.get("entrance_email");

    if (users_data_base.hasOwnProperty(email) && users_data_base[email].password == formData.get("entrance_password")){
        window.localStorage.setItem("current_user", email);
        logInAccount();
        registrationClose();
    } else {
        entrance_false.style.display = "block";
    }   
});

registration.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const name = formData.get("registration_name");
    const email = formData.get("registration_email");
    const password = formData.get("registration_password");
    const confirmation_password = formData.get("registration_confirmation_password");

    
    const registration_false = document.querySelector(".registration_false");
    if (users_data_base.hasOwnProperty(email)){
        registration_false.textContent = "Пользователь с таким емейлом уже существует";
        registration_false.style.display = "block";
    } 
    else if (password != confirmation_password ){
        registration_false.textContent = "Вы неправильно потвердили пароль";
        registration_false.style.display = "block";
    } 
    else if (users_data_base.hasOwnProperty(name)){
        registration_false.textContent = "Пользователь с таким именем уже существует";
        registration_false.style.display = "block";
    } 
    else {
        window.localStorage.setItem("current_user", email);
        // users_data_base[email] = {name: name, password: password, like: [], dislike: [], bookmark: []};
        users_data_base[email] = {name: name, password: password, like: [], dislike: [], bookmark: [], my_recipe: [], avatar: "", data_registration: "24.06.2025"}
        window.localStorage.setItem("users", JSON.stringify(users_data_base));
        logInAccount();
        registrationClose();
    }

});