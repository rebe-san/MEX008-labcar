
let loginModal = document.getElementById("login-modal");
let registerModal = document.getElementById("register-modal");
let driverModal = document.getElementById("driver-modal");
let login = document.getElementsByClassName("login");
let register = document.getElementById("register");
let driver = document.getElementsByClassName("driver-button");
let close= document.getElementsByClassName("close");

  login[0].addEventListener("click", () =>{
    loginModal.style.display = "block";  
    console.log("login")
  } )
  login[1].addEventListener("click", () =>{
    loginModal.style.display = "block";  
    console.log("login")
  } )
  register.addEventListener("click", () =>{
    registerModal.style.display = "block";  
    console.log("login")
  } )

  driver[0].addEventListener("click", () =>{
    driverModal.style.display = "block";  
    console.log("login")
  } )
  driver[1].addEventListener("click", () =>{
    driverModal.style.display = "block";  
    console.log("login")
  } )

  close[0].addEventListener("click", () =>{
    loginModal.style.display = "none";
  } )
  
  close[1].addEventListener("click", () =>{
    registerModal.style.display = "none";
  } )
 
  close[2].addEventListener("click", () =>{
    driverModal.style.display = "none";
  } )
 