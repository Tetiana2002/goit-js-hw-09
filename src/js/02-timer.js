import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const refs = {
    inputEl: document.getElementById("datetime-picker"),
    startEl: document.querySelector("[data-start]"),
    daysEl: document.querySelector("[data-days]"),
    hoursEl: document.querySelector("[data-hours]"),
    minutesEl: document.querySelector("[data-minutes]"),
    secondsEl: document.querySelector("[data-seconds]"),
    
    
}
refs.startEl.setAttribute('disabled', 'true');
let timeRange;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const dateNow = Date.now();
        timeRange = selectedDates[0] - dateNow;
        if (timeRange <= 0) {
          window.alert("Please choose a date in the future") ;
          refs.startEl.setAttribute('disabled', 'true'); 
        }
        else{
            refs.startEl.removeAttribute("disabled")
        }

        
      
    },
  };
  refs.startEl.addEventListener("click",onClickEl);
  let timeId = null;
  function onClickEl(){
timeId = setInterval(()=>{
   if (timeRange > 0) {
    addTimeMarkup(convertMs(timeRange));
    timeRange -= 1000;
   } else {
    clearInterval(timeId)
   } 
},1000)
  }
  function addTimeMarkup(dateAllTime){
const {days, hours, minutes, seconds} = dateAllTime;
refs.daysEl.textContent = addLeadingZero(days);
refs.hoursEl.textContent = addLeadingZero(hours);
refs.minutesEl.textContent = addLeadingZero(minutes);
refs.secondsEl.textContent = addLeadingZero(seconds);

  }

flatpickr(refs.inputEl,options);
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  function addLeadingZero(value){
    return value.toString().padStart(2,"0")
  }

