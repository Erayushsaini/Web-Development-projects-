let gameSeq=[];
let userSeq=[];

let container=document.querySelector(".container");
let body=document.querySelector("body");
let h1=document.querySelector("h1");
let btns=document.querySelectorAll(".play");
let h3=document.querySelector("h3");

let MAX=document.querySelector(".max");
let maxscore=0;

let started =false;
let level=0;



document.addEventListener("keypress",function () {
    if(!started) {
        started=true;
        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    },500)

}

function levelUp() {
    userSeq = [];

    level++;
    h3.innerText=`Level ${level}`;

    
    let rand=Math.floor((Math.random())*4);
    let num=`${rand}`;
    let btn=btns[num];
    gameSeq.push(rand);

    btnFlash(btn);
}

function checkAns(idx) {
    if(userSeq[idx]==gameSeq[idx]) {
        if(userSeq.length==gameSeq.length) {
            setTimeout(levelUp,400);
        }
    }else {
        h3.innerHTML=`Game Over! your score is <b>${level}</b> <br> Press any key to start the game`;
        body.style.backgroundColor="red";
        h1.style.color="black";
        h3.style.color="black";
        setTimeout(function() {
            body.style.backgroundColor="steelblue";
            h1.style.color="white";
            h3.style.color="white";
        },1000)
        maxscore=Math.max(maxscore,level);
        reset();
        MAX.innerText=`Max score =${maxscore}`;

    }
}


for(let btn of btns) {
    btn.addEventListener("click",btnPress);
}

function btnPress() {
    let btn=this;

    btnFlash(btn); 
    
    userSeq.push(btn.id);

    //or let id=btn.getattribute("id");
    checkAns(userSeq.length-1);
}


function reset() {
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}