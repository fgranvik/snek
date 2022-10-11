import Gui from './Gui'
import Playground from './Playground'
import Snek, { Direction } from './Snek'

export enum DefaultSettings {
  width = 64,
  height = 64,
  speed = DefaultSettings.width / 2,
  gameLoop = 10,
  snekSize = DefaultSettings.width / 2
}

class Game {
  playground: Playground
  snek: Snek
  gui: Gui
  timer: number
  points: number
  isRunning: boolean
  gameSpeed: number

  constructor() {
    this.playground = new Playground()
    this.snek = new Snek()
    this.gui = new Gui()
    this.timer = 0
    this.points = 0
    this.isRunning = false
    this.gameSpeed = this.snek.speed
    this.controls()
  }

  reset = (): void => {
    this.isRunning = !this.isRunning

    if (!this.snek.isAlive) {
      this.snek.direction = Direction.Down
      this.playground.points = 0
      this.snek.head = { X: 0, Y: 0 }
      this.snek.tail = []
      this.snek.speed = DefaultSettings.gameLoop
      this.snek.isAlive = true
      this.isRunning = true
    }
  }

  run = (timer: number): void => {
    requestAnimationFrame(() => {
      timer += 1

      if (this.isRunning && this.snek.isAlive) {
        if (timer >= this.snek.speed) {
          this.snek.move(this.playground)
          timer = 0
        }
      } else {
        if (this.snek.isAlive) {
          this.gui.intro(this.playground)
        } else {
          this.gui.uDead()
        }
      }

      this.run(timer)
    })
  }

  controls = (): void => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyP':
          this.reset()
          break
        case 'ArrowDown':
          if (this.snek.previousDirection == Direction.Up) return
          this.snek.direction = Direction.Down
          break
        case 'ArrowUp':
          if (this.snek.previousDirection == Direction.Down) return
          this.snek.direction = Direction.Up
          break
        case 'ArrowRight':
          if (this.snek.previousDirection == Direction.Left) return
          this.snek.direction = Direction.Right
          break
        case 'ArrowLeft':
          if (this.snek.previousDirection == Direction.Right) return
          this.snek.direction = Direction.Left
          break
      }
    })
  }

  init = (): void => {
    this.playground.init()
    this.snek.init(this.playground)

    this.run(this.timer)
  }
}

export default Game

const game = new Game()
game.init()
