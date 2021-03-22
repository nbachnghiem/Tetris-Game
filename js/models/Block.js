import directions from "../directions.js";
import colors from "../colors.js";
import Board from "./Board.js";

class Block {
    constructor() {
        this.direction = directions.TOP;
        this.setColor();
    }

    getArea() {
        return this;
    }

    getArea(areaN) {
        switch(areaN) {
            case 1: return this.area1;
            case 2: return this.area2;
            case 3: return this.area3;
            case 4: return this.area4;
            default: break;
        }
    }

    getDirection() {
        return this.direction;
    }

    setArea(area1, area2, area3, area4) {
        this.area1 = area1;
        this.area2 = area2;
        this.area3 = area3;
        this.area4 = area4;
    }

    setColor() {
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    setDirection(newDirection) {
        this.direction = newDirection;
    }

    canGo() {
        let canGoLeft = true;
        let canGoRight = true;
        let canGoDown = true;
        if(this.area1[1] === 0 || this.area2[1] === 0 || this.area3[1] === 0 || this.area4[1] === 0)
            canGoLeft = false;
        if(this.area1[1] === Board.cols - 1 || this.area2[1] === Board.cols - 1 || this.area3[1] === Board.cols - 1 || this.area4[1] === 9)
            canGoRight = false;
        if(this.area1[0] === Board.rows - 1 || this.area2[0] === Board.rows - 1 || this.area3[0] === Board.rows - 1 || this.area4[0] === Board.rows - 1)
            canGoDown = false;
        return {
            canGoLeft,
            canGoRight,
            canGoDown
        }
    }

    calculateXY(areaN, dirX, dirY) {
        return [areaN[0] + dirX, areaN[1] + dirY];
    }

    refresh() {
        for (let i = 1; i <= 4; i++) {
            const areaN = this.getArea(i);
            const area1Element = $(`#${areaN[0] + "-" + areaN[1]}`);
            area1Element.css("backgroundImage", "none");
        }
    }

    goLeft() {
        if(!this.canGo().canGoLeft) return;
        this.refresh();
        this.setArea(
            this.calculateXY(this.area1, 0, -1),
            this.calculateXY(this.area2, 0, -1),
            this.calculateXY(this.area3, 0, -1),
            this.calculateXY(this.area4, 0, -1),
        );
        this.render();
    }

    goRight() {
        if(!this.canGo().canGoRight) return;
        this.refresh();
        this.setArea(
            this.calculateXY(this.area1, 0, 1),
            this.calculateXY(this.area2, 0, 1),
            this.calculateXY(this.area3, 0, 1),
            this.calculateXY(this.area4, 0, 1),
        );
        this.render();
    }

    goDown() {
        if(!this.canGo().canGoDown) return;
        this.refresh();
        this.setArea(
            this.calculateXY(this.area1, 1, 0),
            this.calculateXY(this.area2, 1, 0),
            this.calculateXY(this.area3, 1, 0),
            this.calculateXY(this.area4, 1, 0),
        );
        this.render();
    }

    rotate() {}

    render() {
        for (let i = 1; i <= 4; i++) {
            const areaN = this.getArea(i);
            const area1Element = $(`#${areaN[0] + "-" + areaN[1]}`);
            area1Element.css("backgroundImage", `url('images/${this.color}`);
        }
    }
}

export default Block;