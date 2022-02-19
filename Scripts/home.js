async function init() {

    // Retreive User ID from Local Storage
    var user_id = localStorage.getItem("user_id");

    // ------------ User Info Section ------------

    //---------Fetch User Info -------

    // Append Data Required
    var bodyFormData = new FormData();
    bodyFormData.append("user_id", user_id);

    // Fetch Using Axios
    await axios({
        method: "post",
        url: "../facebook-back-end/router/router.php/User/read",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    }).then(function ({ data }) {

        // Handle Success
        if (data.status == 200) {

            // Store Retrieved User Info in Local Storage
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


    //--------- Assign Name -------

    // Retrieve Name From Local Storage
    var first_name = localStorage.getItem("first_name")
    var last_name = localStorage.getItem("last_name")

    // Assign Retrieved Name into HTML Elements
    document.getElementById("fetched-first-name").innerText = first_name
    document.getElementById("fetched-first-name2").innerText = first_name
    document.getElementById("fetched-last-name").innerText = last_name
    // ------------------------------------------


    // -------------- Posts Section --------------

    //---------- Post New Status -----------
    var post_btn = document.getElementById("post-button");

    post_btn.onclick = function postStatus() {
        // Retrieve Post Text On Click 
        var post_text = document.getElementById("post-text");

        // Append Data Required
        var bodyFormData = new FormData();
        bodyFormData.append('user_id', user_id);
        bodyFormData.append('text', post_text.value);

        // Fetch Using Axios
        axios({
            method: "post",
            url: "../facebook-back-end/router/router.php/Post/create",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function ({ data }) {
                // Handle Success
                if (data.status == 200) {

                    // Refresh Page if Post Added Successfully
                    window.location.href = "home.html";

                }
            })
    }


    //---------- Friends Posts -----------
    var posts_div = document.getElementById("posts-div");

    // Append Data Required
    var bodyFormData = new FormData();
    bodyFormData.append('user_id', user_id);

    // Fetch Using Axios
    await axios({
        method: "post",
        url: "../facebook-back-end/router/router.php/Post/read",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function ({ data }) {

            // Handle Success
            if (data.status == 200) {

                //Declare Result as Empty and Loop Posts Json
                var result = "";
                data.data.forEach(post => {

                    //Format Date and Time as yyyy/mm/dd hh:mm
                    var date_time = post.date_created.split(" ");
                    var time_array = date_time[1].split(":");
                    var date = date_time[0];
                    var time = time_array[0] + ":" + time_array[1];

                    //Assign Post HTML Into Result, Including Post Top, Content, and Bottom
                    result += `
                <div class="post">
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

                // Assign Result Into Posts Div Inner HTML
                posts_div.innerHTML = result;
            }
        })
    // -------------------------------------------


    // -------------- Friend Section --------------
    
    //--------- Friends Right Panel -------
    
    // Append Data Required
    var bodyFormData = new FormData();
    bodyFormData.append("user_id", user_id);
    
    // Fetch Using Axios
    await axios({
        method: "post",
        url: "../facebook-back-end/router/router.php/Friend/getFriendsByUserID",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    }).then(function ({ data }) {

        // Retrieve HTML Element and Declare Empty Result
        friends = document.getElementById("friends-panel-fetched");
        var result = "";
        
        // If User Has No Friends
        if (data.length == 0) {
            friends.innerHTML = "Add Friends, they are waiting for you."
        }
        
        // Loop Through Friends Json
        for (var i = 0; i < data.length; i++) {

            // Abort Looping When 4th Json Reached
            if (i == 4) {
                break;
            }
            
            // Assign Friend HTML Into Result, including Friend's Image and Name
            result += `
            <div class="friends-section"> 
            <div> 
            <a href="#"><img src="images/profile pic.jpg" class="profile-pic" /></a>
            </div> 
            
            <div> 
            ${data[i].first_name} ${data[i].last_name} 
            </div> 
            </div>`;
        }

        // Assign Result Into Friends Panel Inner HTML
        friends.innerHTML = result;
    });
    

    //------- All Friends Modal ---------
    
    // Retrieve HTML Modal Elements and More Friends Buttons 
    var modal = document.getElementById("myModal");
    var more_friends_btn = document.getElementById("more-friends");
    var friends_list_body = document.getElementById("modal-body");
    
    // Get the <span> element that closes the modal    
    var close_modal_btn = document.getElementsByClassName("close")[0];
    
    // Display None on Close Modal
    close_modal_btn.onclick = function () {
        modal.style.display = "none";
    };
    
    // Open Friends Modal and Add Friends Json On Click
    more_friends_btn.onclick = async function () {
        modal.style.display = "block";
        
        // Append Data Required
        var bodyFormData = new FormData();
        bodyFormData.append("user_id", user_id);
        
        // Fetch Using Axios
        await axios({
            method: "post",
            url: "../facebook-back-end/router/router.php/Friend/getFriendsByUserID",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(function ({ data }) {
            var result = "";
            
            // If User Has No Friends
            if (data.length == 0) {
                friends_list_body.innerHTML = "Add Friends, they are waiting for you."
            }
            
            // Loop Through Friends Json
            for (var i = 0; i < data.length; i++) {
                
                // Parse Friend ID and Assign Friend HTML Into Result, including Friend's Image, Name, and Remove Friend Button
                friend_id = parseInt(data[i].friend_id);
                result += `
                <div class="friends-section"> 
                <div> 
                <a href="#"><img src="images/profile pic.jpg" class="profile-pic" /></a>
                </div> 
                
                <div> 
                ${data[i].first_name} ${data[i].last_name}
                <button id="remove_friend_btn" onclick="removeFriend(${friend_id})"><i class="fas fa-user-times" ></i></button>
                </div> 
                </div>`;
                
                // Assign Result Into Friends Modal Inner HTML
                friends_list_body.innerHTML = result;
            }
        });
    }
    
    
    //---------- Remove Friend ----------- (Incomplete Feature)
    // function removeFriend(friend_id) {
        
    //     // Append Data Required
    //     var bodyFormData = new FormData();
    //     bodyFormData.append("user_id", user_id);
    //     bodyFormData.append("friend_id", friend_id);
        
    //     // Fetch Using Axios
    //     axios({
    //         method: "post",
    //         url: "../facebook-back-end/router/router.php/Friend/delete",
    //         data: bodyFormData,
    //         headers: { "Content-Type": "multipart/form-data" },
    //     }).then(function ({ data }) {
    //         //Refresh Page on Remove
    //         window.location.href = "home.html";
    //     });
    // }
    // --------------------------------------------
}

window.onload = init();