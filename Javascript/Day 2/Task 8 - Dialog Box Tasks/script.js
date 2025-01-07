alert("Welcome to my website!");
var isConfirm = document.getElementById("isConfirm");
var eligible = document.getElementById("eligible");
function confirmation(){
    let res = confirm("You want to continue!");
    console.log(res);
    isConfirm.innerText=(res==true?"You chose to continue!":"You canceled!");
}
function promptmsg(){
    let res = parseInt(window.prompt("Enter your age!"));
    console.log(typeof(res));
    eligible.innerText=(res>=18?"You are eligible!":"You are not eligible!");
}