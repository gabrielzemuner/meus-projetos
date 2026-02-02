import { useRef } from "react";
import videoSrc from "./video.mp4";

export default function UseRef01() {
  const video = useRef<HTMLVideoElement>(null); // sempre começa com null

  return (
    <div>
      <div className="flex gap-4 ">
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
}
