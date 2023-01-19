function sendMail() {  
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "";
  const templateID = "";

    emailjs.send(serviceID, templateID, params)//.then(function(res){
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
      alert("Thank You! Your message was sent successfully!!" + res.status)
      document.getElementById("mainFrameOne").style.display="none"; 
      document.getElementById("mainFrameTwo").style.display="block";
    })
    .catch(err=>console.log(err));

}