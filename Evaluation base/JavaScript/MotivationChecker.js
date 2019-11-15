//Initiate var's
var textArea = document.getElementById('text_area');
var characterRemaining = document.getElementById('character_remaining');
var textOfcharacterRemaining = document.getElementById('character_remaining_text');
var tooShortError = document.getElementById('too_short_error');
var button = document.getElementById('button_ok');
//Put error text invisible
textOfcharacterRemaining.style.visibility = "hidden";
tooShortError.style.visibility = "hidden";
button.style.visibility ="hidden";
//When there is a modifiycation is the text area
textArea.addEventListener("keyup", function () {
    //If  the text is longer than 30letters
    if (textArea.value.length >= 30) {
        textOfcharacterRemaining.style.visibility = "visible"; //Change text to visible
        tooShortError.style.visibility = "hidden"; //change text to hidden
        button.style.visibility = "visible"; //Change the button to visible
        characterRemaining.innerHTML = 144 - textArea.value.length //Write characters remaining
    } else {
        tooShortError.style.visibility = "visible"; //Change to visible
        textOfcharacterRemaining.style.visibility = "hidden"; //change to hidden
    }
    if (144 - textArea.value.length <= 0){
        characterRemaining.innerHTML = 0;//Write characters remaining
    }

});