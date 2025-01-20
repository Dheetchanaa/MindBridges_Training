const employees = [ 
    { id: 1, name: "John", age: 28, department: "HR" }, 
    { id: 2, name: "Jane", age: 34, department: "Finance" }, 
    { id: 3, name: "Mike", age: 25, department: "IT" }, 
    { id: 4, name: "Emma", age: 30, department: "Marketing" },
    { id: 5, name: "Chris", age: 40, department: "Operations" },
    { id: 6, name: "Sophia", age: 29, department: "HR" },
    { id: 7, name: "Daniel", age: 32, department: "Finance" }, 
    { id: 8, name: "Olivia", age: 27, department: "IT" }, 
    { id: 9, name: "Liam", age: 35, department: "Sales" }, 
    { id: 10, name: "Noah", age: 26, department: "Logistics" }, 
    ];
var table1 = document.getElementById("table1");
console.log(Object.keys(employees[0]));
var keys = Object.keys(employees[0]);
var headings ="<tr>";
for(let i=0;i<keys.length;i++){
    headings+="<th>"+keys[i]+"</th>";
}
headings+="</tr>"
table1.innerHTML+=headings;
for(let i=0;i<employees.length;i++){
    console.log(employees[i]);
    let row = "<tr>";
    row+="<td>"+employees[i].id+"</td><td>"+employees[i].name+"</td><td>"+employees[i].age+"</td><td>"+employees[i].department+"</td></tr>";
    table1.innerHTML+=row;
}

const data = [ 
    { id: 1, name: "John", tasks: [ { taskId: 101, description: "Complete report", status: "Pending" }, { taskId: 102, description: "Review code", status: "Completed" }, ], }, 
    { id: 2, name: "Jane", tasks: [ { taskId: 103, description: "Prepare slides", status: "In Progress" }, { taskId: 104, description: "Team meeting", status: "Pending" }, ], }, ];
var table2 = document.getElementById("table2");
var headings1 = "<tr><th>Name</th><th>Description</th><th>Status</th></tr>"
table2.innerHTML+=headings1;
for(let i=0;i<data.length;i++){
    console.log(data[i].tasks.length);
    for(let j=0;j<data[i].tasks.length;j++){
        let row = "<tr>"
        row+="<td>"+data[i].name+"</td><td>"+data[i].tasks[j].description+"</td><td>"+data[i].tasks[j].status+"</td>";
        row+="</tr>"
        table2.innerHTML+=row;
    }
}