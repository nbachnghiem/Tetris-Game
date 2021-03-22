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
        else if (this.direction === directions.LEFT)
        {
            this.setArea(
                [this.area1[0] + 1, this.area1[1] + 1],
                [this.area2[0] - 1, this.area2[1] + 1],
                this.area3,
                [this.area4[0] + 1, this.area4[1] - 1]
            )
            this.setDirection(directions.BOTTOM);
        }
        else if (this.direction === directions.BOTTOM)
        {
            this.setArea(
                [this.area1[0] - 1, this.area1[1] + 1],
                [this.area2[0] - 1, this.area2[1] - 1],
                this.area3,
                [this.area4[0] + 1, this.area4[1] + 1]
            )
            this.setDirection(directions.RIGHT);
        }
        else {
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