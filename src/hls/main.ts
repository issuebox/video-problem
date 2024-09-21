import Hls from "hls.js";
const video = document.getElementById("video") as HTMLVideoElement;

document.querySelector("#play")!.addEventListener("click", () => {
  video.play();
});
document.querySelector("#pause")!.addEventListener("click", () => {
  video.pause();
});
const videoSrc = "/media/manifest.m3u8";
if (Hls.isSupported()) {
  var hls = new Hls();
  hls.on(Hls.Events.ERROR, function (event, data) {
    console.error("Error", event, data);
  });
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = videoSrc;
}
