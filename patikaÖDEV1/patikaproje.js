

let userName = prompt("Lütfen adınızı giriniz!");
let myName = document.querySelector("#myName");
myName.innerHTML = userName;


function myClock() {         
    setTimeout(function() {   
      let d = new Date();
      let n = d.toLocaleTimeString();
      
      let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

      document.getElementById("myClock").innerHTML = n; 
      document.getElementById("myDay").innerHTML = gunler[d.getDay()];
      
      
      myClock();             
    }, 1000)
  }
  myClock();  