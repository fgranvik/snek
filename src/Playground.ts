import { DefaultSettings } from './app'

type Position = {
  X: number
  Y: number
}

class Playground {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D | any
  applePosition: Position

  constructor() {
    this.canvas = document.createElement('canvas') as HTMLCanvasElement
    this.context = this.canvas.getContext('2d')
    this.canvas.width = DefaultSettings.width * 10
    this.canvas.height = DefaultSettings.height * 10
    this.canvas.id = 'Snek'
    this.applePosition = { X: 0, Y: 0 }
  }

  randomPosition = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min)
  }

  repositionApple = (): void => {
    const apple_X = this.randomPosition(
      0,
      (DefaultSettings.width * 10) / DefaultSettings.snekSize - 1
    )
    const apple_Y = this.randomPosition(
      0,
      (DefaultSettings.height * 10) / DefaultSettings.snekSize - 1
    )

    this.applePosition = {
      X: apple_X,
      Y: apple_Y
    }
  }

  drawApple = (): void => {
    this.context.fillStyle = '#AA0000'
    this.context.fillRect(
      this.applePosition.X * DefaultSettings.snekSize,
      this.applePosition.Y * DefaultSettings.snekSize,
      32,
      32
    )
  }

  clear = () => {
    this.context.clearRect(
      0,
      0,
      DefaultSettings.width * 10,
      DefaultSettings.width * 10
    )
  }

  init = (): void => {
    document.body.appendChild(this.canvas)
    this.repositionApple()
    this.drawApple()
  }
}

export default Playground
