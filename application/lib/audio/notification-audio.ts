type OscType = OscillatorType;

interface ToneOptions {
  frequency: number;
  type?: OscType;
  startTime: number;
  duration: number;
  volume?: number;
  endVolume?: number;
}

export class NotificationSound {
  private ctx: AudioContext | null = null;
  private mainVolume: GainNode | null = null;

  constructor(volume: number = 0.8) {
    try {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;

      this.ctx = new AudioContextClass();
      if (this.ctx.state == "suspended") {
        this.ctx.resume();
      }
      this.mainVolume = this.ctx.createGain();
      this.mainVolume.gain.setValueAtTime(volume * 0.15, this.ctx.currentTime);

      this.mainVolume.connect(this.ctx.destination);
    } catch (error) {
      console.error("Failed to initialize audio context:", error);
    }
  }

  private get audio() {
    if (!this.ctx || !this.mainVolume) {
      return null;
    }

    return {
      ctx: this.ctx,
      mainVolume: this.mainVolume,
    };
  }

  private createTone({
    frequency,
    type = "sine",
    startTime,
    duration,
    volume = 0.3,
    endVolume = 0.001,
  }: ToneOptions) {
    const audio = this.audio;
    if (!audio) return;

    const { ctx, mainVolume } = audio;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, startTime);

    gain.gain.setValueAtTime(volume, startTime);

    gain.gain.exponentialRampToValueAtTime(endVolume, startTime + duration);

    osc.connect(gain);
    gain.connect(mainVolume);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  playCoinSound() {
    const audio = this.audio;
    if (!audio) return;

    const now = audio.ctx.currentTime;

    const notes = [
      { frequency: 987.77, at: now, duration: 0.35 },
      { frequency: 1318.51, at: now + 0.08, duration: 0.27 },
      { frequency: 1174.66, at: now, duration: 0.35 },
      { frequency: 1567.98, at: now + 0.08, duration: 0.27 },
    ];

    notes.forEach((note) => {
      this.createTone({
        frequency: note.frequency,
        startTime: note.at,
        duration: note.duration,
        volume: 1,
      });
    });
  }

  playBellSound() {
    const audio = this.audio;
    if (!audio) return;

    const now = audio.ctx.currentTime;

    const frequencies = [880, 1200, 1500, 2200];

    frequencies.forEach((frequency, index) => {
      this.createTone({
        frequency,
        type: "sine",
        startTime: now,
        duration: 0.8 / (index + 1),
        volume: 0.3 / (index + 1),
      });
    });
  }
  playSuccessSound() {
    const audio = this.audio;
    if (!audio) return;

    const now = audio.ctx.currentTime;

    const notes = [
      { frequency: 523.25, offset: 0 }, // C5
      { frequency: 659.25, offset: 0.08 }, // E5
      { frequency: 783.99, offset: 0.16 }, // G5
      { frequency: 1046.5, offset: 0.24 }, // C6
    ];

    notes.forEach((note, index) => {
      this.createTone({
        frequency: note.frequency,
        type: "triangle",
        startTime: now + note.offset,
        duration: 0.45,
        volume: 0.45 - index * 0.05,
      });
    });

    // sparkle layer biar lebih satisfying
    this.createTone({
      frequency: 1567.98,
      type: "sine",
      startTime: now + 0.28,
      duration: 0.25,
      volume: 0.2,
    });
  }
  playSoundChime() {
    const audio = this.audio;
    if (!audio) return;

    const now = audio.ctx.currentTime;

    const notes = [523.25, 659.25, 783.99, 1046.5];

    notes.forEach((frequency, index) => {
      const startOffset = index * 0.08;

      this.createTone({
        frequency,
        type: "triangle",
        startTime: now + startOffset,
        duration: 0.5,
        volume: 0.5,
      });
    });
  }

  async resume() {
    if (this.ctx?.state === "suspended") {
      await this.ctx.resume();
    }
  }
}
