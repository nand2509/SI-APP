function ci(){
    var p = document.getElementById("p").value;
    var t = document.getElementById("t").value;
    var r = document.getElementById("r").value;
    var amount = p*(Math.pow(1+r/100,t));
  var ci = amount - p;
  document.getElementById("res").innerHTML="Amount : "+amount.toFixed(2)+ "</br>Compound Interest : "+ci.toFixed(2);
        }