var num = document.getElementById("num");
var res = document.getElementById("res");
function multiples(){
    res.innerHTML="";
    let number = num.value;
    let index = 0;
    var val = 0;
    while(val<30){
        val = number*index;
        if(val>30){
            break;
        }
        res.innerHTML+=number+"x"+index+"="+val+"<br><br>";
        index++;
    }
}