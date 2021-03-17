// import Block from "./Block.js";
import directions from "./directions.js";
import TBlock from "./TBlock.js";

// const block1 = new Block({
//     area1: [17, 8],
//     area2: [18, 7],
//     area3: [18, 8],
//     area4: [18, 9],
// });
// block1.goDown();

function renderBoxes() {
    for (let x = 0; x < 20; x++) {
        for (let y = 0; y < 10; y++) {
            $(".board").append(`
                <div id='${x + "-" + y}' class="box">${x + "-" + y}</div>
            `);
        }
    }
}

function renderTetrisBlock() {
    $("6-5").append("T");
}

$( document ).ready(function() {
    renderBoxes();
    renderTetrisBlock();

    const tblock = new TBlock({
        area1: [1, 8],
        area2: [2, 9],
        area3: [1, 9],
        area4: [0, 9],
    });
    tblock.rotate();
    tblock.rotate();
    tblock.rotate();
    tblock.rotate();
    test(tblock);
    tblock.setDirection(directions.LEFT);
    console.log(tblock);
});

function test(block) {
    const { area } = block;
    console.log(area.area1[0] + "-" + area.area1[1]);
    const block1 = document.getElementById(area.area1[0] + "-" + area.area1[1]);
    const block2 = document.getElementById(area.area2[0] + "-" + area.area2[1]);
    const block3 = document.getElementById(area.area3[0] + "-" + area.area3[1]);
    const block4 = document.getElementById(area.area4[0] + "-" + area.area4[1]);
    console.log(block1);
    block1.style.backgroundColor = "yellow";
    block2.style.backgroundColor = "yellow"
    block3.style.backgroundColor = "yellow"
    block4.style.backgroundColor = "yellow"
}