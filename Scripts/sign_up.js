var button = document.getElementById("sign_up_btn");
var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");
var username = document.getElementById("username");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password_repeat = document.getElementById("password_repeat");
var dob = document.getElementById("dob");
// var gender = document.querySelector('input[name="gender"]:checked').value;
var alert = document.getElementById("alert");

function validateName(name) {
    const regex = new RegExp('^[A-Za-z\s]+$');
    return regex.test(name.value);
}
function validatePhone(phone) {
    const regex = new RegExp('^[0-9]{8}$');
    return regex.test(phone.value);
}
function validateEmail(email) {
    const regex = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$');
    console.log(regex.test(email.value))
    return regex.test(email.value);
}
function validatePassword(password) {
    const regex = new RegExp('^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$');
    return regex.test(password.value);
}
function validatePasswordMatch(password1, password2) {
    return password1.value === password2.value;
}
function validateDate(dob) {
    const regex = new RegExp('^\d{4}-\d{2}-\d{2}$');
    return regex.test(dob.value);
}

function getNotValidInput() {
    var not_valid_input = "";
    var valid_first_name = validateName(first_name)
    var valid_last_name = validateName(last_name)
    var valid_phone = validatePhone(phone)
    var valid_email = validateEmail(email)
    var valid_password = validatePassword(password)
    var valid_password_match = validatePasswordMatch(password, password_repeat)
    var valid_dob = validateDate(dob)

    if (!valid_first_name) {
        not_valid_input = "First Name"
    } else if (!valid_last_name) {
        not_valid_input = "Last Name"
    } else if (!valid_phone) {
        not_valid_input = "Phone"
    } else if (!valid_email) {
        not_valid_input = "Email"
    } else if (!valid_password) {
        not_valid_input = "Password"
    } else if (!valid_password_match) {
        not_valid_input = "Passwords Matching"
    } else if (!valid_dob) {
        not_valid_input = "Date of Birth"
    }
    return not_valid_input;
}
button.onclick = function signUp() {

    if (getNotValidInput()==""){


    } else{
        alert.innerText=`${getNotValidInput()} is not valid.`
        alert.classList.remove("hidden");
        setTimeout(() => {
          alert.classList.add("hidden");
        }, 1500);
    }





    // var bodyFormData = new FormData();
    // bodyFormData.append('first_name', first_name.value);
    // bodyFormData.append('last_name', last_name.value);
    // bodyFormData.append('username', username.value);
    // bodyFormData.append('phone', phone.value);
    // bodyFormData.append('email', email.value);
    // bodyFormData.append('password', password.value);
    // bodyFormData.append('password_repeat', password_repeat.value);
    // bodyFormData.append('dob', dob.value);
    // bodyFormData.append('gender', gender.value);

    // axios({
    //     method: "post",
    //     url: "../facebook-back-end/router/router.php/Auth/login",
    //     data: bodyFormData,
    //     headers: { "Content-Type": "multipart/form-data" },
    // })
    //     .then(function ({ data }) {
    //         //handle success
    //         if (data.status == 200) {

    //             //store data in local storage
    //             localStorage.setItem("user_id", data.data.user_id);
    //             localStorage.setItem("username", data.data.username);
    //             //redirect
    //             window.location.href = "index.html";
    //         }
    //         else {
    //             alert.classList.remove("hidden");
    //             setTimeout(() => {
    //                 alert.classList.add("hidden");
    //             }, 1500);
    //         }
    //     })
}