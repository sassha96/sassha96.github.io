function validateForm() {
    var firstName = document.forms["myForm"]["fname"].value;

    if (firstName == "") {
        alert("Fields must be filled out!");
        return false;
    }
}

