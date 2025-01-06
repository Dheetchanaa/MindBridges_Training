var text = document.getElementById("text");
var res = document.getElementById("res");
function vow(){
    res.textContent="";
    let word = text.value;
    let vow = "aeiouAEIOU";
    let count = 0
    for(let i=0;i<word.length;i++){
        if(vow.includes(word.charAt(i))){
            count++;
        }
    }
    res.textContent="The text contains "+count+" vowels";
}