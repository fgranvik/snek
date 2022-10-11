import { DefaultSettings } from './app'
import Playground from './Playground'

class Gui {
  context: CanvasRenderingContext2D | any

  intro = (playground: Playground): void => {
    this.context = playground.context
    // This is
    this.context.font = `${DefaultSettings.width}px Marker Felt`
    this.context.fillStyle = '#FFFFFF'
    this.context.fillText(
      'this is',
      DefaultSettings.width * 10 * 0.2,
      DefaultSettings.height * 10 * 0.2 - 30
    )

    // Snek
    this.context.font = `${DefaultSettings.height * 10 * 0.35}px Marker Felt`
    this.context.strokeStyle = 'orange'
    this.context.lineWidth = DefaultSettings.width * 10 * 0.06
    this.context.strokeText(
      'SNEK',
      DefaultSettings.width * 10 * 0.1,
      DefaultSettings.height * 10 * 0.5
    )
    this.context.fillText(
      'SNEK',
      DefaultSettings.width * 10 * 0.1,
      DefaultSettings.height * 10 * 0.5
    )

    // Start
    this.context.font = `${DefaultSettings.height * 10 * 0.1}px Marker Felt`
    this.context.fillText(
      'Press `P` to play',
      DefaultSettings.width * 10 * 0.16,
      DefaultSettings.height * 10 * 0.7
    )

    // Instructions
    this.context.font = `${DefaultSettings.height * 10 * 0.05}px Marker Felt`
    this.context.fillText(
      'Use arrow keys to control your snek',
      DefaultSettings.width * 10 * 0.1,
      DefaultSettings.height * 10 - 20
    )
  }

  uDead = (): void => {
    // Snek
    this.context.font = `${DefaultSettings.height * 3}px Marker Felt`

    this.context.strokeStyle = 'orange'
    this.context.lineWidth = DefaultSettings.width * 10 * 0.06
    this.context.strokeText(
      'u dead!',
      DefaultSettings.width * 10 * 0.1,
      DefaultSettings.height * 10 * 0.5
    )
    this.context.fillText(
      'u dead!',
      DefaultSettings.width * 10 * 0.1,
      DefaultSettings.height * 10 * 0.5
    )

    // Start
    this.context.fillStyle = '#FFFFFF'
    this.context.font = `${DefaultSettings.height * 0.7}px Marker Felt`
    this.context.fillText(
      'Press `P` to play again..',
      DefaultSettings.width * 10 * 0.16,
      DefaultSettings.height * 10 * 0.7
    )
  }
}

export default Gui