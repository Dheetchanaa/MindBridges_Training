var homePage = document.getElementById("homePage");
var adminPage = document.getElementById("adminPage");
var bookingPage = document.getElementById("bookingPage");
const cars = [
    {
      model: 'Toyota Corolla',
      description: 'A compact and fuel-efficient car, perfect for city drives and long road trips.',
      pricePerDay: 30
    },
    {
      model: 'Honda Civic',
      description: 'A reliable sedan with excellent mileage and a comfortable ride.',
      pricePerDay: 35
    },
    {
      model: 'BMW X5',
      description: 'A luxury SUV that offers a smooth ride with ample space and advanced features.',
      pricePerDay: 60
    },
    {
      model: 'Audi A4',
      description: 'A sleek and stylish sedan with advanced technology and a high-end interior.',
      pricePerDay: 50
    },
    {
      model: 'Ford Mustang',
      description: 'A powerful sports car that combines thrilling performance with an iconic design.',
      pricePerDay: 80
    },
    {
      model: 'Chevrolet Malibu',
      description: 'A midsize sedan with a comfortable ride, spacious interior, and modern features.',
      pricePerDay: 40
    },
    {
      model: 'Tesla Model 3',
      description: 'An electric car offering top-notch performance, cutting-edge technology, and zero emissions.',
      pricePerDay: 100
    },
    {
      model: 'Jeep Wrangler',
      description: 'A rugged and durable SUV, perfect for off-road adventures and outdoor enthusiasts.',
      pricePerDay: 70
    }
  ];

// Home page
var available_cars = document.getElementById("available_cars");
for(let i=0;i<cars.length;i++){
    available_cars.innerHTML+=`<div class="car_container"><h5>Model: ${cars[i].model}</h5><h5>Desciption: ${cars[i].description}</h5><h6>Price per day: ${cars[i].pricePerDay}</h6><button type="button" class="btn btn-success bookbtn" onclick = "gotoBookingPage(event)">Book now</button></div><br><br>`
}  

//admin page
function gotoadmin(){
    homePage.style.display = "none";
    adminPage.style.display = "block";
    bookingPage.style.display = "none";
}
function addCarValidation(){
    let valid = true;
    var model = document.getElementById("model");
    var description = document.getElementById("floatingTextarea");
    var price = document.getElementById("price");
    var modelError = document.getElementById("modelError");
    var desciptionError = document.getElementById("descriptionError");
    var priceError = document.getElementById("priceError");
    if(!model.value){
        modelError.innerText="Please enter the car model!";
        modelError.style.color = "red";
        valid=false;
    }
    else{
        modelError.innerText="";
    }
    console.log(description.value);
    if(!description.value){
        desciptionError.innerText="Please enter the desciption!";
        desciptionError.style.color = "red";
        valid=false;
    }
    else{
        desciptionError.innerText="";
    }
    if(!price.value){
        priceError.innerText="Please enter the price of the car!";
        priceError.style.color = "red";
        valid=false;
    }
    else{
        priceError.innerText="";
    }
    return valid;
}
function addCar(){
    if(addCarValidation()){
        var model = document.getElementById("model");
        var description = document.getElementById("floatingTextarea");
        var price = document.getElementById("price");
        var tbody = document.getElementById("tbody");
        tbody.innerHTML+=`<tr><td>${model.value}</td><td>${description.value}</td><td>${price.value}</td><td><button type="button" class="btn btn-success" onclick="removeRow(event)">Remove</button></td></tr>`
        document.getElementById("model").value = "";
        document.getElementById("floatingTextarea").value = "";
        document.getElementById("price").value = "";
    }
}
function removeRow(event){
  var deleteButton = event.target;
  var deleteRow = deleteButton.parentElement.parentElement;
  deleteRow.remove();
}
function addtoavailable(){
  if(tbody.innerText == ""){
    alert("please enter atleast one car detail!")
  }
  else{
    var rows = tbody.getElementsByTagName("tr");
    var row_cars = [];
    for(let i=0;i<rows.length;i++){
      var row_car = {};
      var row_cells = rows[i].getElementsByTagName("td");
      row_car.model = row_cells[0].innerText;
      row_car.description = row_cells[1].innerText;
      row_car.pricePerDay = row_cells[2].innerText;
      row_cars.push(row_car);
    }
    for(let i=0;i<row_cars.length;i++) {
      available_cars.innerHTML+=`<div class="car_container"><h5>Model: ${row_cars[i].model}</h5><h5>Description: ${row_cars[i].description}</h5><h6>Price per day: ${row_cars[i].pricePerDay}</h6><button type="button" class="btn btn-success bookbtn" onclick = "gotoBookingPage(event)">Book now</button></div><br><br>`;
    }
    homePage.style.display = "block";
    adminPage.style.display = "none";
    bookingPage.style.display = "none";
  }
}
var car_details_container = "";
function gotoBookingPage(event){
    homePage.style.display = "none";
    adminPage.style.display = "none";
    bookingPage.style.display = "block";
    bookingPage.classList.add("center");
    var car_details = event.target.parentElement;
    console.log(car_details);
    car_details_container = document.getElementById("car_details");
    var main_details = car_details.querySelectorAll('h5,h6');
    for (let i=0;i<main_details.length;i++) {
      car_details_container.innerHTML+=main_details[i].outerHTML;
    }
}
var startdateError = document.getElementById("startDateError");
var enddateError = document.getElementById("endDateError");
var startDate, endDate;
function validationbookcar() {
  let valid = true;
  startdateError.innerHTML = "";
  enddateError.innerHTML = "";
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  if (startdate == "") {
    startdateError.innerHTML = "Please enter the start date!";
    startdateError.style.color = "red";
    valid = false;
  }
  if (enddate == "") {
    enddateError.innerHTML = "Please enter the end date!";
    enddateError.style.color = "red";
    valid = false;
  }
  var presentdate = new Date();
  startdate = new Date(startdate);
  enddate = new Date(enddate);
  if (startdate < presentdate) {
    startdateError.innerHTML = "Start date cannot be in the past!";
    startdateError.style.color = "red";
    valid = false;
  }
  if (enddate < startdate) {
    enddateError.innerHTML = "End date cannot be before start date!";
    enddateError.style.color = "red";
    valid = false;
  }
  startDate = startdate;
  endDate = enddate
  return valid;
}
function bookcarnow(){
  if(validationbookcar()){
    var bookingresult = document.getElementById("bookingresult");
    let daysinmilliseconds = endDate-startDate;
    let days = daysinmilliseconds / (1000*3600*24);
    console.log(car_details_container);
    let priceofcar = car_details_container.querySelector('h6');
    let priceText = priceofcar.textContent.split(":");
    let priceperday = (days+1)*priceText[1];
    bookingresult.innerHTML=`<h4>Your booking is confirmed!</h4>${car_details_container.innerHTML}<h6>Start date: ${startDate.getDate()}/${startDate.getMonth()+1}/${startDate.getFullYear()}</h6><h6>End date: ${endDate.getDate()}/${endDate.getMonth()+1}/${endDate.getFullYear()}</h6><h6>Total Price: ${priceperday}</h6>`;
  }
}
function gotohomepage(){
  homePage.style.display = "block";
  adminPage.style.display = "none";
  bookingPage.style.display = "none";
  bookingresult.innerHTML= "";
  car_details_container.innerHTML = "";
}