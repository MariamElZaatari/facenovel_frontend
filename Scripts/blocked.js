var user_id = localStorage.getItem("user_id");
var bodyFormData = new FormData();
bodyFormData.append("user_id", user_id);
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
    block_friends_table = document.getElementById("block-friends-table");
    console.log(response.data[0].first_name);
    for (let i = 0; i < (response.data).length; i++) {
        block_friends_table.innerHTML += `<tr id=${response.data[i].user_two_id}>
        <td style="width: 100px;"><img src="images/profile pic.jpg" class="profile-pic"></td>
        <td><strong>${response.data[i].first_name} <span>${response.data[i].last_name} </span></strong></td>
        <td style="text-align: right;"><label class="unblock">Block Friend</label> <i class="fas fa-ban" id="_${response.data[i].user_two_id}" onclick="Block(${response.data[i].user_two_id})"></i></td>
        </tr>`;

    }
    
  } else {
    alert("sad");
  }
});

function Block(e) {
    var user_id = localStorage.getItem("user_id");
    var bodyFormData = new FormData();
    bodyFormData.append("user_id", user_id);
    bodyFormData.append("blocked_user_id", e);
    axios({
        method: "post",
        url: "../facebook-back-end/router/router.php/Block/create",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function (response) {
        //handle success
        if (response.status == 200) {
          console.log(response.data);
          block_friends_table = document.getElementById("block-friends-table");
          removed_tr = document.getElementById(e.toString());
          block_friends_table.removeChild(removed_tr);
          alert("done")
          
          
        } else {
          alert("sad");
        }
      });
}