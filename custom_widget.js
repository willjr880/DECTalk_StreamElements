const ServiceURL = "";
const ServiceAPIKey = "";
const IncludeDisplayName = true; // "(DisplayName) Says: " will be prepended before the text
const PollRate = 5000

let ttsQueueArray = [];
let ttsPlaying = false;
let theQueue;

function checkQueue() {
  if (ttsQueueArray.length == 0) {
  	clearInterval(theQueue);
    return;
  }
  
  if (ttsPlaying == false) {
    speak(ttsQueueArray.shift());
  }
}
 
function speak(text) {
  let ServiceURLSlash = (ServiceURL.slice(-1) == "/") ? ServiceURL : ServiceURL + "/";
  const src = ServiceURLSlash + "say" + "?text=" + text + "&apikey=" + ServiceAPIKey;
  const audio = new Audio(src);
  ttsPlaying = true;
  audio.play();
  audio.addEventListener("ended", () => {
    ttsPlaying = false;
  })
}

window.addEventListener("onEventReceived", function ( obj ) {
	let data = obj.detail.event.data
    if( data.text.indexOf("!tts ") !== 0 ) {
        return;
    }
    
    let text = (IncludeDisplayName) ? data.displayName + " says: " + data.text.substring(5) : data.text.substring(5);
	ttsQueueArray.push(text);
  	theQueue = setInterval(checkQueue, PollRate);
});
