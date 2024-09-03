import { platformCardsData } from '@/utils/data';
import { ChevronRight } from 'lucide-react';

export default function PlatformCards() {
  return (
    <div className="w-full flex sm:flex-row flex-col sm:px-8 px-2 justify-center">
      {/* cards */}
      {platformCardsData.map((platform, i) => (
        <div
          key={i}
          className="sm:h-[55vh] h-[40vh] sm:w-2/6 w-6/6  hover:shadow-md hover:shadow-violet-800 transition-shadow duration-200 ease-in-out  bg-[#0F0922] bg-opacity-40 flex flex-col sm:mx-5 mx-2 rounded-xl text-white items-start justify-between sm:p-10 p-3 group sm:my-0 my-3"
        >
          <p className="sm:text-2xl text-xl bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block font-medium">
            {platform.title}
          </p>
          <p className="text-[#E5DDFC] sm:text-md text-sm py-2 leading-5">
            {platform.content}
          </p>
          <button className="flex items-center sm:text-lg text-md py-4 ">
            Learn more{' '}
            <ChevronRight className="w-5 h-5 mx-2 group-hover:translate-x-1 transition-transform duration-200 ease-in-out" />
          </button>
        </div>
      ))}
    </div>
  );
}
