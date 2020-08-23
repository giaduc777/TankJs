import GlobalVariable from './globalVariable';
import fire from './fire';

function fireButton (){
    document.querySelector(".trigger").addEventListener('click', function(){

        document.querySelector('#reset-game').disabled = true;
        document.querySelector(".trigger").disabled = true;

        //Do not fire if no game mode is select
        if(GlobalVariable.gameMode !== "none"){
            GlobalVariable.prevFireCount = 0;
            GlobalVariable.currentFireCount = 0;
            GlobalVariable.fireId = setInterval(fire, 250);
        }
    })
}

export default fireButton;
