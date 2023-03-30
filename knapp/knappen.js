
let siffra = 0;

function plusClick(){

//console.log ("click").innerHTML("click")
siffra = siffra + 1
document.getElementById("svar").innerHTML = siffra
}








function MinusClick(){
console.log ("minus-click")
//console.log ("minus-click").innerHTML("minus-click")
document.getElementById("svar").innerHTML = siffra
siffra = siffra - 1
}






function reset(){
    console.log ("reset")
    //console.log ("reset").innerHTML("reset")
    document.getElementById("svar").innerHTML = siffra
    siffra = 0
    }