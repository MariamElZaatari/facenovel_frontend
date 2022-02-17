
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

//get user info

var user_id = 63;
var bodyFormData = new FormData();
bodyFormData.append("user_id", user_id);

axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/User/read",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
  //handle success
  if (response.status == 200) {
    console.log(response.data)
    document.getElementById("fetched-first-name-small").innerText = response.data[0].first_name;
    document.getElementById("fetched-first-name").innerText = response.data[0].first_name;
    document.getElementById("fetched-last-name").innerText = response.data[0].last_name;
    document.getElementById("fetched-first-name-bio").innerText = response.data[0].first_name;
    document.getElementById("bio-text").innerText = response.data[0].bio_text;
    document.getElementById("location").innerText = response.data[0].current_city;
    console.log(response.data[0].first_name);
  } else {
    alert("sad");
  }
});

//get school info

var user_id = 63;
var bodyFormData = new FormData();
bodyFormData.append("user_id", user_id);

axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/Education/getEducationByUserID",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
  //handle success
  if (response.status == 200) {
    console.log(response.data)
    document.getElementById("education").innerText = response.data[0].school_name;
  } else {
    alert("sad");
  }
});

//get school info

var user_id = 63;
var bodyFormData = new FormData();
bodyFormData.append("user_id", user_id);

axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/Work/getWorkByUserID",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
  //handle success
  if (response.status == 200) {
    console.log(response.data)
    document.getElementById("work").innerText = response.data[0].company_name;
  } else {
    alert("sad");
  }
});

//get school info

var user_id = 63;
var bodyFormData = new FormData();
bodyFormData.append("user_id", user_id);

axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/Work/getWorkByUserID",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
  //handle success
  if (response.status == 200) {
    console.log(response.data)
    document.getElementById("work").innerText = response.data[0].company_name;
  } else {
    alert("sad");
  }
});

//get user posts

var user_id = 63;
var bodyFormData = new FormData();
bodyFormData.append("user_id", user_id);

axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/Post/getPostsByUserID",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
  //handle success
  if (response.status == 200) {
    console.log(response.data);
    post_space = document.getElementById("profile-posts-div");
    for (var i = 0; i < (response.data).length; i++) {
      post_space.innerHTML = `<div class="post"> <div class="post-top"> <div class="dp"> <img src="images/profile pic.jpg" alt="" id="post-pic"> </div> <div class="post-info"> <p class="name"id="poster">${response.data[i].first_name} ${response.data[i].last_name}</p> <span class="time" id="post-date">${response.data[i].date_created}</span> </div> <i class="fas fa-ellipsis-h"></i> </div> <div class="post-content" id="post-text"> ${response.data[i].text}</div> <div class="post-bottom"> <div class="action"> <i class="far fa-thumbs-up"></i> <span><span id="counts">${response.data[i].numOfLikes} </span>Like</span> </div> <div class="action"> <i class="far fa-heart"></i> <span>Love</span> </div> </div> </div>`;
    }
    document.getElementById("count-posts").innerHTML = (response.data).length;
    //for (var i = 0; i < response.data.length; i++) {
      //post_space.innerHTML = `<div class="post"> <div class="post-top"> <div class="dp"> <img src="images/profile pic.jpg" alt="" id="post-pic"> </div> <div class="post-info"> <p class="name"id="poster">${response.data.first_name} ${response.data.last_name}</p> <span class="time" id="post-date">${response.data.date_created}</span> </div> <i class="fas fa-ellipsis-h"></i> </div> <div class="post-content" id="post-text"> ${response.data.text}</div> <div class="post-bottom"> <div class="action"> <i class="far fa-thumbs-up"></i> <span><span id="counts"> </span>Like</span> </div> <div class="action"> <i class="far fa-heart"></i> <span>Love</span> </div> </div> </div>`;
    //}
  } else {
    alert("sad");
  }
});

//get user friends

var user_id = 63;
var bodyFormData = new FormData();
bodyFormData.append("user_id", user_id);

axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/Friend/getFriendsByUserID",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
  //handle success
  if (response.status == 200) {
    console.log(response.data);
    document.getElementById("friends-count").innerText = (response.data).length;
    
    friends_panel = document.getElementById("friends-panel-fetched");
    fr_table = document.getElementById("friends-table");
    for (var i = 0; i < (response.data).length; i++) {
      if(response.data[i].profile_pic == null){
        console.log("no pic")
        profilePic=response.data[i].profile_pic;
        profilePic = "profile pic.jpg";
        fr_table.innerHTML += `<tr> <td style="width: 100px;"><img src="images/${profilePic}" class="profile-pic"></td> <td><strong>${response.data[i].first_name} ${response.data[i].last_name} </strong></td> <td style="text-align: right;"><label class="unblock">remove friend</label><i class="fas fa-user-times" id="remove-friend"></i></td> </tr>`;
        friends_panel.innerHTML += `<div class="friends-section"> <div> <img src="images/${profilePic}" class="profile-pic" /> </div> <div> ${response.data[i].first_name} ${response.data[i].last_name}  </div> </div>`;
      }else{
        friends_panel.innerHTML += `<div class="friends-section"> <div> <img src="images/${response.data[i].profile_pic}" class="profile-pic" /> </div> <div> ${response.data[i].first_name} ${response.data[i].last_name} </div> </div>`;
        fr_table.innerHTML+= `<tr> <td style="width: 100px;"><img src="images/${response.data[i].profile_pic}" class="profile-pic"></td> <td><strong>${response.data[i].first_name} ${response.data[i].last_name} </strong></td> <td style="text-align: right;"><label class="unblock">remove friend</label><i class="fas fa-user-times" id="remove-friend"></i></td> </tr>`;

      }

    }
    
  } else {
    alert("sad");
  }
});

//remove firend
var remove = document.getElementById("remove-friend");
function remove(){
    //get school info

var user_id = 63;
var bodyFormData = new FormData();
bodyFormData.append("user_id", user_id);

axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/Work/getWorkByUserID",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
}).then(function (response) {
  //handle success
  if (response.status == 200) {
    console.log(response.data)
    document.getElementById("work").innerText = response.data[0].company_name;
  } else {
    alert("sad");
  }
});
}