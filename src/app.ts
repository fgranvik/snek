import Gui from './Gui'
import Playground from './Playground'
import Snek, { Direction } from './Snek'
import MusicPlayer from './MusicPlayer'

export enum DefaultSettings {
  width = 64,
  height = 64,
  speed = DefaultSettings.width / 2,
  gameLoop = 120,
  snekSize = DefaultSettings.width / 2
}

export enum gameMode {
  easy = 'Easy',
  standard = 'Standard'
}

class Game {
  playground: Playground
  snek: Snek
  gui: Gui
  timer: number
  points: number
  isRunning: boolean
  gameSpeed: number
  musicPlayer: MusicPlayer
  keyPressed: string | undefined
  gameMode: gameMode

  constructor() {
    this.playground = new Playground()
    this.snek = new Snek()
    this.gui = new Gui()
    this.timer = Date.now()
    this.points = 0
    this.isRunning = false
    this.gameSpeed = this.snek.speed
    this.controls()
    this.musicPlayer = new MusicPlayer()
    this.gameMode = gameMode.standard
  }

  reset = (): void => {
    this.isRunning = !this.isRunning

    if (this.isRunning) {
      this.musicPlayer.init()
      this.musicPlayer.toggle()
    }

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
      const verifyTimer = Date.now()
      const diff = verifyTimer - timer

      const debug = document.querySelector('div#debug')
      if (debug) {
        debug.innerHTML = `X: ${this.snek.head.X}, Y: ${this.snek.head.Y}`
      }

      if (this.isRunning && this.snek.isAlive) {
        if (diff >= this.snek.speed) {
          this.snek.move(this)
          timer = Date.now()
        }
      } else {
        if (this.snek.isAlive) {
          this.gui.intro(this.playground)
        } else {
          this.gui.uDead(this.playground.points)
        }
      }

      this.run(timer)
    })
  }

  controls = (): void => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      this.keyPressed = e.code

      switch (e.code) {
        case 'KeyM':
          this.musicPlayer.toggle()
          break
        case 'KeyG':
          if (this.gameMode == gameMode.easy) {
            this.gameMode = gameMode.standard
          } else {
            this.gameMode = gameMode.easy
          }
          break
        case 'Space':
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
    this.snek.init(this)
    this.run(this.timer)
  }
}

export default Game

const game = new Game()
game.init()
