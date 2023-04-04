const selectedMinutes = document.getElementById("minutes");
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const notify = document.getElementById("notify");
let [minutes, seconds] = [selectedMinutes.value, 0];
let int = null;

selectedMinutes.onchange = () => {
  [minutes, seconds] = [selectedMinutes.value, 0];
  timer.innerHTML = `${minutes}:00`;
};

const startTimer = () => {
  if (int !== null) {
    console.log("the timer started");
    clearInterval(int);
  }
  int = setInterval(timerChange, 1000);
};

const pauseTimer = () => {
  console.log("pause clicked");
  clearInterval(int);
};

const stopTimer = () => {
  clearInterval(int);
  console.log("time stopped!");
  [minutes, seconds] = [selectedMinutes.value, 0];
  timer.innerHTML = `${minutes}:00`;
};

start.addEventListener("click", () => {
  startTimer();
});

pause.addEventListener("click", () => {
  pauseTimer();
});

stop.addEventListener("click", () => {
  stopTimer();
});

const timerChange = () => {
  if (seconds === 0) {
    seconds = 60;
    minutes--;
  }

  seconds--;

  if (minutes === -1) {
    console.log("timer done!");
    stopTimer();
    chrome.notifications.create({
      title: "Hey Hey Hey",
      message: "Time to save your project!",
      iconUrl: "../icon.png",
      type: "basic"
    })
  }

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  timer.innerHTML = `${m}:${s}`;
};

// notify.addEventListener("click", () => {
//   chrome.notifications.create({
//     title: "wowow",
//     message: "the thyme is over",
//     iconUrl: "../icon.png",
//     type: "basic"
//   })
// });
