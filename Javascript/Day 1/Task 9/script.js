var res = document.getElementById("res");
for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        res.innerHTML+="FizzBuzz <br>";
    }
    else if(i%3==0 && i%5!=0){
        res.innerHTML+="Fizz <br>";
    }
    else if(i%3!=0 && i%5==0){
        res.innerHTML+="Buzz <br>";
    }
    else{
        res.innerHTML+=i+"<br>";
    }
}