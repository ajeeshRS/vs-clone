import { poppins } from '@/utils/font';
import { ChevronRight } from 'lucide-react';

export default function GetStartedCard() {
  return (
    <div
      className={`${poppins.className} w-full flex h-fit items-center justify-center pt-24 sm:px-20 px-0 `}
    >
      <div className="sm:w-full w-5/6 h-80 rounded-xl border border-[#4B3F6C] relative">
        <div className="absolute inset-0 h-full w-full bg-[#140830] rounded-xl bg-[radial-gradient(#544865_1px,transparent_1px)] [background-size:40px_40px] flex flex-col justify-center items-center">
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium text-4xl text-center">
            Get started <br /> today
          </p>
          <div className="flex sm:flex-row flex-col items-center py-10">
            <button className="bg-gradient-to-r from-[#4B2398] via-[#4169AB] to-[#2E7DD6] sm:px-5 px-8 py-2 text-[15px] rounded-full mx-2 text-white">
              Get started
            </button>
            <p className="group hover:underline cursor-pointer text-white flex items-center sm:text-lg text-sm mx-3 sm:mt-0 mt-6">
              Contact sales{' '}
              <ChevronRight className="w-4 h-5 group-hover:translate-x-1 transition-transform duration-300 ease-in-out ml-2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
