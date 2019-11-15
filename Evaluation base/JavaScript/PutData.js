//Get the id elements of the spans
var userFirstnamePlace = document.getElementById('firstname');
var userLastnamePlace = document.getElementById('lastname');
//Take out the local storage in a var
var userFirstName = sessionStorage.getItem("firstname");
var userLastName = sessionStorage.getItem("lastname");
function putData() {
    //Change the text at the top with the var's name
    userFirstnamePlace.innerText = userFirstName;
    userLastnamePlace.innerText = userLastName;
}
