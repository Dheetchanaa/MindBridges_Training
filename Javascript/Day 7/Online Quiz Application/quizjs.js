//login
var loginpage = document.getElementById("main");
var quizpage = document.getElementById("quizpage");
var resultpage = document.getElementById("resultpage");
var dashboardpage = document.getElementById("dashboardpage");
var namePattern = /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/;
var emailPattern = /[a-zA-Z0-9_\.\-]+[@][a-z]+[\.]+[a-z]/
var names = "";
var email = "";
var users = [];
function validation1(){ 
    names = document.getElementById("username").value;
    email = document.getElementById("useremail").value;
    let valid = true;
    if(!namePattern.test(names)){
        valid = false;
        document.getElementById("nameError").innerText = "Name should contain only letters and spaces!"
        document.getElementById("nameError").style.color = "red";
    }
    else{
        document.getElementById("nameError").innerText = "";
    }
    if(!emailPattern.test(email)){
        valid = false;
        document.getElementById("emailError").innerText = "Please enter a valid email"
        document.getElementById("emailError").style.color = "red";
    }
    else{
        document.getElementById("emailError").innerText = "";
    }
    return valid;
}
function userDetails(){
    if(validation1()){
        loginpage.style.display = "none";
        quizpage.style.display = "block";
        resultpage.style.display = "none";
        dashboardpage.style.display = "none";
        displayquizpage();
    }
}

//quiz
const questions = [
    {
     question: "Which method is used to remove the last element from an array?",
     options: [
       { answer: "pop()", isCorrect: true },
       { answer: "shift()", isCorrect: false },
       { answer: "push()", isCorrect: false },
       { answer: "unshift()", isCorrect: false }
     ]
   },
     {
       question: "Which method is used to join all elements of an array into a string?",
       options: [
         { answer: "join()", isCorrect: true },
         { answer: "concat()", isCorrect: false },
         { answer: "slice()", isCorrect: false },
         { answer: "splice()", isCorrect: false }
       ]
     },
     {
     question: "Which method creates a new array with all elements that pass a test?",
     options: [
       { answer: "filter()", isCorrect: true },
       { answer: "map()", isCorrect: false },
       { answer: "reduce()", isCorrect: false },
       { answer: "forEach()", isCorrect: false }
     ]
   },
     {
       question: "Which of the following is not a valid JavaScript data type?",
       options: [
         { answer: "Number", isCorrect: false },
         { answer: "String", isCorrect: false },
         { answer: "Float", isCorrect: true },
         { answer: "Boolean", isCorrect: false }
       ]
     },
     {
       question: "What will the following code output: `console.log(3 + '3')`?",
       options: [
         { answer: "33", isCorrect: true },
         { answer: "6", isCorrect: false },
         { answer: "NaN", isCorrect: false },
         { answer: "Error", isCorrect: false }
       ]
     }
   ];
function displayquizpage(){
    var container2 = document.getElementById("container2"); 
    if(container2){
    for(let i=0;i<questions.length;i++){
        let questionhtml = `${i+1}.${questions[i].question}<br><br>`
        for(let j=0;j<questions[i].options.length;j++){
            questionhtml+=`<label for="question${i}">
                        <input type="radio" value="${questions[i].options[j].answer}" name="question${i}">${questions[i].options[j].answer}&nbsp;&nbsp;&nbsp;
                    </label>`
        }
        questionhtml+=`<div id="error${i}"></div>`;
        container2.innerHTML+=`${questionhtml}<br>`;
    }
   }
}
var submittedanswer = [];
function validation2(){
    let valid = true;
    for(let i=0;i<questions.length;i++){
        var options = document.getElementsByName(`question${i}`);
        let checked = false;
        for(let j of options){
            if(j.checked){
                checked = true;
                submittedanswer.push(j.value);
            }
        }
        if(checked == false){
            valid = false;
            document.getElementById(`error${i}`).innerHTML = "Please select the answer!";
            document.getElementById(`error${i}`).style.color = "red";
        }
        else{
            document.getElementById(`error${i}`).innerHTML = "";
        }
    }
    return valid;
}
var correctanswer = [];
function answerSubmit(){
    if(validation2()){
        loginpage.style.display = "none";
        quizpage.style.display = "none";
        resultpage.style.display = "block";
        dashboardpage.style.display = "none";
        for(let i=0;i<questions.length;i++){
            for(let j=0;j<questions[i].options.length;j++){
                if(questions[i].options[j].isCorrect == true){
                    correctanswer.push(questions[i].options[j].answer);
                }
            }
        }
        displayresults();
    }
}

//result
var score = 0;
function displayresults(){
    var results = document.getElementById("results");
if(results){
    for(let i=0;i<questions.length;i++){
        let result1 = `${i+1}.${questions[i].question}<br><br>`
        result1+=`<p class="userans" id="userans${i}">Your answer: ${submittedanswer[i]}</p>`;
        result1+=`<p class="crctans" id="crctans">Correct answer: ${correctanswer[i]}</p>`;
        results.innerHTML+=`${result1}<br>`;
    }
    for(let i=0;i<questions.length;i++){
        if(submittedanswer[i] == correctanswer[i]){
            score++;
            document.getElementById(`userans${i}`).style.color = "green";
        }
        else{
            document.getElementById(`userans${i}`).style.color = "red";
        }
    }
}
}

//Dashboard
function resultSubmit(){
    loginpage.style.display = "none";
    quizpage.style.display = "none";
    resultpage.style.display = "none";
    dashboardpage.style.display = "flex";
    dashboardpage.classList.add("flexContainer4");
    let repeatUsers = false;
    for (let i=0; i<users.length; i++) {
        if (users[i].email == email) {
            users[i].score = score;
            repeatUsers = true;
            break;
        }
    }
    if(!repeatUsers){
        users.push({ name: names, email: email, score: score, rank:[]});
    }
    updateRank();
    var tbody = document.getElementById("tbody");
    for(let i=0;i<users.length;i++){
        tbody.innerHTML+=`<tr><td>${users[i].name}</td><td>${users[i].email}</td><td>${users[i].score}</td><td>${users[i].rank}</td></tr>`
    }
}
function updateRank() {
    users.sort((a,b) => b.score - a.score);
    let rank = 1;
    users[0].rank = 1;
    for(let i=1; i<users.length; i++) {
        if(!(users[i].score == users[i-1].score)){
            users[i].rank = ++rank;
        }
        else{
            users[i].rank = rank;
        }
    }
}
function relogin(){
    names="";
    email = "";
    submittedanswer = [];
    correctanswer = [];
    tbody.innerHTML = "";
    document.getElementById("username").value = "";
    document.getElementById("useremail").value = "";
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    score = 0;
    var container2 = document.getElementById("container2");
    if (container2) {
        container2.innerHTML = "";
    }
    var results = document.getElementById("results");
    if (results) {
        results.innerHTML = "";
    }
    loginpage.style.display = "block";
    quizpage.style.display = "none";
    resultpage.style.display = "none";
    dashboardpage.style.display = "none";
}