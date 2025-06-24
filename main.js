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
let starSound=document.querySelector(".audio");
let mode=document.querySelector("#mode");
let mountain=document.querySelector(".mountain")
let sky=document.querySelector(".sky");
let space=document.querySelector(".space");
let fade=document.querySelector(".myFade");
let fade2=document.querySelector(".fade2");
let project =document.querySelector(".project");
//let button=document.querySelector("myButton");
let project1=document.querySelector(".project1");
let project2=document.querySelector(".project2");
let project3=document.querySelector(".project3");
let project4=document.querySelector(".project4");


shooting.addEventListener("mouseover", function(){
    starSound.play();
    starSound.currentTime = 0;
})

let on = true; 
    mode.addEventListener("click", function(){

        if (on){
            mountain.style.backgroundImage = "URL('https://www.creativefabrica.com/wp-content/uploads/2020/04/09/Night-city-background-with-many-building-Graphics-3832790-1.jpg')";
            mountain.style.color = "white";
            mode.innerHTML = "Toggle Light Mode";
            sky.style.backgroundImage = "URL('https://www.shutterstock.com/image-vector/vector-watercolor-texture-night-clouds-600nw-2355496251.jpg')";
            on = false;
            fade.style.background = "linear-gradient(#17173d, #8067af)";
            fade2.style.background = "linear-gradient(#221e52, black)";
            fade.style.opacity = "1";
            fade2.style.opacity = "1";
            //DO fade//
        }else{
            mountain.style.backgroundImage = "URL('https://wallpaperbat.com/img/8614851-artistic-wallpaper-designs-cool-4k.png')";
            mountain.style.color = "black";
            mode.innerHTML = "Toggle Dark Mode";
            sky.style.backgroundImage = "URL('https://images5.alphacoders.com/132/thumb-1920-1327980.png')"
            on = true;
            fade.style.background = "linear-gradient(#fd9f59, rgb(239, 176, 187))";
            fade.style.opacity = "1";
            fade2.style.opacity = "1";
            fade2.style.background = "linear-gradient(rgb(255, 202, 212), black)";
            //fix
            }
        //if you click the button, it i'll check if "on" is true. If it's true, it'll make it dark mode and set on to false
        //then, when you click it again, since on is false, it'll trigger the else statement, which sets it to dark mode, and
        //sets the variable back to true
        });
