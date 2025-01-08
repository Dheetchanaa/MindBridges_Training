var num = document.getElementById("num0");
var res = document.getElementById("res0");
function find(){
    res.innerText="";
    let value1 = num.value;
    res.innerText=value1>=0?"Positive":"Negative";
    console.log(value1>=0?"Positive":"Negative");
}