function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const refs = {
    body: document.querySelector("body"),
    startButton: document.querySelector("button[data-start]"),
    stopButton: document.querySelector("button[data-stop]")
  };
  let timeId = null;
  refs.startButton.addEventListener("click",OnClickStart);
  refs.stopButton.addEventListener("click",OnClickStop);
  function OnClickStart(){
    refs.startButton.setAttribute("disabled","true");
    refs.stopButton.removeAttribute("disabled");
    timeId = setInterval(()=>{
     refs.body.style.backgroundColor = getRandomHexColor();   
    },1000)
  };
  function OnClickStop(){
    refs.stopButton.setAttribute("disabled","true");
    refs.startButton.removeAttribute("disabled");
    clearInterval(timeId)
  }

