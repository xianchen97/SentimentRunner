var random_name = require('node-random-name');
var male_or_f = 0;


onload = function(){
  const fname = document.querySelector('#firstName');
  const lname = document.querySelector('#lastName');
  const babyButton = document.querySelector('#babyButton');
  babyButton.addEventListener('click', () => {
  fname.textContent = firstName();
});

        document.addEventListener('DOMContentLoaded', function() {
            fname.textContent = possibleNames[0];
        }, false);
      }
window.firstName = function getRandomFullName(){
  var name =  random_name();
  var arr = name.split(" ");
  return random_name({ first: true, gender: "male" })
}

window.gender = function getNameGender(name){
  var req = "https://api.genderize.io/?name=" + name;
 $.get(req, function(data, status){
        
    return data.gender;
            
 });
}