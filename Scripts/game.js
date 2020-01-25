"use strict";
//IIFE -- Immediately Invoked Function Expression
// mean? is an anonymous self-executing function
var game = (function () {
    var canvas = document.getElementsByTagName('canvas')[0];
    var stage;
    var helloLabel;
    var goodByeLabel;
    var clickMeButton;
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
        helloLabel.rotation += 5;
        stage.update();
    }
    /**
     * This function is the main function of the game
     *
     */
    function Main() {
        console.log("%c Main Started", "color: green; font-size:16px;");
        helloLabel = new objects.Label("Hello World", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        goodByeLabel = new objects.Label("Good Bye!", "30px", "Arial", "#FF0000", 320, 300, true);
        stage.addChild(goodByeLabel);
        clickMeButton = new objects.Button("./Assets/images/clickMeButton.png", 320, 400, true);
        stage.addChild(clickMeButton);
        clickMeButton.on("click", function () {
            helloLabel.text = "Clicked!";
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map