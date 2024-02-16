// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

function createPromise(event) {
    event.preventDefault();
    console.log(event.target.state.value);
    const delay = event.target.delay.value;
    console.log(delay)
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (event.target.state.value === "fulfilled") {
                resolve(`Fulfilled promise in ${delay}ms`);
            } else {
                reject(`Rejected promise in ${delay}ms`);
            }
        }, delay);
    })
    promise
        .then(value => { 
            return iziToast.success({
            title: 'OK',
            message: value,
            position: "topRight",
            backgroundColor: "#59a10d",
            theme: "dark",
            transitionIn: "fadeInRight",
            });
        })
    .catch(error => { 
            iziToast.error({
            title: "Error",
            message: error,
            position: "topRight",
            backgroundColor: "#ef4040",
            theme: "dark",
            transitionIn: "fadeInRight",
            });
    })
    form.reset();
}


form.addEventListener("submit", createPromise);
