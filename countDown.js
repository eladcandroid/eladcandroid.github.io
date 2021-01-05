async function fetchCats() {
  var img = await fetch("https://aws.random.cat/meow");
  var json = await img.json();
  document.querySelector("img").src = json.file;

  document.querySelector("img").onload = function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("img").style.display = "inline";
  };
}

var countdown = function () {
  var min = +document.querySelector("#minutes").value;
  var sec = +document.querySelector("#seconds").value;
  var clock = document.querySelector("#clockmin");
  var intervalId;

  var stopCount = function () {
    clearInterval(intervalId);
  };

  var stopButton = document.getElementById("stop");
  stopButton.addEventListener("click", stopCount);

  intervalId = setInterval(function () {
    sec = sec - 1;
    if (sec < 0) {
      min = min - 1;
      sec = 59;
    }

    clock.innerText =
      (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);

    if (min < 0) {
      document.querySelector(".loader").style.display = "inline-block";
      fetchCats();
      stopCount();

      document.querySelector(".timer").style.display = "none";
    }
  }, 1000);
};

var startButton = document.getElementById("start");
startButton.addEventListener("click", countdown);
