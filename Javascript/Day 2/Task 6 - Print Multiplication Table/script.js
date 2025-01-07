var num = document.getElementById("num");
var res = document.getElementById("res");
function table(){
    res.innerHTML="";
    let value = num.value;
    for(let i=1;i<=10;i++){
        res.innerHTML+=value+" x "+i+" = "+value*i+"<br>";
    }
}