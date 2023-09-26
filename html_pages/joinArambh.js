//for navbar
    const toggleButton= document.getElementById('nav-toggle');
    const navLinks = document.getElementById('navbar');

    toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active')
    })
//navbar ends
      function sendEmail(){
           var yearSelect = document.getElementById("year");
           var selectedYear = yearSelect.options[yearSelect.selectedIndex].value;

             Email.send({
              Host : "smtp.elasticemail.com",
              Username : "amant6393@gmail.com",
              Password : "56B9F16CA8C8137F0871A440454AEA643D9A",
              To : 'rajput412287@gmail.com',
              From :"amant6393@gmail.com",
              Subject : "to join arambh",
              Body : "Name:" + document.getElementById('fullName').value
                    + "<br>Email: "+ document.getElementById("email").value
                    + "<br>Year: " +selectedYear 
                    + "<br>Watsapp number: "+ document.getElementById("whatsapp").value
                    + "<br>phone number: "+ document.getElementById("phone").value
                    + "<br>skills: "+ document.getElementById("skills").value
           }).then(
          message => alert("your message has been sent successfully")
          );
      }
