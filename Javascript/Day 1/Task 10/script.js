var text = document.getElementById("text");
var res = document.getElementById("res");
function reverse(){
    res.textContent="";
    let word = text.value;
    for(let i=word.length-1;i>=0;i--){
        res.textContent+=word.charAt(i);
    }
}