var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    
    if(firstName === "") {
    	$('p.first-name-error').text("Please enter your first name.");
      alert("error set");
    }
  });
    

    var lastName = $('#last').val();
    if (lastName === "") {
    	$('p.last-name-error').text("Please enter your last name.");
      alert(lastName + "is blank");
    }


  

    var email = $('#email').val();
    if (email === "") {
    	$('p.email-error').text("Please enter your email address.");
      alert(email + "is blank");
    }
    


  

    var password = $('#password').val();
    if (password === "") {
    	$('p.password-error').text("Please enter a password.");
      }
       
      if (password.length < 8) {
        $('p.password-error').text("Short passwords are easy to guess. Try one with at least 8 characters.");
      }
      
  var email = $('#email').val(); 
      if (email === "icepixy@gmail.com") {
        $('p.email-error').text("This email is already taken.");
      }
      
      
  return false;
  };
   

});
$(document).ready(main);

//<p class="first-name-error"></p>