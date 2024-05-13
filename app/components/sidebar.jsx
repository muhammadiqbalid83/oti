import Image from "next/image";
import homeIcon from "../assets/home.png";
import searchIcon from "../assets/search.png";
import stackIcon from "../assets/stack.png";
import arrowIcon from "../assets/arrow.png";
import plusIcon from "../assets/plus.png";

export default function Sidebar() {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="p-[10px]">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image className="w-6" src={homeIcon} alt="Home Icon" />
            <p className="font-bold">Home</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <Image className="w-6" src={searchIcon} alt="Search Icon" />
            <p className="font-bold">Search</p>
          </div>
        </div>

        <div className="bg-[#121212] h-[85%] rounded">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image className="w-6" src={stackIcon} alt="Stack Icon" />
              <p className="font-semibold">Perpustakaanmu</p>
            </div>
            <div className="flex items-center gap-3">
              <Image className="w-6" src={arrowIcon} alt="Stack Icon" />
              <Image className="w-6" src={plusIcon} alt="Plus Icon" />
            </div>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Buat playlist pertamamu</h1>
            <p className="font-light">
              Insya Allah mudah, kita akan membantumu
            </p>
            <p className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Buat Playlist
            </p>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Cari podcast untuk diikuti</h1>
            <p className="font-light">
              Insya Allah mudah, kita akan membantumu
            </p>
            <p className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Buat Playlist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
