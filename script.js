function renderBoxes() {
    for (let x = 0; x < 20; x++) {
        for (let y = 0; y < 10; y++) {
            $(".board").append(`
                <div id='${x + "-" + y}' class="box">${x + "-" + y}</div>
            `);
        }
    }
}

$( document ).ready(function() {
    renderBoxes();
});