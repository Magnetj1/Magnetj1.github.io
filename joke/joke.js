const jokebutt = document.getElementById("jokebutton")
jokebutt.addEventListener("click",getjoke)

const pjoke = document.getElementById("pjoke")


function getjoke(e){
    alert("Click")
}
fetch(
    `https://v2.jokeapi.dev/joke/Any?blacklistFlags=&type=single`,
    {
        method: "GET",
        headers: new Headers({
            Accept: "application/json"
        })
    }
)
    .then(res => res.json())
    .then(response => {
        
        //console.log(`${response.joke}`)
        let joke = response.joke
        p_joke.innerHTML = joke;

        
    })
    .catch(error => console.log(error));

