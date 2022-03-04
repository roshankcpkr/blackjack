let cardNum = document.getElementById('card-num');
let sumDisplay = document.getElementById('sum');
let numarray = [];
let sum = 0;
let messageShow = document.getElementById('newcard');
let isAlive = true;
let isblackjack = false;
let newbutton = document.querySelector('.new');
newbutton.style.display = 'none';
cardNum.textContent = "Cards: ";
let firstgame = true;
let user = {
     name : `Player`,
    };
    messageShow.textContent = `Click start game to play`;
function renderGame(){
    startGame();
    if (sum < 21){
        messageShow.textContent = "Do you want to draw a new card?";
        isAlive = true;
        newbutton.style.display = 'block';

    }
    else if(sum === 21){
        messageShow.textContent = `Congratulations ${user.name} you hit blackjack`;
        isblackjack = true;
        isAlive = false;
    }
    else{
        messageShow.textContent = `You lost ${user.name} try again`;
        isAlive = false;
        isblackjack = false;
    }
    sumDisplay.textContent = "sum: " + sum;
    
}
function startGame(){
      if (isAlive === true && isblackjack === false && firstgame === true){
        let firstnum = Math.floor(Math.random()*13 + 1);
        let secondnum = Math.floor(Math.random()*13 + 1);
        numarray.push(firstnum, secondnum);
        for (let i = 0; i< numarray.length; i++){
            sum = sum+ numarray[i];
            cardNum.textContent += numarray[i] + ' - ';
        }
        
        firstgame = false;
      } 
}
function newcard(){
    if (isAlive === true && isblackjack === false){
        let generated = Math.floor(Math.random()*13 + 1);
        if (generated > 10){
            generated = 10;
        }
        else if (generated === 1){
            generated = 11;
        }
        numarray.push(generated)
            sum = sum + numarray[numarray.length - 1];
        cardNum.textContent += numarray[numarray.length - 1] + ' - ';
        renderGame();

    }
}