// Get the modal
var modal = document.getElementById("myModal");
        
// Get the button that opens the modal
var school = document.getElementById("edit-school");
var work = document.getElementById("edit-work");
var name_ = document.getElementById("name");
var username = document.getElementById("username");
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
school.onclick = function() {
  modal.style.display = "block";
  header_text.innerText = "Update School Info";
  text_edit.innerText = "University Name: ";
  body.innerHTML = '<div style="padding: 10px;"> <label id="text-edit">University Name: </label > <input type="text"></div><div style="padding:10px;"><label>From: </label> <input type="date"><label>Till: </label> <input type="date"></div>';

}
work.onclick = function() {
    modal.style.display = "block";
    
    body.innerHTML = '<div style="padding: 10px;"> <label id="text-edit">University Name: </label > <input type="text"></div><div style="padding:10px;"><label>From: </label> <input type="date"><label>Till: </label> <input type="date"></div>';
    header_text.innerHTML = "Update Work Info";
    text_edit.innerText = "Company Name: ";
}
name_.onclick = function() {
    modal.style.display = "block";
    header_text.innerHTML = "Update Name Info";
    body.innerHTML = '<div style="padding: 10px;"><label id="text-edit">First Name: </label > <input type="text"><label id="text-edit">Last Name: </label > <input type="text"></div>';
}
username.onclick = function() {
    modal.style.display = "block";
    header_text.innerHTML = "Update Username Info";
    body.innerHTML= '<div style="padding: 10px;"><label>Username: </label > <input type="text"></div>';
}
email.onclick = function() {
    modal.style.display = "block";
    header_text.innerHTML = "Update Email Info";
    body.innerHTML= '<div style="padding: 10px;"><label>Email: </label > <input type="text"></div>';
}
phone.onclick = function() {
    modal.style.display = "block";
    header_text.innerHTML = "Update Phone Info";
    body.innerHTML= '<div style="padding: 10px;"><label>Phone: </label > <input type="text"></div>';
}
password.onclick = function() {
    modal.style.display = "block";
    header_text.innerHTML = "Update Password Info";
    body.innerHTML = '<div style="padding: 10px;"><label>New Password: </label > <input type="password"><label>Repeat Password </label > <input type="password"></div>';

}
city.onclick = function() {
    modal.style.display = "block";
    header_text.innerHTML = "Update City Info";
    text_edit.innerText = "City: ";
}
bio.onclick = function() {
    modal.style.display = "block";
    header_text.innerHTML = "Update Bio Info";
    text_edit.innerText = "Bio: ";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
