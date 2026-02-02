import { useRef, useState } from "react";
import videoSrc from "./video.mp4";

export default function UseRef02() {
  const video = useRef<HTMLVideoElement>(null); // sempre começa com null
  const [play, setPlay] = useState(false);

  function handlePlay() {
    // if (video.current) {
    //   if (play) {
    //     video.current.pause();
    //   } else {
    //     video.current.play();
    //   }
    // }

    if (!video.current) return;
    video.current[play ? "pause" : "play"]();
  }

  function forwards() {
    // if (video.current) {
    //   video.current.currentTime += 2;
    // }

    if (!video.current) return;
    video.current.currentTime += 2;
  }

  function changePlaybackRate(speed: number) {
    if (!video.current) return;
    video.current.playbackRate = speed;
  }

  async function pictureInPicture() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current.requestPictureInPicture();
    }
  }

  function mute() {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
  }

  return (
    <div>
      <div className="flex gap-4 ">
        <button onClick={handlePlay}>{play ? "Pause" : "Play"}</button>
        <button onClick={forwards}>+ 2s</button>
        <button onClick={() => changePlaybackRate(1)}>1x</button>
        <button onClick={() => changePlaybackRate(2)}>2x</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={mute}>Mute</button>
      </div>
      <video
        controls
        ref={video}
        src={videoSrc}
        onPlay={() => setPlay(true)}
        onPause={() => setPlay(false)}
      ></video>
    </div>
  );
}
