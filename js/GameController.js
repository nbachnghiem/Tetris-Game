import Board from "./models/Board.js";
import TBlock from "./models/TBlock.js";

class GameController {
    constructor() {
    }

    createBoard() {
        const board = new Board();
        board.render();
    }

    setCurrentBlock(block) {
        this.currentBlock = block;
    }

    listenToKeyPress() {
        $(window).keydown((event) => {
            const { key } = event;
            if (!this.currentBlock.canGoDown()) {
                Board.occupiedBoxes.push(
                    this.currentBlock.area1.join("-"),
                    this.currentBlock.area2.join("-"), 
                    this.currentBlock.area3.join("-"), 
                    this.currentBlock.area4.join("-")
                );
                console.log(Board.occupiedBoxes);
                this.currentBlock = null;
                const tblock = new TBlock();
                this.setCurrentBlock(tblock);
            };
            if (key === "ArrowLeft") this.currentBlock.goLeft();
            else if (key === "ArrowRight") this.currentBlock.goRight();
            else if (key === "ArrowDown") this.currentBlock.goDown();
            else if (key === "ArrowUp") this.currentBlock.rotate();
        });
    }

    start() {
        this.createBoard();
        const tblock = new TBlock();
        this.setCurrentBlock(tblock);
        this.listenToKeyPress(tblock);
    }
}

export default GameController;