class pengar {
constructor(antal,pengsort){

    this.antal = antal
    this.pengsort = pengsort
}




}

/**
 * exchange
 * in:belop som ska växlas, valör på sedel
 * out:antal sedlar eller mint
 */
function exchange(belop,sedel){

return Math.floor(belop/sedel
}

/**
 * getexchangearray()
 * in inbetalning belop
 * out array innehåller antal mynt i var
 */
function getexchangearray(inbetalning,priset){


let antal_mynt = 0
let pengar_tillbaka = 0

sedlar_mynt_array=[]

//500-----------------------
pengar_tillbaka=inbetalning - priset
antal_mynt = exchange(pengar_tillbaka, 500)

console.log(`antal=(antal_mynt)` )
}




const input_pris = document.getElementById("pris")
const input_inbet = document.getElementById("inbet")

const svardiv = document.getElementById("svar_div")

const Kalk = document.getElementById("calc_knapp")
Kalk.addEventListener("click",kalkelclick)
function kalkelclick(e) {
console.log(`click`)

function kalkelclick(e){
let t_pris = parseInt(input_pris.value)
let t_inbet = parseInt(input_inbet.value)
getexchangearray(t_inbet,t_pris)

//console.log(`click`)
}
} 