var namePattern = /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/;
var emailPattern = /^[a-zA-Z]+[\w_\.\-]+[@][a-z]+[\.]+[a-z]/

function validation(){
    let valid = true;
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    if(!namePattern.test(name)){
        valid=false;
        document.getElementById("passwordError").innerText = "Please enter valid name";
        document.getElementById("passwordError").style.color = "red";
    }
    else{
        document.getElementById("passwordError").innerText = "";
    }
    if(!emailPattern.test(email)){
        valid=false;
        document.getElementById("emailError").innerText = "Please enter valid email";
        document.getElementById("emailError").style.color = "red";
    }
    else{
        document.getElementById("emailError").innerText = "";
    }
    return valid;
}
function gotoproductspage(){
    if(validation()){
        var name = document.getElementById("username").value;
        window.location.href = `./products.html?name=${name}`;
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
    }
}