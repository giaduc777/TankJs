import GlobalVariable from './globalVariable';

function randomTank(){

    if(GlobalVariable.prevTank > 0){
        document.querySelector("#box" + GlobalVariable.currentTank).firstElementChild.style.zIndex=-10;
    }

    GlobalVariable.currentTank = Math.floor(Math.random() * 9 + 1);

    while(GlobalVariable.prevTank === GlobalVariable.currentTank){
        GlobalVariable.currentTank = Math.floor(Math.random() * 9 + 1);
    }

    GlobalVariable.prevTank = GlobalVariable.currentTank;

   document.querySelector("#box" + GlobalVariable.currentTank).firstElementChild.style.zIndex=10;
}

export default randomTank;