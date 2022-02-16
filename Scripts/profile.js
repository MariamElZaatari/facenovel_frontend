var add_btn = document.getElementById("add-btn");

add_btn.onclick = function(){
  add_btn.innerHTML = '<i class="fas fa-check" style="margin-left: 5%; margin-right: 5%;"></i>Friends<i class="fas fa-user-check" style="margin-left: 5%; margin-right: 5%;"></i>';
}








// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("more-friends");
var table = document.getElementById("friends-table");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  table.innerHTML += '<tr><td><img src="images/profile pic.jpg" class="profile-pic"></td> <td>User 1</td></tr>';
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