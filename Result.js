class Result {
    static moneneyWinInGame(result, bid) {
        if(result) return 3*bid;
        else return 0;
    }
    static checkWinner(draw) {
        if(draw[0] === draw[1] && draw[1] === draw[2]) return true;
        else return false;
    }
}