let currentPlayer = 0
let nextPlayer = 1

let runningScore = [0,0,0,0];
disablePlayer(1);
disablePlayer(2);
disablePlayer(3);

//what happens when you click the roll and pass buttons
function handleClick(id) {
    if (id == "player0PassButton") {
        console.log("Player 0 passed");
        switchColor("player0", "player1");
        document.getElementById('player0HandScore').innerHTML =  "Score: 0";
        enablePlayer(1);
        disablePlayer(0);
    } else if (id == "player1PassButton") {
        console.log("Player 1 Passed")
        switchColor("player1", "player2");
        enablePlayer(2);
        disablePlayer(1);
        document.getElementById('player1HandScore').innerHTML =  "Score: 0";
    } else if (id == "player2PassButton") {
        console.log("Player 2 Passed")
        switchColor("player2", "player3");
        document.getElementById('player2HandScore').innerHTML =  "Score: 0";
        enablePlayer(3);
        disablePlayer(2);
    } else if (id == "player3PassButton") {
        console.log("Player 3 Passed")
        switchColor("player3", "player0");
        document.getElementById('player3HandScore').innerHTML =  "Score: 0";
        enablePlayer(0);
        disablePlayer(3);
    } else if (id == "player0RollButton") {
        handleRoll(0)
    } else if (id == "player1RollButton") {
        handleRoll(1)
    } else if (id == "player2RollButton") {
        handleRoll(2)
    } else if (id == "player3RollButton") {
        handleRoll(3)
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
function handleRoll(currentPlayer) {
    let pig1 = rollPig();
    let pig2 = rollPig();
    let score = calculateScore(pig1,pig2);

    if (score == 0 ) {
        score = "Pig Out!";
        runningScore[currentPlayer] = 0;
    } else {
        runningScore[currentPlayer] += score;
        if (runningScore[currentPlayer] >= 100) {
            chooseWinner(currentPlayer);
        }
    }

    let pigNames = ['Dot', 'No Dot', 'Razorback', 'Trotter','Snouter','Leaning Jowler'];

    document.getElementById('player' + currentPlayer + 'Pig1').innerHTML =  pigNames[pig1];
    document.getElementById('player' + currentPlayer + 'Pig2').innerHTML =  pigNames[pig2];

    document.getElementById('player' + currentPlayer + 'HandScore').innerHTML =  "Score: " + score;
    document.getElementById('player' + currentPlayer + 'TotalScore').innerHTML =  "Total Score: " + runningScore[currentPlayer];

}

function chooseWinner(player) {
    // set yellow background for winner of id player
    // show new game button
}

function enablePlayer (player) {
    document.getElementById('player' +
}
function disablePlayer (player) {
    
}
function calculateScore(pig1,pig2) {
    let score = 0;
    if (  (pig1 == 2 && pig2 == 2)  || (pig1 == 3 && pig2 == 3) )  {
        return 20;
    } else if (pig1 == 4 && pig2 == 4) {
        return 40;
    } else if (  pig1 == 5 && pig2 == 5) {
        return 60;
    } else if (  (pig1 == 0 && pig2 ==0 )  || (pig1 == 1 && pig2 == 1) ) {
        return 1;
    } else if  (pig1 == 0 && pig2 == 1) {
        return 0;
    } else {
        let combo = 0;
        if (pig1 == 2 || pig2 == 2) {
            combo += 5;
        }
        if (pig1 == 3 || pig2 == 3) {
            combo += 5;
        }
        if (pig1 == 4 || pig2 == 4){
            combo+= 10
        }
        if (pig1 == 5 || pig2 == 5) {
            combo+=15
        }
        return combo;
    }

}

//start of randomizing 
function rollPig() {
    let result = weightedRandom({0:0.349, 1:0.302, 2:0.224, 3:0.880, 4:0.300, 5:0.70});
    return result;
}

function weightedRandom(prob) {
    let i, sum=0, r=Math.random();
    for (i in prob) {
      sum += prob[i];
      if (r <= sum) return i;
    }
  }