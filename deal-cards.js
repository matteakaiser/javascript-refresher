const card1 = {suit:'Hearts', rank: 'Ace'};
const card2 = {suit:'Diamonds', rank:7};
const card3 = {suit: 'Spades', rank: 'King'};
console.log('You are holding the '+card1.rank+' of '+ card1.suit);
console.log ('and the '+ card2.rank + ' of '+ card2.suit);

const deck = [ ];
deck.push (card1, card2, card3)
console.log (deck)

for (let i = 0; i < 3; i++) {
    console.log (deck[i].rank + ' of '+ deck[i].suit)
  }
listCards(" Hearts")
listCards(" Spades")
listCards(" Clubs")
listCards(" Diamonds")

function listCards(suit) {
    console.log("Ace of " + suit) 
    // let card = { rank: 'Ace', suit: suit}
    // deck. push (card)
    for (let i = 2; i < 11; i++) {
        console.log(i + " of " + suit)
    }
    console.log("Jack of " + suit)
    console.log("Queen of " + suit)
    console.log("King of " + suit)

const deck = [];
const suits=['Hearts', 'Clubs', 'Diamonds' , 'Spades']
const rank =['Jack', 'King', 'Queen']

for (let s = 0; s<suits.length; s++){
    deck.push ("Ace of "+ suits[s]);
}

for (let i = 2; i <=10 ; i++) {
    for (let s = 0; s<suits.length; s++){
        deck.push (i+' of '+ suits[s]);
    }
}
for (let i= 0; i<rank.length; i++) {
    for (let s = 0; s<suits.length; s++){
        deck.push (rank[i]+' of '+ suits[s]);
    }
}

 //console.table (deck);

//  Returns a random integer from 0 to 51:
let pickedCard = Math.floor(Math.random() * 52);
console.log("First card picked is: " + deck[pickedCard])
deck.splice(pickedCard,1)
pickedCard = Math.floor(Math.random * 52);
console.log("Second card picked is: " + deck[pickedCard])
deck.splice(pickedCard,1)
console.table (deck)
