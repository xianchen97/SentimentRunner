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

  $("#firstName").click(function(e) {
     $(this).attr('contentEditable',true);
     e.stopPropagation();
  });

  $("#lastName").click(function(e) {
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

  $('#firstName').keydown(function(e) {
    var fieldValue = document.querySelector('#firstName');
    if (e.keyCode === 13) {
      var fieldValue = document.querySelector('#firstName');
      console.log("seed" + fieldValue.value);
      fname.textContent = seed(fieldValue.value);
      // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
      // prevent the default behaviour of return key pressed
      return false;
    }
    else{
      console.log("enteed " + fieldValue.value);
      document.querySelector('#firstName').value = this.innerHTML;
    }
  });

   $('#lastName').keydown(function(e) {
    // trap the return key being pressed
    if (e.keyCode === 13) {
      // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
      // prevent the default behaviour of return key pressed
      return false;
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

function seed(name){
  var name =  random_name({ seed: name });
  var arr = name.split(" ");
  return arr[0];
}
