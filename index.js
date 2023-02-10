let player = {
    Name :  "Per",
    Chips: 400
}
let cards =[]
let sum = 0
let hasBLackJack=false
let isAlive=false
let message= " "
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let CardEl=document.getElementById("Card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Nameame + ": $" + player.Chips


function getRandomCard(){
   let  randomnumber = Math.floor( Math.random()*13 ) + 1 
   if(randomnumber > 10){
     return 10
    }
    else if( randomnumber === 1){
        return 11
    }
    else{
        return randomnumber
    }
}


function startGame(){
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard =getRandomCard()
    cards =[firstcard + secondcard]
    sum = firstcard + secondcard

    renderGame()
}

function renderGame(){
    CardEl.textContent = "Cards:"
    for( let i = 0; i < cards.length; i++){
        CardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum<= 20){
    message="Do you want to draw a new card? 🙂"      
}
else if(sum === 21){
   message=" You've got Blackjack! 🥳"
    hasBLackJack=true
}
else{
   message= "You're out of the game! 😭"
    isAlive=false
}
messageEl.textContent=message
}

function newcard(){ 
          
    if (isAlive === true && hasBLackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }

}