class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.querySelector('.spin').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.wallet');
        this.boards = document.querySelectorAll('.box');
        this.inputBid = document.querySelector('.money');
        this.spanResult = document.querySelector('.result');
        this.spanGames = document.querySelector('.number');
        this.spanWins = document.querySelector('.win');
        this.spanLosses = document.querySelector('.loss');
        this.render()
    }
    render(colors = ['#868786', '#868786', '#868786'], money = this.wallet.getWalletValue(),
        result = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        console.log('test');
        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index]
        });
        this.spanWallet.textContent = money+'$';
        if (result) {
            result = `You win ${bid} $.`;
            this.spanResult.style.color = '#00bf33';
        } else if (!result && result !== '') {
            result = `You lose ${bid} $.`;
            this.spanResult.style.color = '#fc0303';

        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        this.inputBid.value = '';
    }
    startGame() {

        let loope = setInterval(() => {
            let colorss = ['#fc0303', '#2100f5', '#00bf33' ];
            let boxes = document.getElementsByClassName('box');
            let i = Math.floor(Math.random() * 2);
            for (let j = 0; j <= 2; j++) {
                boxes[j].style.backgroundColor = colorss[i];
                if (this.inputBid.value < 1) {
                   clearInterval(loope); 
               }
            };
        }, 100);
        setTimeout(() => {
            if (this.inputBid.value < 1) {
                return alert('Not enough money!');
            }
            const bid = Math.floor(this.inputBid.value);
            if (!this.wallet.checkCanPlay(bid)) {
                return alert('Not enough money or wrong value');
            }
            this.spanWins.style.color = '#00bf33';
            this.spanLosses.style.color = '#fc0303';
            this.wallet.changeWallet(bid, '-');
            this.draw = new Draw();
            const colors = this.draw.getDrawResult();
            const win = Result.checkWinner(colors);
            const wonMoney = Result.moneneyWinInGame(win, bid);
            this.wallet.changeWallet(wonMoney, '+');
            this.stats.addGameToStatistics(win, bid);
            this.render(colors, this.wallet.getWalletValue(),
                win, this.stats.showStatistics(), bid, wonMoney);
            clearInterval(loope);
        }, 5000)

    }
}