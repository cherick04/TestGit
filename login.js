var main = function() {

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
$('input[type=button]').click(function(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
	if ( username == "Formget" && password == "formget#123"){
		alert ("Login successfully");
		window.location = "http://localhost:8080/Executives/html/test.html"; // Redirecting to other page.
		return false;
	}
	else{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
			}	
		}
	});
};
$(document).ready(main);