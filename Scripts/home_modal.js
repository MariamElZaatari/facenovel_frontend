$fetched_first_name;
$fetched_last_name, $fetched_email;
$fetched_phone;
$fetched_bio;
$fetched_city;
//get all user data
var bodyFormData = new FormData();
bodyFormData.append("user_id", 63);
axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/User/read",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
  //handle success
  console.log(response.data);
  $fetched_first_name = response.data.first_name;
  $fetched_last_name = response.data.last_name;
  $fetched_email = response.data.email;
  $fetched_phone = response.data.phone;
  $fetched_bio = response.data.bio_text;
  $fetched_city = response.data.current_city;
});

document.getElementById("fetched-first-name").innerText = $fetched_first_name;
document.getElementById("fetched-last-name").innerText = $fetched_last_name;

// get all friends and display on the right panel
//u.first_name, u.last_name, u.profile_pic,
var bodyFormData = new FormData();
bodyFormData.append("user_id", 63, 63);
axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/Friend/getFriendsByUserID",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
  //handle success
  console.log(response.data);
  friends_panel = document.getElementById("friends-panel-fetched");
  for (var i = 0; i < response.data.length; i++) {
    friends.innerHTML = `<div class="friends-section"> <div> <a href="#"><img src="images/${response.data.profile_pic[i]}" class="profile-pic" /></a> </div> <div> ${response.data.first_name[i]} ${response.data.last_name[i]} </div> </div>`;
  }
});



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
btn.onclick = function () {
  modal.style.display = "block";
  body.innerHTML +=
    '<div class="friends-modal"><div><img src="images/profile pic.jpg" class="profile-pic"></div><div><strong>User 1</strong></div><div><label class="unblock">Remove Friend</label><i class="fas fa-user-times" id="remove-friend"></i></div><div><label class="unblock">Add Favorite</label><i class="fas fa-star" id="add-favorite"></i></div></div>';
};


// on click friends icon display all friends inside the modal
friends.onclick = function () {
  modal.style.display = "block";
  var bodyFormData = new FormData();
  bodyFormData.append("user_id", 63);
  odyFormData.append("user_id", 63);
  axios({
    method: "post",
    url: "../facebook-back-end/router/router.php/Friend/getFriendsByUserID",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then(function (response) {
    //handle success
    console.log(response.data);
    friends_panel = document.getElementById("friends-panel-fetched");
    for (var i = 0; i < response.data.length; i++) {
      body.innerHTML = `<div class="friends-modal"><div><img src="images/${response.data.profile_pic[i]}" class="profile-pic"></div><div><strong>${response.data.first_name[i]} ${response.data.last_name[i]}</strong></div><div><label class="unblock">Remove Friend</label><i class="fas fa-user-times" id="remove-friend"></i></div><div><label class="unblock">Add Favorite</label><i class="fas fa-star" id="add-favorite"></i></div></div>`;
    }
  });
  body.innerHTML +=
    '';
};

favorites.onclick = function () {
  modal.style.display = "block";
  body.innerHTML +=
    '<div class="friends-modal"><div><img src="images/profile pic.jpg" class="profile-pic"></div><div><strong>User 1</strong></div><div><label class="unblock">Remove From Favorite</label><i class="fas fa-user-times" id="remove-favorite"></i></div></div>';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


//post status 

var button=document.getElementById("post-button");

button.onclick= function login(){
  var post_text=document.getElementById("post-text").value;
  var date=date("Y-m-d");
  var bodyFormData = new FormData();
  bodyFormData.append('user_id', 63);
  bodyFormData.append('text', post_text);
  bodyFormData.append('date_created', date);
  axios({
    method: "post",
    url: "../facebook-back-end/router/router.php/Post/create",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response.data);
    })
}

// get friends posts
  var post_space=document.getElementById("posts-div");
  var post_pic = document.getElementById("posts-pic");
  var poster = document.getElementById("poster");
  
  var bodyFormData = new FormData();
  bodyFormData.append('user_id', 63);
  
  axios({
    method: "post",
    url: "../facebook-back-end/router/router.php/Post/read",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response.data);
      for(var i = 0 ; i<response.data.length; i++){
        post_space.innerHTML = ``;
      }
    })