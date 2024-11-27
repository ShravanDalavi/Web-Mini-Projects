const textToSpeech = () => {
    let text = document.getElementById('text-input').value;
    let selectedVoice = document.getElementById('voice-select').selectedOptions[0].getAttribute('data-name');
    let speech = new SpeechSynthesisUtterance(text);
    let voices = window.speechSynthesis.getVoices();
    speech.voice = voices.find(voice => voice.name === selectedVoice);
    window.speechSynthesis.speak(speech);
    displayAnxiety();
}

const populateVoiceList = () => {
    if (typeof speechSynthesis === 'undefined') {
        return;
    }
    let voices = speechSynthesis.getVoices();
    let voiceSelect = document.getElementById('voice-select');
    voiceSelect.innerHTML = '';
    voices.forEach(voice => {
        let option = document.createElement('option');
        option.textContent = voice.name + ' (' + voice.lang + ')';
        option.setAttribute('data-name', voice.name);
        option.setAttribute('data-lang', voice.lang);
        voiceSelect.appendChild(option);
    });
}


populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}
