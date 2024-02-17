import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconError from "../img/icon-error.svg";


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
            iconUrl: iconError,
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

const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]")
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

// функція, що передається в коллбек інтервалу
// приймає агргумент id інтервалу для видалення його при умові коли таймер обнулиться
function getTimer(intervalId) {
    const timerDateStamp = userSelectedDate.getTime() - Date.now();
    const timerDate = convertMs(timerDateStamp);
    days.textContent = `${timerDate.days}`;
    hours.textContent = `${timerDate.hours}`;
    minutes.textContent = `${timerDate.minutes}`;
    seconds.textContent = `${timerDate.seconds}`;
  
if (timerDate.days === "00"
    && timerDate.hours === "00"
    && timerDate.minutes === "00"
    && timerDate.seconds === "00") {
    clearInterval(intervalId);
}
}
// функція, що спрацьовує після нажаття на кнопку Start
// робить кнопку і поле вводу неактивними
// запускає таймер функцією setInterval, що приймає коллбек функцію і delay
function startTimer() {
  btn.disabled = true;
  isDisabled();
  const intervalId = setInterval(() => getTimer(intervalId), 1000);

}

// функція додавання 0 перед числом до таймера
function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}
//функція для перевірки чи є атрибут disabled, 
//щоб мати можливість додати до input в моб.версії
function isDisabled() {
  const input = document.querySelectorAll("input")
  input.forEach(el => {
    if (!el.hasAttribute("disabled")) {
    el.disabled = true;
  } 
  });
}

// слухач до кнопки старт таймера
btn.addEventListener("click", startTimer);


