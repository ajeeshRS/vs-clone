import Image from 'next/image';
import { llms } from '@/utils/data';

export default function LLMs() {
  return (
    <div className="w-full flex flex-col items-center my-10">
      <p className="bg-gradient-to-b bg-clip-text text-transparent from-[#EAE3FF] to-[#BBA1FF] inline-block p-1 font-medium sm:text-4xl text-3xl text-center">
        Large language models
      </p>
      <p className="text-[#E5DDFC] py-4 text-sm text-center">
        Access the latest models through the VectorShift platform
      </p>
      <div className="w-full sm:flex grid grid-cols-2 gap-3 items-center justify-center py-10">
        {llms.map((llm, i) => (
          <div
            key={i}
            className={`flex flex-col justify-center items-center sm:mx-10 mx-3 ${
              i === llms.length - 1
                ? 'col-span-2 sm:col-span-1 justify-self-center'
                : ''
            }`}
          >
            <Image
              src={llm.icon}
              alt={`${llm.text}-icon`}
              className="w-14 h-14 bg-white p-1 rounded-xl"
            />
            <p className="py-2 text-[#E5DDFC]">{llm.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
