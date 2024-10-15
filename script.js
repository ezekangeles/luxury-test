let menuList = document.getElementById("menu-list");

menuList.style.maxHeight = "0px";

function toggleMenu() {
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "500px";
        
       
    }else{
        menuList.style.maxHeight = "0px";
        
    }
}

let messageContainer = document.getElementById("message-container");
let open1 = document.getElementById("book");
let open2 = document.getElementById("contact");
let close = document.getElementById("close");

open1.addEventListener("click",()=>{
    messageContainer.classList.add("message-container-show");
})

open2.addEventListener("click",()=>{
    messageContainer.classList.add("message-container-show");
})

close.addEventListener("click",()=>{
    messageContainer.classList.remove("message-container-show");
})