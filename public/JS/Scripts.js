
      function validateEmail()
      {
          var regEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z]+\.christuniversity\.in$/;
          var email = document.getElementById('mail').value;
          var error = document.getElementById("error3");
          if (!regEmail.test(email) && email!='')
          {
            error.textContent = "Please enter a valid email";
            document.getElementById("mail").focus();
          }
          else 
          {
            error.textContent = ""
          }
      }

      function validatePhone()
      {
          var regPhone =  /^[0-9]{10}$/;
          var phone = document.getElementById('ph').value;
          var error = document.getElementById("error2");
          if (!regPhone.test(phone) && phone!='')
          {
            error.textContent = "Please enter a valid phone number";
            document.getElementById("ph").focus();
          }
          else 
          {
            error.textContent = ""
          }
      }

      function validateCode()
      {
          var regCode =  /^[0-9]{2}$/;
          var code = document.getElementById('cd').value;
          var error = document.getElementById("error1");
          if (!regCode.test(code) && code!='')
          {
            error.textContent = "Please enter a valid Country Code";
            document.getElementById("cd").focus();
          }
          else 
          {
            error.textContent = ""
          }
      }

      function validatePassword()
      {
        var regpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;
        var passwd = document.getElementById('pass').value;
        var passwd1=document.getElementById('passr').value;
            var error = document.getElementById("error4");
            if (!regpass.test(passwd) && passwd!='')
            {
              error.textContent = "Please enter a strong password";
              document.getElementById("pass").focus();
            }
            else if((!regpass.test(passwd1) && passwd1!='')|| passwd!=passwd1) 
            {
              error.textContent = "Passwords do not match!!";
              
              document.getElementById("passr").focus();
            }
            
            else 
            {
              error.textContent = ""
            }
      }

      function validateName()
      {
          var regName =  /^[a-zA-Z ]{2,30}$/;
          var name = document.getElementById('fn').value;
          var name1=document.getElementById('ln').value;
          var error = document.getElementById("error");
          if (!regName.test(name) && name!='')
          {
            error.textContent = "Please enter a valid first name";
            document.getElementById("fn").value='';
            document.getElementById("fn").focus();
          }

          else if(!regName.test(name1) && name1!='') 
          {
            error.textContent = "Please enter a valid last name";
            document.getElementById("ln").value='';
            document.getElementById("ln").focus();
          }

          else 
          {
            error.textContent = ""
          }
      }

      function play()
      {
           var audio = document.getElementById("audio");
           audio.play();
      }
  
      function getlocation()
      {  
          if(navigator.geolocation)
          {  
              navigator.geolocation.getCurrentPosition(showPosition)  
          }  
          else  
          {  
               alert("Sorry! your browser is not supporting")  
          }
      }    

      function showPosition(position)
      {  
         alert("Your current location is:- \n" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " +    position.coords.longitude + "\nAnd we are operational there !");  
      }
      
      function createCookie(name, value, days) {
      if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          var expires = "; expires="+date.toGMTString();
      }
      else var expires = "";
      document.cookie = name+"="+value+expires+"; path=/";
      }

      function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
      }

      function eraseCookie(name) {
          createCookie(name,"",-1);
      }

      function background(color){
      x= document.getElementById("about");
      x.style.backgroundColor = color;
      createCookie("background-color", color, 365);

      createCookie("background-image", "./public/images/Wave1.png", 365);
      var src1=readCookie("background-image");
      var img = document.getElementById("wave");
      img.src = src1;
      
      }

      function storeValues()  
      {
        createCookie("First Name", document.forms.signup.fn.value,1);
        createCookie("Last Name", document.forms.signup.ln.value,1);
        createCookie("Phone Number", document.forms.signup.ph.value,1);
        alert(document.forms.signup.mail.value);
        sessionStorage.setItem("Email Address", document.forms.signup.mail.value);
        sessionStorage.setItem("Password", document.getElementById("ps").value);
        window.localStorage.setItem("Date of Birth", document.forms.signup.bd.value);
      
      }
        
      window.onbeforeunload  = function() {
        eraseCookie("First Name");
          eraseCookie("Last Name");
          eraseCookie("Phone Number");
      }
      