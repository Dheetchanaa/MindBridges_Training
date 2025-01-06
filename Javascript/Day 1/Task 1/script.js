var num = document.getElementById("num");
var ans = document.getElementById("ans");
function  oddoreven(){
    var number = num.value;
    if(number%2 == 0){
        ans.textContent = number+" is even";
    }
    else{
        ans.textContent = number+" is odd";
    }
}