// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("more-friends");
var friends = document.getElementById("friends");
var favorites = document.getElementById("favorites");
var body = document.getElementById("modal-body");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  body.innerHTML += '<div class="friends-modal"><div><img src="images/profile pic.jpg" class="profile-pic"></div><div><strong>User 1</strong></div><div><label class="unblock">Remove Friend</label><i class="fas fa-user-times" id="remove-friend"></i></div><div><label class="unblock">Add Favorite</label><i class="fas fa-star" id="add-favorite"></i></div></div>';
}

friends.onclick = function() {
  modal.style.display = "block";
  body.innerHTML += '<div class="friends-modal"><div><img src="images/profile pic.jpg" class="profile-pic"></div><div><strong>User 1</strong></div><div><label class="unblock">Remove Friend</label><i class="fas fa-user-times" id="remove-friend"></i></div><div><label class="unblock">Add Favorite</label><i class="fas fa-star" id="add-favorite"></i></div></div>';
}

favorites.onclick = function() {
  modal.style.display = "block";
  body.innerHTML += '<div class="friends-modal"><div><img src="images/profile pic.jpg" class="profile-pic"></div><div><strong>User 1</strong></div><div><label class="unblock">Remove From Favorite</label><i class="fas fa-user-times" id="remove-favorite"></i></div></div>';
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