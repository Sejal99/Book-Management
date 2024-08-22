import Image from "next/image";
import Navbar from "./(Components)/Navbar";
import HomePage from "./(Components)/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen ">

    <HomePage/>
  </div>
  );
}
