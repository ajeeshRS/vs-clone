import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import HeroImage from "../public/HeroImage.png";
import Image from "next/image";

const poppins = Poppins({
  weight: ["100", "400", "500", "700"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#5A00E8] via-slate-900 to-gray-900 flex min-h-screen flex-col items-center justify-between px-44 py-16">
      {/* navbar */}
      <Navbar />
      {/* hero section */}
      <div
        className={`${poppins.className} w-full flex flex-col h-fit items-center justify-center pt-24`}
      >
        <p className="text-[#E2EAFF] font-medium text-5xl py-1">The No-Code</p>
        <p className="text-[#88A9FF] font-medium text-5xl py-1">
          AI automations platform
        </p>
        <p className="text-[#C2D2FF] text-center py-4 text-lg">
          An integrated framework of no-code, low-code, and out of the box
          <br /> generative AI solutions to build AI search engines, assistants,
          <br /> chatbots, and automations.{" "}
        </p>
        <div className="w-full flex items-center justify-center text-white py-4">
          <button className="bg-gradient-to-r from-[#4B2398] via-[#4169AB] to-[#2E7DD6] px-5 py-2 text-[15px] rounded-full mx-2">
            Get started
          </button>
          <button className="px-5 py-2 text-[15px] rounded-full mx-2">
            Book a demo{" "}
          </button>{" "}
        </div>
        <Image className="py-10" src={HeroImage} alt="hero-img" />
      </div>
    </main>
  );
}
