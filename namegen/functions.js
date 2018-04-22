var random_name = require('node-random-name');
function getRandomLastName(){

}

function getRandomFullName(){
  return random_name({ seed: 'Based on this' });
}

function getNameGender(name){
  var req = "https://api.genderize.io/?name=" + name;
 $.get(req, function(data, status){
        
            alert("Data: " + data.gender + "\nStatus: " + status);
            
 });
}