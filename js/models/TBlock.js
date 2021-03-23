import Board from "./Board.js";
import Block from "./Block.js";
import directions from "../directions.js";

class TBlock extends Block {
    constructor () {
        super();
        this.area1 = [0, 4];
        this.area2 = [this.area1[0] + 1, this.area1[1] - 1];
        this.area3 = [this.area1[0] + 1, this.area1[1]];
        this.area4 = [this.area1[0] + 1, this.area1[1] + 1];
        this.render();
    }

    canGoLeft() {
        if(this.area1[1] === 0 || this.area2[1] === 0 || this.area3[1] === 0 || this.area4[1] === 0
            || (this.direction === directions.TOP
                &&  Board.occupiedBoxes.includes(this.area1[0] + "-" + (this.area1[1] - 1))
                ||  Board.occupiedBoxes.includes(this.area2[0] + "-" + (this.area2[1] - 1))
            )
            || (this.direction === directions.LEFT
                &&  Board.occupiedBoxes.includes(this.area1[0] + "-" + (this.area1[1] - 1))
                ||  Board.occupiedBoxes.includes(this.area2[0] + "-" + (this.area2[1] - 1))
                ||  Board.occupiedBoxes.includes(this.area4[0] + "-" + (this.area4[1] - 1))
            )
            || (this.direction === directions.BOTTOM
                &&  Board.occupiedBoxes.includes(this.area1[0] + "-" + (this.area1[1] - 1))
                ||  Board.occupiedBoxes.includes(this.area4[0] + "-" + (this.area4[1] - 1))
            )
            || (this.direction === directions.RIGHT
                &&  Board.occupiedBoxes.includes(this.area2[0] + "-" + (this.area2[1] - 1))
                ||  Board.occupiedBoxes.includes(this.area3[0] + "-" + (this.area3[1] - 1))
                ||  Board.occupiedBoxes.includes(this.area4[0] + "-" + (this.area4[1] - 1))
            )) return false;
        return true;
    }

    canGoRight() {
        if(this.area1[1] === Board.cols - 1 || this.area2[1] === Board.cols - 1 || this.area3[1] === Board.cols - 1 || this.area4[1] === 9
            || (this.direction === directions.TOP
                &&  Board.occupiedBoxes.includes(this.area1[0] + "-" + (this.area1[1] + 1))
                ||  Board.occupiedBoxes.includes(this.area2[0] + "-" + (this.area2[1] + 1))
            )
            || (this.direction === directions.LEFT
                &&  Board.occupiedBoxes.includes(this.area2[0] + "-" + (this.area2[1] + 1))
                ||  Board.occupiedBoxes.includes(this.area3[0] + "-" + (this.area3[1] + 1))
                ||  Board.occupiedBoxes.includes(this.area4[0] + "-" + (this.area4[1] + 1))
            )
            || (this.direction === directions.BOTTOM
                &&  Board.occupiedBoxes.includes(this.area1[0] + "-" + (this.area1[1] + 1))
                ||  Board.occupiedBoxes.includes(this.area2[0] + "-" + (this.area2[1] + 1))
            )
            || (this.direction === directions.RIGHT
                &&  Board.occupiedBoxes.includes(this.area1[0] + "-" + (this.area1[1] + 1))
                ||  Board.occupiedBoxes.includes(this.area2[0] + "-" + (this.area2[1] + 1))
                ||  Board.occupiedBoxes.includes(this.area4[0] + "-" + (this.area4[1] + 1))
            )) return false;
        return true;
    }

    canGoDown() {
    if (this.area1[0] === Board.rows - 1 || this.area2[0] === Board.rows - 1 || this.area3[0] === Board.rows - 1 || this.area4[0] === Board.rows - 1
            || Board.occupiedBoxes.includes(this.area1[0] + 1 + "-" + (this.area1[1]))
            || Board.occupiedBoxes.includes(this.area2[0] + 1 + "-" + (this.area2[1]))
            || Board.occupiedBoxes.includes(this.area3[0] + 1 + "-" + (this.area3[1]))
            || Board.occupiedBoxes.includes(this.area4[0] + 1 + "-" + (this.area4[1]))
        ) return false;
        return true;
    } 

    rotate() {
        this.refresh();
        if (this.direction === directions.TOP)
        {
            this.setArea(
                [this.area1[0] + 1, this.area1[1] - 1],
                [this.area2[0] + 1, this.area2[1] + 1],
                this.area3,
                [this.area4[0] - 1, this.area4[1] - 1]
            )
            this.setDirection(directions.LEFT);
        }
        else if (this.direction === directions.LEFT && !Board.occupiedBoxes.includes(this.area3[0] + "-" + (this.area3[1] + 1)) && this.area3[1] < Board.cols - 1)
        {
            this.setArea(
                [this.area1[0] + 1, this.area1[1] + 1],
                [this.area2[0] - 1, this.area2[1] + 1],
                this.area3,
                [this.area4[0] + 1, this.area4[1] - 1]
            )
            this.setDirection(directions.BOTTOM);
        }
        else if (this.direction === directions.BOTTOM && !Board.occupiedBoxes.includes(this.area3[0] - 1 + "-" + this.area3[1]))
        {
            this.setArea(
                [this.area1[0] - 1, this.area1[1] + 1],
                [this.area2[0] - 1, this.area2[1] - 1],
                this.area3,
                [this.area4[0] + 1, this.area4[1] + 1]
            )
            this.setDirection(directions.RIGHT);
        }
        else if (this.direction === directions.RIGHT  && !Board.occupiedBoxes.includes(this.area3[0] + "-" + (this.area3[1] - 1)) && this.area3[1] > 0)
        {
            this.setArea(
                [this.area1[0] - 1, this.area1[1] - 1],
                [this.area2[0] + 1, this.area2[1] - 1],
                this.area3,
                [this.area4[0] - 1, this.area4[1] + 1]
            )
            this.setDirection(directions.TOP);
        }
        this.render();
    }
}

export default TBlock;