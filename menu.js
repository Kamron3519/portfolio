
   window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",  window.scrollY > 0);
 }); 

 function myFunction(x){
    var navBar = document.querySelector(".nav");
    navBar.classList.toggle("active");
    x.classList.toggle("change");
}

function functionmy(x){
    var navBar = document.querySelector(".nav");
    var change = document.querySelector(".change");
    navBar.classList.remove('active');
    change.classList.remove("change");
}