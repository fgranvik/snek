enum DefaultSettings {
  width = 64,
  height = 64,
  speed = DefaultSettings.width/2,
  gameLoop = 200,
  snekSize = DefaultSettings.width/2
}

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

type Position = {
  X: number,
  Y: number
}

class PlayGround {
  canvas: HTMLCanvasElement | undefined
  context: CanvasRenderingContext2D | any
  applePosition: Position

  constructor() {
    this.applePosition = {X: 0, Y: 0}
  }

  init = () :void => {
    this.canvas = document.createElement("canvas") as HTMLCanvasElement;
    this.canvas.width = (DefaultSettings.width * 10)
    this.canvas.height = (DefaultSettings.height * 10)
    this.canvas.id = "Snek"
    this.applePosition = {X: 0, Y: 0}
    
    this.context = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas)
  }

  drawPoints = (points: number) :void => {
    this.context.font = `${DefaultSettings.width/2.2}px Marker Felt`;
    this.context.fillStyle = "#FFFFFF"
    this.context.fillText(`Points: ${points}`, 15, 50);
  }

  randomPosition = (min: number, max: number) :number => {
    return Math.round(Math.random() * (max - min) + min)
  }  

  repositionApple = () :void => {
    const apple_X = this.randomPosition(0, (DefaultSettings.width*10)/DefaultSettings.snekSize)
    const apple_Y = this.randomPosition(0, (DefaultSettings.height*10)/DefaultSettings.snekSize)
  
    this.applePosition = {
      X: apple_X, 
      Y: apple_Y
    }
  }

  drawApple = () :void => {
    this.context.fillStyle = "#AA0000"

    this.context.fillRect(this.applePosition.X*DefaultSettings.snekSize, this.applePosition.Y*DefaultSettings.snekSize,32,32)
  }

  clear = () => {
    this.context.clearRect(0, 0, DefaultSettings.width * 10, DefaultSettings.width * 10)
  }
}

class Snek {
  position: Position
  tail: Array<Position>
  static currentDirection: Direction | undefined
  static previousDirection: Direction | undefined

  constructor(x: number, y: number) {
    this.position = {X: x, Y: y};
    this.tail = []
  }

  pushToTail = (current: Position) :void => {
    this.tail.push(JSON.parse(JSON.stringify(current)))
  }

  rotateTail = () :void => {
    this.tail.shift()
    this.tail.push(JSON.parse(JSON.stringify(this.position)))
  }

  snekBlock = (color: string, position: Position, playground: PlayGround) :void => {
    let context = playground.context
    context.fillStyle = color;
    context.fillRect((position.X*DefaultSettings.snekSize), (position.Y*DefaultSettings.snekSize), DefaultSettings.snekSize, DefaultSettings.snekSize);
  }

  drawSnek = (playground: PlayGround) :void => {
    playground.clear() // Clear the canvas for update
    playground.drawPoints(Game.points) // Draw points

    // Draw head of snek
    this.snekBlock("#000000", this.position, playground)

    // Draw tail of snek
    this.tail.forEach(position => {
      this.snekBlock("#444444", position, playground)
    });
  }

  killSnek = (playground: PlayGround) :void => {
    Game.isRunning = false
  }

  move = (playground: PlayGround) :void => {
    console.log("position", this.position)

    if(Snek.currentDirection !== Snek.previousDirection) {
      Snek.previousDirection = Snek.currentDirection
    }

    this.rotateTail()

    switch(Snek.currentDirection) {
      case Direction.Down:
        this.position.Y += 1
        break;
      case Direction.Up:
        this.position.Y -= 1
        break;
      case Direction.Right:
        this.position.X += 1
        break;
      case Direction.Left:
        this.position.X -= 1
        break;
      default:
        this.position.Y += 1
        break;
    }

    if(this.tail.some(value => value.X === this.position.X && value.Y === this.position.Y)) {
      this.killSnek(playground)
    }

    // Check if Snek is within boundry
    if(this.position.X < 0 || this.position.X >= ((DefaultSettings.width*10)/DefaultSettings.snekSize) || this.position.Y < 0 || this.position.Y >= ((DefaultSettings.height*10)/DefaultSettings.snekSize)) {
      this.killSnek(playground)
    }

    // Check if Snek eats apple
    if(this.position.X === playground.applePosition.X && this.position.Y === playground.applePosition.Y) {
      playground.repositionApple()
      Game.points += 1
      this.pushToTail(this.position)
    }

    this.drawSnek(playground)
    playground.drawApple()
  }
}

class Controls {
  static keyPressed: string

  static keyEvent = (ev: KeyboardEvent) => { 
    Controls.keyPressed = ev.code 

    switch(this.keyPressed) {
      case "KeyP":
        Game.isRunning = !Game.isRunning
        Snek.currentDirection = Direction.Down
        break;
      case "ArrowDown":
        Snek.currentDirection = Direction.Down
        break;
      case "ArrowUp":
        Snek.currentDirection = Direction.Up
        break;
      case "ArrowRight":
        Snek.currentDirection = Direction.Right
        break;
      case "ArrowLeft":
        Snek.currentDirection = Direction.Left
        break;
      default:
          // code block
    }
  }
}

class Intro {
  static context: CanvasRenderingContext2D

  static init = (playground: PlayGround) :void => {
    this.context = playground.context
    // This is
    this.context.font = `${DefaultSettings.width}px Marker Felt`;
    this.context.fillStyle = "#FFFFFF"
    this.context.fillText('this is', ((DefaultSettings.width*10)*0.2), ((DefaultSettings.height*10)*.2)-30);

    // Snek
    this.context.font = `${(DefaultSettings.height*10)*.35}px Marker Felt`;
    this.context.strokeStyle = 'orange';
    this.context.lineWidth = (DefaultSettings.width*10)*.06;
    this.context.strokeText('SNEK', ((DefaultSettings.width*10)*.1), ((DefaultSettings.height*10)*.5));
    this.context.fillText('SNEK', ((DefaultSettings.width*10)*.1), ((DefaultSettings.height*10)*.5));

    // Start
    this.context.font = `${(DefaultSettings.height*10)*.1}px Marker Felt`;
    this.context.fillText('Press `P` to play', ((DefaultSettings.width*10)*.16), ((DefaultSettings.height*10)*.7));

    // Instructions
    this.context.font = `${(DefaultSettings.height*10)*.05}px Marker Felt`;
    this.context.fillText('Use arrow keys to control your snek', ((DefaultSettings.width*10)*0.1), ((DefaultSettings.height*10)-20));
  }
}

class Game {
  static isRunning: boolean = false
  static snek: Snek
  static points: number = 0
  static gameSpeed = DefaultSettings.gameLoop

  static init = () => {
    window.onkeydown = Controls.keyEvent

    let playground = new PlayGround()
    playground.init()
    playground.repositionApple()
    playground.drawApple()
    this.snek = new Snek(0,0)

    setInterval(() => {
      if(this.isRunning) {
        this.snek.move(playground)
      } else {
        Intro.init(playground)
      }
    }, this.gameSpeed)
  }
}

Game.init()
