const mainContainer = document.getElementById("mainContainer");
const detailsLink = window.location.search;
const parameters = new URLSearchParams(detailsLink);
const id = parameters.get("id");
const username = parameters.get("username");
document.getElementById("username").innerText="Hello, "+username;
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data =>{
    const product = data.find(item => item.id == id);
    if(product){
        displayProduct(product);
    }
  })
function displayProduct(product){
    const productCard = `
    <div class="image-container">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="content-container">
                <h4>${product.title}</h4>
                <h5>₹${product.price}</h5>4.5&nbsp;<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                <hr>
                <div class="offers-container">
                    <p><span>Save Extra </span>with 3 offers</p><hr>
                    <p><span>Cashback:</span> Get 5% for Prime members. 3% back for others. Not applicable on EMI orders and Business transactions.</p><hr>
                    <p><span>Partner Offers (2):</span> Buy 3 get 3% off, Buy 4 get 4% off, Buy 5 get 5% off View products See AllPartner Offers (2): Buy 3 get 3% off, Buy 4 get 4% off, Buy 5 get 5% off</p>
                </div><br>
                <div class="content-container-footer">
                    <div class="content-container-footer1">
                        <i class="fa-solid fa-van-shuttle"></i>
                        <a href="">Free Delivery</a>
                    </div>
                    <div class="content-container-footer1">
                        <i class="fa-solid fa-recycle"></i>
                        <a href="">7 days Replacement</a>
                    </div>
                    <div class="content-container-footer1">
                        <i class="fa-solid fa-sack-dollar"></i>
                        <a href="">Cash/Pay on Delivery</a>
                    </div>
                    <div class="content-container-footer1">
                        <i class="fa-solid fa-lock"></i>
                        <a href="">Secure Transaction</a>
                    </div>
                </div><br>
                <p>${product.description}</p>
            </div>
            <div class="side-container">
                <h4>In stock</h4>
                <div class="payment-container">
                    <div>
                        <p>Payment</p>
                        <p>Ships from</p>
                        <p>Sold by</p>
                    </div>
                    <div>
                        <p>Secure transaction</p>
                        <p>Amazon</p>
                        <p>Cocoblu Retail</p>
                    </div>
                </div>
                <button type="button" class="btn btn-warning">Add to Cart</button>
                <button type="button" class="btn btn-danger">Buy Now</button>
            </div>`;
    mainContainer.insertAdjacentHTML("beforeend", productCard);
}
function gotohome(){
    window.location.href = "./login.html"
}