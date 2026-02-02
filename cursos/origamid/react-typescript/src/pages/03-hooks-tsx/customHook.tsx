import { useEffect, useRef } from "react";
import videoSrc from "./video.mp4";
import useLocalStorage from "./useLocalStorage";

export default function CustomHook() {
  const video = useRef<HTMLVideoElement>(null); // sempre começa com null
  const [volume, setVolume] = useLocalStorage("volume", "0");

  // Custom hook pra salvar o volume no local storage
  useEffect(() => {
    if (!video.current) return;
    const n = Number(volume);
    if (n >= 0 && n <= 1) video.current.volume = n;
  }, [volume]);

  return (
    <div>
      <div className="flex gap-4 ">
        {volume}
        <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("0.5")}>50</button>
        <button onClick={() => setVolume("1")}>100</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
}
