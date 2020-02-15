module objects
{
    export class Plane extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS


        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("plane"), 0, 0, true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void 
        {
            // check left boundary
            if(this.position.x <= this.halfWidth)
            {
                this.position = new Vector2(this.halfWidth, this.position.y);
            }

            // check right boundary
            if(this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth)
            {
                this.position = new Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y)
            }
        }       
        
        private _move():void
        {
            let mouseX = config.Game.STAGE.mouseX;
            let mouseY = config.Game.STAGE.mouseY;

           this.position = new Vector2(mouseX, 430); // fixed bottom
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {

        }

        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }

        public Reset(): void 
        {

        }

        
    }
}