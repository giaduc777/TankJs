import GlobalVariable from './globalVariable';

function fire(){

    GlobalVariable.currentFireCount++;

    if(GlobalVariable.prevFireCount >= 1){
        document.querySelector("#bullet" + GlobalVariable.prevFireCount).firstElementChild.style.opacity=0;
    }

        document.querySelector('#bullet' + GlobalVariable.currentFireCount).firstElementChild.style.opacity=1;
        GlobalVariable.prevFireCount = GlobalVariable.currentFireCount;
    
        if(GlobalVariable.currentFireCount === 16){
            clearInterval(GlobalVariable.intervalId);
            clearInterval(GlobalVariable.fireId);
            document.querySelector("#try-again").disabled=false;

            //////////Tank is destroy///////////
            if(GlobalVariable.currentTank === 5){
                document.querySelector("#bullet" + GlobalVariable.prevFireCount).firstElementChild.style.opacity=0;
                document.querySelector('#box' + GlobalVariable.prevTank).firstElementChild.style.zIndex=-10
                document.querySelector('#box10').firstElementChild.style.zIndex=20
                document.getElementById('box10').style.display="inline-block"
                document.querySelector('#reset-game').disabled = false;
                document.querySelector(".trigger").disabled = true;
            }
            else if(GlobalVariable.currentTank !== 5){
                document.querySelector("#bullet" + GlobalVariable.prevFireCount).firstElementChild.style.opacity=0;
                document.querySelector('#box11').firstElementChild.style.zIndex=20;
                document.querySelector('#reset-game').disabled = false;
                document.querySelector(".trigger").disabled = true;
            }
        }
}

export default fire;