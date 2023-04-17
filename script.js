//MENU - ALL PAGES
// Function to wrap the menu

function myMenu() {
  var links = document.getElementsByClassName("menu-responsive");
  for (var i = 0; i < links.length; i++) {
    if (links[i].style.display === "none") {
      links[i].style.display = "block";
    } else {
      links[i].style.display = "none";
    }
  }
}

//CONTACT
//Function to call the pop-up only when the all the fields are filled - CONTACT

function openPopup() {
  var name = document.getElementById("inputName4").value;
  var surname = document.getElementById("inputSurname4").value;
  var email = document.getElementById("inputEmail").value;
  var phone = document.getElementById("inputPhone").value;
  var service = "";
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    service += checkboxes[i].nextElementSibling.innerHTML + ", ";
  }
  if (name === "" || surname === "" || email === "" || phone === "" || checkboxes.length === 0) {
    alert("Please fill in all the required fields.");
    return false;
  } else {
    document.getElementById("confirmation").innerHTML = "Thanks " + name + "!";
    document.getElementById("pop-up").classList.add("popup-open");
    return true;
  }
}

//Fuction to close the pop up by removing class
function closePopup() {
  document.getElementById("pop-up").classList.remove("popup-open");
  document.getElementsByClassName("contact")[0].reset();
}

// Add an event listener to the form submission event, to prevent submitting and refreshing the page when getting the pop up.
const form = document.querySelector('.contact');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  openPopup();
});

//Function created to stop the form submitting and the pop-up showing if there are invalid inputs.

function validateForm() {
  let name = document.getElementById("inputName4").value.trim();
  let surname = document.getElementById("inputSurname4").value.trim();
  let email = document.getElementById("inputEmail").value.trim();
  let phone = document.getElementById("inputPhone").value.trim();
 
  if (name === "" || surname === "" || email === "" || phone === "") {
    alert("Please fill in all required fields");
    return false;
  }
  
  let servicesChecked = false;
  let serviceCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < serviceCheckboxes.length; i++) {
    if (serviceCheckboxes[i].checked) {
      servicesChecked = true;
      break;
    }
  }
  if (!servicesChecked) {
    alert("Please select at least one service");
    return false;
  }

  openPopup();
  return false;
}





