function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("relogio").textContent = time;
}
setInterval(updateClock, 1000);
updateClock();