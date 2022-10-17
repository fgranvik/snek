class MusicPlayer {
  isPlaying: boolean
  audioContext: AudioContext | undefined
  audioElement: HTMLAudioElement | undefined
  track: any

  constructor() {
    this.isPlaying = false
    this.init
  }

  toggle = (): void => {
    // check if context is in suspended state (autoplay policy)
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume()
    }

    if (this.isPlaying === false && this.audioElement) {
      debugger
      this.audioElement.play()
      this.isPlaying = true
    } else if (this.isPlaying === true && this.audioElement) {
      debugger
      this.audioElement.pause()
      this.isPlaying = false
    }
  }

  init = (): void => {
    this.audioContext = new AudioContext() as AudioContext
    const audioElement = document.querySelector('audio') as HTMLAudioElement

    if (audioElement) {
      this.audioElement = audioElement
      this.track = this.audioContext.createMediaElementSource(this.audioElement)
    }
    const gainNode = this.audioContext.createGain()
    gainNode.gain.value = 1

    this.track.connect(gainNode).connect(this.audioContext.destination)
  }
}

export default MusicPlayer
