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

function validateAddress()
{
      var address = document.getElementById("textA").value;

      if(address.length == 0)
      {
        producePrompt("Address is Required", "textPrompt", "red");
        return false;
      }
      producePrompt("Valid", "textPrompt", "green");
      return true;
}

function validatePhone()
{
      var phoneNumber = document.getElementById("phoneNumber").value;

      if(phoneNumber.length == 0)
      {
        producePrompt("Phone number is Required", "phonePrompt", "red");
        return false;
      }
      if(!phoneNumber.match(/^[0-9]{1,3}[-]{1}[0-9]{1,3}[-]{1}[0-9]{4}$/))
      {
          producePrompt("Phone Number must be in format 555-555-5555", "phonePrompt", "red");
          return false;
      }
      producePrompt("Valid", "phonePrompt", "green");
      return true;
}

function validateNumber()
{
      var cardNumber = document.getElementById("cardNumber").value;

      if(cardNumber.length == 0)
      {
        producePrompt("Card number is Required", "cardPrompt", "red");
        return false;
      }
      if(!cardNumber.match(/^[0-9]{16}$/))
      {
          producePrompt("Invalid Card Number", "cardPrompt", "red");
          return false;
      }
      producePrompt("Valid Card Number", "cardPrompt", "green");
      return true;
}

function validateMonth()
{
      var month = document.getElementById("month").value;
      
      if(month.length == 0)
      {
        producePrompt("Month is Required", "monthPrompt", "red");
        return false;
      }
      if(!month.match(/^[0-9]{1,2}$/))
      {
          producePrompt("Invalid Month Number", "monthPrompt", "red");
          return false;
      }
      if(month < 0 || month > 12)
      {
          producePrompt("Invalid Month Number", "monthPrompt", "red");
          return false;
      }

      producePrompt("Valid Month Number", "monthPrompt", "green");
      return true;
}
function validateYear()
{
      var year = document.getElementById("year").value;
      
      if(year.length == 0)
      {
        producePrompt("Year is Required", "yearPrompt", "red");
        return false;
      }
      if(!year.match(/^[0-9]{4}$/))
      {
          producePrompt("Invalid Year Number Ex: 2019", "yearPrompt", "red");
          return false;
      }
      if(year < 2019)
      {
          producePrompt("Invalid Year Number Ex: 2019", "yearPrompt", "red");
          return false;
      }
      producePrompt("Valid Month Number", "yearPrompt", "green");
      return true;
}


function producePrompt(message, promptLocation, color)
{
      document.getElementById(promptLocation).innerHTML = message;
      document.getElementById(promptLocation).style.color = color;
}


var total = 0;
function addTotal(checkLocation)
{
      var price = 0;
      if(checkLocation == "zero"){
            price = 1350;
      }
      else if(checkLocation == "one"){
            price = 1300;
      }
      else if(checkLocation == "two"){
            price = 500;
      }
      else if(checkLocation == "three"){
            price = 800;
      }

      if(check(checkLocation))
      {
         total = total + price;
         document.getElementById("total").innerHTML = "$" + total.toFixed(2);
      }
      else
      {
            total = total - price;
            document.getElementById("total").innerHTML = "$" + total.toFixed(2);
      }
}


function check(checkLocation) 
  {
      return document.getElementById(checkLocation).checked;
  }

   function uncheck()
   {
      document.getElementById("zero").checked = false;
      document.getElementById("one").checked = false;
      document.getElementById("two").checked = false;
      document.getElementById("three").checked = false;
      document.getElementById("total").innerHTML = "$00.00";
      total = 0;

   }

   function clearWarnings()
   {
      document.getElementById("firstNamePrompt").innerHTML = "";
      document.getElementById("lastNamePrompt").innerHTML = "";
      document.getElementById("textPrompt").innerHTML = "";
      document.getElementById("phonePrompt").innerHTML = "";  
      document.getElementById("monthPrompt").innerHTML = "";
      document.getElementById("yearPrompt").innerHTML = "";
      document.getElementById("cardPrompt").innerHTML = "";
   }

   function clearFunction() {
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("textA").value = "";
      document.getElementById("phoneNumber").value = "";
      document.getElementById("month").value = "";
      document.getElementById("year").value = "";
      document.getElementById("cardNumber").value = "";
      uncheck();
      clearWarnings();
     
      document.getElementById("firstName").focus(); 
     
     };

     function calcFunction() {
      
      var isValid = true;

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
      if(validateAddress() === false)
      {
            document.getElementById("textA").focus();
            isValid = false;

            
      }
      if(validatePhone() === false)
      {
            document.getElementById("phoneNumber").focus();
            isValid = false;

      }
      if(validateYear() === false)
      {
            document.getElementById("year").focus();
            isValid = false;
      }
      if(validateNumber() === false)
      {
            document.getElementById("cardNumber").focus();
            isValid = false;

      }
      if(validateMonth() === false)
      {
            document.getElementById("month").focus();
            isValid = false;

      }
      return isValid;
   };