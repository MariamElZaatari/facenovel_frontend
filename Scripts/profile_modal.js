var add_btn = document.getElementById("add-btn");

add_btn.onclick = function () {
  add_btn.innerHTML =
    '<i class="fas fa-check" style="margin-left: 5%; margin-right: 5%;"></i>Friends<i class="fas fa-user-check" style="margin-left: 5%; margin-right: 5%;"></i>';
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("more-friends");
var table = document.getElementById("friends-table");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  table.innerHTML +=
    '<tr><td><img src="images/profile pic.jpg" class="profile-pic"></td> <td>User 1</td></tr>';
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

$fetched_first_name;
$fetched_last_name, $fetched_email;
$fetched_phone;
$fetched_bio;
$fetched_city;
$fetched_pic;
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
  $fetched_pic = response.data.profile_pic;

  document.getElementById("fetched-first-name").innerText = $fetched_first_name;
  document.getElementById("fetched-first-name-small").innerText =
    $fetched_first_name;
  document.getElementById("fetched-last-name").innerText = $fetched_last_name;
  document.getElementById("fetched-last-name-bio").innerHTML =
    $fetched_first_name;
  document.getElementById("fetched-bio").innerText = $fetched_bio;
  document.getElementById("fetched-pic-small").src = $fetched_pic;
  document.getElementById("fetched-image-large").src = $fetched_pic;
});


//get all user pposts
var post_space = document.getElementById("profile-posts-div");
var post_pic = document.getElementById("posts-pic");
var poster = document.getElementById("poster");
var post_date = document.getElementById("post-date");
var post_text = document.getElementById("post-text");
var counts = document.getElementById("counts");
var bodyFormData = new FormData();
bodyFormData.append("user_id", 63);

axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/Post/read",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
  //handle success
  console.log(response.data);
  for (var i = 0; i < response.data.length; i++) {
    post_space.innerHTML = `<div class="post"> <div class="post-top"> <div class="dp"> <img src="images/${response.data.profile_pic}" alt="" id="post-pic"> </div> <div class="post-info"> <p class="name"id="poster">${response.data.first_name} ${response.data.last_name}</p> <span class="time" id="post-date">${response.data.date_created}</span> </div> <i class="fas fa-ellipsis-h"></i> </div> <div class="post-content" id="post-text"> ${response.data.text}</div> <div class="post-bottom"> <div class="action"> <i class="far fa-thumbs-up"></i> <span><span id="counts">${response.data.numOfLikes} </span>Like</span> </div> <div class="action"> <i class="far fa-heart"></i> <span>Love</span> </div> </div> </div>`;
  }
});


//friends panel