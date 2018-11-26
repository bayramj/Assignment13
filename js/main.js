
$(document).ready(function() {

var btn = document.querySelector("#btn");
var price = document.querySelector("#price");
var currency = document.querySelector("#applyCur");
var but1 = document.getElementById("usCur");
var but2 = document.getElementById("EngCur");
var but3 = document.getElementById("EuroCur");

window.onload = function(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if (XHR.readyState == 4 && XHR.status == 200) {
      var amount = JSON.parse(XHR.responseText).bpi.USD.rate;
      price.innerHTML = amount;
    }
  }

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
};

document.getElementById("btn").addEventListener("click", function(){
  console.log("button pressed");
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if (XHR.readyState == 4 && XHR.status == 200) {
      if (but1.checked){
      var amount = JSON.parse(XHR.responseText).bpi.USD.rate;
      var symb = JSON.parse(XHR.responseText).bpi.USD.symbol;
      price.innerHTML = amount;
      currency.innerHTML = symb;
      } else if (but2.checked){
        var amount = JSON.parse(XHR.responseText).bpi.GBP.rate;
        var symb = JSON.parse(XHR.responseText).bpi.GBP.symbol;
        price.innerHTML = amount;
        currency.innerHTML = symb;
      } else {
        var amount = JSON.parse(XHR.responseText).bpi.EUR.rate;
        var symb = JSON.parse(XHR.responseText).bpi.EUR.symbol;
        price.innerHTML = amount;
        currency.innerHTML = symb;
      }
    }
  }
  
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
});

});