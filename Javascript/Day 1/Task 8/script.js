var num = document.getElementById("num");
var res = document.getElementById("res");
function printstar(){
    res.innerHTML="";
    let number = num.value;
    for(let i=0;i<number;i++){
        for(let j=0;j<i+1;j++){
            res.innerHTML+="* ";
        }
        res.innerHTML+="<br><br>"
    }
}