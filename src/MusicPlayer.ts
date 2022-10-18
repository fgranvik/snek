class MusicPlayer {
  isPlaying: boolean
  audioContext: AudioContext | undefined
  musicElement: HTMLAudioElement | undefined
  slurpElement: HTMLAudioElement | undefined
  musicTrack: any
  slurpTrack: any
  gainNode?: GainNode

  constructor() {
    this.isPlaying = false
    this.init
  }

  toggle = (): void => {
    // check if context is in suspended state (autoplay policy)
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume()
    }

    if (this.isPlaying === false && this.musicElement) {
      this.musicElement.play()
      this.isPlaying = true
    } else if (this.isPlaying === true && this.musicElement) {
      this.musicElement.pause()
      this.isPlaying = false
    }
  }

  slurp = (): void => {
    if (this.slurpElement) this.slurpElement.play()
  }

  init = (): void => {
    this.audioContext = new AudioContext() as AudioContext

    this.musicElement = document.querySelector('audio') as HTMLAudioElement
    this.slurpElement = document.querySelector(
      'audio#slurp'
    ) as HTMLAudioElement

    this.musicTrack = this.audioContext.createMediaElementSource(
      this.musicElement
    )
    this.slurpTrack = this.audioContext.createMediaElementSource(
      this.slurpElement
    )

    this.gainNode = this.audioContext.createGain()
    this.gainNode.gain.value = 1

    this.slurpTrack
      .connect(this.gainNode)
      .connect(this.audioContext.destination)

    this.musicTrack
      .connect(this.gainNode)
      .connect(this.audioContext.destination)
  }
}

export default MusicPlayer
