module objects
{
    export class Ocean extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?: number; // 5 px per frame

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super("./Assets/images/ocean.gif");

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void 
        {
            if(this.position.y >= 0)
            {
                this.Reset();
            }
        }  

        private _move():void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }

        // PUBLIC METHODS
        public Start(): void 
        {
            this._verticalSpeed = 5;
            this.velocity = new Vector2(0, this._verticalSpeed);
            this.Reset();
        }

        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }

        public Reset(): void 
        {
            this.position.y = -960;
        }
    }
}