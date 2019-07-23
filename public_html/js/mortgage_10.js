
 function clearFunction() {
    document.getElementById("amount").value = "";
    document.getElementById("apr").value = "";
    document.getElementById("term").value = "";
 
    document.getElementById("amount").focus(); 
 
 };
 
 
 
 
 function checkAmount(val) {
     if(val < 0 || val == "") {
         document.getElementById("error-Amount").style.visibility = "visible"; 
     } else {
         document.getElementById("error-Amount").style.visibility = "hidden";
     }
   }
 
   function checkApr(val) {
     if(val < 0 || val > 25 || val == "") {
         document.getElementById("error-Apr").style.visibility = "visible"; 
     } else {
         document.getElementById("error-Apr").style.visibility = "hidden";
     }
   }
 
   function checkTerm(val) {
     if(val <= 0 || val >= 41 || val == "") {
         document.getElementById("error-Term").style.visibility = "visible"; 
     } else {
         document.getElementById("error-Term").style.visibility = "hidden";
     }
   }