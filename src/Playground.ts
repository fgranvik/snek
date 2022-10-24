import Game, { DefaultSettings } from './app'
import { Position } from './types'

class Playground {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D | any
  applePosition: Position
  points: number
  record: number

  constructor() {
    this.canvas = document.createElement('canvas') as HTMLCanvasElement
    this.context = this.canvas.getContext('2d')
    this.canvas.width = DefaultSettings.width * 10
    this.canvas.height = DefaultSettings.height * 10
    this.canvas.id = 'Snek'
    this.applePosition = { X: 0, Y: 0 }
    this.points = 0
    this.record = 0
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
      DefaultSettings.snekSize,
      DefaultSettings.snekSize
    )
  }

  showPoints = (): void => {
    this.context.font = `${DefaultSettings.width / 2.2}px Marker Felt`
    this.context.fillStyle = '#FFFFFF'
    this.context.fillText(`Points: ${this.points}`, 15, 50)
  }

  showGameMode = (game: Game): void => {
    this.context.font = `${DefaultSettings.width / 2.2}px Marker Felt`
    this.context.fillStyle = '#FFFFFF'
    this.context.fillText(
      `Gamemode: ${game.gameMode}`,
      DefaultSettings.width * 10 - 250,
      DefaultSettings.width * 10 - 15
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
    document.body.prepend(this.canvas)
    this.repositionApple()
    this.drawApple()
  }
}

export default Playground
