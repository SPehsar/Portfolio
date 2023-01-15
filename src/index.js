function sendMail() {  
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_m6nbfk2";
  const templateID = "template_hv91w0j";

    emailjs.send(serviceID, templateID, params)//.then(function(res){
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
      alert("Thank You! Your message was sent successfully!!" + res.status)

    })
    .catch(err=>console.log(err));

}