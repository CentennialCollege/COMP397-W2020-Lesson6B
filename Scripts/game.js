"use strict";
//IIFE -- Immediately Invoked Function Expression
// mean? is an anonymous self-executing function
var game = (function () {
    var canvas = document.getElementsByTagName('canvas')[0];
    var stage;
    var startLabel;
    var startButton;
    var player;
    /**
     * Perform Initialization in the Start function
     *
     */
    function Start() {
        console.log("%c Game Started", "color: blue; font-size:20px;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // declare the framerate as 60FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Main();
    }
    /**
     * This is the main Game Loop
     * This function 'triggers' every frame
     */
    function Update() {
        player.Update();
        var sqrDistance = objects.Vector2.sqrDistance(player.position, startButton.position);
        var radii = player.halfWidth + startButton.halfWidth;
        if (sqrDistance < (radii * radii)) {
            console.log("Collision!");
        }
        stage.update();
    }
    /**
     * This function is the main function of the game
     *
     */
    function Main() {
        console.log("%c Main Started", "color: green; font-size:16px;");
        startLabel = new objects.Label("The Game", "80px", "Consolas", "#000000", 320, 200, true);
        stage.addChild(startLabel);
        startButton = new objects.Button("./Assets/images/startButton.png", 320, 400, true);
        stage.addChild(startButton);
        startButton.on("click", function () {
            console.log("Start Clicked!");
        });
        player = new objects.Player();
        stage.addChild(player);
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map