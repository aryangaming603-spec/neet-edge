const menuBtn=document.getElementById("menuBtn");
const sidebar=document.getElementById("sidebar");

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("show");

});

document.addEventListener("click",(e)=>{

if(!sidebar.contains(e.target) && e.target!==menuBtn){

sidebar.classList.remove("show");

}

});

