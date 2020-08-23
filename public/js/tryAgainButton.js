import GlobalVariable from './globalVariable';
import randomTank from './randomTank';
import linearTank from './linearTank';

function tryAgainButtton(){
    
    document.querySelector("#try-again").addEventListener('click', function(){

        document.querySelector("#try-again").disabled=true;
        document.querySelector('#reset-game').disabled = true;
        document.querySelector(".trigger").disabled = false;

        //Clear Tank & Bullet setInterval() ID
        clearInterval(GlobalVariable.intervalId);
        clearInterval(GlobalVariable.fireId);

        //Hide the tank and the "try again" logo.
        document.querySelector('#box11').firstElementChild.style.zIndex=-15
        document.querySelector('#box' + GlobalVariable.currentTank).firstElementChild.style.zIndex=-10
        document.querySelector('#box10').firstElementChild.style.zIndex=-20

        //Reset Tank & Bullet position
        GlobalVariable.currentTank = 0;
        GlobalVariable.prevTank = 0;

        //Restart Tank interval
        if(GlobalVariable.gameMode === "random"){
            GlobalVariable.intervalId = setInterval(randomTank, 800);
        }
        else if(GlobalVariable.gameMode === "linear"){
            GlobalVariable.intervalId = setInterval(linearTank, 800);
        }
    
        document.querySelector(".trigger").disabled = false;
    })
}
export default tryAgainButtton;