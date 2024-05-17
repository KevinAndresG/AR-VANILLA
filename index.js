const sceneEl = document.querySelector('a-scene');
let arSystem;
const scanUi = document.getElementById("scanning-ui")
const logoSi = document.getElementById("logo-si")
const logoIg = document.getElementById("logo-ig")
let scanningLogos = ["assets/logo_si.jpg", "assets/logo_si2.jpg"]
let n = 0;
const recursive = () => {
    setTimeout(() => {
        if (n === 0) {
            scanUi.setAttribute("src", scanningLogos[n])
            n++
        } else {
            scanUi.setAttribute("src", scanningLogos[n])
            n--
        }
        recursive();
    }, 5000);
}
const startButton = document.querySelector("#example-start-button");
const stopButton = document.querySelector("#example-stop-button");
const pauseButton = document.querySelector("#example-pause-button");
const unpauseButton = document.querySelector("#example-unpause-button");
const pauseKeepVideoButton = document.querySelector("#example-pause-keep-video-button");
sceneEl.addEventListener('loaded', function () {
    arSystem = sceneEl.systems["mindar-image-system"];
});
startButton.addEventListener('click', () => {
    console.log("start");
    arSystem.start(); // start AR 
  });
stopButton.addEventListener('click', () => {
    arSystem.stop(); // stop AR 
  });
pauseButton.addEventListener('click', () => {
    arSystem.pause(); // pause AR, pause video
  });
pauseKeepVideoButton.addEventListener('click', () => {
    arSystem.pause(true); // pause AR, keep video
  });
unpauseButton.addEventListener('click', () => {
    arSystem.unpause(); // unpause AR and video
  });
const goToHome = () => {
    window.open("https://sinapsis.global/", "_blank");
};
  const goToInsta = () => {
    window.open("https://www.instagram.com/sinapsis.global/", "_blank");
};
logoSi.addEventListener("click", goToHome)
logoIg.addEventListener("click", goToInsta)
recursive();