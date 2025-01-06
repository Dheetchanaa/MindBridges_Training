var res = document.getElementById("res");
var arrValues = document.getElementById("arrValues");
let arr = [1,5,2,8,4];
arrValues.textContent=arr;
let max = 0;
for(let i of arr){
    max = Math.max(max,i);
    console.log(max);
}
res.innerHTML="The largest number is : "+max;