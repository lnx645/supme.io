/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// A synthesizer using Web Audio API to play Duolingo-style gamified sound effects
export default class SoundController {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Cute pop when tapping a button
  playTap() {
    try {
      const ctx = this.initCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }

  // Duolingo Success Ding sound (bright double-tone: C5 then G5, very fast and pleasant)
  playSuccess() {
    try {
      const ctx = this.initCtx();
      const playTone = (freq: number, start: number, duration: number, isSine: boolean = true) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = isSine ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.12, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + duration);
      };

      const now = ctx.currentTime;
      // Rising tones
      playTone(523.25, now, 0.12); // C5
      playTone(783.99, now + 0.08, 0.25); // G5
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }

  // Level up sound: rapid ascending arpeggio (C5 -> E5 -> G5 -> C6)
  playLevelUp() {
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        
        gain.gain.setValueAtTime(idx === 3 ? 0.12 : 0.08, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + (idx === 3 ? 0.35 : 0.15));

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + (idx === 3 ? 0.4 : 0.2));
      });
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }

  // Error buzzer: low dual-tone vibrating sound
  playError() {
    try {
      const ctx = this.initCtx();
      const now = ctx.currentTime;
      
      const createBuzzer = (freq: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now);
        
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.4);
      };

      createBuzzer(130.81); // C3
      createBuzzer(127.0);  // slightly detuned
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }
}

export const sounds = new SoundController();
