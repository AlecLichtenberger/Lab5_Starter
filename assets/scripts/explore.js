// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const textarea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore img');
  const synth = window.speechSynthesis;

  
  function loadVoices() {
    const voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }

  talkButton.addEventListener('click', function () {
    const text = textarea.value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedName = voiceSelect.value;
    if (selectedName && selectedName !== 'select') {
      const voices = synth.getVoices();
      const voice = voices.find((v) => v.name === selectedName);
      if (voice) utterance.voice = voice;
    }

    utterance.onstart = function () {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face open';
    };
    utterance.onend = function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}