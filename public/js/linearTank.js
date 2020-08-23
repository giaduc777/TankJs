import GlobalVariable from './globalVariable';

function linearTank(){

    if(GlobalVariable.currentTank === 9){
        GlobalVariable.currentTank = 0;
    }

    GlobalVariable.currentTank++;

        if(GlobalVariable.prevTank >= 1){
            document.querySelector('#box' + GlobalVariable.prevTank).firstElementChild.style.zIndex=-10;
        }

        const element = document.querySelector('#box' + GlobalVariable.currentTank)
        element.firstElementChild.style.zIndex=10
        GlobalVariable.prevTank = GlobalVariable.currentTank;
}

export default linearTank;