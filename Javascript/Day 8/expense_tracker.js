var totalAmount = 0;
var filterPrize = 0;
document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
document.getElementById("filterExpense").innerText = filterPrize.toFixed(2);
function updateTotalPrice(){
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
}
function updateFilterPrice(){
    document.getElementById("filterExpense").innerText = filterPrize.toFixed(2);
}
var expenseDateDefault = document.getElementById("expensedate");
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const formattedDate = `${yyyy}-${mm}-${dd}`;
console.log(formattedDate);
document.getElementById("expensedate").value = formattedDate;
function validation(){
    let valid = true;
    var expenseName = document.getElementById("expenseName").value;
    if(!expenseName){
        valid = false;
        document.getElementById("expenseNameError").innerText = "Please enter your expense!";
        document.getElementById("expenseNameError").style.color = "red";
    }
    else{
        document.getElementById("expenseNameError").innerText = "";
    }
    var amount = document.getElementById("amount").value;
    if(!amount){
        valid = false;
        document.getElementById("amountError").innerText = "Please enter your expense amount!";
        document.getElementById("amountError").style.color = "red";
    }
    else if(amount<0){
        document.getElementById("amountError").innerText = "Amount should not be negative!";
        document.getElementById("amountError").style.color = "red";
    }
    else{
        document.getElementById("amountError").innerText = "";
    }
    var checkedCategory = "";
    document.getElementsByName("category").forEach(
        input=>{
            if(input.checked){
                checkedCategory = input.value;
            }
        });
    if(checkedCategory.length == 0){
        valid = false;
        document.getElementById("categoryError").innerText = "Please select expense category!";
        document.getElementById("categoryError").style.color = "red";
    }
    else{
        document.getElementById("categoryError").innerText = "";
    }
    return valid;
}
function expenseDetails(){
    if(validation()){
        var allRows = document.getElementById("expenseListTbody").querySelectorAll("tr");
        allRows.forEach(row =>{
            row.style.display = "";
            var lastCell = row.cells[row.cells.length - 1];
            filterPrize+=parseFloat(row.cells[1].innerText);
            var headLastCell = document.getElementById("expenseListThead");
            lastCell.style.display = "";
            headLastCell.style.display = "";
        });
        updateFilterPrice();
        document.getElementById("categorybtnname").innerText = "Filter by category"
        document.getElementById("timelinebtnname").innerText = "Filter by timeline";
        var expenseName = document.getElementById("expenseName").value;
        var amount = document.getElementById("amount").value;
        var expenseCategory = document.getElementsByName("category");
        var checkedCategory = "";
        for(let i of expenseCategory){
            if(i.checked){
                checkedCategory = i.value;
            }
        }
        var expenseDateDefault = document.getElementById("expensedate").value;
        var expenseListTbody = document.getElementById("expenseListTbody");
        expenseListTbody.innerHTML+=`<tr><td>${expenseName}</td><td>${amount}</td><td>${checkedCategory}</td><td>${expenseDateDefault}</td><td><div class="actions"><i class="fa-regular fa-pen-to-square editt" onclick="expenseEdit(event)"></i><i class="fa-solid fa-trash-can deletee" onclick="expenseDelete(event)"></i></div></td></tr>`
        totalAmount+=parseFloat(amount);
        updateTotalPrice();
        filterPrize+=parseFloat(amount);
        updateFilterPrice();
        document.getElementById("expenseName").value = "";
        document.getElementById("amount").value = "";
        document.getElementsByName("category").forEach(input=>input.checked = false);
        document.getElementById("expensedate").value = formattedDate;
    }
}
function expenseDelete(event){
    let deleteRow = event.target.parentElement.parentElement.parentElement;
    var deleteCells = deleteRow.getElementsByTagName("td");
    let amount = deleteCells[1].innerText;
    deleteRow.remove();
    totalAmount-=parseFloat(amount);
    updateTotalPrice();
    filterPrize-=parseFloat(amount)
    updateFilterPrice();
}
var editRow = "";
function expenseEdit(event){
    document.getElementById("expenseNameError").innerText = "";
    document.getElementById("amountError").innerText = "";
    document.getElementById("categoryError").innerText = "";
    editRow = event.target.parentElement.parentElement.parentElement;
    var editCells = editRow.getElementsByTagName("td");
    document.getElementById("expenseName").value = editCells[0].innerText;
    document.getElementById("amount").value = editCells[1].innerText;
    totalAmount-=parseFloat(editCells[1].innerText);
    filterPrize-=parseFloat(editCells[1].innerText);
    var tableCategory = editCells[2].innerText;
    document.getElementsByName("category").forEach(
        input=>{
            if(input.value == tableCategory){
                input.checked = true;
            }
        });
    document.getElementById("expensedate").value = editCells[3].innerText;
    document.getElementById("addbtn").innerText = "Update Expenses";
    document.getElementById("addbtn").onclick = expenseUpdate;
}
function expenseUpdate(){
    if(validation()){
        var allRows = document.getElementById("expenseListTbody").querySelectorAll("tr");
        allRows.forEach(row =>{
            row.style.display = "";
            var lastCell = row.cells[row.cells.length - 1];
            filterPrize+=parseFloat(row.cells[1].innerText);
            var headLastCell = document.getElementById("expenseListThead");
            lastCell.style.display = "";
            headLastCell.style.display = "";
        });
        updateFilterPrice();
        document.getElementById("categorybtnname").innerText = "Filter by category"
        document.getElementById("timelinebtnname").innerText = "Filter by timeline";
        var editCells = editRow.getElementsByTagName("td");
        editCells[0].innerText = document.getElementById("expenseName").value;
        editCells[1].innerText = document.getElementById("amount").value;
        totalAmount+=parseFloat(document.getElementById("amount").value);
        updateTotalPrice();
        filterPrize+=parseFloat(document.getElementById("amount").value)
        updateFilterPrice();
        document.getElementsByName("category").forEach(
            input=>{
                if(input.checked){
                    editCells[2].innerText = input.value;
                }
            });
        editCells[3].innerText = document.getElementById("expensedate").value;
        document.getElementById("expenseName").value = "";
        document.getElementById("amount").value = "";
        document.getElementsByName("category").forEach(input=>input.checked = false);
        document.getElementById("expensedate").value = formattedDate;
        document.getElementById("addbtn").innerText = "Add to expenses";
        document.getElementById("addbtn").onclick = expenseDetails;
    }
}
function searchExpense(){
    filterPrize = 0;
    searchText = document.getElementById("searchText").value;
    var allRows = document.getElementById("expenseListTbody").querySelectorAll("tr");
    allRows.forEach(row =>{
        var rowSearch = row.cells[0].innerText;
        var lastCell = row.cells[row.cells.length - 1];
        var headLastCell = document.getElementById("expenseListThead");
        if(rowSearch.toLowerCase().includes(searchText.toLowerCase())){
            row.style.display = "";
            filterPrize+=parseFloat(row.cells[1].innerText);
            lastCell.style.display = "";
            headLastCell.style.display = ""
        }else{
            row.style.display = "none";
            lastCell.style.display = "";
            headLastCell.style.display = "";
        }
        updateFilterPrice();
        document.getElementById("categorybtnname").innerText = "Filter by category"
        document.getElementById("timelinebtnname").innerText = "Filter by timeline";
    });
}
//filteration
var categorydropdown = document.querySelectorAll('.category-dropdown');
categorydropdown.forEach(item => {item.addEventListener("click",function(event){
    var selectedCategory = event.target.name;
    document.getElementById("categorybtnname").innerText = selectedCategory;
    document.getElementById("timelinebtnname").innerText = "Filter by timeline";
    console.log(selectedCategory);
    var timelinedropdown = document.querySelectorAll('.timeline-dropdown');
    timelinedropdown.forEach(item =>{item.addEventListener("click",function(event){
        var selectedTimeline = event.target.name;
        filterPrize = 0;
        document.getElementById("timelinebtnname").innerText = selectedTimeline;
        console.log(selectedTimeline);
        var allRows = document.getElementById("expenseListTbody").querySelectorAll("tr");
        var currentDate = new Date(); 
        allRows.forEach(row =>{
            var rowCategory = row.cells[2].innerText;
            console.log(rowCategory);
            var expenseDate = new Date(row.cells[3].innerText);
            var lastCell = row.cells[row.cells.length - 1];
            var headLastCell = document.getElementById("expenseListThead");
                if(selectedTimeline == "All time" && selectedCategory == "All category"){
                    row.style.display = "";
                    filterPrize+=parseFloat(row.cells[1].innerText);
                    lastCell.style.display = "";
                    headLastCell.style.display = "";
                }
                else if(selectedTimeline == "All time" && rowCategory == selectedCategory){
                    row.style.display = "";
                    filterPrize+=parseFloat(row.cells[1].innerText);
                    lastCell.style.display = "none";
                    headLastCell.style.display = "none"
                }else if(selectedTimeline == "Last one week" && expenseDate >= new Date(currentDate.setDate(currentDate.getDate() - 7)) && selectedCategory == "All category" || rowCategory == selectedCategory){
                    row.style.display = "";
                    filterPrize+=parseFloat(row.cells[1].innerText);
                    lastCell.style.display = "none";
                    headLastCell.style.display = "none"
                }else if(selectedTimeline == "Last one month" && expenseDate >= new Date(currentDate.setMonth(currentDate.getMonth() - 1))&& selectedCategory == "All category" || rowCategory == selectedCategory){
                    row.style.display = "";
                    filterPrize+=parseFloat(row.cells[1].innerText);
                    lastCell.style.display = "none";
                    headLastCell.style.display = "none"
                }else if(selectedTimeline == "Last six months" && expenseDate >= new Date(currentDate.setMonth(currentDate.getMonth() - 6))&& selectedCategory == "All category" || rowCategory == selectedCategory){
                    row.style.display = "";
                    filterPrize+=parseFloat(row.cells[1].innerText);
                    lastCell.style.display = "none";
                    headLastCell.style.display = "none"
                }else if(selectedTimeline == "Last one year" && expenseDate >= new Date(currentDate.setFullYear(currentDate.getFullYear() - 1))&& selectedCategory == "All category" || rowCategory == selectedCategory){
                    row.style.display = "";
                    filterPrize+=parseFloat(row.cells[1].innerText);
                    lastCell.style.display = "none";
                    headLastCell.style.display = "none"
                }else{
                row.style.display = "none";
            }
            updateFilterPrice();
            document.getElementById("searchText").value = "";
        });
        });
        });
    });
});