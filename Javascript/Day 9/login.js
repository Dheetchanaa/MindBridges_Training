function validation(){
    let valid = true;
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    if(!name){
        valid=false;
        document.getElementById("nameError").innerText = "Please enter your name";
        document.getElementById("nameError").style.color = "red";
    }
    else{
        document.getElementById("nameError").innerText = "";
    }
    if(!email){
        valid=false;
        document.getElementById("emailError").innerText = "Please enter your email";
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