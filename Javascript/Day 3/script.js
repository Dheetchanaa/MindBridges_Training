function largest(){
    var text1 = document.getElementById("text1").value;
    var res1 = document.getElementById("res1");
    let arr = text1.split(" ");
    let word = "";
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>word.length){
            word = arr[i];
        }
    }
    res1.innerText = word;
}

function replaceOccurrence(){
    var text2 = document.getElementById("text2").value;
    var res2 = document.getElementById("res2");
    let arr1 = text2.split(" ");
    let seen = new Set();
    res2.innerText="";
    for(let i=0;i<arr1.length;i++){
        if(seen.has(arr1[i].toUpperCase())){
            arr1[i] = "CHANGED";
        }
        seen.add(arr1[i].toUpperCase());
    }
    res2.innerText=arr1.join(" ");
}

function replaceEven(){
    var text3 = document.getElementById("text3").value;
    var res3 = document.getElementById("res3");
    let arr2 = text3.split(" ");
    for(let i=0;i<arr2.length;i++){
        if(i%2==0){
            arr2[i] = "EVEN";
        }
    }
    res3.innerText=arr2.join(" ");
}

function removeDup(){
    var text4 = document.getElementById("text4").value;
    var res4 = document.getElementById("res4");
    let seen1 = new Set();
    let ans = "";
    for(let i=0;i<text4.length;i++){
        if(text4.charAt(i)==" "){
            ans+= "  ";
        }
        else if(!seen1.has(text4.charAt(i))){
            ans+=text4.charAt(i);
        }
        seen1.add(text4.charAt(i));
    }
    res4.textContent = ans;
}