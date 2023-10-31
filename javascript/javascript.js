document.addEventListener("DOMContentLoaded", function () {
   
    const subscribeForm = document.querySelector("form");
    const subscribeButton = document.querySelector(".sub");
  
    
    subscribeForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
      alert("Subscription Successful!"); 
    });
   
  });
  function goToAboutUs() {
    alert("Going to About Us");
    
}
  