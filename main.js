/*
let shooting=document.querySelector(".shooting-stars");
let i=0;
let x=10
let y=20
shooting.style.top = x + "px";
shooting.style.left = y + "px";
function shootingStar(){
    if (i<3000){
        i++;
        x+=.02
        y+=.3
        shooting.style.top = x + "px";
        shooting.style.left = y + "px";
    }
    else{
        i=0;
        x=10
        y=20
        shooting.style.top = x + "px";
        shooting.style.left= y + "px";
    }
}
setInterval(shootingStar, 5)
*/

let shooting=document.querySelector(".shooting-stars");
let starSound=documnet.querySelector("audio")
//let button=document.querySelector("myButton");

shooting.addEventListener("hover", function(){
    starSound.play();
    starSound.currentTime = 0;
})
