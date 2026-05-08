const pageBackrground = document.body
const zone1 = document.getElementById("zone1");
const zone2 = document.getElementById("zone2");
const zone3 = document.getElementById("zone3");

// timer
let timeLeft = 3;
const timerEl = document.getElementById("timer");
timerEl.textContent = "Disarmed";
let interval; // store interval here

let systemStatus = "disarmed";
let zoneState = document.getElementById("zoneState");
// 0 = closed, 1 = open
zoneState = 0;

console.log(zoneState, systemStatus);

zone1.addEventListener("click", () => {
  zone1.style.backgroundColor = "red";
  setTimeout(() => {
    zone1.style.backgroundColor = "lightblue";
    zoneState = 1;
  }, 3000);
    if (zoneState == 1 && systemStatus == "armed") {
      console.log("ALARM");
        pageBackrground.style.background = "red"
        timerEl.textContent = "ALARM!"
        timerEl.style.color = "white"

    }
  console.log(zoneState, systemStatus);
});

// arming ans diarming buttons
const armBtn = document.getElementById("arm");
const disarmBtn = document.getElementById("disarm");


const countDown = () => {
  clearInterval(interval); // prevent multiple timers

  interval = setInterval(() => {
    console.log(timeLeft);
    timerEl.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      timerEl.textContent = "Armed";
      timerEl.style.color = "red";
      systemStatus = "armed";
      zoneState = 1;
    }   

    console.log(zoneState, systemStatus);
  }, 1000);
};

armBtn.addEventListener("click", countDown);

disarmBtn.addEventListener("click", () => {
  timerEl.textContent = "Disarmed";
  timerEl.style.color = "black";
  systemStatus = "disarmed";
  zoneState = 0;
  timeLeft = 3;
  pageBackrground.style.background = 'white';
  console.log(zoneState, systemStatus);
});

