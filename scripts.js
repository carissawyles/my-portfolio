
function checkdata(){
	  event.preventDefault();
	
      //Create references to the input elements we wish to validate
      var name = document.getElementById("name");
      var email_address = document.getElementById("email");
	  document.getElementById("nameError").style.display = 'none';
	  document.getElementById("emailError").style.display = 'none';
      
      //Check if username field is empty
      if(name.value == ""){
            document.getElementById("nameError").style.display = 'block';
            name.focus();
            return false;
      }
     //Check if email field is empty
      if(email_address.value == ""){
            document.getElementById("emailError").style.display = 'block';
            email_address.focus();
            return false;
      }
     //If all is well show pop-up message and return true.
	 
	  showPopup(true);
      return true;
}

function showPopup(bool) {
  if (bool) {
	  //show pop-up
      document.getElementById('popup').style.visibility = 'visible';
	  
  } else {
	  //hide pop-up
	  document.getElementById('popup').style.visibility = 'hidden';
	  //reset form fields to empty
	  document.getElementById("name").value = '';
	  document.getElementById("email").value = '';
	  document.getElementById("message").value = '';
  }
}
