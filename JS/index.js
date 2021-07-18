setInterval(AClockTime, 1000);
function AClockTime() {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}

setInterval(DClockTime, 1000);
function DClockTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  var am_pm = "AM";
  if (hour == 12) {
    am_pm = "PM";
  }
  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  let currentDTime = hour + ":" + min + ":" + sec + " " + am_pm;
  let Dclock = document.getElementById("Dclock");
  Dclock.innerText = currentDTime;
}
