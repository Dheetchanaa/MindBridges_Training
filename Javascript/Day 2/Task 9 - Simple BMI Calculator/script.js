var height;
var weight;
function heightvalue(){
    height = parseFloat(prompt("Enter your height in meters"));
}
function weightvalue(){
    weight = parseFloat(prompt("Enter your weight in kg"));
}
function check(){
    let bmi = weight/(height * height)
    alert("Your BMI is :"+ bmi.toFixed(2));
}