


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
friends_panel = document.getElementById("friends-panel-fetched");
    for (var i = 0; i < (response.data).length; i++) {
      
      body.innerHTML = `<div class="friends-modal"><div><img src="images/${response.data.profile_pic[i]}" class="profile-pic"></div><div><strong>${response.data.first_name[i]} ${response.data.last_name[i]}</strong></div><div><label class="unblock">Remove Friend</label><i class="fas fa-user-times" id="remove-friend"></i></div><div><label class="unblock">Add Favorite</label><i class="fas fa-star" id="add-favorite"></i></div></div>`;
    }


     for (var i = 0; i < (response.data).length; i++) {
      if(response.data[i].profile_pic == null){
        console.log("no pic")
        profilePic=response.data[i].profile_pic;
        profilePic = "profile pic.jpg";
        friends_panel.innerHTML = `<div class="friends-section"> <div> <img src="images/${profilePic}" class="profile-pic" /> </div> <div> ${response.data[i].first_name} ${response.data[i].last_name}</div> </div>`;

      }
      else{
        friends_panel.innerHTML = `<div class="friends-section"> <div> <img src="images/${response.data[i].profile_pic}" class="profile-pic" /> </div> <div> ${response.data[i].first_name} ${response.data[i].last_name}</div> </div>`;

      }
    }