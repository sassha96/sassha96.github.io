var ok1 = false;

function test(form) {
    if (form.firstName.value == '') {
        ok1 = false;
        alert("Enter your name!")
    }
}