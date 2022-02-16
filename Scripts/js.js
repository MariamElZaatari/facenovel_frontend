

$fetched_first_name; $fetched_last_name, $fetched_email; $fetched_phone; $fetched_bio; $fetched_city;
var bodyFormData = new FormData();
bodyFormData.append('user_id', 63);
axios({
  method: "post",
  url: "../facebook-back-end/router/router.php/User/read",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
})
  .then(function (response) {
    //handle success
    console.log(response.data);
    $fetched_first_name = response.data.first_name;
    $fetched_last_name = response.data.last_name;
    $fetched_email = response.data.email;
    $fetched_phone = response.data.phone;
    $fetched_bio = response.data.bio_text;
    $fetched_city = response.data.current_city;

  })