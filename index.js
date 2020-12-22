function myClock() {
  let hourKata = document.getElementById("hourKata");
  let minuteKata = document.getElementById("minuteKata");
  let secondKata = document.getElementById("secondKata");
  let ticTic = document.getElementById("ticTic");
  ticTic.play();
  let date = new Date();
  let second = date.getSeconds();
  let minute = date.getMinutes();
  let hour = date.getHours();

  let secondRatio = second / 60;
  let minuteRatio = (secondRatio + minute) / 60;
  let hourRatio = (minuteRatio + hour) / 12;
  setRotation(secondKata, secondRatio);
  setRotation(minuteKata, minuteRatio);
  setRotation(hourKata, hourRatio);
}

function setRotation(element, rotation) {
  element.style.transform = `rotate(${rotation * 360}deg)`;
}
myClock();
setInterval(myClock, 1000);
