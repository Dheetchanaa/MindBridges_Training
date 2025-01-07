var num = document.getElementById("num");
var res = document.getElementById("res");
function find(){
    res="";
    let value1 = num.value;
    value1>=0?res.innerText="Positive":res.innerText="Negative";
    console.log(value1>=0?"Positive":"Negative");
}