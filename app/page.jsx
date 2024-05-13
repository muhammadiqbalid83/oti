import Display from "./components/display";
import Player from "./components/player";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />
      </div>
    </>
  );
}
