let userScore=0;
let compScore=0;
let options=document.querySelectorAll('.options');
let statusMsg=document.querySelector('#msg-container');
let us=document.querySelector('#user-score');
let cs=document.querySelector('#computer-score');
let uc=document.querySelector('#user-choice');
let cc=document.querySelector('#computer-choice');
let reset=document.querySelector('#reset');

const computerChoices=['rock','paper','scissors'];

const genCompChoice=()=>{
    // creating a random index and using this index to randomly selecting the option from array
    let index=Math.floor(Math.random()*3);
    let computerChoice=computerChoices[index];
    return computerChoice;
}

const drawGame=()=>{
    // console.log('the game is draw');
    statusMsg.innerText='Draw!';
    statusMsg.style.color='orange';
}
const  showWinner=(userwin)=>{
    if(userwin){
        statusMsg.innerText='You Won!';
        statusMsg.style.color='green';
        userScore++;
        us.innerText=userScore;
    }
    else{
        statusMsg.innerText='You Lost!';
        statusMsg.style.color='red';
        // console.log('You Lost!');
        compScore++;
        cs.innerText=compScore;
    }
}

const playGame=(userchoice)=>{
    // console.log('userchoice :',userchoice);
    // generate computer choice
    let computerChoice=genCompChoice();
    uc.innerText=userchoice;
    // console.log('computerchoice :',computerChoice);
    cc.innerText=computerChoice;
    if(userchoice === computerChoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoice==='rock'){
            // paper,scissors
            userwin=computerChoice==='paper' ? false :true;
        }
        else if(userchoice === 'paper'){
            // rock,scissors
            userwin=computerChoice==='scissors'  ? false :true;
        }else{
            // rock ,paper
            userwin=computerChoice='rock' ? false :true;
        }
        showWinner(userwin);
    }
}
options.forEach((option)=>{
    option.addEventListener("click",()=>{
        const userchoice=option.getAttribute('id');
        // calling a playGame
        playGame(userchoice);
    });
})

// reset button
reset.onclick=()=>{
    userScore=0;
    us.innerText=userScore;
    compScore=0;
    cs.innerText=compScore;
    statusMsg.innerText='Start Game!';
    statusMsg.style.color='#667eea';
}
