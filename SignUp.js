function formValidation() {
// Make quick references to our fields.
	var username = document.getElementById('username');
	var Password = document.getElementById('pwd');
	var Re_password = document.getElementById('re_pwd');
	var email = document.getElementById('email');
	var zip = document.getElementById('zip');
	// To check empty form fields.
	if (username.value.length == 0) {
		document.getElementById('head').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
		username.focus();
		return false;
	}

// Check each input in the order that it appears in the form.
	if (lengthDefine(username, 4, 16)) {
		if (textAlphanumeric(Password, "* For Password please use numbers and letters, and no spaces*")) {
			if ((Re_password.value ==  Password.value) &&  (Password.value != username.value)){ 
				if (emailValidation(email, "* Please enter a valid email address *")) {
					if (textNumeric(zip, "* Please enter a valid zip code *")) {
						alert ("Thank you for sign up");
						window.location = "http://localhost:8080/Executives/html/Startup.html"; // Redirecting to other page.
						//return true;
					}
				}
			}
		}
	}
	return false;
}	
// Function that checks whether input text is numeric or not.
function textNumeric(inputtext, alertMsg) {
	var numericExpression = /^[0-9]+$/;
	if (inputtext.value.match(numericExpression)) {
	return true;
	} else {
		document.getElementById('p6').innerText = alertMsg; // This segment displays the validation rule for zip.
		inputtext.focus();
		return false;
	}
}
// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) {
	var alphaExp = /^[a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) {
		return true;
	} else {
		document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
		//alert(alertMsg);
		inputtext.focus();
		return false;
	}
}
// Function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumeric(inputtext, alertMsg) {
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) {
		return true;
	} else {
		document.getElementById('p2').innerText = alertMsg; // This segment displays the validation rule for address.
		inputtext.focus();
		return false;
	}
	}
// Function that checks whether the input characters are restricted according to defined by user.
function lengthDefine(inputtext, min, max) {
	var uInput = inputtext.value;
	if (uInput.length >= min && uInput.length <= max) {
		return true;
	} else {
		document.getElementById('p1').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
		inputtext.focus();
	return false;
	}
}
// Function that checks whether a option is selected from the selector and if it's not it displays an alert message.
function trueSelection(inputtext, alertMsg) {
	if (inputtext.value == "Please Choose") {
		document.getElementById('p4').innerText = alertMsg; //this segment displays the validation rule for selection.
		inputtext.focus();
		return false;
	} else {
		return true;
	}
}
// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function emailValidation(inputtext, alertMsg) {
	var emailExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	//var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}+$/;;
	if (inputtext.value.match(emailExp)) {
		return true;
	} 
	else {
		document.getElementById('p4').innerText = alertMsg; // This segment displays the validation rule for email.
		inputtext.focus();
		return false;
	}
}
