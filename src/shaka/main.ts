import shaka from "shaka-player";
import "shaka-player/dist/controls.css";
const initPlayer = async () => {
  shaka.polyfill.installAll();
  if (!shaka.Player.isBrowserSupported()) {
    console.error("Browser not supported!");
    return;
  }

  const manifest = "/media/manifest.m3u8";

  const video = document.getElementById("video") as HTMLVideoElement;
  const player = new shaka.Player();
  await player.attach(video);
  await player.load(manifest);
};

initPlayer();
