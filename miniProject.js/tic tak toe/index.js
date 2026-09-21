let btns=document.querySelectorAll(".icon div");
let selector=document.querySelector(".select");
let blocks=document.querySelectorAll(".block")
let choices=document.querySelectorAll(".choice");
let user1;
let user2;
let choice;
let input=document.querySelector("input");
let main=document.querySelector("main");
let gameStarted=false;

let result=document.querySelector(".result");
let turn;

let gamestarted=false;



let patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

for(let block of blocks) {
    block.classList.add("disable");
}

for(let btn of btns) {
    btn.addEventListener("click",() => {
        if(gameStarted) {
            btn.classList.add("disable");
            return;
        }
        btn.id;
        if(btn.id=="naught") {
            user1="O";
            user2="X";
            turn=true;
        }else {
            user1="X";
            user2="O";
            turn=false;
        }
        let show=document.createElement("p");
        show.innerText=`Player 1 choose ${user1} and Player 2 choose ${user2}`;
        selector.appendChild(show);
        gameStarted=true;
        Starterchoose();
        
    })
}

function Starterchoose() {
    let choicedone=false;

    for(let choice of choices) {
        choice.addEventListener("click",() => {
            if(choicedone) {
                choice.classList.add("disable");
                return;
            }
            let ans=choice.innerHTML;
            let starter=document.createElement("p");
            if(ans=="YES") {
                starter.innerText=`Player 1 should start the game`;
            }else {
                starter.innerText=`Player 2 should start the game`;
            }    
            selector.appendChild(starter);
            choicedone=true;
            startGame();
        })
    }
    
}


function startGame() {
    for(let block of blocks) {
        block.classList.remove("disable");
        block.addEventListener("click",() => {
            if(turn) {
                block.innerHTML="O";
                turn=false;
                block.classList.add("disable");
                checkwinner();
            }else {
                block.innerHTML="X";
                turn=true;
                block.classList.add("disable");
                checkwinner();
            }
        })
    }
}


function draw() {
    for(let block of blocks) {
        block.classList.add("disable");
    }
    let h2=document.createElement("h2");

    h2.innerText="DRAW! PLAY AGAIN";
    result.appendChild(h2);

}

function declareWinner(winner) {
    for(let block of blocks) {
        block.classList.add("disable");
    }
    let h2=document.createElement("h2");

    if(winner==user1) {
        h2.innerText="Player 1 is the winner";
    }else {
        h2.innerText="Player 2 is the winner";
    }
    result.appendChild(h2);
}

let reset=document.createElement("button");

function endGame() {
    reset.innerText="RESET";
    reset.classList.add("reset");

    main.appendChild(reset);
    reset.addEventListener("click",resetgame);
}



function checkwinner() {
    for(let pattern of patterns) {
        let pos1=pattern[0];
        let pos2=pattern[1];
        let pos3=pattern[2];


        if(blocks[pos1].innerHTML!="" &&blocks[pos1].innerHTML==blocks[pos2].innerHTML && blocks[pos2].innerHTML==blocks[pos3].innerHTML) {
            declareWinner(blocks[pos1].innerHTML);
            endGame();
            break;
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
            draw();
            endGame();
        }
}




function resetgame() {
    for(let block of blocks) {
        block.classList.remove("disable");
        block.innerHTML = "";
    }
    result.innerHTML = "";
    selector.innerHTML="";

    gameStarted = false;

    setTimeout(()=> {
        main.removeChild(reset);
    },100)
}
