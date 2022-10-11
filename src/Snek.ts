import { DefaultSettings } from './app'
import Playground from './Playground'

type Position = {
  X: number
  Y: number
}

export enum Direction {
  Up,
  Down,
  Left,
  Right
}

class Snek {
  head: Position
  tail: Array<Position>
  direction: Direction | undefined
  previousDirection: Direction | undefined
  isAlive: boolean
  speed: number

  constructor() {
    this.tail = []
    this.head = { X: 0, Y: 0 }
    this.direction = Direction.Down
    this.isAlive = true
    this.speed = DefaultSettings.gameLoop
  }

  killSnek = (): void => {
    this.isAlive = false
  }

  pushToTail = (current: Position): void => {
    this.tail.push(JSON.parse(JSON.stringify(current)))
  }

  rotateTail = (): void => {
    this.tail.shift()
    this.tail.push(JSON.parse(JSON.stringify(this.head)))
  }

  move = (playground: Playground): void => {
    playground.clear()
    playground.showPoints()

    if (this.direction !== this.previousDirection) {
      this.previousDirection = this.direction
    }

    this.rotateTail()

    switch (this.direction) {
      case Direction.Down:
        this.head.Y += 1
        break
      case Direction.Up:
        this.head.Y -= 1
        break
      case Direction.Right:
        this.head.X += 1
        break
      case Direction.Left:
        this.head.X -= 1
        break
    }

    // Check if snek eats itself
    if (
      this.tail.some(
        (value) => value.X === this.head.X && value.Y === this.head.Y
      )
    ) {
      this.killSnek()
    }

    // Check if Snek is within boundry
    if (
      this.head.X < 0 ||
      this.head.X >= (DefaultSettings.width * 10) / DefaultSettings.snekSize ||
      this.head.Y < 0 ||
      this.head.Y >= (DefaultSettings.height * 10) / DefaultSettings.snekSize
    ) {
      this.killSnek()
    }

    // Check if Snek eats apple
    if (
      this.head.X === playground.applePosition.X &&
      this.head.Y === playground.applePosition.Y
    ) {
      playground.repositionApple()
      playground.points += 1
      const speed = this.speed * 0.05
      this.speed -= speed

      this.pushToTail(this.head)
    }

    this.drawSnek(playground)
    playground.drawApple()
  }

  snekBlock = (
    color: string,
    position: Position,
    playground: Playground
  ): void => {
    let context = playground.context
    context.fillStyle = color
    context.fillRect(
      position.X * DefaultSettings.snekSize,
      position.Y * DefaultSettings.snekSize,
      DefaultSettings.snekSize,
      DefaultSettings.snekSize
    )
  }

  drawSnek = (playground: Playground): void => {
    // Draw head of snek
    this.snekBlock('#000000', this.head, playground)

    // Draw tail of snek
    this.tail.forEach((position) => {
      this.snekBlock('#444444', position, playground)
    })
  }

  init = (playground: Playground): void => {
    this.drawSnek(playground)
  }
}

export default Snek
