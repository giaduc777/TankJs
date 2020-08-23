class GlobalVariable {
    constructor(){
        this.intervalId =0;
        this.fireId =0;
        this.currentTank = 0;
        this.prevTank = 0;
        this.currentFireCount = 0;
        this.prevFireCount = 0;
        this.gameMode = "none";
    }
}

export default (new GlobalVariable);
