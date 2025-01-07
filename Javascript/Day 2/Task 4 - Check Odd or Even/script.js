var num = document.getElementById("num")
var res = document.getElementById("res");
function oddoreven(){
    let value = num.value;
    if(value%2==0){
        res.innerText="even";
    }
    else{
        res.innerText="odd";
    }
}