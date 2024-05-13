import React from "react";
import img1 from "../assets/img1.jpg";
import shuffleIcon from "../assets/shuffle.png";
import prevIcon from "../assets/prev.png";
import playIcon from "../assets/play.png";
import playsIcon from "../assets/plays.png";
import nextIcon from "../assets/next.png";
import loopIcon from "../assets/loop.png";
import micIcon from "../assets/mic.png";
import queueIcon from "../assets/queue.png";
import speakerIcon from "../assets/speaker.png";
import volumeIcon from "../assets/volume.png";
import miniIcon from "../assets/mini-player.png";
import zoomIcon from "../assets/zoom.png";
import Image from "next/image";

const songsData = [
  {
    id: 0,
    name: "Song One",
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00",
  },
];

export default function Player() {
  const { name, desc } = songsData[0];
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <Image className="w-12" src={img1} alt="" />
        <div>
          <p>{name}</p>
          <p>{desc}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <Image
            className="w-4 cursor-pointer"
            src={shuffleIcon}
            alt="shuffle icon"
          />
          <Image
            className="w-4 cursor-pointer"
            src={prevIcon}
            alt="shuffle icon"
          />
          <Image
            className="w-4 cursor-pointer"
            src={playIcon}
            alt="shuffle icon"
          />
          <Image
            className="w-4 cursor-pointer"
            src={nextIcon}
            alt="shuffle icon"
          />
          <Image
            className="w-4 cursor-pointer"
            src={loopIcon}
            alt="shuffle icon"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>1:06</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-full bg-green-800 rounded-full" />
          </div>
          <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <Image className="w-4" src={playsIcon} alt="plays icon" />
        <Image className="w-4" src={micIcon} alt="mic icon" />
        <Image className="w-4" src={queueIcon} alt="queueIcon" />
        <Image className="w-4" src={speakerIcon} alt="speakerIcon" />
        <Image className="w-4" src={volumeIcon} alt="volumeIcon" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <Image className="w-4" src={miniIcon} alt="miniIcon" />
        <Image className="w-4" src={zoomIcon} alt="zoom icon" />
      </div>
    </div>
  );
}
