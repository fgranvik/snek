"use strict";
var _a, _b, _c;
var DefaultSettings;
(function (DefaultSettings) {
    DefaultSettings[DefaultSettings["width"] = 64] = "width";
    DefaultSettings[DefaultSettings["height"] = 64] = "height";
    DefaultSettings[DefaultSettings["speed"] = 32] = "speed";
    DefaultSettings[DefaultSettings["gameLoop"] = 200] = "gameLoop";
    DefaultSettings[DefaultSettings["snekSize"] = 32] = "snekSize";
})(DefaultSettings || (DefaultSettings = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
class PlayGround {
    constructor() {
        this.init = () => {
            this.canvas = document.createElement("canvas");
            this.canvas.width = (DefaultSettings.width * 10);
            this.canvas.height = (DefaultSettings.height * 10);
            this.canvas.id = "Snek";
            this.applePosition = { X: 0, Y: 0 };
            this.context = this.canvas.getContext("2d");
            document.body.appendChild(this.canvas);
        };
        this.drawPoints = (points) => {
            this.context.font = `${DefaultSettings.width / 2.2}px Marker Felt`;
            this.context.fillStyle = "#FFFFFF";
            this.context.fillText(`Points: ${points}`, 15, 50);
        };
        this.randomPosition = (min, max) => {
            return Math.round(Math.random() * (max - min) + min);
        };
        this.repositionApple = () => {
            const apple_X = this.randomPosition(0, (DefaultSettings.width * 10) / DefaultSettings.snekSize);
            const apple_Y = this.randomPosition(0, (DefaultSettings.height * 10) / DefaultSettings.snekSize);
            this.applePosition = {
                X: apple_X,
                Y: apple_Y
            };
        };
        this.drawApple = () => {
            this.context.fillStyle = "#AA0000";
            this.context.fillRect(this.applePosition.X * DefaultSettings.snekSize, this.applePosition.Y * DefaultSettings.snekSize, 32, 32);
        };
        this.clear = () => {
            this.context.clearRect(0, 0, DefaultSettings.width * 10, DefaultSettings.width * 10);
        };
        this.applePosition = { X: 0, Y: 0 };
    }
}
class Snek {
    constructor(x, y) {
        this.pushToTail = (current) => {
            this.tail.push(JSON.parse(JSON.stringify(current)));
        };
        this.rotateTail = () => {
            this.tail.shift();
            this.tail.push(JSON.parse(JSON.stringify(this.position)));
        };
        this.snekBlock = (color, position, playground) => {
            let context = playground.context;
            context.fillStyle = color;
            context.fillRect((position.X * DefaultSettings.snekSize), (position.Y * DefaultSettings.snekSize), DefaultSettings.snekSize, DefaultSettings.snekSize);
        };
        this.drawSnek = (playground) => {
            playground.clear(); // Clear the canvas for update
            playground.drawPoints(Game.points); // Draw points
            // Draw head of snek
            this.snekBlock("#000000", this.position, playground);
            // Draw tail of snek
            this.tail.forEach(position => {
                this.snekBlock("#444444", position, playground);
            });
        };
        this.killSnek = (playground) => {
            Game.isRunning = false;
        };
        this.move = (playground) => {
            console.log("position", this.position);
            if (Snek.currentDirection !== Snek.previousDirection) {
                Snek.previousDirection = Snek.currentDirection;
            }
            this.rotateTail();
            switch (Snek.currentDirection) {
                case Direction.Down:
                    this.position.Y += 1;
                    break;
                case Direction.Up:
                    this.position.Y -= 1;
                    break;
                case Direction.Right:
                    this.position.X += 1;
                    break;
                case Direction.Left:
                    this.position.X -= 1;
                    break;
                default:
                    this.position.Y += 1;
                    break;
            }
            if (this.tail.some(value => value.X === this.position.X && value.Y === this.position.Y)) {
                this.killSnek(playground);
            }
            // Check if Snek is within boundry
            if (this.position.X < 0 || this.position.X >= ((DefaultSettings.width * 10) / DefaultSettings.snekSize) || this.position.Y < 0 || this.position.Y >= ((DefaultSettings.height * 10) / DefaultSettings.snekSize)) {
                this.killSnek(playground);
            }
            // Check if Snek eats apple
            if (this.position.X === playground.applePosition.X && this.position.Y === playground.applePosition.Y) {
                playground.repositionApple();
                Game.points += 1;
                this.pushToTail(this.position);
            }
            this.drawSnek(playground);
            playground.drawApple();
        };
        this.position = { X: x, Y: y };
        this.tail = [];
    }
}
class Controls {
}
_a = Controls;
Controls.keyEvent = (ev) => {
    Controls.keyPressed = ev.code;
    switch (_a.keyPressed) {
        case "KeyP":
            Game.isRunning = !Game.isRunning;
            Snek.currentDirection = Direction.Down;
            break;
        case "ArrowDown":
            Snek.currentDirection = Direction.Down;
            break;
        case "ArrowUp":
            Snek.currentDirection = Direction.Up;
            break;
        case "ArrowRight":
            Snek.currentDirection = Direction.Right;
            break;
        case "ArrowLeft":
            Snek.currentDirection = Direction.Left;
            break;
        default:
        // code block
    }
};
class Intro {
}
_b = Intro;
Intro.init = (playground) => {
    _b.context = playground.context;
    // This is
    _b.context.font = `${DefaultSettings.width}px Marker Felt`;
    _b.context.fillStyle = "#FFFFFF";
    _b.context.fillText('this is', ((DefaultSettings.width * 10) * 0.2), ((DefaultSettings.height * 10) * .2) - 30);
    // Snek
    _b.context.font = `${(DefaultSettings.height * 10) * .35}px Marker Felt`;
    _b.context.strokeStyle = 'orange';
    _b.context.lineWidth = (DefaultSettings.width * 10) * .06;
    _b.context.strokeText('SNEK', ((DefaultSettings.width * 10) * .1), ((DefaultSettings.height * 10) * .5));
    _b.context.fillText('SNEK', ((DefaultSettings.width * 10) * .1), ((DefaultSettings.height * 10) * .5));
    // Start
    _b.context.font = `${(DefaultSettings.height * 10) * .1}px Marker Felt`;
    _b.context.fillText('Press `P` to play', ((DefaultSettings.width * 10) * .16), ((DefaultSettings.height * 10) * .7));
    // Instructions
    _b.context.font = `${(DefaultSettings.height * 10) * .05}px Marker Felt`;
    _b.context.fillText('Use arrow keys to control your snek', ((DefaultSettings.width * 10) * 0.1), ((DefaultSettings.height * 10) - 20));
};
class Game {
}
_c = Game;
Game.isRunning = false;
Game.points = 0;
Game.gameSpeed = DefaultSettings.gameLoop;
Game.init = () => {
    window.onkeydown = Controls.keyEvent;
    let playground = new PlayGround();
    playground.init();
    playground.repositionApple();
    playground.drawApple();
    _c.snek = new Snek(0, 0);
    setInterval(() => {
        if (_c.isRunning) {
            _c.snek.move(playground);
        }
        else {
            Intro.init(playground);
        }
    }, _c.gameSpeed);
};
Game.init();
//# sourceMappingURL=app.js.map