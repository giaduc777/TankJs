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
            document.querySelector('#box' + prevTank).firstElementChild.style.zIndex=-10;
        }

        const element = document.querySelector('#box' + currentTank)
        //console.log(element)

        element.firstElementChild.style.zIndex=10
        //console.log("Fron linear Tank:" , document.querySelector('#box' + currentTank).firstElementChild.style.zIndex=10);

        prevTank = currentTank;
}

var randomTank = function(){

        if(prevTank > 0){
            document.querySelector("#box" + currentTank).firstElementChild.style.zIndex=-10;
        }

        currentTank = Math.floor(Math.random() * 9 + 1);

        while(prevTank === currentTank){
            currentTank = Math.floor(Math.random() * 9 + 1);
        }

       prevTank = currentTank;
    
       document.querySelector("#box" + currentTank).firstElementChild.style.zIndex=10;
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

        document.querySelector("#random-tank").disabled=true;
        document.querySelector("#linear-tank").disabled=true;

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
        document.querySelector("#linear-tank").disabled=true;
       // document.querySelector("#linear-tank").disabled=true;

        gameMode = "linear";
    
        document.querySelector("#current_mode").innerHTML = "Linear";
    
        currentTank = 0;
        prevTank = 0;
        

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
        console.log(gameMode)
        //reset gameMode.
        gameMode = "none";
        console.log(gameMode)
        //var html = '<div class="option_container" id="game_mode"><h2>Choose your games:</h2><button class="option" id="random-tank">1. Random Tank</button><button class="option" id="linear-tank">2. Linear Tank</button></div>';

        //Display the gameMode selector box on the browser.
        //var parent = document.querySelector(".parent_game_mode");
        //parent.insertAdjacentHTML("afterbegin", html);

        //Reset the current mode status on the browser.
        document.querySelector("#current_mode").innerHTML = "";

        //Clear Tank & Bullet setInterval() ID
        clearInterval(intervalId);
        clearInterval(fireId);

        //if(prevTank >= 1){
          //  document.querySelector('#box' + prevTank).firstElementChild.style.zIndex=-10
       // }

        document.querySelector('#box' + currentTank).firstElementChild.style.zIndex=-10
        document.querySelector('#bullet' + currentFireCount).firstElementChild.style.opacity=0
        document.querySelector('.tryAgain').firstElementChild.style.zIndex=-15
        document.querySelector('.explosion').firstElementChild.style.zIndex=-20
        
        /*if(prevFireCount >= 1){
            document.querySelector("#bullet" + currentFireCount).classList.remove("ball");
        }*/

        //Reset Tank & Bullet position
        currentTank = 0;
        prevTank = 0;


        
        //Enable game option again (not display). Enable fire button, but it cannot fire until game option is select.
        //linear();
        //random();
        document.querySelector(".trigger").disabled = false;
        document.querySelector("#linear-tank").disabled = false;
        document.querySelector("#random-tank").disabled = false;
        

    }
})


