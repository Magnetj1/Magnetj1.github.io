const slumptal = math.floor(math.random()*9)+1;
let antalgissningar = 0;



console.log("slumptalet:"+ slumptal)

function gissaTal(){
console.log("click")
let textfelt_gissa = document.getElementById("gissa").value;
let gissa_int = Number(textfelt_gissa);
let vinn = false
let p_svar = document.getElementById("p_svar")
console.log("textfelt=" + textfelt_gissa)

}

if (antalgissningar < 3){
if(slumptal === gissa_int) {


    console.log("rätt" antalgissningar=$(antalgissningar));
    vin=true;
    p_svar.innerhtml='Your a Winner!!'
    antalgissningar = 3
}
else {
console.log("Fel!" antalgissningar=$(antalgissningar))
if (antalgissningar === 2)
p_svar.innerhtml="Loser!"
else
p_svar.innerhtml=$ (textfelt_gissa) är Fel! gissning nr $ (antalgissningar+1) av 3
document.getElementById("gissa").value=""
document.getElementById("gissa").focus()







}

antalgissningar++
else {p_svar.innerhtml="lOOSER!!!§"}

}