var user_id = localStorage.getItem("user_id");

var bodyFormData = new FormData();
bodyFormData.append("user_id", user_id);
axios({
    method: "post",
    url: "../facebook-back-end/router/router.php/User/read",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
}).then(function ({ data }) {

    //handle success
    if (data.status == 200) {

        //store data in local storage
        localStorage.setItem("first_name", data.data.first_name);
        localStorage.setItem("last_name", data.data.last_name);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("phone", data.data.phone);
        localStorage.setItem("gender", data.data.gender);
        localStorage.setItem("bio_text", data.data.bio_text);
        localStorage.setItem("current_city", data.data.current_city);
        localStorage.setItem("profile_pic", data.data.profile_pic);
    }
});

var first_name=localStorage.getItem("first_name")
var last_name=localStorage.getItem("last_name")

document.getElementById("fetched-first-name").innerText = first_name
document.getElementById("fetched-last-name").innerText = last_name

// get all friends and display on the right panel
//u.first_name, u.last_name, u.profile_pic,
var bodyFormData = new FormData();
bodyFormData.append("user_id", user_id);
axios({
    method: "post",
    url: "../facebook-back-end/router/router.php/Friend/getFriendsByUserID",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
}).then(function ({ data }) {

    //handle success
    if (data.status == 200) {
        friends = document.getElementById("friends-panel-fetched");
        var result="";
        if (data.length==0){
            friends.innerHTML="Add Friends, they are waiting for you."
        }

        for (var i = 0; i<data.length; i++) {
            if (i==4){
                break;
            }
            result += `
                        <div class="friends-section"> 
                            <div> <a href="#"><img src="images/${data.data[i].profile_pic}" class="profile-pic" /></a>
                            </div> 
                            <div> ${data.data[i].first_name} ${data.data[i].last_name} 
                            </div> 
                        </div>`;
        }
        friends.innerHTML=result;
    }
});

// var bodyFormData = new FormData();
// bodyFormData.append("user_id", user_id);

// axios({
//   method: "post",
//   url: "../facebook-back-end/router/router.php/Friend/getFriendsByUserID",
//   data: bodyFormData,
//   headers: { "Content-Type": "multipart/form-data" },
// }).then(function ({data}) {
//   //handle success
//   if (data.status == 200) {
    
//     }
// });
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("more-friends");
// var friends = document.getElementById("friends");
// var favorites = document.getElementById("favorites");
// var body = document.getElementById("modal-body");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
//     body.innerHTML +=
//         '<div class="friends-modal"><div><img src="images/profile pic.jpg" class="profile-pic"></div><div><strong>User 1</strong></div><div><label class="unblock">Remove Friend</label><i class="fas fa-user-times" id="remove-friend"></i></div><div><label class="unblock">Add Favorite</label><i class="fas fa-star" id="add-favorite"></i></div></div>';
// };


// // on click friends icon display all friends inside the modal
// friends.onclick = function () {
//     modal.style.display = "block";
//     var bodyFormData = new FormData();
//     bodyFormData.append("user_id", 63);
//     odyFormData.append("user_id", 63);
//     axios({
//         method: "post",
//         url: "../facebook-back-end/router/router.php/Friend/getFriendsByUserID",
//         data: bodyFormData,
//         headers: { "Content-Type": "multipart/form-data" },
//     }).then(function (response) {
//         //handle success
//         console.log(response.data);
//         friends_panel = document.getElementById("friends-panel-fetched");
//         for (var i = 0; i < response.data.length; i++) {
//             body.innerHTML = `<div class="friends-modal"><div><img src="images/${response.data.profile_pic[i]}" class="profile-pic"></div><div><strong>${response.data.first_name[i]} ${response.data.last_name[i]}</strong></div><div><label class="unblock">Remove Friend</label><i class="fas fa-user-times" id="remove-friend"></i></div><div><label class="unblock">Add Favorite</label><i class="fas fa-star" id="add-favorite"></i></div></div>`;
//         }
//     });
//     body.innerHTML +=
//         '';
// };

// favorites.onclick = function () {
//     modal.style.display = "block";
//     body.innerHTML +=
//         '<div class="friends-modal"><div><img src="images/profile pic.jpg" class="profile-pic"></div><div><strong>User 1</strong></div><div><label class="unblock">Remove From Favorite</label><i class="fas fa-user-times" id="remove-favorite"></i></div></div>';
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };


//post a new status 
var button = document.getElementById("post-button");

button.onclick = function postStatus() {
    var post_text = document.getElementById("post-text");

    var bodyFormData = new FormData();
    bodyFormData.append('user_id', user_id);
    bodyFormData.append('text', post_text.value);

    axios({
        method: "post",
        url: "../facebook-back-end/router/router.php/Post/create",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function ({data}) {
            //handle success
            if (data.status == 200) {
                //add to posts_div
            }
            console.log(response.data);
        })
}

// get friends posts
var posts_div = document.getElementById("posts-div");
var poster = document.getElementById("poster");
var poster_pic = document.getElementById("posts-pic");

var bodyFormData = new FormData();
bodyFormData.append('user_id', user_id);

axios({
    method: "post",
    url: "../facebook-back-end/router/router.php/Post/read",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
})
    .then(function ({data}) {
        //handle success
        if (data.status == 200) {
            //show posts in posts div
            var result="";
            data.data.forEach(post => {
                // p.post_id, u.first_name, u.last_name, u.profile_pic, p.text, p.date_created, Count(l.likes_id) as numOfLikes
                result += `<div class="post">
                <div class="post-top">
                    <div class="dp">
                        <img src="images/profile pic.jpg" alt="">

                    </div>
                    <div class="post-info">
                        <a href="#">
                            <p class="name">${post.first_name} ${post.last_name}</p>
                        </a>

                        <span class="time">${post.date_created}</span>
                    </div>

                </div>

                <div class="post-content">
                    ${post.text}
                </div>

                <div class="post-bottom">
                    <div class="action">
                    <span>${post.numOfLikes}</span>
                    <button id="like_btn"><i class="far fa-thumbs-up"></i>
                    <span>Like</span></button> 
                    </div>
                </div>
            </div>`;      
            });
            posts_div.innerHTML=result;
        }
    })