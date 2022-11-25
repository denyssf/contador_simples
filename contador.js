const earlyIncrement = document.getElementById("increment");
earlyIncrement.addEventListener("click", incrementNumber);

const earlyDecrement = document.getElementById("decrement");
earlyDecrement.addEventListener("click", decrementNumber);

var number = 0;

function incrementNumber() {
    number = number + 1;
    document.getElementById("currentNumber").innerHTML = number;
    if(number >= 1) { document.getElementById("currentNumber").style.color = "green";} 
    else  if(number == 0){document.getElementById("currentNumber").style.color = "black";}
}

function decrementNumber() {
    number = number - 1;
    document.getElementById("currentNumber").innerHTML = number;
    if(number <= -1) { document.getElementById("currentNumber").style.color = "red";} 
    else if(number == 0){document.getElementById("currentNumber").style.color = "black";}
}
