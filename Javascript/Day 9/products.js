const mainContainer = document.getElementById("mainContainer");
const loginDetails = window.location.search;
const parameters = new URLSearchParams(loginDetails);
const username = parameters.get("name");
document.getElementById("username").innerText="Hello, "+username;
let products = [];
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data =>{
      products = data;
      displayProducts();
  })
function displayProducts(){
    products.forEach(product =>{
        const productCard = `
            <div class="card" style="width: 18rem;">
              <img src="${product.image}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                <h6 class="card-text">${product.title}<br><span class="price">₹${product.price}</span></h6>
                <p class="card-text">
                  <a class="btn btn-primary" href="./productDetails.html?id=${product.id}&username=${username}">View Product</a>
                </p>
              </div>
            </div>`;
        mainContainer.insertAdjacentHTML("beforeend", productCard);
    });
}