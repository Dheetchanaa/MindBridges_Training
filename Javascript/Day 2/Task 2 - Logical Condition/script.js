var num = document.getElementById("num");
var res = document.getElementById("res");
function check(){
    res.textContent = "";
    let value = num.value;
    if(value>10 && value && value%2==0){
        console.log(true);
        res.textContent = true;
    }
    else{
        console.log(false);
        res.textContent = false;
    }
}