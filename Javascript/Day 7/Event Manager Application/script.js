var table1_tbody = document.getElementById("table1_tbody");
var table2_tbody = document.getElementById("table2_tbody");
var table3_tbody = document.getElementById("table3_tbody");
var table_container1 = document.getElementById("table_container1");
var table_container2 = document.getElementById("table_container2");
var main_total = document.getElementById("main_total");
var tableData = [];
var titleError = document.getElementById("titleError");
var dateError = document.getElementById("dateError");
function validation(){
    let valid = true;
    var event_title = document.getElementById("event_title").value;
    var event_date = document.getElementById("event_date").value;
    if(!event_title){
        valid = false;
        titleError.innerHTML="Please enter the event title!";
        titleError.style.color = "red";
    }
    else{
        titleError.innerHTML="";
    }
    if(!event_date){
        valid = false;
        dateError.innerHTML="Please enter the event date!";
        dateError.style.color = "red";
    }
    else{
        dateError.innerHTML = "";
    }
    return valid;
}
function addEvent(){
    if(validation()){
        var event_title = document.getElementById("event_title").value;
        var event_date = document.getElementById("event_date").value;
        let presentDate = new Date();
        let event_date1 = new Date(event_date);
        let status = "Upcoming";
        if(presentDate>event_date1){
            status = "Past";
        }
        var newRow = {title: event_title, date: event_date, status: status};
        tableData.push(newRow);
        console.log(tableData);
        table1_tbody.innerHTML+=`<tr><td>${event_title}</td><td>${event_date}</td><td>${status}</td><td><div class="actions"><button type="button" class="btn btn-warning" onclick="editevent(event)">Edit</button><button type="button" class="btn btn-danger" onclick="deleteevent(event)">Delete</button></div></td></tr>`
        document.getElementById("event_title").value = "";
        document.getElementById("event_date").value = "";
        }
}
function deleteevent(event){
    var deleteRow = event.target.parentElement.parentElement.parentElement;
    var rowIndex = Array.from(table1_tbody.children).indexOf(deleteRow); 
    tableData.splice(rowIndex,1);
    deleteRow.remove();
    console.log(tableData);
}
var editRow = "";
function editevent(event){
    editRow = event.target.parentElement.parentElement.parentElement;
    var details = editRow.getElementsByTagName("td");
    console.log(details);
    document.getElementById("event_title").value = details[0].innerText;
    document.getElementById("event_date").value = details[1].innerText;
    document.getElementById("eventbtn").innerText = "Update";
    document.getElementById("eventbtn").onclick = updateevent;
}
function updateevent(){
    if(validation()){
        var details = editRow.getElementsByTagName("td");
        details[0].innerText = document.getElementById("event_title").value;
        details[1].innerText = document.getElementById("event_date").value;
        let presentDate = new Date();
        let event_date1 = new Date(details[1].innerText);
        let status = "Upcoming";
        if(presentDate>event_date1){
            status = "Past";
        }
        details[2].innerText = status;
        var rowIndex = Array.from(table1_tbody.children).indexOf(editRow);
        tableData[rowIndex] = {title: document.getElementById("event_title").value, date: document.getElementById("event_date").value, status: status};
        console.log(tableData)
        document.getElementById("event_title").value = "";
        document.getElementById("event_date").value = "";
        document.getElementById("eventbtn").innerText = "Add event";
        document.getElementById("eventbtn").onclick = addEvent;
    }
}
function filterupcoming(){
    main_total.style.display = "none"
    table_container1.style.display = "block";
    table_container2.style.display = "none";
    var filteredRows1 = [];
    filteredRows1 = tableData.filter(row => row.status === "Upcoming");
    table2_tbody.innerHTML = "";
    filteredRows1.forEach(row => {
        table2_tbody.innerHTML += `<tr><td>${row.title}</td><td>${row.date}</td><td>${row.status}</td><td></tr>`;
    });
}
function filterpast(){
    main_total.style.display = "none"
    table_container1.style.display = "none";
    table_container2.style.display = "block";
    var filteredRows2 = [];
    filteredRows2 = tableData.filter(row => row.status === "Past");
    table3_tbody.innerHTML = "";
    filteredRows2.forEach(row => {
        table3_tbody.innerHTML += `<tr><td>${row.title}</td><td>${row.date}</td><td>${row.status}</td><td></tr>`;
    });
}
function gotohomepage(){
    main_total.style.display = "block"
    table_container1.style.display = "none";
    table_container2.style.display = "none";
}