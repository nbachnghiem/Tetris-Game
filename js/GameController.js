import Board from "./models/Board.js";
import TBlock from "./models/TBlock.js";

class GameController {
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
            if (key === "ArrowLeft") this.currentBlock.goLeft();
            else if (key === "ArrowRight") this.currentBlock.goRight();
            else if (key === "ArrowDown") this.currentBlock.goDown();
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