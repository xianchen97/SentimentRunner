var random_name = require('node-random-name');
var male_or_f = 0;


onload = function(){
  const fname = document.querySelector('#firstName');
  const lname = document.querySelector('#lastName');
  const body = document.querySelector('#body');

  $("#babyButton").click(function(e) {
     fname.textContent = firstName();
     e.stopPropagation();
  });

  $("#babyButton").click(function(e) {
     fname.textContent = firstName();
     e.stopPropagation();
  });

  $('#lastName').bind('click',
    function(e){
        $(this).attr('contentEditable',true);
        e.stopPropagation();

    });

  body.addEventListener('dblclick', () => {
    if(male_or_f == 1){
      male_or_f = 0;
      document.body.style.background = "#FFCAD4"; 
    }
    else{
      male_or_f = 1;
      document.body.style.background = "#ADD8E6";
    }

  });
  document.addEventListener('DOMContentLoaded', function() {
    fname.textContent = possibleNames[0];
  }, false);
}
window.firstName = function getRandomFullName(){
  var name =  random_name();
  var arr = name.split(" ");
  if(male_or_f == 1){
    return random_name({ first: true, gender: "male" });
  }
  else{
    return random_name({ first: true, gender: "female" });
  }
}

window.gender = function getNameGender(name){
  var req = "https://api.genderize.io/?name=" + name;
 $.get(req, function(data, status){
        
    return data.gender;
            
 });
}