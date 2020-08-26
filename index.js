import { handleResult } from './handlers'

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

function start() {
  if (!('SpeechRecognition' in window && window.SpeechRecognition)) {
    return
  }
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true
  recognition.interimResults = true
  recognition.onresult = handleResult
  recognition.start()
}

start()