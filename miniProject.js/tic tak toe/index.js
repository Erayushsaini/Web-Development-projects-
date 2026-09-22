let btns=document.querySelectorAll(".icon i");
let blocks=document.querySelectorAll(".block")
let selector=document.querySelector(".selector");

let box=document.querySelector(".box");

let show=document.createElement("p");
let resetBtn=document.createElement("button");
resetBtn.innerText="RESET";

let player1;
let player2;


let choice;

let main=document.querySelector("main");
let gameStarted=false;

let result=document.querySelector(".result");

let turn;

let patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


box.classList.add("disappear");

for(let block of blocks) {
    block.classList.add("disable");
}



for(let btn of btns) {
    btn.addEventListener("click",() => {
        if(!gameStarted) {
            startGame(btn.id);
            gameStarted=true;
            return;
        }
    })
}



function startGame(id) {
    if(id==="X") {
        turn=true;
        player1="X";
        player2="O";
    }else {
        turn=false;
        player1="O";
        player2="X";
    }

    show.innerText=`Player 1 choose ${player1} and Player 2 choose ${player2}`;
    selector.appendChild(show);
    box.classList.remove("disappear");
    for(let btn of btns) {
        btn.classList.add("disable");
    }
    for(let block of blocks) {
        block.classList.remove("disable");
    }
}
        
       
let WinnerFound=false;

for(let block of blocks) {
    block.addEventListener("click" ,()=> {
        if(!WinnerFound) {
            if(turn) {
                block.innerHTML="X";
                block.classList.add("disable");
                turn=false;
                winner();
            }else {
                block.innerHTML="O";
                block.classList.add("disable");
                turn=true;
                winner();
            }
        }else {
            return;
        }
    })
}



function winner() {
    for(let pattern of patterns) {
        let pos1=pattern[0];
        let pos2=pattern[1];
        let pos3=pattern[2];


        if(blocks[pos1].innerHTML!="" &&blocks[pos1].innerHTML===blocks[pos2].innerHTML && blocks[pos2].innerHTML===blocks[pos3].innerHTML) {
            if(blocks[pos1].innerHTML===player1) {
                result.innerText=`player 1 is the winner with ${blocks[pos1].innerHTML}`;
                WinnerFound=true;
                reset();
                return;
            }else {
                result.innerText=`player 2 is the winner with ${blocks[pos1].innerHTML}`;
                WinnerFound=true;
                reset();
                return;
            }
            
            
        }
                
    }
    let isDraw = true;

    for(let block of blocks) {
        if(block.innerHTML == "") {
            isDraw = false;
            break;
        }
    }

    if(isDraw) {
        result.innerText="DRAW! PLEASE PLAY AGAIN";
        reset();
        return;
    }

}
 

resetBtn.addEventListener("click",() => {
    restartGame();
})

function restartGame() {
    gameStarted=false;
    for(let block of blocks) {
        block.classList.add("disable");
        block.innerHTML="";
    }
    for(let btn of btns) {
        btn.classList.remove("disable");
    }
    box.classList.add("disappear");
    result.innerText="";

    main.removeChild(resetBtn);
    show.innerText="";
    selector.removeChild(show);
    WinnerFound=false;

}

function reset() {
    main.appendChild(resetBtn);
}

