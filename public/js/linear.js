import GlobalVariable from './globalVariable';
import linearTank from './linearTank';

function linear(){

    document.querySelector("#linear-tank").addEventListener('click', function(){

        document.querySelector("#random-tank").disabled=true;
        document.querySelector("#linear-tank").disabled=true;
        document.querySelector('#reset-game').disabled = true;
        document.querySelector('#try-again').disabled = true;

        GlobalVariable.gameMode = "linear";
    
        document.querySelector("#current_mode").innerHTML = "Linear";
    
        GlobalVariable.currentTank = 0;
        GlobalVariable.prevTank = 0;
        
        GlobalVariable.intervalId = setInterval(linearTank, 800);
    })
}

export default linear;