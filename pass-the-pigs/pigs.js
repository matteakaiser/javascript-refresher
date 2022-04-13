let currentPlayer = 0
function handleClick(id) {
    console.log(id)
    if (id == "player0PassButton") {
        console.log("Pass")
       switchColors()
    } else {
        console.log("Roll")
    }
    
}
function switchColors() {
    let player0Card = document.getElementById("player0")
    let player1Card = document.getElementById("player1")
    let player2Card = document.getElementById("player2")
    console.log (player0Card)
    player0Card.setAttribute("class","w3-card w3-container w3-light-gray w3-round-large")
    player1Card.setAttribute("class","w3-card w3-container w3-dark-gray w3-round-large")
    player2Card.setAttribute("class","w3-card w3-container w3-dark-gray w3-round-large")
}

