export const playTTSMessage = (message: string, rate: number = 1.0) => {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.volume = 0.9;
    utterance.rate = rate;

    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find(
      (voice) => voice.lang.startsWith("id") || voice.lang.includes("IND"),
    );
    if (idVoice) {
      utterance.voice = idVoice;
      utterance.lang = "id-ID";
    } else {
      utterance.lang = "id-ID";
    }

    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error("TTS speech synthesis failed:", error);
  }
};
