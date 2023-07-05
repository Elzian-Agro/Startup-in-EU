function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };


  if (surname.value === '' || surname.value == null) {
    alert("Please fill the names !!")
  }
  else if (email.value === '' || email.value == null) {
    alert("Please fill the email !!")
  }
  else if (message.value === '' || message.value == null) {
    alert("Please type your message !!")
  }
  else {
    const serviceID = "service_q1jw7pn";
    const templateID = "template_v35g9e4";

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

      })
      .catch(err => console.log(err));
  }




}