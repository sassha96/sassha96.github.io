var ok1 = false;

function test(form) {
    if (form.firstName.value == '') {
        ok1 = false;
        alert("Enter your name!")
    } else {
        if ((form.mail.value.indexOf('@', 0) < 1) || (form.mail.value.indexOf('@', 0) == form.mail.value.length - 1)) {
            ok1 = false;
            alert("Wrong Mail!")
        } else ok1 = true
        if (ok1) {
            //..............
            alert("Форма заповнена!")
        }

    }
}