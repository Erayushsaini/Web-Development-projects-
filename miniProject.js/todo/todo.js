let btns=document.querySelectorAll("button");


let add=document.querySelector(".add");
let ul=document.querySelector("ul");

let input=document.querySelector("input");
add.addEventListener("click",function() {
    input.style.display="inline";
})

input.addEventListener("change",function() {
    let li=document.createElement("li");

    li.innerText=this.value;
    ul.appendChild(li);
    this.value="";
    this.style.display="none";
})

let del=document.querySelector(".delete");


del.addEventListener("click",function() {
    let lis=document.querySelectorAll("li");
    let ele=lis[lis.length-1];
    ele.remove();
})

let reset =document.querySelector(".reset");

reset.addEventListener("click",function() {
    ul.innerHTML="";
})