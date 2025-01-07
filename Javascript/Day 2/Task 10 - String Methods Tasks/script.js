function reverseString(){
    var revText = document.getElementById("revText").value;
    var reverseRes = document.getElementById("reverseRes");
    reverseRes.innerText=revText.split("").reverse().join("");
}

function vowCount(){
    var vowText = document.getElementById("vowText").value;
    var vowCountRes = document.getElementById("vowCountRes");
    var vowels="aeiouAEIOU";
    let count = 0;
    for(let i=0;i<vowText.length;i++){
        if(vowels.includes(vowText.charAt(i))){
            count++;
        }
    }
    vowCountRes.innerText=count;
}

function palin(){
    var palindromText = document.getElementById("palindromText").value;
    var palindromeRes = document.getElementById("palindromeRes");
    var reversed = palindromText.split("").reverse().join("");
    palindromeRes.innerText=palindromText==reversed?true:false;
}

function init(){
    var userName = document.getElementById("userName").value;
    var initialsRes = document.getElementById("initialsRes");
    initialsRes.innerText="";
    var arr = userName.split(" ");
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(i==arr.length-1){
            initialsRes.innerText+=arr[i].charAt(0);
        }
        else{
            initialsRes.innerText+=arr[i].charAt(0)+".";
        }
    }
}

function replaceWord(){
    var sentence = document.getElementById("sentence").value;
    var word1 = document.getElementById("word1").value;
    var word2 = document.getElementById("word2").value;
    var replaceRes = document.getElementById("replaceRes");
    replaceRes.innerText = sentence.replace(word1,word2);
}

function splitSentence() {
    var sentence = document.getElementById("sentence1").value;
    var res = document.getElementById("res1");
    var arr = sentence.split(" ");
    res.innerText = "[";
    for (let i=0; i<arr.length; i++) {
        if (i==arr.length-1) {
            res.innerText+=arr[i]+"]";
        } else {
            res.innerText+=arr[i]+", ";
        }
    }
}

function removeSpaces(){
    var sentence = document.getElementById("sentence2").value;
    var res=document.getElementById("res2");
    var trimmed = sentence.replaceAll(" ","")
    res.innerText=trimmed;
}

function frequency(){
    var sentence=document.getElementById("sentence3").value;
    var letter = document.getElementById("letter").value;
    var res = document.getElementById("res3");
    let count=0;
    for(let i=0;i<sentence.length;i++){
        if(sentence.charAt(i) == letter){
            count++;
        }
    }
    res.innerText=sentence+" has "+count+" "+letter;
}