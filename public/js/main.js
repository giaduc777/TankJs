//Track where the Tank is at
var currentTank, prevTank;

//Track the ID of the setInterval() of the Tank & the Bullet
var intervalId, fireId;

//Track where the Bullet is at
var currentFireCount, prevFireCount;

var gameMode = "none";

//Enable game mode option (not display).
linear();
random();

var linearTank = function(){

    if(currentTank === 9){
        currentTank = 0;
    }

    currentTank++;

        if(prevTank >= 1){
            //document.getElementsByClassName('#box' + prevTank)
            document.querySelector('#box' + prevTank).firstElementChild.style.zIndex=-10
        }

        const element = document.querySelector('#box' + currentTank)
        console.log(element)

        element.firstElementChild.style.zIndex=10
        //console.log("Fron linear Tank:" , document.querySelector('#box' + currentTank).firstElementChild.style.zIndex=10);

        prevTank = currentTank;
}

var randomTank = function(){

        if(prevTank > 0){
            document.querySelector("#box" + currentTank).classList.remove("red-box");
        }

        currentTank = Math.floor(Math.random() * 5 + 1);

        while(prevTank === currentTank){
            currentTank = Math.floor(Math.random() * 5 + 1);
        }

       prevTank = currentTank;
    
       document.querySelector("#box" + currentTank).classList.add("red-box");
}


//////////////////////////////////////////////
var fire = function(){

    currentFireCount++;

    if(prevFireCount >= 1){
        document.querySelector("#bullet" + prevFireCount).firstElementChild.style.opacity=0;
    }

    document.querySelector('#bullet' + currentFireCount).firstElementChild.style.opacity=1;
    prevFireCount = currentFireCount;
    
        if(currentFireCount === 16){
            clearInterval(intervalId);
            clearInterval(fireId);
            document.querySelector("#try-again").disabled=false;

            //If currentTank === 5. Wait for the CSS code & JS to finish execution before alert.
            if(currentTank === 5){
                document.querySelector("#bullet" + prevFireCount).firstElementChild.style.opacity=0;
                document.querySelector('#box' + prevTank).firstElementChild.style.zIndex=-10
                document.querySelector('#box10').firstElementChild.style.zIndex=20
                document.getElementById('box10').style.display="inline-block"
                setTimeout(function(){
                    alert("Winnerrrr!!!!!");
                }, 500);
            }
            else if(currentTank !== 5){
                document.querySelector("#bullet" + prevFireCount).firstElementChild.style.opacity=0;
                
                document.querySelector('#box11').firstElementChild.style.zIndex=20
            }
        }
}

//Click Random Tank mode
function random(){
    document.querySelector("#random-tank").addEventListener('click', function(){

        //var child = document.querySelector("#game_mode");
       // child.parentNode.removeChild(child);
    
        gameMode = "random";
    
        document.querySelector("#current_mode").innerHTML = "Random";
    
        //intervalId is use to stop the game when reset button is click.
        intervalId = setInterval(randomTank, 400);
    })
}

////////////// Click Linear Tank Button //////////////////////
function linear(){

    document.querySelector("#linear-tank").addEventListener('click', function(){

        document.querySelector("#random-tank").disabled=true;
        document.querySelector("#try-again").disabled=true;
       // document.querySelector("#linear-tank").disabled=true;

        gameMode = "linear";
    
        document.querySelector("#current_mode").innerHTML = "Linear";
    
        currentTank = 0;
        prevTank = 0;
        document.querySelector("#linear-tank").disabled=true;

        intervalId = setInterval(linearTank, 800);
    })
}

/////////////// Click fire button //////////////////////////////
document.querySelector(".trigger").addEventListener('click', function(){

    //Do not fire if no game mode is select
    if(gameMode !== "none"){
        prevFireCount = 0;
        currentFireCount = 0;
        fireId = setInterval(fire, 250);
        document.querySelector(".trigger").disabled = true;
    }
})

//Click Try-Again button
document.querySelector("#try-again").addEventListener('click', function(){
    document.querySelector("#try-again").disabled=true;
    //Reset does not work if gameMode is not select.

    //Clear Tank & Bullet setInterval() ID
    clearInterval(intervalId);
    clearInterval(fireId);

    //console.log("reset")

    //Hide the tank and the "try again" logo.
    document.querySelector('#box11').firstElementChild.style.zIndex=-15
    document.querySelector('#box' + currentTank).firstElementChild.style.zIndex=-10
    document.querySelector('#box10').firstElementChild.style.zIndex=-20

    /*
        if(prevTank >= 1){
        document.querySelector('#box' + prevTank).classList.remove("tank");
    }

    if(prevFireCount >= 1){
        document.querySelector("#bullet" + prevFireCount).classList.remove("tank");
    }
    */

    //Reset Tank & Bullet position
    currentTank = 0;
    prevTank = 0;

    //Restart Tank interval
    if(gameMode === "random"){
        intervalId = setInterval(randomTank, 800);
    }
    else if(gameMode === "linear"){
        intervalId = setInterval(linearTank, 800);
    }
   
    document.querySelector(".trigger").disabled = false;
})

//Click Reset button
document.querySelector("#reset-game").addEventListener('click', function(){

    //If gameMode === none, do nothing.
    if(gameMode !== "none"){

        //reset gameMode.
        gameMode = "none";

        var html = '<div class="option_container" id="game_mode"><h2>Choose your games:</h2><button class="option" id="random-tank">1. Random Tank</button><button class="option" id="linear-tank">2. Linear Tank</button></div>';

        //Display the gameMode selector box on the browser.
        var parent = document.querySelector(".parent_game_mode");
        parent.insertAdjacentHTML("afterbegin", html);

        //Reset the current mode status on the browser.
        document.querySelector("#current_mode").innerHTML = "";

        //Clear Tank & Bullet setInterval() ID
        clearInterval(intervalId);
        clearInterval(fireId);

        if(prevTank >= 1){
            document.querySelector('#box' + prevTank).classList.remove("red-box");
        }

        if(prevFireCount >= 1){
            document.querySelector("#bullet" + prevFireCount).classList.remove("red-box");
        }

        //Reset Tank & Bullet position
        currentTank = 0;
        prevTank = 0;


        
        //Enable game option again (not display). Enable fire button, but it cannot fire until game option is select.
        linear();
        random();
        document.querySelector(".trigger").disabled = false;
        

    }
})


/*

<div class="parent_game_mode">
      <div class="option_container" id="game_mode">
        <h2>Choose your games:</h2>
        <button class="option" id="random-tank">1. Random Tank</button>
        <button class="option" id="linear-tank">2. Linear Tank</button>
      </div>
    </div>
    

    <div class = "background">
      <div class="test">
          <div class="box_container">
            <div class="box" id="box1"><img  class="tank" src="./assets/tank.png"></img></div>
            <div class="box" id="box2"><img  class="tank" src="./assets/tank.png"></img></div>
            <div class="box" id="box3"><img  class="tank" src="./assets/tank.png"></img></div>
            <div class="box" id="box10"><img  class="explosion" src="./assets/explosion.png"></img></div>
            <div class="box" id="box4"><img  class="tank" src="./assets/tank.png"></img></div>
            <div class="box" id="box5"><img  class="tank" src="./assets/tank.png"></img></div>
            <div class="box" id="box6"><img  class="tank" src="./assets/tank.png"></img></div>
            <div class="box" id="box7"><img  class="tank" src="./assets/tank.png"></img></div>
            <div class="box" id="box8"><img  class="tank" src="./assets/tank.png"></img></div>
            <div class="box" id="box9"><img  class="tank" src="./assets/tank.png"></img></div>
          </div>
          <div class="ammo">
            <div class="bullet" id="bullet10"><img class="ball" src="./assets/ball.jpg"></img></div>
            <div class="bullet" id="bullet9"><img class="ball" src="./assets/ball.jpg"></div>
            <div class="bullet" id="bullet8"><img class="ball" src="./assets/ball.jpg"></div>
            <div class="bullet" id="bullet7"><img class="ball" src="./assets/ball.jpg"></div>
            <div class="bullet" id="bullet6"><img class="ball" src="./assets/ball.jpg"></div>
            <div class="bullet" id="bullet5"><img class="ball" src="./assets/ball.jpg"></div>
            <div class="bullet" id="bullet4"><img class="ball" src="./assets/ball.jpg"></div>
            <div class="bullet" id="bullet3"><img class="ball" src="./assets/ball.jpg"></div>
            <div class="bullet" id="bullet2"><img class="ball" src="./assets/ball.jpg"></div>
            <div class="bullet" id="bullet1"><img class="ball" src="./assets/ball.jpg"></div>
          </div>


          <div class="cannon_container">
            <img class="cannon" src="./assets/cannon.png"></img>
            <button class="trigger">FIRE</button>
          </div>
          
      </div>

      
      <div class="mode">
          <h1>Current Mode: <span id="current_mode"></span></h1>
      </div>
      <div class="continue">
        <h4 class="reset">Reset Game</h4>
        <h4 class="quit">Quit Game</h4>
      </div>
  </div>



*/









































/*
  var wait = function(ms){
   
    var start = new Date().getTime();
    var end = start;

    while(end < start + ms){
        end = new Date().getTime();
    }
}
*/

/*
document.addEventListener('keypress', function(e){
    
    if(e.charCode === 13){
        num = 1;
        intervalId = setInterval(randomTank, 2000)
       
    }
    
    ////this code is for the game at nickle city

        else if(e.keyCode === 109){
         clearInterval(intervalId);
        
         if(random === 3){
             alert("Congratulation, you Win!!!");
         }
         else
           alert("You missed, try again...");
    }
    

})
*/





