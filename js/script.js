const result = document.querySelector(".result")

// console.log(result)

const form = document.querySelector("form")

form.addEventListener("focusout",(event)=>{

    event.preventDefault();
    var inputList = document.getElementById("game")
    getGameList(inputList)
})

function getGameList(inputList){

    const select = document.getElementById("listGame")
    
    listGame.innerText = " "
    select.removeChild

    if(inputList.value) {

    fetch("https://api.boardgameatlas.com/api/search?name="+inputList.value+"&limit=100&client_id=NCJEsStGh9")
    .then (response => response.json())

    .then ((data) => {
        select.innerHTML = "<option value='' selected=true disabled =true >Choisir Un Jeux</option>"
        data.games.forEach(game => {

            let option = document.createElement("option")
            select.appendChild(option)
            option.innerText = game.name
            
        });
        // console.log(data)
    })}

    else{

    }


}

const selectGame = document.querySelector("select")
selectGame.addEventListener("change",(event)=>{

    event.preventDefault();
    var selectList = document.getElementById("listGame")
    getGameInfo(selectList)
// console.log(selectGame.value)
})
function getGameInfo(selectList){

    fetch("https://api.boardgameatlas.com/api/search?name="+selectList.value+"&client_id=NCJEsStGh9")
    .then (response => response.json())
    .then ((data) => {

console.log(data['games'][0])

    let div = document.querySelector(".gameInfo")

    let p = document.querySelector(".gameName")
        
    let p1 = document.querySelector(".gameNbJoeur")

    let p2 = document.querySelector(".gameDescription")

    let p3 = document.querySelector(".gameImg")
    
    div.appendChild(p)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)

    document.body.appendChild(div)
        
        p.innerHTML = data['games'][0]['name']
        p1.innerHTML = data['games'][0]['players']
        p2.innerHTML = data['games'][0]['description']
        p3.innerHTML = '<img src=' + data.games[0].image_url + '>'

    })

}

