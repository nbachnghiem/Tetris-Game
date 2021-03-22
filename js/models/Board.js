class Board {
    static rows = 20;
    static cols = 10;

    render() {
        for (let x = 0; x < Board.rows; x++) {
            for (let y = 0; y < Board.cols; y++) {
                $(".board").append(`
                    <div id='${x + "-" + y}' class="box">${x + "-" + y}</div>
                `);
            }
        }
    }
}

export default Board;