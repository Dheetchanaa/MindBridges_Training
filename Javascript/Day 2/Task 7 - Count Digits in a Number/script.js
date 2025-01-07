var num = document.getElementById("num");
var res = document.getElementById("res");
function count(){
    res.innerText="";
    let value = parseInt(num.value);
    let counter = 0;
    while(parseInt(value)>0){
        counter++;
        value/=10;
    }
    res.innerText=counter;
}