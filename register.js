function required() {
    if (document.form1.fname.value === "") {
        alert("Field 'First name' is clear! Enter a value!");
        return false;
    }
    else if (document.form1.sname.value === "") {
        alert("Field 'Last name' is clear! Enter a value!");
        return false;
    }
    else if (document.form1.mail.value === "") {
        alert("Field 'Email' is clear! Enter a value!");
        return false;
    }
    else if (document.form1.passwd.value === "") {
        alert("Field 'Password' is clear! Enter a value!");
        return false;
    }
    else if (document.form1.passwdConf.value === "") {
        alert("Field 'Confirm Password' is clear! Enter a value!");
        return false;
    } else return true;
}