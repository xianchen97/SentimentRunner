  /**
  The following script requests access to the microphone and prints out the input onto the screen.
  Documentation on the SpeechRecognition Web API can be found at
  https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
  **/

  //Create the speech recognition object.
  console.log("hi");
	var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

  //Property that defines whether results should be returned intermittently. -- Need to define whether it is random
  recognition.interimResults = true;

  //Set recognition language to english
  recognition.lang = 'en-US';


  //Add an event listener to listen to results, when callback it returns an event.
 recognition.onresult = function(event) {
 	const transcript1 = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('');
    console.log('You said: ', event.results[0][0].transcript);
    console.log(transcript1)
    if(event.results[0].isFinal){
    	p = document.createElement('p');
    	words.appendChild(p);
    }
 };

  //Restart recognition after events.
  recognition.addEventListener('end', recognition.start);
  //Request for microphone access.
  recognition.start();
