  /**
  The following script requests access to the microphone and prints out the input onto the screen.
  Documentation on the SpeechRecognition Web API can be found at
  https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
  **/

  //Request speech regonition access, cross browser support.
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || || window.mozSpeechRecognition || window.msSpeechRecognition;
  //Create the speech recognition object.
  const recognition = new SpeechRecognition();

  //Property that defines whether results should be returned intermittently. -- Need to define whether it is random
  recognition.interimResults = true;

  //Set recognition language to english
  recognition.lang = 'en-US';

  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
      p.textContent = transcript;
      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
  });
  
  recognition.addEventListener('end', recognition.start);
  recognition.start();