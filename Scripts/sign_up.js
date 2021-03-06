// Retrieve Sign Up HTML Elements
var sign_up_btn = document.getElementById("sign_up_btn");
var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");
var username = document.getElementById("username");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password_repeat = document.getElementById("password_repeat");
var dob = document.getElementById("dob");
var alert = document.getElementById("alert");


// ---------- Validation Functions ----------
function validateName(name) {
    return /^[A-Za-z\s]*$/.test(name.value);
}
function validatePhone(phone) {
    const regex = new RegExp('^[0-9]{8}$');
    return regex.test(phone.value);
}
function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/.test(email.value);
}
function validatePassword(password) {
    const regex = new RegExp('');
    return /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/.test(password.value);
}

function validatePasswordMatch(password1, password2) {
    return password1.value === password2.value;
}

function getNotValidInput() {

    // Validate Each Input Using Corresponding Validation Function
    var not_valid_input = "";
    var valid_first_name = validateName(first_name)
    var valid_last_name = validateName(last_name)
    var valid_phone = validatePhone(phone)
    var valid_email = validateEmail(email)
    var valid_password = validatePassword(password)
    var valid_password_match = validatePasswordMatch(password, password_repeat)

    // Assign not_valid_input as Not Valid Input's Label
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
    }

    return not_valid_input;
}
// ------------------------------------------


// -------- All Fields Required Function -------
function isInputEmpty() {

    // Check If Any Input Value is Empty
    if (first_name.value == "" || last_name.value == "" || username.value == "" || phone.value == "" || email.value == "" || password.value == "" || password_repeat.value == "" || dob.value == "") {
        return true;
    }

    return false;
}
// ---------------------------------------------

// --------- Sign Up On Click Function ---------
sign_up_btn.onclick = function signUp() {
    
    // Check All Field's Value not Empty
    if (isInputEmpty()) {
        alert.innerText = `All Fields are required.`
        alert.classList.remove("hidden");
        setTimeout(() => {
            alert.classList.add("hidden");
        }, 1500);
    }
    
    // Check All Field's Value Valid
    else if (getNotValidInput() != "") {
        alert.innerText = `${getNotValidInput()} is not valid.`
        alert.classList.remove("hidden");
        setTimeout(() => {
            alert.classList.add("hidden");
        }, 1500);
    }

    // Add Account to Database Using Axios
    else {
        
        // Retrieve Gender
        var gender = document.querySelector('input[name="gender"]:checked').value;
        
        // Append Data Required
        var bodyFormData = new FormData();
        bodyFormData.append('first_name', first_name.value);
        bodyFormData.append('last_name', last_name.value);
        bodyFormData.append('username', username.value);
        bodyFormData.append('phone', phone.value);
        bodyFormData.append('email', email.value);
        bodyFormData.append('password', password.value);
        bodyFormData.append('password_repeat', password_repeat.value);
        bodyFormData.append('dob', dob.value);
        bodyFormData.append('gender', gender);
        
        // Fetch Using Axios
        axios({
            method: "post",
            url: "../facebook-back-end/router/router.php/Auth/signup",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function ({ data }) {
            //Redirect to Login Page
            window.location.href = "index.html";
        })
    }
}
// ---------------------------------------------