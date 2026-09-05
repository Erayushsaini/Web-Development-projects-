let slider=document.querySelector(".progress-bar");



slider.addEventListener("input",function () {
    let value=this.value;
    document.querySelector(".str-time").textContent=value;
})

let volume=document.querySelector(".volume");


volume.addEventListener("input",function() {
    let value=this.value;
    document.querySelector(".vol").textContent=value;
    let display=document.querySelector(".vol");
    display.style.display="block";
})

