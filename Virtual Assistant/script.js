let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

// make a speak function so that our assistant speak
function speak(text)
{
  let text_speak = new SpeechSynthesisUtterance(text)
  text_speak.pitch=1
  text_speak.rate=1
  text_speak.volume=1
  text_speak.lang= "en-GB"
  window.speechSynthesis.speak(text_speak)
}

// adding wishMe function by which assistant greets you acc to the time automatically 
function wishMe()
{
  let day=new Date()
  let hours=day.getHours()
   if (hours>=0 && hours<12)
   {
      speak("Good Morning")
   }
   else if(hours>=12 && hours<4)
   {
      speak("Good afternoon")  
   }
   else if(hours>=4 && hours<10)
   {
      speak("Good evening")
   }
   else{
    speak("Good Night")
   }
} 
 window.addEventListener('load',()=>{
    wishMe()
 })

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
   let currentIndex = event.resultIndex
   let transcript =event.results[currentIndex][0].transcript
   content.innerText=transcript
   takeCommand(transcript.toLowerCase()) 
} 
btn.addEventListener("click",()=>{
   recognition.start()
   btn.style.display="none"
   voice.style.display="block"
})
function takeCommand(message)
{
   btn.style.display="flex"
   voice.style.display="none"
  if(message.includes("hello")||message.includes("hii buddy"))
  {
   speak("hello, what can I help you")
  }
  else if(message.includes("Good Morning"))
  {
   speak("good morning, what can I help you")
  }
  else if(message.includes("Good Afternoon"))
  {
   speak("good afternoon, what can I help you")
  }
  else if(message.includes("Good Night"))
  {
   speak("good night, what can I help you")
  }
  else if(message.includes("who are you"))
  {
   speak("I am virtual assistant, created by Ritika Garg")
  }
  else if(message.includes("open youtube"))
  {
   speak("Opening Youtube ")
   window.open("https://www.youtube.com/","_blank")
  }
  else if(message.includes("open Google"))
  {
    speak("Opening Google ")
    window.open("https://www.google.com/","_blank")
  }
  else if(message.includes("open Firefox Browser"))
  {
      speak("Opening Firefox Browser ")
      window.open("https://www.mozilla.org/en-US/firefox/","_blank")
  }
  else if(message.includes("open yt music"))
  {
      speak("Opening yt music ")
      window.open("https://music.youtube.com/","_blank")
  }    
  else if(message.includes("open GitHub"))
  {
    speak("Opening  GitHub")
    window.open("https://github.com/ritikagarg2","_blank")
  }
  else if(message.includes("open LinkedIn"))
  {
    speak("Opening LinkedIn ")
    window.open("https://www.linkedin.com/in/ritika-garg-5a086b252/","_blank")
  } 
  else if(message.includes("open Calculator"))
   {
     speak("Opening Calculator ")
     window.open("calculator://")
   }  
   else if(message.includes("time"))
   {
      let time = new Date().toLocalString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
   }
   else if(message.includes("date"))
   {
      let date = new Date().toLocalString(undefined,{day:"numeric",month:"short"})
      speak(date)
   }  
  else{
   let finalText="this is what i found on internet regarding" + message.replace("buddy","") || message.replace("buddy","")
   speak(finalText)
   window.open(`https://www.google.com/search?q=${message.replace("buddy","")}`,"_blank")
  }     
}




