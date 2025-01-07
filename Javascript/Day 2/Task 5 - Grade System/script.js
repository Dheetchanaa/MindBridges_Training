var percentage = document.getElementById("percentage");
var res = document.getElementById("res");
function grade(){
    res.innerHTML="";
    let percent = percentage.value;
    switch(true){
        case percent>=90 && percent<=100:
            res.innerText="Grade : A";
            console.log("A");
            break;
        case percent>=80 && percent<90:
            res.innerText="Grade : B";
            break;
        case percent>=70 && percent<80:
            res.innerHTML="Grade : C";
            break;
        case percent<70:
            res.innerHTML="Grade : F";
            break;
        default:
            console.log("default");
            break;
    }
}