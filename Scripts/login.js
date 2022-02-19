var button = document.getElementById("login_btn");

button.onclick = function login() {
  //Retrieve HTML Login Elements
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var alert = document.getElementById("alert");

  // Append Data Required
  var bodyFormData = new FormData();
  bodyFormData.append('username', username.value);
  bodyFormData.append('password', password.value);

  // Fetch Using Axios
  axios({
    method: "post",
    url: "../facebook-back-end/router/router.php/Auth/login",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function ({ data }) {

      //Handle Success
      if (data.status == 200) {

        //Store Retrieved Data in Local Storage
        localStorage.setItem("user_id", data.data.user_id);
        localStorage.setItem("username", data.data.username);

        //Redirect to Home Page
        window.location.href = "home.html";

      }
      else {
        // Handle Error
        alert.classList.remove("hidden");
        setTimeout(() => {
          alert.classList.add("hidden");
        }, 1500);
      }
    })
}