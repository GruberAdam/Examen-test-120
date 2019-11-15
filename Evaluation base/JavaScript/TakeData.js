//Initiate var's
var firstname = document.getElementById('user_firstname');
var lastname = document.getElementById('user_lastname');
var password = document.getElementById('user_password');
var passwordConfirmation = document.getElementById('user_password_confirmation');
var submitButton = document.getElementById('submit-button');
var form = document.getElementById('form');
var counter = 0;
//Take error object
var firstnameError = document.getElementById('firstname_error');
var lastnameError = document.getElementById('lastname_error');
var passwordError = document.getElementById('password_error');
var passwordConfirmationError = document.getElementById('password_confirmation_error');

//Put every error in hidden
firstnameError.style.visibility = "hidden";
lastnameError.style.visibility = "hidden";
passwordError.style.visibility = "hidden";
passwordConfirmationError.style.visibility = "hidden";
//When submit button gets clicked
submitButton.addEventListener('click', function () {
    //Test if the firtname is too short
    if (firstname.value.length <= 2) { //J'ai décidé de mettre 3 caractères minimum car ce n'étais pas precisé
        firstnameError.style.visibility = "visible"; //If yes put the hidden text visible
    } else {
        firstnameError.style.visibility = "hidden"; //If no hide the hidden text
        var firstNameValue = firstname.value;
        sessionStorage.setItem("firstname", firstNameValue); //Creates a localStorage with the firstname value
        counter++;
    }
    //Test if the lastname is too short
    if (lastname.value.length <= 2) {
        lastnameError.style.visibility = "visible"; //If yes put the hidden text visible
    } else {
        lastnameError.style.visibility = "hidden"; //If no hide the hidden text
        var lastNameValue = lastname.value;
        sessionStorage.setItem("lastname", lastNameValue); //Creates a localStorage with the lastname value
        counter++;
    }
    //Test if the password length is too short
    if (password.value.length >= 6) {
        passwordError.style.visibility = "hidden"; //If no hide the hidden text
        counter++;
    } else {
        passwordError.style.visibility = "visible"; //If yes put the hidden text visible
    }
    //Test if the password confirmation is the same as the password
    if (passwordConfirmation.value === password.value) {
        passwordConfirmationError.style.visibility = "hidden"; //If yes hide the text
        counter++;
    } else {
        passwordConfirmationError.style.visibility = "visible"; //If no show the text
    }
    console.log(counter);
    if (counter === 4){
        form.submit();
    }
    counter = 0;
});