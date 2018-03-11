//script.js
function calculate() {
    //stores the value of input
    var billamount = document.getElementById("billamount").value;
    var servicequality = document.getElementById("servicequality").value;
    var numpeople = document.getElementById("totalpeople").value;
    
    //quick validation
    if(billamount === "" || servicequality == 0) {
        window.alert("please enter some value");
    return;
    }


//if people are 0 or 1
if(numpeople == "" || numpeople <= 1) {
    numpeople = 1;
    document.getElementById("each").style.display = "none";

} else {
    document.getElementById("each").style.display = "block";
    }
//do some maths
var total = (billamount * servicequality) / numpeople;
total = Math.round(total * 100) / 100;
total = total.toFixed(2);

//display tip
document.getElementById("totaltip").style.display = "block";
document.getElementById("tip").innerHTML = total;
}
 
//hide the tip amt. on load
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculate(); };
