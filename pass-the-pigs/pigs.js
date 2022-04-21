let currentPlayer = 0
let nextPlayer = 1
//what happens when you click the roll and pass buttons
function handleClick(id) {
    if (id == "player0PassButton") {
        console.log("Player 0 passed");
        switchColor("player0", "player1");
    } else if (id == "player1PassButton") {
        console.log("Player 1 Passed")
        switchColor("player1", "player2");
    } else if (id == "player2PassButton") {
        console.log("Player 2 Passed")
        switchColor("player2", "player3");
    } else if (id == "player3PassButton") {
        console.log("Player 3 Passed")
        switchColor("player3", "player0");
    } else if (id == "player0RollButton") {
        handleRoll()
    } else if (id == "player1RollButton") {
        handleRoll()
    } else if (id == "player2RollButton") {
        handleRoll()
    } else if (id == "player3RollButton") {
        handleRoll()
    }



}
//switching player 
function switchColor(currentPlayerId, nextPlayerId) {
    let currentPlayerCard = document.getElementById(currentPlayerId);
    let nextPlayerCard = document.getElementById(nextPlayerId);
    currentPlayerCard.setAttribute("class", "w3-card w3-container w3-light-gray w3-round-large")
    nextPlayerCard.setAttribute("class", "w3-card w3-container w3-dark-gray w3-round-large")
    currentPlayer=currentPlayer + 1
}

//basic rolling
function handleRoll() {
    console.log('player' + currentPlayer + 'Pig1')
    document.getElementById('player' + currentPlayer + 'Pig1').innerHTML = 'Dot'
    document.getElementById('player' + currentPlayer + 'Pig2').innerHTML = 'Dot'
}
//start of randomizing 
function rollPig() {
    let pig1 = rollPig()
    let pig2=rollPig()
    return "No dot"
}

