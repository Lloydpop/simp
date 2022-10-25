const ham= document.querySelector(".hambugar")
const nav=document.querySelector(".nav-links")
ham.addEventListener("click", function(){
    ham.classList.toggle("active")
  nav.classList.toggle("active")
})