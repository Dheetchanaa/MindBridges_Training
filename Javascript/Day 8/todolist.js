var total_score = document.getElementById("total_score");
let total_points = 0;
total_score.innerText=total_points;
function updateTotalScore(){
    if(total_points>0)
    total_score.innerText=total_points;
    else{
        total_points = 0;
        total_score.innerText=total_points;
    }
}
function validation(){
    let valid = true;
    var taskTitle = document.getElementById("taskTitle").value;
    var taskDescription = document.getElementById("floatingTextarea").value;
    var taskEstimateTime = document.getElementById("taskEstimateTime").value;
    if(!taskTitle){
        valid=false;
        document.getElementById("taskTitleError").innerText = "Please enter the task title!";
        document.getElementById("taskTitleError").style.color = "red";
    }
    else{
        document.getElementById("taskTitleError").innerText = "";
    }
    if(!taskDescription){
        valid=false;
        document.getElementById("taskDescriptionError").innerText = "Please enter the task description!";
        document.getElementById("taskDescriptionError").style.color = "red";
    }
    else{
        document.getElementById("taskDescriptionError").innerText = "";
    }
    if(!taskEstimateTime){
        valid=false;
        document.getElementById("taskDateError").innerText = "Please select the estimate time!";
        document.getElementById("taskDateError").style.color = "red";
    }
    else{
        document.getElementById("taskDateError").innerText = "";
    }
    return valid;
}
function addtodo() {
    if (validation()) {
        document.getElementById("total_points_full").style.display="block";
        var allTasks = document.querySelectorAll(".list-items-container");
        allTasks.forEach(container =>{
            container.style.display = "";
            container.querySelector(".btn-warning").classList.remove("disabled");
            container.querySelector(".btn-danger").classList.remove("disabled");
        });
        document.getElementById("statusbtnname").innerText = "Filter by status"
        document.getElementById("timelinebtnname").innerText = "Filter by timeline";
        document.getElementById("form-container").style.display = "none";
        document.getElementById("list-container").style.display = "block";
        const listitems = document.getElementById("list-items");
        const taskTitle = document.getElementById("taskTitle").value;
        const taskDescription = document.getElementById("floatingTextarea").value;
        const taskEstimateTime = new Date(document.getElementById("taskEstimateTime").value);
        const currentDate = new Date();
        const timeDifference = taskEstimateTime.getTime() - currentDate.getTime();
        const daysNeeded = Math.floor(timeDifference / (1000 * 3600 * 24));
        const year = taskEstimateTime.getFullYear();
        const month = String(taskEstimateTime.getMonth() + 1).padStart(2, '0');
        const day = String(taskEstimateTime.getDate()).padStart(2, '0');
        const hours = taskEstimateTime.getHours();
        const minutes = String(taskEstimateTime.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedDate = `${month}-${day}-${year} ${hours % 12 || 12}:${minutes} ${ampm}`;
        const taskId = `task-${Date.now()}`;
        const taskHTML = `<div class="list-items-container" data-estimate-time="${taskEstimateTime}"><div class="list-items-container-header"><h5><span id="task_title">${taskTitle}</span></h5><p class="timer">00:00:00:00</p></div><p><span id="task_description">${taskDescription}</span></p><p>Estimation: <span id="formatted_date">${formattedDate}</span></p><p>Days needed: ${daysNeeded}</p><span id="completionRate"></span><div class="container-buttons"><button type="button" class="btn btn-primary button2" onclick="startTimer(event)">Start now</button><button type="button" class="btn btn-success disabled" onclick="stopTimer(event)">Mark as complete</button><button type="button" class="btn btn-warning button2" onclick="edittodo(event)">Edit</button><button type="button" class="btn btn-danger button1" onclick="deletetodo(event)">Delete</button></div></div>`;
        listitems.insertAdjacentHTML('beforeend', taskHTML);
        document.getElementById("taskTitle").value = "";
        document.getElementById("floatingTextarea").value = "";
        document.getElementById("taskEstimateTime").value = "";
    }
}
function startTimer(event) {
    const container = event.target.parentElement.parentElement;
    const timerElement = container.querySelector(".timer");
    const formattedDate = container.querySelector("#formatted_date").textContent;
    const taskEstimateTime = new Date(formattedDate);
    container.setAttribute("data-start-time", new Date());
    const intervalId = setInterval(() => {
        const currentTime = new Date();
        const timeRemaining = taskEstimateTime - currentTime;
        container.remainingTime = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(intervalId);
            container.querySelector(".btn-success").textContent = "Failed";
            total_points -= 2;
            updateTotalScore();
            container.intervalId = null;
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            timerElement.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);
    container.intervalId = intervalId;
    event.target.disabled = true;
    container.querySelector(".btn-success").classList.remove("disabled");
}

function stopTimer(event) {
    const container = event.target.closest(".list-items-container");
    const intervalId = container.intervalId;
    if (intervalId) {
        clearInterval(intervalId);
        container.querySelector(".btn-success").textContent = "Completed";
        container.intervalId = null;
        const taskEstimateTime = new Date(container.querySelector("#formatted_date").textContent);
        const taskStartTime = new Date(container.getAttribute("data-start-time"));
        const elapsedTime = new Date() - taskStartTime;
        const totalEstimatedTime = taskEstimateTime - taskStartTime;
        const completionRate = (elapsedTime / totalEstimatedTime) * 100;
        container.querySelector("#completionRate").textContent = `Completion Rate: ${Math.round(completionRate)}%`;
        total_points += 5;
        updateTotalScore();
    }
    event.target.classList.add("disabled");
}
var editRow = "";
function edittodo(event){
    document.getElementById("taskTitleError").innerText = "";
    document.getElementById("taskDescriptionError").innerText = "";
    document.getElementById("taskDateError").innerText = "";
    editRow = event.target.parentElement.parentElement;
    document.getElementById("taskTitle").value = editRow.querySelector("#task_title").innerText;
    document.getElementById("floatingTextarea").value = editRow.querySelector("#task_description").innerText;
    let formattedDate = editRow.querySelector("#formatted_date").innerText;
    let taskEstimateTime = new Date(formattedDate);
    let year = taskEstimateTime.getFullYear();
    let month = String(taskEstimateTime.getMonth() + 1).padStart(2, '0');
    let day = String(taskEstimateTime.getDate()).padStart(2, '0');
    let hours = String(taskEstimateTime.getHours()).padStart(2, '0');
    let minutes = String(taskEstimateTime.getMinutes()).padStart(2, '0');
    let formattedDateString = `${year}-${month}-${day}T${hours}:${minutes}`;
    document.getElementById("taskEstimateTime").value = formattedDateString;
    document.getElementById("addbtn").innerText = "Update todo";
    document.getElementById("addbtn").onclick = updatetodo;
    document.getElementById("form-container").style.display = "flex";
    document.getElementById("list-container").style.display = "none";
}
function updatetodo(){
    if(validation()){
        document.getElementById("total_points_full").style.display="block";
        var allTasks = document.querySelectorAll(".list-items-container");
        allTasks.forEach(container =>{
            container.style.display = "";
            container.querySelector(".btn-warning").classList.remove("disabled");
            container.querySelector(".btn-danger").classList.remove("disabled");
        });
        document.getElementById("statusbtnname").innerText = "Filter by status"
        document.getElementById("timelinebtnname").innerText = "Filter by timeline";
        let oldEstimateTime = new Date(editRow.querySelector("#formatted_date").innerText);
        const completeButton = editRow.querySelector(".btn-success");
        editRow.remove();
        document.getElementById("form-container").style.display = "none";
        document.getElementById("list-container").style.display = "block";
        var listitems = document.getElementById("list-items");
        var taskTitle = document.getElementById("taskTitle").value;
        var taskDescription = document.getElementById("floatingTextarea").value;
        var taskEstimateTime = new Date(document.getElementById("taskEstimateTime").value);
        var currentDate = new Date();
        var timeDifference = taskEstimateTime.getTime()-currentDate.getTime();
        var daysNeeded = (timeDifference/(1000 * 3600 * 24));
        daysNeeded = Math.floor(daysNeeded);
        let year = taskEstimateTime.getFullYear();
        let month = String(taskEstimateTime.getMonth()+1).padStart(2,'0');
        let day = String(taskEstimateTime.getDate()).padStart(2,'0');
        let hours = taskEstimateTime.getHours();
        let minutes = String(taskEstimateTime.getMinutes()).padStart(2,'0');
        let ampm = hours>= 12?'pm':'am';
        hours = hours%12||12;
        let formattedDate = `${month}-${day}-${year} ${hours}:${minutes} ${ampm}`;
        listitems.innerHTML+=`<div class="list-items-container"><div class="list-items-container-header"><h5><span id="task_title">${taskTitle}</span></h5><p class="timer">00:00:00:00</p></div><p><span id="task_description">${taskDescription}</span></p><p>Estimation: <span id="formatted_date">${formattedDate}</span></p><p>Days needed: ${daysNeeded}</p><span id="completionRate"></span><div class="container-buttons"><button type="button" class="btn btn-primary button2" onclick="startTimer(event)">Start now</button><button type="button" class="btn btn-success disabled" onclick="stopTimer(event)">Mark as complete</button><button type="button" class="btn btn-warning button2" onclick="edittodo(event)">Edit</button><button type="button" class="btn btn-danger button1" onclick="deletetodo(event)">Delete</button></div></div>`
        if(completeButton.textContent == "Mark as complete"){
            if (taskEstimateTime > oldEstimateTime) {
                total_points -= 2;
            } else if (taskEstimateTime < oldEstimateTime) {
                total_points += 5;
            }
            updateTotalScore();
        }
        document.getElementById("taskTitle").value = "";
        document.getElementById("floatingTextarea").value = "";
        document.getElementById("taskEstimateTime").value = "";
    }
}
function deletetodo(event){
    const container = event.target.closest(".list-items-container");
    const intervalId = container.intervalId;
    const completeButton = container.querySelector(".btn-success");
    if(completeButton.textContent == "Mark as complete"){
        if(intervalId){
            total_points-=2;
        }
        updateTotalScore();
    }
    let deleteRow = event.target.parentElement.parentElement;
    deleteRow.remove();
}
function gotohome(){
    document.getElementById("form-container").style.display = "flex";
    document.getElementById("list-container").style.display = "none";
}
//filteration
var statusdropdown = document.querySelectorAll('.status-dropdown');
statusdropdown.forEach(item => {item.addEventListener("click",function(event){
    var selectedStatus = event.target.name;
    document.getElementById("statusbtnname").innerText = selectedStatus;
    document.getElementById("timelinebtnname").innerText = "Select Timeline";
    console.log(selectedStatus);
    var timelinedropdown = document.querySelectorAll('.timeline-dropdown');
    timelinedropdown.forEach(item =>{item.addEventListener("click",function(event){
        var selectedTimeline = event.target.name;
        filterPrize = 0;
        document.getElementById("timelinebtnname").innerText = selectedTimeline;
        var allTasks = document.querySelectorAll(".list-items-container");
        var currentDate = new Date(); 
        allTasks.forEach(container =>{
            var taskStatus = container.querySelector('.btn-success').textContent;
            var taskEstimationDate = new Date(container.querySelector('#formatted_date').innerText);
            if(selectedTimeline == "All time" && selectedStatus == "All status"){
                container.style.display = "";
                document.getElementById("total_points_full").style.display="block";
                container.querySelector(".btn-warning").classList.remove("disabled");
                container.querySelector(".btn-danger").classList.remove("disabled");
            }
            else if(selectedTimeline == "All time" && taskStatus == selectedStatus){
                container.style.display = "";
                document.getElementById("total_points_full").style.display="none";
                container.querySelector(".btn-warning").classList.add("disabled");
                container.querySelector(".btn-danger").classList.add("disabled");
            }else if(selectedTimeline == "Last one week" && taskEstimationDate >= new Date(currentDate.setDate(currentDate.getDate() - 7)) && selectedStatus == "All status" || taskStatus == selectedStatus){
                container.style.display = "";
                document.getElementById("total_points_full").style.display="none";
                container.querySelector(".btn-warning").classList.add("disabled");
                container.querySelector(".btn-danger").classList.add("disabled");
            }else if(selectedTimeline == "Last one month" && taskEstimationDate >= new Date(currentDate.setMonth(currentDate.getMonth() - 1))&& selectedStatus == "All status" || taskStatus == selectedStatus){
                container.style.display = "";
                document.getElementById("total_points_full").style.display="none";
                container.querySelector(".btn-warning").classList.add("disabled");
                container.querySelector(".btn-danger").classList.add("disabled");
            }else if(selectedTimeline == "Last six months" && taskEstimationDate >= new Date(currentDate.setMonth(currentDate.getMonth() - 6))&& selectedStatus == "All status" || taskStatus == selectedStatus){
                container.style.display = "";
                document.getElementById("total_points_full").style.display="none";
                container.querySelector(".btn-warning").classList.add("disabled");
                container.querySelector(".btn-danger").classList.add("disabled");
            }else if(selectedTimeline == "Last one year" && taskEstimationDate >= new Date(currentDate.setFullYear(currentDate.getFullYear() - 1))&& selectedStatus == "All status" || taskStatus == selectedStatus){
                container.style.display = "";
                document.getElementById("total_points_full").style.display="none";
                container.querySelector(".btn-warning").classList.add("disabled");
                container.querySelector(".btn-danger").classList.add("disabled");
            }else{
                container.style.display = "none";
            }
        });
        });
    });
    });
});