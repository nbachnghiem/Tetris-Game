import directions from "./directions.js";

class Block {
    constructor(area = {
        area1: [],
        area2: [],
        area3: [],
        area4: []
    }) {
        this.area = area;
        this.direction = directions.TOP;
    }

    getArea() {
        return this.area;
    }

    getDirection() {
        return this.direction;
    }

    setArea(newArea) {
        this.area = newArea;
    }

    setDirection(newDirection) {
        this.direction = newDirection;
    }

    canGo() {
        let canGoLeft = true;
        let canGoRight = true;
        let canGoDown = true;
        if(this.area.area1[1] === 0 || this.area.area2[1] === 0 || this.area.area3[1] === 0 || this.area.area4[1] === 0)
            canGoLeft = false;
        if(this.area.area1[1] === 9 || this.area.area2[1] === 9 || this.area.area3[1] === 9 || this.area.area4[1] === 9)
            canGoRight = false;
        if(this.area.area1[0] === 19 || this.area.area2[0] === 19 || this.area.area3[0] === 19 || this.area.area4[0] === 19)
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

    goLeft() {
        if(!this.canGo().canGoLeft) return;
        this.setArea({
            area1: this.calculateXY(this.area.area1, 0, -1),
            area2: this.calculateXY(this.area.area2, 0, -1),
            area3: this.calculateXY(this.area.area3, 0, -1),
            area4: this.calculateXY(this.area.area4, 0, -1),
        });
    }

    goRight() {
        if(!this.canGo().canGoRight) return;
        this.setArea({
            area1: this.calculateXY(this.area.area1, 0, 1),
            area2: this.calculateXY(this.area.area2, 0, 1),
            area3: this.calculateXY(this.area.area3, 0, 1),
            area4: this.calculateXY(this.area.area4, 0, 1),
        });
    }

    goDown() {
        if(!this.canGo().canGoDown) return;
        this.setArea({
            area1: this.calculateXY(this.area.area1, 1, 0),
            area2: this.calculateXY(this.area.area2, 1, 0),
            area3: this.calculateXY(this.area.area3, 1, 0),
            area4: this.calculateXY(this.area.area4, 1, 0),
        });
    }

    rotate() {}
}

export default Block;