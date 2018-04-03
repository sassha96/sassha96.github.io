/* function validateForm() {
    var firstName = document.forms["myForm"]["fname"].value;

    if (firstName == "") {
        alert("Fields must be filled out!");
        return false;
    }
} */

function required() {
    var empt = document.form1.fname.value;
    if (empt === "") {
        alert("Field 'First name' is clear! Enter a value!");
        empt = '';
        return false;
    }
    else {
        alert('Code has accepted : you can try another');
        return true;
    }
}