let data=["rock","paper","scissor"]

let btns=document.querySelectorAll("#btn");

let result=document.querySelector(".result");
function computerValue() {
    let ran=data[Math.floor(Math.random()*3)];
    return ran;
}


let spanuser=document.querySelector(".user");

let spancomp=document.querySelector(".comp");

let userscore=0;

let compScore=0;

function givewinner(userVal,compVal) {   
    if(userVal==="rock") {
        if(compVal==="paper") {
            return false;
        }else {
            return true;
        }
    }else if(userVal==="paper") {
        if(compVal==="scissor") {
            return false;
        }else {
            return true;
        }
    }else {
        if(compVal==="rock") {
            return false;
        }else {
            return true;
        }
    }
}

let canPlay=true;

for(let btn of btns) {
    
    btn.addEventListener("click" , () => {
        if(!canPlay) {
            return;
        }
        canPlay=false;
        let userVal=btn.classList[0]
        let compVal=computerValue();
        console.log(compVal);
        console.log(userVal);

        if(userVal===compVal) {
            let h2=document.createElement("h2");
            h2.innerText=`DRAW! Both Player And Computer Have \t${userVal}`;
            h2.classList.add("draw");
            result.appendChild(h2);
            setTimeout(() => {
                result.removeChild(h2);
                canPlay=true;
            },2500)

        }else {
            let winner=givewinner(userVal,compVal);
            if(winner) {
                userscore++;
                spanuser.innerHTML=`${userscore}`;

                let h2=document.createElement("h2");
                h2.innerText=`You are the winner ${userVal} Beats ${compVal}`;
                result.appendChild(h2);
                setTimeout(() => {
                    result.removeChild(h2);
                    canPlay=true;

                },2500)

            }else {
                compScore++;
                spancomp.innerHTML=`${compScore}`;


                let h2=document.createElement("h2");
                h2.innerText=`computer is the winner ${compVal} Beats ${userVal}`;
                result.appendChild(h2);
                setTimeout(() => {
                    result.removeChild(h2);
                    canPlay=true;

                },2500)
            }
        }
    })
}


