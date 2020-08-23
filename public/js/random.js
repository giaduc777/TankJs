import GlobalVariable from './globalVariable';
import randomTank from './randomTank';

function random(){
    document.querySelector("#random-tank").addEventListener('click', function(){

        document.querySelector("#random-tank").disabled=true;
        document.querySelector("#linear-tank").disabled=true;
        document.querySelector('#try-again').disabled = true;
        document.querySelector('#reset-game').disabled = true;
    
        GlobalVariable.gameMode = "random";
    
        document.querySelector("#current_mode").innerHTML = "Random";
    
        //intervalId is use to stop the game when reset button is click.
        GlobalVariable.intervalId = setInterval(randomTank, 400);
    })
}

export default random;