function validateName()
{
      var name = document.getElementById("firstName").value;

      if(name.length == 0)
      {
        producePrompt("Name is Required", "firstNamePrompt", "red");
        return false;
      }
      if(!name.match(/^[A-Za-z]*$/))
      {
          producePrompt("First Name Please", "firstNamePrompt", "red");
          return false;
      }
      producePrompt("Valid", "firstNamePrompt", "green");
      return true;
}

function validateNameDuo()
{
      var name = document.getElementById("firstNameDuo").value;

      if(name.length == 0)
      {
        producePrompt("Name is Required", "firstNameDuoPrompt", "red");
        return false;
      }
      if(!name.match(/^[A-Za-z]*$/))
      {
          producePrompt("First Name Please", "firstNameDuoPrompt", "red");
          return false;
      }
      producePrompt("Valid", "firstNameDuoPrompt", "green");
      return true;
}

function validateLName()
{
      var lastName = document.getElementById("lastName").value;

      if(lastName.length == 0)
      {
        producePrompt("Name is Required", "lastNamePrompt", "red");
        return false;
      }
      if(!lastName.match(/^[A-Za-z]*$/))
      {
          producePrompt("Last Name Please", "lastNamePrompt", "red");
          return false;
      }
      producePrompt("Valid", "lastNamePrompt", "green");
      return true;
}

function validateLNameDuo()
{
      var lastName = document.getElementById("lastNameDuo").value;

      if(lastName.length == 0)
      {
        producePrompt("Name is Required", "lastNameDuoPrompt", "red");
        return false;
      }
      if(!lastName.match(/^[A-Za-z]*$/))
      {
          producePrompt("Last Name Please", "lastNameDuoPrompt", "red");
          return false;
      }
      producePrompt("Valid", "lastNameDuoPrompt", "green");
      return true;
}

function validateStudent()
{
      var studentNumber = document.getElementById("studentId").value;

      if(studentNumber.length == 0)
      {
        producePrompt("Student number is Required", "studentIdPrompt", "red");
        return false;
      }
      if(!studentNumber.match(/^[0-9]*$/))
      {
          producePrompt("Student number is invalid", "studentIdPrompt", "red");
          return false;
      }
      producePrompt("Valid", "studentIdPrompt", "green");
      return true;
}

function validateStudentDuo()
{
      var studentNumber = document.getElementById("studentIdDuo").value;

      if(studentNumber.length == 0)
      {
        producePrompt("Student number is Required", "studentIdDuoPrompt", "red");
        return false;
      }
      if(!studentNumber.match(/^[0-9]*$/))
      {
          producePrompt("Student number is invalid", "studentIdDuoPrompt", "red");
          return false;
      }
      producePrompt("Valid", "studentIdDuoPrompt", "green");
      return true;
}

function producePrompt(message, promptLocation, color)
{
      document.getElementById(promptLocation).innerHTML = message;
      document.getElementById(promptLocation).style.color = color;
}

function clearFunction()
{
      document.getElementById("solo").checked = false;
      document.getElementById("duet").checked = false;
      document.getElementById("concert").checked = false;
      duetCheck();

      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("studentId").value = "";

      document.getElementById("firstNameDuo").value = "";
      document.getElementById("lastNameDuo").value = "";
      document.getElementById("studentIdDuo").value = "";

      document.getElementById("skill").value = "";
      document.getElementById("instrument").value = "";
      document.getElementById("location").value = "";
      document.getElementById("room").value = "";
      document.getElementById("time").value = "";

      clearWarnings();

      
}

function duetCheck()
{
      if(document.getElementById("duet").checked === true)
      {
            document.getElementById("duoForm").style.display = "block";
      }
      else 
      {
            document.getElementById("duoForm").style.display = "none";
      }
}

function clearWarnings()
   {
      document.getElementById("firstNamePrompt").innerHTML = "";
      document.getElementById("lastNamePrompt").innerHTML = "";
      document.getElementById("studentIdPrompt").innerHTML = "";
      document.getElementById("firstNameDuoPrompt").innerHTML = "";  
      document.getElementById("lastNameDuoPrompt").innerHTML = "";
      document.getElementById("studentIdDuoPrompt").innerHTML = "";
      document.getElementById("performancePrompt").innerHTML = "";
      document.getElementById("skillPrompt").innerHTML = "";  
      document.getElementById("instrumentPrompt").innerHTML = "";
      document.getElementById("locationPrompt").innerHTML = "";
      document.getElementById("roomPrompt").innerHTML = "";
      document.getElementById("timePrompt").innerHTML = "";

   }

function calcFunction() {
      
      
      var isValid = true;

      if(document.getElementById("solo").checked === false && document.getElementById("duet").checked === false 
      && document.getElementById("concert").checked === false)
      {
            producePrompt("*", "performancePrompt", "red");
            isValid = false;
      }

      if(document.getElementById("skill").value === "")
      {
            producePrompt("*", "skillPrompt", "red");
            isValid = false;
      }

      if(document.getElementById("instrument").value === "")
      {
            producePrompt("*", "instrumentPrompt", "red");
            isValid = false;
      }

      if(document.getElementById("location").value === "")
      {
            producePrompt("*", "locationPrompt", "red");
            isValid = false;
      }
      if(document.getElementById("room").value === "")
      {
            producePrompt("*", "roomPrompt", "red");
            isValid = false;
      }
      if(document.getElementById("time").value === "")
      {
            producePrompt("*", "timePrompt", "red");
            isValid = false;
      }




      if(validateName() === false)
      {
            document.getElementById("firstName").focus();
            isValid = false;
            
      }
      if(validateLName() === false)
      {
            document.getElementById("lastName").focus();
            isValid = false;

            
      }
      if(validateStudent() === false)
      {
            document.getElementById("studentId").focus();
            isValid = false;

            
      }
      if(document.getElementById("duet").checked === true)
      {
            if(validateNameDuo() === false)
            {
                  document.getElementById("firstNameDuo").focus();
                  isValid = false;
      
            }
            if(validateLNameDuo() === false)
            {
                  document.getElementById("lastNameDuo").focus();
                  isValid = false;
            }
            if(validateStudentDuo() === false)
            {
                  document.getElementById("studentIdDuo").focus();
                  isValid = false;
      
            }
      }

      if(isValid === true){
            passValueToPhp();
      }

      return isValid;
};

function passValueToPhp(){

      const formSend = new XMLHttpRequest();

      var performanceSend = document.querySelector('input[name = "performance"]:checked').value;
      var firstNameSend = document.getElementById("firstName").value;
      var lastNameSend =  document.getElementById("lastName").value;
      var studentIdSend = document.getElementById("studentId").value;
      var firstNameDuoSend = document.getElementById("firstNameDuo").value;
      var lastNameDuoSend =  document.getElementById("lastNameDuo").value;
      var studentIdDuoSend = document.getElementById("studentIdDuo").value;
      var skillSend = document.getElementById("skill").value;
      var instrumentSend = document.getElementById("instrument").value;
      var locationSend = document.getElementById("location").value;
      var roomSend = document.getElementById("room").value;
      var timeSend = document.getElementById("time").value;


      var studentForm = {
            Performance: performanceSend, 
            FirstName: firstNameSend,
            LastName: lastNameSend,
            Student_ID: studentIdSend,
            DuoFirstName: firstNameDuoSend,
            DuoLastName: lastNameDuoSend,
            DuoStudentId: studentIdDuoSend,
            skill: skillSend,
            instrument: instrumentSend,
            location: locationSend,
            room: roomSend,
            time: timeSend
      };


      var str_json = (JSON.stringify(studentForm))

      formSend.open('POST', 'assign13.php', true);
      formSend.setRequestHeader("Content-type", "application/json")

      formSend.onload = function() {
            alert("response is" + this.responseText)
      };
      alert("Sending");

      formSend.send(str_json);

}

window.addEventListener('load', (event) => {
      const formRead = new XMLHttpRequest();
      formRead.open('GET', 'assign13_read.php', true);
      formRead.onload = function() {
            var jsonData = JSON.parse(formRead.responseText);
            renderJson(jsonData);
      };
      formRead.send();
      


})
var registerStudent = document.getElementById("register");
registerStudent.addEventListener('click', (event) => {
      const formRead = new XMLHttpRequest();
      formRead.open('GET', 'assign13_read.php', true);
      formRead.onload = function() {
            var jsonData = JSON.parse(formRead.responseText);
            renderJson(jsonData);
      };
      formRead.send();
      


})


function renderJson(data){
      var string = "TEST REnderJson";
      var jsonContainer = document.getElementById("jsonInfo");
      
      for (var student in data.students){
            console.log(student);
            for (var property1 in data.students[student]) 
            {   
                  string += "<p>" + data.students[student][property1] + "</p>";
            }
      }

      jsonContainer.insertAdjacentHTML('beforeend', string);
  }
  