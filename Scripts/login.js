var button=document.getElementById("login_btn");

button.onclick= function login(){
  var username=document.getElementById("username");
  var password=document.getElementById("password");
  var alert = document.getElementById("alert");
  
  var bodyFormData = new FormData();
  bodyFormData.append('username', username.value);
  bodyFormData.append('password', password.value);

  axios({
    method: "post",
    url: "../facebook-back-end/router/router.php/Auth/login",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function ({data}) {
      //handle success
      if (data.status==200){

        //store data in local storage
        localStorage.setItem("user_id", data.data.user_id);
        localStorage.setItem("username", data.data.username);
        //redirect
        window.location.href = "home.html";
        
      }
      else{
        alert.classList.remove("hidden");
        setTimeout(() => {
          alert.classList.add("hidden");
        }, 1500);
      }
    })
}