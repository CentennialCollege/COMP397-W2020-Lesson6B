module config
{  
    export class Game
    {
        public static SCREEN_WIDTH: number = 640;
        public static SCREEN_HEIGHT: number = 480;
        public static STAGE: createjs.Stage;
        public static SCENE_STATE: scenes.State;
        public static ASSETS: createjs.LoadQueue;
    }
}