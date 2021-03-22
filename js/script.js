
import GameController from "./GameController.js";

$( document ).ready(function() {
    const game = new GameController()
    game.start();
});