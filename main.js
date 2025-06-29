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
let topnav= document.querySelector(".topnav");
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

let images=["https://preview.redd.it/im-trying-to-get-a-path-in-a-cave-splitting-into-two-v0-439num547hkb1.png?width=640&crop=smart&auto=webp&s=6146cc91d241576906841f3ed2231e58a108f65d", "https://library.rice.edu/sites/default/files/styles/wide/public/media-images/2022-DigitalSheetMusicTrial.png?itok=NZu9Rdcy", "https://media.istockphoto.com/id/1269211670/vector/rock-paper-scissors-body-parts-icon-set.jpg?s=612x612&w=0&k=20&c=OSu0AGUV7Tq3-gotwwOywCRcv4OMrt7KqQMhI_tPZOw=", "https://www.biotage.com/hubfs/Stock%20images/Hands%20and%20Earth.%20Symbol%20of%20environmental%20protection.jpeg"]
let projectsContainer= document.querySelector(".projects-container");
const slides=[...projectsContainer.children];//The spread operator ... takes all the elements from that collection and “spreads” them into a new actual array.
let scrollX=0;
let scrollSpeed=4;
function duplicateSlides() {
    // clone all original slides and append them
    slides.forEach(function(slide) {
      let clone = slide.cloneNode(true);
      projectsContainer.appendChild(clone);
      clone.addEventListener('mouseover', function() {
        if (clone.classList.contains('project1')){
            adventure.style.display= "block";
            music.style.display = "none";
            climate.style.display = "none";
            rps.style.display = "none";
        }//must add these again, as cloned elements don't keep the event listeners
        else if (clone.classList.contains('project2')){
            adventure.style.display = "none";
            music.style.display = "block";
            climate.style.display = "none";
            rps.style.display = "none";
        }
        else if (clone.classList.contains('project3')){
            adventure.style.display = "none";
            music.style.display = "none";
            climate.style.display = "none";
            rps.style.display = "block";
        }
        else if (clone.classList.contains('project4')){
            adventure.style.display = "none";
            music.style.display = "none";
            climate.style.display = "block";
            rps.style.display = "none";
        }
        else if (clone.classList.contains('project11')){
            adventure.style.display = "block";
            music.style.display = "none";
            climate.style.display = "none";
            rps.style.display = "none";
        }
        else if (clone.classList.contains('project21')){
            adventure.style.display = "none";
            music.style.display = "block";
            climate.style.display = "none";
            rps.style.display = "none";
        }
        else if (clone.classList.contains('project31')){
            adventure.style.display = "none";
            music.style.display = "none";
            climate.style.display = "none";
            rps.style.display = "block";
        }
    
        else if (clone.classList.contains('project41')){
            adventure.style.display = "none";
            music.style.display = "none";
            climate.style.display = "block";
            rps.style.display = "none";
        }

        
      })})};
  

  let isPaused = false;


  projectsContainer.addEventListener('mouseover', () => {
    isPaused = true;  // Pause on hover
  });
  
  projectsContainer.addEventListener('mouseleave', () => {
    isPaused = false; // Resume on leave
  });
  
  function loop() {
    if (!isPaused) {
     
    scrollX += scrollSpeed;
    if (scrollX >= projectsContainer.scrollWidth / 2) {// its divided by 2 since the width includes the duped slides
      // Reset scroll position and duplicate slides again, it continously dupes every time one set of images goes, essentially 
      //always keepings 2 sets of images in the container
      scrollX = 0;
      duplicateSlides();
    
    }
    projectsContainer.style.transform = "translateX(" + (-scrollX) + "px)";}
    requestAnimationFrame(loop);
  }
  
  loop();

  var b=0;
  var text="Welcome to my portfolio!";
  var speed=100;
  function typeWriter(){
    if (b<text.length){
        document.querySelector(".welcome").innerHTML += text.charAt(b);/*The charAt() method is used to retrieve 
        a character at a particular position within a string. tr.charAt(2) would return the third character of the string */
        b++;
        setTimeout(typeWriter, speed);//The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    }

  }
  setTimeout(typeWriter, speed);
  let enter= document.querySelector(".enter");
    enter.addEventListener("click", function(){
        document.querySelector(".waterfall").style.display = "none";
        document.querySelector(".portfolio").style.display = "block";
    })

    let currentX=0;
    let bird=document.querySelector(".bird");
    bird.addEventListener("click", function(){
        currentX+=500;
        console.log(currentX);
        bird.style.transform = "translateX(" + currentX + "px)";
    })
    //You need to add to the amount the bird moves (currentX) to
    // ensure that each click moves the bird incrementally further to the right, rather than resetting its
    // position to 200px every time. Without updating the position dynamically, the bird will always move to the same spot
    // (translateX(200px)) on every click, which is why it only appears to move once.

    //Fix:
    //To make the bird move incrementally to the right on each click, you need to track its current position 
    //(currentX) and update it with each click.
    

    let project1=document.querySelector(".project1");
    let project2=document.querySelector(".project2");
    let project3=document.querySelector(".project3");
    let project4=document.querySelector(".project4");
    let project11=document.querySelector(".project11");
    let project21=document.querySelector(".project21");
    let project31=document.querySelector(".project31");
    let project41=document.querySelector(".project41");
    let rps=document.querySelector(".rps");
    let adventure=document.querySelector(".adventure");
    let music=document.querySelector(".music");
    let climate=document.querySelector(".climate");

    project1.addEventListener("mouseover", function(){
        adventure.style.display= "block";
        music.style.display = "none";
        climate.style.display = "none";
        rps.style.display = "none";
    })
    project2.addEventListener("mouseover", function(){
        adventure.style.display = "none";
        music.style.display = "block";
        climate.style.display = "none";
        rps.style.display = "none";
    })

    project3.addEventListener("mouseover", function(){
        adventure.style.display = "none";
        music.style.display = "none";
        climate.style.display = "none";
        rps.style.display = "block";
    })
    project4.addEventListener("mouseover", function(){
        adventure.style.display = "none";
        music.style.display = "none";
        climate.style.display = "block";
        rps.style.display = "none";
    })
    project11.addEventListener("mouseover", function(){
        adventure.style.display = "block";
        music.style.display = "none";
        climate.style.display = "none";
        rps.style.display = "none";
    })
    project21.addEventListener("mouseover", function(){
        adventure.style.display = "none";
        music.style.display = "block";
        climate.style.display = "none";
        rps.style.display = "none";
    })
    project31.addEventListener("mouseover", function(){
        adventure.style.display = "none";
        music.style.display = "none";
        climate.style.display = "none";
        rps.style.display = "block";
    })

    project41.addEventListener("mouseover", function(){

        adventure.style.display = "none";
        music.style.display = "none";
        climate.style.display = "block";
        rps.style.display = "none";
    })
 function time(){
    if (!isPaused){
        adventure.style.display = "none";
        music.style.display = "none";
        climate.style.display = "none";
        rps.style.display = "none";
      }
 }

 setInterval(time, 1000);
 //if after a second, it'll make it so the displays are none if the slides aren't paused (if the mouse isn't hovering over the slides)

planetDesc1= document.querySelector(".centerplanet-desc1");
planetDesc2= document.querySelector(".centerplanet-desc2");
planetDesc3= document.querySelector(".centerplanet-desc3");
planet1= document.querySelector(".planet1");
planet2= document.querySelector(".planet2");
planet3= document.querySelector(".planet3");


planet1.addEventListener("click", function(){
    planetDesc1.style.display = "none";
    planetDesc2.style.display = "block";
    planetDesc3.style.display = "none";
});
planet2.addEventListener("click", function(){
    planetDesc1.style.display = "none";
    planetDesc2.style.display = "none";
    planetDesc3.style.display = "block";
});
planet3.addEventListener("click", function(){
    planetDesc1.style.display = "block";
    planetDesc2.style.display = "none";
    planetDesc3.style.display = "none";
});
