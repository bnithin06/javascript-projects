let innerBoxes=document.querySelectorAll('.game-inner-boxes');
let r=document.querySelector('#reset');
const winningChoices=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//turn of the player
let turn=true; //player1 or player2

// printing winner
let printWinner=document.querySelector('.winner');

// reset
r.addEventListener('click',()=>{
    innerBoxes.forEach((el)=>{
        el.innerText='';
        innerBoxes.forEach((el)=>{
            el.disabled=false;
        });
        printWinner.innerText='';
    });
});


// winner function
const winner=()=>{
    winningChoices.forEach((el)=>{
        let pos1=innerBoxes[el[0]].innerText;
        let pos2=innerBoxes[el[1]].innerText;
        let pos3=innerBoxes[el[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                if(pos1=='x'){
                    printWinner.innerText=`winner : player-x`;
                }
                else{
                    printWinner.innerText=`winner : player-o`;
                }
                innerBoxes.forEach((el)=>{
                    el.disabled=true;
                });
            }
        }
    });
};

innerBoxes.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(turn){
            el.innerHTML='x';
            turn=false
            el.disabled=true;
        }
        else{
            el.innerText='o';
            turn=true;
            el.disabled=true;
        }
        winner();
    });
});



  
