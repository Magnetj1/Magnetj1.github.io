const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")

const vinster =["ni...","emanuel","imacummm!!"," YOU GOT kys!","gayming setup","cat stealer","A deamon!","a dead cat killer","kys","Walter white","higsenberg","jesse","A EXPLODING nuke","exploding nigger!","sebbes ass","cat ass","the most breedable pokemon","vaporion","The blackest pokemon","jelly dougnut from pokemon","gigga nigga slayer","the pussy slayer","-Chicken .explodes","i walk with a stick i walk with a gun. i shot ni.... for fun(american police)"]

function slumpClick(){
    //console.log(`click${antal_vinster .value}`)

let vinst =`<h3>Dina vinster:</h3>`
let antalv= antal_vinster.value
let int_antalv = parseInt(antalv)

for (i=0; i<int_antalv; i++){
let slumptal = Math.floor(Math.random() *24)

let t_vinst = vinster[slumptal]

vinst += `<p style="font-family:sex_pistols"> ${t_vinst} </p>`
}
svar_div.innerHTML = vinst
}