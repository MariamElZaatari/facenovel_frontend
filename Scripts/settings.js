/*const fetchData = async () => {
            try {
              const [genderize, agify, nationalize] = await Promise.all([
                fetch(`https://api.genderize.io?name=${input.value}`),
                fetch(`https://api.agify.io/?name=${input.value}`),
                fetch(`https://api.nationalize.io/?name=${input.value}`),
              ]);
        
              const returned_gender = await genderize.json();
              const returned_age = await agify.json();
              const returned_nationality = await nationalize.json();
    
              name.innerText = input.value.charAt(0).toUpperCase() + input.value.slice(1);
              gender.innerText = returned_gender.gender.charAt(0).toUpperCase() + returned_gender.gender.slice(1);
              age.innerText = returned_age.age;
              console.log(returned_gender.gender);
              console.log(returned_age.age);
    
              for(var i=0; i<returned_nationality.country.length; i++){
                console.log(returned_nationality.country[i].country_id);
                country.innerText += " "+returned_nationality.country[i].country_id+" ";
            }
              //console.log(returned_nationality.country.country_id);
        
            } catch (err) {
              throw err;
              alert("sorry name not found");
            }
          };
          fetchData();*/

          async function fetchUserData() {
            const response = await fetch("");
            const user_data = await response.json();
            return user_data;
          }
          
          /* Display dog image */
          fetchDogImage().then((user_data) => {
            user_data;
            console.log(user_data);
            document.getElementById("dog-image").src = user_data.message;
            
          });