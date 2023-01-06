// open close menu
let menuBtn = document.getElementById('menu_btn');
let closeBtn = document.getElementById('btn_close');
let menu = document.getElementById("sidebar");
console.log(menuBtn);
menuBtn.addEventListener("click",()=>{
    menu.classList.add("show_sidebar")
})

closeBtn.addEventListener("click",()=>{
    menu.classList.remove("show_sidebar")
})

