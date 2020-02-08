//IIFE -- Immediately Invoked Function Expression
// mean? is an anonymous self-executing function
let game = (function(){
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;

    let startScene:scenes.Start;
   

    /**
     * Perform Initialization in the Start function
     *
     */
    function Start():void
    {
        console.log(`%c Game Started`, "color: blue; font-size:20px;");
        stage = new createjs.Stage(canvas);
        config.Game.STAGE = stage; // create a reference to the Global Stage
        createjs.Ticker.framerate = 60; // declare the framerate as 60FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Main();
    }

    /**
     * This is the main Game Loop
     * This function 'triggers' every frame
     */
    function Update():void
    {
        
        startScene.Update();

        stage.update();
    }

    /**
     * This function is the main function of the game
     *
     */
    function Main():void
    {
        console.log(`%c Main Started`, "color: green; font-size:16px;");

        startScene = new scenes.Start();
        stage.addChild(startScene);

    }

    window.addEventListener("load", Start);

})();