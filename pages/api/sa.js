import React, { useEffect, useState } from 'react';

const ReadOutSpeech = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  // Function to load voices
  const loadVoices = () => {
    const allVoices = window.speechSynthesis.getVoices();
    setVoices(allVoices);

    // Try to find a female voice (this may vary depending on the browser and OS)
    const femaleVoice = allVoices.find(voice => voice.name.toLowerCase().includes('female'));
    
    // If a female voice is found, use it; otherwise, fallback to the first available voice
    setSelectedVoice(femaleVoice || allVoices[0]);
  };

  // Speak text using the selected voice
  const speakText = () => {
    if (!selectedVoice) return;

    const utterance = new SpeechSynthesisUtterance();
    const bodyText = document.body.innerText;

    // Set the properties of the speech
    utterance.text = bodyText;
    utterance.voice = selectedVoice;  // Set the selected female voice
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    // Start speaking
    window.speechSynthesis.speak(utterance);
  };

  // Stop the speech
  const stopSpeech = () => {
    window.speechSynthesis.cancel();  // Stop all speech immediately
  };

  // Load voices on component mount and also handle voice changes
  useEffect(() => {
    loadVoices();

    // Event listener to handle when voices are changed (especially for Chrome)
    const voicesChangedHandler = () => {
      loadVoices();
    };
    
    window.speechSynthesis.onvoiceschanged = voicesChangedHandler;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;  // Cleanup listener
    };
  }, []);

  return (
    <div>
      <h1>Read Out Speech with Female Voice</h1>
      <p>This is some text on the page. Press the button to hear it read out loud with a female voice.</p>

      <button onClick={speakText}>Read Out Page</button>
      <button onClick={stopSpeech}>Stop Speech</button>

      <div>
        <h3>Available Voices</h3>
        <ul>
          {voices.map((voice, index) => (
            <li key={index}>{voice.name} ({voice.lang})</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReadOutSpeech;
