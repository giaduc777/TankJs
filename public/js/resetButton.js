import GlobalVariable from './globalVariable';

function resetButton(){

    document.querySelector("#reset-game").addEventListener('click', function(){

        document.querySelector("#try-again").disabled=true;
        document.querySelector('#reset-game').disabled = true;
            
            GlobalVariable.gameMode = "none";

            //Reset the current mode status on the browser.
            document.querySelector("#current_mode").innerHTML = "";

            //Clear Tank & Bullet setInterval() ID
            clearInterval(GlobalVariable.intervalId);
            clearInterval(GlobalVariable.fireId);

            document.querySelector('#box' + GlobalVariable.currentTank).firstElementChild.style.zIndex=-10
            document.querySelector('#bullet' + GlobalVariable.currentFireCount).firstElementChild.style.opacity=0
            document.querySelector('.tryAgain').firstElementChild.style.zIndex=-15
            document.querySelector('.explosion').firstElementChild.style.zIndex=-20

            //Reset Tank & Bullet position
            GlobalVariable.currentTank = 0;
            GlobalVariable.prevTank = 0;

            //Enable game option again (not display). Enable fire button, but it cannot fire until game option is select.
            document.querySelector(".trigger").disabled = false;
            document.querySelector("#linear-tank").disabled = false;
            document.querySelector("#random-tank").disabled = false;
        
    })

}

export default resetButton;