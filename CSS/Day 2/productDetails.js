var descriptionContent = document.getElementById("descriptionContent");
var reviewsContent = document.getElementById("reviewsContent");
var description = document.getElementById("description");
var reviews = document.getElementById("reviews");
description.style.color="#0071f8";
function contentChange(event){
    var word = event.target.textContent;
    if(word.includes("Description")){
        description.style.color="#0071f8";
        reviews.style.color="black";
        descriptionContent.classList.add("active");
        reviewsContent.classList.remove("active");
    }
    else{
        reviews.style.color="#0071f8";
        description.style.color="black"
        reviewsContent.classList.add("active");
        descriptionContent.classList.remove("active");
    }
}