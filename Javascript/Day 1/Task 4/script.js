var num = document.getElementById("num");
var res = document.getElementById("res");
function primeornot(){
    res.textContent="";
    let number = num.value;
    if(number == 0 ||number == 1){
        return(res.textContent=number+" is neither prime nor a composite number");
    }
    for(let i=2;i<number;i++){
        if(number%i == 0){
            return(res.textContent=number+" is not a prime");
        }
    }
    return(res.textContent=number+" is prime");
}