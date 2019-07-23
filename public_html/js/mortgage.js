// The code

// The formula: c = ((P * r) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) -1)
// @ param p float Amount borrowed
// @ param r interst, not a percentage
// @ param n term in years
function calculateMortgage(p, r, n) {


   // convert this percentage to a decimal
   r = percentToDecimal(r);

   //convert years to months
   n = yearsToMonths(n);

   var monthlyPayments = null;
   
   var pmt = ((p * r) * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) -1);

   return parseFloat(pmt.toFixed(2));


}

function percentToDecimal(percent) {
    return (percent/12)/100;

}

function yearsToMonths(year) {
    return year * 12;
}

function total(pmt) {
    var totalMonthly = document.getElementById("payment");

    totalMonthly.innerText = "$" + pmt;
}

function clearFunction() {
   document.getElementById("amount").value = "";
   document.getElementById("apr").value = "";
   document.getElementById("term").value = "";

   document.getElementById("amount").focus(); 

};



function calcFunction() {

   var amount = document.getElementById("amount").value;
   if(amount < 0 || amount == ""){
    document.getElementById("amount").focus();
    checkAmount(amount);
    return; 
   }
   


   var apr = document.getElementById("apr").value;
   if(apr < 0 || apr > 25 || apr == ""){
    document.getElementById("apr").focus();
    checkApr(apr);
    return; 
   }
   


   var term = document.getElementById("term").value;
   if(term <= 0 || term >= 41 || term == ""){
    document.getElementById("term").focus();
    checkTerm(term);
    return; 
   }



   var pmt = calculateMortgage(amount, apr, term);

   total(pmt);

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