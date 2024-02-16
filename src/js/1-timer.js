import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const selector = document.querySelector("#datetime-picker");

const btn = document.querySelector("button");
let userSelectedDate = "";
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates){
        if (selectedDates[0].getTime() > options.defaultDate.getTime()){
            btn.disabled = false;
            userSelectedDate = selectedDates[0];
            console.log(selectedDates[0]);
        } else {
          btn.disabled = true;
          iziToast.show({
            message: "Please choose a date in the future",
            theme: 'dark',
            messageColor: '#ffffff',
            messageSize: '16px',
            backgroundColor: '#ef4040',
            position: 'topRight',
            // timeout: ''
          });  
        }
        
    },
};

flatpickr(selector, options);



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const days = document.querySelector("[data-days");
const hours = document.querySelector("[data-hours]")
const minutes = document.querySelector("[data-minutes");
const seconds = document.querySelector("[data-seconds");

function getTimer() {
    const timerDateStamp = userSelectedDate.getTime() - Date.now();
    const timerDate = convertMs(timerDateStamp);
    days.textContent = `${timerDate.days}`;
    hours.textContent = `${timerDate.hours}`;
    minutes.textContent = `${timerDate.minutes}`;
    seconds.textContent = `${timerDate.seconds}`;
}

function startTimer() {
    btn.disabled = true;
    selector.disabled = true;
  // console.log(userSelectedDate);
  
    setInterval(() => getTimer()
  , 1000)
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}
// console.log(addLeadingZero(5))

btn.addEventListener("click", startTimer);


