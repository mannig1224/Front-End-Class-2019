
var usaBtn = document.getElementById("usa");
usaBtn.addEventListener("click", function(){
    var usaRequest = new XMLHttpRequest();
    usaRequest.open('GET', 'text/usa.txt', true);
    usaRequest.onload = function() {
       var usaData = this.responseText;
       var usaContainer = document.getElementById("usaInfo");
       renderHTML(usaData, usaContainer);
    };
    usaRequest.send();
});


var mexicoBtn = document.getElementById("mexico");
mexicoBtn.addEventListener("click", function(){
    var mexicoRequest = new XMLHttpRequest();
    mexicoRequest.open('GET', 'text/mexico.txt', true);
    mexicoRequest.onload = function() {
       var mexicoData = this.responseText;
       var mexicoContainer = document.getElementById("mexicoInfo");
       renderHTML(mexicoData, mexicoContainer);
    };
    mexicoRequest.send();
});

var russiaBtn = document.getElementById("russia");
russiaBtn.addEventListener("click", function(){
    var russiaRequest = new XMLHttpRequest();
    russiaRequest.open('GET', 'text/russia.txt', true);
    russiaRequest.onload = function() {
       var russiaData = this.responseText;
       var russiaContainer = document.getElementById("russiaInfo");
       renderHTML(russiaData, russiaContainer);
    };
    russiaRequest.send();
});

var canadaBtn = document.getElementById("canada");
canadaBtn.addEventListener("click", function(){
    var canadaRequest = new XMLHttpRequest();
    canadaRequest.open('GET', 'text/canada.txt', true);
    canadaRequest.onload = function() {
       var canadaData = this.responseText;
       var canadaContainer = document.getElementById("canadaInfo");
       renderHTML(canadaData, canadaContainer);
    };
    canadaRequest.send();
});

var submitBtn = document.getElementById("btn");
submitBtn.addEventListener("click", function(){
    var jsonRequest = new XMLHttpRequest();
    var input = document.getElementById("jsonText").value;
    jsonRequest.open('GET', input, true);
    jsonRequest.onload = function() {
        if (jsonRequest.status >= 200 && jsonRequest.status < 400) {
            var jsonData = JSON.parse(jsonRequest.responseText);
            renderJson(jsonData);
          } else {
            console.log("We connected to the server, but it returned an error.");
          }      
    };
    jsonRequest.send();
});


function renderHTML(data, container) {
   var htmlString = "<pre>";

   for (var i=0; i < data.length; i++) {
       htmlString += data[i];
   }
   htmlString += "</pre>";
   console.log(htmlString);

   container.insertAdjacentHTML('beforeend', htmlString);
}

function renderJson(data){
    var string = "";
    var jsonContainer = document.getElementById("jsonInfo");

    for (var i = 0; i < data.student.length; i++) {
        console.log("in the for loop");
        string += "<p>" + data[i] + "</p>";
    }
    console.log("this is the string: " + string);
    jsonContainer.insertAdjacentHTML('beforeend', string);
}