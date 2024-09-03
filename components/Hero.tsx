import { poppins } from '@/utils/font';
import Image from 'next/image';
import HeroImage from '../public/HeroImage.png';

export default function Hero() {
  return (
    <div
      className={`${poppins.className} w-full flex flex-col h-fit items-center justify-center sm:pt-24 pt-10 sm:px-44 px-5`}
    >
      <p className="text-[#E2EAFF] font-medium sm:text-5xl text-3xl py-1">
        The No-Code
      </p>
      <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#dae5fa] to-[#6790FF]  inline-block  font-medium sm:text-5xl text-3xl text-center py-1">
        AI automations platform
      </p>
      <p className="text-[#C2D2FF] text-center py-4 sm:text-lg text-md">
        An integrated framework of no-code, low-code, and out of the box
        <br /> generative AI solutions to build AI search engines, assistants,
        <br /> chatbots, and automations.{' '}
      </p>
      <div className="w-full flex sm:flex-row flex-col items-center justify-center text-white py-4">
        <button className="bg-gradient-to-r from-[#4B2398] via-[#4169AB] to-[#2E7DD6] sm:px-5 px-20 py-2 text-[15px] rounded-full mx-2">
          Get started
        </button>
        <button className="px-5 py-2 sm:pt-0 pt-5  sm:text-[15px] text-xs rounded-full mx-2 hover:underline">
          Book a demo{' '}
        </button>{' '}
      </div>
      <Image className="py-10" src={HeroImage} alt="hero-img" />
    </div>
  );
}
