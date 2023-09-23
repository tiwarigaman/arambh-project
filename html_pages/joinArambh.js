//for navbar
    const toggleButton= document.getElementById('nav-toggle');
    const navLinks = document.getElementById('navbar');

    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active')
    })
//navbar ends

      function sendEmail(){
             Email.send({
              Host : "smtp.elasticemail.com",
              Username : "amant6393@gmail.com",
              Password : "56B9F16CA8C8137F0871A440454AEA643D9A",
              To : 'arambh.community@gmail.com',
              From :document.getElementById('email').value,
              Subject : "to join arambh",
              Body : "Name:" + document.getElementById('fullName').value
                    + "<br>Email: "+ document.getElementById("email").value
                    + "<br>Year: "+ document.getElementById("year").valu
                    + "<br>Watsapp number: "+ document.getElementById("whatsapp").value
                    + "<br>phone number: "+ document.getElementById("phone").value
                    + "<br>skills: "+ document.getElementById("skills").value
           }).then(
          message => alert("your message has been sent successfully")
          );
         }
