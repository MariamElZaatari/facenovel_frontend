// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var school = document.getElementById("edit-school");
var work = document.getElementById("edit-work");
var name_ = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var bio = document.getElementById("bio");
var city = document.getElementById("city");

var body = document.getElementById("modal-body");



var header_text = document.getElementById("modal-header-text");

var text_edit = document.getElementById("text-edit");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
school.onclick = function () {

  modal.style.display = "block";
  body.innerHTML = '<div style="padding: 10px;"> <label id="text-edit">University Name: </label > <input type="text" id="uni-input"></div><div style="padding:10px;"><label>From: </label> <input type="date" id="date1-input"><label>Till: </label> <input type="date"id="date2-input"></div>';
  header_text.innerText = "Update School Info";
  var text_edit = document.getElementById("text-edit");
  text_edit.innerText = "University Name: ";
  save_button = document.getElementById("save-changes");
  save_button.onclick = function () {
    let uni_input = document.getElementById("uni-input");
    let date_1_uni = document.getElementById("date1-input");
    let date_2_uni = document.getElementById("date2-input");
    /* If input field is null --> alert the user*/
    if (uni_input.value == "" || date_1_uni.value == "" || date_2_uni == "") {
      alert("Please enter a name first!");
    } else {
      console.log(uni_input.value);
    }
  }

}
work.onclick = function () {
  modal.style.display = "block";
  body.innerHTML = '<div style="padding: 10px;"> <label id="text-edit">University Name: </label > <input type="text" id="work-input"></div><div style="padding:10px;"><label>From: </label> <input type="date" id="work-date1"><label>Till: </label> <input type="date" id="work-date2"></div>';
  header_text.innerHTML = "Update Work Info";
  var text_edit = document.getElementById("text-edit");
  text_edit.innerText = "Company Name: ";
  save_button = document.getElementById("save-changes");
  save_button.onclick = function () {
    let work_input = document.getElementById("work-input");
    let work_date1 = document.getElementById("work-date1");
    let work_date2 = document.getElementById("work-date2");
    /* If input field is null --> alert the user*/
    if (work_input.value == "" || work_date1.value == "" || work - date_2_uni == "") {
      alert("Please enter a name first!");
    } else {
      console.log(uni_input.value);
    }
  }
}

let work_input = document.getElementById("work-input");
    let work_date1 = document.getElementById("work-date1");
    let work_date2 = document.getElementById("work-date2");
    let uni_input = document.getElementById("uni-input");
    let date_1_uni = document.getElementById("date1-input");
    let date_2_uni = document.getElementById("date2-input");

name_.addEventListener("click", Update);
email.addEventListener("click",Update);

function Update () {
  modal.style.display = "block";
  header_text.innerHTML = "Update Name Info";
  body.innerHTML = '<div style="padding: 10px;"><label id="text-edit">First Name: </label > <input type="text" id="first-name"> <label id="text-edit">Last Name: </label > <input type="text" id="last-name"></div> <div style="padding: 10px;"><label>Email: </label > <input type="text" id="email-input"> <label>Phone: </label > <input type="text" id="phone-input"></div> <div style="padding: 10px;"><label>New Password: </label > <input type="password"id="password-input1"> <label>Repeat Password </label > <input type="password" id="password-input2"></div> <div style="padding: 10px;"><label>Bio: </label > <input type="text" id="bio-input"> <label>City: </label > <input type="text" id="city-input"></div>';
  save_button = document.getElementById("save-changes");
  save_button.onclick = function () {

    let first_name = document.getElementById("first-name");
    let last_name = document.getElementById("last-name");
    let email_input = document.getElementById("email-input");
    let phone_input = document.getElementById("phone-input");
    let password_input1 = document.getElementById("password-input1");
    let password_input2 = document.getElementById("password-input2");
    let bio_input = document.getElementById("bio-input");
    let city_input = document.getElementById("city-input");
    /* If input field is null --> alert the user*/
    if (first_name.value == "" || last_name.value == "" || email_input.value == "" || phone_input.value == ""
    || password_input1.value == "" || password_input2.value == "" || !(password_input1 === password_input2)
     || city_input.value == "" || bio_input.value == "" ) {
      alert("Insert Properly!");
    } else {
      console.log(first_name.value);
    }
  }
}



phone.onclick = function () {
  modal.style.display = "block";
  header_text.innerHTML = "Update Phone Info";
  body.innerHTML = '<div style="padding: 10px;"><label>Phone: </label > <input type="text" id="phone-input"></div>';
  save_button = document.getElementById("save-changes");
  save_button.onclick = function () {
    let phone_input = document.getElementById("phone-input");
    /* If input field is null --> alert the user*/
    if (phone_input.value == "") {
      alert("Please enter phone correctly!");
    } else {
      console.log(phone_input.value);
    }
  }
}
password.onclick = function () {
  modal.style.display = "block";
  header_text.innerHTML = "Update Password Info";
  body.innerHTML = '<div style="padding: 10px;"><label>New Password: </label > <input type="password"id="password-input1"><label>Repeat Password </label > <input type="password" id="password-input2"></div>';
  save_button = document.getElementById("save-changes");
  save_button.onclick = function () {
    let password_input1 = document.getElementById("password-input1");
    let password_input2 = document.getElementById("password-input2");
    /* If input field is null --> alert the user*/
    if (password_input1.value == "" || password_input2.value == "") {
      alert("Please enter password correctly!");
    } else {
      if (password_input1 === password_input2) {
        console.log(password_input1.value);
      } else {
        console.log("passwords don't match!");
      }

    }
  }

}
city.onclick = function () {
  modal.style.display = "block";
  header_text.innerHTML = "Update City Info";
  body.innerHTML = '<div style="padding: 10px;"><label>City: </label > <input type="text" id="city-input"></div>';
  save_button = document.getElementById("save-changes");
  save_button.onclick = function () {
    let city_input = document.getElementById("city-input");
    /* If input field is null --> alert the user*/
    if (city_input.value == "") {
      alert("Please enter city correctly!");
    } else {
      console.log(city.value);
    }
  }

}
bio.onclick = function () {
  modal.style.display = "block";
  header_text.innerHTML = "Update Bio Info";
  body.innerHTML = '<div style="padding: 10px;"><label>City: </label > <input type="text" id="bio-input"></div>';
  save_button = document.getElementById("save-changes");
  save_button.onclick = function () {
    let bio_input = document.getElementById("bio-input");
    /* If input field is null --> alert the user*/
    if (bio_input.value == "") {
      alert("Please enter email correctly!");
    } else {
      console.log(bio_input.value);
    }
  }
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}