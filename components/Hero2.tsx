import { poppins } from "@/utils/font";
import PlatformCards from "./PlatformCards";
import Image from "next/image";
import hero2img1 from '../public/hero2-images/hero2-img1.png';
import hero2img2 from '../public/hero2-images/hero2-img2.png';

export default function Hero2() {
    return (
        <div
        className={`${poppins.className} w-full flex flex-col h-fit items-center justify-center pt-24 `}
      >
        <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium sm:text-4xl text-3xl text-center sm:px-0 px-16">
          An ecosystem to build, deploy, <br />
          and manage AI applications
        </p>
        <div className="w-full flex sm:flex-row flex-col justify-center items-center sm:px-8 px-5 py-20">
          <Image
            src={hero2img1}
            alt="hero-2-img-1"
            className="rounded-xl sm:h-[90vh] h-[50vh] sm:w-2/5 w-full sm:object-cover object-fill sm:mx-6 mx-0"
          />
          <Image
            src={hero2img2}
            alt="hero-2-img-1"
            className="rounded-xl sm:h-[90vh] h-[50vh] sm:w-2/5 w-full sm:object-cover object-fill sm:mx-6 mx-0 sm:my-0 my-3"
          />
        </div>
        {/* Platform cards */}
        <PlatformCards />
      </div>    );
}