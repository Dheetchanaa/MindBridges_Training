const array=[{
    buttons:document.getElementById("showall"),
    images:document.getElementById("show-images")
},{
    buttons:document.getElementById("adventure"),
    images:document.getElementById("adventure-images")
},{
    buttons:document.getElementById("strategy"),
    images:document.getElementById("strategy-images")
},{
    buttons:document.getElementById("racing"),
    images:document.getElementById("racing-images")
}]

function changeContent(event){
    array.forEach((arr)=>{
        let word = event.target.textContent
        if(word.includes(arr.buttons.textContent)){
            arr.buttons.classList.add("active");
            arr.images.classList.add("active");
        }
        else{
            arr.buttons.classList.remove("active");
            arr.images.classList.remove("active");
        }
    })
}