async function init() {

    var user_id = localStorage.getItem("user_id");

    //---------Fetch User Info -------
    var bodyFormData = new FormData();
    bodyFormData.append("user_id", user_id);
    await axios({
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
    //---------------------------

    //---------Assign Name -------
    var first_name = localStorage.getItem("first_name")
    var last_name = localStorage.getItem("last_name")

    document.getElementById("fetched-first-name").innerText = first_name
    document.getElementById("fetched-first-name2").innerText = first_name
    document.getElementById("fetched-last-name").innerText = last_name
    //---------------------------

    //--------- Get Friends Right Panel -------
    var bodyFormData = new FormData();
    bodyFormData.append("user_id", user_id);
    await axios({
        method: "post",
        url: "../facebook-back-end/router/router.php/Friend/getFriendsByUserID",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    }).then(function ({ data }) {
        friends = document.getElementById("friends-panel-fetched");
        var result = "";
        if (data.length == 0) {
            friends.innerHTML = "Add Friends, they are waiting for you."
        }
        for (var i = 0; i < data.length; i++) {
            if (i == 4) {
                break;
            }
            result += `
                            <div class="friends-section"> 
                                <div> <a href="#"><img src="images/profile pic.jpg" class="profile-pic" /></a>
                                </div> 
                                <div> ${data[i].first_name} ${data[i].last_name} 
                                </div> 
                            </div>`;
        }
        friends.innerHTML = result;

    });
    //---------------------------

    //   ------- See All Friends ---------
    var modal = document.getElementById("myModal");
    var more_friends_btn = document.getElementById("more-friends");
    var friends_list_body = document.getElementById("modal-body");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    };

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    more_friends_btn.onclick = async function () {
        var friend_id = "";
        modal.style.display = "block";
        var bodyFormData = new FormData();
        bodyFormData.append("user_id", user_id);
        await axios({
            method: "post",
            url: "../facebook-back-end/router/router.php/Friend/getFriendsByUserID",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(function ({ data }) {
            var result = "";
            if (data.length == 0) {
                friends_list_body.innerHTML = "Add Friends, they are waiting for you."
            }
            for (var i = 0; i < data.length; i++) {
                result += `
                <div class="friends-section"> 
                <div> <a href="#"><img src="images/profile pic.jpg" class="profile-pic" /></a>
                </div> 
                <div> ${data[i].first_name} ${data[i].last_name}
                <button id="remove_friend_btn" onclick="removeFriend(${data[i].friend_id})"><i class="fas fa-user-times" ></i></button>
                </div> 
                </div>`;
                friends_list_body.innerHTML = result;
            }
        });
    }
    
    //---------- Remove Friend -----------
        // function removeFriend(friend_id){
        // var bodyFormData = new FormData();
        // bodyFormData.append("user_id", user_id);
        // bodyFormData.append("friend_id", user_id);

        // axios({
        //     method: "post",
        //     url: "../facebook-back-end/router/router.php/Friend/delete",
        //     data: bodyFormData,
        //     headers: { "Content-Type": "multipart/form-data" },
        // }).then(function ({ data }) {

        // });
        // }
    //------------------------------------


    //---------- Post New Status -----------
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
            .then(function ({ data }) {
                //handle success
                if (data.status == 200) {
                    //add to posts_div
                    window.location.href = "home.html";
                }
            })
    }
    //--------------------------

    //---------- Friends Posts -----------
    var posts_div = document.getElementById("posts-div");

    var bodyFormData = new FormData();
    bodyFormData.append('user_id', user_id);

    await axios({
        method: "post",
        url: "../facebook-back-end/router/router.php/Post/read",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function ({ data }) {
            //handle success
            if (data.status == 200) {
                //show posts in posts div
                var result = "";
                data.data.forEach(post => {
                    var date_time = post.date_created.split(" ");
                    var time_array = date_time[1].split(":");
                    var date = date_time[0];
                    var time = time_array[0] + ":" + time_array[1];

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
    
                            <span class="time">${date} ${time} </span>
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
                posts_div.innerHTML = result;
            }
        })
    //---------------------------
}

window.onload = init();