const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const digitalTime = document.getElementById("digital-time");

const pad = (value) => String(value).padStart(2, "0");

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();

  // Smooth movement keeps the hands aligned with the current local time.
  const secondsWithFraction = seconds + milliseconds / 1000;
  const minutesWithFraction = minutes + secondsWithFraction / 60;
  const hoursWithFraction = (hours % 12) + minutesWithFraction / 60;

  secondHand.style.transform = `translateX(-50%) rotate(${secondsWithFraction * 6}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutesWithFraction * 6}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hoursWithFraction * 30}deg)`;

  digitalTime.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  requestAnimationFrame(updateClock);
}

updateClock();
