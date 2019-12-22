class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue'];
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }
    drawResult() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            let index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            colors.push(color);
        }
        return colors;
    }
}

const draw = new Draw();