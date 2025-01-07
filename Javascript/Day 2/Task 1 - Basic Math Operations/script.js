var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var res = document.getElementById("res");

function operations(){
    res.innerHTML="";
    let value1 = parseFloat(num1.value);
    let value2 = parseFloat(num2.value);
    var add = value1+value2;
    var sub = value1-value2;
    var mul = value1*value2;
    var div = (value1/value2).toFixed(2);
    res.innerHTML="<h3>Sum: </h3>"+ add +"<br><h3>Difference: </h3>"+ sub + "<br><h3>Product: </h3>"+ mul+"<br><h3>Quotient: </h3>"+div;
};