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
let fade=document.querySelector(".fade");
//let button=document.querySelector("myButton");

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
            //DO fade//
        }else{
            mountain.style.backgroundImage = "URL('https://static.vecteezy.com/system/resources/previews/029/455/877/non_2x/winter-scene-with-white-snow-illustration-snow-covered-trees-against-the-backdrop-of-forests-and-mountains-snowdrifts-sparkling-in-frost-and-frozen-firs-christmas-horizontal-scene-vector.jpg')";
            mountain.style.color = "black";
            mode.innerHTML = "Toggle Dark Mode";
            sky.style.backgroundImage = "URL('https://images5.alphacoders.com/132/thumb-1920-1327980.png')"
            on = true;
            }
        //if you click the button, it i'll check if "on" is true. If it's true, it'll make it dark mode and set on to false
        //then, when you click it again, since on is false, it'll trigger the else statement, which sets it to dark mode, and
        //sets the variable back to true
        });



        
