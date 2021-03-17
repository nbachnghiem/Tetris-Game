import Block from "./Block.js";
import directions from "./directions.js";

class TBlock extends Block {
    constructor(area = {
        area1: [],
        area2: [],
        area3: [],
        area4: []
    }, direction){
        super(area, direction);
    }

    rotate() {
        if (this.direction === directions.TOP)
        {
            this.setArea({
                area1: [this.area.area1[0] + 1, this.area.area1[1] - 1],
                area2: [this.area.area2[0] + 1, this.area.area2[1] + 1],
                area3: this.area.area3,
                area4: [this.area.area4[0] - 1, this.area.area4[1] - 1]
            })
            this.setDirection(directions.LEFT);
        }
        else if (this.direction === directions.LEFT)
        {
            this.setArea({
                area1: [this.area.area1[0] + 1, this.area.area1[1] + 1],
                area2: [this.area.area2[0] - 1, this.area.area2[1] + 1],
                area3: this.area.area3,
                area4: [this.area.area4[0] + 1, this.area.area4[1] - 1]
            })
            this.setDirection(directions.BOTTOM);
        }
        else if (this.direction === directions.BOTTOM)
        {
            this.setArea({
                area1: [this.area.area1[0] - 1, this.area.area1[1] + 1],
                area2: [this.area.area2[0] - 1, this.area.area2[1] - 1],
                area3: this.area.area3,
                area4: [this.area.area4[0] + 1, this.area.area4[1] + 1]
            })
            this.setDirection(directions.RIGHT);
        }
        else {
            this.setArea({
                area1: [this.area.area1[0] - 1, this.area.area1[1] - 1],
                area2: [this.area.area2[0] + 1, this.area.area2[1] - 1],
                area3: this.area.area3,
                area4: [this.area.area4[0] - 1, this.area.area4[1] + 1]
            })
            this.setDirection(directions.TOP);
        }
    }
}

export default TBlock;